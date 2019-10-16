const spinner = require('ora')('test');

spinner.start();

require('all-node-versions')({ mirror: 'https://npm.taobao.org/mirrors/node'})
  .then((versions) => {
    x.stop()
    console.log(versions)
  })