import {Component, OnInit, Input} from '@angular/core';
import {Article} from "../article";

@Component({
  selector: 'hc-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.styl'],
  host : {
    '[class.expanded]' : 'isExpanded'
  }
})
export class CardComponent implements OnInit {

  @Input() article: Article;

  private isExpanded: boolean = false;

  constructor() { }

  ngOnInit() {
    console.log("Card component init!!");
  }

  toggleAccordion() {
    console.log("Collapse " + this.isExpanded + " => " + !this.isExpanded);
    this.isExpanded = !this.isExpanded;
  }

}
