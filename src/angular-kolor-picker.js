/**
 * [angular-kolor-picker]{@link https://github.com/emn178/angular-kolor-picker}
 *
 * @version 0.1.0
 * @author Yi-Cyuan Chen [emn178@gmail.com]
 * @copyright Yi-Cyuan Chen 2016
 * @license MIT
 */
(function (angular) {
  'use strict';

  var KEY = 'angular-kolor-picker';

  function wrapCallback(scope, callback) {
    if (angular.isFunction(callback)) {
      return function () {
        var self = this;
        var args = Array.prototype.slice.call(arguments, 0);
        scope.$apply(function () {
          callback.apply(self, args);
        });
      };
    } else {
      return callback;
    }
  }

  function generateId() {
    var timestamp = new Date().getTime()
    var id = KEY + '_' + timestamp
    while (angular.element('#' + id).length) {
      ++timestamp;
      id = KEY + '_' + timestamp;
    }
    return id;
  }

  angular.module('ngKolorPicker', [])
  .directive('ngKolorPicker', function () {
    return {
      restrict: "A",
      scope: {
        ngModel: '=',
        options: '=ngKolorPicker'
      },
      link: function (scope, element) {
        var options = scope.options || {};
        options.onSelect = wrapCallback(scope, options.onSelect);
        options.onChange = wrapCallback(scope, options.onChange);
        var id = element.attr('id');
        if (!id) {
          id = generateId();
          element.attr('id', id);
        }
        angular.element('#' + id).kolorPicker(options);
      }
    };
  });
})(angular);
