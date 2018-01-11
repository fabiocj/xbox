import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GamesGoldProvider } from '../../providers/games-gold/games-gold';

/**
 * Generated class for the PromocoesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-promocoes',
  templateUrl: 'promocoes.html',
  providers: [
    GamesGoldProvider
  ]
})
export class PromocoesPage {

  public objeto_promocoes = {
    titulo: "Nome do Jogo",
    data: "01/01/2018",
    descricao: "Descricao do Jogo",
    qtd_likes: 5,
    qtd_comentarios: 2,
    data_comentario: "ontem"
    
  }

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private gamesGoldProvider: GamesGoldProvider
  ) {

  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad PromocoesPage');
    this.gamesGoldProvider.getGamesGold().subscribe(
      data=>{
        console.log(data);
      }, error => {
        console.log(error);
      }
    );
  }

}
