'use strict';

module.exports = function (grunt) {
  // require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
  // var autoprefixer = require('autoprefixer-core');
  grunt.initConfig({
    watch: {
      scripts: {
        files: ["build/less/*.less", "dist/js/*.js"],
        tasks: ["less"]
      },
      livereload: {
        options: {
                  livereload: '<%= connect.options.livereload %>'
              },
        files: ['dist/*.html', 'dist/css/*.css', 'dist/js/*.js', 'dist/images/**/*']
      },
      styles : {
        files : ['dist/css/style.css'],
        tasks : ['autoprefixer' ]
      }
    },

    connect: {
      options: {
          port: 9002,
          open: true,
          livereload: 3573,
          hostname: 'localhost'
      },
      server: {
        options: {
          port: 9003,
          base: '.',
          open:'http://localhost:9003/dist/'
        }
      }
    },
    less: {
      development: {
        options: {
          compress: false
        },
        files: {
          "dist/css/style.css": "build/less/style.less",
        }
      }
    },
    // 合并incloud文件
    // includes: {
    //   buildHtml: {
    //     src: ['*.html'], // 源文件
    //     dest: 'dist/', // 生成目录
    //     flatten: true,
    //     cwd: 'build/', //源文件目录
    //     options: {
    //       silent: true,
    //       includePath: 'build/include'
    //     }
    //   }
    // },

    csslint: {
      options: {
        csslintrc: 'build/less/.csslintrc'
      },
      dist: [
        'dist/css/*.css',
      ]
    },

    autoprefixer: {
      options: {
        browserslist:['last 2 versions','chrome','ie']
      }, 
      multiple_files: { 
        expand: true, 
        flatten: true, 
        src: 'dist/css/*.css', // -> src/css/file1.css, src/css/file2.css 
        dest: 'dist/css/' // -> dest/css/file1.css, dest/css/file2.css 
      }, 
    }

  });


  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  // grunt.loadNpmTasks('grunt-contrib-uglify');
  // grunt.loadNpmTasks('grunt-includes');
  // grunt.loadNpmTasks('grunt-image');
  // grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.loadNpmTasks('grunt-contrib-connect');

   //加载任务
  grunt.loadNpmTasks('grunt-autoprefixer');
  // grunt.loadNpmTasks('grunt-postcss');
  //执行任务
  // grunt.registerTask('autoprefixerCss',['autoprefixer:css']);


  grunt.registerTask('default',['connect', 'watch']);
};





    

