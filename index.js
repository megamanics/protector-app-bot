/**
 * This is the main entrypoint to your Probot app
 * @param {import('probot').Probot} app
 */
module.exports = (app) => {
    app.log.info("protector is enabled!");
    app.on("repository.created", async (context) => {
            const repo = context.payload.repository.name;
            const owner = context.payload.repository.owner.login;
            const issueParams = {
                owner: owner,
                repo: repo,
                title: "Protection on Main Branch enabled",
                body: "@vinayski "
            };
            const protectionParams = {
                owner: owner,
                repo: repo,
                branch: 'main',
                enforce_admins: null,
                required_pull_request_reviews: {
                    bypass_pull_request_allowances: {},
                    dismiss_stale_reviews: true,
                    dismissal_restrictions: {},
                    require_code_owner_reviews: true,
                    required_approving_review_count: 2
                },
                required_status_checks: null,
                restrictions: null,
            };
            const required_pull_request_reviews_params = {
                owner: owner,
                repo: repo,
                branch: 'main',
                required_pull_request_reviews: {
                    bypass_pull_request_allowances: {},
                    dismiss_stale_reviews: true,
                    dismissal_restrictions: {},
                    require_code_owner_reviews: true,
                    required_approving_review_count: 2
                }
            };
            app.log(protectionParams);
            app.log(issueParams);
            //app.log(context.octokit.repos.updateBranchProtection.required_pull_request_review);
            await context.octokit.repos.updateBranchProtection(protectionParams);
            await context.octokit.issues.create(issueParams);
        }
    );
};
