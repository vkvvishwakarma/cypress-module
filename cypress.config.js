const { defineConfig } = require("cypress");
module.exports = defineConfig({
  projectId: '3v22zt',
  e2e: {
    baseUrl:"https://healthcaresuccess.com/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
