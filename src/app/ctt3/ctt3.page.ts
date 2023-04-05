import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ctt3',
  templateUrl: './ctt3.page.html',
  styleUrls: ['./ctt3.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class Ctt3Page implements OnInit {

  constructor(private router: Router) { }

  ctt3_name:String = "Bianca Barbosa"
  ctt3_Img:String = "https://371b03b3c3d591f1907a-02c8436687108b5acc1ba5d26237925c.ssl.cf1.rackcdn.com/GaleriaImagem/93691/retratos-femininos_de-repente-30-fotografo-de-retrato-em-goiania.jpg"
  ctt3_email:String = "biancabarbosa@hotmail.com"
  ctt3_prof:String = "Esteticista"

  ngOnInit() {
  }

  nav(rota: string) {
    this.router.navigate([rota])
  }

}
