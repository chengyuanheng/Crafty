Crafty.c('Square', {
  init: function(){
    this.addComponent("2D, Canvas, Color")
    this.w = 40;
    this.h = 40;
  },

  remove: function(){
    Crafty.log('Square was removed!');
  },

  place: function(x, y){
    this.x = x;
    this.y = y;
    return this;
  }

})
