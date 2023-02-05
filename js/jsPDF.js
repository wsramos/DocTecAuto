window.jsPDF = window.jspdf.jsPDF;

        function salvar() {
            let servers = window.servidores();

            const doc = new jsPDF();

            var solicitanteIndra = document.querySelector("#solicitante").value;
            var contatoIndra = document.querySelector("#contatoIndra").value;
            var emailIndra = document.querySelector("#emailIndra").value;
            var solicitanteVivo = document.querySelector("#solicitanteVivo").value;
            var contatoVivo = document.querySelector("#contatoVivo").value;
            var emailVivo = document.querySelector("#emailVivo").value;
            var rolloutInicio = new Date(document.querySelector("#rolloutInicio").value).toLocaleDateString() + " " + document.querySelector("#rolloutInicio").value.substring(11);
            var rolloutFim = new Date(document.querySelector("#rolloutFim").value).toLocaleDateString() + " " + document.querySelector("#rolloutInicio").value.substring(11);
            var rollbackInicio = new Date(document.querySelector("#rollbackInicio").value).toLocaleDateString() + " " + document.querySelector("#rolloutInicio").value.substring(11);
            var rollbackFim = new Date(document.querySelector("#rollbackFim").value).toLocaleDateString() + " " + document.querySelector("#rolloutInicio").value.substring(11);

            doc.autoTable({
                margin: { top: 10 },
                body: [
                        [
                            {content: '', colSpan: 3, styles: { textColor: [255, 255, 255], fillColor:[134,142,150], halign: 'center' }},
                            {content: 'By: William Ramos', colSpan: 1, styles: { halign: 'center' }},
                        ],
                        [
                            {content: 'DOCUMENTO TÉCNICO AUTO', colSpan: 4, styles: { fontStyle:'bold', font: 'helvetica', fontSize:28, cellPadding:6, textColor: [255, 255, 255], fillColor:[134,142,150], halign: 'center' }},
                            {content: '', colSpan: 4, styles: { cellPadding:10, textColor: [255, 255, 255], fillColor:[134,142,150], halign: 'center' }},
                        ],
                        [
                            {content: 'Dados dos Solicitantes', colSpan: 4, styles: { halign: 'center', textColor: [255, 255, 255], fillColor: [0, 0, 0] }}
                        ],
                        [
                            {content:'Solicitante',  styles: { halign: 'center', textColor: [255, 255, 255], fillColor: [134,142,150] }},
                            'Nome', 
                            'Contato', 
                            'E-mail'],
                        [
                            {content:'Indra', styles: { halign: 'center', textColor: [255, 255, 255], fillColor: [134,142,150] }},
                            {content: solicitanteIndra},
                            {content: contatoIndra},
                            {content: emailIndra}
                        ],
                        [
                            {content:'Vivo', styles: { halign: 'center', textColor: [255, 255, 255], fillColor: [134,142,150] }},
                            solicitanteVivo, 
                            contatoVivo,
                            emailVivo,
                        ],
                        [
                            {content: 'Dados da Janela de Mudança', colSpan: 4, styles: { halign: 'center', textColor: [255, 255, 255], fillColor: [0, 0, 0] }}
                        ],
                        [
                            {content:'Data Início Rollout', styles: { halign: 'center',  textColor: [255, 255, 255], fillColor: [134,142,150]}},
                            {content:'Data Fim Rollout', styles: { halign: 'center',  textColor: [255, 255, 255], fillColor: [134,142,150] }},
                            {content:'Data Início Rollback', styles: { halign: 'center', textColor: [255, 255, 255], fillColor: [134,142,150] }},
                            {content:'Data Fim Rollback', styles: { halign: 'center',  textColor: [255, 255, 255], fillColor: [134,142,150] }}
                        ],
                        [
                            {content: rolloutInicio, styles: { halign: 'center'}},
                            {content: rolloutFim, styles: { halign: 'center'}},
                            {content: rollbackInicio, styles: { halign: 'center'}},
                            {content: rollbackFim, styles: { halign: 'center'}}
                        ],  
                        [
                            {content: 'Plano de Ida', colSpan: 4, styles: { halign: 'center', textColor: [255, 255, 255], fillColor: [0, 0, 0] }}
                        ],                       
                    ],
            })

            doc.save("Documento-Tecnico-Padrao.pdf");
        }            