let card = document.getElementsByClassName("vintage-team_card");
console.log(card);

Array.from(card).forEach(v => {
    v.addEventListener("mouseover", changeCard);


});
Array.from(card).forEach(v => {
    v.addEventListener("mouseout", initialCard);


});

function initialCard() {

    this.style.backgroundColor = "#fff";
    this.style.color = "#000";
    this.children[2].style.visibility = "hidden";
    this.children[0].style.marginTop = "100px";
}

function changeCard(e) {
    console.log(this);
    console.log(this.children);
    this.style.backgroundColor = "#274a6c";
    this.style.color = "#fff";
    this.children[0].style.marginTop = "-100px";
    this.children[2].style.visibility = "visible";

}