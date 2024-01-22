const container = document.querySelector(".container");
const seats = document.querySelectorAll(".row .seat:not(.occupied)");
const count = document.querySelector("#count");
const total = document.querySelector("#total");
const movieSelect = document.querySelector("#movie");

let Price = +movieSelect.value;
// console.log(Price)

const updateSelectedCount = () =>{
    const selectedSeats = document.querySelectorAll(".row .seat.selected");
    // console.log(selectedSeats)
    const selectedSeatsCount = selectedSeats.length;
    count.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCount *  Price ;

}
movieSelect.addEventListener("change", e => {
    Price = +e.target.value;
    updateSelectedCount();

})

container.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("seat") &&
    !e.target.classList.contains("occupied")
  ) {
    e.target.classList.toggle("selected");
    updateSelectedCount();
  }
});

