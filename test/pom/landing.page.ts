import BasePage from "./base.page"

export default class LadingPage extends BasePage{
  private get hotelTab() {return $('li[data-tab="Hotel"]');}

  async clickOnHotelTab(){
    await this.hotelTab.waitForEnabled()
    await this.hotelTab.click()
  }

  async isHotelTabEnabled(){
    return await this.hotelTab.getAttribute('aria-selected');
  }
}