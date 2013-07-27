define(['jquery'],function($,util){
	var getPosts = function(callback){
		$.get('data/posts.json',callback)
	};
	return {
		getPosts: getPosts
	}
})