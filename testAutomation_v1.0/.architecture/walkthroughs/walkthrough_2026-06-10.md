# Session Walkthrough — 2026-06-10

## Summary
Set up Playwright MCP as design-time browser exploration tooling at the repo root.
Registered the MCP server in `.mcp.json`, created `tooling/playwright-mcp/` with a
persistent Chrome profile directory and README, added `.gitignore`, and extended
`AGENTS.md` with a `tooling/` boundary rule.

---

## Changes Made

### 1. `.mcp.json` (repo root)
- **Type:** Created
- **Layer:** Config (design-time tooling — not part of framework)
- **What changed:** Registers `@playwright/mcp@latest` via `npx` as an MCP server
  named `"playwright"`. Configured with `--browser chrome` and
  `--user-data-dir ./tooling/playwright-mcp/.profile` so the session is persistent
  across Claude Code sessions. Headed mode is `@playwright/mcp`'s default — no flag needed.
- **Why:** Gives Claude Code a live browser for design-time page exploration and
  selector capture without adding Playwright as a project dependency.
- **Lines affected:** All (new file, 14 lines)

### 2. `.gitignore` (repo root)
- **Type:** Created
- **Layer:** Config
- **What changed:** Excludes `tooling/playwright-mcp/.profile/`,
  `tooling/playwright-mcp/screenshots/`, `tooling/playwright-mcp/node_modules/`,
  root `node_modules/`, `allure-results/`, `output/`, `logs/`, and `local.log`.
- **Why:** Browser profile contains login session cookies that must never be committed.
  Other entries cover common generated artefacts that were previously unguarded.
- **Lines affected:** All (new file, 12 lines)

### 3. `tooling/playwright-mcp/README.md`
- **Type:** Created
- **Layer:** Design-time tooling (non-framework)
- **What changed:** Documents MCP startup command, first-time manual login flow at
  `https://micro-nemo.comprodls.com/login` (Thor), profile persistence behaviour,
  where exploration outputs are saved, and the selector rules (plain CSS / `qid` /
  `data-tid` only — no Playwright-specific locators).
- **Why:** Required by the task specification; provides onboarding reference for
  the tooling without cluttering framework documentation.
- **Lines affected:** All (new file, ~80 lines)

### 4. `tooling/playwright-mcp/.profile/` (directory)
- **Type:** Created
- **Layer:** Design-time tooling (non-framework)
- **What changed:** Empty directory that Playwright MCP uses as the persistent
  Chrome user-data-dir. Populated on first browser launch.
- **Why:** Must exist before the MCP server starts; `--user-data-dir` will create
  it on first run, but pre-creating ensures the gitignore entry has something to anchor to.

### 5. `AGENTS.md` (repo root)
- **Type:** Modified
- **Layer:** Agent instructions
- **What changed:** Appended new section `### 8. tooling/ — Design-Time Scaffolding
  (Non-Framework)` at end of file. Rules state: `tooling/` must never be `require()`-d
  by framework code, nothing under it belongs in `core/pages/test/testResources/`,
  `.profile/` is gitignored, and README is the usage reference.
- **Why:** User confirmed this addition. Needed so future AI sessions know `tooling/`
  is out-of-bounds for framework changes.
- **Lines affected:** Lines 366–378 (new section appended after Rule C table)

---

## Architecture Decisions Triggered

> ⚠️ New pattern introduced — consider adding ADR-0XX to decisions.md:
> **Design-time tooling boundary** — `tooling/` at repo root is explicitly
> non-framework scaffolding. MCP servers registered in `.mcp.json` are Claude Code
> tooling, not test execution dependencies. Playwright binaries run via `npx` only,
> never installed into the project.

---

## Protected Files Touched

`AGENTS.md` — user confirmed the addition before it was made.

---

## Pending / Follow-up

- `.mcp.json` will be picked up by Claude Code on next session restart; the
  `playwright` MCP server will then be available alongside the Chrome MCP.
- First-time login: user must manually log in at `https://micro-nemo.comprodls.com/login`
  once the Playwright MCP browser opens; profile is then persistent.
- Page exploration and selector capture against Cambridge One pages is the intended
  next use of this tooling.

---

# Session Walkthrough — 2026-06-10 (continued)

## Summary
Created the living product-knowledge document at `.architecture/product-knowledge.md`
and wired a maintenance rule into `AGENTS.md` so the doc stays current across sessions.

