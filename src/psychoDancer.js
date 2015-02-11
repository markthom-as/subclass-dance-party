var PsychoDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  // console.log('step', Dancer.prototype.step);
  //this.oldStep = Dancer.prototype.step.bind(this);
  this.$node.addClass('psycho');
};

PsychoDancer.prototype = Object.create(Dancer.prototype);
PsychoDancer.prototype.constructor = PsychoDancer;

PsychoDancer.prototype.step = function(){
    Dancer.prototype.step.call(this)
    this.$node.animate({left: '-=20px'}, 0.3);
    this.$node.animate({top: '-=40px'}, 0.3);
    this.$node.animate({top: '+=40px'}, 0.3);
    this.$node.animate({left: '+=20px'}, 0.3);
    // this.setPosition(Math.floor(Math.random() * 1000), Math.floor(Math.random() * 1000));
}

