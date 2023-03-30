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

  ngOnInit() {
  }

  nav(rota: string) {
    this.router.navigate([rota])
  }

}
