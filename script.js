function convertendoDolar() {
  let t1 = document.getElementById("num");
  let res = document.getElementById("res");
  let moedas = document.getElementById("moedas");
  if (moedas.value[0] == "$") {
    let n = Number(t1.value);
    let convert = n * 5.08;
    res.innerHTML = `Convertido em Dólar: ${convert}`;
  } else if (moedas.value[1] == "Є") {
    let n = Number(t1.value);
    let convert = n * 5.56;
    res.innerHTML = `Convertido em Euro: ${convert.toFixed(2)}`;
    console.log(res);
  } else {
    let n = Number(t1.value);
    let convert = n * 6.64;
    res.innerHTML = `Convertido em Libra: ${convert.toFixed(2)}`;
  }
}
