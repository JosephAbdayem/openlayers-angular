import { Component, OnInit, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import Map from 'ol/Map';
import TileLayer from 'ol/layer/Tile';
import ImageLayer from 'ol/layer/Image';
import OSM from 'ol/source/OSM';
import ImageWMS from 'ol/source/ImageWMS';
import View from 'ol/View';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
  standalone: true
})
export class MapComponent implements OnInit, AfterViewInit {
  map!: Map;
  isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit(): void {
    if (this.isBrowser) {
      this.map = new Map({
        target: 'map',
        layers: [
          new TileLayer({
            source: new OSM()
          }),
          new ImageLayer({
            source: new ImageWMS({
              url: 'http://localhost:8080/geoserver/wms',
              params: { 'LAYERS': 'ne:point', 'TILED': true },
              serverType: 'geoserver',
            })
          }),
          new ImageLayer({
            source: new ImageWMS({
              url: 'http://localhost:8080/geoserver/wms',
              params: { 'LAYERS': 'ne:polygon', 'TILED': true },
              serverType: 'geoserver',
            })
          })
        ],
        view: new View({
          center: [-73.9654, 40.7829],
          zoom: 15,
          projection: 'EPSG:4326'
        })
      });
    }
  }

  ngAfterViewInit(): void {
    if (this.isBrowser) {
      setTimeout(() => {
        this.map.updateSize();
      }, 0);
    }
  }
}
