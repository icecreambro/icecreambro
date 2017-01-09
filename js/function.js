function showQuan(flav) {
    $("select[name=" + flav + "-quantity]").toggle().removeAttr('disabled');
}

function validateCode() {
    var promos = ['HILLMAN25', 'JBUCKS25', 'REID']
    var input = $('[name="promo"]').val().toUpperCase();
    var valid = $.inArray(input, promos) > -1;
    if (valid) {
        $('.promo').removeClass().addClass('btn btn-success').html('Success!!');
    } else {
        $('.promo').removeClass().addClass('btn btn-danger').html('Invalid Code.');
    }
}

$(function () {
    var id = Math.floor(1000 + Math.random() * 9000)
    $('input[name="_subject"]').val('Order ID: ' + id);
    $('input[name="_next"]').val('complete.html?id='+id);
});


//Initialize Popovers

$(function () {
    $('[data-toggle="popover"]').popover()
})
