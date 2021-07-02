import $ from 'jquery'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './css/styles.css'
import CurrencyExchanger from './services/currency-exchange.js'


function displayConversionRate(response) {
  if (response.conversion_rate) {
    $('#show-conversion').text(`${response.conversion_rate}`).show();
  } else {
    $('#show-conversion').text(`There was an error: ${response["error-type"]}`).show();
  }
}


$(document).ready(function() {
  let currency1 = $('input#currency1').val();
  let currency2 = $('input#currency2').val();

  $("#currency-form").submit(function(event) {
    event.preventDefault();
    CurrencyExchanger.getExchangePair("USD", "USD")
    .then(function(response) {
      displayConversionRate(response);
    });
    console.log(currency1);
  })

  $("input#reset").click(function () {
    $("input").empty();
  });

});