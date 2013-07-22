/*global couchapi:false angular:false $:false jQuery:false*/
/*jshint strict:false unused:true smarttabs:true eqeqeq:true immed: true undef:true*/
/*jshint maxparams:7 maxcomplexity:7 maxlen:150 devel:true newcap:false*/ 

var myAppModule = angular.module('myApp', [
                                          ]);

function mainCntl($scope) {
    $scope.objectA =  [{ one:1, b:[1,2,['a', 'b']], c:"a string"  ,d: { a:1 } }];
    $scope.objectB =  [{ two:1, b:[1,2,['a', 'b']], c:"a string"  ,d: { a:1 } }];
    
    $scope.reset = function() {
        $scope.objectA =  [{ one:1, b:[1,2,['a', 'b']], c:"a string"  ,d: { a:1 } }];
        $scope.objectB =  [{ two:1, b:[1,2,['a', 'b']], c:"a string"  ,d: { a:1 } }];
    };

} 


