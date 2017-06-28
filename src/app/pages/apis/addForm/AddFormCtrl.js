/**
 * @author truong.hv
 * created on 28.06.2017
 * @deprecated
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.apis')
      .controller('AddFormCtrl', AddFormCtrl);

  /** @ngInject */
  function AddFormCtrl() {
    var vm = this;

    vm.form = {
      title: '',
      url: '',
      method: '',
      body: '',
      response: ''
    };

    vm.apis = [];

    vm.selectMethods = [
      { label: 'Post', value: 'POST' },
      { label: 'Get', value: 'GET' },
      { label: 'Put', value: 'PUT' },
      { label: 'Delete', value: 'DELETE' },
    ];

    function add() {
      vm.apis.push(vm.form);
      clearForm();
    }

    function clearForm() {
      vm.form = {
        title: '',
        url: '',
        method: '',
        body: '',
        response: ''
      };
    }

  }

})();
