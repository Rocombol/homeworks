/**
 * create method showTable that build table of students;
 *
 * @param {object} array of objects
 *
 */

function View(data) {

    this.showTable = function (data) {
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

        columns.forEach(function (item, i) {
            tablehead = document.createElement('th');
            tablehead.textContent = columns[i];
            tablerow.appendChild(tablehead);

        })

        thead.appendChild(tablerow);

        tbody = document.createElement('tbody');
        table.appendChild(tbody);

        data.forEach(function (item, j) {

            tablerow = document.createElement('tr');

            columns.forEach(function (item, i) {
                tablehead = document.createElement('td');
                button = document.createElement('button');
                button.textContent = 'Show Hobby';

                texttd = data[j][columns[i]];// value of td cell

                if (texttd ===true) {
                    tablerow.appendChild(button);
                } else {
                    tablehead.textContent = texttd;
                    tablerow.appendChild(tablehead);

                }
            });
            tbody.appendChild(tablerow);

        });

        document.getElementById('content').appendChild(table);
    };
}