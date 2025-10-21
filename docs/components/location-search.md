---
title: OSMLocationSearch
---

### OSMLocationSearch (quick notes)
- **Location:** `src/components/osm-location-search/`
- **Props:**  
  - `onSelect(place: GalLocation)` — callback fired when a location is chosen.  
- **Usage:**  
  - Provides a search box for users to look up locations (cities, countries, regions) using **OpenStreetMap Nominatim** API.  
  - Once a user selects a suggestion, it fetches structured details (city + country) via reverse geocoding and returns them in the callback.
- **A11y:**  
  - Inherits accessibility support from the `@amraneze/osm-autocomplete` component.  
  - Input includes `placeholder` and `aria-autocomplete="list"`.  

### Example
```tsx
import { OSMLocationSearch, GalLocation } from '@/components/osm-location-search/osm-location-search.component';

const handleSelect = (place: GalLocation) => {
  console.log('Selected place:', place);
};

<OSMLocationSearch onSelect={handleSelect} />;
```


### Notes
- Uses `OpenStreetMapAutocomplete` from the `@amraneze/osm-autocomplete` library.
- Automatically debounces user input (300ms default).
- When a location is chosen:
    1. It parses `lat` and `lon`.
    2. Fetches structured address data (city, country).
    3. Passes `{ lat, lon, city, country }` to `onSelect`.
- The reverse geocoding call:
```bash
GET https://nominatim.openstreetmap.org/reverse?format=json&lat={lat}&lon={lon}&addressdetails=1
```
- Example returned value from `onSelect`:
```json
{
  "lat": 36.7213,
  "lon": -4.4214,
  "city": "Málaga",
  "country": "Spain"
}
```
- You can extend the component to:
    - Restrict search to certain countries.
    - Display results on a map (using Leaflet or Mapbox).
    - Cache queries locally for performance.


<br></br>
<br></br>
> Owner: @aleb, el Hijo del Diablo · Last reviewed: Mon, 20 Oct 2025