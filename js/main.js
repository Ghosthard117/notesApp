// wrap DOM elements
const notesContainer = document.querySelector('.notes-container'),
createBtn = document.querySelector('.create-btn')
let notes = document.querySelectorAll('.input-box')

// show notes
function showNotes() {
  notesContainer.innerHTML = localStorage.getItem('notes')
}
showNotes()

// save data in localStorage
function saveStorage() {
  localStorage.setItem('notes', notesContainer.innerHTML)
}

// create note area
createBtn.addEventListener('click', () => {
  let inputBox = document.createElement('p')
  let img = document.createElement('img')
  inputBox.className = 'input-box'
  inputBox.setAttribute('contenteditable',true)
  img.src = '/notes-app/img/delete.png'
  notesContainer.appendChild(inputBox).appendChild(img)
})

// delete note
notesContainer.addEventListener('click', e => {
  if (e.target.tagName === 'IMG') {
    e.target.parentElement.remove()
    saveStorage()
  } 
  else if (e.target.tagName === 'P') {
    notes = document.querySelectorAll('.input-box')
    notes.forEach(nt => {
      nt.onkeyup = () => {
        saveStorage();
      }
    })
  }
})

// add spaces
document.addEventListener('keydown', event => {
  if (event.key === 'ENTER') {
    document.execCommand('insertLineBreak')
    event.preventDefault()
  }
})