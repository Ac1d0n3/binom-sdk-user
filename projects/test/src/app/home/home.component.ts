import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimulateLoginLogoutComponent } from '../simulate-login-logout/simulate-login-logout.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,SimulateLoginLogoutComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
