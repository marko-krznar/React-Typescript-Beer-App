import axios from "axios";

export class BeersService {
  private static serverURL: string = `https://api.punkapi.com/v2`;
  public static getAllBeers() {
    let dataURL: string = `${this.serverURL}/beers`;
    return axios.get(dataURL);
  }
  public static getSingleBeer(beerId: string) {
    let dataURL: string = `${this.serverURL}/beers/${beerId}`;
    return axios.get(dataURL);
  }
}
