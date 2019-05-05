// 引入的公共模块如果在vendor中有被引用过，那么编译的时候直接使用静态文件vendor.dll.js
import $ from 'jquery';
import _ from 'lodash';
import vue from 'vue';

console.log($)
console.log(_)
console.log(vue)
