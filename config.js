module.exports = {
  platform: "github",
  //   autodiscover: true,
  repositories: ["chihhui-w/github-workflow-template"],
  onboarding: true,
  onboardingConfig: {
    extends: ["github>your-org/renovate-config"],
  },
  enabledManagers: ["github-actions"],
};
