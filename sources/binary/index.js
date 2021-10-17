const stylelint = require("stylelint");
const stylelintOptions = require("../index.js");

stylelint.lint({
  fix: true,
  formatter: "string",
  config: stylelintOptions,
  files: process.argv.slice(2)
}).then(result => {
  if (result.errored) {
    throw new Error(result.output);
  }
}).catch(error => {
  console.error(error.message);
  process.exit(1);
});
