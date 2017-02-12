function InfoView () {

    this.renderInfo = function(valueHash) {
        var infoData = '',
            infoDiv = document.createElement('div'),
			closeButton;
		
        infoData += renderTemplate(infoViewTpl, valueHash);

        infoDiv.innerHTML = infoData;

        content.append(infoDiv);
		
        closeButton = document.querySelector('.closeInfo');
				
		closeButton.addEventListener('click', function(){			
			closeButton.closest('div').innerHTML='';						
		},false);
				
    }

    return this;
}