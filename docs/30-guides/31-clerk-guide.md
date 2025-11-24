---
id: guide-clerks
title: Clerk Operational Guide
sidebar_label: Clerk Guide
sidebar_position: 31
description: Full operational handbook for NAP 9 Clerks, including workflow, discretion rules, and standards.
slug: /guide-clerks
---

# NAP 9 Clerk Guide
Neutral operators keep the system running. Clerks enforce procedure—not outcomes—and must remain calm, clear, and documented at all times.

---

## Your Role
Clerks are:

- procedural operators and timekeepers  
- evidence custodians and archivists  
- vote window managers  
- appeal investigators  
- compliance monitors

Clerks **do not** judge intent, argue penalties, or participate in diplomacy.

---

## Professional Standards
- Communicate concisely; avoid tone or sarcasm.  
- Acknowledge R5 requests within ~2 hours when possible.  
- Use **Server Time** everywhere.  
- Never delete governance messages or redact evidence.  
- Log everything; transparency is the job.

---

## Evidence Handling
1. Verify clarity (what happened), identity (who), time (when), rule fit, and sufficiency.  
2. If incomplete, send a correction list with a **6-hour deadline** (extend to 12–24h only for time zones or urgent clarity).  
3. Reject if cropped/edited, missing timestamps with no corroboration, unverifiable, DM-only, or fabricated (Severe).  
4. Note extensions or rejections in `#case-log`.

---

## Case Creation & Logging
- Create a case **only** after valid evidence is posted in `#evidence`.  
- Case ID format: `C-YYMMDD-XX` (sequential per day).  
- Log in `#case-log` with: Case ID, timestamp (ST), reporting alliance, offender(s), preliminary classification, short summary, evidence link, **Status: ACTIVE**.  
- First responding Clerk handles logging; another Clerk audits when available.

---

## Vote Management
- Open a window only after validation + logging + classification.  
- Post: case, vote type (8h/16h/24h), end time, options, quorum. Pin it.  
- Track votes, quorum time, missing alliances; ping non-voters at halfway.  
- Close at window end or when all 9 votes are in; post totals and outcome.  
- If someone tries to change/double-vote, state the original vote stands.

---

## Penalty Tracking
- Timestamp start/end, track restitution, confirm bans/tag status, and note sheltering attempts.  
- You may request compliance proof (e.g., screenshot of offender untagged).

---

## Handling Uncooperative R5s
- Log behavior, notify other Clerks, and escalate to Council.  
- Use neutral macro: “I cannot engage in this discussion. Please address governance concerns to the Council.”

---

## Emergency Protocols
- **No Clerk online:** after 4 hours in an urgent matter, Council may hold an **8h Emergency Temporary Clerk vote**. Temporary Clerk may create/log cases and open vote windows only.  
- **Backlog >5 cases:** prioritize Severe > Moderate > Minor; assign Lead Clerk per case.  
- **Evidence tampering:** freeze case, open a new tampering case, notify Council.

---

## Appeals Handling
1. Validate eligibility (penalty >48h) and completeness; 6h correction window.  
2. Assign **Appeal ID** and log in `#case-log`; notify Council.  
3. Conduct a **24h investigative review**: check evidence, procedure, timestamps, new submissions, precedent; note mitigating/aggravating factors.  
4. Post neutral summary with recommended direction (uphold/reduce/overturn).  
5. Start 24h vote; archive results and update records.

---

## Archival Standards
Archive for every case: evidence, descriptions, IDs, vote windows and totals, penalty durations, compliance confirmations, appeals, final summaries. Suggested structure:

```
/cases/C-YYMMDD-XX
/appeals/AP-YYMMDD-XX
/amendments
```

Make archives accessible to all Full Member representatives.

---

## Discretion Guide
You **may** extend correction windows, consolidate cases, delay vote opening for clarity, reject unclear evidence, or request more context.  
You **may not** delay for preference, hide evidence, steer outcomes, wait for specific voters, interpret intent, or argue penalties.

---

## Quick Macros
- Evidence fix: “Missing: [items]. Please provide within **6 hours** or case is invalid.”  
- Case created: “🗂️ Case Created [ID]. Status: ACTIVE. Council may begin review.”  
- Vote open: “📢 VOTE OPENED — [ID] — [8h/16h/24h] — Ends [ST] — Quorum 5 — YES/NO/ABSTAIN.”  
- Vote close: “🗳️ VOTE CLOSED — YES [x] / NO [x] / ABSTAIN [x] — Outcome [passed/failed].”  
- Case closed: “🗂️ Case Closed [ID] — Resolution [penalty/dismissal] — Archive updated.”
