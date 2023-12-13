const fs = require('fs');

// fs => file system;


//Escreve e cria um arquivo. 
//Primeiro parâmetro é o nome, segundo o texto e o terceiro um tratamento para erro;
fs.writeFile('myfile.txt', 'Hello World', (err) => {
    if (err){
        throw err;
    }
});

//Leitura do arquivo
fs.readFile('myfile.txt', (err, data) => {
    if(err){
        throw err;
    }
    console.log(data.toString('utf8'));
})

//Ler arquivos
fs.readdir('.', (err, files) => {
    if (err){
        throw err;
    }
    for (var file in files){
        console.log(files[file]);
    }
})