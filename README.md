# Real Time Bus Tracker

## Description
A web app that pulls in the real time location of busses that run a rout in Boston from MIT to Harvard. The location of the busses is displayed on a map and updated every 15 seconds.

## How To Run
Create an account with https://www.mapbox.com/ to obtain an access token key. Insert the Mapbox access token in the busTracker.js file as show bellow:

```JS
const mapboxgl.accessToken = 'YOUR ACCCESS TOKEN HERE'
```

## Future improvements
- Change the icons for the buses
- Display bus capacity by changing color of the icon
- Place markers for MIT and Harvard

## License information
Copyright (c) 2021 Guillerm Aldaz

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
