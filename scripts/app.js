// requirejs configuration
requirejs.config({
    baseUrl: 'scripts',
    paths: {
        jquery: 'lib/jquery'
    }
});

// Start the main app logic.
requirejs(['app/blog'],
function   (blog) {
    blog.start();
});