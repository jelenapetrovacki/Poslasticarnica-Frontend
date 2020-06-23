import { Component, OnInit, Input } from '@angular/core';
import { Poslastica } from '../../../shared/poslastica.model';


@Component({
  selector: 'app-poslastice-item',
  templateUrl: './poslastice-item.component.html',
  styleUrls: ['./poslastice-item.component.css']
})
export class PoslasticeItemComponent implements OnInit {

  @Input() poslastica: Poslastica;
  @Input() index: number;

  ngOnInit(): void {
  }



}
