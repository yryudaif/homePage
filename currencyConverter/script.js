const euroValue = document.getElementById("zoneTexte");
const yenValue = document.getElementById("result");
const yenCurrency = yenValue.innerHTML;
function show() {
	yenValue.innerHTML = yenCurrency + (euroValue.value * 166.66667);
};