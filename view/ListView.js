function ListView () {
    this.renderList = function(studentsArray) {		
		var listItemView=new ListItemView(),
			contentElement = document.getElementById('content'),
			itemTable = document.createElement('table')
		
		contentElement.innerHTML=listTpl;
		
		studentsArray.forEach(function(itemStudent){
			var tr=listItemView.renderItem(itemStudent);
			
			itemTable.appendChild(tr);
		});
		
		contentElement.appendChild(itemTable);
//		listItemView.renderItem(studentsArray);
						
    }	
	return this;
}