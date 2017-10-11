angular.module("umbraco")
    .controller("bingMapEditorController",
    function ($scope, assetsService, bingMapEditorService) {
        //$scope.OptionList = propFactory.getOptions();

       


        $scope.locate = function () {
            $scope.model.value.latitude = '200';
            $scope.model.value.longitude = bingMapEditorService.getLocation();
        };

        //tell the assetsService to load the markdown.editor libs from the markdown editors
        //plugin folder
        /*
        assetsService
        .load([
        "/App_Plugins/mypropertyeditor/data.js"
        ])
        .then(function () {
        //this function will execute when all dependencies have loaded
        alert("editor dependencies loaded");
        });

        //load the seperat css for the editor to avoid it blocking our js loading
        //assetsService.loadCss("/App_Plugins/MarkDownEditor/lib/markdown.css");
        */
    });