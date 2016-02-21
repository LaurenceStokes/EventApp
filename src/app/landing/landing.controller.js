(function() {
  'use strict';

  angular
    .module('app.landing')
    .controller('LandingController', LandingController);

  LandingController.$inject = ['$scope', '$http', '$location'];

  function LandingController($scope, $http, $location){
      
    var vm = this;
                   
    vm.search = function(){
        console.log(vm.searchTerms);
        
        // Check we actually have a searchTerm
        // i.e it's not undefined or whitespace
        if(vm.searchTerms !== '' && vm.searchTerms !== undefined)
        {
            // Make a GET request our URL that will 
            // return data for us to populate page with
            $http.get('http://ec2-54-229-69-230.eu-west-1.compute.amazonaws.com/search/?lat='+vm.searchTerms).
                success(function(data, status, headers, config) {

                    // This callback will be called asynchronously
                    // when the response is available
                    alert("Search results found!");
                    // Assuming the data returned is a list of items
                    // or object items
                    // (i.e. [ "Search Result1", "Search Result2", ... ]
                    
                    // This will eventually be a factory that gives an array we populate with our search 
                    // results from backend....
                    //SearchService.arrSearchResults = data;

                }).               
                error(function(data, status, headers, config) {

                    // Called asynchronously if an error occurs
                    // or server returns response with an error status.

                    alert("Something went wrong");

                    //SearchService.arrSearchResults = [];
                });
        }
    }
    
};
  
})();