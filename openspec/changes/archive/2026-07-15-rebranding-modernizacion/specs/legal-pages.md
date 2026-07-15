# Spec: Páginas Legales

## LegalLayout

- GIVEN una página legal (privacidad o términos)
- WHEN se renderiza con LegalLayout
- THEN debe tener ancho máximo de lectura (`max-w-3xl` o similar)
- AND tipografía optimizada para lectura larga (body `text-base` o `text-lg`, line-height `1.8`)
- AND navbar simplificado (solo brand + breadcrumb opcional)
- AND padding adecuado (`py-12`+)

## Páginas

- GIVEN `/app/privacidad/many`
- THEN debe usar ManyComponent con estilos actualizados
- AND layout legal

- GIVEN `/app/privacidad/voicenotifier`
- THEN debe usar Voicenotifier component con estilos actualizados
- AND layout legal

- GIVEN `/app/terminos/many`
- THEN debe contener términos de Many
- AND layout legal

- GIVEN `/app/terminos/voicenotifier`
- THEN debe contener términos de Voice Notifier
- AND layout legal

## Opcional

- Tabla de contenidos flotante (scroll spy)
- Breadcrumbs de navegación
