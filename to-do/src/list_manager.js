define(['list', 'exports'], function(List, exports) {
  'use strict';

  function createList(listId) {
    return new List(listId);
  }

  exports.createList = createList;
  console.log('Loaded: list_manager.js');
});
