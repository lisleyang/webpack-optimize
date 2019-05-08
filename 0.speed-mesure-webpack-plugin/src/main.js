import _ from 'lodash';
import $ from 'jquery';

import './less/main.less'
import './page/app.vue'

_.partition([1, 2, 3, 4], n => n % 2);
$.ajax({
  url :'https://www.baidu.com/'
})
