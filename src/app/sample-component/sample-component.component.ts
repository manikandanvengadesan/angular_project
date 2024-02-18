import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AgePipe } from "../age.pipe";

@Component({
    selector: 'app-sample-component',
    standalone: true,
    templateUrl: './sample-component.component.html',
    styleUrl: './sample-component.component.css',
    imports: [
        CommonModule,
        AgePipe
    ]
})
export class SampleComponentComponent {

  num = 20
  values = ['prajeesh','Deepak','rahul']
  object = [{name:'Prajeesh',place:'kerala'},{name:'Deepak',place:'kerala'}]
  firstName='Prajeesh'

  demoDate = Date()
  nameValue='This is string pipe'
  secondObject=[{name:'Anu',place:'kerala'},{name:'Vinu',place:'kerala'}]
}
