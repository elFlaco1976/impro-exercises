This app was created with create-ts-router CLI:

```bash
npx create-tsrouter-app@latest impro-exercises --template file-router --package-manager pnpm --toolchain eslint+prettier --add-ons tanstack-query
```

## Run the app locally

To run the app locally, follow the instructions in this page of the [Netlify documentation](https://docs.netlify.com/cli/local-development/). Basically:

1. Install the netlify CLI
2. Authenticate with an access token
3. Link your local project to a Netlify `siteId`
4. To start a local development server, run the following command:

```bash
netlify dev
```

## Tech Stack

- TanStack router
- Netlify serverless functions
