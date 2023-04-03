import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class HomePage {
  constructor(private router: Router) { }

  nav(rota: string) {
    this.router.navigate([rota])
  }

  ctt1_Name:String = "Vincius Henrique"
  ctt2_Name:String = "Marco Aurelio"
  ctt3_Name:String = "Bianca Barbosa"
  ctt4_Name:String = "Carol Castro"
  ctt5_Name:String = "Rebeca Andreoli"
  ctt6_Name:String = "Matheus Fogaça"

  ctt1_Img:String = "https://cdn-sites-images.46graus.com/files/photos/78b7999d/e483d4c5-44c6-4c16-907a-34a41f8676c0/0014-lucca_retrato-683x1024.jpg"
  ctt2_Img:String = "https://storage.alboom.ninja/sites/7680/galleries/55217/retrato-corporativo-campinas-masculino-homem-tiago-6638.jpg?t=1628176103"
  ctt3_Img:String = "https://371b03b3c3d591f1907a-02c8436687108b5acc1ba5d26237925c.ssl.cf1.rackcdn.com/GaleriaImagem/93691/retratos-femininos_de-repente-30-fotografo-de-retrato-em-goiania.jpg"
  ctt4_Img:String = "https://images.squarespace-cdn.com/content/v1/5418b9cbe4b0877352527207/1502919992582-CYOJDDD0P2ETL2FPSRN1/raquel+vilela+-+web-+LVF_2081-Editar.jpg"
  ctt5_Img:String = "https://fotodicasbrasil.com.br/wp-content/uploads/2016/08/Retrato-Petro-e-Branco-Lente-perfeita-para-retratos.jpg"
  ctt6_Img:String = "https://fotografiamais.com.br/wp-content/uploads/2018/09/retrato-iluminacao-fotografia.jpg"

  ctt1_email:String = "viniciushenrique@gmail.com"
  ctt2_email:String = "marcoaurelio@etec.gov.com.br"
  ctt3_email:String = "biancabarbosa@hotmail.com"
  ctt4_email:String = "carolcastro@yahoo.com"
  ctt5_email:String = "rebecaandreoli@ubisof.com"
  ctt6_email:String = "matheusfogaca@picpay.com"

}
