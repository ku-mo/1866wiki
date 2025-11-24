```markdown
# wplace.live Monitor Architecture (60s polling)

## Overview

This architecture monitors the uptime of `wplace.live` and `backend.wplace.live` every **60 seconds**, records the data, and serves it efficiently via static files cached at the edge.

---

## Architecture Summary

- **Polling**: AWS Lambda triggered by EventBridge every 60 seconds.
- **Storage**: Results stored in DynamoDB and JSON snapshots uploaded to S3.
- **Delivery**: Static frontend and snapshot JSON served via CloudFront with short TTL caching.
- **Frontend**: Single-page static app in S3 renders status cards and graphs.
- **Security**: S3 is private; access is granted only via CloudFront OAC.

---

## Polling system

> [!info]
> **Checker Lambda**
> - Runs every 60s via EventBridge.
> - Uses `httpx` to perform status checks.
> - Writes results to DynamoDB and `summary.json` in S3.
> - Rollups (like `history-1h.json`) optional and can be generated inline or by a secondary process.

---

## JSON snapshots (S3)

### [!example] `summary.json`  
Latest per target, regenerated every 60 s.

```json
{
  "generated_ts": 1730000000,
  "interval_seconds": 60,
  "targets": ["https://wplace.live//", "https://backend.wplace.live"],
  "last": {
    "https://wplace.live//": { "ok": true, "status_code": 200, "latency_ms": 395, "ts": 1730000000 },
    "https://backend.wplace.live": { "ok": false, "status_code": 502, "latency_ms": 186, "ts": 1730000000 }
  }
}
```

### [!example] `history-1h.json` (optional)  
1-minute rollups for the last 60 minutes for one target.

```json
{
  "generated_ts": 1730000000,
  "target": "https://wplace.live//",
  "step_seconds": 60,
  "points": [
    { "ts": 1730000000, "ok": true, "latency_ms_p50": 180, "status_code": 200 },
    { "ts": 1730000060, "ok": true, "latency_ms_p50": 210, "status_code": 200 }
  ]
}
```

> [!note]
> **Object metadata**
> ```
> Cache-Control: public, max-age=60, stale-while-revalidate=60, stale-if-error=300
> ```
> Bucket is **private**; served only via CloudFront **OAC**.

---

## Polling and caching

> [!tip]
> Rule:
> - “UI polls every **60 s**.”
> - “CloudFront caches for **60 s**, so origin is hit rarely.”

---

## Frontend

- Loads `summary.json` and renders cards per target.
- Charts can be optionally generated using `history-1h.json` rollups.
- No auth required; all public.

---

## Security

- S3 bucket is private with **OAC**-only access.
- CloudFront is the only public surface.
- IAM:
  - Lambda: `PutObject` to snapshot S3, `PutItem` to DynamoDB, `logs:*` for own log group.
- No secrets. No API keys. No CORS.

---

## Deployment checklist

- [ ] S3: bucket for static site, bucket for JSON snapshots
- [ ] CloudFront: two origins (site, snapshots) with OAC; TTL 60s
- [ ] EventBridge rule: `rate(1 minute)`
- [ ] Lambda: `httpx` checker + writer
- [ ] IAM role: scoped write access
- [ ] JSON structure matches frontend parser
```
