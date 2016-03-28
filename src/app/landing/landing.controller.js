(function() {
  'use strict';

  angular
    .module('app.landing')
    .controller('LandingController', LandingController);

  LandingController.$inject = ['$scope', '$location', 'landingService', 'NgMap'];

  function LandingController($scope, $location, landingService, NgMap){
    
    var vm = this;    
      
    vm.message = 'You can not hide. :)';
    
    NgMap.getMap().then(function(map) {
      vm.map = map;
      console.log('You are at' + vm.map.getCenter());
    });
    
    

    
    
    vm.result = "Search Result =";
                   
    vm.search = function(searchTerms){
        console.log(vm.result);
        vm.result = landingService.search(searchTerms);   
    };
  }
  
})();