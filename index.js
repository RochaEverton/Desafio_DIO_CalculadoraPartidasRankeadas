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
    if(saldoVitorias <= 0){
    	document.getElementById("rank").innerText = "O Herói tem mais derrotas que vitórias";
    } else if (saldoVitorias < 10){
        document.getElementById("rank").innerText = "O Herói tem de saldo de " + saldoVitorias + " está no nível de Ferro";
    } else if (saldoVitorias >= 11 && saldoVitorias < 20){
        document.getElementById("rank").innerText = "O Herói tem de saldo de " + saldoVitorias + " está no nível de Bronze";
    }
}	

</script>
</body>

</html>
