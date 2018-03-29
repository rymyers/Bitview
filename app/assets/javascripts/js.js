$(document).ready(function() {

    var bitprice = document.getElementById('bitprice');
    var bitcoin = new XMLHttpRequest();

    bitcoin.open('GET', "https://api.coindesk.com/v1/bpi/currentprice.json");
    bitcoin.onload = function() {
        // console.log(bitcoin.responseText);
        var bitdata = JSON.parse(bitcoin.responseText);
        // console.log(bitdata.bpi.USD.rate);
        renderHTML(bitdata.bpi.USD.rate);
    };
    bitcoin.send();

});



function renderHTML(data) {
    var price = '<form class="" action="/mains/new" method="post"><input type="hidden" name="price[price]" value='+ data[0]+data[2]+data[3]+data[4]+data[5]+data[6]+data[7]+data[8] +'><input name="authenticity_token" value="<%= form_authenticity_token %>" type="hidden"><input type="submit" name="" value="Enter"></form>';
    var d = new Date();
    var currentpricetext = "<h2 id='curprice'>The current price of a BitCoin is "+ data +" as of "+ d + " </h2>";
    bitprice.insertAdjacentHTML('beforeend', currentpricetext);
    bitprice.insertAdjacentHTML('beforeend', price);
};

function renderupdate() {

    var bitprice = document.getElementById('refresher');
    var bitcoin = new XMLHttpRequest();

    bitcoin.open('GET', "https://api.coindesk.com/v1/bpi/currentprice.json");
    bitcoin.onload = function() {
        // console.log(bitcoin.responseText);
        var bitdata = JSON.parse(bitcoin.responseText);
        // console.log(bitdata.bpi.USD.rate);
        updaterenderingHTML(bitdata.bpi.USD.rate);
    };
    bitcoin.send();
};

function updaterenderingHTML(data) {

    var refreshie = '<form class="" action="/mains/new" method="post"><input type="hidden" name="price[price]" value='+ data[0]+data[2]+data[3]+data[4]+data[5]+data[6]+data[7]+data[8] +'><input name="authenticity_token" value="<%= form_authenticity_token %>" type="hidden"><input type="submit" name="" value="Refresh"></form>';

    refresher.insertAdjacentHTML('afterend', refreshie);
};
