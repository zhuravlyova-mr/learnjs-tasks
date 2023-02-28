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
  
  let clock = new Clock({image: ''});
  clock.start();
  setTimeout(() => clock.stop(), 30000);