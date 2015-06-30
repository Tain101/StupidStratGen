stupidStratGenApp.controller('gameChoiceController', function($scope) {
    $scope.games = [{
        'title': 'Team Fortress 2',
        'description': 'team fortress 2 is fun',
        'link': '#/TF2',
        'categories': [{
            'title': 'Full Team',
            'link': '#/TF2/fullTeam',
            'image': './assets/img/tf2FullTeam.jpg'
        }, {
            'title': 'Party',
            'link': '#/TF2/party',
            'image': './assets/img/tf2Party.jpg'
        }, {
            'title': 'Two Players',
            'link': '#/TF2/two',
            'image': './assets/img/tf2TwoPlayers.jpg'
        }]
    }, {
        'title': 'Dota2',
        'description': 'Dota2 fortress 2 is fun',
        'link': '#/DOTA2',
        'categories': [{
            'title': 'Full Team',
            'link': '#/TF2/fullTeam',
            'image': './assets/img/tf2FullTeam.jpg'
        }, {
            'title': 'Party',
            'link': '#/TF2/party',
            'image': './assets/img/tf2Party.jpg'
        }, {
            'title': 'Two Players',
            'link': '#/TF2/two',
            'image': './assets/img/tf2TwoPlayers.jpg'
        }]
    }, {
        'title': 'CSGO',
        'description': 'go here: http://www.stratroulette.com/',
        'link': 'http://www.stratroulette.com/'
    }];
});