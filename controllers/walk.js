var Game = function(){
    var init = function(){
      Crafty.init(600, 300);
      Crafty.background('rgb(127,127,127)');
      var toward_array = [0, 90, 180, -90].sort(function(){ return 0.5 - Math.random() })
      var ball1 = Crafty.e('Ball1, Square, Multiway').color('rgb(0,0,255)').place(520, 40)
                        .multiway(200, { UP_ARROW: toward_array[0], DOWN_ARROW: toward_array[1], LEFT_ARROW: toward_array[2], RIGHT_ARROW: toward_array[3] })
                        .bind('EnterFrame', function(){
                          if(this.y < 0){
                            this.y =0;
                          }
                          if(this.y > 260){
                            this.y = 260;
                          }
                          if(this.x < 0){
                            this.x = 0;
                          }
                          if(this.x > 560){
                            this.x = 560;
                          }
                        })

      var ball2 = Crafty.e('2D, DOM, Color, Fourway, Multiway, Collision').color('rgb(0,255,255)')
                        .attr({ x: 40, y: 220, w: 40, h: 40 })
                        .multiway(200, { UP_ARROW: -90, DOWN_ARROW: 90, LEFT_ARROW: 180, RIGHT_ARROW: 0 })
                        .bind('EnterFrame', function(){
                          if(this.y < 0){
                            this.y =0;
                          }
                          if(this.y > 260){
                            this.y = 260;
                          }
                          if(this.x < 0){
                            this.x = 0;
                          }
                          if(this.x > 560){
                            this.x = 560;
                          }
                        }).onHit('Ball1', function(){
                          alert('finish')
                        })
    }


    return {
      init: init
    }

}();
