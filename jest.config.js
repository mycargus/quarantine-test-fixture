/** @type {import('jest').Config} */
module.exports = {
  reporters: [
    "default",
    ["jest-junit", { outputDirectory: ".", outputName: "junit.xml" }],
  ],
}
