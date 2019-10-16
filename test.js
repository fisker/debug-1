const options = process.argv[2] ? {mirror: process.argv[2]} : {}

console.log('Mirror: ', JSON.stringify(options.mirror))

const spinner = require('ora')('test');

spinner.start();


require('all-node-versions')(options)
  .then((versions) => {
    spinner.stop()
    console.log(JSON.stringify(versions, null, 2))
  })