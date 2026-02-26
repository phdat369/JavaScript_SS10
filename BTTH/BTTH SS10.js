let squad = [
    { id: 1, name: "Nguyen Van A", goals: 10, position: "FW" },
    { id: 2, name: "Tran Van B", goals: 5, position: "MF" },
    { id: 3, name: "Le Van C", goals: 0, position: "DF" },
    { id: 4, name: "Pham Van D", goals: 12, position: "FW" },
    { id: 5, name: "Dang Van E", goals: 0, position: "GK" }
];
let choice;
const listPlayer = (listPLayer) => {
    listPLayer.forEach((players) => {
        console.log(`Mã ${players.id} - ${players.name}(${players.position}): ${players.goals} bàn`);
    });
}
const addPlayer = (Player,newName,newGoal,newPosition) => {
    let newObject = { id: (Player.length+1), name: newName,goals: newGoal, position: newPosition};
    Player.push(newObject);
}
const filterPlayer = (Player,search) => {
    let searchID = Player.find((element) => {
        return (element.id) == search;
    });
    if(searchID) {
        console.log(searchID);
    }
    else {
        console.log("Không tìm thấy");
    }
}
const updatePlayers = (Player,goalPlayers) => {
    let searchID = Player.find((element) => {
        return (element.id) == goalPlayers;
    });
    if(searchID) {
        searchID.goals+=1;
        alert(`Đã cập nhật bàn thắng thành công cho cho cầu thủ ${searchID.name} thành ${searchID.goals}`)
    }
    else {
        alert("Không tìm thấy cầu thủ");
    }
}
const removePlayer = (Player,deletePlayer) => {
    let searchID = Player.find((element) => {
        return (element.id) == deletePlayer;
    });
    if(searchID != -1) {
        Player.splice(searchID,1);
        alert("Xóa thành công cầu thủ");
    }
    else {
        alert("Không tìm thấy cầu thủ");
    }
}
do {
    choice = +prompt(`--- FOOTBALL MANAGER PRO ---
1. Xem đội hình
2. Thêm cầu thủ
3. Tìm kiếm (theo ID)
4. Cập nhật bàn thắng
5. Xóa cầu thủ (Chuyển nhượng)
0. Thoát
Vui lòng chọn chức năng:`);
switch (choice) {
    case 1:
        listPlayer(squad);
        break;
    case 2:
        let newName = prompt("Nhập tên cầu thủ mới");
        let newGoal = prompt("Nhập số bàn thắng");
        let newPosition = prompt("Nhập vị trí mới");
        addPlayer(squad,newName,newGoal,newPosition);
        break;
    case 3:
        let search = +prompt("Nhập id cầu thủ bạn muốn tìm kiếm");
        filterPlayer(squad,search);
        break;
    case 4:
        let goalPlayers = +prompt("Nhập id cầu thủ vừa ghi bàn");
        updatePlayers(squad,goalPlayers);
        break;
    case 5:
        let deletePlayer = +prompt("Nhập id cầu thủ bạn muốn xóa khỏi đội")
        removePlayer(squad,deletePlayer);
        break;
    default:
        break;
}
} while (choice != 0);