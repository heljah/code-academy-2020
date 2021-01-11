const wrappi = () => {
    let x = 'moi'
    const y = 'tätä arvoa ei voi muuttaa'
    var z = 'globaali muuttuja'
    
    console.log({x}, {y}, {z})
    const funkkis = () => {
      x = 'arvoa voi muuttaa'
      z = 'arvoa voi muuttaa'
      console.log({x}, {y}, {z})
    }
    funkkis()
}
wrappi()

console.log("Tänne ei voi tulostaa mitään muuttujia")
