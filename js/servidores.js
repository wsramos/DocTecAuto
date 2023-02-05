window.sistemas = {
    SIGITM_TA: [
        '123.123.123.123',
        '234.234.234.234'
    ],
    SIGITM_TI: [
        '345.345.345.345',
        '456.456.456.456'
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
    let result = "";
    for (let key in servers) {
        result += key + ": " + servers[key] + "\n";
    }
    return result;
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
