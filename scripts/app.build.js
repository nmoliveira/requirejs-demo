({
    appDir: "../",
    baseUrl: "scripts",
    dir: "../../requirejs-demo-build",
    paths: {
        jquery: 'lib/jquery'
    },
    modules: [
        {
            name: "app/blog"
        },
        {
        	name: "app/dataservice"
        },
        {
        	name: "app/presenter"
        }
    ]
})