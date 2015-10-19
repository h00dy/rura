(function(angular){
    angular.module('document')
    .controller('ExcelCtrl',function(Excel,$timeout, $scope){
        $scope.exportToExcel=function(tableId){ // ex: '#my-table'
            $scope.exportHref=Excel.tableToExcel(tableId,'sheet name');

            $timeout(function() {
                var link = document.createElement('a');
                link.download = "export.xlsx";
                link.href = $scope.exportHref;
                link.click();
            }, 100);
        }

    })
})(angular)