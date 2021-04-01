import axios from "axios"

const apis = {
    searchPlaceGoogle(text) { 
        return axios.get(`https://place.havaz.vn/api/v1/places?input=${text}&api_token=6tihDYHMeDKem5nvi2SnZ04o4cXRloZsyoMkJ6RsltPy5irdkCpR0QTyCk2v`)
    },
    searchLatLongGoogle(id) {
        return axios.get(`https://place.havaz.vn/api/v1/places/${id}?api_token=6tihDYHMeDKem5nvi2SnZ04o4cXRloZsyoMkJ6RsltPy5irdkCpR0QTyCk2v`)
    },
    searchPlacePoint(lat, long) {
        return axios.get(`https://apiweb.hasonhaivan.com/api/places?lat=${lat}&lng=${long}`)
    },
    getCity(lat,long){
        return axios.get(`https://cms.hasonhaivan.com/api/getCity/?point=${lat},${long}`)
    },
    getTrips(start_lat, start_lng, end_lat, end_lng, date){
        return axios.get(`https://apiweb.hasonhaivan.com/api/trips?start_lat=${start_lat}&start_lng=${start_lng}&end_lat=${end_lat}&end_lng=${end_lng}&date=${date}`)
    }
}
export default apis