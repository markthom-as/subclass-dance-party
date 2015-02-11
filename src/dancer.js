// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps){
  this.timeBetweenSteps = timeBetweenSteps;
  this.$node = $('<span class="dancer"></span>');
  this.setPosition(top, left);
  this.step();

//   while (this) {
//     for ( var i = 0; i < window.dancers.length; i++ ) {
//       if ( (window.dancers[i].top - this.top) < 100 ) {
//         this.bump();
//         window.dancers[i].bump();
//       }
//     }
//   }
 };

var stepTimeout;

Dancer.prototype.setPosition = function(top, left){
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  this.styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(this.styleSettings);
};

Dancer.prototype.step = function(){
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  stepTimeout = setTimeout(this.step.bind(this), this.timeBetweenSteps);
  // setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

Dancer.prototype.lineUp = function(){
  for ( var i = 0; i<window.dancers.length; i++ ){
    var fromTop = 0;
    console.log('dancer', window.dancers[i]);
    // clearTimeout(stepTimeout);
    if (i % 2 === 0) {
      console.log('even: ', i);
      window.dancers[i].setPosition(fromTop, '20%');
      fromTop += 50;
    } else {
      window.dancers[i].setPosition(fromTop, '80%');
      fromTop += 50;
    }
  }

};

// Dancer.prototype.bump = function(){
//   this.$node.animate({'transform': 'rotateY(360deg)', 2000});
// };
