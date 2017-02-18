'use strict';

function ListItemView (student) {
	var student = student,
		studentJSON = student.toJSON();
	
    this.renderItem = function () {
        var itemData = '',
            itemTr = document.createElement('tr'),
            singleStudent=student.toJSON(),
            buttonFind,
			buttonEdit;
		
			itemData += renderTemplate(listItemTpl, singleStudent);		
		    itemTr.innerHTML = itemData;
			      
		buttonFind = itemTr.querySelector('.showInfo');
		buttonEdit = itemTr.querySelector('.editInfo');
		
		buttonFind.addEventListener('click', findMore, false);			
		buttonEdit.addEventListener('click', editInfo, false);
		
		return itemTr;
    };
	
		function findMore () {
			var infoView = new InfoView();
			
			if(infoView){
				infoView.removeInfo();
				infoView.renderInfo(studentJSON);
			} else{		
				infoView.renderInfo(studentJSON);
			}						
		};
	
		function editInfo (){
			var editView = new EditView(student);
                    
			if(editView){				
				editView.removeEditInfo();
				editView.renderEditForm();
			} else{
				editView.renderEditForm();
			}						
		};				
    return this;
};