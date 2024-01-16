const variable = document.getElementsByTagName('li')

let x= 7
let y = 4
let z = 1

let d = x + y
variable[0].innerHTML = 'x + y is: ' + d

let e = y - z
variable[1].innerHTML = 'y - z is: ' + e

let f = x * z
variable[2].innerHTML = 'x * z is: ' + f

let g = z/y
variable[3].innerHTML = 'z/y is: ' + g

let h = x % y
variable[4].innerHTML = 'x % y is: ' + h