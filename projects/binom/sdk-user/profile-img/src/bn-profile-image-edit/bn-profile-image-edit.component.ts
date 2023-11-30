import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, Input, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { BnApiService } from '@binom/sdk-core/data-loader';
import { map, take } from 'rxjs';
import { MatButtonModule } from '@angular/material/button';
import { TranslateModule } from '@ngx-translate/core';


import { CommonModule } from '@angular/common';

@Component({
  selector: 'bn-profile-image-edit',
  standalone: true,
  imports: [CommonModule,MatButtonModule,TranslateModule],
  templateUrl: './bn-profile-image-edit.component.html',
  styleUrls: ['./bn-profile-image-edit.component.css', '../bn-profile-image.component.css'],
 // encapsulation:ViewEncapsulation.None
})
export class BnProfileImageEditComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('fileInput', { static: false }) fileInput!: ElementRef;
  @ViewChild('userImage', { static: false }) userImage!: ElementRef;

  constructor(private apiSvc:BnApiService,private http: HttpClient){ this.baseUrl = this.apiSvc.getApiUrl()}
 
  @Input() height:number = 120;
  @Input() width:number = 0;
  @Input() imageUrl: string = ''; 
  @Input() apiPath: string = '';
  @Input() transform: string = ''; 
  @Input() id: string = ''; 

  imageWidth: number = this.height;
  imageHeight: number =   this.height;
  baseUrl = ''; 
  isDragging: boolean = false;
  startX: number = 0;
  startY: number = 0;
  initialX: number = 0;
  initialY: number = 0;
  scale:number = 1;
  imageX: number = 0; 
  imageY: number = 0; 
  curMode:string = 'none';
  hovered:boolean = false;
  isHovered: boolean = false;
  
  ngOnInit(): void {
    if(this.imageUrl !== null && this.imageUrl !== '' && this.apiPath !== '')  this.imageUrl =  this.baseUrl.replace('/api/','') + this.imageUrl 
  }

  ngAfterViewInit(): void {
    const useEl =  this.userImage.nativeElement
    if (useEl) {
      useEl.addEventListener('wheel', this.onZoom.bind(this), { passive: false });
      useEl.addEventListener('touchstart', this.onDragStart.bind(this), { passive: true });
      useEl.addEventListener('touchmove', this.onDrag.bind(this), { passive: true });
    } 
  }

  ngOnDestroy(): void {
    const useEl = this.userImage.nativeElement;
    if (useEl) {
      useEl.removeEventListener('wheel', this.onZoom);
      useEl.removeEventListener('touchstart', this.onDragStart);
      useEl.removeEventListener('touchmove', this.onDrag);
    }
  }

  onHoverStart(){ this.hovered = true; }
  fireAction(action:string){ this.curMode = action; }
  onDragEnd() { this.isDragging = false; }
  selectImage() { this.fileInput.nativeElement.click(); }

  onHoverEnd(){
    this.hovered = false;
    if(this.curMode === 'edit'){ this.transformAction();
    } else { this.onDone() }
  }

  hover(value: boolean): void { this.isHovered = value; }

  onDone(){
    setTimeout(() => {
      this.curMode = 'none'; 
      this.restart = true;
    }, 500);
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    this.uploadAction(file);
  }
  
  updateImage(url: string) { this.imageUrl = url; }
  restart:boolean = true;
  onDragStart(event: MouseEvent | TouchEvent) {
    event.preventDefault(); // 
    this.restart = false;
    if(this.curMode !== 'edit') return;
    this.isDragging = true;
    if (event instanceof MouseEvent) {
      this.startX = event.clientX;
      this.startY = event.clientY;
    } else if (event instanceof TouchEvent) {
      this.startX = event.touches[0].clientX;
      this.startY = event.touches[0].clientY;
    }
  }

  onDrag(event: MouseEvent | TouchEvent) {
   
    if(this.curMode !== 'edit') return;
    event.preventDefault(); // 
    if (this.isDragging) {
      let currentX = 0, currentY = 0;
      if (event instanceof MouseEvent) {
        currentX = event.clientX;
        currentY = event.clientY;
      } else if (event instanceof TouchEvent) {
        currentX = event.touches[0].clientX;
        currentY = event.touches[0].clientY;
      }

      const dx = currentX - this.startX;
      const dy = currentY - this.startY;
      this.imageX += dx;
      this.imageY += dy;
      this.setTransform();
      this.startX = currentX;
      this.startY = currentY;
    }
  }

  uploadAction(file: any): void {
    const formData: FormData = new FormData();
    formData.append('user_image', file);
    this.http.post(`${this.baseUrl}${this.apiPath}`, formData)
      .pipe(take(1))
      .subscribe((data: any) => {
        this.imageUrl =  this.baseUrl.replace('/api/','') + data.image
        this.curMode = 'edit-help'
      });
  }

  transformAction(): void {
   
    const body = { user_image_config: this.transform };

    this.http.put(`${this.baseUrl}${this.apiPath}`, body)
      .pipe(take(1))
      .subscribe((data: any) => {
        this.curMode = 'saved';
        setTimeout(() => {
          this.onDone()
        }, 1000);
      });
  }

  setTransform(){ this.transform = ` translate(${this.imageX} ${this.imageY}) scale(${this.scale})`; }

  onZoom(event: WheelEvent) {
    
    if(this.curMode !== 'edit') return;
    event.preventDefault(); // 
    if(this.imageUrl) {
      const scaleFactor = event.deltaY > 0 ? this.scale * 1.01 : this.scale / 1.01;
      this.scale = Math.max(0.5, Math.min(3.0, scaleFactor));
      this.setTransform();
    }
  }
}
