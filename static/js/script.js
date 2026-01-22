async function addFuncionario() {
    // 1. Captura os dados usando os IDs que estão no seu HTML corrigido
    const nome = document.getElementById('novo-nome').value;
    const cargo = document.getElementById('novo-cargo').value;
    const email = document.getElementById('novo-email').value;

    // Validação simples
    if (!nome || !cargo || !email) {
        alert("Preencha todos os campos!");
        return;
    }

    // 2. Captura o Token de Segurança (CSRF) que o Django gera no HTML
    const csrftoken = document.querySelector('[name=csrfmiddlewaretoken]').value;

    const payload = { nome, cargo, email };

    try {
        const response = await fetch('/adicionar/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': csrftoken // Isso resolve o erro 403 (Incorrect length)
            },
            body: JSON.stringify(payload)
        });

        if (response.ok) {
            alert("Funcionário adicionado com sucesso!");
            window.location.reload(); // Recarrega a página para atualizar a tabela
        } else {
            const erroTexto = await response.text();
            console.error("Erro do servidor:", erroTexto);
            alert("Erro ao adicionar. Verifique o console.");
        }
    } catch (error) {
        console.error("Erro na requisição:", error);
    }
}