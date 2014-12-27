'use strict';

/**
 * @ngdoc function
 * @name resolutionizerApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the resolutionizerApp
 */
angular.module('resolutionizerApp')
    .controller('MainCtrl', function ($scope) {
        $scope.features = [
            {
                feature: 'Guided goal setting',
                paragraphs: [
                    'The key to meeting goals is to clearly define what you want to accomplish, why you want to accomplish it, and how you will achieve it.',
                    'Resolutionizer provides you with simple to understand steps for defining your goals.'
                ]
            },
            {
                feature: 'Effortless tracking',
                paragraphs:[
                    'By linking your existing tracking services with your Resolutionizer, we will automatically update your progress based off of your existing habits.'
                ]
            },
            {
                feature: 'Beautiful dashboard',
                paragraphs: [
                    'As you work to achive your goals you\'ll be presented with beautifulvisualizations of your progress.'
                ]
            }
        ];
    });
