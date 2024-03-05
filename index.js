function gerarNumAle(min, max, numerosGerados) {
    var num;
    do {
      num = Math.floor(Math.random() * (max - min + 1)) + min;
    } while (numerosGerados.includes(num));
    return num;
  }

  function gerar50Numeros() {
    var numeros = [];
    var tabela = document.getElementById("tabelaNumeros");
    var tbody = tabela.getElementsByTagName("tbody")[0];
    tbody.innerHTML = "";

    for (var i = 0; i < 10; i++) {
      var tr = document.createElement("tr");
      for (var j = 0; j < 5; j++) {
        var numero = gerarNumAle(0, 100, numeros);
        numeros.push(numero);
        var td = document.createElement("td");
        td.textContent = numero;
        tr.appendChild(td);
      }
      tbody.appendChild(tr);
    }
  }

  function gerar6Numeros() {
    var numeros = [];
    var tabela = document.getElementById("tabelaNumeros6");
    var tbody = tabela.getElementsByTagName("tbody")[0];
    tbody.innerHTML = "";

    for (var i = 0; i < 1; i++) {
      var tr = document.createElement("tr");
      for (var j = 0; j < 6; j++) {
        var numero = gerarNumAle(0, 60, numeros);
        numeros.push(numero);
        var td = document.createElement("td");
        td.textContent = numero;
        tr.appendChild(td);
      }
      tbody.appendChild(tr);
    }
  }

  function gerar25Numeros() {
    var numeros = [];
    var tabela = document.getElementById("tabelaNumeros25");
    var tbody = tabela.getElementsByTagName("tbody")[0];
    tbody.innerHTML = "";

    for (var i = 0; i < 3; i++) {
      var tr = document.createElement("tr");
      for (var j = 0; j < 5; j++) {
        var numero = gerarNumAle(1, 25, numeros);
        numeros.push(numero);
        var td = document.createElement("td");
        td.textContent = numero;
        tr.appendChild(td);
      }
      tbody.appendChild(tr);
    }
  }