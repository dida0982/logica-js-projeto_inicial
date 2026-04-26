# Introdução à Sintaxe e Conceitos Básicos em JavaScript

## O que é Sintaxe?

Toda linguagem possui regras, e com a programação não é diferente. Essas regras são chamadas de **sintaxe**.

A sintaxe define **como os comandos devem ser escritos** para que o JavaScript consiga interpretar e executar corretamente as instruções.

Podemos comparar com a linguagem humana:

> Você até pode dizer: "comprar pão eu vou", e ainda será entendido, mas não está na forma correta.

Já o computador é mais rígido:

> Se a sintaxe estiver incorreta, o código simplesmente **não será executado**.

### Pontos importantes da sintaxe:
- Ordem correta dos comandos
- Uso adequado de símbolos (`{}`, `()`, `""`, `''`)
- Pontuação (como `;`)
- Estrutura das instruções

⚠️ Um pequeno erro, como esquecer uma chave `}` ou usar aspas incorretas, pode quebrar todo o código.

✔️ Errar faz parte do aprendizado. O importante é praticar e aprender a interpretar os erros.

---

## Variáveis em JavaScript

Uma **variável** é um espaço na memória usado para armazenar dados que serão utilizados posteriormente.

### Analogia:
Imagine uma variável como um **baú com etiqueta**:
- A etiqueta → nome da variável
- O conteúdo → valor armazenado

### Exemplo:
```javascript
let nome = "Ana";
let idade = 25;
let saldoDisponivel = 1000;
````

### Estrutura de uma variável:

* **Nome:** identificador (ex: `nome`, `idade`)
* **Operador de atribuição:** `=`
* **Valor:** dado armazenado (texto, número, etc.)

---

## Exibindo Mensagens: `alert()`

A função `alert()` exibe uma mensagem em uma janela no navegador.

### Exemplo:

```javascript
alert("Estou aprendendo JavaScript");
```

### Como testar:

1. Abra o arquivo `app.js` no VS Code
2. Insira o código acima
3. Salve (`Ctrl + S`)
4. Atualize o navegador (`F5`)

---

## Entrada de Dados: `prompt()`

A função `prompt()` permite coletar informações do usuário.

### Exemplo:

```javascript
let nomeUsuario = prompt("Digite seu nome");
let idadeUsuario = prompt("Digite sua idade");
```

✔️ O valor digitado será armazenado em uma variável.

---

## Estruturas de Decisão (`if` e `else`)

As estruturas de decisão permitem executar diferentes ações com base em condições.

### Analogia:

Antes de fazer um sanduíche:

* Se tiver pão → faz sanduíche
* Se não tiver → faz outra coisa

### Exemplo em código:

```javascript
let temPao = prompt("Você tem pão em casa? (sim ou não)");

if (temPao === "sim") {
    alert("Fazer sanduíche");
} else {
    alert("Fazer miojo");
}
```

### Explicação:

* `prompt()` coleta a resposta
* O valor é armazenado na variável `temPao`
* `if` verifica a condição
* `else` executa alternativa

---

## Operadores de Comparação

São usados para comparar valores dentro das condições.

| Operador | Significado          | Exemplo      |
| -------- | -------------------- | ------------ |
| `>`      | Maior que            | idade > 18   |
| `<`      | Menor que            | idade < 18   |
| `>=`     | Maior ou igual       | idade >= 18  |
| `<=`     | Menor ou igual       | idade <= 18  |
| `===`    | Igual (valor e tipo) | idade === 18 |

### Importante:

* `===` verifica **valor e tipo**
* Evite usar `==`, pois pode gerar resultados inesperados

---

## Conclusão

* A sintaxe é essencial para o funcionamento do código
* Variáveis permitem armazenar dados
* `alert()` exibe informações
* `prompt()` coleta dados do usuário
* Estruturas condicionais controlam o fluxo do programa

💡 Programar é prática. Quanto mais você testa, erra e corrige, mais evolui.
