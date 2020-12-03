import { renderCalendar } from "./renderCalendar";
import { createBtn } from "./createBtn";



let currentDate = new Date();

renderCalendar(currentDate);
createBtn();



// const departmentTeams = [{
//     name: "Frontend Team",
//     percentageOfAbsent: 0,
//     members: [{ name: "FE_Team_User1" }],
// }, ];