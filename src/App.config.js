// config.$inject = ["$urlRouterProvider", "$stateProvider", "$localStorageProvider"];
config.$inject = ["$urlRouterProvider", "$stateProvider"];
// export default function config($urlRouterProvider, $stateProvider, $localStorageProvider) { // eslint-disable-line
export default function config($urlRouterProvider, $stateProvider) { // eslint-disable-line
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state("W", {
            url:"",
            abstract:true,
            views: {
                "": {
                    template: require('./layout.html')
                },
                "body@W": {
                    template: ''
                }
            }
        })
        .state("W.upload", {
            url:'/',
            views: {
                body: {
                    template: require('./state/foo.html'),
                    controller: 'fooController',
                }
            }
        })
}
