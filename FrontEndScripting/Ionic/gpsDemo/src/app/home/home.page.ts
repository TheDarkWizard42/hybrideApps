import { Component } from '@angular/core';
import { Plugins } from '@capacitor/core';
import * as L from 'leaflet';

const { Geolocation } = Plugins;
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  longitude: number;
  latitude: number;
  nieuweLatitude: number;
  nieuweLongitude: number;
  constructor() { }

  ionViewWillEnter() {
    this.getCurrentPosition();
  }
  async getCurrentPosition() {
    const coordinates = await Geolocation.getCurrentPosition();
    this.longitude = coordinates.coords.longitude;
    this.latitude = coordinates.coords.latitude;

    var map = L.map('map').setView([this.latitude, this.longitude], 20);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    }).addTo(map);

    var m = L.marker([this.latitude, this.longitude]).addTo(map)
      .bindPopup('You are here')
      .openPopup();

    const wait = Geolocation.watchPosition({ enableHighAccuracy: true, timeout: 1000 }, (position, err) => {
      this.nieuweLatitude = position.coords.latitude;
      this.nieuweLongitude = position.coords.longitude;
      m.setLatLng([this.nieuweLatitude, this.nieuweLongitude]);
      // schrijf code om de marker aan te passen - tip: er bestaat een setLatLng methode voor marker (zie docs leaflet online)
    });
  }
}
