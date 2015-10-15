(function(angular){
    angular.module('document')
    .directive("dateField", function(){
        return {
            // replace: true,
            restrict: 'E',
            templateUrl: "static/js/partials/date-picker.html",
            controller: 'DatePickerController',
            scope: {
                value: '=',
            }

        };
    });
})(angular)