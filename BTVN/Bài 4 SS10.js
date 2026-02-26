const players = [
    { name: "Messi", years: 18, salary: 100 },
    { name: "Ronaldo", years: 20, salary: 95 },
    { name: "Neymar", years: 12, salary: 90 },
    { name: "Mbappe", years: 7, salary: 85 },
    { name: "Haaland", years: 5, salary: 80 },
    { name: "Modric", years: 22, salary: 70 },
    { name: "Benzema", years: 19, salary: 75 },
];
const analyzeSalary = (minYears, teamPlayers) => {
    let newObject = {};
    let listPlayer = teamPlayers.filter((element) => {
        return element.years >= minYears;
    });
    let sumSalary = listPlayer.reduce((acc, crr) => {
        return acc += crr.salary;
    },0);
    newObject.totalSalary = sumSalary;
    newObject.highestPaid;
    newObject.lowestPaid;
    if (listPlayer.length == 0) {
        newObject.highestPaid = null;
        newObject.lowestPaid = null;
    }
    else {
        let max = listPlayer[0];
        let min = listPlayer[0];
        listPlayer.forEach((element) => {
            if (element.salary >= max.salary) {
                max = element;
            }
            if (element.salary <= min.salary) {
                min = element;
            }
        });
        newObject.highestPaid = max;
        newObject.lowestPaid = min;
    }
    console.log(newObject);
}
analyzeSalary(10, players);
analyzeSalary(30, players);