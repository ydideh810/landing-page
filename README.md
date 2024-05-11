# Landing page for Jouzu

### Local development

Set up the environment variables

```
cp .env.sample .env
```

| Env variable    | Details                                                                   |
| --------------- | ------------------------------------------------------------------------- |
| VITE_NODE_ENV   | Either `dev` or `prod`. React strict mode is enabled in `dev` environment |
| VITE_LAMBDA_URL | function URL to the lambda function for adding user email to waitlist     |

To run in local environment

```
yarn
yarn dev
```

### Linting

Commitlint is enabled by default. All commit messages should follow [conventional commits](https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional)
