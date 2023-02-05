window.jsPDF = window.jspdf.jsPDF;
        function salvar() {

            const doc = new jsPDF();

            doc.autoTable({
                margin: { top: 10 },
                body: [
                        [
                            {content: 'DOCUMENTO TÉCNICO AUTO', colSpan: 3, styles: { cellPadding: 10, halign: 'center' }},
                            {content: 'By: William Ramos', colSpan: 1, styles: { cellPadding: 10, halign: 'center' }},
                        ],
                        [
                            {content: 'Dados dos Solicitantes', colSpan: 4, styles: { halign: 'center', textColor: [255, 255, 255], fillColor: [0, 0, 0] }}
                        ],
                        [
                            {content:'Solicitante',  styles: { halign: 'center', textColor: [255, 255, 255], fillColor: [0, 0, 0] }},
                            'Nome', 
                            'Contato', 
                            'E-mail'],
                        [
                            {content:'Indra', styles: { halign: 'center', textColor: [255, 255, 255], fillColor: [0, 0, 0] }},
                            {content:document.querySelector("#solicitante").value},
                            {content: document.querySelector("#contatoIndra").value},
                            {content: ''}
                        ],
                        [
                            {content:'Vivo', styles: { halign: 'center', textColor: [255, 255, 255], fillColor: [0, 0, 0] }},
                            document.querySelector("#solicitanteVivo").value, 
                            document.querySelector("#contatoVivo").value,
                            document.querySelector("#emailVivo").value,
                        ],
                        [
                            {content: 'Dados da Janela de Mudança', colSpan: 4, styles: { halign: 'center', textColor: [255, 255, 255], fillColor: [0, 0, 0] }}
                        ],
                        [
                            {content:'Data Início Rollout'},
                            {content:'Data Fim Rollout'},
                            {content:'Data Início Rollback'},
                            {content:'Data Fim Rollback'}
                        ],
                        [   document.querySelector("#rolloutInicio").value, 
                            document.querySelector("#rolloutFim").value,
                            document.querySelector("#rollbackInicio").value,
                            document.querySelector("#rollbackFim").value
                        ]                         
                    ],
            })

            doc.save("Documento-Tecnico-Padrao.pdf");
        }            