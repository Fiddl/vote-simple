angular.module('voteService', ['ngRoute', 'ngResource']).
factory('VoteDI', function($http, $window){
    //var questions =  [];
    //    { question: 'title', candidates: [{title: '', value: ''}]}
    // ]
    var candidates = [{candidate:''},{candidate:''}];
    var position = {title:''};
    var handler = {};
    handler.query = function(){
        return candidates;
    };

    handler.publish = function(title, candidates){
        candidates.push({'title': title, 'candidates': candidates});
    };

    //handler.sendVote = function(){
    //    $http.post("/user/vote/save", candidates)
    //        .success(function(){ console.log('success'); $window.location.href = '/user/vote/save'; })
    //        .error(function(){ console.log('failure'); $window.location.href = '/user/vote/save'; });
    //};

    handler.getPosition = function(){
        return position;
    };

    return handler;
})