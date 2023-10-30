function listar_select(lista){
        let select = document.getElementById(lista[0]);
        while (select.options.length > 0) {
            lista.remove(0);
        }

        let lista_banco = localStorage.getItem(lista[1]);
        if (lista_banco !== null) {
            lista_banco = JSON.parse(lista_banco);
    
            lista_banco.forEach(function (tabela, indice) {
                let novaOpcao = document.createElement("option");
                novaOpcao.value = tabela[lista[2]];
                novaOpcao.text = tabela[lista[2]];

                select.appendChild(novaOpcao);
            });
        }
    
}