const STORAGE_KEY = 'rutina:v1:state';
const MAX_WEEK_AGE = 8;
const DIAS_ES = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
const GROUP_TRANSITION_REST_SECONDS = 120;

/** @type {{data: any[], currentDia: string, storage: any, session: any}} */
let state = {
  data: [],
  currentDia: 'Lunes',
  storage: null,
  session: null,
};

let refs = {};

export function initRutina(dias) {
  state.data = dias;
  state.storage = loadState();

  const todayName = DIAS_ES[new Date().getDay()];
  state.currentDia = state.data.find((d) => d.dia === todayName) ? todayName : dias[0].dia;

  refs = {
    tabs: document.getElementById('day-tabs'),
    list: document.getElementById('exercise-list'),
    progressText: document.getElementById('progress-text'),
    progressBar: document.getElementById('progress-bar'),
    dayCompleteBanner: document.getElementById('day-complete-banner'),
    dayCompleteTitle: document.getElementById('day-complete-title'),
    dayCompleteDetail: document.getElementById('day-complete-detail'),
    startSessionBtn: document.getElementById('start-session-btn'),
    overlay: document.getElementById('session-overlay'),
    sessionExerciseName: document.getElementById('session-exercise-name'),
    sessionGroupBadge: document.getElementById('session-group-badge'),
    sessionTarget: document.getElementById('session-target'),
    sessionSetChecklist: document.getElementById('session-set-checklist'),
    sessionRestView: document.getElementById('session-rest-view'),
    sessionPhaseLabel: document.getElementById('session-phase-label'),
    sessionTimer: document.getElementById('session-timer'),
    skipRestBtn: document.getElementById('session-skip-rest'),
    closeSessionBtn: document.getElementById('session-close'),
    sessionEndSummary: document.getElementById('session-end-summary'),
    sessionEndCount: document.getElementById('session-end-count'),
    sessionEndList: document.getElementById('session-end-list'),
  };

  renderDayTabs();
  renderExerciseList();

  refs.tabs.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-dia]');
    if (!btn) return;
    selectDay(btn.dataset.dia);
  });

  refs.list.addEventListener('change', (e) => {
    const checkbox = e.target.closest('.exercise-checkbox');
    if (checkbox) {
      toggleExerciseDone(checkbox.dataset.exerciseId, checkbox.checked);
      return;
    }
    const override = e.target.closest('.exercise-override');
    if (override) {
      updateOverride(override.dataset.exerciseId, override.dataset.field, override.value);
    }
  });

  refs.list.addEventListener('click', (e) => {
    const playBtn = e.target.closest('.exercise-play-btn');
    if (playBtn) {
      startSession(state.currentDia, { onlyExerciseId: playBtn.dataset.exerciseId });
    }
  });

  refs.startSessionBtn.addEventListener('click', () => startSession(state.currentDia));
  refs.sessionSetChecklist.addEventListener('change', (e) => {
    const checkbox = e.target.closest('.session-set-checkbox');
    if (checkbox && !checkbox.disabled) completeSet();
  });
  refs.sessionSetChecklist.addEventListener('click', (e) => {
    const startBtn = e.target.closest('.session-start-timed-set');
    if (startBtn) startTimedSet();
  });
  refs.skipRestBtn.addEventListener('click', skipTimer);
  refs.closeSessionBtn.addEventListener('click', endSession);
}

function loadState() {
  let parsed;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    parsed = raw ? JSON.parse(raw) : null;
  } catch {
    parsed = null;
  }
  const base = parsed && parsed.version === 1
    ? parsed
    : { version: 1, completions: {}, overrides: {}, lastOpenedDay: null };

  base.completions = pruneOldWeeks(base.completions || {});
  return base;
}

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state.storage));
  } catch {
    // localStorage unavailable (private mode, quota, etc.) — fail silently, state stays in memory
  }
}

function pruneOldWeeks(completions) {
  const currentWeekNum = getISOWeekNumber(new Date());
  const result = {};
  for (const key of Object.keys(completions)) {
    const match = key.match(/^(\d{4})-W(\d{2}):/);
    if (!match) continue;
    const weekNum = parseInt(match[2], 10);
    if (currentWeekNum - weekNum <= MAX_WEEK_AGE && currentWeekNum - weekNum >= -MAX_WEEK_AGE) {
      result[key] = completions[key];
    }
  }
  return result;
}

function getISOWeekNumber(date) {
  const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  return Math.ceil(((d - yearStart) / 86400000 + 1) / 7);
}

