import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimulateLoginLogoutComponent } from '../simulate-login-logout/simulate-login-logout.component';

@Component({
  selector: 'app-directive-demo',
  standalone: true,
  imports: [CommonModule,SimulateLoginLogoutComponent],
  templateUrl: './directive-demo.component.html',
  styleUrl: './directive-demo.component.scss'
})
export class DirectiveDemoComponent {

}
