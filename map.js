export const jogosExclusivos = [
    { id: 1, nome: "Contraband", plataforma: "xbox" },
    { id: 2, nome: "Avowed", plataforma: "xbox" },
    { id: 3, nome: "Starfield", plataforma: "xbox" },
    { id: 4, nome: "Ghost of Tsushima 2", plataforma: "playstation" },
    { id: 5, nome: "Marvel's Spider-Man 2", plataforma: "playstation" },
    { id: 6, nome: "Death Stranding 2", plataforma: "playstation" },
    { id: 7, nome: "Final Fantasy XVI", plataforma: "playstation" },
    { id: 8, nome: "Marvel's Wolverine", plataforma: "playstation" }
  ];
  
  
  
  {jogosExclusivos.map((jogo, index) => (
    <ItemJogos
      key={ index }
      nome={ jogo.nome }
      plataforma={ jogo.plataforma }
    />
  ))}