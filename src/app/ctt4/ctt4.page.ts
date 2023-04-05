import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ctt4',
  templateUrl: './ctt4.page.html',
  styleUrls: ['./ctt4.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class Ctt4Page implements OnInit {

  constructor(private router: Router) { }

  ctt4_name:String = "Carol Castro"
  ctt4_Img:String = "https://images.squarespace-cdn.com/content/v1/5418b9cbe4b0877352527207/1502919992582-CYOJDDD0P2ETL2FPSRN1/raquel+vilela+-+web-+LVF_2081-Editar.jpg"
  ctt4_email:String = "carolcastro@yahoo.com"
  ctt4_prof:String = "Empresaria"

  ngOnInit() {
  }

  nav(rota: string) {
    this.router.navigate([rota])
  }

}
