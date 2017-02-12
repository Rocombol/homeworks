function Student (name, lastName, gender, skype, phone, email, birthdate) {
    this.name = name;
    this.lastName = lastName;
	this.gender = gender;
	this.phone=phone;
    this.skype = skype;
	this.email = email;
	this.birthdate = birthdate;
	
	this.age=function(birthdate){
		var birthdateToDate,
			ageDifMs,
			ageDate;
			
		  birthdateToDate=new Date(this.birthdate);
		  ageDifMs = Date.now() - birthdateToDate.getTime();
		  ageDate = new Date(ageDifMs);
		
		return  Number(Math.abs(ageDate.getUTCFullYear() - 1970));        
	};
	
	this.toJson=function(){
	  return {
		fullname: this.name+' '+this.lastName,
		gender: this.gender,
		skype: this.skype,
		phone: this.phone,
		email: this.email,  
		age: this.age()
	  };				
	};
	
	return this;
}