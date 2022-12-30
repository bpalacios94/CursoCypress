const { defineConfig } = require("cypress");


module.exports = defineConfig({
  
  e2e: {
  
    baseUrl: 'https://demoqa.com',
    // baseUrl: 'https://example.cypress.io'
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    excludeSpecPattern:[
      "/1-getting-started/*.js",
      "/2-advanced-examples/*.js"
      ]
  },
});
