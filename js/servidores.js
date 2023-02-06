window.sistemas = {
    SIGITM_TA: [
        {'Weblogic':
            ['123.123.123.123', '245.255.248.10'], 
        'Descrição':
            ['brtsp01teste', 'brtsp01teste']
        },
        {'Banco de dados':'123.123.123.123', 'Descrição':'Teste'},
    ],
    SIGITM_TI: [
        {'Weblogic':
            ['123.123.123.123', '245.255.248.10'], 
        'Descrição':
            ['brtsp01teste', 'brtsp01teste']
        },
        {'Banco de dados':'123.123.123.123', 'Descrição':'Teste'},
    ]
};

window.getSelectedValues = function() {
    let selectedValues = [];
    let inputs = document.querySelectorAll('#sistemas input[type="checkbox"]');
    for (let input of inputs) {
      if (input.checked) {
        selectedValues.push(input.value);
      }
    }
    return selectedValues;
};

window.servidores = function() {
    let sistemas = window.getSelectedValues();
    let servers = [];
    sistemas.forEach(s => {adicionar(servers, s)});
    return servers;
};


function adicionar(lista, sistema) {
    let sistema_server = {};
    for (const key in window.sistemas) {
        if (key === sistema) {
            sistema_server = [key, window.sistemas[key]];
            lista[lista.length] = sistema_server;
        }
    }
}
