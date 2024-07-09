var http = require('http');
var fs = require('fs');
var url = require('url');

var app = http.createServer(function(request, response) {
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var pathname = url.parse(_url, true).pathname;
    console.log(queryData.id);
    var title = queryData.id || 'Welcome';

    if (pathname === '/') {
        if (queryData.id === undefined) {
            fs.readFile('index.html', 'utf8', function(err, data) {
                if (err) {
                    response.writeHead(404);
                    response.end('Not Found');
                    return;
                }
                var template = `
<!doctype html>
<html>
<head>
  <title>WEB1 - Welcome</title>
  <meta charset="utf-8">
</head>
<body>
  <h1><a href="/">WEB</a></h1>
  <ul>
    <li><a href="/?id=Html">HTML</a></li>
    <li><a href="/?id=CSS">CSS</a></li>
    <li><a href="/?id=JavaScript">JavaScript</a></li>
  </ul>
  <h2>Welcome</h2>
  <p>${data}</p>
</body>
</html>
                `;
                response.writeHead(200);
                response.end(template);
            });
        } else {
            fs.readFile(queryData.id + '.html', 'utf8', function(err, data) {
                if (err) {
                    response.writeHead(404);
                    response.end('Not Found');
                    return;
                }
                var template = `
<!doctype html>
<html>
<head>
  <title>WEB1 - ${title}</title>
  <meta charset="utf-8">
</head>
<body>
  <h1><a href="/">WEB</a></h1>
  <ul>
    <li><a href="/?id=Html">HTML</a></li>
    <li><a href="/?id=CSS">CSS</a></li>
    <li><a href="/?id=JavaScript">JavaScript</a></li>
  </ul>
  <h2>${title}</h2>
  <p>${data}</p>
</body>
</html>
                `;
                response.writeHead(200);
                response.end(template);
            });
        }
    } else {
        response.writeHead(404);
        response.end('Not Found');
    }
});

app.listen(3000);
