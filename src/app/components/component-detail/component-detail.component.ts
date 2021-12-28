import { Component, OnInit } from '@angular/core';
import { ComponentDetailService } from 'src/app/services/component-detail.service';

@Component({
  selector: 'app-component-detail',
  templateUrl: './component-detail.component.html',
  styleUrls: ['./component-detail.component.css'],
})
export class ComponentDetailComponent implements OnInit {
  panelOpenState: boolean = false;
  image: any[] = [];
  constructor(private componentDetailService: ComponentDetailService) {}

  ngOnInit(): void {
    this.componentDetailService
      .getRandomImage()
      .subscribe((image) => (this.image = Object.values(image)));
  }
}