function getISOWeekKey(date) {
  const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));
  const year = d.getUTCFullYear();
  const week = getISOWeekNumber(date);
  return `${year}-W${String(week).padStart(2, '0')}`;
}

function currentWeekPrefix() {
  return getISOWeekKey(new Date());
}

function completionKey(exerciseId) {
  return `${currentWeekPrefix()}:${exerciseId}`;
}

function isDone(exerciseId) {
  const entry = state.storage.completions[completionKey(exerciseId)];
  return !!(entry && entry.done);
}

function getOverride(exerciseId) {
  return state.storage.overrides[exerciseId] || {};
}

function resolvedExercise(ex) {
  const override = getOverride(ex.id);
  return {
    ...ex,
    series: override.series ?? ex.series,
    descanso: override.descanso ?? ex.descanso,
  };
}

function findDia(diaName) {
  return state.data.find((d) => d.dia === diaName);
}

function selectDay(diaName) {
  state.currentDia = diaName;
  state.storage.lastOpenedDay = diaName;
  saveState();
  renderDayTabs();
  renderExerciseList();
}

function renderDayTabs() {
  const todayName = DIAS_ES[new Date().getDay()];
  refs.tabs.innerHTML = state.data
    .map((d) => {
      const active = d.dia === state.currentDia;
      const isToday = d.dia === todayName;
      const activeClasses = active
        ? 'bg-primary text-white shadow-glow border-primary'
        : 'bg-skin-surface text-skin-secondary border-skin hover:text-skin-primary hover:border-skin-hover';
      return `
        <button type="button" data-dia="${d.dia}" role="tab" aria-selected="${active}"
          class="shrink-0 snap-start flex items-center gap-1.5 rounded-full border px-4 py-2 text-sm font-semibold transition-all ${activeClasses}">
          ${d.dia}
          ${isToday ? '<span class="w-1.5 h-1.5 rounded-full bg-accent" aria-hidden="true" title="Hoy"></span>' : ''}
        </button>`;
    })
    .join('');
}

function computeProgress(diaName) {
  const dia = findDia(diaName);
  if (!dia) return { done: 0, total: 0 };
  let done = 0;
  let total = 0;
  for (const grupo of dia.grupos) {
    for (const ex of grupo.ejercicios) {
      total += 1;
      if (isDone(ex.id)) done += 1;
    }
  }
  return { done, total };
}

function hasSessionableExercises(diaName) {
  const dia = findDia(diaName);
  if (!dia) return false;
  return dia.grupos.some((grupo) =>
    grupo.ejercicios.some((ex) => {
      const resolved = resolvedExercise(ex);
      return resolved.series !== null && resolved.series !== undefined && !isDone(ex.id);
    })
  );
}

function renderProgress() {
  const { done, total } = computeProgress(state.currentDia);
  refs.progressText.textContent = total > 0 ? `${done}/${total} ejercicios completados` : 'Día de descanso';
  refs.progressBar.style.width = total > 0 ? `${Math.round((done / total) * 100)}%` : '0%';
  refs.startSessionBtn.disabled = !hasSessionableExercises(state.currentDia);
  refs.startSessionBtn.classList.toggle('opacity-50', refs.startSessionBtn.disabled);
  refs.startSessionBtn.classList.toggle('cursor-not-allowed', refs.startSessionBtn.disabled);
  renderDayCompletion(done, total);
}

function renderDayCompletion(done, total) {
  const isComplete = total > 0 && done === total;
  refs.dayCompleteBanner.classList.toggle('hidden', !isComplete);
  refs.dayCompleteBanner.classList.toggle('flex', isComplete);
  if (!isComplete) return;

  refs.dayCompleteTitle.textContent = `¡${state.currentDia} completado!`;
  refs.dayCompleteDetail.textContent = `Terminaste los ${total} ejercicios de hoy. Descansá y volvé con todo mañana.`;
}

function repChipLabel(ex) {
  const r = ex.repeticiones;
  if (r.tipo === 'tiempo') return `${r.texto}`;
  if (r.tipo === 'fallo') return 'Al fallo';
  if (r.tipo === 'libre') return r.texto;
  return r.texto;
}

