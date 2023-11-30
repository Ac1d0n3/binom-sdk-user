import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BnPasswordInputComponent } from '@binom/sdk-user/password';

@Component({
  selector: 'app-password',
  standalone: true,
  imports: [CommonModule, BnPasswordInputComponent],
  templateUrl: './password.component.html',
  styleUrl: './password.component.scss'
})
export class PasswordComponent {

}
