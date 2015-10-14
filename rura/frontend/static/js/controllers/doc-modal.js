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
        $scope.newDoc.tax = setDefaultTax();

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
            if (hasKey('tax', documentObject)){
                taxId = documentObject.tax;
            } else {
                $log.log("dupa");
                taxId = taxes[0].id.toString();
            }
            return taxId;
        };

        function getSelectedTax() {
            var result = $filter('filter')(taxes, function(e){
                return e.id === +$scope.newDoc.tax; // '+'' for string to int conversion
            });
            if (result.length === 1){
                return result[0];
            };
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
            return $scope.newDoc.tax === value;
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

        $scope.submitForm = function () {
            var doc = {};

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
                if ($scope.newDoc.agr_date === null) {
                    delete $scope.newDoc.agr_date;
                }
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
            doc.$save().then(function(){
                $modalInstance.close($scope.newDoc);
                docs.push(doc); // or query for new list of docs Invoice.query({'id': $scope.newDoc.firm.id});
            }, function(){
                $log.log("i sie posrało");
            });

        };

        $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
        };
    })
})(angular)