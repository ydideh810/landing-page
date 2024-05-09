# Landing page for Jouzu

### Local development

To run in local environment

```
yarn
yarn dev
```

### Environment variables

| Env variable    | Details                                                                   |
| --------------- | ------------------------------------------------------------------------- |
| VITE_NODE_ENV   | Either `dev` or `prod`. React strict mode is enabled in `dev` environment |
| VITE_LAMBDA_URL | function URL to the lambda function for adding user email to waitlist     |

### Linting

Commitlint is enabled by default. All commit messages should follow [conventional commits](https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional)
