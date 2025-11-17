// 1. VERIFICADOR DE IDADE PARA HABILITAÇÃO
function podeDirigir(idade) {
    if (idade >= 18) {
        return "Pode ser habilitado(a)";
    } else {
        return "Ainda não pode";
    }
}

function executarEx1() {
    const idade = Number(document.getElementById('idade').value);
    const resultado = podeDirigir(idade);
    mostrarResultado(1, resultado);
}

// ============================================

// 2. DETERMINAR O MAIOR ENTRE TRÊS
function encontrarMaiorEntreTres(a, b, c) {
    if (a > b && a > c) {
        return a;
    } else if (b > a && b > c) {
        return b;
    } else {
        return c;
    }
}

function executarEx2() {
    const num1 = Number(document.getElementById('num1').value);
    const num2 = Number(document.getElementById('num2').value);
    const num3 = Number(document.getElementById('num3').value);
    const resultado = encontrarMaiorEntreTres(num1, num2, num3);
    mostrarResultado(2, `O maior número é: ${resultado}`);
}

// ============================================

// 3. CLASSIFICADOR DE MOEDAS
function classificarMoeda(valor) {
    if (valor === 0.01) {
        return "Um Centavo";
    } else if (valor === 0.05) {
        return "Cinco Centavos";
    } else if (valor === 0.10) {
        return "Dez Centavos";
    } else if (valor === 0.25) {
        return "Vinte e Cinco Centavos";
    } else if (valor === 0.50) {
        return "Cinquenta Centavos";
    } else if (valor === 1.00) {
        return "Um Real";
    } else {
        return "Valor Desconhecido";
    }
}

function executarEx3() {
    const moeda = Number(document.getElementById('moeda').value);
    const resultado = classificarMoeda(moeda);
    mostrarResultado(3, resultado);
}

// ============================================

// 4. VERIFICADOR DE SENHA (CRITÉRIOS MÚLTIPLOS)
function senhaForte(senha) {
    if (senha.length > 8 && senha !== "12345678") {
        return true;
    } else {
        return false;
    }
}

function executarEx4() {
    const senha = document.getElementById('senha').value;
    const resultado = senhaForte(senha);
    const mensagem = resultado ? "Senha Forte ✓" : "Senha Fraca ✗";
    mostrarResultado(4, mensagem);
}

// ============================================

// 5. ALERTA DE TEMPERATURA
function checarTemperatura(temp) {
    if (temp < 10) {
        return "Alerta de Frio";
    } else if (temp >= 10 && temp <= 25) {
        return "Temperatura Ideal";
    } else {
        return "Alerta de Calor";
    }
}

function executarEx5() {
    const temp = Number(document.getElementById('temp').value);
    const resultado = checarTemperatura(temp);
    mostrarResultado(5, resultado);
}

// ============================================

// 6. CLASSIFICADOR DE DIA DA SEMANA
function nomeDoDia(num) {
    switch (num) {
        case 1:
            return "Domingo";
        case 2:
            return "Segunda";
        case 3:
            return "Terça";
        case 4:
            return "Quarta";
        case 5:
            return "Quinta";
        case 6:
            return "Sexta";
        case 7:
            return "Sábado";
        default:
            return "Número inválido (use 1-7)";
    }
}

function executarEx6() {
    const dia = Number(document.getElementById('diaSemana').value);
    const resultado = nomeDoDia(dia);
    mostrarResultado(6, resultado);
}

// ============================================

// 7. TIPO DE TRIÂNGULO
function tipoTriangulo(L1, L2, L3) {
    if (L1 == L2 && L2 == L3) {
        return "Equilátero";
    } else if (L1 == L2 || L1 == L3 || L2 == L3) {
        return "Isósceles";
    } else {
        return "Escaleno";
    }
}

function executarEx7() {
    const lado1 = Number(document.getElementById('lado1').value);
    const lado2 = Number(document.getElementById('lado2').value);
    const lado3 = Number(document.getElementById('lado3').value);
    const resultado = tipoTriangulo(lado1, lado2, lado3);
    mostrarResultado(7, `Triângulo ${resultado}`);
}

// ============================================

// 8. GERADOR DE NOME COMPLETO
function gerarNomeCompleto(pessoa) {
    return pessoa.primeiroNome + " " + pessoa.sobrenome;
}

function executarEx8() {
    const primeiroNome = document.getElementById('primeiroNome').value;
    const sobrenome = document.getElementById('sobrenome').value;
    const pessoa = { primeiroNome: primeiroNome, sobrenome: sobrenome };
    const resultado = gerarNomeCompleto(pessoa);
    mostrarResultado(8, resultado);
}

// ============================================

// 9. CALCULADORA DE MÉDIA (DOIS VALORES)
function calcularMediaSimples(N1, N2) {
    const media = (N1 + N2) / 2;
    if (media >= 7) {
        return "Aprovado";
    } else {
        return "Reprovado";
    }
}

function executarEx9() {
    const nota1 = Number(document.getElementById('nota1').value);
    const nota2 = Number(document.getElementById('nota2').value);
    const resultado = calcularMediaSimples(nota1, nota2);
    const media = ((nota1 + nota2) / 2).toFixed(2);
    mostrarResultado(9, `Média: ${media} - ${resultado}`);
}

// ============================================

// 10. FORMATAÇÃO DE TELEFONE SIMPLES
function formatarTelefone(tel) {
    return tel.slice(0, 4) + "-" + tel.slice(4);
}

function executarEx10() {
    const telefone = document.getElementById('telefone').value;
    const resultado = formatarTelefone(telefone);
    mostrarResultado(10, resultado);
}

// ============================================
// FUNÇÃO AUXILIAR PARA MOSTRAR RESULTADOS
// ============================================

function mostrarResultado(numeroExercicio, texto) {
    const elementoResultado = document.getElementById(`resultado${numeroExercicio}`);
    elementoResultado.textContent = `Resultado: ${texto}`;
    elementoResultado.classList.add('show');
    
   
}