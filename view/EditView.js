'use strict';

function EditView (student) {
	var student = student,
    	extraInfo = document.getElementById('extraInfo');
			
	this.renderEditForm = function() {

         var editDiv = document.createElement('div'),
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
	
	this.removeEditInfo = function (){
		extraInfo.innerHTML='';
	}
			
	function changeData (){
			var listView = new ListView(student),
			inputCollection = document.getElementsByTagName('input');
					
        [].forEach.call(inputCollection, function(input){						
			if (input.value!==''){
				student.set(input.name, input.value)				
			} 
			
        });	
		
		listView.renderList();		
		event.preventDefault();
	};
	
    return this;
}