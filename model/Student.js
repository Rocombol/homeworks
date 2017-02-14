function Student (name, lastName, gender, skype, phone, email, birthdate) {	
	var name = name,
    	lastName = lastName,
		gender = gender,
		phone=phone,
    	skype = skype,
		email = email,
		birthdate = getAge(birthdate);
		
	this.toJSON=function(){
	  return {
		fullname: name+' '+lastName,
		gender: gender,
		skype: skype,
		phone: phone,
		email: email,  
		age: birthdate
	  };				
	};
	
	 this.fullname = function(value) {
		if (!arguments.length) return name+' '+lastName;  		
		 fullname = value;
	  };
	
	 this.gender = function(value) {
		if (!arguments.length) return gender;  		
		 gender = value;
	  };

	 this.phone = function(value) {
		if (!arguments.length) return phone;  		
		 phone = value;
	  };
	
	 this.skype = function(value) {
		if (!arguments.length) return skype;  		
		 skype = value;
	  };
	
	 this.email = function(value) {
		if (!arguments.length) return email;  		
		 email = value;
	  };
	
	 this.age = function(value) {
		if (!arguments.length) return getAge(birthdate);  		
		 age = getAge(value);
	  };	
	
	
	function getAge(birthdate){
		var birthdateToDate,
			ageDifMs,
			ageDate;
			
		  birthdateToDate=new Date(birthdate);
		  ageDifMs = Date.now() - birthdateToDate.getTime();
		  ageDate = new Date(ageDifMs);
		
		return  Number(Math.abs(ageDate.getUTCFullYear() - 1970));  		
	}
		
    return this;	
	
}