import { Component, ViewChild, ElementRef, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-battle-canvas',
  templateUrl: './battle-canvas.component.html',
  styleUrls: ['./battle-canvas.component.scss']
})
export class BattleCanvasComponent implements OnInit, AfterViewInit {

  @ViewChild("pokemonCanvas", {static: false}) pokemonCanvas!: ElementRef<HTMLCanvasElement>;

  pokemonCanvasContext!: CanvasRenderingContext2D;
  
  constructor() {}

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.pokemonCanvasContext = this.pokemonCanvas.nativeElement.getContext("2d")!;
    this.pokemonCanvasContext.canvas.width = 256;
    this.pokemonCanvasContext.canvas.height = 192;
    const battleBackgroundOne = new Image(256, 192)
    battleBackgroundOne.src = "/assets/battle_backgrounds.png"
    this.pokemonCanvasContext.drawImage(battleBackgroundOne, 0, 0, 256, 192);
  }

}
