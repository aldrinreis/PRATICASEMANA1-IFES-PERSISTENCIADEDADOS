const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("escola.sqlite", (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log("Conectado ao banco de dados Empresa com sucesso!");
  db.run(
    "CREATE TABLE IF NOT EXISTS aluno(MATRICULA INT PRIMARY KEY, NOME VARCHAR(60),EMAIL VARCHAR(40),CIDADE VARCHAR(60))");

});


db.run("INSERT INTO aluno(MATRICULA, NOME, EMAIL, CIDADE) VALUES (1, 'João Silva', 'joao@example.com', 'São Paulo')");

db.run("INSERT INTO aluno(MATRICULA, NOME, EMAIL, CIDADE) VALUES (2, 'Maria Santos', 'maria@example.com', 'Rio de Janeiro')");

db.run("INSERT INTO aluno(MATRICULA, NOME, EMAIL, CIDADE) VALUES (3, 'Aldrin Reis', 'aldrinreisdemorais@gmail.com', 'São José')");


db.each("select MATRICULA, NOME from aluno", (err, row) => {
  if (err) {
    console.error(err.message);
  }
  console.log(row.MATRICULA + "\t" + row.NOME);
});

