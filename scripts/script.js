const adultos = document.querySelector("#adultos");
const criancas = document.querySelector("#criancas"); //crianças valem 0,5 adultos em consumo
const duracao = document.querySelector("#duracao");
const button = document.querySelector("#button");
const resultado = document.querySelector("#resultado");

function calculoChurrasco() {
 const criancasValor = criancas.value * 0.5; //crianças valem 0,5 adultos em consumo
 const adultosValor = adultos.value;
 const duracaoValor = duracao.value;
 quantidadeDeCarne();
 quantidadeDeCerveja();
 quantidadeDeRefrigerante();

 function quantidadeDeCarne() {
  //carne 400gr-pessoa / 6h+ 650gr
  let carne;
  if (duracaoValor > 6) {
   carne = adultosValor * 0.65 + criancasValor * 0.65;
  } else {
   carne = adultosValor * 0.4 + criancasValor * 0.4;
  }
  carne = carne.toFixed(1);
  resultado.innerHTML = `<p> Serão consumidos ${carne} KG de carne.</p>`;
 }

 function quantidadeDeCerveja() {
  //cerveja 1200ml-pessoa/6h+2000
  let cerveja;
  if (duracaoValor > 6) {
   cerveja = adultosValor * 2;
  } else {
   cerveja = adultosValor * 1.2;
  }
  cerveja = cerveja.toFixed(1);
  resultado.innerHTML += `<p>Serão consumidos ${cerveja} L de cerveja.</p>`;
 }

 function quantidadeDeRefrigerante() {
  //refrigerante-1000ml/6h+1500ml
  let refrigerante;
  if (duracaoValor > 6) {
   refrigerante = criancasValor * 1.5;
  } else {
   refrigerante = criancasValor * 1;
  }
  refrigerante = refrigerante.toFixed(1);
  resultado.innerHTML += `<p>Serão consumidos ${refrigerante} L de refrigerante.</p>`;
 }
 criancas.value = "";
 adultos.value = "";
 duracao.value = "";
}
button.onclick = calculoChurrasco;