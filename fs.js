var fs = require('fs');

let htmlcontent = `
<div>
    <h1>Witam2</h1>
    <ul>
        <li><span>Witam</span><span>fajny kocur</span></li>
    </ul>
</div>
`

console.log(htmlcontent)

// writeFile function with filename, content and callback function
fs.writeFile('./sites/aboutme/index.html', htmlcontent, function(err) {
    if (err) throw err;
    console.log('File is created successfully.');
});