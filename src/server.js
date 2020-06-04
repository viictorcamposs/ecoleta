const express = require ("express");
const server = express ();

// configurar pasta pública
  server.use (express.static ("public"))

// utilizando template engine 
  const nunjucks = require ("nunjucks")
  nunjucks.configure ("src/views", {
    express: server,
    noCache: true
  })


//configurar caminhos da minha aplicação
  // req: requisição | res: resposta

  // página inicial
    server.get ("/", function (req, res) {
      return res.render ("index.html", { title: "Seu marketplace de coleta de resíduos"});
    })

  // página de cadastro
    server.get ("/create-point", function (req, res) {
      return res.render ("create-point.html");
    })
  
  // página de resultados
    server.get ("/search", function (req, res) {
      return res.render ("search-results.html");
    })

// ligar o servidor
  server.listen (3000)