(function(angular){
    angular.module('document')
    .directive("docTabItem", function(){
        return {
            // replace: true,
            scope: {
                type: '=',
                docs: '='
            },
            restrict: 'E',
            controller: function($scope){
                $scope.selected ={ document_type: "IN"};

            },
            templateUrl: "static/js/partials/doc-tab-item.html",
        };
    });
})(angular)