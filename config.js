module.exports = {
  platform: "github",
  //   autodiscover: true,
  repositories: [
    "chihhui-w/github-workflow-template",
    "chihhui-w/renovate-runner",
  ],
  onboarding: true,
  onboardingConfig: {
    $schema: "https://docs.renovatebot.com/renovate-schema.json",
    extends: ["config:recommended"],
  },
  enabledManagers: ["github-actions"],
  packageRules: [
    { matchManagers: ["github-actions"], groupName: "github-actions" },
  ],
  prHourlyLimit: 0, // 0: no limit
  minimumReleaseAge: "7 days",
};
