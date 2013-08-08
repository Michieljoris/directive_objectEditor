myAppModule.directive('uiNestedSortable', ['$parse', function ($parse) {

    'use strict';
    var myoptions = {
        listType: 'ol',
        items: 'li',
        doNotClear: true,
        placeholder: 'ui-state-highlight',
        forcePlaceholderSize: true,
        toleranceElement: '> div',
        isAllowed: function(item, parent) {
            if (!parent) return false;
            var attrs = parent.context.attributes;
            if (attrs) {
                var objtype = attrs.getNamedItem('objtype');
                if (objtype && (objtype.value === 'object' || objtype.value === 'array')) return true;
            }
            return false;
        }
    };

    var eventTypes = 'Create Start Sort Change BeforeStop Stop Update Receive Remove Over Out Activate Deactivate'.split(' ');

    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            var options = attrs.uiNestedSortable ? $parse(attrs.uiNestedSortable)() : {};
            options = angular.extend(options, myoptions);

            angular.forEach(eventTypes, function (eventType) {

                var attr = attrs['uiNestedSortable' + eventType],
                callback;

                if (attr) {
                    callback = $parse(attr);
                    options[eventType.charAt(0).toLowerCase() + eventType.substr(1)] = function (event, ui) {
                        scope.$apply(function () {

                            callback(scope, {
                                $event: event,
                                $ui: ui
                            });
                        });
                    };
                }

            });
            
            element.nestedSortable(options);

        }
    };
}]);

