import { ActionType, NodePlopAPI } from 'plop';
import { methodsConfig } from './src/config';

module.exports = (plop: NodePlopAPI) => {
  plop.setHelper('ifEquals', function (arg1, arg2, options) {
    return arg1 === arg2 ? options.fn(this) : options.inverse(this);
  });

  plop.setHelper('eq', function (arg1: any, arg2: any) {
    return arg1 === arg2;
  });

  plop.setGenerator('generateMintMethods', {
    description: 'Generate mintMethods.ts from config',
    prompts: [],
    actions: () => {
      const actions = [] as ActionType[];
      actions.push({
        type: 'add',
        path: 'src/constants/mintMethods.ts',
        templateFile: './templates/MintMethods.hbs',
        data: { methods: methodsConfig },
        force: true,
      });

      actions.push({
        type: 'prettify',
        data: {},
      });

      return actions;
    },
  });

  plop.setActionType('prettify', () => {
    try {
      const exec = require('child_process').execSync;
      exec('pnpm run prettier:mintMethods');
      return 'Prettified MintMethods.ts successfully.';
    } catch (error) {
      throw new Error('Failed to prettify mintMethods.ts.');
    }
  });
};
