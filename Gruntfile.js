
// NOT CURRENTLY USING

module.exports = function (grunt) {
    grunt.initConfig({
        watch: {
            // js: {
            //     files: ['**/*.js', '**/*.scss'],
            //     tasks: ['concat', 'sass'],
            // },
            livereload: {
                options: {
                    livereload: {
                        host: 'localhost',
                        port: 5001,
                    },
                },
                files: ['**/*']
            },
        },
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['watch'])
}
