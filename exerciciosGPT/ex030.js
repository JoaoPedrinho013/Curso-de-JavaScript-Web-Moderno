/**30 Crie uma função arrow que receba uma string e retorne a mesma string, mas com todas as letras maiúsculas transformadas em minúsculas e vice-versa. */




const seForMaiuscRetornMinusc = string => {
    let invertida = ""
    for (let indice = 0; indice < string.length; indice++) {
      let letra = string[indice]
      if (letra === letra.toUpperCase()) {
        invertida += letra.toLowerCase()
      } else {
        invertida += letra.toUpperCase()
      }
    }
    console.log(invertida)

}

seForMaiuscRetornMinusc('Olá, Mundo!')
seForMaiuscRetornMinusc('oLÁ, mUNDO!')