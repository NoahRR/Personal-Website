
module.exports = function (grunt) {
    grunt.initConfig({
        concat: {
            css: {
                src: [
                    'app/static/css/portfolio.css',
                    'app/static/css/featured.css',
                    'app/static/css/header.css',
                    'app/static/css/footer.css'
                ],
                dest: 'app/static/css/CONCAT_CSS.css'
            }
        },
        watch: {
            css: {
                files: ['**/*.css'],
                tasks: ['concat']
            }
        },
        browserSync: {
            bsFiles: {
                src: 'app'
            },
            options: {
                proxy: "127.0.0.1:5001/"
            }
        }
    });

    // grunt browserSync
    grunt.loadNpmTasks('grunt-browser-sync');
    // grunt concat
    grunt.loadNpmTasks('grunt-contrib-concat');
    // grunt watch
    grunt.loadNpmTasks('grunt-contrib-watch');
    // grunt
    grunt.registerTask('default', ['concat', 'watch']);
}
