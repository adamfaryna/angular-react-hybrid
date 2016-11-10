import 'babel-polyfill';
import angular from 'angular';
import React from 'react';
import ReactDOM from 'react-dom';
import Grid from './grid.component.js';
import './index.css';

angular.module('app', [])
	.controller('MainCtrl', MainCtrl)
	.directive('myGrid', myGrid);

MainCtrl.$inject = [];

function MainCtrl() {}

function myGrid() {
	return {
		restrict: 'E',
		scope: false,
		template: `<div class="grid">
							 	<button class="action-button" ng-click="addElement()">Add Element</button>
							 	<button class="action-button" ng-click="reset()">Reset</button>
							 	<div class="react-root"></div></div>`,
		link: (scope, element) => {
			const reactRoot = element[0].querySelector('.react-root');

			scope.data = {
				elements: []
			};

			scope.addElement = () => {
				scope.data.elements.push(Math.random().toString());
			};

			scope.reset = () => {
				scope.data.elements = [];
			};

			scope.$watchCollection('data.elements', elements => {
			  ReactDOM.render(<Grid elements={elements}/>, reactRoot);
			});

			scope.$on('destroy', () => {
				ReactDOM.unmountComponentAtNode(reactRoot);
			});
		}
	};
}
