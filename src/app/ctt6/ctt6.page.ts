import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ctt6',
  templateUrl: './ctt6.page.html',
  styleUrls: ['./ctt6.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class Ctt6Page implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  nav(rota: string) {
    this.router.navigate([rota])
  }

}
