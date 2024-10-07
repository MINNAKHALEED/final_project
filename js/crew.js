const crewLinks = document.querySelectorAll('section ul li a')
console.log(crewLinks)

const crewName = document.getElementById('crewName')
console.log(crewName)

const crewDescription = document.getElementById('crewDescription')
console.log(crewDescription)

const crewImg = document.getElementById('crewImg')
console.log(crewImg)

const crewRole = document.getElementById('crewRole')
console.log(crewRole)

const changingElements = document.querySelectorAll('.changing')
console.log(changingElements)

let crewTarget;

if (crewLinks) {
  
crewLinks.forEach((link) => {

link.addEventListener("click", () => {
  crewLinks.forEach((link) => {link.classList.remove('dot')});

link.classList.add('dot')

changingElements.forEach((el) => {el.style.opacity = `0`});


setTimeout(() => {
crewTarget = link.dataset.index;

fetch("/data.json")

.then((res) => res.json())

.then((data) => data.crew)

.then((data) => {
  crewImg.src = data[crewTarget].images.webp;
  return data;
})

.then ((data) => {
  crewName.innerHTML = data[crewTarget].name;
  return data;
})

.then ((data) => {
  crewRole.innerHTML = data[crewTarget].role;
  return data;
})

.then ((data) => {
  crewDescription.innerHTML = data[crewTarget].bio;
  return data;
})

setTimeout(() => {
  changingElements.forEach((el) => { el.style.opacity = `1` });
}, 460);

  
}, 280);


})


});

}




