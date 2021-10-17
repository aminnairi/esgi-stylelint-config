const stylelint = require("stylelint");
const stylelintOptions = require("../index.js");

stylelint.lint({
  formatter: "string",
  config: stylelintOptions,
  files: (process.argv[2] || "").split(/\s+/)
}).then(result => {
  if (result.errored) {
    throw new Error(result.output);
  }
}).catch(error => {
  console.error(error.message);
  process.exit(1);
});
