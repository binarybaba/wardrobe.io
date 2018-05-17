import angular from "angular";
import uiRouter from '@uirouter/angularjs';
import config from './App.config';
import fooController from './controller/fooController';

angular.module("app", [uiRouter])
    .config(config)
.controller("fooController", fooController);