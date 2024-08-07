// // สร้าง class
// class User {
//   // property or attribute
//   name = "chawanwit";
//   password = 1234;
// }

// // สร้าง object
// const user1 = new User();
// user1.name = "mek";     // เปลี่ยน property ได้ โดยการกำหนดใหม่
// user1.password = 5678;
// console.log(user1.name);
// console.log(user1.password);

// const user2 = new User();
// console.log(user2.name);
// console.log(user2.password);
// // --------------------------------------------------------------

// class User {
//   name = "Avatar";
//   password = 1234;

//   //   // ***default constructor (ไม่ได้ระบุ parameter)
//   //   constructor(){                           // constructor จะทำงานเมื่อมีการสร้าง object แต่ละอัน
//   //     console.log("เรียกใช้งาน Constructor")
//   //   }

//   // ***parameter constructor
//   constructor(n, p) {
//     console.log("เรียกใช้งาน Constructor");
//     this.name = n;                              // เรียกใช้งาน property ภายใน class >>> this.propertyName , เรียกใช้งานภายนอก class >>> obj_name.propertyName
//     this.password = p;
//   }
// }

// // สร้าง object
// const user1 = new User("Mek", 123);
// console.log(user1.name)                         // เรียกใช้งาน property ภายนอก class >>> obj_name.propertyName , เรียกใช้งานภายใน class >>> this.propertyName
// console.log(user1.password)
// const user2 = new User("Jane", 456);
// console.log(user2.name)
// console.log(user2.password)
// const user3 = new User("Jojo", 789);
// console.log(user3.name)
// console.log(user3.password)
// // ----------------------------------------------------------------

class User {
  name = "Avatar";
  password = 1234;
  constructor(n, p) {
    console.log("เรียกใช้งาน Constructor");
    this.name = n;
    this.password = p;
    this.showDetail();     // เรียกใช้งาน method ภายใน class >>> this.methodName , เรียกใช้งานภายนอก class >>> obj_name.methodName
  }

  // ***method
  showDetail() {
    console.log(`ชื่อผู้ใช้ : ${this.name} , รหัสผ่าน : ${this.password}`);
  }
}

const user1 = new User("Mek", 123);
const user2 = new User("Jane", 456);
const user3 = new User("Jojo", 789);

user1.showDetail();
user2.showDetail();
user3.showDetail();
