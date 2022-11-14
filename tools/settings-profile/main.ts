import { applyApi } from './apply';

const firstArgument = process.argv[2];

if ([undefined, '-h', '--help'].some((e) => e === firstArgument)) {
  executeHelp();
} else if (firstArgument === 'apply') {
  const firstSubcommandArgument = process.argv[3];
  applyApi.execute(firstSubcommandArgument);
}

function executeHelp() {
  // Change to subcommand help list if new subcommands are added
  applyApi.executeHelp();
}
