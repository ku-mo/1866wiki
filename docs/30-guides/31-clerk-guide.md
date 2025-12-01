---
id: guide-clerks
title: Clerk Operational Guide
sidebar_label: Clerk Guide
sidebar_position: 31
description: Full operational handbook for NAP 9 Clerks, including workflow, discretion rules, and standards.
slug: /guide-clerks
---

# NAP 9 Clerk Guide

:::info Guide
This guide explains, step by step, how to perform the role safely and correctly.
:::

Clerks operate the procedural backbone of NAP 9.  

They manage evidence, cases, votes, and archives while remaining entirely neutral.  


---

# 1. Role Definition

Clerks are **procedural officers**, not decision-makers. They:

- validate evidence  
- create and log cases  
- manage vote windows  
- conduct appeal investigations  
- maintain archives  
- track enforcement and compliance

Clerks **do not** classify behavior, argue penalties, influence votes, or participate in diplomacy.  

Your authority is procedural only.

---

# 2. Professional Standards

Clerks must meet the following conduct standards at all times:

- Use concise, neutral language.  
- Never use sarcasm, implications, or rhetorical questions.  
- Respond to R5 inquiries within approximately **2 hours**, when feasible.  
- Use **Server Time (ST)** for all timestamps.  
- Never delete messages, edit governance logs, or redact evidence.  
- Document all actions. If it happened, it should be logged.

The Clerk’s credibility is institutional. Consistency is mandatory.

---

# 3. Evidence Handling

Evidence determines whether a case can exist. Follow this sequence precisely:

### 3.1 Verification Checklist
Check for:

- clarity of the incident  
- identity of offender(s) and affected party  
- timestamp or verifiable chronology  
- rule relevance  
- completeness and legibility

### 3.2 Incomplete Evidence
If evidence is incomplete:

1. Send a correction list stating exactly what is missing.  
2. Assign a **6-hour correction window** (extend to 12–24h only for time zones or clarity).  
3. Record that a correction was issued.

### 3.3 Rejection Conditions
Evidence must be rejected if:

- cropped to remove context or timestamps  
- edited or manipulated  
- unverifiable  
- submitted only via DM  
- AI-generated or fabricated  
- still incomplete after correction window

Severe tampering requires creating a **separate case** for evidence manipulation.

### 3.4 Logging Extensions or Rejections
Note all extensions, failures, and rejections in `#case-log` for transparency.

---

# 4. Creating and Logging Cases

A case **exists** only when a Clerk creates it. Follow this exact workflow:

### Step 1 — Validate Evidence
Do not proceed until evidence is accepted.

### Step 2 — Assign Case ID
Use:  
`C-YYMMDD-XX`  
- XX increments per day  
- Do not reuse numbers  
- Maintain chronological order

### Step 3 — Log in `#case-log`
Include:

- Case ID  
- ST timestamp  
- Reporting alliance  
- Offender(s)  
- Preliminary classification (Minor/Moderate/Severe/Exceptional)  
- 1–2 sentence summary  
- Direct link to evidence  
- **Status: ACTIVE**

The **first responding Clerk** owns the case. A second Clerk audits when free.

---

# 5. Vote Management

Votes must be procedurally identical every time.

### 5.1 When to Open a Vote Window
A vote may open **only after**:

1. evidence validation  
2. case logging  
3. preliminary classification

### 5.2 Opening the Vote
Post in `#nap-votes`:

- Case ID  
- Vote duration (8h / 16h / 24h)  
- End time (ST)  
- Options: YES / NO / ABSTAIN  
- Quorum (5)  
- Note: votes are locked once posted

Pin the message.

### 5.3 During the Vote
- Track votes as they arrive  
- Ping missing alliances at the halfway point  
- Announce when quorum is reached  
- Close early if all nine votes are submitted

### 5.4 Closing the Vote
At the end of the window:

- record vote totals  
- state the outcome explicitly  
- log results in `#case-log`  
- unpin the window  
- notify the Council that the case is moving to resolution

If someone attempts to change or double-vote, state:  
**“The original vote stands.”**

---

# 6. Penalty Tracking

Once penalties are issued:

