import axios from 'axios';

export class FetchWeatherApi {
  static async getWeatherData(coordinate) {
    try {
      const response = await axios.get(
        `https://api.open-meteo.com/v1/forecast?latitude=${coordinate.lat}&longitude=${coordinate.lng}&daily=weathercode,temperature_2m_max,sunrise,sunset,windspeed_10m_max&timezone=auto&current_weather=true`
      );
      return response.data;
    } catch (error) {
      return error;
    }
  }
}
