module.exports = {
  preset: "@vue/cli-plugin-unit-jest",
  collectCoverage: true,
  collectCoverageFrom: [
    "**/*.{js,vue}",
    "!**/node_modules/**",
    "!**/main.js",
    "!**/src/plugins/**",
    "!**/mocked-data/**", 
    "!**/coverage/**",
    "!**/*.config.js",
    "!**/router/**"
  ],
  coverageReporters: ["html", "text-summary"]
};
