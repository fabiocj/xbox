import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the GamesGoldProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GamesGoldProvider {

  private baseApiPath = "https://xboxapi.com";

  constructor(public http: Http) {
    console.log('Hello GamesGoldProvider Provider');
  }

  getGamesGold(){
    return this.http.get(this.baseApiPath + "/v2/xboxone-gold-lounge", );
  }
  //https://xboxapi.com/v2/xboxone-gold-lounge", "xuid=2535440964564193&X-AUTH=0371ba8cb9a7897eeecdbc3ae59f0a6a2dfd2c66
}
