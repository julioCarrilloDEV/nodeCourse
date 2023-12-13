//configurar o html
function handle(request, response){

    let html = `
        <!DOCTYPE "html">
        <html>
            <head>
                <title>Programinha</title>
            </head>
            <body>
                <h1>Bem-vindo, seu maléfico!</h1>
            </body>
        </html>
    `;

    response.writeHead(200, {'Content-type' : 'text/html; charset=utf-8'});
    response.write(html);
    response.end();
}

module.exports = handle;