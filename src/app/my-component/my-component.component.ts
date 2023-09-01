import { Component, Input} from '@angular/core';
import { CurrenciesInfo } from '../Models/CurrenciesInfo';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent {
  @Input() name: any;
  @Input() symbol : string = '';
  @Input() array : CurrenciesInfo[]=[];
}
