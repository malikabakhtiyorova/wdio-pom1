import BasePage from './base.page';

export default class HotelResults extends BasePage {
  protected get hotelResultsCount() {
    return $('h2[class=hotel-results-pagination-count-header]');
  }

  async getHotelResultsCount() {
    await this.hotelResultsCount.waitForExist()
     return (await this.hotelResultsCount.getText()).split(' ')[5];
  }

  async isHotelResultsNumberMatch(hotelsCount:number){
    expect(Number(await this.getHotelResultsCount())).toEqual(hotelsCount);
  }

}
