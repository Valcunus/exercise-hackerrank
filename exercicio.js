var https = require('https');

function buscaFilme(substr) {
    pagina = 1;
    let url = 'https://jsonmock.hackerrank.com/api/movies/search/?Title=' + substr + "&pagina=" + pagina;
    https.get(url, (res) => {
        res.setEncoding('utf8');
        res.on('data', function(body) {
            let dataRec = JSON.parse(body);
            let filme = dataRec.data;
            let totalPaginas = dataRec.total_pages;
            let sortArray = [];
            filme.map((a) => {
              sortArray.push(a.Title)
            })
            for (let i = 2; i <= totalPaginas; i++) {
                let proxPagina = i;
                let url1 = 'https://jsonmock.hackerrank.com/api/movies/search/?Title=' + substr + "&pagina=" + proxPagina;
                https.get(url1, (res) => {
                    res.setEncoding('utf8');
                    res.on('data', function(body) {
                        let newData = JSON.parse(body);
                        let filmes = newData.data;
                        for (let i = 0; i < filmes.length; i++) {
                            sortArray.push(filmes[i].Title);
                        }
                        console.log(sortArray.sort());
                    })
                })
            }
        })
    })
}

function compactaFilmes(substr) {
    buscaFilme(substr);
}

compactaFilmes("spiderman"); //ou outro titulo