Crosswords for https://wllrg.rs, built using [NextJS](https://nextjs.org).

# Deploying

This project uses the gh-pages npm package to deploy changes to the `gh-pages` branch:

```
npm run deploy
```

If there is an error during deployment e.g.

```
.next/types/validator.ts:7:6
Type error: Duplicate identifier 'PagesPageConfig'.
```

Try running `rm -rf .next out` and trying again.
