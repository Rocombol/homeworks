'use strict';

function ListView () {
    this.renderList = function(studentList) {		
		var contentElement = document.getElementById('content'),
			itemTable = document.createElement('table');
		
		contentElement.innerHTML=listTpl;
		
		studentsList.forEach(function(itemStudent){
		    var listItemView=new ListItemView(itemStudent),
				tr=listItemView.renderItem(itemStudent);
			
			itemTable.appendChild(tr);
		});
		
		contentElement.appendChild(itemTable);						
    };	
	return this;
}