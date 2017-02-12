    function renderTemplate (tpl, valueHash) {
        var tplNew = '',
			str;
        
		valueHash.forEach(function (item) {
            str = tpl;
            
			for (var key in item) {
                str = str.replace(key, item[key]);
            }
			
            tplNew += str
        });		
		
        return tplNew;
    }