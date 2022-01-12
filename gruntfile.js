module.exports = function(grunt) {
	grunt.initConfig({
		cssmin: {
			// options: {
			// 	 relativeTo: "/images",
			// 	 target: "./build",
			// 	rebase: true
			// },
			css: {
				src: 'css/style.css',
				dest: 'dist/style.min.css'
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.registerTask('default', ['cssmin']);
}