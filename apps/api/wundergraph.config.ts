import {
  configureWunderGraphApplication,
  cors,
  EnvironmentVariable,
  WgEnv,
  introspect,
  templates
} from '@wundergraph/sdk';
import server from './wundergraph.server';
import operations from './wundergraph.operations';

const countries = introspect.graphql({
  apiNamespace: 'countries',
  url: 'https://countries.trevorblades.com/'
});

// configureWunderGraph emits the configuration
configureWunderGraphApplication({
  apis: [countries],
  server,
  operations,
  codeGenerators: [
    {
      templates: [templates.typescript.client],
      path: '../../packages/generated-wundergraph'
    }
  ],
  cors: {
    ...cors.allowAll,
    allowedOrigins:
      process.env.NODE_ENV === 'production'
        ? [
          'https://turbo-web-git-main-samuelandert.vercel.app'
        ]
        : [
          'http://localhost:3000',
          'http://127.0.0.1:3000/',
          new EnvironmentVariable('WG_ALLOWED_ORIGIN')
        ]
  },
  security: {
    enableGraphQLEndpoint:
      process.env.NODE_ENV !== 'production' || process.env.GITPOD_WORKSPACE_ID !== undefined
  },
  options: {
    listen: {
      host: new EnvironmentVariable(WgEnv.NodeHost, 'localhost'),
      port: new EnvironmentVariable(WgEnv.NodePort, '9991'),
    },
    nodeUrl: new EnvironmentVariable(WgEnv.NodeUrl, 'https://turbo.wundergraph.dev'),
    publicNodeUrl: new EnvironmentVariable(WgEnv.PublicNodeUrl, 'https://turbo-web-git-main-samuelandert.vercel.app'),
  },
});
