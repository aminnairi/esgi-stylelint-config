const stylelint = require("stylelint");
const stylelintOptions = require("../index.js");

stylelint.lint({
  config: stylelintOptions,
  files: (process.argv[2] || "").split(/\s+/)
}).then(result => {
  if (result.errored) {
    const errors = JSON.parse(result.output);
    const message = errors.map(error => error.warnings.map(warning => `${error.source}:${warning.line}:${warning.column}: ${warning.text}`).join("\n")).join("\n");

    throw new Error(message);
  }
}).catch(error => {
  console.error(error.message);
});
