
document.addEventListener('DOMContentLoaded', function () {
    fetch('http://localhost:3001/getAll')
        .then(response => response.json())
        .then(date => console.log(date))
    loadHTMLTable([]);


})
function loadHTMLTable(data) {
    const table = document.querySelector('table tbody');

    if (data.length === 0) {
        table.innerHTML = "<tr><td  calss = 'no-data' colspan='5'>No data</td></tr>"
    }

}