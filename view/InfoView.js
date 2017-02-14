function InfoView () {
    this.renderInfo = function(json) {
        var infoData = '',
            infoDiv = document.createElement('div'),
			extraInfo=document.getElementById('extraInfo'),
			closeButton;
		
        infoData += renderTemplate(infoViewTpl, json);
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