# HAVEN 550 — Backend Blueprint (Phase 2 Reference)

> **IMPORTANT**: This blueprint is the complete specification for **Phase 2**. Do not implement backend code until the explicit instruction `"START PHASE 2: BACKEND"` is received.

---

## 1. Purpose
This blueprint defines how the frontend created in Phase 1 connects to the server-side backend in Phase 2. The core requirement is that **no pages or UI components will change when transitioning from mock to live backend mode**.

---

## 2. Connection Points (Only Files That Change in Phase 2)
1. `src/lib/api/client.ts`: Switch `NEXT_PUBLIC_API_MODE` from `"mock"` to `"live"`.
2. `src/lib/repositories/`: Add backend implementations (e.g., `inquiry.repository.ts` with database/file storage, and `content.cms.ts` if a headless CMS is configured).
3. `src/app/api/`: Create App Router route handlers (`app/api/inquiries/route.ts`, `app/api/health/route.ts`).
4. **Nothing in `src/app/` pages or `src/components/` will be modified**.

---

## 3. Backend Layer Architecture (Dependencies Flow Downward)

```
┌─────────────────────────────────────────────────────────────┐
│                    Route Handlers                           │
│               (src/app/api/**/route.ts)                     │
│   • Request parsing & body size validation                  │
│   • Rate limiting & origin verification                     │
│   • Honeypot detection & silent mitigation                  │
│   • Input validation via shared inquirySchema               │
│   • Response envelope formatting & status codes             │
└──────────────────────────────┬──────────────────────────────┘
                               │ calls
                               ▼
┌─────────────────────────────────────────────────────────────┐
│                    Inquiry Service                          │
│          (src/lib/services/inquiry.service.ts)              │
│   • Business orchestration                                  │
│   • Asynchronous dispatch to persistence & notifications     │
│   • Partial failure handling & sanitized logging            │
└──────────────────────────────┬──────────────────────────────┘
                               │
               ┌───────────────┴───────────────┐
               ▼                               ▼
┌──────────────────────────────┐┌─────────────────────────────┐
│     Inquiry Repository       ││        Email Adapter        │
│(src/lib/repositories/inquiry)││ (src/lib/adapters/email)    │
│ • Database / File / Remote   ││ • Console / Resend provider │
│ • Idempotency handling       ││ • Admin notification & guest│
│ • Audit timestamping         ││   acknowledgement template  │
└──────────────────────────────┘└─────────────────────────────┘
```

---

## 4. API Contract (`src/types/api.ts`)

### Endpoints
- **`POST /api/inquiries`**: Accepts inquiry JSON payload and returns created record ID.
- **`GET /api/health`**: Health check returning `{ ok: true, data: { status: "up" } }`.

### Status Codes
- `201 Created`: Inquiry accepted and processed.
- `400 Bad Request`: Malformed JSON or invalid syntax.
- `422 Unprocessable Entity`: Zod validation failed (returns `fieldErrors`).
- `429 Too Many Requests`: Rate limit exceeded.
- `500 Internal Server Error`: Unexpected server error (sanitized error message).
- `503 Service Unavailable`: Downstream email/storage provider unavailable.

### Response Envelope Contracts

#### Success Envelope (`201 Created` / `200 OK`)
```json
{
  "ok": true,
  "data": {
    "id": "inq_7f3b89a0-9c24-4b55-88f2-39c8942b0f44",
    "status": "received"
  },
  "meta": {
    "timestamp": "2026-10-08T12:00:00.000Z",
    "requestId": "req_a1b2c3d4"
  }
}
```

#### Error Envelope (`422 Unprocessable Entity`)
```json
{
  "ok": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Validation failed for inquiry submission.",
    "fieldErrors": [
      {
        "field": "guestCount",
        "message": "HAVEN 550 accommodates up to 8 guests."
      }
    ]
  },
  "meta": {
    "timestamp": "2026-10-08T12:00:00.000Z",
    "requestId": "req_a1b2c3d4"
  }
}
```

---

## 5. Inquiry Data Model

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` (UUID v4) | Yes | Unique inquiry identifier |
| `createdAt` | `string` (ISO 8601) | Yes | Server generation timestamp |
| `status` | `"new" \| "contacted" \| "closed"` | Yes | Workflow status (default: `"new"`) |
| `fullName` | `string` | Yes | Guest full name |
| `email` | `string` | Yes | Guest email address |
| `phone` | `string` | Yes | Contact telephone number |
| `preferredDates` | `string` | Yes | Desired dates or timeframe |
| `guestCount` | `number` (1–8) | Yes | Group size |
| `interest` | `string` | Yes | Selected experience or custom interest |
| `message` | `string` | No | Optional special requests or notes |
| `consent` | `boolean` | Yes | Explicit consent to privacy policy |
| `source` | `"website"` | Yes | Lead origination channel |

---

## 6. Inquiry Submission Flow

```
Guest submits CharterInquiryForm
                │
                ▼