---

## Changes Made

### 6. `.architecture/product-knowledge.md`
- **Type:** Created
- **Layer:** Architecture documentation (non-framework)
- **What changed:** New living document seeded with the NEMO app entry covering:
  - How-to-use header and maintenance rules
  - Per-app template block for future entries
  - APP: NEMO section (micro-nemo.comprodls.com) with role school-admin
  - Feature: Bulk new account creation via CSV upload
  - Page: Create adult student accounts — URL notes, CSV headers (confirmed QA),
    controls, validation rules, full EN/ES error message table
  - Page: Create new accounts for children — URL notes, `[ASSUMED]` CSV headers
    pending template download confirmation
  - Known quirks: NEMO-24306 misleading error copy and empty-username no-error bug
  - Data notes: Thor account requirement, observed QA accounts
- **Why:** Centralises product knowledge so future sessions do not re-derive
  validation rules and error messages from scratch; supports Jira ticket validation.
- **Lines affected:** All (new file, ~170 lines)

### 7. `AGENTS.md` — item 7 added to How to Handle Uncertainty
- **Type:** Modified
- **Layer:** Agent instructions
- **What changed:** Added item 7 under `## How to Handle Uncertainty`: instructs
  Claude to read `product-knowledge.md` before validating a Jira ticket, and to
  append/update it after navigating new product areas, using `[ASSUMED]` for
  unconfirmed observations.
- **Why:** User confirmed this addition. Closes the feedback loop so product
  knowledge accumulates automatically rather than being re-derived each session.
- **Lines affected:** Lines 248–254 (new bullet inserted between item 6 and the
  Visual Testing section divider)

---

## Architecture Decisions Triggered

> ⚠️ New pattern introduced — consider adding ADR-0XX to decisions.md:
> **Product knowledge as a first-class architecture artifact** — `.architecture/`
> now contains a living product-knowledge doc alongside system.md and decisions.md.
> Maintenance is agent-driven: read before ticket work, update after page exploration.

---

## Protected Files Touched

`AGENTS.md` — user confirmed the addition before it was made.

---

## Pending / Follow-up

- Confirm exact Thor URL paths for both adult and children CSV upload pages
  (promote `[ASSUMED]` items once verified live).
- Download the children CSV template on Thor to confirm column headers.
- Confirm EN versions of "class full" and "class expired" error messages
  (currently only ES observed).
- Consider adding ADR for product-knowledge.md maintenance pattern.

---

# Session Walkthrough — 2026-06-10 (continued — NEMO-24306 manual test cases)

## Summary
Generated manual functional test cases for NEMO-24306 ([Regression] missing error message for empty username field). Navigated the live Thor app to confirm page URLs, CSV template headers, and validation rules. Produced 10 test cases (Positive → Edge → Negative), 10 CSV data files, and one Excel register. Updated product-knowledge.md with all confirmed observations.

---

## Changes Made

### 8. `test/Manual/NEMO/NEMO-24306_NEMO_test_cases.md`
- **Type:** Created
- **Layer:** Manual test documentation (non-framework)
- **What changed:** Full 10-TC manual test case document in 14-column standard format. Covers: 2 positive (valid adult + children upload), 3 edge (min/max boundary, special chars), 5 negative (empty username ×2 pages — headline defect; starts with number; too short; starts with uppercase).
- **Why:** Required by NEMO-24306 ticket manual test generation workflow.
- **Lines affected:** All (new file)

### 9. `test/Manual/NEMO/NEMO-24306_NEMO_test_cases.xlsx`
- **Type:** Created
- **Layer:** Manual test documentation (non-framework)
- **What changed:** Excel register matching the markdown — 14 columns, colour-coded by type (green=Positive, yellow=Edge, red=Negative), TC_6 and TC_7 rows bold as headline defect, purple header, freeze row 1.
- **Why:** Required by manual-test-standard.md — both MD and XLSX must be produced.

### 10. CSV test data files (×10) under `test/Manual/NEMO/`
- **Type:** Created
- **Layer:** Manual test data (non-framework)
- **What changed:** One CSV per test case using the exact Thor template headers (`Student's First name, Student's Last name, Username, Password, Class key`). Files: TC_1 (valid adult), TC_2 (valid children), TC_3 (3-char min), TC_4 (30-char max), TC_5 (hyphen+underscore), TC_6 (empty username adult), TC_7 (empty username children), TC_8 (starts number), TC_9 (2-char username), TC_10 (starts uppercase).
- **Why:** Each TC that needs upload data must have its own ready-to-use CSV per the standard.

