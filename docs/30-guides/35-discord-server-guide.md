---
id: guide-discord-server
title: Discord Server Guide
sidebar_label: Discord Server Guide
sidebar_position: 35
slug: /guide-discord-server
description: Visual server layout, roles, permissions, and setup steps for the NAP 9 Discord.
---

# Discord Server Guide
Use this as a quick layout + setup manual for the Discord server hosting official council operations.

---

## Recommended Roles
- **Admin** — full manage server/roles/channels; keep small.  
- **Clerk** — manage messages in evidence/log channels; pin/unpin; manage threads; no role or channel deletion.  
- **Council (R5/Delegate)** — read/write Council areas; vote; view logs.  
- **Associate Rep** — read announcements/case-log; no vote.  
- **Member** — standard perms; read announcements; no governance channels.  
- **Muted** — cannot send messages; can read public channels.  
- **Bot** — for logging/pinning; disable admin perms.

Perm tip: never grant `Administrator` to Clerks/Council. Use explicit channel overrides instead.

---

## Channel Map (Suggested)
```
📢 Announcements
  ├─ #nap-announcements (read-only; Admin/Clerk post)
  └─ #rotation-updates (read-only; Clerk post)

🗂️ Cases & Records
  ├─ #evidence (submit only; Clerk manage messages)
  ├─ #case-log (Clerk posts IDs/status)
  ├─ #appeals (appeal submissions)
  └─ #case-archive (read-only)

🏛️ Council
  ├─ #nap-council-chat (Council/Clerks)
  ├─ #nap-proposals (amendments + notice)
  └─ #vote-windows (Clerk opens/close votes)

🧭 Associates & Public
  ├─ #associate-lounge (Associates + Council + Clerks)
  └─ #public-questions (moderated; optional)

🛠️ Clerks
  └─ #clerk-desk (Clerks only; triage/backlog)

🤖 Ops
  ├─ #bot-logs (bot output; limit view)
  └─ #staff-notes (Admin/Clerk)

🧭 Optional Category
  ├─ #training-room (for onboarding/testing perms)
  └─ #voice-briefing (voice; locked to Council/Clerks)
```

---

## Permissions (Key Overwrites)
- `#nap-announcements` / `#rotation-updates`: everyone = read; only Admin/Clerk can send; disable replies/threads for others.  
- `#evidence`: everyone (Members+) can send; disable embeds/links if needed; Clerks can manage messages/pins; Council read.  
- `#case-log` / `#vote-windows`: send = Clerks; read = Council/Clerks/Admin; others denied.  
- `#nap-council-chat`: read/write = Council/Clerks/Admin; others denied.  
- `#nap-proposals`: send = Council/Clerks/Admin; Associates read.  
- `#appeals`: send = Council/Associates/Members; Clerk manage messages.  
- `#clerk-desk`: only Clerks/Admin.  
- `#bot-logs`: only Admin/Clerk; bots can send.  
- `#public-questions`: everyone send; slowmode; Clerk/Admin moderate.

Tip: set category-level perms first, then tighten individual channels (e.g., lock posting in announcements).

---

## Threads Guidance
- **Where to allow threads:** `#case-log` (per-case thread opened by Clerk for discussion/linking), `#vote-windows` (optional thread opened by Clerk to contain vote chatter), `#evidence` (Clerk can open a short clarification thread).  
- **Who can open:** Clerks/Council only. Everyone can reply inside once opened (except in announcements).  
- **Where to avoid:** announcements, proposals, appeals, public-questions. Keep those flat for auditability.  
- **Archiving:** set auto-archive to 24–72h; paste the thread link into `#nap-council-chat` when needed so ops can reference it.

---

## Usage Notes
- Evidence must be public in `#evidence`; no DMs.  
- Clerks post Case IDs and vote open/close in `#case-log` / `#vote-windows`.  
- Amendments live in `#nap-proposals` with notice timers.  
- Announcements are the only authoritative broadcast; mirror rotation info there.

---

## Optional Enhancements
- **Reaction roles** for Council vs Associate vs Member (careful with permissions).  
- **Webhooks** from forms to `#evidence` or `#appeals` for structured submissions.  
- **Backup**: export channel permission templates; keep a runbook for restoring roles.  
- **Logging**: enable server audit log; restrict viewing to Admin.  
- **Verification**: gate entry via simple question to reduce alts; whitelist known alliances.

---

## Setup Walkthrough (Admin)
1. **Create roles** in order above; set role colors/priority; keep Admin count minimal.  
2. **Create categories and channels** matching the channel map; apply category-level perms first:  
   - Announcements: @everyone read, no send; Admin/Clerk send.  
   - Cases & Records: @everyone can read `#evidence` + send; deny send elsewhere.  
   - Council: only Council/Clerk/Admin view.  
3. **Channel-specific overrides** where needed (e.g., `#vote-windows` send = Clerk only; `#nap-proposals` read for Associates).  
4. **Bots**: add to Bot role; restrict to `#bot-logs` + only channels they need; remove `Manage Roles/Channels` unless essential.  
5. **Slowmode** on public/appeals to reduce spam; keep off in Council and evidence.  
6. **Pins**: allow Clerks to pin in evidence/logs; others deny.  
7. **Threads**: allow Clerks/Council to create threads in evidence/vote windows for context; disable for everyone else.  
8. **Voice (optional)**: restrict `#voice-briefing` to Council/Clerks; block connect for others.  
9. **Audit** with a non-privileged account; verify Associates cannot post in Council, Council cannot see `#clerk-desk`, and announcements are read-only.
