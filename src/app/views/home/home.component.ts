import { Component } from '@angular/core';
import { InfoService } from 'src/app/services/info.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private data: InfoService) {}

  hisName: string = this.data.getHisName();
  herName = this.data.getHerName();

  date = this.data.getDate();
  location = this.data.getLocation();

  
}