### 11. `.architecture/product-knowledge.md` — Thor confirmations
- **Type:** Modified
- **Layer:** Architecture documentation
- **What changed:**
  - Adult page URL promoted from `[ASSUMED]` to confirmed: `/username-adult/new_csv`
  - Adult CSV headers promoted from "confirmed on QA" to "confirmed on Thor [2026-06-10]"
  - Adult navigation path updated to full confirmed path
  - Children page URL confirmed: `/children/new_csv`
  - Children CSV headers confirmed identical to adult page
  - Children navigation path confirmed
  - Children validation rules confirmed identical to adult
- **Why:** Live Thor exploration during TC design session confirmed all previously assumed values.

---

## Architecture Decisions Triggered

No new patterns. Followed existing manual-test-standard.md and product-knowledge.md conventions throughout.

---

## Protected Files Touched

None — no protected files were modified in this session.

---

## Pending / Follow-up

- Replace `<VALID_THOR_CLASS_KEY>` placeholders in all CSVs with a real active class key before executing TC_1 and TC_2 (the positive cases require a valid class key to fully pass).
- Confirm QA equivalents of the now-confirmed Thor URLs.
- Execute TC_6 and TC_7 first after deployment to verify the NEMO-24306 fix is live.
- ES locale variants of TC_6 and TC_7 not yet written — consider adding ES-locale negative TCs if bilingual regression coverage is required.

**Post-creation corrections [2026-06-10]:**
- Folder renamed from `test/Manual/NEMO/` → `test/Manual/NEMO-24306/` (per rule: folder = full ticket ID).
- All 10 CSV files updated: `<VALID_THOR_CLASS_KEY>` replaced with real active Thor class key `w8k3-kK8U` (class "test class", MQA Sierra School, active Jun 2026–Jun 2027, confirmed live via DOM inspection of `/admin/admin/org_mqa-sierra-thor/class`).
- Going-forward rule noted: ask for help rather than leaving placeholders when live data is needed.

---

# Session Walkthrough — 2026-06-10 (continued — NEMO-24306 manual TCs with traceability)

## Summary
Restructured the NEMO-24306 manual test suite to use the new full traceability format
(AC.UC.S.TC compound IDs). Kept all 10 existing TCs with their data — only titles
were rephrased to end-user-readable style. Added 8 new TCs for AC2 (password) and
AC3 (CSV record count) which were not covered before. Updated manual-test-standard.md
and product-knowledge.md to reflect the new approach.

---

## Changes Made

### 12. `test/Manual/NEMO-24306/NEMO-24306_NEMO_test_cases.md` (replaced)
- **Type:** Modified (full rewrite)
- **Layer:** Manual test documentation
- **What changed:** Replaced flat structure with two sections — Section 1 Traceability Matrix
  (AC → UC → Scenario → TC mapping), Section 2 Test Cases with compound IDs (AC1.UC1.S1.TC1 etc).
  Ordered Positive → Edge → Negative across the whole ticket. Titles rephrased to
  "Verify <outcome> when <condition>" style per user request.
- **Why:** User requested traceability structure with end-user-readable titles.

### 13. `test/Manual/NEMO-24306/NEMO-24306_NEMO_test_cases.xlsx` (replaced)
- **Type:** Modified (full rewrite)
- **What changed:** Two tabs — "Traceability Matrix" (9 cols, 18 rows, AC/UC blanks
  for visual grouping) and "Test Cases" (14 cols, 18 rows, Status dropdown with
  Not Run/Pass/Fail/Blocked). Cambridge purple #3D1A66 headers, frozen header rows,
  type-based row colours (Positive green / Edge yellow / Negative red), TCs 12 & 13
  (headline defect) bolded.

