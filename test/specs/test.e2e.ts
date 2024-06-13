import HotelPageData from '../data/hotelPageDate'
import HotelFlow from '../dsl/hotelFlow'


let hotelFlow = new HotelFlow()
let hotelPageData = new HotelPageData();

describe('My Login application', () => {
    before(async ()=> {
        await hotelFlow.openURL();
    })
    it('should login with valid credentials', async () => {
       await hotelFlow.navigateToHotelTab()
       expect(await hotelFlow.isHotelTabSelected()).toBeTruthy()
       await hotelFlow.fillSearch(hotelPageData);
       await hotelFlow.assertHotelResultsCount(hotelPageData);
    })
})

