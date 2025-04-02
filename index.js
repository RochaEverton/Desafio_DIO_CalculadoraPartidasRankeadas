<!DOCTYPE html>
<html>

<body>
<h1>Calculadora de Partidas Rankeadas</h1>
	<form>
        <label for="victory">Digite o número de vitórias:</label>
        <input type="number" id="numberVictories" name="numberVictory">
    </form><br>
    <form>
        <label for="defeats">Digite o número de derrotas:</label>
        <input type="number" id="numberDefeats" name="numberDefeat">
    </form><br>
    <button type="button" onclick="exibirQty()">Exibir Valores</button>
    <p id="qtyV"></p>
    <p id="qtyD"></p>
    <button type="button" onclick="rankPlayer()">Exibir Ranking</button>
    <p id="rank"></p>
   
<script>

function exibirQty(){
	let qtyVictories = document.getElementById("numberVictories").value;
	document.getElementById("qtyV").innerText = "Quantidade de Vitórias: " + qtyVictories;
    let qtyDefeats = document.getElementById("numberDefeats").value;
    document.getElementById("qtyD").innerText = "Quantidade de Derrotas: " + qtyDefeats;
}	
function rankPlayer(){
	let qtyVictories = document.getElementById("numberVictories").value;
	let qtyDefeats = document.getElementById("numberDefeats").value;
    saldoVitorias = qtyVictories - qtyDefeats;
    if (saldoVitorias <= 10) {
     nivel = "Ferro";
  	} else if (saldoVitorias > 10 && saldoVitorias <= 20) {
     nivel = "Bronze";
  	} else if (saldoVitorias > 20 && saldoVitorias <= 50) {
     nivel = "Prata";
  	} else if (saldoVitorias > 50 && saldoVitorias <= 80) {
     nivel = "Ouro";
  	} else if (saldoVitorias > 80 && saldoVitorias <= 90) {
     nivel = "Diamante";
  	} else if (saldoVitorias > 90 && saldoVitorias <= 100) {
     nivel = "Lendário";
  	} else if (saldoVitorias > 100) {
     nivel = "Imortal";
  	} else {
    	document.getElementById("rank").innerText = "O Herói tem mais derrotas que vitórias";
	}
	//exibe Ranking
	document.getElementById("rank").textContent = "O Herói tem saldo de " + saldoVitorias + " está no nível de " + nivel;


}

</script>
</body>

</html>
