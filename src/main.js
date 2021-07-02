import $ from 'jquery'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './css/styles.css'
import CurrencyExchanger from './services/currency-exchange.js'


function displayConversionRate(response) {
  if (response.conversion_rate) {
    $('#show-conversion').text(`${response.conversion_rate}`);
  } else {
    $('#show-conversion').text(`There was an error: ${response.message}`)
  }
}

console.log(CurrencyExchanger);

$(document).ready(function() {

  CurrencyExchanger.getExchangePair("USD", "GBP")
  .then(function(response) {
    displayConversionRate(response);
  })

});