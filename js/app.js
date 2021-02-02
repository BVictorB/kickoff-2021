const 
  url = 'https://600ff44f6c21e1001704fac2.mockapi.io/minor-web/api/squads/1/teams/1/members',
  container = document.querySelector('main'),
  browserType = window.navigator.userAgent,
  correctBrowser = browserType.includes('Chrome') || browserType.includes('Firefox')

fetch(url)
  .then(
    (res) => {
      res.json().then((data) => {
        createNameElements(data)
        correctBrowser ? createCardAnimations() : tellTheUserAboutTheirReallyShittyBrowser()
      })
    }
  )
  .catch((err) => {
    console.log(`Error: ${err}`)
  })

const createNameElements = (data) => {
  data.forEach(data => {
    const anchor = document.createElement('a')
    anchor.href = data.url
    anchor.target = '_blank'

    const person = document.createElement('div')
    person.classList.add('card')

    const image = document.createElement('img')
    image.src = data.mugshot
    person.appendChild(image)

    const name = document.createElement('h2')
    name.innerHTML = data.name
    person.appendChild(name)

    anchor.appendChild(person)
    container.appendChild(anchor)
  })
}

const createCardAnimations = () => {
  const cards = document.querySelectorAll('.card')

  const transformCard = (e) => {
    const 
      height = e.target.clientHeight,
      width = e.target.clientWidth,
      rotationY = 20 * ((e.layerX - width / 2) / width),
      rotationX = -20 * ((e.layerY - height / 2) / height)

    e.target.style.transform = `perspective(1000px) scale(1.1) rotateX(${rotationX}deg) rotateY(${rotationY}deg)`
  }

  cards.forEach(card => {
    card.addEventListener('mousemove', transformCard)
    card.addEventListener('mouseout', () => {
      card.style.transform = 'perspective(1000px) scale(1) rotateX(0) rotateY(0)'
    })
  })
}

const tellTheUserAboutTheirReallyShittyBrowser = () => {
  alert('Please use a proper browser like Firefox or Chrome to get the most out of this website')
}