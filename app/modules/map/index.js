import angular from 'angular';

import config from './config';
import controller fomr './controller';

let map = angular.module(tiy.map, []);

map.config(config);

map.controller('MapController', controller);

export default map;
