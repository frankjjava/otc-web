
$(document).ready(function() {
	if (typeof selectedMenuItem === 'undefined') {
		var childPageName = $(location).attr('href');
		childPageName = childPageName.substring(childPageName.lastIndexOf("/") + 1);
		$.cookie('childPageName', childPageName, { expires: 1, path: '/' });
		window.top.location = '/';
	}
});

