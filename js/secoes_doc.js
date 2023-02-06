
// SEÇÕES DA TABELA

// CABEÇALHO
window.cabecalho = [
    [
        {content: '', colSpan: 3, styles: { textColor: [255, 255, 255], fillColor:[134,142,150], halign: 'center' }},
        {content: 'By: William Ramos', colSpan: 1, styles: { halign: 'center' }},
    ],
    [
        {content: 'DOCUMENTO TÉCNICO AUTO', colSpan: 4, styles: { fontStyle:'bold', font: 'helvetica', fontSize:28, cellPadding:6, textColor: [255, 255, 255], fillColor:[134,142,150], halign: 'center' }},
        {content: '', colSpan: 4, styles: { cellPadding:10, textColor: [255, 255, 255], fillColor:[134,142,150], halign: 'center' }},
    ],
];

// DADOS DOS SOLICITANTES
window.solicitantes = [];
window.populaDadosSolicitantes = function (solIndra, contIndra, emailIndra, solVivo, contVivo, emailVivo) {
    dadosSolic = [
        [
            {content: 'Dados dos Solicitantes', colSpan: 4, styles: { halign: 'center', textColor: [255, 255, 255], fillColor: [0, 0, 0] }}
        ],
        [
            {content:'Solicitante',  styles: { halign: 'center', textColor: [255, 255, 255], fillColor: [134,142,150] }},
            'Nome', 
            'Contato', 
            'E-mail'
        ],
        [
            {content:'Indra', styles: { halign: 'center', textColor: [255, 255, 255], fillColor: [134,142,150] }},
            {content: solIndra},
            {content: contIndra},
            {content: emailIndra}
        ],
        [
            {content:'Vivo', styles: { halign: 'center', textColor: [255, 255, 255], fillColor: [134,142,150] }},
            {content: solVivo}, 
            {content: contVivo},
            {content: emailVivo}
        ],
    ]
    window.solicitantes = dadosSolic;
}

// DADOS DA MUDANÇA
window.dadosDaMudanca = [];
window.populaDadosMudanca = function (rolloutInicio, rolloutFim, rollbackInicio, rollbackFim) {
        let dadosMud = [
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
    ];
    window.dadosDaMudanca = dadosMud;
}

// SERVIDORES
window.servidoresSecao = [];
window.populaServers = function (servers) {
    let secServer = [
        [
            {content: 'Servidores', colSpan: 4, styles: { halign: 'center', textColor: [255, 255, 255], fillColor: [0, 0, 0] }}
        ],
        [
            {content: 'Sistema', styles: { halign: 'center'}},
            {content: 'Tipo de Servidor', styles: { halign: 'center'}},
            {content: 'IP', styles: { halign: 'center'}},
            {content: 'Descrição/Hostname', styles: { halign: 'center'}}
        ],
        [
            {content: servers[0][0], styles: { halign: 'center'}},
            {content: 'Weblogic', styles: { halign: 'center'}},
            {content: servers[0][1][0]['Weblogic'][0], styles: { halign: 'center'}},
            {content: servers[0][1][0]['Descrição'][0], styles: { halign: 'center'}}
        ],
    ];
    window.servidoresSecao = secServer;
}

// PLANO DE IDA

window.planoDeIda = [
    [
        {content: 'Plano de Ida', colSpan: 4, styles: { halign: 'center', textColor: [255, 255, 255], fillColor: [0, 0, 0] }}
    ], 
    [
        {content:'Título da Tarefa', colspan: 1, styles: { halign: 'center', textColor: [255, 255, 255], fillColor: [134,142,150] }},
        {content: 'EX - Execução de deploy da aplicação', colspan: 3}
    ],
    [
        {content:'Equipe Responsável', colSpan: 1, styles: { halign: 'center', textColor: [255, 255, 255], fillColor: [134,142,150] }},
        {content: 'INDRA - OSS ATENDIMENTO A CAMPO LEGADO', colSpan: 3}
    ], 
    [
        {content:'Data início da Tarefa', colSpan: 1, styles: { halign: 'center', textColor: [255, 255, 255], fillColor: [134,142,150] }},
        {content: 'XX/XX/2023 22:00', colSpan: 3}
    ],
    [
        {content:'Data Fim da Tarefa', colSpan: 1, styles: { halign: 'center', textColor: [255, 255, 255], fillColor: [134,142,150] }},
        {content: 'XX/XX/2023 23:00', colSpan: 3} 
    ],
    [
        {content:'Descrição da tarefa',  colSpan: 4, styles: { halign: 'center', textColor: [255, 255, 255], fillColor: [134,142,150] }},
    ],
    [
        {content:
            'Descreva todos os passos envolvidos na mudança',
        colSpan: 4, 
        styles: { halign: 'center' }}
    ],
    [
        {content: 'Passo 1:', colSpan: 1, styles: { halign: 'left' }},
        {content: 'Baixar a aplicação e realizar backup dos artefatos \n', colSpan: 3, styles: { halign: 'left' }}
    ],
    [
        {content: 'Passo 2:', colSpan: 1, styles: { halign: 'left' }},
        {content: 'Subir os artefatos na versão XPTO \n', colSpan: 3, styles: { halign: 'left' }}
    ],
    [
        {content: 'Passo 3:', colSpan: 1, styles: { halign: 'left' }},
        {content: 'Subir a aplicação \n', colSpan: 3, styles: { halign: 'left' }}
    ]
];

window.getBody = function() {
    let body = [];

    body = body.concat(
        window.cabecalho,
        window.solicitantes,
        window.dadosDaMudanca,
        window.servidoresSecao,
        window.planoDeIda
    );

    return body;
};
