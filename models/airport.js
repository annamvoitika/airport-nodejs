class Airport {
  constructor(capacity){
    this._hangar = [];
    this.capacity = capacity;
  }

  land(plane){
    if (this._hangar.length < 100){
    this._hangar.push(plane);
    return "Landed!"}
    else {
      throw "Airport is full";
    }
  };

  planes(){
    return this._hangar;
  };

  takeoff(weather){
    if(weather.isStormy() == true){
      throw "Weather is stormy";
    }
    else {
    this._hangar.pop();
    return this._hangar;}
  };

  changeCapacity(number){
    this.capacity = number;
  };


};

module.exports = Airport;
