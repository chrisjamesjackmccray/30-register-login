// let map:
//
// function initMap() {
//   map = new google.maps.Map(document.querySelector('#map'). {
//     center: {lat: -34.397, lng: 150.644},
//
//     zoom: 8,
//
//     mapTypeId: google.maps.MapTypeId.SATELLITE,
//     disableDefaultUI: true,
//     streetViewControl: true;
//     streetViewControlOptions: true,
//     scaleControl: true,
//     fullscreenControl: true,
//     mapTypeControl: true,
//     rotateControl: true
//   }
//   });
//
//   var trafficLayer = new google.maps.TrafficLayer();
//   trafficLayer.setMap(map //null: to take off );
//
//   var marker - new google.maps.Marker({
//     position: { lat: -34.397, lng: 150.644 },
//     map: map,
//     title: "Hello World!",
//     animation: google.maps.Animation.DROP,
//     traggable: true,
//   });
//
//   marker.addListener('click', toggleBounce);
//
//   function toggleBounce() {
//     if (marker.getAnimation() !== null) {
//       marker.setAnimation(null);
//     } else  {
//       marker.setAnimation(google.maps.Animation.BUONCE);
//     }
//   }
//
//   var infoWindow = new google.maps.infoWindow({
//     content: '<h1> I am a fruit </h1>'
//   })
//
//   // marker.addListener('click', function(){
//   //   if (infoWindow.getMap()) {
//   //     infoWindow.close();
//   //   } else {
//   //
//   //   }
//   // })
//
//   infoWindow.open(map, marker);
// }




import angular from 'angular';
import uiRouter from 'angular-ui-router';

import firebase from 'firebase';
import angularFire from 'angularfire';
// import ngMap from 'ngmap';

import user from './modules/user';
// import map from './modules/map';

let App = angular.module('app', [
  'ui.router',
  'firebase',
  'ngMap',
  'tiy.map',
  'tiy.user'
]);

function config($urlRouterProvider) {
  $urlRouterProvider.otherwise("/");
}

App.config(config);
