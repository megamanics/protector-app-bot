console.log("index.js loaded")
const { createNodeMiddleware, createProbot } = require("probot");
const app = require("../../../app");
const probot = createProbot({
  appId: process.env.APP_ID,
  privateKey: process.env.PRIVATE_KEY,
  secret: process.env.WEBHOOK_SECRET
});
module.exports = createNodeMiddleware(app, { probot, webhooksPath: '/api/github/webhooks' });
