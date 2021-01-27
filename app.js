let stars = document.querySelectorAll(".rating div");

//Pour chaque étoiles
for (const star of stars) {
  star.addEventListener("click", (e) => {
    let niveau = e.target.parentElement.classList.value;
    niveau = niveau.match(/\d+/g);

    //on remet toutes les étoiles en mode vide
    for (const star of stars) {
      star.innerHTML = "<i class='far fa-star'></i>";
    }

    //on remplit selon la position
    for (let i = niveau; i > 0; i--) {
      stars[i - 1].innerHTML = "<i class='fas fa-star'></i>";
    }
  });
}
