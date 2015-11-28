define(['task', 'exports'], function(task, exports) {
  'use strict';

  function createTask(name) {
    return new Task(name);
  }

  exports.createTask = createTask;
});
