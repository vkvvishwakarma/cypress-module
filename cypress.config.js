const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '3v22zt',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
