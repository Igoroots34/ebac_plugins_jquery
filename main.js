$(document).ready(function () {
    $('#telefone').mask('(00) 00000-0000')
    $('#cpf').mask('000.000.000-00')
    $('#cep').mask('00000-000')

    $('form').validate({
        rules: {
            nome: {
                required: true,
                minlength: 2
            },
            email: {
                required:true,
                email:true
            },
            telefone: {
                required:true,
                minlength: 15
            },
            cpf: {
                required:true,
                minlength: 14
            },
            cep: {
                required:true,
                minlength: 9
            },
            endereco: {
                required:false
            }
        },
        messages: {
            nome: {
                minlength: jQuery.validator.format("At least {0} characters required!")
            },
            nome: "Por favor, digite seu nome completo.",
            email: "Precisamos do seu endereço de e-mail.",
            telefone: "Número de telefone obrigatório.",
            cpf: "CPF obrigatório.",
            cep: "CEP obrigatório."
        },
        submitHandler: function(form) {
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos =validador.numberOfInvalids()
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        }
    })
    $("#cep").blur(function(){
        const cepValido = this.value.replace(/[^0-9]/, "")
        if(cepValido.length != 8){
            return false
        }
        const url = "https://viacep.com.br/ws/"+cepValido+"/json/"
        $.getJSON(url, function(dadosRetorno){
            try{
                $("#endereco").val(dadosRetorno.logradouro)
            }catch(ex){}
        })
    })
})