angular.module("umbraco")
    .controller("BingMapLocationPickerController",
    function ($scope, assetsService, BingMapLocationPickerService) {

        $scope.hasError = true;

        $scope.locate = function () {
            BingMapLocationPickerService.getLocation($scope.model.value.address)
                .success(function (data) {
                    var coordinates = data.resourceSets[0].resources[0].point.coordinates;
                    $scope.model.value.latitude = coordinates[0];
                    $scope.model.value.longitude = coordinates[1];
                    $scope.updated = true;

                }); ;


        };

    });