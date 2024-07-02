import axios from 'axios';

export class FetchWeatherApi {
  static async getWeatherData(coordinate) {
    try {
      const response = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${coordinate.lat}&longitude=${coordinate.lng}&daily=weathercode,temperature_2m_max,sunrise,sunset,windspeed_10m_max&timezone=auto&current_weather=true`
      );
      const data = await response.json();
      return data;
    } catch (error) {
      return error;
    }
  }

  static async getCityByCoordinate(coordinate) {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${coordinate.lat}&lon=${coordinate.lng}`
      );
      const data = await response.json();
      const { city, village, country } = data.address;
      return city || village || country;
    } catch (error) {
      return error;
    }
  }

  static async fetchDataByCity(city) {
    try {
      const response = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=10&language=en&format=json`
      );
      const data = await response.json();
      const { latitude: lat, longitude: lng } = data.results[0];
      return { lat, lng };
    } catch (error) {
      throw new Error('Invalid city');
    }
  }
}
