import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card'
import { BnProfileImageComponent } from '@binom/sdk-user/profile-img';
@Component({
  selector: 'bn-profile-card',
  standalone: true,
  imports: [CommonModule, MatCardModule, BnProfileImageComponent],
  templateUrl: './bn-profile-card.component.html',
  styleUrl: './bn-profile-card.component.css'
})
export class BnProfileCardComponent {

}
