# Playwright MCP — Design-Time Exploration Tooling

> **Design-time only.** This folder and the MCP server it configures are for
> interactive page exploration and selector capture by Claude Code at design time.
> They are NOT part of WebDriverIO test execution and must never be imported by
> any framework code.

---

## What this is

`@playwright/mcp` is a Model Context Protocol server that gives Claude Code a
live browser it can navigate, screenshot, and inspect. We use it to:

- Explore the Cambridge One web app in a real browser
- Capture `qid` / `data-tid` attribute selectors for entry into `C1Selectors.json`
- Verify page structure before writing page objects

The MCP is registered in `.mcp.json` at the repo root and is picked up
automatically by Claude Code when you start a session.

---

## Starting the MCP

Claude Code starts the MCP server automatically when it is connected. No manual
startup is required. If you need to invoke it manually for debugging:

```bash
npx @playwright/mcp@latest \
  --browser chrome \
  --user-data-dir ./tooling/playwright-mcp/.profile
```

The browser launches in **headed mode** (visible window) by default — no extra
flag needed; headed is `@playwright/mcp`'s default.

---

## First-time login (manual step required)

The persistent profile under `tooling/playwright-mcp/.profile/` stores your
Cambridge One session so you only need to log in once.

**First run:**
1. Claude Code will open a Chrome window via the MCP.
2. Navigate to **https://micro-nemo.comprodls.com/login** (Thor environment).
3. Log in manually with your Cambridge One credentials.
4. Tell Claude Code "I have logged in" — it will then proceed with page exploration.

On subsequent runs the session cookie is restored from the profile and login
is skipped automatically.

> The `.profile/` directory is listed in `.gitignore` — credentials and cookies
> are never committed to the repository.

---

## Captured exploration outputs

Screenshots and notes from exploration sessions are saved here:

```
tooling/playwright-mcp/screenshots/   ← page screenshots (gitignored)
```

Selectors discovered during exploration are written directly into:

```
testResources/selectors/ExperienceApp/C1Selectors.json
```

following the project convention `css.ComproC1.<pageName>.<elementName>`.

---

## Selector rules (IMPORTANT)

When capturing selectors, Claude Code follows the project rule:

- **Preferred:** `[qid="..."]` or `[data-tid="..."]` attribute selectors
- **Fallback:** plain CSS class/attribute selectors
- **Never:** Playwright-specific locators (`getByRole`, `text=`, `:has-text()`, `>>`)

All captured selectors must be valid WebDriverIO CSS selector strings so they
can be pasted directly into `C1Selectors.json`.
