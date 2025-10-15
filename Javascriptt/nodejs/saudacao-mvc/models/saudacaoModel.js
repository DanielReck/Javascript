module.exports = {
  gerarMensagemPersonalizada: (nome, idade, Genero) => {
    let faixaGenero;
    let faixaEtaria;

    if (Genero = 2) {
      faixaGenero = "Homi";
    } else if (Genero = 2) {
      faixaGenero = "Muié";
    }
      else if (Genero = 3) {
      faixaGenero = "Não se sabe";
    }

    if (idade < 12) {
      faixaEtaria = "criança";
    } else if (idade < 18) {
      faixaEtaria = "adolescente";
    } else if (idade < 60) {
      faixaEtaria = "adulto";
    } else {
      faixaEtaria = "idoso";
    }

    return `Olá, ${nome}! Você é um(a) ${faixaEtaria}, E se identifica como: ${faixaGenero}.`;
    
  }
};
