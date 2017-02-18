'use strict';

function InfoView (student) {
	var student = student,
		extraInfo = document.getElementById('extraInfo');
	
    this.renderInfo = function(student) {
        var infoData = '',
            infoDiv = document.createElement('div'),
			closeButton;
		
        infoData += renderTemplate(infoViewTpl, student);
        infoDiv.innerHTML = infoData;
        extraInfo.append(infoDiv);		
        closeButton = document.querySelector('.closeInfo');
				
		closeButton.addEventListener('click', closeInfo, false);
		
		function closeInfo(){
			closeButton.closest('div').innerHTML='';						
		}
    };
	
	this.removeInfo = function (){
		extraInfo.innerHTML='';
	};
	
	
	
	
	
	
    return this;
}