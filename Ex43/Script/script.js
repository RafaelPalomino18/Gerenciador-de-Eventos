    function adicionaParticipante() {
        let nomeInput = document.getElementById('name');
        let emailInput = document.getElementById('email');
        let telefoneInput = document.getElementById('telefone');

        let nome = nomeInput.value.trim();
        let email = emailInput.value.trim();
        let telefone = telefoneInput.value.trim();

        if (nome === "") {
            alert("Por favor, insira o nome do participante.");
            return;
        }

        if (email === "") {
            alert("Por favor, insira o email do participante.");
            return;
        }

        if (telefone === "") {
            alert("Por favor, insira o telefone do participante.");
            return;
        }

        let div = document.createElement('div');
        let new_id = "id_" + Math.floor(Math.random() * 1000);
        div.setAttribute("id", new_id);
        div.classList.add("participante");

        // Estilo interativo
        div.addEventListener("mouseover", () => {
            div.classList.add("highlight");
        });

        div.addEventListener("mouseout", () => {
            div.classList.remove("highlight");
        });

        div.addEventListener("dblclick", () => {
            removeParticipante(new_id);
        });

        let pNome = document.createElement('p');
        pNome.textContent = `Nome: ${nome}`;

        let pEmail = document.createElement('p');
        pEmail.textContent = `Email: ${email}`;

        let pTelefone = document.createElement('p');
        pTelefone.textContent = `Telefone: ${telefone}`;

        div.appendChild(pNome);
        div.appendChild(pEmail);
        div.appendChild(pTelefone);

        let container = document.getElementById("container");
        container.appendChild(div);


        nomeInput.value = "";
        emailInput.value = "";
        telefoneInput.value = "";
    }
    function removeParticipante(id) {
        let elemento = document.getElementById(id);
        if (elemento) {
            elemento.remove(); // Remove o elemento do DOM
        } else {
            console.warn(`Elemento com ID '${id}' não encontrado.`);
        }
    }
    
