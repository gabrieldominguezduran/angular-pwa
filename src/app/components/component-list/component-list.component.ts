import { Component, OnInit } from '@angular/core';
import { ComponentListService } from 'src/app/services/component-list.service';

@Component({
  selector: 'app-component-list',
  templateUrl: './component-list.component.html',
  styleUrls: ['./component-list.component.css'],
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
