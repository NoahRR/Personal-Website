
module.exports = function (grunt) {
    grunt.initConfig({
        browserSync: {
            bsFiles: {
                src: 'app'
            },
            options: {
                proxy: "127.0.0.1:5001/"
            }
        }
    });

    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.registerTask('default', ['browserSync']);
}
