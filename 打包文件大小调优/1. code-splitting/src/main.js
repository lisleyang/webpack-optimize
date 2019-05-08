import _ from 'lodash';
import {add} from './util.js'

_.defaults({ 'a': 1 }, { 'a': 3, 'b': 2 });
add(3,4)