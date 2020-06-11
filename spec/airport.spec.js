const Airport = require('../models/airport.js');
const Plane = require('../models/plane.js');
const Weather = require('../models/weather.js');

describe("Airport", function(){
  it("can land a plane and confirm it landed", function(){
    airport = new Airport(100);
    plane = new Plane();
    expect(airport.land(plane)).toEqual("Landed!")
  });

  it("adds a plane to a hangar", function(){
    airport = new Airport(100);
    plane = new Plane();
    airport.land(plane);
    expect(airport.planes()).toContain(plane);
  });

  it("confirms that plane took off", function(){
    airport = new Airport(100);
    plane = new Plane();
    weather = new Weather();
    airport.land(plane);
    expect(airport.takeoff(weather)).not.toContain(plane);
  });

  it("prevents plane from landing when airport is full", function(){
    airport = new Airport(100);
    var times = 100;
    for(var i = 0; i < times; i++){
      plane = new Plane();
      airport.land(plane);
    }
    expect(function(){airport.land(plane);}).toThrow("Airport is full");
  });

  it("can override airport capacity", function(){
    airport = new Airport(100);
    airport.changeCapacity(200);
    expect(airport.capacity).toEqual(200);
  });

  it("prevent plane take off when weather is stormy", function(){
    airport = new Airport(100);
    plane = new Plane;
    weather = new Weather;
    expect(function(){airport.takeoff(weather);}).toThrow("Weather is stormy");
  });
});
