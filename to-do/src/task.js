define(function() {
  'use strict';

  function Task(name) {
    this.completed = false;
    this.name = name;
  }
  Task.prototype = {};
  Task.prototype.constructor = Task;

  console.log('Loaded: task.js');
  return Task;
});
