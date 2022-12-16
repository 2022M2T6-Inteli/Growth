function submitForm(){
    $("#hiddenSearch").val($("#search").val());

    $("form").submit()
}

$(document).ready(() => {
    $('#state').change(function () {
        const uf = $( "#state option:selected" ).val()
        fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`).then(function(result){
            result.json().then(function(array){
                $("#city").html(array.map(element => {
                    return `<option value="${element.id}">${element.nome}</option>`
                }).join(""))
            })
        })
      })
})