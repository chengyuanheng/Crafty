var Game = function(){
    var init = function(){
      Crafty.init(600, 300);
      Crafty.background('rgb(127,127,127)');
      Crafty.e('floor, 2D, DOM, Color').color('rgb(255,0,0)')
            .attr({x:10, y: 250, w: 50, h:10})
      Crafty.e('floor, 2D, DOM, Color').color('rgb(255,0,0)')
            .attr({x:130, y: 250, w: 50, h:10})
      Crafty.e('floor, 2D, DOM, Color').color('rgb(255,0,0)')
            .attr({x:250, y: 250, w: 50, h:10})
      Crafty.e('floor, 2D, DOM, Color').color('rgb(255,0,0)')
            .attr({x:370, y: 250, w: 50, h:10})
      Crafty.e('floor, 2D, DOM, Color').color('rgb(255,0,0)')
            .attr({x:490, y: 250, w: 50, h:10})
      Crafty.e('floor, 2D, DOM, Color').color('rgb(255,0,0)')
            .attr({x:590, y: 250, w: 50, h:10})

      Crafty.e('ball, 2D, DOM, Color, Gravity, Fourway').color('rgb(0,255,255)')
            .attr({x:10, y:10, w:30, h:30}).gravity('floor').fourway(150)
            .bind('EnterFrame', function(){
              if(this.y <= 0 || this.y >= 300){
                this.x =10;
                this.y =10;
              }
              if(this.x < 0){
                this.x = 600;
              }
              if(this.x > 600){
                this.x = 0;
              }
            })
    }

    return {
      init: init
    }

}();
