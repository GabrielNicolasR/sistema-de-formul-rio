const selecionarBotao = document.querySelector(".btn-enviar")
const inputs = document.querySelectorAll(".tag-de-input")
const mensagemDeErro = document.querySelectorAll(".campo-obrigatorio")



selecionarBotao.addEventListener('click', function(){
    mensagemDeErro.forEach(function(mensagem){
        mensagem.innerHTML = '';
    });

    inputs.forEach(function(input, index){
        if (input.value === '') {
            mensagemDeErro[index].innerHTML = '<p class="novo-html">Campo Obrigatório</p>';
            input.classList.add("btn-enviar-erro");
            input.classList.remove("btn-enviar-correto");
        } else {
            input.classList.remove("btn-enviar-erro");
            input.classList.add("btn-enviar-correto");
        }
    });  
});


