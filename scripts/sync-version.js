const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Configuration
const packagePath = path.resolve(__dirname, '../package.json');
const readmePath = path.resolve(__dirname, '../README.md');
const codebasePath = path.resolve(__dirname, '../CODEBASE.md');
const workflowPath = path.resolve(__dirname, '../.github/workflows/meaningful-builds.yml');
const changelogPath = path.resolve(__dirname, '../VERSION_UPDATES.md');

// 1. Read package.json and bump version
const pkg = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
const oldVersion = pkg.version;
const versionParts = oldVersion.split('.');
versionParts[2] = parseInt(versionParts[2]) + 1;
const newVersion = versionParts.join('.');
pkg.version = newVersion;
fs.writeFileSync(packagePath, JSON.stringify(pkg, null, 2) + '\n');

console.log(`Bumping version: ${oldVersion} -> ${newVersion}`);

// 2. Update README.md
let readme = fs.readFileSync(readmePath, 'utf8');
readme = readme.replace(new RegExp(`\\(V${oldVersion}\\)`, 'g'), `(V${newVersion})`);
// Add history entry to README
const readmeHistoryMarker = '### 📝 Edited:';
const today = new Date().toISOString().split('T')[0];
const newHistoryEntry = `### 📝 Edited: Auto-Sync (v${newVersion})\n- **Commit**: Automatic version bump and push protocol enforcement.\n- **Date**: ${today}\n\n`;
readme = readme.replace(readmeHistoryMarker, `${newHistoryEntry}${readmeHistoryMarker}`);
fs.writeFileSync(readmePath, readme);

// 3. Update CODEBASE.md
let codebase = fs.readFileSync(codebasePath, 'utf8');
codebase = codebase.replace(new RegExp(`\\(V${oldVersion}\\)`, 'g'), `(V${newVersion})`);
fs.writeFileSync(codebasePath, codebase);

// 4. Update workflow yml
let workflow = fs.readFileSync(workflowPath, 'utf8');
workflow = workflow.replaceAll(oldVersion, newVersion);
fs.writeFileSync(workflowPath, workflow);

// 5. Update VERSION_UPDATES.md
let changelog = fs.readFileSync(changelogPath, 'utf8');
const changelogMarker = '# Version Updates & Changelog\n\n';
const newChangelogEntry = `## [V${newVersion}] - ${today}\n### Protocol Reinforcement\n\n#### 🚀 technical\n- **Auto-Sync**: Triggered automatic metadata synchronization and version bump.\n\n---\n\n`;
changelog = changelog.replace(changelogMarker, `${changelogMarker}${newChangelogEntry}`);
fs.writeFileSync(changelogPath, changelog);

console.log('Successfully updated all metadata files.');

// 6. Git operations
try {
    const commitMsg = `v${newVersion}: Auto-sync metadata and enforce push protocol`;
    console.log('Running git commands...');
    execSync('git add .');
    execSync(`git commit -m "${commitMsg}"`);
    execSync('git push origin main');
    console.log('Successfully pushed to Git.');
} catch (error) {
    console.error('Git operation failed:', error.message);
}
