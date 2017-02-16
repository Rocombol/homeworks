'use strict';

function EditView (student) {
	var student = student;
    
	this.renderEditForm = function() {

         var editDiv = document.createElement('div'),
			extraInfo=document.getElementById('extraInfo'),
			saveButton,
			closeButton;
		
		editDiv.classList.add('editPanel'); 
		
        editDiv.innerHTML = editViewTpl;
        extraInfo.append(editDiv);		
        saveButton = document.querySelector('.saveInfo');
		closeButton = document.querySelector('.closeEdit'); 
				
		saveButton.addEventListener('click', changeData, false);
		closeButton.addEventListener('click', closeChangeData, false);
		
		function closeChangeData (){
			closeButton.closest('#extraInfo').innerHTML='';	
			event.preventDefault();		
		}
				
    };
			
	function changeData (){
			var listView = new ListView(student),
			inputCollection = document.getElementsByTagName('input');
					
        [].forEach.call(inputCollection, function(input){			
			
			if (input.value!==''){
				student.setValue(input.name, input.value)				
			} 
			
        });	
		
		listView.renderList();		
		event.preventDefault();
	};
	
    return this;
}