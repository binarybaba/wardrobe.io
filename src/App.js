import angular from "angular";
import uiRouter from '@uirouter/angularjs';
import ngStorage from "ngstorage";
import config from './App.config';
import uploadController from './state/upload/controller';
import clothFactory from './factory/clothFactory';
import to64 from './directive/to64';

angular.module("app", [uiRouter, ngStorage.name])
    .config(config)
    .factory("clothFactory", clothFactory)
    .directive("to64", to64)
.controller("uploadController", uploadController);