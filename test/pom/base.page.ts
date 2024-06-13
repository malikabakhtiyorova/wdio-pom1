export default class BasePage {
  open(path = 'https://vacationsdirect.com/'){
    return browser.url(path)
  };
}