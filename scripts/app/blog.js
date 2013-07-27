define(['jquery','app/dataservice', 'app/presenter'], function($,dataservice, presenter){
	var start = function(){
		dataservice.getPosts(presenter.renderPosts);
	};
	return {
		start: start
	}
})