
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'bn-profile-image-show',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bn-profile-image-show.component.html',
  styleUrls: ['./bn-profile-image-show.component.css', '../bn-profile-image.component.css']
})
export class BnProfileImageShowComponent {
  @Input() height:number = 120;
  @Input() width:number = 0;
  @Input() imageUrl: string = ''; 
  @Input() apiPath: string = '';
  @Input() transform: string = ''; 
  @Input() id: string = ''; 
  imageWidth: number = 300;
  imageHeight: number = 300;
}
