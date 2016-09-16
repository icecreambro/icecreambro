function showQuan(flav) {
    $("select[name=" + flav + "-quantity]").toggle().removeAttr('disabled');
    validateForm()
}

$('input[type=text]').change(validateForm);

function validateForm() {
    var name = $('#name').val(),
        num = $('#number').val(),
        loc = $('#location').val(),
        time = $('#time').val();
    var flavors = $(':checkbox:checked').first().val();
    if (name != '' && num != '' && loc != '' && time != '' && flavors == 'on') {
        $('.submit-buttons button').removeClass('disabled');
    } else {
        $('.submit-buttons button').addClass('disabled');
    }
}

function validateCode() {
    var promos = ['SQUAD BRUNCH', 'HILLMAN25']
    var input = $('.promo input').val().toUpperCase();
    var valid = $.inArray(input, promos) > -1;
    if (valid) {
        $('.promo .btn').removeClass().addClass('btn btn-success').html('Success!!');
    } else {
        $('.promo .btn').removeClass().addClass('btn btn-danger').html('Invalid Code.');
    }
}

$(function () {
    $("#order form").submit(function () {
        var name = $("#name").val();
        var number = $("#number").val();
        var location = $("#location").val();
        var time = $("#time").val();
        var flavors = {};
        var quan = "";
        $('.flavors input:checked').each(function(){
            quan = $(this).attr('name') + '-quantity';
            quan = $('[name=' + quan + ']').val();
            flavors[$(this).attr('name')] = quan;
        })
        
        var flavors = JSON.stringify(flavors);
        $.post("https://script.google.com/macros/s/AKfycbzFxRmcBmuiDA9Pt8qzmM3c1wtp56_q3INEd3UGm5YsK_dNyL8R/exec", {
            name: name,
            number: number,
            location: location,
            time: time,
            flavors: flavors
        });
    });
    var id = Math.floor(1000 + Math.random() * 9000);
    $('input[name="_subject"]').val('Order ID: ' + id);
});


//Initialize Popovers

$(function () {
    $('[data-toggle="popover"]').popover()
})
