'use strict'
document.addEventListener('DOMContentLoaded', ready, false);
/**
 *  ready function is  manage our files;
 */
function ready() {
    var instStudList = new StudentsList();

    instStudList.studentToArray('Alex', 'answer_quick', 'Male', '+3805555333', 'answer_quick@hmail.com');
    instStudList.studentToArray('Irina', 'kitty', 'Female', '+3801341522', 'kitty@hmail.com');
    instStudList.studentToArray('Polina', 'candy_polya', 'Female', '+380187141', 'candy_polya@hmail.com');
    instStudList.studentToArray('Svetlana', 'sweetie', 'Female', '+3801515154', 'sweetie@hmail.com');
    instStudList.studentToArray('Elena', 'smile', 'Female', '+3806351511', 'smile@hmail.com');
    instStudList.studentToArray('Vladimir', 'vovanium', 'Male', '+3807243305', 'vovanium@hmail.com');

    //create an instance of StudentsList
    var creaionLive = new LiveView();
    // show the table
    creaionLive.showTable(instStudList.getLiveForm(arrayofus));

    var table = document.querySelector('table');

    //delegate event to buttons

    table.addEventListener('click', showMoreInfo, false);


    function showMoreInfo(event) {
        var target = event.target,
            creaionInfo = new InfoView,
            infoTable = instStudList.getInfoForm(),
            buttons = this.querySelectorAll("BUTTON");
        
        if (target.tagName != "BUTTON") return;
            
        for (var i = 0; i < buttons.length; i++){
            if (buttons[i] == target) break;
        }
        
        creaionInfo.showInfoTable([infoTable[i]])
    };

}