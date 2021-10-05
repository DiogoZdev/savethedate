import { InfoService } from 'src/app/services/info.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-abouthim',
  templateUrl: './abouthim.component.html',
  styleUrls: ['./abouthim.component.scss']
})
export class AbouthimComponent {

  constructor(private data: InfoService) { }

  hisName = this.data.getHisName();
}
