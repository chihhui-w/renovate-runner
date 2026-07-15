module.exports = {
  platform: "github",
  //   autodiscover: true,
  repositories: ["chihhui-w/github-workflow-template"],
  onboarding: true,
  onboardingConfig: {
    $schema: "https://docs.renovatebot.com/renovate-schema.json",
    extends: ["config:recommended"],
  },
  enabledManagers: ["github-actions"],
};
