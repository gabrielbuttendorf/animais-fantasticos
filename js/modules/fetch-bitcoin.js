export default function fetchBitcoin(url, target) {
  fetch(url)
    .then((response) => response.json())
    .then((jsonBitcoin) => {
      const valorBitcoin = jsonBitcoin.BRL.buy;
      const btcPreco = document.querySelector(target);
      const valorDoacao = 1000 / valorBitcoin;

      btcPreco.innerText = valorDoacao.toFixed(4);
    })
    .catch((erro) => {
      console.log(Error(erro));
    });
}
