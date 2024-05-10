const filmes = [
    { id: 1, titulo: 'A Origem', diretor: 'Christopher Nolan', ano: 2010 },
    { id: 2, titulo: 'O Poderoso Chefão', diretor: 'Francis Ford Coppola', ano: 1972 },
    { id: 3, titulo: 'Interestelar', diretor: 'Christopher Nolan', ano: 2014 },
    { id: 4, titulo: 'Pulp Fiction', diretor: 'Quentin Tarantino', ano: 1994 },
    { id: 5, titulo: 'O Senhor dos Anéis: O Retorno do Rei', diretor: 'Peter Jackson', ano: 2003 },
    { id: 6, titulo: 'Clube da Luta', diretor: 'David Fincher', ano: 1999 },
    { id: 7, titulo: 'Kill Bill: Volume 1', diretor: 'Quentin Tarantino', ano: 2003 },
    { id: 8, titulo: 'Star Wars: Episódio VI - O Retorno de Jedi', diretor: 'Richard Marquand', ano: 1983 }
    ];
    
    const filmesDoMesmoDiretor = filmes.filter(filme => filme.diretor === 'Quentin Tarantino');
    console.log(filmesDoMesmoDiretor);
    
    const filmesBuscaPorNome = filmes.filter(filme => filme.titulo.toLowerCase().includes('retorno'));
    console.log(filmesBuscaPorNome);