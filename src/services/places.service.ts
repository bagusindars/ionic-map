import { Storage } from '@ionic/storage';
import { Place } from '../model/place.model';
import { Injectable } from '@angular/core'

@Injectable()
export class PlacesService{
    private places: Place[] = [];

    constructor (private storage: Storage) {}

    addPlace(place: Place) {
        this.places.push(place);
        this.storage.set('places', this.places);
    }

    getPlaces(){
      return this.storage.get('places')
        .then(
          (places) => {
            this.places = places == null ? [] : places;
            return this.places.slice();
          }
        );
      // return this.places.slice();
    }
}
