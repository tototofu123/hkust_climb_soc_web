# Minor Adjustment Workflow (MANDATORY)

Use this workflow for every small change, minor fix, or project adjustment. This is the required protocol for HKUST Climbing Society.

1.  **Modify Source**: Apply the requested code change (e.g., updating event pricing, fixing a typo).
2.  **Bump Version**:
    -   Identify current version in `package.json`.
    -   Increment the patch version (e.g., `0.0.3` -> `0.0.4`).
    -   Update `package.json`.
    -   Update the header in `README.md`.
    -   Update the GitHub Action version in `.github/workflows/meaningful-builds.yml`.
3.  **Update Changelog**:
    -   Add a new entry to `VERSION_UPDATES.md` under the new version number.
    -   Append a summary to the "Edited" section at the end of `README.md`.
4.  **Meaningful Commit**:
    -   Include the version number in the commit message.
    -   Describe exactly what was fixed/changed.
    -   Example: `git commit -m "v0.0.4: Update training fee transparency and rental info"`
5.  **Push**:
    -   `git push origin main`
6.  **Verify**:
    -   Confirm that the GitHub Action run name reflects the new version.
