module.exports = function(grunt) {
 
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-shopify');
 
  grunt.initConfig({
    shopify: {
      options: {
        //You can find these in your Shopify Admin under Apps then look at the bottom for Create a private API Key
        api_key: "54432655743f455731f76ac821b058b4",
        password: "7cae944d5a27596b413c3cc8836aeb8b",
		ThemeId: "29654081",
        url: "werner-habermalz.myshopify.com",
        base: 'shop/'
      }
    },
    watch: {
      shopify: {
        files: ['shop/**'],
        tasks: ["shopify"]
      }
    }
 
  });
 
  grunt.registerTask('default', ['shopify']);
 
};