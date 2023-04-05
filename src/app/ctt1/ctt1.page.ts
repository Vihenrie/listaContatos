import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ctt1',
  templateUrl: './ctt1.page.html',
  styleUrls: ['./ctt1.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class Ctt1Page implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

  ctt1_Img:String = "https://cdn-sites-images.46graus.com/files/photos/78b7999d/e483d4c5-44c6-4c16-907a-34a41f8676c0/0014-lucca_retrato-683x1024.jpg"

  nav(rota: string) {
    this.router.navigate([rota])
  }

}
