//      Need to make sure these still change if form is reset
'use strict';

function viewQuantity(elem) {
    if (elem.style.display === "block") {
        elem.style.display = "none";
    } else {
        elem.style.display = "block";
    }
}

function subtotal(elem) {
    var amount = elem.getElementsByTagName('select')[0].value;
    elem.getElementsByTagName('p')[1].innerHTML = '= $' + 4 * amount;
}

function createOrder() {
    var order = {},
        allFlavors = document.getElementsByClassName("check-area")[0].querySelectorAll('[class=col2]'),
        numFlavor = allFlavors.length,
        i;
    order.name = document.getElementsByName("name")[0].value;
    order.pnum = document.getElementsByName("phone")[0].value;
    order.loc = document.getElementsByName("location")[0].value;
    order.time = document.getElementsByName("time")[0].value;
    order.flavor = {};
    order.promo = document.getElementById('promoCode').value.toUpperCase();
    order.total = 0;

    for (i = 0; i < numFlavor; i++) {
        if (allFlavors[i].getElementsByTagName("input")[0].checked) {
            order.flavor[allFlavors[i].getElementsByTagName("input")[0].name] = allFlavors[i].getElementsByTagName("select")[0].value;
            order.total += 4 * allFlavors[i].getElementsByTagName("select")[0].value;
        }
    }

    if (order.promo != '') {
        var allPromos = {},
            i = 0,
            valid = false;
        allPromos.REID25 = 0.25;
        for (i = 0; i < Object.keys(allPromos).length; i++) {
            if (Object.keys(allPromos)[i] === order.promo) {
                document.getElementById('apply').innerHTML = 'Applied!!';
                document.getElementById('apply').className = 'valid-promo';
                document.getElementById('invalid-promo').style.display = 'none';

                order.total = order.total * (1 - allPromos[Object.keys(allPromos)[i]]);
                displayOrder(order);

            } else {
                document.getElementById('invalid-promo').style.display = 'inline';
            }
        }
    }
    return order;
}

function displayOrder(order) {
    var i = 0,
        flavorString = '',
        orderDisplay;
    for (i = 0; i < Object.keys(order.flavor).length; i++) {
        if (order.flavor[i] === 1) {
            flavorString += order.flavor[Object.keys(order.flavor)[i]] + " pint of " + Object.keys(order.flavor)[i] + ", ";
        } else {
            flavorString += order.flavor[Object.keys(order.flavor)[i]] + " pints of " + Object.keys(order.flavor)[i] + ", ";
        }
    }
    flavorString = flavorString.replace(/CD/, "Super Chunky Cookie Dough");
    flavorString = flavorString.replace(/MC/, "Mint Chocolate Chip");
    flavorString = flavorString.replace(/CC/, "Cookies & Creme");
    flavorString = flavorString.replace(/PBP/, "Peanut Butter Party");
    flavorString = flavorString.replace(/SFB/, "Super Fudge Brownie");
    flavorString = flavorString.replace(/SCC/, "Salted Caramel Craze");

    orderDisplay = order.name + " wants " + flavorString.substring(0, flavorString.length - 2) + " in " + order.loc + " at " + order.time + " for a total of $" + order.total + ".\n";

    document.getElementById("confirmation-modal").querySelector("p").innerHTML = orderDisplay;
}

function placeOrder(order) {
    document.getElementById('order-sending-form').value = JSON.stringify(order);
    document.getElementById('order-sending-submit').click();
}
