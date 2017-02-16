'use strict';

function Student (name, lastName, gender, skype, phone, email, birthdate) {
    var values = {
        name: name,
		lastName: lastName,
        gender: gender,
        phone: phone,
        skype: skype,
        email: email,
        birthdate: getAge(birthdate)
    };

    this.toJSON = function () {
        return values;
    };

    this.getValue = function (desiredKey) {
        for (var key in values) {
            if (key === desiredKey) {
                return values[desiredKey];
            }
        }
        throw new Error('Key: ' + desiredKey + ' is not found');

    };
	
    this.setValue = function (desiredKey, desiredValue) {
          
		for (var key in values) {
             if (key === desiredKey) {
                  values[desiredKey]=desiredValue;
              }            
          }      
    };
	
    function getAge(birthdate) {
        var birthdateToDate,
            ageDifMs,
            ageDate;

        birthdateToDate = new Date(birthdate);
        ageDifMs = Date.now() - birthdateToDate.getTime();
        ageDate = new Date(ageDifMs);

        return Number(Math.abs(ageDate.getUTCFullYear() - 1970));
    }

    return this;

}