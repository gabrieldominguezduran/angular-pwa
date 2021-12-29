import { Component, OnInit } from '@angular/core';
import { ComponentListService } from 'src/app/services/component-list.service';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'app-component-list',
  templateUrl: './component-list.component.html',
  styleUrls: ['./component-list.component.css'],
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
export class ComponentListComponent implements OnInit {
  images: any[] = [];
  constructor(private componentListService: ComponentListService) {}

  ngOnInit(): void {
    this.componentListService
      .getAllImages()
      .subscribe((images) => (this.images = Object.values(images)));
  }
}
