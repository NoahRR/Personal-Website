
// NOT CURRENTLY USING

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
        // watch: {
        //     // js: {
        //     //     files: ['**/*.js', '**/*.scss'],
        //     //     tasks: ['concat', 'sass'],
        //     // },
        //     livereload: {
        //         options: {
        //             livereload: {
        //                 host: 'localhost',
        //                 port: 5001,
        //             },
        //         },
        //         files: ['**/*']
        //     },
        // },
    });

    // grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.registerTask('default', ['browserSync']);
}
