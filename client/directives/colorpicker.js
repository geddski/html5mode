angular.module('app').directive('colorpicker', function($timeout){
  return {
    restrict: 'A',
    scope: { color: '='},
    link: function(scope, elem){
      var picker = ColorPicker(elem[0], function(hex, hsv, rgb) {
        //set timeout in case colorpicker's callback is sync
        $timeout(function(){
          scope.color = hex;
          scope.$apply();
        });
      });
      scope.$watch('color', function(newColor){
        if (newColor) picker.setHex(scope.color);
      });
    }
  }
});