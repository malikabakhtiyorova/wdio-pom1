import HotelPageData from "../data/hotelPageDate";
import HotelPage from "../pom/hotel.page";
import HotelResults from "../pom/hotelResults.page";
import LadingPage from "../pom/landing.page";

export default class HotelFlow {
  protected hotelPage = new HotelPage()
  protected hotelResultsPage = new HotelResults()
  protected landingPage = new LadingPage()

  openURL(){
    this.hotelPage.open()
  }

  async navigateToHotelTab(){
    await this.landingPage.clickOnHotelTab()
  }

  async isHotelTabSelected(){
    return await this.landingPage.isHotelTabEnabled()
  }

  async fillSearch(hotelPageData: HotelPageData){
    
    await this.hotelPage.enterDestination(hotelPageData.hotel.search.destination);
    await this.hotelPage.enterDates(
    );
    await this.hotelPage.search()
  }

  async assertHotelResultsCount(hotelPageData: HotelPageData){
    await this.hotelResultsPage.isHotelResultsNumberMatch(hotelPageData.hotel.search.countHotels)
  }


}