- record the start and end time  
- track restitution progress  
- confirm dethroning/untagging/tag return if required  
- monitor alliance compliance  
- request proof when necessary  
- log all compliance evidence

If an alliance attempts to shelter an offender, log the attempt and notify Council immediately.

---

# 7. Handling Difficult or Uncooperative R5s

Your neutrality is your shield.

### 7.1 Required Procedure
- Document all interactions  
- Notify the other Clerks  
- Escalate to Council if they pressure or obstruct you  
- Use the macro:

`I cannot engage in this discussion. Please direct governance concerns to the Council.`

Never debate outcomes. Never justify decisions beyond procedure.

---

# 8. Emergency Protocols

### 8.1 No Clerk Online
If an urgent matter arises:

- After 2 hours: R5s may ping Clerks  
- After 4 hours: Council may initiate an **8-hour Emergency Temporary Clerk Vote**

Temporary Clerks may:

- verify evidence  
- create/log cases  
- open vote windows

They may **not** archive, manage appeals, or exercise discretionary delays unless stated in the vote text.

### 8.2 Backlog Overflow
If more than 5 cases accumulate:

- Prioritize: Severe → Moderate → Minor  
- Assign a **Lead Clerk** to each case  
- Batch similar cases together when clarity improves

### 8.3 Evidence Tampering
If tampering is suspected:

- freeze the original case  
- create a new tampering case  
- notify the Council  
- preserve all versions of the evidence

---

# 9. Appeals Workflow

Appeals require rigorous neutrality.

### Step 1 — Validate Eligibility
A case is appealable only if penalty >48 hours or permanent.  
Assign **6h correction window** for missing items.

### Step 2 — Assign Appeal ID
Use: `AP-YYMMDD-XX`

### Step 3 — Log & Notify
Record the appeal in `#case-log` and notify Council.

### Step 4 — Investigative Review (24 hours)
Check:

- original evidence  
- procedural correctness  
- timestamp integrity  
- new submissions  
- mitigating or aggravating factors  
- relevant precedent

Write a **neutral summary** with a directional recommendation (uphold / reduce / overturn).  
Do not suggest specific penalties.

### Step 5 — Open 24h Vote
After summary is posted.

### Step 6 — Archive Results
Record vote totals, changes to the penalty, and final notes.

---

# 10. Archival Standards

Every case must have a complete record.

Required archive contents:

- Case ID and Appeal ID (if any)  
- all evidence  
- summaries  
- vote windows  
- vote totals  
- penalty durations  
- compliance confirmations  
- amendments or appeals attached  
- final resolution  
- Clerk notes

Recommended folder structure:

/cases/C-YYMMDD-XX
/appeals/AP-YYMMDD-XX
/amendments


Archives must be readable by all Full Member representatives.

---

# 11. Discretion Rules

Clerks **may**:

- extend correction windows for time zones or clarity  
- consolidate duplicate or tightly linked cases  
- delay a vote by a short interval for factual clarification  
- reject unclear or unverifiable evidence  
- request further context to establish chronology

Clerks **may not**:

- delay votes to influence outcomes  
- hide or omit evidence  
- interpret intent  
- argue penalties  
- wait for specific voters  
- classify behavior  
- direct the Council toward a desired result

Your discretion is strictly procedural.

---

## 12. Clerk Macros (Discord-Ready)

**Evidence Correction**
```
Missing items: [list].
Please provide within 6 hours or the evidence will be rejected.
```

**Case Created**
```
🗂️ Case Created — [ID].
Status: ACTIVE.
Council may begin review.
```

**Vote Opened**
```
📢 VOTE OPENED — [ID]
Duration: [8h/16h/24h]
Ends: [Server Time]
Quorum: 5
Options: YES / NO / ABSTAIN
```

**Vote Closed**
```
🗳️ VOTE CLOSED — [ID]
YES: [x]
NO: [x]
ABSTAIN: [x]
Outcome: [passed/failed]
```

**Case Closed**

```
🗂️ Case Closed — [ID]
Resolution: [penalty/dismissal]
Archive updated.
```

---

# End of Guide
A Clerk’s work determines the entire system’s legitimacy.  
Precision, neutrality, and documentation are the non-negotiable foundations of your role.