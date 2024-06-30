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
      console.log(data);
      // const {

      // } = data.address;
      console.log(data.address.city);
      return 'Goungzhou';
    } catch (error) {
      return error;
    }
  }
}
