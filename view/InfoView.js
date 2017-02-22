'use strict';

function InfoView (_student) {
	var student = _student,
		json = student.toJSON(), 
		extraInfo = document.getElementById('extraInfo');
	
    this.renderInfo = function() {		
        var infoData = '',
            infoDiv = document.createElement('div'),
			closeButton;
		
        infoData += renderTemplate(infoViewTpl, json);
        infoDiv.innerHTML = infoData;
        extraInfo.append(infoDiv);		
        closeButton = document.querySelector('.closeInfo');
				
		closeButton.addEventListener('click', closeInfo, false);
		
		function closeInfo() {
			closeButton.removeEventListener('click', closeInfo)
			closeButton.closest('#extraInfo').innerHTML='';						
		}
    };
	
    return this;
}