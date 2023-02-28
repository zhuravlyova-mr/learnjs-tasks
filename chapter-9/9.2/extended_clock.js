class Clock {
    constructor({image}) {
      this.clock = image;
    }
  
    ticktock() {
      let now = new Date();
      console.log(this.clock = now.toLocaleString().slice(12, 21));
    }
  
    stop() {
      clearInterval(this.timer);
    }
  
    start() {
      this.ticktock();
      this.timer = setInterval(() => this.ticktock(), 1000);
    }
  }

  class ExtendedClock extends Clock {
    constructor(image, precision = 1000) {
        super(image);
        this.precision = precision;
    }
    
    start() {
        this.ticktock();
        this.timer = setInterval(() => this.ticktock(), this.precision);
    }
  
  }
  
  let clock = new ExtendedClock({image: ''}, 2000);
  clock.start();
  setTimeout(() => clock.stop(), 20000);