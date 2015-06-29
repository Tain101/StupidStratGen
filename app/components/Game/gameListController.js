stupidStratGenApp.controller('gameListController', function($scope) {
    $scope.games = [{
        'name': 'Team Fortress 2',
        'description': 'team fortress 2 is fun',
        'link': '#TF2'
    }, {
        'name': 'Dota2',
        'description': 'Dota2 fortress 2 is fun',
        'link': '#DOTA2'
    }, {
        'name': 'CSGO',
        'description': 'go here: http://www.stratroulette.com/',
        'link': 'http://www.stratroulette.com/'
    }];
});