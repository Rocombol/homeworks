var arrayofus = [];

function StudentsList(name, age, gender, phone, email) {
    this.studentToArray = function(name, age, gender, phone, email) {
        var person = new Student(name, age, gender, phone, email); // here we create instance
        arrayofus.push(person);
    }

    this.getLiveForm = function(array) {
        var arraynededkeys = [];
        arrayofus.forEach(function(item, i) {
            var testobj = {};
            for (var key in arrayofus[i]) {
                if (key == 'phone' || key == 'email') {
                    continue;
                } else {
                    testobj[key] = arrayofus[i][key];
                }
            }
            arraynededkeys.push(testobj);
        })
        return arraynededkeys;
    };

        this.getInfoForm = function(array) {
            var arraynededkeys = [];
            arrayofus.forEach(function(item, i) {
                var testobj = {};
                for (var key in arrayofus[i]) {
                    if (key == 'name' || key == 'skype' || key == 'gennder') {
                        continue;
                    } else {
                        testobj[key] = arrayofus[i][key];
                    }
                }
                arraynededkeys.push(testobj);
            })
            return arraynededkeys;
        };
}