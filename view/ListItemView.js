'use strict';
function ListItemView (student) {
	var student = student,
		singleStudent = student.toJSON();
	
    this.renderItem = function(itemStudent) {
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
	
//    this.changeItem = function(changeItem) {
//        var itemData = '',
//            itemTr = document.createElement('tr'),
//            //singleStudent=itemStudent.toJSON(),
//            buttonFind,
//			buttonEdit;
//		
//			itemData += renderTemplate(listItemTpl, changeItem);		
//		    itemTr.innerHTML=itemData;
//			      
//		buttonFind = itemTr.querySelector('.showInfo');
//		buttonEdit = itemTr.querySelector('.editInfo');
//		
//		buttonFind.addEventListener('click', findMore, false);
//		
//		buttonEdit.addEventListener('click', editInfo, false);
//		
//		return itemTr;
//    };	

		function findMore (){
			var infoView = new InfoView(),
				addInfoElement;
			
			addInfoElement = document.body.querySelector('.addInfo');
                    
			if(addInfoElement){
				addInfoElement.parentNode.innerHTML = "";
				infoView.renderInfo(singleStudent)
			} else{
				infoView.renderInfo(singleStudent);
			}						
		};

		function editInfo (){
			var editView = new EditView(student),
				addEditElement;
			
			addEditElement = document.body.querySelector('.editPanel');
                    
			if(addEditElement){
				addEditElement.parentNode.innerHTML = "";
				editView.renderEditForm();
			} else{
				editView.renderEditForm();
			}						
		};		
	
	
	
    return this;
};