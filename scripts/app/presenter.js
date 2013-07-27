define(['jquery'], function($){
	var renderPosts = function (posts) {
		$.each(posts.data, function(index, post) {
			var postTitle = post.Title;
			var postContent = post.Content;
			var postDate = post.Date; 
			$('#content').append(
				'<div class="post">' +
					'<div class="title">' + postTitle + '</div>' +
					'<div class="postContent">' + post.Content + '</div>' +
					'<div class="date">' + post.Date + '</div>'+
				'</div>'
			);
		});
	};
	return {
		renderPosts: renderPosts
	}
})