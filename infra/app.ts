#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';

import {DEPLOY_ENVIRONMENT, DEPLOY_REGION, STACK_PREFIX} from './constants';
import {UserAttributesStack} from './user-attributes-stack';

const app = new cdk.App();

new UserAttributesStack(app, `${STACK_PREFIX}-${DEPLOY_ENVIRONMENT}`, {
  stackName: `${STACK_PREFIX}-dev`,
  env: {region: DEPLOY_REGION},
  tags: {env: 'dev'},
});
