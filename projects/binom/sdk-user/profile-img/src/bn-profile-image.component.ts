import { Component, Input } from '@angular/core';

import { CommonModule } from '@angular/common';
import {BnProfileImageEditComponent } from './bn-profile-image-edit/bn-profile-image-edit.component';
import {BnProfileImageShowComponent} from './bn-profile-image-show/bn-profile-image-show.component';
@Component({ 
  selector: 'bn-profile-image',
  standalone: true,
  imports: [CommonModule, BnProfileImageEditComponent, BnProfileImageShowComponent],
  templateUrl: './bn-profile-image.component.html',
  styleUrl: './bn-profile-image.component.css'
})
export class BnProfileImageComponent {
  @Input() id='agdgdhruj';
  
  @Input() height:number = 120;
  @Input() width:number = 0;
  @Input() imageUrl: string = ''; 
  @Input() transform: string = ''; 
  @Input() apiPath: string = ''; 

  @Input() editMode:boolean = false;
}
