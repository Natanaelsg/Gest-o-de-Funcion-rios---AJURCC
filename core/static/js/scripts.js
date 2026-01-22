console.log("JS carregado com sucesso!");

function toggleEdit(id) {
    // Lógica para abrir edição na linha
}

async function saveData(id) {
    // Lógica para enviar dados via Fetch API
}
async function deleteRow(id) {
    if (!confirm("Tem certeza que deseja excluir este funcionário?")) return;

    const response = await fetch(`/deletar/${id}/`, {
        method: 'POST',
        headers: {
            'X-CSRFToken': '{{ csrf_token }}'
        }
    });

    if (response.ok) {
        const row = document.getElementById(`row-${id}`);
        // Efeito de sumir suavemente
        row.style.opacity = '0';
        setTimeout(() => row.remove(), 500);
    } else {
        alert("Erro ao excluir o registro.");
    }
}

async function addFuncionario() {
    const nome = document.getElementById('novo-nome').value;
    const cargo = document.getElementById('novo-cargo').value;
    const email = document.getElementById('novo-email').value;

    if (!nome || !cargo || !email) {
        alert("Preencha todos os campos!");
        return;
    }

    const response = await fetch('/adicionar/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': '{{ csrf_token }}'
        },
        body: JSON.stringify({ nome, cargo, email })
    });

    const result = await response.json();

    if (response.ok) {
        // Adiciona a nova linha dinamicamente na tabela
        const tbody = document.querySelector('tbody');
        const newRow = `
            <tr id="row-${result.id}">
                <td class="field" data-name="nome">${nome}</td>
                <td class="field" data-name="cargo">${cargo}</td>
                <td class="field" data-name="email">${email}</td>
                <td>
                    <button class="btn btn-edit" onclick="editRow('${result.id}')">Editar</button>
                    <button class="btn btn-save" onclick="saveRow('${result.id}')">Salvar</button>
                    <button class="btn btn-delete" onclick="deleteRow('${result.id}')">Excluir</button>
                </td>
            </tr>`;
        tbody.insertAdjacentHTML('beforeend', newRow);
        
        // Limpa os campos
        document.getElementById('novo-nome').value = '';
        document.getElementById('novo-cargo').value = '';
        document.getElementById('novo-email').value = '';
    }
}