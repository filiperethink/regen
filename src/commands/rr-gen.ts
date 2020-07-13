import { GluegunCommand } from 'gluegun';

const command: GluegunCommand = {
  name: 'rr-gen',
  run: async toolbox => {
    const { print } = toolbox;

    print.info('Welcome to your rr-gen CLI');
  },
};

module.exports = command;
