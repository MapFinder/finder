import { Component, OnInit, ViewChild } from '@angular/core';
import { GoogleMapsService } from 'app/services';

@Component({
  selector: 'finder-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  @ViewChild('map') mapEl;
  map: any;
  drawing = false;
  adding = false;
  stopDrawing: Function;

  constructor(private gmaps: GoogleMapsService) { }

  ngOnInit() {
    this.gmaps.createMap(this.mapEl.nativeElement)
      .then((map) => this.map = map);
  }

  select() {
    if (!this.drawing) {
      this.gmaps.drawPolygon(this.map)
        .then((fn: Function) => {
          this.drawing = true;
          this.stopDrawing = fn;
        });
    } else {
      this.drawing = false;
      this.stopDrawing();
    }
  }

  addMarker() {
    if (this.adding) { return; }

    this.adding = true;
    this.gmaps.addMarker(this.map)
      .then(() => this.adding = false);
  }

}
