"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var arr = [1, 2, 'foo', null, 2, null];
alert(arr);
var set = new Set(arr);
alert(set);
set.add(1).add(7.7).add('bar');
alert(set.size);
set.forEach(function (val) {
  return alert(val);
});
var intSet = new Set(_toConsumableArray(set).filter(Number.isInteger));
alert(intSet);