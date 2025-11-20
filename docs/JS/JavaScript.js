document.getElementById("quizForm").addEventListener("submit", function(e){
    e.preventDefault();

    let pontos = 0;
    let certas = 0;
    let erradas = 0;

    function validarRadio(name){
        const marcado = document.querySelector(`input[name="${name}"]:checked`);
        if(!marcado) return null;
        return parseInt(marcado.value);
    }

    // Q1
    let q1 = validarRadio("q1");
    if(q1 === null) return alert("Responda a questão 1!");
    q1 ? certas++ : erradas++;
    pontos += q1;

    // Q2
    let q2 = validarRadio("q2");
    if(q2 === null) return alert("Responda a questão 2!");
    q2 ? certas++ : erradas++;
    pontos += q2;

    // Q3
    let q3 = document.querySelector("select[name='q3']").value;
    if(q3 === "") return alert("Responda a questão 3!");
    parseInt(q3) === 1 ? certas++ : erradas++;
    pontos += parseInt(q3);

    // Q4
    const q4 = document.querySelectorAll("input[name='q4']:checked");
    if(q4.length < 2) return alert("Marque pelo menos 2 Pokémons!");
    let soma4 = 0;
    q4.forEach(x => soma4 += parseInt(x.value));
    pontos += soma4;
    soma4 === 2 ? certas++ : erradas++;

    // Q5
    let q5 = document.querySelector("input[name='q5']").value;
    if(q5 === "") return alert("Responda a questão 5!");
    if(q5 == 2009){ certas++; pontos++; } else erradas++;

    // Q6
    let q6 = validarRadio("q6");
    if(q6 === null) return alert("Responda a questão 6!");
    q6 ? certas++ : erradas++;
    pontos += q6;

    // Q7
    let q7 = document.querySelector("select[name='q7']").value;
    if(q7 === "") return alert("Responda a questão 7!");
    parseInt(q7) === 1 ? certas++ : erradas++;
    pontos += parseInt(q7);

    // Q8
    let q8 = document.querySelector("input[name='q8']").value.trim().toLowerCase();
    if(q8 === "") return alert("Responda a questão 8!");
    if(q8 === "michael jackson"){ certas++; pontos++; } else erradas++;

    // Q9
    let q9 = validarRadio("q9");
    if(q9 === null) return alert("Responda a questão 9!");
    q9 ? certas++ : erradas++;
    pontos += q9;

    // Q10
    let q10 = document.querySelector("input[name='q10']").value;
    if(q10 === "") return alert("Responda a questão 10!");
    if(q10 == 7){ certas++; pontos++; } else erradas++;

    const resultado = document.getElementById("resultado");
    resultado.classList.remove("d-none");
    resultado.innerHTML =
        `<strong>Pontuação:</strong> ${pontos} pontos<br>
         <strong>Acertos:</strong> <span class="text-success">${certas}</span><br>
         <strong>Erros:</strong> <span class="text-danger">${erradas}</span>`;

    const detalhes = document.getElementById("detalhes");
    detalhes.innerHTML = "";

    let msg = document.createElement("div");
    msg.classList.add("alert");

    if(certas >= 8){
        msg.classList.add("alert-success");
        msg.innerHTML = "🥇 Você arrasou!";
    } else if(certas >= 5){
        msg.classList.add("alert-warning");
        msg.innerHTML = "💪 Legal! Você mandou bem, mas ainda dá pra melhorar!";
    } else {
        msg.classList.add("alert-danger");
        msg.innerHTML = "🤔 Um pouco mais de foco e você vai arrasar na próxima!";
    }

    detalhes.appendChild(msg);
});