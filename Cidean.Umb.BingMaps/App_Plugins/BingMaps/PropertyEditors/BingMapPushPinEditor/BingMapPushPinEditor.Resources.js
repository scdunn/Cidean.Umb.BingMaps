
angular.module('umbraco.resources').factory('BingMapLocationPickerService', function ($http) {

    var svc = {};
    svc.getLocation = function (address) {
        var url = "http://dev.virtualearth.net/REST/v1/Locations/?key=" + BingMapConfig.Credentials + "&query=" + address + "&jsonp=JSON_CALLBACK";
        return $http.jsonp(url)
    };

    return svc;
});


