app.factory("Network", ["$http",
  function($http) {
  
    var isMocked = true;

    function getActivities(callback, weekId) {
      if(isMocked === true) {
        callback([
          {"week":weekId,"day":1,"start":9,"end":12,"nom":"Planification","type":"WORK"}, 
          {"week":weekId,"day":1,"start":14,"end":18,"nom":"Planification","type":"WORK"}, 
		  {"week":weekId,"day":2,"start":14,"end":18,"nom":"","type":"HOLIDAYS"}, 
          {"week":weekId,"day":3,"start":14,"end":16,"nom":"Formation Angular","type":"WORK"}]) 
      } else {
        $http.get("/activites")
          .success(callback)
          .error(
            function(data, status, headers, config) {
              console.log(data, status, headers, config);
            }
          );
      }
    }
      
    return {
      getActivities: function(callback,weekId) {
        getActivities(callback);
      },
      
    }

}]);
