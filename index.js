// let displayEl = document.querySelector('.display')
// let downBtn = document.querySelector('.down-btn')
// let upBtn = document.querySelector('.up-btn')

// let count = 100

// displayEl.textContent = count

// upBtn.addEventListener('click', function () {
//   count++
//   displayEl.textContent = count
//   upBtn.textContent = `+ ${count + 1}`
//   downBtn.textContent = `- ${count - 1}`
// })

// downBtn.addEventListener('click', function () {
//   count--
//   displayEl.textContent = count
//   upBtn.textContent = `+ ${count + 1}`
//   downBtn.textContent = `- ${count - 1}`
// })

let state = {
  count: 10,
  user: {
    name: 'Aang',
    avatar:
      'https://static.wikia.nocookie.net/avatar/images/2/21/Aang_looking_innocent.png/revision/latest/top-crop/width/360/height/450?cb=20150813142907',
  },
}

// put stuff on the page
// to make sure the stuff on the page is up to date
function render() {
  document.body.textContent = ''

  let userNameEl = document.createElement('h2')
  userNameEl.textContent = `Hello, ${state.user.name}!`

  let displayEl = document.createElement('h1')
  displayEl.className = 'display'
  displayEl.textContent = state.count

  let buttonsSection = document.createElement('div')

  let downBtn = document.createElement('button')
  downBtn.className = 'down-btn'
  downBtn.textContent = `- (${state.count - 1})`
  downBtn.addEventListener('click', function () {
    // update state
    state.count--
    // rerender
    render()
  })

  let upBtn = document.createElement('button')
  upBtn.className = 'up-btn'
  upBtn.textContent = `+ (${state.count + 1})`
  upBtn.addEventListener('click', function () {
    // update state
    state.count++
    // rerender
    render()
  })

  buttonsSection.append(downBtn, upBtn)
  document.body.append(userNameEl, displayEl, buttonsSection)
}

render()
