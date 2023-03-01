var numsecreto = 21//parseInt(Math.random(1) * 1000)
var numchute = 0
var res = document.getElementById('res')
var palpites = document.getElementById('palpites')
palpites.innerHTML = ''
function ver() {
   var numus = document.getElementById('number') 
   var numusu = Number(numus.value)
   if (numus.value.length == 0 || numus.value > 1000 || numus.value == 0) {
      alert('Erro! Por favor, digite um número válido')
      numus.value = ''
      numus.focus()
   } else {
while (numusu != numsecreto || numchute == 10) {
    numchute++ 
    if (numsecreto > numusu) {
      res.innerHTML = `Você errou, o número secreto é maior que ${numusu}.`
      palpites.innerHTML = `Número de palpites: ${numchute}`
      numus.value = ''
      numus.focus()
      break 
    } else if (numsecreto < numusu) {
      res.innerHTML = `Você errou, o número secreto é menor que ${numusu}.`
      palpites.innerHTML = `Número de palpites: ${numchute}`
      numus.value = ''
      numus.focus()
      break
    } 
    } if (numchute >= 11) {
      alert(`Número máximo de tentativas alcançado! O número secreto era: ${numsecreto}`)
      window.location.reload(true)
      palpites.innerHTML = '' 
    } else if (numsecreto == numusu) {
      numchute++
      var esconder = document.getElementById('button').hidden(true)
      res.innerHTML = `Parabéns, Você acertou, o número secreto é ${numusu}. Você usou ${numchute} palpites.`
      palpites.innerHTML = ''
    } 
  } 
}
function pageload() {
   window.location.reload(true)
  }
  document.addEventListener("keypress", function(e) {
   if(e.key === 'Enter') {
       var btn = document.getElementById('button')
     btn.click()
   }
 })
