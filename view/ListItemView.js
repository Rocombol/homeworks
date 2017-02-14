function ListItemView () {
    this.renderItem = function(itemStudent) {
        var itemData = '',
            itemTr = document.createElement('tr'),
            singleStudent=itemStudent.toJSON(),
            button,
			infoView,
			addInfoElement;
		
			itemData += renderTemplate(listItemTpl, singleStudent);		
		    itemTr.innerHTML=itemData;
			      
		button = itemTr.querySelector('.showInfo');        		
		
		button.addEventListener('click', findMore, false);
		
		function findMore (){
			infoView=new InfoView();
			
			addInfoElement=document.body.querySelector('.addInfo');
                    
			if(addInfoElement){
				addInfoElement.parentNode.innerHTML="";
				infoView.renderInfo(singleStudent)
			} else{
				infoView.renderInfo(singleStudent);
			}						
		};		
		return itemTr;
    };
    return this;
};