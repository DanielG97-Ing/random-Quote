const getRandomElement = (elements) => {
    const randomIndex = Math.floor(Math.random() * elements.length) // Math.random nos entrega un numero al azar entre 0-1, y se utiliza el math.floor para que el valor maximo sea el mismo a la cantidad de indices que tiene el json
    // console.log(randomIndex)
    const random = elements[randomIndex]
    return random
  }

const imageStarts = ["bg1", "bg2", "bg3", "bg4"]

  export {
    getRandomElement, imageStarts
  }