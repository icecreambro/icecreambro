function showQuan(flav) {
    $("select[name=" + flav + "-quantity]").toggle().removeAttr('disabled');
    validateForm()
}

function validateCode() {
    var promos = ['HILLMAN25', 'JBUCKS25', 'THANKSGIVING']
    var input = $('.promo input').val().toUpperCase();
    var valid = $.inArray(input, promos) > -1;
    if (valid) {
        $('.promo .btn').removeClass().addClass('btn btn-success').html('Success!!');
    } else {
        $('.promo .btn').removeClass().addClass('btn btn-danger').html('Invalid Code.');
    }
}

$(function () {
    var id = Math.floor(1000 + Math.random() * 9000)
    $('input[name="_subject"]').val('Order ID: ' + id);
});


//Initialize Popovers

$(function () {
    $('[data-toggle="popover"]').popover()
})
