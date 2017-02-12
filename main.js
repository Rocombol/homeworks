'use strict';
document.addEventListener('DOMContentLoaded', function () {
    var studentsList,
        listView;
	
    studentsList = new StudentsList();

    listView = new ListView();

    listView.renderList(studentsList.arrayOfStudents);
}, false);