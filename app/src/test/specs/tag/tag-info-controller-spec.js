"use strict";
	
describe("TagInfoController", function() {

    beforeEach(angular.mock.module("remember.tag"));
    
    var $controller;
    
    beforeEach(angular.mock.inject(function(_$controller_){
    	// The injector unwraps the underscores (_) from around the parameter names when matching
    	$controller = _$controller_;
    }));
    
    describe("$scope.tags", function() {
	    var $scope, controller;
	    
	    beforeEach(function() {
	        $scope = {};
	        
	        controller = $controller("TagInfoController", { 
	        	$scope: $scope, 
	        	confirmModalService: null,
	        	tagDataService: null, 
	        	alertService: null, 
	        	tags: {
	        		tags: [
	        		    {id: 1, name: "JavaScript"},
	        	        {id: 2, name: "Python"},
	        	        {id: 3, name: "CSS"}
	        	    ]
	        	}
	        });
	    });
	    
	    it("should have defination of TagInfoController", function() {
	        expect(controller).toBeDefined();
	    });
	    
	    it("should have three tag items", function() {
	        expect($scope.tags.length).toEqual(3);
	    });
	    
	    
    });
}); 