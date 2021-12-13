//Connecting ID's to new names
let characterRange = document.getElementById('characterRange')
let characterNumber = document.getElementById('characterNumber')
let useUppercaseElement = document.getElementById('useUppercase')
let useNumbersElement = document.getElementById('useNumbers')
let useSymbolsElement = document.getElementById('useSymbols')
let form = document.getElementById('passwordForm')
let ShowPassword = document.getElementById('ShowPassword')
//end

//Listen for the input for #'s
characterNumber.addEventListener('input', syncCharacterAmount)
characterRange.addEventListener('input', syncCharacterAmount)
//end

//Listen for submit click then...
form.addEventListener('submit', e => { e.preventDefault()
  const characterAmount = characterNumber.value
  const useUppercase = useUppercaseElement.checked
  const useNumbers = useNumbersElement.checked
  const useSymbols = useSymbolsElement.checked
  const password = generatePassword(characterAmount, useUppercase, useNumbers, useSymbols)
  ShowPassword.innerText = password
})
//end

//Set letters, numbers, and symbols to charCodes + arrays
let UPPERCASE_CHAR_CODES = arrayFromLowToHigh(65, 90)
let LOWERCASE_CHAR_CODES = arrayFromLowToHigh(97, 122)
let NUMBER_CHAR_CODES = arrayFromLowToHigh(48, 57)
let SYMBOL_CHAR_CODES = arrayFromLowToHigh(33, 47).concat(arrayFromLowToHigh(58, 64)).concat(arrayFromLowToHigh(91, 96)).concat(arrayFromLowToHigh(123, 126))
//end

//Set up function to generate password
function generatePassword(characterAmount, useUppercase, useNumbers, useSymbols) {
  var charCodes = LOWERCASE_CHAR_CODES
  if (useUppercase) charCodes = charCodes.concat(UPPERCASE_CHAR_CODES)
  if (useSymbols) charCodes = charCodes.concat(SYMBOL_CHAR_CODES)
  if (useNumbers) charCodes = charCodes.concat(NUMBER_CHAR_CODES)
  
  //Randomizer for password
  const passwordCharacters = []
  for (let i = 0; i < characterAmount; i++) {
    const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
    passwordCharacters.push(String.fromCharCode(characterCode))
  }
  return passwordCharacters.join('')
}
//end

//Produce Array
function arrayFromLowToHigh(low, high) {
  const array = []
  for (let i = low; i <= high; i++) {
    array.push(i)
  }
  return array
}
//end

//Syncing Range + Number
function syncCharacterAmount(e) {
  const value = e.target.value
  characterNumber.value = value
  characterRange.value = value
}
//end
