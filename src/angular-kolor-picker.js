/**
 * [angular-kolor-picker]{@link https://github.com/emn178/angular-kolor-picker}
 *
 * @version 0.1.4
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2016
 * @license MIT
 */
(function (angular) {
  'use strict';

  var KEY = 'angular-kolor-picker';

  function wrapCallback(scope, callback, doRender) {
    if (doRender || angular.isFunction(callback)) {
      return function (color) {
        var self = this;
        var args = Array.prototype.slice.call(arguments, 0);
        scope.$apply(function () {
          if (doRender) {
            scope.ngModel = color;
          }
          if (angular.isFunction(callback)) {
            callback.call(self, args);
          }
        });
      }
    } else {
      return callback;
    }
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
        var callback = options.onSelect;
        options.onSelect = wrapCallback(scope, options.onSelect, true);
        options.onChange = wrapCallback(scope, options.onChange, options.doRender != false);
        element.kolorPicker(options);
      }
    };
  });
})(angular);
