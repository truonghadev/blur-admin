/**
 * @author truong.hv
 * created on 28.06.2017
 * @deprecated
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.apis')
      .controller('ApiListCtrl', ApiListCtrl);

  /** @ngInject */
  function ApiListCtrl() {
    var vm = this;

    vm.apis = [{
      title: 'Add API',
      method: 'POST',
      url: '/api',
      body: {
        title: 'Add API',
        method: 'POST',
        url: '/api',
        body: {
          title: 'Add API',
          method: 'POST',
          url: '/api',
          body: {
            title: 'Add API',
            method: 'POST',
            url: '/api'
          },
          response: {
            id: 1,
            title: 'Add API',
            method: 'POST',
            url: '/api',
            body: {
              title: 'Add API',
              method: 'POST',
              url: '/api'
            }
          }
        }
      },
      response: {
        id: 1,
        title: 'Add API',
        method: 'POST',
        url: '/api',
        body: {
          title: 'Add API',
          method: 'POST',
          url: '/api' 
        }
      }
    },
    {
      title: 'Get APIs',
      method: 'GET',
      url: '/apis/:apiId',
      body: null
    },
    {
      title: 'Update an API',
      method: 'PUT',
      url: '/api',
      body: {
        id: 1,
        title: 'Add API',
        method: 'POST',
        url: '/api'
      }
    },
    {
      title: 'Delete an API',
      method: 'DELETE',
      url: '/api/:apiId',
      body: null
    }];

  }

})();