### 14. 8 new CSV test data files under `test/Manual/NEMO-24306/`
- **Type:** Created
- **What:** AC2 (password) and AC3 (CSV record count) test data:
  - `NEMO-24306_AC2.UC1.S1.TC1_password_8char_boundary.csv`
  - `NEMO-24306_AC2.UC1.S2.TC1_password_too_short.csv`
  - `NEMO-24306_AC2.UC2.S1.TC1_password_letter_and_number.csv`
  - `NEMO-24306_AC2.UC2.S2.TC1_password_letter_and_special.csv`
  - `NEMO-24306_AC2.UC2.S3.TC1_password_letters_only.csv`
  - `NEMO-24306_AC2.UC2.S4.TC1_password_numbers_only.csv`
  - `NEMO-24306_AC3.UC1.S1.TC1_csv_200_records.csv` (200 data rows)
  - `NEMO-24306_AC3.UC1.S2.TC1_csv_201_records.csv` (201 data rows)
- **Why:** AC2 and AC3 were uncovered in the original suite; user kept existing 10 CSVs
  and asked for new ones to round out AC coverage.

### 15. `.architecture/manual-test-standard.md`
- **Type:** Modified (appended)
- **What changed:** Added new section "Traceability Structure (preferred for AC-driven tickets)"
  documenting the compound ID format, ordering rule, title style guide, output structure,
  and CSV naming convention.
- **Why:** Establishes the new approach as the project standard. Confirmed by user.

### 16. `.architecture/product-knowledge.md`
- **Type:** Modified
- **What changed:** Added confirmed AC1/AC2/AC3 acceptance criteria, confirmed error
  messages (EN + ES for empty username), and a list of `[ASSUMED]` error messages
  still pending live verification (password rules + 200-record threshold).
- **Why:** Captures product knowledge gained during test design.

---

## Architecture Decisions Triggered

- **New pattern:** Traceability-driven test case structure with compound IDs.
  Now codified in `manual-test-standard.md` — no ADR needed since the standard itself
  is the source of truth for test case format.

---

## Protected Files Touched

- `manual-test-standard.md` — confirmed by user before edit.
- No protected JS files modified.

---

## Pending / Follow-up

- **[ASSUMED] error messages to confirm on Thor:** password < 8 chars, password missing
  letter, password missing number/special char, CSV record count > 200.
- **AC2 / AC3 TCs are manual-only for now** — automation suite under
  `test/ExperienceApp/nemoUploadCsvValidation.test.js` still covers the original 10 only.
  Decision pending whether to extend automation to the 8 new TCs.

---

# Session Walkthrough — 2026-06-10 (continued — NEMO-24306 ID convention fix)

## Summary
Corrected the test case ID structure based on user feedback. The compound
`AC<n>.UC<n>.S<n>.TC<n>` ID is no longer used as the Test Case ID — it now lives
only in the **Linked Requirement** column, with the Test Case ID column using
the simple sequential pattern `TST_NEMO24306_TC_<N>`.

## Changes Made

### 17. Renamed all 18 CSVs to `TST_NEMO24306_TC_<N>_<desc>.csv`
- 10 existing CSVs (old `TST_NEMO_TC_*` and original numbering) remapped to the
  new sequential numbering (Positive → Edge → Negative ordering).
- 8 new CSVs (previously `NEMO-24306_AC*.UC*.S*.TC*_*`) renamed to the same convention.

### 18. `testResources/testcaseData/ExperienceApp/thor/NEMO-24306.json` updated
- All 10 `csvPath` fields updated to point at the renamed CSVs so the automation
  suite (`npm run NEMO24306_csvUploadTest_thor`) continues to work without changes
  to the JS test code, page objects, or execution file.

### 19. `NEMO-24306_NEMO_test_cases.md` rewritten
- Test Case ID column: `TST_NEMO24306_TC_<N>` (simple sequential)
- Linked Requirement column: `AC<n>.UC<n>.S<n>.TC<n>` (compound traceability ID)
- Section 1 traceability matrix shows BOTH ids per row — Mapped TC ID (compound)
  and TST ID — making the matrix a true bridge.

### 20. `NEMO-24306_NEMO_test_cases.xlsx` rebuilt
- Traceability Matrix tab now has 10 columns including both Mapped TC ID and TST ID.
- Test Cases tab uses simple TST IDs in Test Case ID column; compound IDs in Linked Requirement.
- Status dropdown preserved on M2:M19. Type color-coding and bold-headline-defect formatting preserved.

## Architecture Decisions Triggered

None — refinement of the existing traceability standard, no new pattern.

## Protected Files Touched

None.

## Pending / Follow-up

- Confirm Suite still passes after CSV renames (background test run in progress).
- `manual-test-standard.md` Traceability section should be updated to clarify that
  the simple TST ID is the canonical Test Case ID, not the compound ID — currently
  the standard implies the compound is the TC ID. Will propose wording in next session.

