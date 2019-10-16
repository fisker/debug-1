const spinner = require('ora')('test');

spinner.start();

const options = process.argv[2] ? {mirror: process.argv[2]} : {}

require('all-node-versions')(options)
  .then((versions) => {
    spinner.stop()
    console.log(versions)
  })