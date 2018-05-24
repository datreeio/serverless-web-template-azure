# Serverless Web Template

[![Greenkeeper badge](https://badges.greenkeeper.io/datreeio/serverless-web-template-azure.svg)](https://greenkeeper.io/)

* [Node.js](https://nodejs.org/) version 6.11.2 (Azure Functions)
* [Express](https://expressjs.com/)
* [Express for Azure Functions](https://github.com/yvele/azure-function-express)
* [Serverless Framework](https://serverless.com/)
* [Serverless Azure Functions Plugin](https://github.com/serverless/serverless-azure-functions)

## Installation

* `$ nvm install` (will use the .nvmrc Node.js version 6.11.2)
* `$ npm install` (install dependencies)
* `$ npm install -g serverless` (global installation of serverless)

## Credentials

Follow the Account setup [instructions](https://serverless.com/framework/docs/providers/azure/guide/credentials/) and set ENV variables

```bash
export azureSubId='<subscriptionId>'
export azureServicePrincipalTenantId='<tenantId>'
export azureServicePrincipalClientId='<servicePrincipalName>'
export azureServicePrincipalPassword='<password>'
```

## Usage

* `$ npm run deploy` (deploys the service to prod)

### GET /

* `$ curl -X GET https://<Service-Name>.azurewebsites.net/api/app`
