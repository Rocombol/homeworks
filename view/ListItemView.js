'use strict';

function ListItemView (_student) {
	var student = _student,
		itemTr = document.createElement('tr'),
		buttonFind, buttonEdit;
	
    this.renderItem = function () {
        var itemData = '',
            json = student.toJSON();
		
		itemData += renderTemplate(listItemTpl, json);		
		itemTr.innerHTML = itemData;
			      
		queryListeners();
				
		student.on('change', changeStudent);
		
		return itemTr;
    };
	
	function changeStudent () {
		var itemData = '',
			json = student.toJSON();
		     
		queryRemoveListeners();		
				
		itemData += renderTemplate(listItemTpl, json);
		
		itemTr.innerHTML = itemData;
		
		queryListeners();						         								
	}
		
	function findMore () {  
			var infoView = new InfoView(student);
			
			if(infoView){
				deleteExtraInfo();
				infoView.renderInfo();
			} else{		
				infoView.renderInfo();
			}						
	};
	
	function editInfo () {
			var editView = new EditView(student);
                    
			if(editView){
				deleteExtraInfo();
				editView.renderEditForm();
			} else{
				deleteExtraInfo();
			}						
	};
		
	function deleteExtraInfo () {
			var extraInfo = document.getElementById('extraInfo');
			extraInfo.innerHTML='';
	}
	
	function queryRemoveListeners () {
		buttonFind = itemTr.querySelector('.showInfo');
		buttonEdit = itemTr.querySelector('.editInfo');
        buttonFind.removeEventListener('click', findMore);
        buttonEdit.removeEventListener('click', editInfo);				
	}
	
	function queryListeners () {
		buttonFind = itemTr.querySelector('.showInfo');
		buttonEdit = itemTr.querySelector('.editInfo');		
		buttonFind.addEventListener('click', findMore, false);			
		buttonEdit.addEventListener('click', editInfo, false);		
	};
	
    return this;
};