import $ from 'jquery'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './css/styles.css'
import CurrencyExchanger from './services/currency-exchange.js'


console.log(CurrencyExchanger);

$(document).ready(function() {

  CurrencyExchanger.getExchangePair("USD", "GBP");
  

});