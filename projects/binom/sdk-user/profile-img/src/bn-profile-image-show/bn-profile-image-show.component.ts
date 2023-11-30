
import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'bn-profile-image-show',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bn-profile-image-show.component.html',
  styleUrls: ['./bn-profile-image-show.component.css', '../bn-profile-image.component.css'],
  //encapsulation:ViewEncapsulation.None
})
export class BnProfileImageShowComponent implements OnInit {
  @Input() height:number = 120;
  @Input() width:number = 0;
  @Input() imageUrl: string = ''; 
  @Input() apiPath: string = '';
  @Input() transform: string = 'scale(1.2)'; 
  @Input() id: string = ''; 
  imageWidth: number = this.height;
  imageHeight: number = this.height;
  baseUrl = ''; 
  ngOnInit(): void {
    if(this.imageUrl !== null && this.imageUrl !== '' && this.apiPath !== '')  this.imageUrl =  this.baseUrl.replace('/api/','') + this.imageUrl 
  }

 

}
