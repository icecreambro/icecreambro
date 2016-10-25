// Desktop order - show quan when flav is checked
function showQuan(a){$("select[name="+a+"-quantity]").toggle().removeAttr("disabled"),validateForm()}

// Validate form when input is changed
$('input[type=text]').change(validateForm);

// Validate form by checking how many inputs are complete
function validateForm(){var a=$("#name").val(),b=$("#number").val(),c=$("#location").val(),d=$("#time").val(),e=$(":checkbox:checked").first().val();""!=a&&""!=b&&""!=c&&""!=d&&"on"==e?$(".submit-buttons button").removeClass("disabled"):$(".submit-buttons button").addClass("disabled")}

// Validate promo code
function validateCode(elem) {var a = ["HILLMAN25", "JBUCKS25"],b = $("#mobile-promo-input").val().toUpperCase(),c = $.inArray(b, a) > -1;c ? $(elem).removeClass().addClass("btn btn-success btn-lg").html("Success!!"):$(elem).removeClass().addClass("btn btn-danger btn-lg").html("Invalid Code.")}

// Generate random order id
$(function(){var a=Math.floor(1e3+9e3*Math.random());$('input[name="_subject"]').val("Order ID: "+a)});


// Initialize Popovers
$(function(){$('[data-toggle="popover"]').popover()});

