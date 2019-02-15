var mkdirp = require('mkdirp');

mkdirp('/Users/apple/desktop/demo-node/a/c/c/c/d/e', function (err) {
    if (err) console.error(err)
    else console.log('pow!')
});