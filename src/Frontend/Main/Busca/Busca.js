function submitForm(){
    $("#hiddenSearch").val($("#search").val());

    $("form").submit()
}

function createCitiesOnDropdown (uf = false){
    if(uf) {
        fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`).then(function(result){
            result.json().then(function(array){
                const arrayOfHtml = ['<option value="">Selecione</option>'];
    
                array.forEach(element => {
                    arrayOfHtml.push(`<option ${selectedCityId == element.id ? 'selected' : ''} value="${element.id}">${element.nome}</option>`)
                })
                $("#city").html(arrayOfHtml.join(""))
            })
        }).catch(function() {
            $("#city").html('<option value="">Selecione</option>')
        })
    }
    
}

$(document).ready(() => {
    createCitiesOnDropdown(selectedStateUf)
    $('#state').change(function () {
        const uf = $( "#state option:selected" ).val()
        createCitiesOnDropdown(uf)
      })
})