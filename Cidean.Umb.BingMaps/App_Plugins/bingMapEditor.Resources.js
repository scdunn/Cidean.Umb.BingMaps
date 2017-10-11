
angular.module('umbraco.resources').factory('bingMapEditorService', function ($http, bingApiKey) {

    var svc = {};
    svc.getLocation = function () {

        var url = "http://dev.virtualearth.net/REST/v1/Locations/?key=" + bingApiKey + "&query=820%20S%20BRIGHTON%20CREST%20BLOOMINGTON&jsonp=JSON_CALLBACK";

        $http.jsonp(url)
        .success(function (data) {
            alert("SDFS");
            return "GOT IT";
        }).then(function(){
                    alert("SDFS3");
            return "GOT IT3";

        });

            
    };

    return svc;
});


angular.module('umbraco.resources').constant('bingApiKey', "AvhwLFkvuFZ_wlVpPYWpvWzyFqHTZw2W1FmONiZEeVoeBOX7a1sSwI0B36t5Tewk");
