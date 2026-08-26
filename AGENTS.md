# AGENTS.md: Directiva Principal del Agente

> **REGLA OBLIGATORIA PARA EL AGENTE DE IA:**
>
> 1. **Fuente de Verdad Viva (Notion):** El contexto, especificaciones y reglas de negocio de este proyecto residen en la página principal de Notion: **"Sistema de Conversión y Agendamiento 24/7"** (ID de página: `353e585c-c46c-800f-8a1e-f34da0a1174d`).
> 2. **Estructura Organizada en Páginas Anidadas ("Carpetas"):**
>    - 📂 **`01. Contexto y Arquitectura Base`** (ID: `3c8e585c-c46c-81c5-ba25-c5ae82df32ff`): Especificación de Landing, Onboarding, Automatización (WhatsApp/Webhooks) y SOP 60 min.
>    - 📂 **`02. Registro de Cambios (Changelog)`** (ID: `3c8e585c-c46c-8117-815a-fc7d3af85f52`): Registro cronológico de versiones y cambios aplicados.
>    - 📂 **`03. Registro de Decisiones (Decision Log / ADR)`** (ID: `3c8e585c-c46c-81e4-96d7-ed2fc2b8a25f`): Justificación y contexto de decisiones técnicas/negocio.
>    - 📂 **`04. Guía de Despliegue y Clientes`** (ID: `3c8e585c-c46c-81bb-a7b4-f6fc5724a50b`): Checklist operativa e historial de clientes/instancias.
> 3. **Obligación de Lectura y Edición:** Al realizar tareas, debes consultar la subpágina correspondiente. Si el usuario solicita agregar o actualizar información, o se toman decisiones de desarrollo, debes editar o crear páginas anidadas en Notion mediante la API de Notion.
> 4. **Alineación del Código:** Todo desarrollo en este repositorio debe coincidir con la documentación estructurada en Notion.

---

### Datos de Referencia Rápidos:
- **Página Principal de Notion:** `Sistema de Conversión y Agendamiento 24/7` (`353e585c-c46c-800f-8a1e-f34da0a1174d`)
- **Espacio de Trabajo Notion:** `Espacio de Quant Partners`

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
