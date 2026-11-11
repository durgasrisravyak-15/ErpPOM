# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: multipledatausingjsonfile.spec.ts >> ERP multiple data >> validate supplier David
- Location: tests\multipledatausingjsonfile.spec.ts:24:13

# Error details

```
Error: locator.waitFor: SyntaxError: Failed to execute 'evaluate' on 'Document': The string '..glyphicon.glyphicon-search.ewIcon' is not a valid XPath expression.
    at Object.queryAll (<anonymous>:6481:25)
    at InjectedScript._queryEngineAll (<anonymous>:7241:49)
    at InjectedScript.querySelectorAll (<anonymous>:7228:30)
    at eval (eval at evaluate (:370:30), <anonymous>:2:42)
    at UtilityScript.evaluate (<anonymous>:372:16)
    at UtilityScript.<anonymous> (<anonymous>:1:44)
Call log:
  - waiting for locator('..glyphicon.glyphicon-search.ewIcon') to be visible

```