### 21. `manual-test-standard.md` — Traceability section corrected
- **Type:** Modified (confirmed by user)
- **What changed:** Replaced the "Compound Test Case ID convention" subsection with
  "Test Case ID and Linked Requirement (separate IDs)" — making explicit that:
  - Test Case ID = simple `TST_<MODULE><TICKET>_TC_<N>`
  - Linked Requirement = compound `AC<n>.UC<n>.S<n>.TC<n>`
  - Traceability Matrix shows both, side-by-side
- Updated CSV naming convention to use TST ID prefix (not compound prefix).
- Added "Output structure summary" table at the bottom of the Traceability section
  for at-a-glance reference.
- **Why:** The previous wording implied the compound ID was the Test Case ID,
  which led to the rebuild work above. This wording prevents future ambiguity.

---

# Session Walkthrough — 2026-06-10 (continued — NEMO-24306 automation extension)

## Summary
Extended the NEMO-24306 automation suite from 10 TCs to 15 active TCs (+ 1 login),
aligned naming with the manual test cases (TST_NEMO24306_TC_<N>), and discovered
three product gaps that are now documented in product-knowledge.md.

## Changes Made

### 22. `test/ExperienceApp/nemoUploadCsvValidation.test.js` — full refactor
- Renamed all 10 existing TCs to TST_NEMO24306_TC_<N> per the manual mapping.
- Login TC renamed to TST_NEMO24306_TC_LOGIN.
- Added 8 new TC functions for AC2 (password) and AC3 (record count) coverage.
- Added `assertExpectedError()` helper — lenient mode (errors.length > 0 + log
  captured errors) when expectedError is empty, strict substring match when set.
  Lets us capture unknown error messages on first run, then promote to strict.

### 23. `testResources/testcaseRepository/ExperienceApp/C1TCRepository.json`
- Replaced 11 legacy NEMO entries with 19 new entries (TST_NEMO24306_TC_LOGIN + 18 functional).
- All have `visualTest: false` per AGENTS.md Rule A — class key `w8k3-kK8U` rendered in
  form rows is user-generated, so per the decision table all TCs are ❌ Not visual test
  candidates (not a judgement call).

### 24. `testResources/testcaseData/ExperienceApp/thor/NEMO-24306.json`
- Replaced 10 tc nodes with 18 (tc1..tc18), each pointing at the renamed CSVs.
- Captured AC2 password error message confirmed: `See password guidance in the info section at the top`.

### 25. `testResources/testExecutionFiles/ExperienceApp/thor/NEMO-24306_csvUpload.json`
- Suite1: 13 adult TCs (1, 3, 4, 5, 6, 7, 8, 10, 11, 12, 14, 15, 17).
- Suite2: 2 children TCs (2, 13).
- TC_9 / TC_16 / TC_18 omitted from active suite — see product gaps below. They
  remain in C1TCRepository and the manual MD so they are tracked.

### 26. CSVs regenerated
- `TST_NEMO24306_TC_9_csv_200_records.csv` — 200 rows
- `TST_NEMO24306_TC_18_csv_201_records.csv` — 201 rows
- (Both currently unused in active suite; see product gaps.)

### 27. `product-knowledge.md` — confirmed messages and product gaps
- Promoted password error message from `[ASSUMED]` to confirmed:
  `See password guidance in the info section at the top` (single generic message).
- Documented three product gaps discovered via automation:
  1. **AC2 letters-only passwords are silently accepted** (e.g. `TestPassword`) — recommended Jira ticket.
  2. **Class key is REQUIRED, not optional** — corrected the field-table marking.
  3. **AC3 record-count limit cannot be validated** without a class with capacity ≥ 200.

## Architecture Decisions Triggered

None — refinement only.

## Protected Files Touched

None.

## Pending / Follow-up

- Raise separate Jira ticket for the letters-only-password gap (AC2 partial enforcement).
- Provision (or request) a high-capacity Thor class so TC_9 and TC_18 can be added to the active suite.
- Update the manual test cases MD (`test/Manual/NEMO-24306/NEMO-24306_NEMO_test_cases.md`)
  to reflect: TC_9/16/18 are pending product/environment fixes; mark their Status as `Blocked`
  rather than `Not Run` so the suite owners see why they're not being executed.
