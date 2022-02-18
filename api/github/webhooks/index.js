const { createNodeMiddleware, Probot } = require("probot");
const app = require("../../../index.js");
const probot = new Probot();
module.exports = createNodeMiddleware(app, { probot, webhooksPath: '/api/github/webhooks'});
