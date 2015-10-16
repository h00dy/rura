(function(angular){
    angular.module('document')
    .directive("fileUpload", function(){
        return {
            replace: true,
            restrict: 'E',
            templateUrl: "static/js/partials/file-upload.html",
            controller: function ($scope) {
                $scope.files = [];

                $scope.onLoaded = function () {
                    console.log('Google Picker loaded!');
                }

                $scope.onPicked = function (docs) {
                    angular.forEach(docs, function (file, index) {
                        $scope.files.push(file);
                    });
                    var scan = $scope.files[0].name + "|" + $scope.files[0].url;
                    $scope.newDoc.scan = scan;
                }

                $scope.onCancel = function () {
                    console.log('Google picker close/cancel!');
                }

                $scope.hasFile = function () {
                    return angular.isDefined($scope.newDoc.scan);
                }
            }
        };
    });
})(angular)