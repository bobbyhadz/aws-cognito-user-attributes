# Add custom / default User Pool Attributes to Cognito using AWS CDK

A repository for an article on [bobbyhadz.com](https://bobbyhadz.com) that shows
how to use CDK to provision `custom` and `default` User Pool attributes for
Cognito.

## How to Use

TODO: write commands here

- `npm run setup` - installs the dependencies in both the `cdk/` and the `src/`
  directories
- `npm run synth:dev` - synths the `next-cognito-dev` stack and spits out a
  `template.yaml` file in the root directory, which is the cloudformation
  representation of the CDK code
- `npm run deploy:dev` - deploys the `next-cognito-dev` stack to cloudformation
  and outputs the `cdk-exports-dev.json` file, which contains the outputs
  specified in the CDK code, to then be used in the frontend - i.e. the
  `api url`.
- `npm run synth:prod` and `npm run deploy:prod` - same as above but for the
  `next-cognito-prod` stack.
