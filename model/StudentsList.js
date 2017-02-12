function StudentsList() {
        this.first = new Student("Alex", "Grigoryev", "Male", "3805555333","answer_quick", "answer_quick@hmail.com", "1994-08-03");
        this.second = new Student("Svetlana", 'Ovcharenko', "Female", "+380663334455","sweetie", "sweetie@gmail.com", "1991-05-24");
        this.third = new Student("Polina", 'Zhylyaeva', "Female", "+380934445566", "candy_polya", "candy_polya@hmail.com", "1987-07-07");
        this.fourth = new Student("Elena", 'Ryndina', "Female", "+380666668888", "smile", "smile@hmail.com", "1991-08-24");
        this.fifth = new Student("Irina", "Ruban", "Female", "+380998885511", "dn100980rev", "kitty@gmail.com", "1995-02-04");
        this.sixth = new Student("Vladimir", "Timofeev", "Male", "+380634207163", "vovanium", "vovanium@gmail.com", "1988-06-06");
    
        this.arrayOfStudents = [this.first, this.second, this.third, this.fourth, this.fifth, this.sixth];

    return this;
}