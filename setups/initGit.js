const chalk = require('chalk');
const { execSync } = require('child_process');

function initGit(folder) {
  console.log(chalk.green('Initializing git'));

  execSync('so it begins', {
    cwd: folder,
    stdio: 'inherit'
  });

}

module.exports = initGit;
