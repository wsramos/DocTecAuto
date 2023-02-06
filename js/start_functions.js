// DADOS PARA AS SEÇÕES
var solicitanteIndra;
var contatoIndra;
var emailIndra;
var solicitanteVivo;
var contatoVivo;
var emailVivo;
var rolloutInicio;
var rolloutFim;
var rollbackInicio;
var rollbackFim;

function populaDadosForm(){

    solicitanteIndra = document.querySelector("#solicitante").value;
    contatoIndra = document.querySelector("#contatoIndra").value;
    emailIndra = document.querySelector("#emailIndra").value;
    solicitanteVivo = document.querySelector("#solicitanteVivo").value;
    contatoVivo = document.querySelector("#contatoVivo").value;
    emailVivo = document.querySelector("#emailVivo").value;

    rolloutInicio = new Date(document.querySelector("#rolloutInicio")
                                    .value).toLocaleDateString() 
                                    + " " + 
                                    document.querySelector("#rolloutInicio")
                                    .value.substring(11);

    rolloutFim = new Date(document.querySelector("#rolloutFim")
                                    .value).toLocaleDateString() 
                                    + " " + 
                                    document.querySelector("#rolloutInicio")
                                    .value.substring(11);

    rollbackInicio = new Date(document.querySelector("#rollbackInicio")
                                    .value).toLocaleDateString() 
                                    + " " + 
                                    document.querySelector("#rolloutInicio")
                                    .value.substring(11);

    rollbackFim = new Date(document.querySelector("#rollbackFim")
                                    .value).toLocaleDateString() 
                                    + " " + 
                                    document.querySelector("#rolloutInicio")
                                    .value.substring(11);

}
window.bodyFinal = [];
window.jsPDF = window.jspdf.jsPDF;

window.initFunctions = function () {
    
    let servers = window.servidores();

    populaDadosForm();

    window.populaDadosSolicitantes(solicitanteIndra, contatoIndra, emailIndra, 
        solicitanteVivo, contatoVivo, emailVivo);

    window.populaDadosMudanca(rolloutInicio, rolloutFim, rollbackInicio, rollbackFim);

    window.populaServers(servers);

    window.bodyFinal = window.getBody();
    
    window.salvar(); 
}