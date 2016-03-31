module.exports = function(grunt) {
  require("load-grunt-tasks")(grunt);
  grunt.initConfig({
    sass: {
      dev: {
        src: ["scss/main.scss"],
        dest: "css/style.css",
      },
    },
    autoprefixer: {
      options: {
        browsers: ["last 2 version", "ie 10"]
      },
      dev: {
        src: "css/style.css"
      }
    },
    cmq: {
      dev: {
        files: {
          "css/style.css": ["css/style.css"]
        }
      }
    },
    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'css',
          src: ['*.css', '!*.min.css'],
          dest: 'css',
          ext: '.min.css'
        }]
      }
    },  
    watch: {
      sass: {
        files: ["scss/**/*.scss"],
        tasks: ["sass", "autoprefixer", "cmq"],
      },
    }
  });
  grunt.registerTask("build", [
    "sass",
    "autoprefixer",
    "cmq",
    "watch"
  ]);

};
