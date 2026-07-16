module.exports = {
  platform: "github",
  osvVulnerabilityAlerts: true, // OSV vulnerability alerts
  vulnerabilityAlerts: {
    // 讀 GitHub 原生 Dependabot alerts
    enabled: true, // 預設就是 true，寫出來明示
    labels: ["security"],
  },
  gitAuthor: "chihhui-w",
  //   autodiscover: true,
  repositories: [
    "chihhui-w/github-workflow-template",
    "chihhui-w/renovate-runner",
  ],
  onboarding: true,
  onboardingConfig: {
    $schema: "https://docs.renovatebot.com/renovate-schema.json",
    extends: ["config:best-practices"],
  },
  enabledManagers: ["github-actions"],
  packageRules: [
    {
      // patch/digest: grouping and automerge
      matchManagers: ["github-actions"],
      matchUpdateTypes: ["patch", "digest"],
      groupName: "github-actions-patch-digest",
      automerge: true,
    },
    {
      // minor：grouping but no automerge
      matchManagers: ["github-actions"],
      matchUpdateTypes: ["minor"],
      groupName: "github-actions-minor",
      // 不寫 automerge
    },
    {
      // major：no grouping, no automerge, separate PRs
      matchManagers: ["github-actions"],
      matchUpdateTypes: ["major"],
    },
  ],
  prHourlyLimit: 0, // 0: no limit
  platformCommit: "enabled",
  minimumReleaseAge: "7 days",
  addLabels: ["DevOps"],
};
