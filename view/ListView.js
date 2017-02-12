function ListView () {
    this.renderList = function(studentsArray) {		
		var valueToChange=[],
			listItemView=new ListItemView(),
			contentElement = document.getElementById('content');
		
		renderListTitle();
		
		getHash(studentsArray);
				
		listItemView.renderItem(valueToChange, contentElement);
		
        function renderListTitle () {
            var header = document.createElement('div');
			
            header.innerHTML = listTpl;
			
            contentElement.appendChild(header);
        };
		
		function getHash (arraOfObjects){
			studentsArray.forEach(function(item){
			valueToChange.push(item.toJson())
			})
		};
		
    }	

}