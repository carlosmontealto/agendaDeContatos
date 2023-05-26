const form = document.getElementById('form-agenda');
const imgContato = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"> <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /> </svg>'
const imgTelefone = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"> <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /> </svg>'
const contatos = [];
const telefones = [];

let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();
    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha(){
    const inputContato = document.getElementById('contato');
    const inputTelefone = document.getElementById('telefone');

    if (contatos.includes(inputContato.value)) {
        alert(`O contato: ${inputContato.value} já foi inserido.`)
    } else{
        contatos.push(inputContato.value);
        telefones.push(parseFloat(inputTelefone.value));
    
        let linha = '<tr>';
        linha += '<td> <div class="nome">' + imgContato +  `${inputContato.value} </div> </td>`;
        linha += '<td> <div class="numero">' + imgTelefone +  `${inputTelefone.value} </div></td>`;
        linha += `</tr>`;
    
        linhas += linha;

        inputContato.value = '';
        inputTelefone.value = '';
    }
}

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}