    const tarefasDiv = document.getElementById('tarefas');
    const finalizadasDiv = document.getElementById('finalizadas');
    const tarefasT = document.getElementById('tarefasT');           
    const finalizadasT = document.getElementById('finalizadasT');
    let itens = [];
    let finalizadas = [];

    function NewTarefa() {
        let descricao = document.getElementById('descricao').value;
        if (descricao == '') {
            alert('A descrição não pode estar vazia');
        } else {
            itens.push(descricao);
            descricao = '';
            AtualizaTabelas();
        }
    }
    function RemoveTarefa(id) {
        finalizadas.push(itens[id]);
        itens.splice(id, 1);
        AtualizaTabelas();
    }
    function RemoveFinalizada(id){
        finalizadas.splice(id, 1);
        AtualizaTabelas();
    }
    function AtualizaTabelas() {
        let r1 = '';
        let r2 = '';
        for (let index = 0; index < itens.length; index++) {
            r1 += `<li>${itens[index]} <button onclick='RemoveTarefa(${index})'>Concluir</button></li>`;}
        for (let index = 0; index < finalizadas.length; index++) {
            r2 += `<li>${finalizadas[index]} <button onclick='RemoveFinalizada(${index})'>Excluir</button></li>`;}
        tarefasDiv.innerHTML = r1;
        finalizadasDiv.innerHTML = r2;   
        tarefasT.innerHTML = `Tarefas Pendentes (${itens.length})`;
        finalizadasT.innerHTML = `Tarefas Finalizadas (${finalizadas.length})`;
    }