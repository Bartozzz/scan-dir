module.exports = {
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/changelog",
    "@semantic-release/npm",
    "@semantic-release/git",
    "@semantic-release/github",
    [
      "@saithodev/semantic-release-backmerge",
      {
        branchName: "development",
        plugins: [
          "@semantic-release/exec",
          {
            successCmd: "echo 'Version in master is ${nextRelease.version}'",
          },
        ],
      },
    ],
  ],
};
