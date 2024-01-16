
let fullname = "Ogunsanya ayodele joseph"

//const lists = document.getElementsByTagName('li')
// const lists = document.querySelectorAll('ol li')

//length of a string
// lists[0].textContent += fullname.length
console.log("The length of the name", fullname.length)  

//touppercase method
// lists[1].innerHTML += `<strong>${fullname.toUpperCase()}</strong>`
console.log("To uppercase", fullname.toUpperCase())

//touppercase method
// lists[2].innerHTML += `<strong>${fullname.toLowerCase()}</strong>`
console.log("To lowercase", fullname.toLowerCase())

//charAt method
// lists[3].textContent += `character at index "8": ` + fullname.charAt(8).toUpperCase()
console.log("Character at index '8' is", fullname.charAt(8))

//substring method
// lists[4].innerHTML += `extract a substring from the original string "d": ` + fullname.substring(1,7)
console.log("replace substring from index 1 to 8", fullname.substring(1, 8))

//updated string
let updatedstring = fullname.replace("e", "a")
console.log("updated string:", updatedstring)

//replace
// lists[5].innerHTML += `replace "joseph" with "leonard": ` + fullname.replace('joseph', 'leonard')
console.log("Replace 'joseph' with 'leonard' is", fullname.replace('joseph', 'leonard'))

//indexOf
// lists[6].innerHTML += `The index of letter "l" is: ${fullname.indexOf('l')}`
// console.log("The index of letter 'l' is", fullname.indexOf('l'))
let position = fullname.indexOf("l")
console.log("position of 'e' :", position)


// lists[7].textContent = 'ayodele'

//concat
// lists[8].textContent += `The fullname starts with: ` .concat(ogunsanya, 'welcomeback')
let greeting = "Welcome Back, "
let combineResult = greeting.concat(fullname)
console.log("combine result:", combineResult)

let isLengthGreaterThanSeven = fullname.length > 7
console.log("is the length greater than 7?", isLengthGreaterThanSeven)

// lists[9].innerHTML = `if the length is greater then: ${fullname.length}`