const { createNodeMiddleware, Probot } = require("probot");
const app = require("../../../index.js");
const probot = new Probot({
  appId: 172112,
  privateKey: process.env.PK,
  secret: process.env.SECRET
});

module.exports = createNodeMiddleware(app, { probot, webhooksPath: '/api/github/webhooks'});
