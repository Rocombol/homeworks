'use strict';

function InfoView (student) {
	var student = student;
    this.renderInfo = function(student) {
        var infoData = '',
            infoDiv = document.createElement('div'),
			extraInfo=document.getElementById('extraInfo'),
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
    return this;
}