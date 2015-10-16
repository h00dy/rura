(function(angular){
    angular.module('document')
    .directive("docTabItem", function(AgreementSide, Contractor, Delivered,
                                      InvoiceResp, OtherResp, Sender, Tax){
        return {
            // replace: true,
            scope: {
                type: '=',
                docs: '=',
                firm: '='
            },
            restrict: 'E',
            controller: function($scope, $modal, $log, $filter){
                $scope.taxes = Tax.query();
                $scope.agreementSides = AgreementSide.query();
                $scope.contractors = Contractor.query();
                $scope.delivereds = Delivered.query();
                $scope.invoiceRespons = InvoiceResp.query();
                $scope.otherRespons = OtherResp.query();
                $scope.senders = Sender.query();
                $scope.selected ={ document_type: "IN"};

                $scope.animationsEnabled = true;
                $scope.open = function (size, doc) {

                var modalInstance = $modal.open({
                  animation: $scope.animationsEnabled,
                  templateUrl: 'static/js/partials/doc-modal.html',
                  controller: 'DocModalInstanceCtrl',
                  size: size,
                  resolve: {
                    taxes: function () {
                      return $scope.taxes;
                    },
                    contractors: function () {
                      return $scope.contractors;
                    },
                    invoiceRespons: function () {
                      return $scope.invoiceRespons;
                    },
                    otherRespons: function () {
                      return $scope.otherRespons;
                    },
                    delivereds: function () {
                      return $scope.delivereds;
                    },
                    senders: function () {
                      return $scope.senders;
                    },
                    docs: function () {
                      return $scope.docs;
                    },
                    agrSides: function () {
                      return $scope.agreementSides;
                    },
                    documentObject: function() {
                      if (angular.isDefined(doc)){
                        doc.flavor = $scope.type;
                        return doc;
                      } else {
                        return {
                            document_type: $scope.selected.document_type,
                            flavor: $scope.type,
                            firm: $scope.firm,
                        }
                      }
                    }
                  }
                });

                modalInstance.result.then(function (selectedItem) {
                  $scope.selectedItem = selectedItem;
                }, function () {
                  $log.info('Modal dismissed at: ' + new Date());
                });
              };

              $scope.getName = function (id, objects) {
                var result = $filter('filter')(objects, function(e){
                  return e.id === id;
                });
                if (result.length === 1){
                  return result[0].name;
                }
              };
              $scope.getValue = function (id, objects) {
                var result = $filter('filter')(objects, function(e){
                  return e.id === id;
                });
                if (result.length === 1){
                  return result[0].value;
                }
              };
              $scope.getFileUrl = function (scan) {
                var fileData = scan.split('|');
                if (fileData.length > 1){
                    return fileData[1];
                } else {
                    return fileData[0];
                }
              };
              $scope.isDefined = function(obj){
                return (angular.isDefined(obj) && (obj !== ""));
              };

            },
            templateUrl: "static/js/partials/doc-tab-item.html",
        };
    });
})(angular)