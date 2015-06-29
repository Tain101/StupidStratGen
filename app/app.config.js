 stupidStratGenApp.config(function($stateProvider, $urlRouterProvider) {
     $urlRouterProvider
         .otherwise('/404');

     $stateProvider
         .state('root', {
             url: '',

             views: {
                 "headerView": {
                     templateUrl: 'app/shared/header/header.html'
                 },
                 "navView": {
                     templateUrl: 'app/shared/nav/nav.html'
                 },
                 "mainView": {
                     templateUrl: 'app/components/home/home.html'
                 },
                 "footerView": {
                     templateUrl: 'app/shared/footer/footer.html'
                 }
             }
         })
         .state('root.home', {
             url: '/',

             views: {
                 "headerView@": {
                     controller: 'homeController',
                     templateUrl: 'app/shared/header/header.html'
                 },
                 "mainView@": {
                     controller: 'homeController',
                     templateUrl: 'app/components/home/home.html'
                 }
             }
         })
         .state('root.game', {
             //this may need to be for each game.
             //or maybe post or something can handle it
             url: '/game',

             views: {
                 "headerView@": {
                     controller: 'gameController',
                     templateUrl: 'app/shared/header/header.html'
                 },
                 "mainView@": {
                     controller: 'gameController',
                     templateUrl: 'app/components/game/game.html'
                 }
             }
         });
 });