lib/api/client.ts (Live Mode: POST /api/inquiries)
                │
                ▼
App Router Route Handler (app/api/inquiries/route.ts)
  ├─ 1. Verify Origin / CORS
  ├─ 2. Enforce Rate Limiter (IP-based)
  ├─ 3. Check Honeypot (silent 201 for bots)
  └─ 4. Validate with shared inquirySchema
                │
                ▼
Inquiry Service (lib/services/inquiry.service.ts)
  ├─ 1. Generate UUID & timestamp
  ├─ 2. Save inquiry record via Inquiry Repository
  ├─ 3. Send notification email to Haven 550 via Email Adapter
  └─ 4. Send acknowledgment email to Guest via Email Adapter
                │
                ▼
Return API Success Envelope { ok: true, data: { id, status: "received" } }
```

*Note: Persistence and email notifications execute in parallel (`Promise.allSettled`). Partial email failure does not block the successful acknowledgment of the guest's inquiry.*

---

## 7. Environment Variables for Phase 2

```env
# Client Configuration
NEXT_PUBLIC_SITE_URL=https://haven550.com
NEXT_PUBLIC_API_MODE=live

# Server Secrets (Never exposed with NEXT_PUBLIC_)
API_BASE_URL=
CONTENT_SOURCE=static

# Email Provider Configuration (console | resend)
EMAIL_PROVIDER=console
RESEND_API_KEY=
INQUIRY_TO_EMAIL=info@haven550.com
INQUIRY_FROM_EMAIL=charters@haven550.com

# Rate Limiting Configuration
RATE_LIMIT_MAX=5
RATE_LIMIT_WINDOW_SECONDS=60
```

---

## 8. External Backend Switch
If an external API server is specified via `API_BASE_URL`, the route handler or client can proxy requests directly to `${API_BASE_URL}/inquiries` using the exact same request payload and response envelope. The frontend UI remains 100% agnostic.

---

## 9. Security Checklist
- [ ] **Security Headers**: Configure CSP, `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, and `Permissions-Policy`.
- [ ] **Body Size Limits**: Enforce maximum payload size of 16KB on route handlers.
- [ ] **HTML / XSS Sanitization**: Strip dangerous HTML tags from guest messages before storage or email rendering.
- [ ] **Honeypot Protection**: Hidden input on the form silently sinks spam submissions.
- [ ] **Rate Limiting**: IP-based rate limiting on `/api/inquiries` (in-memory for development, Upstash/Redis for multi-instance production).
- [ ] **PII Safety**: Sanitized logging (never log full guest credit card details or unmasked phone numbers in operational logs).

---

## 10. Phase 2 Test Plan
1. **Schema Validation Tests**: Validate input boundaries and error messages.
2. **Service Unit Tests**: Mock repository and email adapter to test failure isolation.
3. **Route Handler Integration Tests**:
   - `POST /api/inquiries` returns `201` for valid data.
   - `POST /api/inquiries` returns `422` with field errors for invalid data.
   - `POST /api/inquiries` returns `429` when rate limit is exceeded.
4. **Contract Parity Test**: Confirm mock client and live route handler return identical envelope structures.

---

## 11. Phase 2 Build Order
1. Configure and validate Phase 2 environment variables.
2. Implement Email Adapters (`console.adapter.ts` and `resend.adapter.ts`).
3. Implement Inquiry Repository (`inquiry.memory.ts` or database model).
4. Implement `inquiry.service.ts` with business logic and orchestration.
5. Create App Router route handlers (`src/app/api/inquiries/route.ts` and `src/app/api/health/route.ts`).
6. Apply security headers in `next.config.ts` or middleware.
7. Run comprehensive unit and integration tests.
8. Switch `NEXT_PUBLIC_API_MODE=live` in `.env.local`.
9. Perform end-to-end browser verification of inquiry submission.

---

## 12. Definition of Done & Rollback
- **Done**: Inquiries submitted from the UI are validated, persisted, emailed to Haven 550, and acknowledged to the guest with appropriate status codes and no UI regressions.
- **Rollback**: Set `NEXT_PUBLIC_API_MODE=mock` to instantly restore frontend-only behavior without breaking the user experience.
