import { MyEntity } from '../../services/MyEntity';
import { MyModelService } from './../../services/my-model.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {
  myList: MyEntity[] = [];
  constructor(private myService: MyModelService) { 
    console.log("In Page1");
    
  }

  ngOnInit(): void {
    this.myService.fetchAllEntities().subscribe(data => this.myList = data);
  }

}

