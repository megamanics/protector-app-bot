const { createNodeMiddleware, Probot } = require("probot");
const app = require("./index.js");

const probot = new Probot({
  appId: 123,
  privateKey: "content of your *.pem file here",
  secret: "webhooksecret123",
});

module.exports = createNodeMiddleware(app, { probot });
