import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-price',
  standalone: true,
  imports: [],
  templateUrl: './card-price.component.html',
  styleUrl: './card-price.component.css'
})
export class CardPriceComponent implements OnInit {
  
  @Input()
  gameType:string = "Digital PS4"
  @Input()
  gamePrice:string = "R$ 159,99"

  constructor() {}
  ngOnInit(): void {
      
  }
}
