import * as cdk from '@aws-cdk/core';
import {UserPoolClientConstruct} from './constructs/user-pool-client-construct';
import {UserPoolConstruct} from './constructs/user-pool-construct';

export class UserAttributesStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const {userPool} = new UserPoolConstruct(this, 'userpool');
    const {userPoolClient} = new UserPoolClientConstruct(
      this,
      'userpoolclient',
      {userPool},
    );

    new cdk.CfnOutput(this, 'region', {value: cdk.Stack.of(this).region});
    new cdk.CfnOutput(this, 'userPoolId', {value: userPool.userPoolId});
    new cdk.CfnOutput(this, 'userPoolClientId', {
      value: userPoolClient.userPoolClientId,
    });
  }
}
