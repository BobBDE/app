// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
var app = angular.module('starter', ['backand','starter.controllers', 'ui.router'])


// .run(function($ionicPlatform) {
//   $ionicPlatform.ready(function() {
//     // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
//     // for form inputs)
//     if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
//       cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
//       cordova.plugins.Keyboard.disableScroll(true);

//     }
//     if (window.StatusBar) {
//       // org.apache.cordova.statusbar required
//       StatusBar.styleDefault();
//     }
//   });
// })



.config(function(BackandProvider, $stateProvider, $urlRouterProvider) {


 BackandProvider.setAppName('mabase');
      BackandProvider.setSignUpToken('f1c7c793-2d52-4312-b99b-e0e5b7d83c8c');
      BackandProvider.setAnonymousToken('94414917-aa8f-4c45-937b-ac80a010a7ab');
  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
  
    .state('signin', {
          url: '/sign-in',
          templateUrl: 'pagesWeb/login.html',
          controller: 'LoginCtrl'
   })

    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'pagesWeb/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.dash', {  
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'pagesWeb/main.html',
        controller: 'MainCtrl'
      }
    }
  })


//  .state('tab.menu', {
//      url: '/menu',
//      views: {
//        'tab-menu': {
//          templateUrl: 'pages/menu/menu.html',
//          controller: 'MenuCtrl'
//        }
//      }
//    })

    .state('tab.commande', {
      url: '/commande',
      views: {
        'tab-menu': {
          templateUrl: 'pagesWeb/commande.html',
          controller: 'CommandeCtrl'
        }
      }
    })

//    .state('tab.boissons', {
//      url: '/boissons',
//      views: {
//        'tab-menu': {
//          templateUrl: 'pages/boissons/boissons.html',
//          controller: 'BoissonCtrl'
//        }
//      }
//    })
    
    .state('boissons', {
          url: '/boissons',
          templateUrl: 'pagesWeb/boissons.html',
          controller: 'BoissonCtrl'
   })

    .state('tab.favoris', {
      url: '/favoris',
      views: {
        'tab-friends': {
          templateUrl: 'pagesWeb/favoris.html',
          controller: 'MenuCtrl'
        }
      }
    })

//    .state('tab.friend-detail', {
//      url: '/friends/:friendId',
//      views: {
//        'tab-friends': {
//          templateUrl: 'templates/friend-detail.html',
//          controller: 'FriendDetailCtrl'
//        }
//      }
//    })

//  .state('tab.account', {
//    url: '/account',
//    views: {
//      'tab-account': {
//        templateUrl: 'templates/tab-account.html',
//        controller: 'AccountCtrl'
//      }
//    }
//  })
  
   .state('accueil', {
          url: '/accueil',
          templateUrl: 'pagesWeb/accueil.html',
          controller: 'AccueilCtrl'
   })
   
   .state('verifEmail', {
          url: '/verifEmail',
          templateUrl: 'pagesWeb/verifEmail.html'
   })
   
   .state('resetPassword', {
          url: '/resetPassword',
          templateUrl: 'pagesWeb/resetPassword.html',
          controller: 'resetPasswordCtrl as resetPassword'
   })
   
   .state('parametres', {
          url: '/parametres',
          templateUrl: 'pagesWeb/parametres.html',
          controller: 'parametresCtrl as parametres'
   });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/sign-in');

  //$httpProvider.interceptors.push('APIInterceptor');
});
