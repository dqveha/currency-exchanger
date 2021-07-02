# Currency Exchange Application

## [https://github.com/dqveha/currency-exchanger/] (https://github.com/dqveha/currency-exchanger/)

#### By Dave Lindqvist

---

## Technologies Used

1. HTML5+CSS3
2. JavaScript/ES2018+
3. jQuery
4. Bootstrap
5. webpack/webpack-cli/webpack dev server
6. eslint
7. babel transpiler
8. ExchangeRate-API
9. Github Pages Deploy Action v4.1.4

---

## Project Description

This is the sixth independent project assigned by Epicodus to assess the use of API within a working environment. The purpose of this web application is to allow the user to input a currency and amount, then convert it into another currency using ExchangeRate-API. Users have the option of inputting any currency code listed in the table as shown within the page. If there is an error, then the user is prompted by error messages to help figure out how to troubleshoot the problem.

Additional features added from author:

- Reset and switch button
- Insert currency exchange table referenced from ExchangeRate-API

### Installation Instructions

1. Clone this repo: `git clone https://github.com/dqveha/currency-exchanger.git`
2. Open `currency-exchanger` directory using Visual Studio Code
3. Create an `.env` file in the top most directory and insert `API_KEY=` then save
4. Visit the ExchangeRate-API site, enter your email address, and click the "Get Free Key" button
5. Create an account with your email, first name, and a password
6. Agree to terms and click "Get Started!"
7. Confirm your email address
8. Copy and paste your API Key from ExchangeRate-API dashboard page into your .env after `API_KEY=`
9. Install dependencies with `npm install`
10. To run it locally, use the npm dev command `npm run start`
11. Open your web browser and navigate to http://localhost:9001
12. For a production build, use `npm run build`

---

### Known Issues:

1. Originally, an intentional alert prompt was inputted into `getExchangePair()` static method to alert the user of inputting a 0. However, this never alerted the user, but it did output that there was an error. I'm indicating this as a bug even though it ended up being beneficial towards my web application. (Similar to how a medication can have an unintentional positive side effect)
2. Please open a pull request if you have any issues!

---

### License is GPLv3 and I make no claim to copyright.
