const url = 'https://600ff44f6c21e1001704fac2.mockapi.io/minor-web/api/squads/1/teams/1/members'

fetch(url)
  .then(
    (res) => {
      if (res.status !== 200) {
        console.log(`Error: status code ${res.status}`)
        return
      }

      res.json().then((data) => {
        console.log(data)
      })
    }
  )
  .catch((err) => {
    console.log(`Error: ${err}`)
  })