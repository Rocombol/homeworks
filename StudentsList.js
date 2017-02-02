/**
 * create method showTable that build table of students;
 *
 * @param {object} array of objects
 *
 */

function StudentsList(data) {

    this.showTable = function(data) {
		var columns = Object.keys(data[0]),		
            table = document.createElement('table'),
            thead = document.createElement('thead'),
			tablerow,
			tablehead,
			tbody;
            table.appendChild(thead);

         tablerow = document.createElement('tr');
        
		for (let i = 0; i < columns.length; i++) {
            tablehead = document.createElement('th');
            tablehead.textContent = columns[i];
            tablerow.appendChild(tablehead);
        }
        thead.appendChild(tablerow);

        tbody = document.createElement('tbody');
        table.appendChild(tbody);
       
		for (let j = 0; j < data.length; j++) {
             tablerow = document.createElement('tr');
            
			for (let i = 0; i < columns.length; i++) {
                tablehead = document.createElement('td');
                tablehead.textContent = data[j][columns[i]];
                tablerow.appendChild(tablehead);
            }
			
            tbody.appendChild(tablerow);
        };  
		document.getElementById('content').appendChild(table);
    };
	
}

//create an instance of StudentsList
var creator=new StudentsList(arrayofus);

// show the table
creator.showTable(arrayofus);



