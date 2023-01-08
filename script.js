let a = 2
b = 3
step = 0.1
sum = 0
array = []

const aInput = document.querySelector('#a')
const bInput = document.querySelector('#b')
const stepInput = document.querySelector('#step')
const submit = document.querySelector('#submit')

aInput.setAttribute('value', a)
bInput.setAttribute('value', b)
stepInput.setAttribute('value', step)


submit.addEventListener('click', () => {
  a = parseInt(aInput.value)
  b = parseInt(bInput.value)
  step = parseFloat(stepInput.value)
  console.log(a, b, step)

  intgrl(a, b, step)
})


function numberWithSpaces(x) {
  x = x.toString();
  var pattern = /(-?\d+)(\d{3})/;
  while (pattern.test(x))
    x = x.replace(pattern, "$1 $2");
  return x;
}


function intgrl(x, b, step) {
  // we measure time 
  // start
  const start = new Date().getTime()

  array = []
  sum = 0

  while (x <= b) {
    console.log("X1 = " + x)
    x1 = x + 0.5 * step
    y1 = x1 * x1
    array.push(step * y1)
    sum += step * y1
    console.log('sum = ' + sum)
    console.log('step = ' + step + " x = " + x)
    x = x + step
    console.log("asdf " + x);
  }


  const end = new Date().getTime()
  console.log('calculations have done')

  console.log(array);
  document.querySelector('#result').innerHTML = sum
  document.querySelector('#time-c').innerHTML = end - start + "ms"
  document.querySelector('#amountOfCalc').innerHTML = numberWithSpaces(array.length)


  // creating HTML table
  const startH = new Date().getTime()
  let content = ''
  let table = document.querySelector('tbody')
  for (j = 0; j < array.length; j++) {
    if (j % 6 == 0 && j != 0) {
      content += '</tr>'
      content += '<tr>'
    } else if (j % 6 == 0 && j == 0) {
      content += '<tr>'
    }

    content += '<td>' + array[j] + '</td>'
  }

  table.innerHTML = content
  const endH = new Date().getTime()
  document.querySelector('#time-h').innerHTML = endH - startH + "ms"
}

