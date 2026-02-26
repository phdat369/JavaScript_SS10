const player = {
    name: "Messi",
    posititon: "Forward",
    age: 36,
    goals: 25,
    assists: 15,
}
showPlayerInfor = (player) => {
    console.log(`Tên: ${player.name}
Vị trí: ${player.posititon}
Tuổi: ${player.age}
Bàn thắng mùa này: ${player.goals}
Kiến tạo mùa này: ${player.assists}
Tổng đóng góp: ${player.goals+player.assists}`);
}
showPlayerInfor(player);
