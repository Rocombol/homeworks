/**
 * create method showTable that build table of students;
 *
 * @param {object} array of objects
 *
 */
function InfoView(data) {

    this.showInfoTable = function(data) {
        var columns = Object.keys(data[0]),
            table = document.createElement('table'),
            thead = document.createElement('thead'),
            tablerow,
            tablehead,
            tbody,
            texttd,
            button;

        table.appendChild(thead);

        tablerow = document.createElement('tr');

        columns.forEach(function(item, i) {
            tablehead = document.createElement('th');
            tablehead.textContent = columns[i];
            tablerow.appendChild(tablehead);

        })

        thead.appendChild(tablerow);

        tbody = document.createElement('tbody');
        table.appendChild(tbody);

        data.forEach(function(item, j) {

            tablerow = document.createElement('tr');

            columns.forEach(function(item, i) {
                tablehead = document.createElement('td');
                texttd = data[j][columns[i]]; // value of td cell
                tablehead.textContent = texttd;
                tablerow.appendChild(tablehead)
				
            });
            tbody.appendChild(tablerow);

        });
        document.getElementById('content').insertAdjacentElement('BeforeEnd',table);
    };
}