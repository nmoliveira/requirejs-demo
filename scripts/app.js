// requirejs configuration
requirejs.config({
    baseUrl: 'scripts',
    paths: {
        jquery: 'lib/jquery'
    }
});

// Start the main app logic.
require(['app/blog'],
function   (blog) {
    blog.start();
});