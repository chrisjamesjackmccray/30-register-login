/* You're going to need a route for:

    1. profile which goes to /
    2. login which goes to /login
    3. register which goes to /register
*/
function config($stateProvider) {
  .$stateProvider
  .state('user', {
    url: '/',
    controller: 'profileController as profileCtrl',
    template: require('./view.html')
  })

  .state('user', {
    url: '/login',
    controller: 'loginController as loginCtrl',
    template: require('./view.html')
  })

  .state('user', {
    url: '/register',
    controller: 'registerController as registerCtrl',
    template: require('./view.html')
  });

}

export default config;
