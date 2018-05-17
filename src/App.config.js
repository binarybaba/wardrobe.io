config.$inject = ["$urlRouterProvider", "$stateProvider"];
// config.$inject = ["$urlRouterProvider", "$stateProvider"];
export default function config($urlRouterProvider, $stateProvider) { // eslint-disable-line
// export default function config($urlRouterProvider, $stateProvider) { // eslint-disable-line
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
                    template: require('./state/upload/tpl.html'),
                    controller: 'uploadController',
                }
            }
        })
        .state("W.wardrobe", {
            url:'/wardrobe',
            views: {
                body: {
                    template: require('./state/wardrobe/tpl.html'),
                    controller: 'wardrobeController'
                }
            }
        })
}
