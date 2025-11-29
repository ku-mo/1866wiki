---
id: guide-discord-server
title: Discord Server Guide
sidebar_label: Discord Server Guide
sidebar_position: 35
slug: /guide-discord-server
description: Operational layout, roles, permissions, and setup standards for the NAP 9 Discord server.
---

# Discord Server Guide

:::info Guide

Reference layout and permission model for hosting NAP 9 governance on Discord. 

This structure prioritizes auditability, role separation, and procedural integrity.
:::

---

# 1. Roles (Recommended)

:::caution **Permission Principle:**  
Give the minimum role permissions possible. Rely on channel-level overrides, not global powers.
:::

- **Admin**  
  - Full server control. Manage roles, channels, integrations. Keep this role extremely limited.

- **Clerk**  
  - Manage messages in evidence/log/vote channels; pin/unpin; create/close threads.  
  - *Never* grant Administrator to Clerks.

- **Council (R5 / Delegate)**  
  - Access to deliberation and voting channels. 
  - Cannot manage messages outside threads they open.

- **Associate Rep**  
  - Read-only on governance areas except evidence/appeals submissions.

- **Member**  
  - Standard permissions. Read announcements. No governance access.

- **Muted**  
  - Cannot send messages. 
  - Can read public channels.

- **Bot**  
  - For logging, pinning, or notification.  
  - Remove all high-risk perms (`Administrator`, `Manage Roles`, `Manage Channels`).


---

# 2. Channel Map (Recommended Layout)

```
📢 Announcements
└─ #nap-announcements (read-only; Admin/Clerk post)

🗂️ Cases & Records
├─ #evidence (submit; Clerk manage messages)
├─ #case-log (Clerk posts IDs/status)
├─ #vote-windows (Clerk opens/closes votes)
├─ #appeals (appeal submissions)
└─ #case-archive (read-only)

🏛️ Council
├─ #nap-council-chat (Council/Clerks/Admin)
└─ #nap-proposals (amendments + notice; Associates read)

🧭 Associates & Public
├─ #associate-lounge (Associates + Council + Clerks)
└─ #public-questions (optional; moderated)

🛠️ Clerks
└─ #clerk-desk (Clerks/Admin only)

🤖 Ops
├─ #bot-logs (bots send; Admin/Clerks read)
└─ #staff-notes (Admin/Clerks only)

🧭 Optional
├─ #training-room (onboarding; perms testing)
└─ #voice-briefing (voice; Council/Clerks only)
```

---

# 3. Permissions (Key Overwrites)

### #nap-announcements
- @everyone: **read-only**  
- Admin/Clerk: **send**  
- Disable threads/replies for all non-Clerks.

### #evidence
- Members+: **send messages**  
- Clerks: **manage messages**, **pin**, **create threads**  
- Council/Admin: read  
- Disable link embeds if needed.

### #case-log / #vote-windows
- Clerks: **send**, **manage messages**, **threads**  
- Council/Admin: **read**  
- Associates/Members: no access.

### #nap-council-chat
- Council/Clerks/Admin: **read/write**  
- Others: **no access**

### #nap-proposals
- Council/Clerks/Admin: **send**  
- Associates: **read-only**

### #appeals
- Members/Associates: **send**  
- Clerks: **manage messages**, **threads**  
- Council/Admin: read  
- Suggested slowmode: 15–60 seconds.

### #clerk-desk
- Clerks/Admin only.

### #bot-logs
- Bots: **send**  
- Admin/Clerk: **read**  
- Others: no access.

### #public-questions
- Everyone: **send** (slowmode enabled)  
- Clerks/Admin moderate

---

# 4. Thread Usage Standards

### Allowed
- `#case-log` — one thread per case if needed  
- `#vote-windows` — optional vote discussion thread  
- `#evidence` — clarification thread during correction windows  

### Who can create threads
- Clerks  
- Council members (in Council channels)

### Disallowed
- `#nap-announcements`  
- `#nap-proposals`  
- `#appeals`  
- `#public-questions`

### Archiving
- Auto-archive: **24–72 hours**  
- Clerks paste closed thread links in `#nap-council-chat` for reference.

---

# 5. Operational Usage Rules

- Evidence is submitted only in `#evidence`.  
- Clerks post Case IDs in `#case-log`.  
- Votes are opened/closed in `#vote-windows`.  
- Council deliberates only in `#nap-council-chat`.  
- Amendments appear in `#nap-proposals` with notice timers.  
- Announcements remain the *only* authoritative broadcast.
