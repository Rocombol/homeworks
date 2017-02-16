'use strict';

var studentsList= new StudentsList();
document.addEventListener('DOMContentLoaded', function () {
    var listView = new ListView(studentsList);
	
    listView.renderList();
}, false);