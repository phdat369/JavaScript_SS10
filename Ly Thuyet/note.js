let array = []; //Thông qua index
console.log(typeof array);

//object: Thuộc tính (key : value)
//key tương tự như tên của thuộc tính
//value tương tụ như giá trị của thuộc tính

//khởi tạo object
let person = {

};
let person_v2 = {
    id: 0,
    fullName: "Đạt",
    age: 19,
    sex: "Male",
};
console.log(person_v2);

//CRUD : Create - Read - Update - Delete

//Create
person_v2.email = "datdz@gmail.com";
person_v2.handleSay = () => {
    console.log("Xin chào các bạn mình là đạt");   
}
console.log(person_v2.handleSay());

//Read
//Có 2 cach lấy dữ liệu ra màn hình (Dot notation và Bracket notation)
// Cách 1: Dot notation
console.log(`Tên của bạn là ${person_v2.fullName}`);
//Cách 2: Bracket notation
console.log(`Tên của bạn là ${person_v2["fullName"]}`);

//Update
person_v2.age = 100;

//Delete
delete person_v2.age;

let animalDog = {
    name: "Join",
    age: 2,
};
let animalCat = {
    ...animalDog,
    id: 0,
};

//Array Object
const player = [
    {id:0, name:"dat", age:19, goal:-1},
    {id:1, name:"hehe", age:18, goal:10}
]
//in ra màn hình các cầu thủ phản lưới nhà
let listPLayerOg = player.filter((element) => {
    return element.goal < 0;
});
console.log(listPLayerOg);
//hiện thỉ theo format Tên - Số bàn thắng phản lưới
listPLayerOg.forEach((element) => {
    console.log(`${element.name} : ${element.goal}`);
});

//Object Lồng
let person_v3 = {
    id:1,
    fullName: {
        firstName: "Đạt",
        lastName: "bé bỏng",
    },
}
console.log(person_v3.fullName.firstName);

//Duyệt qua object
 console.log(Object.keys(person_v2)); // ==> trả về 1 mảng mới  || lấy tất cả key
 console.log(Object.values(person_v2));// ==> trả về 1 mảng mới || lất tất cả value
 console.log(Object.entries(person_v2));// tách các thuộc tính thành 1 mảng
 
 
 


