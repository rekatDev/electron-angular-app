import { Component, OnInit } from '@angular/core';
import { TakeService } from '../team-select/take.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public takeService: TakeService) { }

  ngOnInit() {
  }

  onClick() {
    this.takeService.publishMessage();
  }

}
