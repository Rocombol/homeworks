'use strict';

var studentsList= new StudentsList();
document.addEventListener('DOMContentLoaded', function () {
//    var studentsList,
      var  listView;
	
   // studentsList = new StudentsList();

    listView = new ListView(studentsList);

    listView.renderList();
}, false);