import {Construct} from 'constructs';
import * as cdk from 'aws-cdk-lib';
import * as cognito from 'aws-cdk-lib/aws-cognito';

import {DEPLOY_ENVIRONMENT, STACK_PREFIX} from '../constants';

export class UserPoolConstruct extends Construct {
  public readonly userPool: cognito.UserPool;

  constructor(scope: Construct, id: string) {
    super(scope, id);

    this.userPool = new cognito.UserPool(this, 'userpool', {
      userPoolName: `${STACK_PREFIX}-${DEPLOY_ENVIRONMENT}`,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      selfSignUpEnabled: true,
      signInAliases: {email: true},
      autoVerify: {email: true},
      standardAttributes: {
        givenName: {
          required: true,
          mutable: true,
        },
        familyName: {
          required: true,
          mutable: true,
        },
      },
      customAttributes: {
        bio: new cognito.StringAttribute({mutable: true}),
        country: new cognito.StringAttribute({mutable: true}),
        city: new cognito.StringAttribute({mutable: true}),
        isAdmin: new cognito.StringAttribute({mutable: true}),
      },
      passwordPolicy: {
        minLength: 6,
        requireLowercase: true,
        requireDigits: true,
        requireUppercase: false,
        requireSymbols: false,
      },
      accountRecovery: cognito.AccountRecovery.EMAIL_ONLY,
    });
  }
}
