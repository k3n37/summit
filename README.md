# summit

## Purpose
Model product workflows, tenants, users, and business behavior in a SaaS-oriented system.

## Why it matters
Without a clear product and domain layer, services stay technically capable but fail to reflect actual business behavior.

## Scope
This repo focuses on domain models, workflow structure, and multi-tenant product concerns. It does not try to contain every platform concern by itself.

## System Role
`summit` is the product and business-systems layer for the ecosystem. It gives the broader engineering platform a concrete application surface.

## System Connections
- Depends on: service foundations from `forge` and contracts from `gateway`.
- Feeds into: user-facing workflows and product behavior in `orbit`.
- Interacts with: `forge`, `gateway`, `orbit`.

## Core Concepts
- tenant boundaries
- user workflows
- domain models
- business rules
- product state

## Minimal Artifact
`src/domain.ts`, `src/index.ts`, and `docs/domains.md` provide the starter workflow and business-domain model.

## Notes
The product focus is meant to stay modular: explicit workflows, explicit domain edges, and no giant catch-all app layer.

## Next Steps
Add richer tenant scenarios, lifecycle flows, and service collaboration patterns.
