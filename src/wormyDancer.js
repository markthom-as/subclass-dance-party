var WormyDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  // console.log('step', Dancer.prototype.step);
  //this.oldStep = Dancer.prototype.step.bind(this);
  this.$node.addClass('wormy');
};

WormyDancer.prototype = Object.create(Dancer.prototype);
WormyDancer.prototype.constructor = WormyDancer;

WormyDancer.prototype.step = function(){
    Dancer.prototype.step.call(this);

    // make bouncer dance here
    this.$node.animate({ right: '+=250px' })
    this.$node.animate({ left: '-=250px' })
}
