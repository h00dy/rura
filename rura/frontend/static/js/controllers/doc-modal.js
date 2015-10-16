(function(angular){
    angular.module('document')
    .controller("DocModalInstanceCtrl", function(
                $scope, $filter, $modalInstance, $log, taxes, documentObject, senders,
                docs, contractors, invoiceRespons, otherRespons, delivereds, agrSides,
                Tax, Invoice, Agreement, Other){
        $scope.taxes = taxes;
        $scope.senders = senders;
        $scope.contractors = contractors;
        $scope.invoiceRespons = invoiceRespons;
        $scope.otherRespons = otherRespons;
        $scope.delivereds = delivereds;
        $scope.agrSides = agrSides;
        $scope.newDoc = angular.copy(documentObject);


        var initialize = function(){
            angular.forEach($scope.newDoc, function(value, key){
                if (value === null){
                    delete $scope.newDoc[key];
                } else {
                    if (key === 'received_date') {
                        $scope.newDoc.received_date = new Date($scope.newDoc.received_date);
                    };
                    if (key === 'payment_date') {
                        $scope.newDoc.payment_date = new Date($scope.newDoc.payment_date);
                    };
                    if (key === 'agr_date') {
                        $scope.newDoc.agr_date = new Date($scope.newDoc.agr_date);
                    };
                    if (!angular.isString(value) && key !=='paid' && key !== 'id'){
                        $scope.newDoc[key] = value.toString();
                    }
                }
            });
            $scope.newDoc.tax = setDefaultTax();
        };
        initialize();


        $scope.getTitle = function () {
            if (angular.isDefined($scope.newDoc.id)) {
                return "Edytuj Dokument";
            } else {
                return "Nowy Dokument";
            }
        };

        $scope.clearData = function() {
            var flavor = $scope.newDoc.flavor;
            $scope.newDoc = angular.copy(documentObject);
            $scope.newDoc.flavor = flavor;
        };

        $scope.isValidForm = function (form){
            return form.$valid && hasKey('scan', $scope.newDoc)
        };

        function hasKey(key, object){
            return (key in object);
        };

        function setDefaultTax(){
            var taxId = 1;
            if (angular.isObject(documentObject.tax) && documentObject.tax.length > 0){
                taxId = documentObject.tax;
            } else {
                $log.log("dupa");
                taxId = taxes[0].id;
            }
            return taxId.toString();
        };

        function getSelectedTax() {
            var result = $filter('filter')(taxes, function(e){
                return e.id === +$scope.newDoc.tax; // '+'' for string to int conversion
            });
            if (result.length === 1){
                return result[0];
            };
        };

        $scope.hasValue = function (obj) {
            return angular.isDefined(obj);
        };

        $scope.getFileUrl = function () {
            var fileData = $scope.newDoc.scan.split('|');
            if (fileData.length > 1){
                return fileData[1];
            } else {
                return fileData[0];
            }
        };

        $scope.calculateBrutto = function () {
            var tax = getSelectedTax();
            var netto = parseFloat($scope.newDoc.netto);
            var brutto = netto + tax.value*0.01*netto;
            $scope.newDoc.brutto = parseFloat(brutto).toFixed(2);
            if ($scope.newDoc.brutto === 'NaN') $scope.newDoc.brutto = "";
        };

        $scope.calculateNetto = function () {
            var tax = getSelectedTax();
            var brutto = parseFloat($scope.newDoc.brutto);
            var netto = brutto / ((100+tax.value) / 100);
            $scope.newDoc.netto = parseFloat(netto).toFixed(2);
            if ($scope.newDoc.netto === 'NaN') $scope.newDoc.netto = "";
        };

        $scope.calculatePrice = function(){
            var tax = getSelectedTax();
            $log.log(tax.value);
            if (hasKey('netto', $scope.newDoc) && $scope.newDoc.netto !== "") {
                var netto = parseFloat($scope.newDoc.netto);
                var brutto = netto + tax.value*0.01*netto;
                $scope.newDoc.brutto = parseFloat(brutto).toFixed(2);
            }
        };
        $scope.hasTaxValue = function (value){
            return $scope.newDoc.tax === value.toString();
        };
        $scope.hasContractorValue = function (value){
            return $scope.newDoc.contractor === value;
        };
        $scope.hasResponsibleValue = function (value){
            return $scope.newDoc.responsible === value;
        };
        $scope.hasSenderValue = function (value){
            return $scope.newDoc.sender === value;
        };
        $scope.hasDeliveredValue = function (value){
            return $scope.newDoc.delivered === value;
        };
        $scope.hasAgrSideValue = function (value){
            return $scope.newDoc.agr_side === value;
        };
        $scope.isType = function (type) {
            return $scope.newDoc.document_type === type;
        };
        $scope.isFlavor = function (flavor) {
            return $scope.newDoc.flavor === flavor;
        };
        function updateValue(objects, new_obj, method) {
            for (var i = objects.length - 1; i >= 0; i--) {
                if (objects[i].id === new_obj.id){
                    if (method === 'update'){
                        objects[i] = new_obj;
                    } else if (method === 'delete') {
                        objects.splice(i,1);
                    }

                    break;
                }
            };
        };
        function updateDocument(docs, newDoc) {
            switch (newDoc.flavor){
                case 'invoice':
                    $log.log("updating Invoice");
                    Invoice.update(newDoc).$promise.then(function(){
                            updateValue(docs, newDoc, 'update');
                            $modalInstance.close();
                        }, function(){
                            $log.log("update failed");
                        }
                    );
                    break;
                case 'agreement':
                    $log.log("updating Agreement");
                    Agreement.update(newDoc).$promise.then(function(){
                            updateValue(docs, newDoc, 'update');
                            $modalInstance.close();
                        }, function(){
                            $log.log("update failed");
                        }
                    );
                    break;
                case 'other':
                    $log.log("updating Other");
                    Other.update(newDoc).$promise.then(function(){
                            updateValue(docs, newDoc, 'update');
                            $modalInstance.close();
                        }, function(){
                            $log.log("update failed");
                        }
                    );
                    break;
            }
        };
        $scope.submitForm = function () {
            var doc = {};
            angular.forEach($scope.newDoc, function(value, key){
                if (value === null){
                    delete $scope.newDoc[key];
                }
                if (key === 'received_date' || key === 'payment_date' || key === 'agr_date'){
                    $scope.newDoc[key] = $filter('date')(value, 'yyyy-MM-ddT12:00:00');
                }
            });
            if ($scope.newDoc.flavor === 'invoice'){
                $scope.newDoc.tax = +$scope.newDoc.tax;
                $scope.newDoc.delivered = +$scope.newDoc.delivered;
                $scope.newDoc.responsible = +$scope.newDoc.responsible;
                $scope.newDoc.contractor = +$scope.newDoc.contractor;
                $scope.newDoc.netto = +$scope.newDoc.netto;
                $scope.newDoc.brutto = +$scope.newDoc.brutto;
                doc = new Invoice($scope.newDoc);
            }
            else if ($scope.newDoc.flavor === 'agreement'){
                if (hasKey('agr_side', $scope.newDoc)){
                    $scope.newDoc.agr_side = +$scope.newDoc.agr_side;
                }
                doc = new Agreement($scope.newDoc);
            } else {
                if (hasKey('sender', $scope.newDoc)){
                    $scope.newDoc.sender = +$scope.newDoc.sender;
                }
                doc = new Other($scope.newDoc);
            };
            if (hasKey('id', $scope.newDoc)){
                updateDocument(docs, $scope.newDoc);
            } else {
                doc.$save().then(function(){
                    $modalInstance.close($scope.newDoc);
                    docs.push(doc); // or query for new list of docs Invoice.query({'id': $scope.newDoc.firm.id});
                }, function(){
                    $log.log("i sie posrało");
                });
            }
        };

        $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
        };

        $scope.deleteDoc = function() {
            switch ($scope.newDoc.flavor){
                case 'invoice':
                    $log.log("Deleting Invoice");
                    Invoice.delete($scope.newDoc).$promise.then(function(){
                            updateValue(docs, $scope.newDoc, 'delete');
                            $modalInstance.close();
                        }, function(){
                            $log.log("delete failed");
                        }
                    );
                    break;
                case 'agreement':
                    $log.log("Deleting Agreement");
                    Agreement.delete($scope.newDoc).$promise.then(function(){
                            updateValue(docs, $scope.newDoc, 'delete');
                            $modalInstance.close();
                        }, function(){
                            $log.log("delete failed");
                        }
                    );
                    break;
                case 'other':
                    $log.log("Deleting Other");
                    Other.delete($scope.newDoc).$promise.then(function(){
                            updateValue(docs, $scope.newDoc, 'delete');
                            $modalInstance.close();
                        }, function(){
                            $log.log("delete failed");
                        }
                    );
                    break;
            }
        };
    })
})(angular)