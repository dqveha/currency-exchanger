import $ from 'jquery'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './css/styles.css'
import CurrencyExchanger from './services/currency-exchange.js'


function displayConversionRate(response) {
  if (response.conversion_rate) {
    $('#show-conversion').text(`${response.conversion_rate}`);
  } else {
    $('#show-conversion').text(`There was an error: ${response["error-type"]}`)
  }
}

console.log(CurrencyExchanger);

$(document).ready(function() {
  let currency1 = $('#currency1').val();
  let currency2 = $('#currency2').val();

  CurrencyExchanger.getExchangePair(currency1, currency2)
  .then(function(response) {
    displayConversionRate(response);
  })

});