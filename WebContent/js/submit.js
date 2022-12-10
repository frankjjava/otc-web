
$("#downloadSubmit").click(function( event ) {
    $("#downloadSubmit").prop('disabled', true);
	var downloadFileUrl = $('#downloadFileForm').attr('action');
	window.location = downloadFileUrl;
	text = $('#downloadSubmit').data('text');
	gtag('config', 'G-6X11ZSK31W', {
		'page_path': downloadFileUrl,
		'page_title': text
	});
    /*showMsg("Message", "otc.zip file is downloaded.");*/
});
/*
$("#feedbackSubmit").click(function( event ) {
    var isValid = validateFeedbackPage();
    if (!isValid) {
    	return false;
    }
    var formData = {
        'name'			: $('#fb_name').val(),
        'company'		: $('#fb_company').val(),
        'designation'	: $('#fb_designation').val(),
        'emailId'		: $('#fb_emailId').val(),
        'feedback'		: $('#fb_userFeedback').val()
	};
    $("#feedbackSubmit").prop('disabled', true);
    $.ajax({
    	type: "POST",
        url: $('#feedbackForm').attr('action'),
        data: formData, 
        dataType: 'JSON',
        success: function(response){
            var success = response.context.entity.success;
            var message = response.context.entity.message;
            if (success) {
                showMsg("Message", message);
    			$("#feedbackForm").find("input[type=text], textarea").val("");
            } else {
                showMsg("Error", message);
            	$("#feedbackSubmit").prop('disabled', false);
            }
       },
       error: function(xhr, status, error){
    	   var errorMessage = xhr.status + ': ' + xhr.statusText + ': ' + xhr.errorMessage;
    	   showMsg('Error - ' + errorMessage);
           $("#feedbackSubmit").prop('disabled', false);
       }
    });
});
*/
/*
$("#couponCodeSubmit").click(function( event ) {
    var isValid = validateInputs();
    if (!isValid) {
    	return false;
    }
    var formData = {
            'name'			: $('#name').val(),
            'company'		: $('#company').val(),
            'designation'	: $('#designation').val(),
            'emailId'		: $('#emailId').val(),
            'phone'			: $('#phone').val()
	};
    $("#couponCodeSubmit").prop('disabled', true);
    $.ajax({
    	type: "POST",
        url: $('#couponCodeUserForm').attr('action'),
        data: formData, 
        dataType: 'JSON',
        success: function(response){
            var success = response.context.entity.success;
            var message = response.context.entity.message;
            if (success) {
                showMsg("Message", message);
    			$("#couponCodeUserForm").find("input[type=text], textarea").val("");
            } else {
                showMsg("Error", message);
                $("#couponCodeSubmit").prop('disabled', false);
            }
       },
       error: function(xhr, status, error){
    	   var errorMessage = xhr.status + ': ' + xhr.statusText + ': ' + xhr.errorMessage;
    	   showMsg('Error - ' + errorMessage);
       }
    });
 });
*/
/*
function validateDownloadPage() {
	var name = $('#name').val();
    if (!name) {
    	showMsg("Validation Check", "Name is a mandatory field.");
    	return false;
    }
    var emailId = $('#emailId').val();
    if (!emailId) {
    	showMsg("Validation Check", "EmailId is a mandatory field.");
    	return false;
    }
    var company = $('#company').val();
    if (!company) {
    	showMsg("Validation Check", "Company is a mandatory field.");
    	return false;
    }
	return true;
}

function validateFeedbackPage() {
	var name = $('#fb_name').val();
    if (!name) {
    	showMsg("Validation Check", "Name is a mandatory field.");
    	return false;
    }
    var company = $('#fb_company').val();
    if (!company) {
    	showMsg("Validation Check", "Company is a mandatory field.");
    	return false;
    }
    var designation = $('#fb_designation').val();
    if (!designation) {
    	showMsg("Validation Check", "Designation is a mandatory field.");
    	return false;
    }
    var emailId = $('#fb_emailId').val();
    if (!emailId) {
    	showMsg("Validation Check", "EmailId is a mandatory field.");
    	return false;
    }
    var userFeedback = $('#fb_userFeedback').val();
    if (!userFeedback) {
    	showMsg("Validation Check", "Feedback is a mandatory field.");
    	return false;
    }
	return true;
}
*/
/*
function showMsg(caption, msg) {
	$("#validityCheck").attr('title', caption);
	$("#validationMsg").text(msg);
	$("#validityCheck").show();
	$("#validityCheck").dialog({
		resizable: false,
	    modal: true,
		buttons: {
	        Ok: function() {
	          $( this ).dialog( "close" );
	        }
        }
	});
	return;
}
*/

$('#downloadOtc8').click(function( event ) {
	var downloadFileUrl = $('#downloadOtc8').attr('url');
	var downloadFileVer = $('#downloadOtc8').attr('version');
	downloadFile(downloadFileUrl, downloadFileVer);
});
	
$('#downloadOtc11').click(function( event ) {
	var downloadFileUrl = $('#downloadOtc11').attr('url');
	var downloadFileVer = $('#downloadOtc11').attr('version');
	downloadFile(downloadFileUrl, downloadFileVer);
});
	
$('#downloadOtc17').click(function( event ) {
	var downloadFileUrl = $('#downloadOtc17').attr('url');
	var downloadFileVer = $('#downloadOtc17').attr('version');
	downloadFile(downloadFileUrl, downloadFileVer);
});
	
function downloadFile(downloadFileUrl, version) {
	var url = downloadFileUrl + "/" + version;
	window.location = url;
	text = $('#downloadSubmit').data('text');
	gtag('config', 'G-6X11ZSK31W', {
		'page_path': url,
		'page_title': text
	});
    /*showMsg("Message", "otc.zip file is downloaded.");*/
};
