let nome = document.getElementById('nome')
let email = document.getElementById('email')
let telefone = document.getElementById('telefone')
let mensagem = document.getElementById('msg')
let botao = document.getElementById('btt-inc')
let confirm = document.getElementById('confirm')

function btt(){
    if(nome.value.trim() !== '' && email.value.includes('@')){
        localStorage.setItem('nome', nome.value);
        localStorage.setItem('email', email.value);
        localStorage.setItem('telefone', telefone.value);
        localStorage.setItem('mensagem', mensagem.value);

        window.location.href = 'confirm.html';
    }
    
}