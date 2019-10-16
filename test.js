const allNodeVersions = require('all-node-versions')

run('https://npm.taobao.org/mirrors/node').then(() => run('https://nodejs.org/dist'))

async function run(mirror) {
  console.log('Mirror: ', mirror)

  const spinner = require('ora')(mirror);
  spinner.start();
  const versions = await allNodeVersions({mirror});
  spinner.stop()

  console.log(versions.slice(0,2))
}