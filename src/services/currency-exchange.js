export default class CurrencyExchanger {
  static getExchangePair(amount, currency1, currency2) {
    return fetch(
      `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/${currency1}/${currency2}/${amount}`
    )
      .then(function (response) {
        if (!response.ok) {
          console.log(response.json());
          return response.json();
        }
        return response.json();
      })
      .catch(function (error) {
        return Error(error);
      });
  }
}
