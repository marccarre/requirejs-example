define(['task', 'exports'], function(Task, exports) {
  'use strict';

  function createTask(name) {
    return new Task(name);
  }

  exports.createTask = createTask;
  console.log('Loaded: task_manager.js');
});
