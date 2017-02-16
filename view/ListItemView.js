'use strict';
function ListItemView (student) {
	var student = student,
		singleStudent = student.toJSON();
	
    this.renderItem = function(student) {
        var itemData = '',
            itemTr = document.createElement('tr'),
            singleStudent=student.toJSON(),
            buttonFind,
			buttonEdit;
		
			itemData += renderTemplate(listItemTpl, singleStudent);		
		    itemTr.innerHTML=itemData;
			      
		buttonFind = itemTr.querySelector('.showInfo');
		buttonEdit = itemTr.querySelector('.editInfo');
		
		buttonFind.addEventListener('click', findMore, false);			
		buttonEdit.addEventListener('click', editInfo, false);
		
		return itemTr;
    };
	
		function findMore (){
			var infoView = new InfoView(),
				addInfoElement = document.body.querySelector('.addInfo');
                    
			if(addInfoElement){
				document.querySelector('#extraInfo').innerHTML = "";
				infoView.renderInfo(singleStudent);
			} else{
				document.querySelector('#extraInfo').innerHTML = "";
				infoView.renderInfo(singleStudent);
			}						
		};
	
		function editInfo (){
			var editView = new EditView(student),
				addEditElement = document.body.querySelector('.editPanel');
                    
			if(addEditElement){
				document.querySelector('#extraInfo').innerHTML = "";
				editView.renderEditForm();
			} else{
				document.querySelector('#extraInfo').innerHTML = "";
				editView.renderEditForm();
			}						
		};				
    return this;
};