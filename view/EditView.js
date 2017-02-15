'use strict';

function EditView (student) {
	var student=student;
    this.renderEditForm = function() {

         var editDiv = document.createElement('div'),
			extraInfo=document.getElementById('extraInfo'),
			saveButton,
			closeButton;
		
		editDiv.classList.add('editPanel'), 
		
        editDiv.innerHTML = editViewTpl;
        extraInfo.append(editDiv);		
        saveButton = document.querySelector('.saveInfo');
				
		saveButton.addEventListener('click', ChangeData, false);
		
	
    };
			
	function ChangeData(){
        var formData = {},
			inputs = document.getElementsByTagName('input');
		
        [].forEach.call(inputs, function(input){
            //formData[input.name] = input.value;
			student.setValue(input.name, input.value)
        });	
		
		//listItemView.renderItem(formData);
		
		event.preventDefault();
	}	
	
    return this;
}