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
  hisFName: string = this.data.getHisName().split(" ")[0];

  herName = this.data.getHerName();
  herFName: string = this.data.getHerName().split(" ")[0];

  date = this.data.getDate();
  location = this.data.getLocation();

  
}
