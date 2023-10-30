function salvar_objeto() {
    let valores = {}
    for (var elemento of valores_list) {
        valores[elemento] = document.getElementById(elemento).value;
    }
    var lista_banco = localStorage.getItem(tabela);
    if (lista_banco === null) {
        lista_banco = [];
    } else {
        lista_banco = JSON.parse(lista_banco);
    }
    lista_banco.push( valores);
    localStorage.setItem(tabela, JSON.stringify(lista_banco));

    for (var elemento of valores_list) {
        document.getElementById(elemento).value = '';
    }
  
    listar_objetos();
    
}

function listar_objetos() {
    var listaTabelas = document.getElementById('lista');
    listaTabelas.innerHTML = '';

    var lista_banco = localStorage.getItem(tabela);
    if (lista_banco !== null) {
        lista_banco = JSON.parse(lista_banco);

        lista_banco.forEach(function (tabela, indice) {
            var tr = document.createElement('tr');
            var vetor_tb = []
            for (var elemento of visibilidade_list) {
                if(elemento == 1){
                    vetor_tb.push(document.createElement('td'));
                }
            }
            var tdAcoes = document.createElement('td');
            var editarBtn = document.createElement('button');
            var excluirBtn = document.createElement('button');
            let i_tb = 0;
            let j_elem = 0;
            for (var elemento of visibilidade_list) {
                if(elemento == 1){
                    vetor_tb[i_tb].textContent = tabela[valores_list[j_elem]];
                    i_tb= i_tb + 1;
                }
                j_elem = j_elem + 1;
            }

            editarBtn.textContent = 'Editar';
            excluirBtn.textContent = 'Excluir';

            editarBtn.onclick = function () {
                editar_objeto(indice);
            };

            excluirBtn.onclick = function () {
                excluir_objeto(indice);
            };

            tdAcoes.appendChild(editarBtn);
            tdAcoes.appendChild(excluirBtn);

            for (var elemento of vetor_tb) {
                tr.appendChild(elemento);
            }
            
            tr.appendChild(tdAcoes);

            listaTabelas.appendChild(tr);
        });
    }
}

function editar_objeto(indice) {
    var lista_banco = JSON.parse(localStorage.getItem(tabela));
    var tabela = lista_banco[indice];
    for (var elemento of valores_list) {
        document.getElementById(elemento).value = tabela[elemento];
    }
    lista_banco.splice(indice, 1);
    listar_objetos();

    localStorage.setItem(tabela, JSON.stringify(lista_banco));
}

function excluir_objeto(indice) {
    var lista_banco = JSON.parse(localStorage.getItem(tabela));
    lista_banco.splice(indice, 1);
    localStorage.setItem(tabela, JSON.stringify(lista_banco));
    listar_objetos();
    for (var elemento of valores_list) {
        document.getElementById(elemento).value = '';
    }
  
}



listar_objetos();