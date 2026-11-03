---
title: OSMLocationSearch
---

### OSMLocationSearch (quick notes)
- **Location:** `src/domains/app/components/location-search/`
- **Props:**  
  - `onSelect(place: LocationSearchPlace)` — called only after a valid selection and successful complete reverse lookup.
- **Usage:**  
  - Provides a search box for users to look up locations (cities, countries, regions) using **OpenStreetMap Nominatim** API.  
  - Once a user selects a suggestion, it fetches structured details (city + country) via reverse geocoding and returns them in the callback.
- **A11y:**  
  - Inherits accessibility support from the `@amraneze/osm-autocomplete` component.  
  - Input includes `placeholder` and `aria-autocomplete="list"`.  

### Example
```tsx
import { OSMLocationSearch, LocationSearchPlace } from '@/domains/app/components';

const handleSelect = (place: LocationSearchPlace) => {
  console.log('Selected place:', place);
};

<OSMLocationSearch onSelect={handleSelect} />;
```


### Notes
- Uses `OpenStreetMapAutocomplete` from the `@amraneze/osm-autocomplete` library.
- Automatically debounces user input (300ms default).
- When a location is chosen:
    1. It validates non-empty finite `lat`/`lon`, latitude within -90–90 and longitude within -180–180.
    2. Requires a successful reverse response and an address with city (or town/village/county fallback) and country.
    3. Passes `{ lat, lon, city, country }` to `onSelect` only for the current request identity.
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

### Reverse lookup failure and retry

The wrapper shows **Looking up location…** with status semantics. Non-success responses, network/JSON errors and missing/incomplete address data produce an alert and **Retry location lookup** when the selected coordinates are valid. Invalid coordinates produce feedback without a request or retry button; choose another result. Request IDs prevent an older lookup result from replacing a newer selection. Failure or clearing the search does not call `onSelect`, so a previously accepted location stays in the parent's form.

This handles reverse lookup; it does not establish separate autocomplete-provider search error behavior or current-location permission support. Coordinates belong to the local callback/form state only: the current onboarding UpdateUserRequest saves city/country and omits latitude/longitude. Automated tests use controlled fetch responses; deployed Nominatim error/retry and live-backend saves remain unverified.
