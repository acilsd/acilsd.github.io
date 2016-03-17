module.exports = function(grunt) {

  require("load-grunt-tasks")(grunt);
  grunt.initConfig({
    sass: {
      dev: {
        src: ["sass/main.scss"],
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
    watch: {
      sass: {
        files: ["sass/**/*.scss"],
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
