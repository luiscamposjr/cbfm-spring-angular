'use strict';

angular.module(GLOBAL.nameApp).directive('fwSecurityObject', function($compile, $rootScope){

	return {
		restrict: 'A',
		link: function (scope, element, attrs) {

			var elementAuthorities = attrs.fwSecurityObject.replace("{", "").replace("}", "").split(",");
			var userAuthorities = [];
			var renderElement = false;

			angular.forEach($rootScope.currentUser.authorities, function(value) {
			  this.push(value.authority);
			}, userAuthorities);

			angular.forEach(elementAuthorities, function(authElem) {
				angular.forEach(userAuthorities, function(authUser) {			  
					if(authElem === authUser) {
						renderElement = true;
					}
				});
			});

			if(!renderElement){
				element.attr('ng-if', renderElement);
	       		$compile(element)(scope);
			}
		}
		
	};

});
