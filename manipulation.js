const label = document.querySelector('h1')
const fullname = label.textContent

//const lists = document.getElementsByTagName('li')
const lists = document.querySelectorAll('ol li')

//length of a string
lists[0].textContent += fullname.length

//touppercase method
lists[1].innerHTML += `<strong>${fullname.toUpperCase()}</strong>`

lists[2].innerHTML += `<strong>${fullname.toLowerCase()}</strong>`

//charAt method
lists[3].textContent += `character at index "8": ` + fullname.charAt(8).toUpperCase()

//substring method
lists[4].innerHTML += `extract a substring from the original string "d": ` + fullname.substring('d')

//replace
lists[5].innerHTML += `replace "joseph" with "leonard": ` + fullname.replace('joseph', 'leonard')

//indexOf
lists[6].innerHTML += `The index of letter "l" is: ${fullname.indexOf('l')}`


lists[7].textContent = 'ayodele'

//concat
lists[8].textContent += `The fullname starts with: ` .concat(ogunsanya, 'welcomeback')

lists[9].innerHTML = `if the length is greater then: ${fullname.length}`