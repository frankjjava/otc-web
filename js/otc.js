var selectedMenuItem;
var childPageName;

const pages = new Map([
  ["01-preface.html", "preface"],
  ["02-OTC-in-1-min.html", "otcin1min"],
  ["03-performance-features.html", "performanceFeatures"],
  ["04-documentation.html", "documentation"],
  ["01-getting-started.html", "gettingstarted"],
  ["02-otc-editor.html", "otceditor"],
  ["03-test-project.html", "testproject"],
  ["04-copying-literals.html", "copyingliterals"],
  ["05-date-converter.html", "dateconverter"],
  ["06-copying-source.html", "copyingsource"],
  ["07-anchors.html", "anchors"],
  ["08-execute.html", "execute"],
  ["09-overrides.html", "overrides"],
  ["10-otc-engine.html", "otcengine"],
  ["11-otc-config.html", "otcConfig"],
  ["06-downloads-releases.html", "downloadsReleases"],
  ["07-contribute-code.html", "contributeCode"],
  ["08-faq.html", "faq"],
  ["09-feedback-author-contact.html", "feedback"]
]);

$(document).ready(function() {
	var url = null;
	$("#preface").click(function() {
		showContent($("#preface"));
	});
  
	$("#otcin1min").click(function() {
		showContent($("#otcin1min"));
	});
	$("#performanceFeatures").click(function() {
		showContent($("#performanceFeatures"));
	});	
	$("#documentation").click(function() {
		showContent($("#documentation"));
	});
		$("#gettingstarted").click(function() {
			showContent($("#gettingstarted"));
		});
		$("#otceditor").click(function() {
			showContent($("#otceditor"));
		});
		$("#testproject").click(function() {
			showContent($("#testproject"));
		});
		$("#copyingliterals").click(function() {
			showContent($("#copyingliterals"));
		});
		$("#dateconverter").click(function() {
			showContent($("#dateconverter"));
		});
		$("#copyingsource").click(function() {
			showContent($("#copyingsource"));
		});
		$("#anchors").click(function() {
			showContent($("#anchors"));
		});
		$("#execute").click(function() {
			showContent($("#execute"));
		});
		$("#overrides").click(function() {
			showContent($("#overrides"));
		});
		$("#otcengine").click(function() {
			showContent($("#otcengine"));
		});
		$("#otcConfig").click(function() {
			showContent($("#otcConfig"));
		});

	$("#trainingSupport").click(function() {
		showContent($("#trainingSupport"));
	});
	$("#downloadsReleases").click(function() {
		showContent($("#downloadsReleases"));
	});
	$("#contributeCode").click(function() {
		showContent($("#contributeCode"));
	});
	$("#faq").click(function() {
		showContent($("#faq"));
	});
	$("#feedback").click(function() {
		showContent($("#feedback"));
	});
/*	
	$("#downloadFile").click(function() {
		sendGtag($("#downloadFile"));
	});
*/	
	var childPageName = $.cookie('childPageName');
	if (childPageName) {
		showContent($("#" + pages.get(childPageName)));
		$.removeCookie('childPageName');
	} else {
		$("#preface").click();
	}
});

function showContent(nextSelectedMenuItem) {
	if (selectedMenuItem) {
		selectedMenuItem.parent().attr("class", "none");
	}
	nextSelectedMenuItem.parent().attr("class", "none active");
	url = nextSelectedMenuItem.data("href");
	text = nextSelectedMenuItem.text();

	$("#content").load(url);
	gtag('config', 'G-6X11ZSK31W', {
		'page_path': url,
		'page_title': text
	});
	selectedMenuItem = nextSelectedMenuItem;
}
