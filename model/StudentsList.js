function StudentsList() {
        this.first = new Student("Alex", "Grigoryev", "Male", "answer_quick", "3805555333", "answer_quick@hmail.com", "1994-08-03");
        this.second = new Student("Svetlana", 'Ovcharenko', "Female", "sweetie", "+380663334455", "sweetie@gmail.com", "1991-05-24");
        this.third = new Student("Polina", 'Zhylyaeva', "Female", "candy_polya", "+380934445566", "candy_polya@hmail.com", "1987-07-07");
        this.fourth = new Student("Elena", 'Ryndina', "Female", "smile", "+380666668888", "smile@hmail.com", "1991-08-24");
        this.fifth = new Student("Irina", "Ruban", "Female","dn100980rev", "+380998885511",  "kitty@gmail.com", "1995-02-04");
        this.sixth = new Student("Vladimir", "Timofeev", "Male", "vovanium", "+380634207163", "vovanium@gmail.com", "1988-06-06");
    
//        this.arrayOfStudents = [this.first, this.second, this.third, this.fourth, this.fifth, this.sixth];
        var arrayOfStudents = [this.first, this.second, this.third, this.fourth, this.fifth, this.sixth];
//        var students=[];
//	
//	    this.arrayOfStudents.forEach(function(item,i){
//			item=students[i];
//		});
	
		this.getList = function () {
			return arrayOfStudents;
		};
    return this;
}