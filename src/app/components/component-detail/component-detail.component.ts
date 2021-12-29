import { Component, OnInit } from '@angular/core';
import { ComponentDetailService } from 'src/app/services/component-detail.service';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'app-component-detail',
  templateUrl: './component-detail.component.html',
  styleUrls: ['./component-detail.component.css'],
  animations: [
    trigger('fadeInOut', [
      state(
        'void',
        style({
          opacity: 0.2,
        })
      ),
      transition('void <=> *', animate(1500)),
    ]),
  ],
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
