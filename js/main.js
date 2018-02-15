let $btn = document.querySelector('#fetch-button')

let $avatar = document.querySelector('#avatar')
let $fullname = document.querySelector('#full-name')
let $username = document.querySelector('#username')
let $email = document.querySelector('#email')
let $city = document.querySelector('#city')


let url = 'https://randomuser.me/api'


// initial fetch and update UI
getUserAndUpdate()

// ====== Utility Functions ======
function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1)
}



// ====== Fetch functions ======
function handleErrors(response) {
  if (!response.ok) {
    throw Error('Custom Error: 404')
  }
  return response
}

function updateProfile(data) {
  let info = data.results[0]

  $avatar.src = info.picture.medium
  $fullname.innerText = `${capitalize(info.name.first)} ${capitalize(info.name.last)}`
  $username.innerText = info.login.username
  $email.innerText = info.email
  $city.innerText = info.location.city
}

function printError(err) {
  console.log(err)
}


function getUserAndUpdate() {
  fetch(url)
    .then(handleErrors)
    .then(response => response.json())
    .then(updateProfile)
    .catch(printError)
}

// ====== Button Click Listener ======
$btn.addEventListener('click', () => {

  getUserAndUpdate()


})
