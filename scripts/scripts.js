function generatePrice() {
  randomNumber = Math.random() * 100
  return (Math.random() * 100).toFixed(2)
}

function generateName() {
  const names = ['Iphone', 'Samsung', 'Motorola', 'Xiaomi', 'Oppo', 'Vivo']
  randomNames = Math.floor(Math.random() * names.length)
  return names[randomNames]
}

function generateDescription() {
  const desc = ['Branco', 'Azul Meia-noite', 'Gold', 'Rose Gold', 'Verde', 'Coral', 'Vermelho']
  randomDesc = Math.floor(Math.random() * desc.length)
  return desc[randomDesc]
}

async function generateImage() {
  return fetch('https://api.thecatapi.com/v1/images/search')
    .then((response) => response.json())
    .then((data) => data[0].url)
}

async function placeCellCard() {
  const cardGrid = document.getElementById('cards-grid')

  const cellName = generateName()
  const cellDesc = generateDescription()
  const cellPrice = generatePrice()
  const image = await generateImage()

  const card = `
    <div class="card">
        <img alt="Cell" src="${image}">
        <h4>Marca: ${cellName}</h4>
        <p class="description">${cellDesc}</p>
        <div>
            <p class="price">Valor: $${cellPrice}</p>
        </div>
    </div>
    `

  cardGrid.innerHTML += card
}

document.addEventListener('DOMContentLoaded', async function () {
  for (let i = 0; i < 44; i++) {
    placeCellCard()
  }
})
