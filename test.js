const mirror = {
  taobao: 'https://npm.taobao.org/mirrors/node',
  nodejs: 'https://nodejs.org/dist'
}[process.argv[2]] || mirror.nodejs

console.log('Mirror: ', mirror)

const spinner = require('ora')('test');

spinner.start();


require('all-node-versions')({mirror})
  .then((versions) => {
    spinner.stop()
    console.log(versions.slice(0,2))
  })