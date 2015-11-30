angular.module('project', ['voteService']).
config(function($routeProvider, $locationProvider) {
    $routeProvider.
    when('/admin', {controller:voteCtrl, templateUrl:'/html/detail.html'});
    $locationProvider.html5Mode(true);
});

function voteCtrl($scope, VoteDI){
    $scope.candidates = VoteDI.query();

    $scope.publish = function(){
        console.log('Did you call me?');
        VoteDI.sendVote();
    };
    $scope.position = {
        title: '',
        description: ''
    };

    $scope.init = function(){
        $scope.position = {
            title: ''
        };
        $scope.candidates = [{'candidate':""}];
    };

    $scope.add = function () {
        $scope.candidates.push ({
            'candidate': ""
        });
    };

    $scope.remove = function (index) {
        $scope.candidates.splice(index, 1);
    };

    $scope.savePoll = function(){
        VoteDI.publish($scope.position.title, $scope.candidates);
        $location.path('/');
        $scope.init();
    };

}