class Weather {
  isStormy(){
    result = Math.floor(Math.random() * 10);
    return result > 7;
  };
}

module.exports = Weather;
