function showQuan(flav) {
    $("select[name=" + flav + "-quantity]").toggle().removeAttr('disabled');
}

function validateCode() {
    var promos = ['HILLMAN25', 'JBUCKS25', 'REID', 'ICECREAMCUPID']
    var input = $('[name="promo"]').val().toUpperCase();
    var valid = $.inArray(input, promos) > -1;
    if (valid) {
        $('.promo').removeClass().addClass('btn btn-success promo').html('Success!!');
    } else {
        $('.promo').removeClass().addClass('btn btn-danger promo').html('Invalid Code.');
    }
}

// Set order id

$(function() {
    var id = Math.floor(1000 + Math.random() * 9000)
    $('input[name="_subject"]').val('Order ID: ' + id);
    $('input[name="_next"]').val('complete.html?id='+id);
})

// Set default time

$(function() {
    var coeff = 1000 * 60 * 5;
    var today = new Date();
    var rounded = new Date(Math.ceil(today.getTime() / coeff) * coeff);
    var hour = rounded.getHours();
    var min = rounded.getMinutes()+5;
    if (min >= 60) {
        min = min-60;
        hour+=1;
        if (hour == 24) {
            hour = "00";
        }
    }
    while(min.toString().length < 2) {
        min = "0" + min.toString();
    }
    var time = hour + ":" + min;
    $('.order [type=time]').val(time);
})


// Initialize Popovers

$(function () {
    $('[data-toggle="popover"]').popover()
})
