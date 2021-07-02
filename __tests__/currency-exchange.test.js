import CurrencyExchanger from "../src/services/currency-exchange.js";

describe('CurrencyExchanger', () => {
  let exchangeRate;
  
  beforeEach(() => {
    exchangeRate = new CurrencyExchanger();
    fetch = jest.fn(() => Promise.resolve());
  })

  test('should return exchange rate between USD to GBP', () => {
    CurrencyExchanger.getExchangePair("USD", "GBP").then(data => {
      expect.assertions(1);
      expect(data).toContain(data.conversion_rate);
    });
  });
})