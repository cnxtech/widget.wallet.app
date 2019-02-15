var concat = require('concat-files');
var del = require('del');
var folder = process.argv[2];
// console.log(process.argv)
var files = [
    './' + folder + '/runtime.js',
    './' + folder + '/polyfills.js',
    './' + folder + '/main.js'
];
var fileName = 'widget.js';
concat(files, './' + folder + '/' + fileName, function(err) {
    if (err) throw err
    del(files).then(function() {
        console.log('done');
    });
    del('./' + folder + '/' + folder + '.html').then(function() {
        console.log('done');
    });
});