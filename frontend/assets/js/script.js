const API_URL = 'http://localhost:3000/api/contatos';
const formulario = document.getElementById('contact-form')

// Carregar contatos
async function carregarContatos() {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error('Erro ao buscar contatos');
    }

    const contatos = await response.json();
    if (!Array.isArray(contatos)) {
      throw new Error('Resposta inesperada da API.');
    }

    const tbody = document.querySelector('tbody');
    tbody.innerHTML = ''; 

    contatos.forEach(({ id, nome, email, telefone }) => {
      tbody.innerHTML += `
        <tr data-id="${id}">
          <td>${id}</td>
          <td class="contact-name" contenteditable="false">${nome}</td>
          <td class="contact-email" contenteditable="false">${email}</td>
          <td class="contact-phone" contenteditable="false">${telefone}</td>
          <td class="text-center">
            <i class="fa-solid editar-icon fa-pencil" title="Editar" onclick="editarContato(${id})"></i>
          </td>
          <td class="text-center text-danger">
            <i class="fa-solid fa-trash-can" title="Excluir" onclick="deletarContato(${id})"></i>
          </td>
        </tr>
      `;
    });
  } catch (error) {
    console.error('Erro ao carregar contatos:', error.message);
  }
}

// Adicionar contato
async function adicionarContato() {
  const nome = document.getElementById('name');
  const email = document.getElementById('email');
  const telefone = document.getElementById('phone');
  const errorMessage = document.getElementById('error-message');

  if (errorMessage) errorMessage.textContent = '';

  let formIsValid = true;

  if (!nome.value.trim() || nome.value.length < 3 || nome.value.length > 50) {
    nome.classList.add('is-invalid');
    formIsValid = false;
  } else {
    nome.classList.remove('is-invalid');
  }

  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (!email.value.trim() || !emailPattern.test(email.value.trim())) {
    email.classList.add('is-invalid');
    formIsValid = false;
  } else {
    email.classList.remove('is-invalid');
  }

  const telefonePattern = /^[0-9]{11}$/;
  if (!telefone.value.trim() || !telefonePattern.test(telefone.value.trim())) {
    telefone.classList.add('is-invalid');
    formIsValid = false;
  } else {
    telefone.classList.remove('is-invalid');
  }

  if (!formIsValid) {
    if (errorMessage) errorMessage.textContent = 'Por favor, preencha todos os campos corretamente!';
    return;
  }

  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        nome: nome.value.trim(),
        email: email.value.trim(),
        telefone: telefone.value.trim(),
      }),
    });

    if (!response.ok) {
      throw new Error('Erro ao adicionar contato.');
    }

    await carregarContatos();

    // Limpar campos do formulário
    nome.value = '';
    email.value = '';
    telefone.value = '';

    // Limpar erro após o sucesso
    if (errorMessage) errorMessage.textContent = '';
  } catch (error) {
    if (errorMessage) errorMessage.textContent = 'Erro ao adicionar contato. Tente novamente.';
    console.error('Erro ao adicionar contato:', error.message);
  }
}

// Editar contato
async function editarContato(id) {
  try {
    const linha = document.querySelector(`tr[data-id="${id}"]`);
    const nomeCell = linha.querySelector('.contact-name');
    const emailCell = linha.querySelector('.contact-email');
    const telefoneCell = linha.querySelector('.contact-phone');
    const editarIcon = linha.querySelector('.editar-icon');

    if (!linha.classList.contains('editing')) {
      
      nomeCell.contentEditable = true;
      emailCell.contentEditable = true;
      telefoneCell.contentEditable = true;

      nomeCell.classList.add('border', 'border-primary', 'rounded');
      emailCell.classList.add('border', 'border-primary', 'rounded');
      telefoneCell.classList.add('border', 'border-primary', 'rounded');

      editarIcon.classList.remove('fa-pencil');
      editarIcon.classList.add('fa-check', 'text-success');

      linha.classList.add('editing');

      editarIcon.title = "Salvar";
    } else {
      // Salvar alterações
      const nome = nomeCell.innerText.trim();
      const email = emailCell.innerText.trim();
      const telefone = telefoneCell.innerText.trim();

      const response = await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nome, email, telefone }),
      });

      if (!response.ok) {
        throw new Error('Erro ao salvar contato');
      }

      nomeCell.contentEditable = false;
      emailCell.contentEditable = false;
      telefoneCell.contentEditable = false;

      nomeCell.classList.remove('border', 'border-primary', 'rounded');
      emailCell.classList.remove('border', 'border-primary', 'rounded');
      telefoneCell.classList.remove('border', 'border-primary', 'rounded');

      editarIcon.classList.remove('fa-check', 'text-success');
      editarIcon.classList.add('fa-pencil');

      linha.classList.remove('editing');

      editarIcon.title = "Editar";

      console.log('Contato atualizado com sucesso');
    }
  } catch (error) {
    console.error('Erro ao editar contato:', error.message);
  }
}

// Deletar contato
async function deletarContato(id) {
  try {
    const response = await fetch(`${API_URL}/${id}`, { method: 'DELETE' });

    if (!response.ok) {
      throw new Error('Erro ao deletar contato.');
    }

    carregarContatos();
  } catch (error) {
    console.error('Erro ao deletar contato:', error.message);
  }
}

// Inicializa lista de contatos
carregarContatos();

formulario.addEventListener('submit', (event) => {
  event.preventDefault(); 
  adicionarContato();
});
