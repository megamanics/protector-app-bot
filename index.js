/**
 * This is the main entrypoint to your Probot app
 * @param {import('probot').Probot} app
 */
module.exports = (app) => {
  app.log.info("protector is enabled!");
  app.on("repository.created",async (context) => {
        app.log(context);
        app.log(context.repo.name);
        const repo = context.repo();
        const issueParams = {
              title: "My First Issue",
              body: "Testing Issue Creation"
        }
        const params = Object.assign({}, repo,  issueParams)
        await context.github.issues.create(params);
      }
  );
};
