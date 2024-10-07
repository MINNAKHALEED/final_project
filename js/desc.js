

const destinationLinks = document.querySelectorAll(
  `section ul li a`
);


const planetName = document.getElementById(`planetName`);

console.log(planetName)


const planetDescription = document.getElementById(`planetDescription`);


const distance = document.getElementById(`distance`);

const travelTime = document.getElementById(`travelTime`);


const planetImg = document.getElementById(`planetImg`);

const changingElements = document.querySelectorAll(`.changing`);
console.log(changingElements)





let DestTarget;

if (destinationLinks) {
  destinationLinks.forEach((link) => {
    
    link.addEventListener(`click`, () => {
      destinationLinks.forEach((link) => link.classList.remove(`moon`));
      link.classList.add(`moon`);

      
      changingElements.forEach((el) => (el.style.opacity = `0`));

    

      setTimeout(() => {
        DestTarget = link.dataset.index;

        fetch("/data.json")
          .then((res) => res.json())
          .then((data) => data.destinations)
          .then((data) => {
            planetName.innerHTML = data[DestTarget].name;
            return data;
            console.log(data)
          })
          .then((data) => {
            planetImg.src = data[DestTarget].images.webp;
            return data;
          })
          .then((data) => {
            planetDescription.innerHTML = data[DestTarget].description;
            return data;
          })
          .then((data) => {
            distance.innerHTML = data[DestTarget].distance;
            return data;
          })
          .then((data) => {
            return data;
          });

        setTimeout(() => {
          changingElements.forEach((el) => (el.style.opacity = `1`));
        }, 460);
      }, 280);
    });
  });
}













