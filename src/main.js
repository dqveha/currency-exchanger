import $ from 'jquery'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './css/styles.css'
import CurrencyExchanger from './services/currency-exchange.js'


function displayConversionRate(response) {
  if (response.conversion_rate) {
    $('#show-conversion').html(`
      <table>
        <tr>
          <th>Total Amount Converted</th>
          <th>Conversion Rate</th>
        </tr>
        <tr>
          <td>${response.conversion_result.toFixed(3)}</td>
          <td>${response.conversion_rate.toFixed(3)}</td>
        </tr>
      </table>`).show();
  } else {
    $('#show-conversion').text(`There was an error: ${response["error-type"]}`).show();
  }
}


$(document).ready(function() {
  $("#currency-form").submit(function(event) {
    event.preventDefault();
    $("input").empty();
    let amount = $('input#amount-currency1').val();
    let currency1 = $('input#currency1').val();
    let currency2 = $('input#currency2').val();
    CurrencyExchanger.getExchangePair(amount, currency1, currency2)
    .then(function(response) {
      displayConversionRate(response);
    });
  })

  $("input#reset").click(function () {
    $("input").empty();
    $("#show-conversion").hide();
  });

  $("input#switch").click(function() {
    $()
  })
});