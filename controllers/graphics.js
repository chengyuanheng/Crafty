var Game = function(){
    var init = function(){
      Crafty.init(600, 300);
      Crafty.background('rgb(127,127,127)');
      Crafty.e('2D, Canvas, Color').color('red')
            .attr({x:170, y:120, w:100, h:100})
            .bind('EnterFrame', function(){
              this.rotation = this.rotation+1;
            }).origin('centre')
      Crafty.e('2D, DOM, Text').attr({x:10, y:10, w:300}).text('square rotate around center')

    }

    return {
      init: init
    }

}();
