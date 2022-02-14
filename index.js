/**
 * This is the main entrypoint to your Probot app
 * @param {import('probot').Probot} app
 */
module.exports = (app) => {
  app.log.info("protector is enabled!");
  app.on("repository.created",async (context) => {
        app.log(context);
        app.log(context.repo.name);
        const params = null;
        await context.github.issues.create("test");
      }
  );
};
