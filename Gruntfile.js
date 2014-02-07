module.exports = function(grunt) {

    // 1. All configuration goes here 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
            // 2. Configuration for concatinating files goes here.
            dist: {
                src: [
                    'js/*.js'
                ],  
                dest: 'js/scripts.js'
            }
        },

        uglify: {
            build: {
                files: {
                    'js/scripts.js': ['js/*.js']
                }
            }
        },

        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'img/',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: '../img/'
                }]
            }
        },

        htmlcompressor: {
            compile: {
              files: {
                '../index.html': 'index.html'
            },
            options: {
                type: 'html',
                preserveServerScript: true
              }
        }
    }

    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-htmlcompressor');

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['concat', 'uglify', 'htmlcompressor']);
    grunt.registerTask('img', ['imagemin']);

};
