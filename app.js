function meuEscopo () {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');
    
    const pessoas = [];

    function receberEventoForm (evento) {
        evento.preventDefault();

        const nome = form.querySelector('.nome');                                                                                                                                           
        const Sobrenome = form.querySelector('.Sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        pessoas.push({
            nome: nome.value,
            Sobrenome: Sobrenome.value,
            peso: peso.value,
            altura: altura.value,
        })
         resultado.innerHTML += `<p>${nome.value} ${Sobrenome.value} ${peso.value} ${altura.value}</p>`;

    }

    form.addEventListener('submit',receberEventoForm)
}
meuEscopo()

