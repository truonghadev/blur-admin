/**
 * @author truong.hv
 * created on 28.06.2017
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.apis', [])
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('apis', {
          url: '/apis',
          templateUrl: 'app/pages/apis/apis.html',
          title: 'Api',
          sidebarMeta: {
            icon: 'ion-stats-bars',
            order: 0,
          },
        });
  }

})();
