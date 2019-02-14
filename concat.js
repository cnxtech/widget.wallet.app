var concat = require('concat-files');
concat([
    './dist/runtime.js',
    './dist/polyfills.js',
    './dist/main.js'
], './dist/widget.js', function(err) {
    if (err) throw err
    console.log('done');
});