document.addEventListener('DOMContentLoaded', ready, false);


/**
 *  ready function is  manage our files;
 *
 */

function ready() {
    var arrayofus = [
        new StudentsList('Alex', 'answer_quick', 'Male', true,'read books'),
        new StudentsList('Irina', 'kitty', 'Female',true, 'play with rabbit'),
        new StudentsList('Polina', 'candy_polya', 'Female', true,'sweeming'),
        new StudentsList('Svetlana', 'sweetie_sun', 'Female', true, 'cooking'),
        new StudentsList('Elena', 'smile_soul', 'Female',true,'play anagrams'),
        new StudentsList('Vladimir', 'vovanium', 'Male',true,'play sport')

    ];
    //create an instance of StudentsList
    var creator = new View(arrayofus);
    // show the table
    creator.showTable(arrayofus);
   	
	var table = document.querySelector('table');

	//delegate event to buttons
	
    table.addEventListener('click', ShowHobby, false);

    function ShowHobby(event) {
        var target = event.target; 
        if (target.tagName != 'BUTTON') return; 
        target.nextElementSibling.classList.toggle('show');
    }
}