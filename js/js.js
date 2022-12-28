const btn = document.getElementById(`btn`);
const number = document.getElementById(`number`);
const card = document.getElementById(`card`);

const btn_closed = document.getElementById(`btn-closed`);

btn.addEventListener(`click`, ()=>{
    number.classList.add(`number--active`)

    setTimeout(() => {
        card.classList.add(`card--active`)
        btn_closed.classList.add(`btn-closed--active`)
    }, 1000);
})



btn_closed.addEventListener(`click`, ()=>{
    number.classList.remove(`number--active`)
    
    setTimeout(() => {
        card.classList.remove(`card--active`)
        btn_closed.classList.remove(`btn-closed--active`)
    }, 1000);
})