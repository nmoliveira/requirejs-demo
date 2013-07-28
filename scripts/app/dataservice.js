define(['jquery'],function($){
	var getPosts = function(callback){
		$.get('data/posts.json',callback)
	};
	return {
		getPosts: getPosts
	}
})