import { Component } from '@angular/core';
import { ResourcesService } from './resources.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'paos_food';

  constructor(private resourcesService: ResourcesService) { }
}
