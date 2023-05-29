let calculator = {
    
    read: function() {
      this.a = 6;
      this.b = 10;
    },

    sum: function() {
      return this.a + this.b;
    },

    avg: function() {
      return (this.a + this.b) / 2;
    },
    
  };
  
  calculator.read();
  console.log(calculator.sum());
  console.log(calculator.avg());