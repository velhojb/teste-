document.getElementById("start-button").addEventListener("click", function() {
    document.getElementById("instructions").style.display = "none";
    document.getElementById("temperament-form").style.display = "block";
});

document.getElementById("temperament-form").addEventListener("submit", function(event) {
    event.preventDefault();
    let scoreA = 0;
    let scoreB = 0;

    const questions = 18; // Total de perguntas na primeira parte
    for (let i = 1; i <= questions; i++) {
        const answer = document.querySelector(`input[name="q${i}"]:checked`);
        if (answer) {
            if (answer.value === "a") {
                scoreA++;
            } else {
                scoreB++;
            }
        }
    }

    // Esconder o primeiro formulário e mostrar o segundo
    document.getElementById("temperament-form").style.display = "none";
    document.getElementById("second-part-form").style.display = "block";
});

document.getElementById("second-part-form").addEventListener("submit", function(event) {
    event.preventDefault();
    let scoreA = 0;
    let scoreB = 0;

    const questions = 13; // Total de perguntas na segunda parte
    for (let i = 1; i <= questions; i++) {
        const answer = document.querySelector(`input[name="q${i}_second"]:checked`);
        if (answer) {
            if (answer.value === "a") {
                scoreA++;
            } else {
                scoreB++;
            }
        }
    }

    // Determinação do temperamento
    let temperament = '';
    if (scoreA > scoreB) {
        if (scoreA > scoreB) {
            temperament = "Sanguíneo: Quente e Úmido. Extrovertido e envolvente, voltado para os relacionamentos interpessoais...";
        } else {
            temperament = "Colérico: Quente e Seco. Muito prático, voltado para a execução e realização...";
        }
    } else {
        if (scoreA > scoreB) {
            temperament = "Fleumático: Frio e Úmido. Introvertido, diplomático e de fácil convivência...";
        } else {
            temperament = "Melancólico: Frio e Seco. Introvertido, reflexivo e profundo...";
        }
    }

    // Exibir resultado
    document.getElementById("second-part-form").style.display = "none";
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `<h2>Seu Tipo de Temperamento:</h2><p>${temperament}</p>`;
    resultDiv.style.display = "block";
});
