import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-button-action',
  templateUrl: './button-action.component.html',
  styleUrls: ['./button-action.component.scss'],
})
export class ButtonActionComponent implements OnInit {
  @Input() // je veux passer une information du parent vers le fils
  isNouveauVisible = true;
  @Input()
  isExporterVisible = true;
  @Input()
  isImporterVisible = true;

  @Output() //je veux faire une communication de bas vers le haut (de fils vers le parent)
  clickEvent = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  bouttonNouveauClick(): void {
    this.clickEvent.emit();
  }
}
