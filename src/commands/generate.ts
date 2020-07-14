import { GluegunToolbox } from 'gluegun';
import { handleStrings } from '../utils';

module.exports = {
  name: 'create-componente',
  alias: ['cc'],
  run: async (toolbox: GluegunToolbox) => {
    const {
      parameters,
      strings,
      template: { generate },
      print: { info, error },
    } = toolbox;

    const name = handleStrings(strings, parameters.first);
    const path = 'src/components';

    if (!name) {
      error('Componente precisa de um nome.');
      return;
    }
    //  Gererate index.ts
    await generate({
      template: 'index.ts.ejs',
      target: `${path}/${name}/index.ts`,
      props: { name },
    });

    //  Gererate styeles.ts
    await generate({
      template: 'styles.ts.ejs',
      target: `${path}/${name}/styles.ts`,
      props: { name },
    });

    //  Gererate story.tsx
    await generate({
      template: 'story.ts.ejs',
      target: `${path}/${name}/${name}.story.tsx`,
      props: { name },
    });

    //  Gererate componente.tsx
    await generate({
      template: 'comp.ts.ejs',
      target: `${path}/${name}/${name}.tsx`,
      props: { name },
    });

    //  Gererate test.tsx
    await generate({
      template: 'test.ts.ejs',
      target: `${path}/${name}/${name}.test.tsx`,
      props: { name },
    });

    info(`Estrutura do Componente ${name} gerado com sucesso.`);
  },
};
