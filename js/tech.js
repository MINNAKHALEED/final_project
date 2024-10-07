const techLinks = document.querySelectorAll('section ul li a')
console.log(techLinks)

const techName = document.getElementById('techName')
console.log(techName)

const techDescription = document.getElementById('techDescription')
console.log(techDescription)

const techImgP =document.getElementById("techImgP")
console.log(techImgP)

const changingElements = document.querySelectorAll('.changing')
console.log(changingElements)


let techTarget;

if (techLinks) {
  techLinks.forEach((link) => {
    
link.addEventListener("click", () => {
  techLinks.forEach((link) => {link.classList.remove('number')});

  link.classList.add('number')

changingElements.forEach((el) => {el.style.opacity = '0'});


setTimeout(() => {

techTarget = link.dataset.index;

fetch("/data.json")

.then( (res) => res.json())

.then( (data) => data.technology)

.then( (data) => {
  techImgP.src = data[techTarget].images.portrait;
  return data;
})

.then( (data) => {
  techName.innerHTML = data[techTarget].name;
  return data;
})

.then( (data) => {
  techDescription.innerHTML = data[techTarget].description;
  return data;
})

setTimeout(() => {
  changingElements.forEach((el) => {
    el.style.opacity = '1'
  });
}, 460);




  
}, 280);



})


  });
}






