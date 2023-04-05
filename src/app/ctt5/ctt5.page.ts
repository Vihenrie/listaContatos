import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ctt5',
  templateUrl: './ctt5.page.html',
  styleUrls: ['./ctt5.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class Ctt5Page implements OnInit {

  constructor(private router: Router) { }

  ctt5_name:String = "Rebeca Andreoli"
  ctt5_Img:String = "https://fotodicasbrasil.com.br/wp-content/uploads/2016/08/Retrato-Petro-e-Branco-Lente-perfeita-para-retratos.jpg"
  ctt5_email:String = "rebecaandreoli@ubisof.com"
  ctt5_prof:String = "Modelo"

  ngOnInit() {
  }

  nav(rota: string) {
    this.router.navigate([rota])
  }

}
