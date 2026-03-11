# saas-platform

Product-oriented SaaS platform starter with multi-tenant domain boundaries and business service direction.

## Purpose

Take the broader platform ecosystem and shape it into a realistic SaaS application surface.

## Role in the ecosystem

- Product specialization downstream of `master-platform`
- Uses ideas from `service-template` and `security-platform`
- Neighbor to `project-universe`

## Status

Level 2 starter with domain notes and a small TypeScript domain model.

## Tech stack

- TypeScript
- Node.js

## Structure

```text
saas-platform/
├── docs/
│   └── domains.md
├── src/
│   ├── domain.ts
│   └── index.ts
├── .editorconfig
├── .gitignore
├── README.md
├── ROADMAP.md
├── package.json
└── tsconfig.json
```

## Getting started

```bash
npm install
npm run build
node dist/index.js
```

## Related repositories

- `master-platform`
- `service-template`
- `security-platform`

## Future direction

Grow toward modular SaaS domains, not a giant undifferentiated “app” repo.
