import { Component } from '@angular/core';
import { CardLabelComponent } from './card-label/card-label.component';
import { CardPriceComponent } from './card-price/card-price.component';


@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CardLabelComponent, CardPriceComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

}
