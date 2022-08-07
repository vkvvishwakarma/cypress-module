const { defineConfig } = require("cypress");
module.exports = defineConfig({
  projectId: '3v22zt',
  e2e: {
    baseUrl:"https://healthcaresuccess.com/",
    setupNodeEvents(on, config) {

      const getCompareSnapshotsPlugin = require('cypress-image-diff-js/dist/plugin')
      getCompareSnapshotsPlugin(on, config)
      // implement node event listeners here
    },
  },
});

// module.exports = (on, config) => {
//   const getCompareSnapshotsPlugin = require('cypress-image-diff-js/dist/plugin')
//   getCompareSnapshotsPlugin(on, config)
// }

