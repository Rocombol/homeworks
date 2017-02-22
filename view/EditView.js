'use strict';

function EditView (_student) {
	var student = _student,
    	extraInfo = document.getElementById('extraInfo'),
		saveButton,
		closeButton;		
			
	this.renderEditForm = function() {
         var editDiv = document.createElement('div');
		
		editDiv.classList.add('editPanel'); 
		
        editDiv.innerHTML = editViewTpl;
        extraInfo.append(editDiv);		
        saveButton = editDiv.querySelector('.saveInfo');
		closeButton = editDiv.querySelector('.closeEdit'); 
				
		saveButton.addEventListener('click', changeData, false);
		closeButton.addEventListener('click', deleteExtraInfo, false);
					
    };
	
			
	function changeData () {
			var inputCollection = document.getElementsByTagName('input'),
				infoView;
				
			[].forEach.call(inputCollection, function(input){						
				if (input.value!==''){
					student.set(input.name, input.value)				
				} 
			});	
		
			infoView = new InfoView(student);
			
			deleteExtraInfo();

			infoView.renderInfo();
			//event.preventDefault();
	};
	
	function deleteExtraInfo () {
		saveButton.removeEventListener('click', changeData)
		closeButton.removeEventListener('click', deleteExtraInfo)
		extraInfo.innerHTML = '';
	}
	
    return this;
}