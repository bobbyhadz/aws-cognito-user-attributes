# Add custom / default User Pool Attributes to Cognito using AWS CDK

A repository for an article on [bobbyhadz.com](https://bobbyhadz.com) that shows
how to use CDK to provision `custom` and `default` User Pool attributes for
Cognito.

## How to Use

1. Clone the repository

```bash
git clone git@github.com:bobbyhadz/aws-cognito-user-attributes.git && cd aws-cognito-user-attributes
```

2. Install the dependencies (Make sure your global cdk --version matches the one
   in package.json)

```bash
npm install
```

3. Create the cognito stack

```bash
npm run cdk-create-stack
```

4. Open the AWS Console and the stack should be created in your default region
