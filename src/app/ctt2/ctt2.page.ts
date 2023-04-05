import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ctt2',
  templateUrl: './ctt2.page.html',
  styleUrls: ['./ctt2.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class Ctt2Page implements OnInit {

  constructor(private router: Router) { }

  ctt2_name:String = "Marco Aurelio"
  ctt2_Img:String = "https://storage.alboom.ninja/sites/7680/galleries/55217/retrato-corporativo-campinas-masculino-homem-tiago-6638.jpg?t=1628176103"
  ctt2_email:String = "marcoaurelio@etec.gov.com.br"
  ctt2_prof:String = "Engenheiro"

  ngOnInit() {
  }

  nav(rota: string) {
    this.router.navigate([rota])
  }

}