function exerciseCardHTML(ex, dia) {
  const resolved = resolvedExercise(ex);
  const done = isDone(ex.id);
  const isTracked = resolved.series !== null && resolved.series !== undefined;
  return `
    <details class="exercise-card group bg-skin-surface border border-skin rounded-2xl shadow-card transition-colors ${done ? 'opacity-60 border-accent/40' : ''}"
      data-exercise-id="${ex.id}" data-dia="${dia}" data-done="${done}">
      <summary class="flex items-center gap-3 p-4 sm:p-5 cursor-pointer select-none list-none marker:hidden [&::-webkit-details-marker]:hidden">
        <input type="checkbox" class="exercise-checkbox w-5 h-5 rounded border-skin accent-primary shrink-0 cursor-pointer"
          data-exercise-id="${ex.id}" ${done ? 'checked' : ''} aria-label="Marcar ${ex.ejercicio} como hecho" onclick="event.stopPropagation()" />
        <div class="flex-1 min-w-0 flex flex-wrap items-center gap-2">
          <h4 class="font-semibold text-skin-primary text-sm sm:text-base">${ex.ejercicio}</h4>
          ${ex.peso ? `<span class="inline-flex items-center px-2 py-0.5 rounded-full bg-skin-surface-2 border border-skin text-[11px] text-skin-secondary">${ex.peso}</span>` : ''}
          ${done ? `<span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-[11px] font-semibold">Completado</span>` : ''}
        </div>
        <svg class="shrink-0 text-skin-secondary transition-transform group-open:rotate-180" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9"/></svg>
      </summary>

      <div class="px-4 sm:px-5 pb-4 sm:pb-5 pl-[3.25rem] sm:pl-[3.5rem] -mt-1">
        ${
          isTracked
            ? `<div class="flex flex-wrap gap-2 mb-3">
                <label class="flex items-center gap-1.5 bg-skin-surface-2 rounded-lg border border-skin px-2 py-1 text-xs text-skin-secondary">
                  Series
                  <input type="number" min="1" class="exercise-override w-12 bg-transparent text-center text-skin-primary font-semibold outline-none"
                    data-exercise-id="${ex.id}" data-field="series" value="${resolved.series}" />
                </label>
                <span class="flex items-center gap-1.5 bg-skin-surface-2 rounded-lg border border-skin px-2 py-1 text-xs text-skin-secondary">
                  Reps <strong class="text-skin-primary">${repChipLabel(ex)}</strong>
                </span>
                <label class="flex items-center gap-1.5 bg-skin-surface-2 rounded-lg border border-skin px-2 py-1 text-xs text-skin-secondary">
                  Descanso
                  <input type="number" min="0" step="5" class="exercise-override w-14 bg-transparent text-center text-skin-primary font-semibold outline-none"
                    data-exercise-id="${ex.id}" data-field="descanso" value="${resolved.descanso}" />
                  s
                </label>
              </div>`
            : `<p class="text-xs text-skin-secondary mb-3">${repChipLabel(ex)}</p>`
        }

        <p class="text-xs text-skin-secondary leading-relaxed mb-3">${ex.descripcion}</p>

        <div class="flex flex-wrap items-center gap-3">
          <a href="${ex.video}" target="_blank" rel="noopener" class="inline-flex items-center gap-1.5 text-xs font-medium text-skin-secondary hover:text-primary transition-colors">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg>
            Ver video
          </a>
          ${
            isTracked
              ? `<button type="button" class="exercise-play-btn inline-flex items-center gap-1.5 text-xs font-medium text-primary hover:text-primary/80 transition-colors" data-exercise-id="${ex.id}">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                  Practicar este ejercicio
                </button>`
              : ''
          }
        </div>
      </div>
    </details>`;
}

function renderExerciseList() {
  const dia = findDia(state.currentDia);
  if (!dia) {
    refs.list.innerHTML = '';
    renderProgress();
    return;
  }

  refs.list.innerHTML = dia.grupos
    .map(
      (grupo) => `
      <div class="mb-6">
        <span class="inline-flex items-center gap-1.5 font-semibold rounded-full bg-skin-surface border border-skin text-skin-primary px-2.5 py-0.5 text-[11px] mb-3">${grupo.grupoMuscular}</span>
        <div class="flex flex-col gap-3">
          ${grupo.ejercicios.map((ex) => exerciseCardHTML(ex, dia.dia)).join('')}
        </div>
      </div>`
    )
    .join('');

  renderProgress();
}

function updateCardInPlace(exerciseId) {
  const card = refs.list.querySelector(`.exercise-card[data-exercise-id="${exerciseId}"]`);
  if (!card) return;
  const dia = card.dataset.dia;
  const wasOpen = card.open;
  card.outerHTML = exerciseCardHTML(findExercise(exerciseId), dia);
  const newCard = refs.list.querySelector(`.exercise-card[data-exercise-id="${exerciseId}"]`);
  if (newCard && wasOpen) newCard.open = true;
}

function findExercise(exerciseId) {
  for (const dia of state.data) {
    for (const grupo of dia.grupos) {
      const ex = grupo.ejercicios.find((e) => e.id === exerciseId);
      if (ex) return ex;
    }
  }
  return null;
}

function toggleExerciseDone(exerciseId, done) {
  const key = completionKey(exerciseId);
  state.storage.completions[key] = { done, completedAt: done ? new Date().toISOString() : null };
  saveState();
  updateCardInPlace(exerciseId);
  renderProgress();
}

function updateOverride(exerciseId, field, rawValue) {
  const value = parseInt(rawValue, 10);
  if (Number.isNaN(value) || value < 0) return;
  const current = state.storage.overrides[exerciseId] || {};
  state.storage.overrides[exerciseId] = { ...current, [field]: value };
  saveState();
}

function startSession(diaName, options = {}) {
  const dia = findDia(diaName);
  if (!dia) return;

  let queue = [];
  for (const grupo of dia.grupos) {
    for (const ex of grupo.ejercicios) {
      if (resolvedExercise(ex).series === null || resolvedExercise(ex).series === undefined) continue;
      if (options.onlyExerciseId && ex.id !== options.onlyExerciseId) continue;
      queue.push({ ...resolvedExercise(ex), grupoMuscular: grupo.grupoMuscular });
    }
  }
  if (options.onlyExerciseId) {
    // keep only the requested exercise even if already done, user explicitly asked to practice it
  } else {
    queue = queue.filter((ex) => !isDone(ex.id));
  }
  if (queue.length === 0) return;

  state.session = {
    diaName,
    queue,
    index: 0,
    currentSet: 1,
    phase: 'exercise',
    intervalId: null,
    remaining: 0,
    onTimerComplete: null,
  };
  refs.sessionEndSummary.classList.add('hidden');
  refs.sessionExerciseName.classList.remove('hidden');
  refs.sessionGroupBadge.classList.remove('hidden');
  refs.sessionTarget.classList.remove('hidden');
  refs.overlay.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
  renderSessionStep();
}

function renderSessionStep() {
  const s = state.session;
  if (!s) return;
  const ex = s.queue[s.index];

  refs.sessionExerciseName.textContent = ex.ejercicio;
  refs.sessionGroupBadge.textContent = ex.grupoMuscular;
  refs.sessionTarget.textContent = `Objetivo por serie: ${repChipLabel(ex)}`;

  renderSetChecklist(ex, s.currentSet);
  refs.sessionSetChecklist.classList.remove('hidden');
  refs.sessionRestView.classList.add('hidden');
}

function renderSetChecklist(ex, currentSet) {
  const isTimed = ex.repeticiones.tipo === 'tiempo';
  const rows = [];
  for (let i = 1; i <= ex.series; i++) {
    const isDoneSet = i < currentSet;
    const isActive = i === currentSet;
    const rowClasses = isDoneSet
      ? 'border-accent/30 bg-accent/10 text-skin-secondary'
      : isActive
        ? 'border-primary/40 bg-primary/10 text-skin-primary cursor-pointer'
        : 'border-skin bg-skin-surface-2 text-skin-secondary/50';

    if (isActive && isTimed) {
      rows.push(`
        <button type="button" class="session-start-timed-set w-full flex items-center justify-between gap-3 rounded-xl border px-3.5 py-3 text-sm font-semibold transition-colors ${rowClasses}">
          <span>Serie ${i} de ${ex.series} · ${ex.repeticiones.texto}</span>
          <span class="text-primary">Iniciar</span>
        </button>`);
      continue;
    }

    rows.push(`
      <label class="flex items-center gap-3 rounded-xl border px-3.5 py-3 text-sm font-semibold transition-colors ${rowClasses}">
        <input type="checkbox" class="session-set-checkbox w-5 h-5 rounded accent-primary shrink-0"
          data-set="${i}" ${isDoneSet ? 'checked disabled' : ''} ${isActive ? '' : isDoneSet ? '' : 'disabled'} />
        Serie ${i} de ${ex.series}
      </label>`);
  }
  refs.sessionSetChecklist.innerHTML = rows.join('');
}

function completeSet() {
  const s = state.session;
  if (!s) return;
  const ex = s.queue[s.index];

  if (s.currentSet >= ex.series) {
    finishExercise();
    return;
  }
  s.currentSet += 1;
  startRestTimer(ex.descanso);
}

function startTimedSet() {
  const s = state.session;
  if (!s) return;
  const ex = s.queue[s.index];
  s.phase = 'timed-set';
  startTimer(ex.repeticiones.valor, { label: 'Ejercicio en curso', onComplete: onTimedSetComplete });
}

function onTimedSetComplete() {
  const s = state.session;
  if (!s) return;
  const ex = s.queue[s.index];

  if (s.currentSet >= ex.series) {
    finishExercise();
    return;
  }
  s.currentSet += 1;
  startRestTimer(ex.descanso);
}

function startRestTimer(seconds) {
  const s = state.session;
  s.phase = 'resting';
  startTimer(seconds, { label: 'Descanso', onComplete: advanceAfterRest });
}

function startGroupRestTimer(nextGroupName) {
  const s = state.session;
  s.phase = 'group-resting';
  startTimer(GROUP_TRANSITION_REST_SECONDS, {
    label: `Pausa · siguiente: ${nextGroupName}`,
    onComplete: advanceAfterRest,
  });
}

function startTimer(seconds, { label, onComplete }) {
  const s = state.session;
  s.remaining = seconds;
  s.onTimerComplete = onComplete;
  refs.sessionSetChecklist.classList.add('hidden');
  refs.sessionRestView.classList.remove('hidden');
  refs.sessionPhaseLabel.textContent = label;
  refs.sessionTimer.textContent = formatSeconds(s.remaining);

  if (s.intervalId) clearInterval(s.intervalId);
  s.intervalId = setInterval(() => {
    s.remaining -= 1;
    refs.sessionTimer.textContent = formatSeconds(Math.max(s.remaining, 0));
    if (s.remaining <= 0) {
      clearInterval(s.intervalId);
      s.intervalId = null;
      const callback = s.onTimerComplete;
      s.onTimerComplete = null;
      if (callback) callback();
    }
  }, 1000);
}

function skipTimer() {
  const s = state.session;
  if (!s || !s.onTimerComplete) return;
  if (s.intervalId) clearInterval(s.intervalId);
  s.intervalId = null;
  const callback = s.onTimerComplete;
  s.onTimerComplete = null;
  callback();
}

function advanceAfterRest() {
  const s = state.session;
  if (!s) return;
  s.phase = 'exercise';
  renderSessionStep();
}

function finishExercise() {
  const s = state.session;
  if (!s) return;
  const ex = s.queue[s.index];
  toggleExerciseDone(ex.id, true);

  if (s.index >= s.queue.length - 1) {
    showSessionEnd();
    return;
  }
  const nextEx = s.queue[s.index + 1];
  s.index += 1;
  s.currentSet = 1;

  if (nextEx.grupoMuscular !== ex.grupoMuscular) {
    startGroupRestTimer(nextEx.grupoMuscular);
  } else {
    renderSessionStep();
  }
}

function allCompletedExercisesForDay(diaName) {
  const dia = findDia(diaName);
  if (!dia) return [];
  const result = [];
  for (const grupo of dia.grupos) {
    for (const ex of grupo.ejercicios) {
      if (isDone(ex.id)) result.push(ex);
    }
  }
  return result;
}

function showSessionEnd() {
  const s = state.session;
  refs.sessionSetChecklist.classList.add('hidden');
  refs.sessionRestView.classList.add('hidden');
  refs.sessionExerciseName.classList.add('hidden');
  refs.sessionGroupBadge.classList.add('hidden');
  refs.sessionTarget.classList.add('hidden');

  const dia = findDia(s.diaName);
  const totalDia = dia ? dia.grupos.reduce((acc, g) => acc + g.ejercicios.length, 0) : 0;
  const completed = allCompletedExercisesForDay(s.diaName);

  refs.sessionEndCount.textContent = `${completed.length}/${totalDia} ejercicios completados`;
  refs.sessionEndList.innerHTML = completed
    .map((ex) => {
      const details = [ex.peso, repChipLabel(ex)].filter(Boolean).join(' · ');
      return `
      <li class="flex items-start gap-2.5 rounded-xl border border-accent/20 bg-accent/10 px-3.5 py-2.5 text-sm font-medium text-skin-primary">
        <svg class="shrink-0 text-accent mt-0.5" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
        <span class="flex flex-col">
          <span>${ex.ejercicio}</span>
          ${details ? `<span class="text-xs font-normal text-skin-secondary">${details}</span>` : ''}
        </span>
      </li>`;
    })
    .join('');
  refs.sessionEndSummary.classList.remove('hidden');
}

function endSession() {
  const s = state.session;
  if (s && s.intervalId) clearInterval(s.intervalId);
  state.session = null;
  refs.overlay.classList.add('hidden');
  document.body.style.overflow = '';
  renderExerciseList();
}

function formatSeconds(total) {
  const m = Math.floor(total / 60);
  const s = total % 60;
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}
