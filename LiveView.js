/**
 * create method showTable that build table of students;
 *
 * @param {object} array of objects
 *
 */
function LiveView(data) {
    this.showTable = function(data) {
        var contentElement = document.getElementById('content'),
            columns = Object.keys(data[0]),
            html = '<table><thead><tr>',
            texttd;
        columns.forEach(function(item, i) {
            html += '<th>' + columns[i] + '</th>';
        })
        html += '</tr></thead><tbody>';
        data.forEach(function(item, j) {
            html += '<tr>'
            columns.forEach(function(item, i) {
                texttd = data[j][columns[i]];
                html += '<td>' + texttd + '</td>';
            });
            html += '<td><button>Get Info</button></td>';
            html += '</tr>';
        });
        html += '</tbody></table>';
        contentElement.innerHTML = html;
    };
}