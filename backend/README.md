# StudyPath backend contract

The frontend is now prepared for a real backend through `src/services/backend.js`.

Required endpoints:

- `POST /api/auth/signup` → `{ user, session }`
- `POST /api/auth/login` → `{ user, session }`
- `GET /api/auth/me` → `{ user }`
- `POST /api/auth/logout`
- `GET /api/account/export` → downloadable JSON payload
- `DELETE /api/account` → delete account and cloud data
- `POST /api/billing/checkout` with `{ plan: "monthly" | "yearly" }` → `{ url }`
- `GET /api/billing/subscription` → `{ active, plan, renewalDate }`

The backend must enforce authentication and premium entitlement server-side. The frontend must never be treated as the authority for payment status or protected content access.

Recommended production pieces:

1. Managed authentication/session provider.
2. Database for profiles, progress, mistakes, chapter progress, quiz history and planner data.
3. Payment provider with signed webhook verification.
4. Server-side premium entitlement checks.
5. Rate limiting and input validation.
6. Account export and deletion endpoints.
7. HTTPS and secret storage through the hosting provider.
