(function(angular){
    angular.module('document')
    .directive("firmSelectNav", function(Firm, Invoice, Agreement, Other){
        return {
            replace: true,
            restrict: 'E',
            templateUrl: "static/js/partials/firm-select-nav.html",
            controller: function($scope){
                this.setActiveFirm = function(firm){
                    $scope.activeFirm = firm;
                    $scope.invoices = Invoice.query({'firm': firm.id});
                    $scope.agreements = Agreement.query({'firm`': firm.id});
                    $scope.others = Other.query({'firm': firm.id});
                };
                this.getActiveFirm = function(){
                    return $scope.activeFirm;
                };
            },
            link: function(scope, element, attrs){
                scope.firms = Firm.query();
            }
        };
    })
    .directive("firmNavItem", function(){
        return {
            replace: true,
            restrict: 'E',
            require: "^firmSelectNav",
            link: function(scope, element, attrs, firmSelectNav){
                scope.makeActive = function(){
                    firmSelectNav.setActiveFirm(scope.firm);
                };
                scope.activeFirm = function(){
                    return firmSelectNav.getActiveFirm() === scope.firm;
                };
            },
            templateUrl: "static/js/partials/firm-nav-item.html",
            scope: {
                firm: '='
            }
        }
    });
})(angular)