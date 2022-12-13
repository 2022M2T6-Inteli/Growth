if (document.getElementById('etapa').value == 1){
    var email = document.getElementById('email').value
    var password = document.getElementById('password').value
    function armazenarEtapa1(){
        document.getElementById('emailFim').value = email
        document.getElementById('passwordFim').value = password
    }
}
else if (document.getElementById('etapa').value == 2){
    var razaoSocial = document.getElementById('razaoSocial').value
    var cnpj = document.getElementById('cnpj').value
    function armazenarEtapa2(){
        document.getElementById('razaoSocialFim').value = razaoSocial
        document.getElementById('cnpjFim').value = cnpj
    }
}
else if (document.getElementById('etapa').value == 3){
    var numFuncionarios = document.getElementById('numFuncionarios').value
    var tel = document.getElementById('tel').value
    function armazenarEtapa3(){
        document.getElementById('numFuncionariosFim').value = numFuncionarios
        document.getElementById('telEmpresaFim').value = tel
    }
}
else if (document.getElementById('etapa').value == 4){
    var nomeDono = document.getElementById('nomeDono').value
    var cpf_dono = document.getElementById('cpf_dono').value
    var tel_dono = document.getElementById('tel_dono').value
    var owner_birth_date = document.getElementById('owner_birth_date').value
    function armazenarEtapa4(){
        document.getElementById('nomeDonoFim').value = nomeDono
        document.getElementById('cpfDonoFim').value = cpf_dono
        document.getElementById('telDonoFim').value = tel_dono
        document.getElementById('owner_birth_dateFim').value = owner_birth_date
    }
}
else if (document.getElementById('etapa').value == 5){
    var emailContador = document.getElementById('emailContador').value
    var tel_contador = document.getElementById('tel_contador').value
    function armazenarEtapa5(){
        document.getElementById('emailContadoprFim').value = emailContador
        document.getElementById('telContadorFim').value = tel_contador
    }
}

