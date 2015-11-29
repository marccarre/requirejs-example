define(function() {
  'use strict';

  function List(listId) {
    this.tasks = [];
    this.id = listId;
  }
  List.prototype = {};
  List.prototype.constructor = List;

  console.log('Loaded: list.js');
  return List;
});
