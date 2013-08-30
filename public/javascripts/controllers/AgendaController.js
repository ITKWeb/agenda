app.controller('AgendaController', ['$scope', 'Network', function($scope, Network) {
		
	if ($scope.weekId==undefined){
		resetWeek(moment());
		$scope.newName="H-DAY!!!!";
		$scope.newStart=9;
		$scope.newEnd=17;
		$scope.newDay=5;
	}
	
	function DayContent(headerDay, idDay){
		this.header = headerDay;
		this.id = idDay;
	}
	
	function loadActivities(){
		if($scope.activities==undefined)
			$scope.activities = new Array();
		Network.getActivities(function(activities) {
			if($scope.activities[$scope.weekId]==undefined) {
				$scope.activities[$scope.weekId]=new Array;
				$scope.activities[$scope.weekId][0]=new Array;
				$scope.activities[$scope.weekId][1]=new Array;
				$scope.activities[$scope.weekId][2]=new Array;
				$scope.activities[$scope.weekId][3]=new Array;
				$scope.activities[$scope.weekId][4]=new Array;
				$scope.activities[$scope.weekId][5]=new Array;
				$scope.activities[$scope.weekId][6]=new Array;
				for (var i=0; i<activities.length; i++){
					$scope.activities[$scope.weekId][activities[i].day].push(activities[i]);
				}
			}
		}, $scope.weekId);
	}
	$scope.nextWeek=function() {
		resetWeek($scope.startOfWeek.day(8));
	};
	
	$scope.previousWeek=function() {
		resetWeek($scope.startOfWeek.day(-6));
	};
	
	function Activite(nom, start,end){
		this.nom=nom;
		this.start=start;
		this.end=end;
	}

	$scope.newActivity=function (){
		$scope.activities[$scope.weekId][$scope.newDay-1].push(new Activite($scope.newName,$scope.newStart,$scope.newEnd));
	};
	
	function resetWeek(unMomentSvp){
		currentDay = unMomentSvp;
		
		$scope.weekId = currentDay.week();
		$scope.days = new Array;
		currentDay.day(1);
		$scope.startOfWeek=moment(currentDay);
		$scope.days[0] = new DayContent('Lun. '+currentDay.format("DD, MMM"),$scope.weekId+"_"+currentDay.day());
		currentDay.day(2);
		$scope.days[1] = new DayContent('Mar. '+currentDay.format("DD, MMM") ,$scope.weekId+"_"+currentDay.day());
		currentDay.day(3);
		$scope.days[2] = new DayContent('Mer. '+currentDay.format("DD, MMM") ,$scope.weekId+"_"+currentDay.day());
		currentDay.day(4);
		$scope.days[3] = new DayContent('Jeu. '+currentDay.format("DD, MMM") ,$scope.weekId+"_"+currentDay.day());
		currentDay.day(5);
		$scope.days[4] = new DayContent('Ven. '+currentDay.format("DD, MMM") ,$scope.weekId+"_"+currentDay.day());
		currentDay.day(6);
		$scope.days[5] = new DayContent('Sam. '+currentDay.format("DD, MMM") ,$scope.weekId+"_"+currentDay.day());
		currentDay.day(7);
		$scope.days[6] = new DayContent('Dim. '+currentDay.format("DD, MMM") ,$scope.weekId+"_"+currentDay.day());
		$scope.hours = new Array("07","08","09","10","11","12","13","14","15","16","17","18","19");
		loadActivities();
	}
}]);
