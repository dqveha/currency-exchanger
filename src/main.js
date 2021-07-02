import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import CurrencyExchanger from "./services/currency-exchange.js";

function formatNumber(num) {
  return num.toString().replace(/\d{1,3}(?=(\d{3})+(?=\.))/g, "$1,");
}

function displayConversionRate(response) {
  if (
    `${response["error-type"]}` === "unsupported-code" ||
    `${response["error-type"]}` === "malformed-request"
  ) {
    $("#show-conversion").html(
      "Please try again with a different code that's supported."
    );
  } else if (response.conversion_rate) {
    const conversionResult = formatNumber(response.conversion_result.toFixed(4));
    const conversionRate = formatNumber(response.conversion_rate.toFixed(4));
    $("#show-conversion")
      .html(
        `<table>
        <tr>
          <th>Total Amount Converted</th>
          <th>Conversion Rate</th>
        </tr>
        <tr>
          <td>${conversionResult}</td>
          <td>${conversionRate}</td>
        </tr>
      </table>`
      )
      .show();
  } else {
    $("#show-conversion")
      .text(`ERROR: ${response["error-type"]}. Please fix your values with the correct currency code as indicated on the table, left-hand column.`).show();
  }
}

$(document).ready(function () {
  $("#currency-form").submit(function (event) {
    event.preventDefault();
    $("input").empty();
    let amount = $("input#amount-currency1").val();
    let currency1 = $("input#currency1").val();
    let currency2 = $("input#currency2").val();
    CurrencyExchanger.getExchangePair(amount, currency1, currency2).then(
      function (response) {
        displayConversionRate(response);
      }
    );
  });

  $("input#reset").click(function () {
    $("input").empty();
    $("#show-conversion").hide();
  });

  $("input#switch").click(function () {
    let currency1 = $("input#currency1").val();
    let currency2 = $("input#currency2").val();
    $("input#currency1").val(currency2);
    $("input#currency2").val(currency1);
  });
});
