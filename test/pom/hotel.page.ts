import BasePage from "./base.page";

export default class HotelPage extends BasePage{
  protected get destination() {return $('input[name="Destination"]')}
  protected get startDate() {return $('input[name="CheckIn"]');}
  protected get endDate() {return $('input[name="CheckOut"]');}
  protected get searchBtn() {return $('.js-hotel-search-submit-top');}

  async enterDestination(destination: string){
    await this.destination.setValue(destination);
  }

  async enterDates(){
    await this.startDate.click();
     await (await $('td a[title="Select Thursday, Jul 18"]')).waitForClickable()
      await $('td a[title="Select Thursday, Jul 18"]').click();
    await this.endDate.click();
    await  $('td a[title="Select Thursday, Jul 25"]').waitForClickable();

    await $('td a[title="Select Thursday, Jul 25"]').click();

  }

  async search(){
    await this.searchBtn.click()
  }

}