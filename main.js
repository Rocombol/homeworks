'use strict';

var studentsList = new StudentsList(),
    listView = new ListView(studentsList);

document.addEventListener('DOMContentLoaded', function () {
	
    listView.renderList();
}, false);