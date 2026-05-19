# AGENTS.md — AI Agent Instructions

> **READ THIS FILE FIRST** before writing, modifying, or generating any code in this repository.

---

## Mandatory Pre-Coding Checklist

Before making ANY code change, you MUST:

1. **Read `.architecture/system.md`** — understand layers, boundaries, and data flow
2. **Read `.architecture/decisions.md`** — understand WHY things are built this way
3. **Identify which layer your change belongs to** — Page Object? Test Case? Execution File? Selector? Core?
4. **Verify your change does NOT violate any boundary rule** listed below
5. **Check for existing patterns** — search the codebase for similar implementations before creating new ones

---

## Non-Negotiable Architecture Rules

### 1. Layer Separation Is Absolute

```
Core (baseActionLibrary / baseAssertionLibrary)
  ↑ consumed by
Page Objects (pages/ExperienceApp/*.page.js)
  ↑ consumed by
Test Cases (test/ExperienceApp/*.test.js)
  ↑ orchestrated by
Execution Files (testResources/testExecutionFiles/**/*.json)
  ↑ configured by
Test Data (testResources/testcaseData/**/*.json)
  ↑ registered in
TC Repository (testResources/testcaseRepository/**/C1TCRepository.json)
```

**Each layer may only depend on the layer directly below it. Never skip layers.**

### 2. Selector Indirection Is Mandatory

- **NEVER hardcode CSS/XPath selectors in Page Objects or Test Cases**
- ALL selectors live in `testResources/selectors/ExperienceApp/C1Selectors.json`
- Page Objects access selectors via `selectorFile.css.ComproC1.<pageName>.<elementName>`
- Selector keys follow the pattern: `css.ComproC1.<pageName>.<elementName>`

### 3. Test Cases Are Stateless Functions

- Each `TST_XXXX_TC_N` function receives `testdata` and calls Page Object methods
- Test Cases MUST NOT directly use `$()`, `browser.*`, or raw selectors
- Test Cases MUST use `assertion.assertEqual()` (from baseAssertionLibrary) — never raw `chai` or `expect`
- Test Cases MUST NOT navigate or manage browser state — that is the Page Object's job

### 4. Page Objects Own All DOM Interaction

- All `click`, `setValue`, `getText`, `getAttribute`, `waitForDisplayed` calls go through `baseActionLibrary`
- Page Objects MUST use `var action = require('../../core/actionLibrary/baseActionLibrary.js')`
- Page Objects MUST load selectors via `var selectorFile = jsonParserUtil.jsonParser(selectorDir)`
- Click methods that navigate to a new page MUST call `require('./<nextPage>.page').isInitialized()` after successful click
- Every method MUST log via `await logger.logInto(await stackTrace.get(), ...)`

### 5. Execution Files Are Pure Configuration

- Execution JSON files MUST NOT contain logic — only references to test case IDs, test files, and data paths
- Every test case ID referenced in an execution file MUST exist in `C1TCRepository.json`
- Test data paths use `dataFile` + `jsonPath` to extract specific nodes from data JSON files

### 6. Naming Conventions Are Enforced

| Artifact | Convention | Example |
|---|---|---|
| Page Object | `<pageName>.page.js` | `manageReports.page.js` |
| Test File | `<pageName>.test.js` | `manageReports.test.js` |
| TC ID prefix | `TST_<4-char-module>_TC_<N>` | `TST_MRPT_TC_1` |
| Selector section | `css.ComproC1.<camelCase>` | `css.ComproC1.manageReports` |
| Execution file | `<descriptiveName>.json` | `manageReportsTest.json` |
| NPM script | `<feature>_<env>` | `manageReportsTest_thor` |

---

## Forbidden Actions

- ❌ **NEVER** import `baseActionLibrary` in a test file — only Page Objects may use it
- ❌ **NEVER** put CSS selectors as string literals in Page Objects — use `selectorFile` references
- ❌ **NEVER** use `assert`, `expect`, or `chai` directly in test files — use the global `assertion` object
- ❌ **NEVER** create an execution file that references a TC ID not registered in `C1TCRepository.json`
- ❌ **NEVER** modify `baseActionLibrary.js` or `baseAssertionLibrary.js` for feature-specific logic
- ❌ **NEVER** add environment-specific URLs to Page Objects — URLs come from `env.json` via `appUrl` global
- ❌ **NEVER** skip the `isInitialized()` pattern when navigating to a new page after a click

---

## How to Handle Uncertainty

1. **If unsure about a selector**: inspect the live site, use `qid` or `data-tid` attribute-based selectors (preferred), fall back to class-based selectors
2. **If unsure about test data structure**: examine existing data files in `testResources/testcaseData/ExperienceApp/<env>/` for the JSON nesting pattern
3. **If unsure about execution flow**: study `loginTest.json` or `activeClass.json` as reference execution files
4. **If unsure about a global variable**: `browser`, `$`, `$$`, `logger`, `stackTrace`, `assertion`, `argv`, `jsonParserUtil`, `selectorDir`, `appUrl`, `moduleOff` are all globals set by `wdio.conf.js` / `env.conf.js`
5. **If a pattern doesn't exist**: consult `.architecture/decisions.md` before inventing new patterns
