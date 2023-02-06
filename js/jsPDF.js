
window.salvar = function () {
    const doc = new jsPDF();

    doc.autoTable({
        margin: { top: 10 },
        body: window.bodyFinal
    })

    doc.save("Documento-Tecnico-Padrao.pdf");
}            