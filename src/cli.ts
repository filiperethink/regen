const { build } = require('gluegun');

async function run(argv: any) {
  // create a CLI runtime
  const cli = build()
    .brand('rr-gen')
    .src(__dirname)
    .plugins('./node_modules', { matching: 'rr-gen-*', hidden: true })
    .help() // provides default for help, h, --help, -h
    .version() // provides default for version, v, --version, -v
    .create();

  const toolbox = await cli.run(argv);

  return toolbox;
}

module.exports = { run };
