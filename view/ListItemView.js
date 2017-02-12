function ListItemView () {
    this.renderItem = function(valueHash, content) {
        var itemData = '',
            itemDiv = document.createElement('div'),
            buttons,
			infoView,
			clickElement,
			addInfoElement;
		
        itemData += renderTemplate(listItemTpl, valueHash);

        itemDiv.innerHTML = itemData;
		
        content.append(itemDiv);

        buttons = document.querySelectorAll('.showInfo');
        
		addInfoLstener(buttons);

        function addInfoLstener (buttonsColletion) {
            [].forEach.call(buttonsColletion, function (item,i) {
                item.addEventListener('click', function () {
					infoView = new InfoView();
					clickElement = [valueHash[i]];
					addInfoElement = document.body.querySelector('.addInfo');
                    
					if(addInfoElement){
				    		addInfoElement.parentNode.innerHTML = "";
							infoView.renderInfo(clickElement)
					} else{
						infoView.renderInfo(clickElement);
					}
					
                }, false);
            });
        };
    };

    return this;
};