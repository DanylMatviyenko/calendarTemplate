import { renderCalendar } from "./renderCalendar";
import { dateFormatter } from "./utils";

export function createBtn() {
    let outputCalendar = document.querySelector(".outputCalendar");

    //кнопка add Vacation
    let vacationBtncell = document.createElement('td');
    vacationBtncell.classList.add('cell-btn');
    let vacationBtn = document.createElement('button');
    vacationBtncell.appendChild(vacationBtn);
    vacationBtn.classList.add('vacation-btn');
    outputCalendar.prepend(vacationBtncell);
    vacationBtn.innerHTML = '+ Add vacation';

};