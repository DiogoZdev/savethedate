import { InfoService } from 'src/app/services/info.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-abouther',
  templateUrl: './abouther.component.html',
  styleUrls: ['./abouther.component.scss']
})
export class AboutherComponent {

  constructor(private data: InfoService) { }

  herName = this.data.getHerName();
}
