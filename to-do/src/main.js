require(['task_manager', 'smokesignals'], function(taskManager, smokesignals) {
  'use strict';

  var aTask = taskManager.createTask('My first task!');
  console.log(aTask);
  // One can see in the console that the convert method from smokesignals is correct exposed:
  console.log(smokesignals); 
});

define();
