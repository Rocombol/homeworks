/**
 * create method showTable that build table of students;
 *
 * @param {object} array of objects
 *
 */
function InfoView(data) {

    this.showInfoTable = function(data) { 
        //check if we already have not empty additional field;
        checkEmty();
        
        var contentElement = document.createElement('div'),
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
            html += '</tr>';
        });
        html += '</tbody></table>';
        contentElement.innerHTML = html;
        contentElement.classList.add('present'); 
        document.getElementById('content').appendChild(contentElement);
    };

        function checkEmty () {
            var container = document.querySelector('#content');         
            var childRemove = document.querySelector('.present');       
            if (childRemove){
                container.removeChild(childRemove)
            }
        }
}