var Game = function(){
    var init = function(){
      Crafty.init(600, 300);
      Crafty.background('rgb(127,127,127)');
      var ball1 = Crafty.e('Square').color('rgb(0,0,255)').place(520, 40)

      var ball2 = Crafty.e('2D, DOM, Color, Fourway').color('rgb(0,255,255)')
            .attr({ x: 40, y: 220, w: 40, h: 40 }).fourway(150).bind('Move', function(oldPosition){
              ball1.x += oldPosition._y - this.y
              ball1.y += oldPosition._x - this.x
            })
    }


    return {
      init: init
    }

}();
