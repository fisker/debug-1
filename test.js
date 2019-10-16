const spinner = require('ora')('test');

spinner.start();

require('all-node-versions')({ mirror: 'https://npm.taobao.org/mirrors/node'})
  .then((versions) => {
    spinner.stop()
    console.log(versions)
  })