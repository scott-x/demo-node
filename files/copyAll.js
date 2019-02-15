const fs = require('fs-extra')
const path = require('path')

//p1,p2可以是某个具体的文件，也可以是folder
async function copyFiles (p1,p2) {
  try {
    await fs.copy(p1,p2)
    console.log('success!')
  } catch (err) {
    console.error(err)
  }
}

// copyFiles('./package.json','aaa.x')
