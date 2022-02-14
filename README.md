# protector-app-bot

> A GitHub App built with [Probot](https://github.com/probot/probot) that A Probot app

## Install

[INSTALL](https://github.com/apps/protector-app-bot/installations/new)

## Setup

```sh
# Install dependencies
npm install

# Run the bot
npm start
```

## Docker

```sh
# 1. Build container
docker build -t protector-app-bot .

# 2. Start container
docker run -e APP_ID=<app-id> -e PRIVATE_KEY=<pem-value> protector-app-bot
```

## Contributing

If you have suggestions for how protector-app-bot could be improved, or want to report a bug, open an issue! We'd love all and any contributions.

For more, check out the [Contributing Guide](CONTRIBUTING.md).

## License

[ISC](LICENSE) © 2022 vinayski <ski@sankhe.com>
