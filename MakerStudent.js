/**
 * returns the object of students 
 *
 * @param {string} 
 * @param {string} 
 * @param {string} 
 * @return {object} 
 */

function MakerStudents(name, skype, gender) {
    this.name = name;
    this.skype = skype;
    this.gennder = gender;
}


/**
 * returns the array of object of students 
 *
 * @param {string} 
 * @param {string} 
 * @param {string} 
 * @return {object} 
 */
function addPerson(name, skype, gender) {
    var funcresalt = new MakerStudents(name, skype, gender); // here we create instance
    arrayofus.push(funcresalt);
}

// global array :(
var arrayofus=[];


addPerson('Alex', 'answer_quick', 'Male')
addPerson('Irina', 'kitty', 'Female')
addPerson('Polina', 'candy_polya', 'Female')
addPerson('Svetlana', 'sweetie_sun', 'Female')
addPerson('Elena', 'smile_soul', 'Female')
addPerson('Vladimir', 'vovanium', 'Male')
