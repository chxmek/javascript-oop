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

// class User {
//   name = "Avatar";
//   password = 1234;
//   constructor(n, p) {
//     console.log("เรียกใช้งาน Constructor");
//     this.name = n;
//     this.password = p;
//     this.showDetail();     // <เรียกใช้คล้าย property> เรียกใช้งาน method ภายใน class >>> this.methodName , เรียกใช้งานภายนอก class >>> obj_name.methodName
//   }

//   // ***method
//   showDetail() {
//     console.log(`ชื่อผู้ใช้ : ${this.name} , รหัสผ่าน : ${this.password}`);
//   }
// }

// const user1 = new User("Mek", 123);
// const user2 = new User("Jane", 456);
// const user3 = new User("Jojo", 789);

// user1.showDetail();
// user2.showDetail();
// user3.showDetail();
// //  ----------------------------------------------------------------

// ***Encapsulation(การห่อหุ้ม) >> Access Modifier >> 1.Public: ประกาศเป็นสาธารณะ, 2.Protected(_property/_method): ประกาศระดับเข้าถึงแบบสืบทอด(inheritance)เช่น เพื่อนในเฟสสามารถเห็นโพส, 3.Private(#property/#method): ประกาศระดับเข้าถึงแบบเข้มงวดเช่น แค่เจ้าของโพสเท่านั้น
// class User {
//   // **public
//   name
//   password
//   constructor(n, p) {
//     this.name = n;
//     this.password = p;
//   }

//   showDetail() {
//     console.log(`ชื่อผู้ใช้ : ${this.name} , รหัสผ่าน : ${this.password}`);
//   }
// }

// const user1 = new User("Mek", 123);
// user1.name = "Mek*Hacker*";         // โดน hack ง่ายๆ
// user1.password = "5555";
// user1.showDetail();
//  //  ----------------------------------------------------------------
// class User {
//   // **private
//   #name
//   #password
//   constructor(n, p) {
//     this.#name = n;
//     this.#password = p;
//   }

//   showDetail() {
//     console.log(`ชื่อผู้ใช้ : ${this.#name} , รหัสผ่าน : ${this.#password}`);
//   }
// }

// const user1 = new User("Mek", 123);
// user1.name = "Mek*Hacker*";         // โดน hack ยาก
// user1.password = "5555";
// user1.showDetail();
// // ----------------------------------------------------------------

// ***Getter, Setter <Method>(กรณีที่กำหนดค่า property เป็น private) >> Getter: ดึงค่าใน property มาใช้, Setter: เปลี่ยนแปลงค่าใน property
// class User {
//   // private
//   #name;
//   #password;
//   constructor(n, p) {
//     this.#name = n;
//     this.#password = p;
//   }
//   showDetail() {
//     console.log(`ชื่อผู้ใช้ : ${this.#name} , รหัสผ่าน : ${this.#password}`);
//   }
//   // **setter
//   setName(newName) {
//     this.#name = newName;           // กำหนดหรือเปลี่ยนค่า property (เปลี่ยน name)
//   }
//   setPassword(newPassword) {
//     this.#password = newPassword;   // กำหนดหรือเปลี่ยนค่า property (เปลี่ยน password)
//   }
//   // **getter
//   getName() {
//     return this.#name;              // ดึง property มาใช้งานโดยเฉพาะ (ดึง name)
//   }
//   getPassword() {
//     return this.#password;          // ดึง property มาใช้งานโดยเฉพาะ (ดึง password)
//   }
// }

// const user1 = new User("Mek", 123);

// user1.setName("Mek Chawanwit");
// user1.setPassword("456");
// user1.showDetail();
// console.log(user1.getName());
// console.log(user1.getPassword());
// //  ----------------------------------------------------------------

// ***Accessor >> ตำสั่งที่ช่วยให้สามารถจัดการ property ได้ง่ายมากขึ้น
// ***โดยสามารถกำหนดได้ว่าต้องการทำงานกับ property ใด มีองค์ประกอบ 2 ส่วนคือ
// ***1.Get >> ตัวช่วยสำหรับเรียกดูข้อมูลใน property 2.Set >> ตัวช่วยสำหรับกำหนดหรือเขียนข้อมูลใน property
// class User {
//   #name;
//   #password;
//   constructor(n, p) {
//     this.#name = n;
//     this.#password = p;
//   }
//   showDetail() {
//     console.log(`ชื่อผู้ใช้ : ${this.#name} , รหัสผ่าน : ${this.#password}`);
//   }
//   // **setter ในรูปแบบของ accessor
//   set Name(newName) {
//     this.#name = newName;
//   }
//   set Password(newPassword) {
//     this.#password = newPassword;
//   }
//   // **getter ในรูปแบบของ accessor
//   get Name() {
//     return this.#name;
//   }
//   get Password() {
//     return this.#password;
//   }
// }

// const user1 = new User("Mek", 123);
// user1.Name = "Mek Chawanwit"          // กำหนดค่าและเรียกใช้งาน setter method Name
// user1.Password = "456"                // กำหนดค่าและเรียกใช้งาน setter method Password
// console.log(user1.Name)               // แสดง name จาก getter method Name
// console.log(user1.Password)           // แสดง password จาก getter method Password
//                                       // *hint ถ้าไม่มีเครื่องหมาย '=' แสดงว่าเป็นการใช้ getter ค่ามา
// //  ----------------------------------------------------------------

// ***Static >> กำหนดการเข้าถึง property หรือ method ภายใน class ได้โดยตรง ไม่ต้องสร้าง object
// class User {
//   #name;
//   #password;
//   static type = "ผู้ใช้งานระบบ";         // กำหนดเป็น static >> property type นี้จะสามารถเข้าถึงได้ผ่านการอ้างอิงชื่อ class แทนการอ้างอิงชื่อ object

//   constructor(n, p) {
//     this.#name = n;
//     this.#password = p;
//   }
//   showDetail() {
//     console.log(`ชื่อผู้ใช้ : ${this.#name} , รหัสผ่าน : ${this.#password}`);
//   }
//   // **setter ในรูปแบบของ accessor
//   set Name(newName) {
//     this.#name = newName;
//   }
//   set Password(newPassword) {
//     this.#password = newPassword;
//   }
//   // **getter ในรูปแบบของ accessor
//   get Name() {
//     return this.#name;
//   }
//   get Password() {
//     return this.#password;
//   }

//   static showType() {
//     console.log("ฉันเป็นผู้ใช้งานระบบ")
//   }
// }

// const user1 = new User("Mek", 123);
// console.log(User.type);                // แสดงค่า property(static) ผ่าน class
// User.showType();                       // เรียกใช้งาน method(static) ผ่าน class
// //  ----------------------------------------------------------------

// ***Static >> ประยุกต์
// class User {
//   #name;
//   #password;
//   static database = [];         // กำหนดเป็น static
//                                 // *hint static property ต้องใช้กับ static method เหมือนกัน
//   constructor(n, p) {
//     this.#name = n;
//     this.#password = p;
//   }

//     showDetail() {
//     console.log(`ชื่อผู้ใช้ : ${this.#name} , รหัสผ่าน : ${this.#password}`);
//   }

//   // **setter ในรูปแบบของ accessor
//   set Name(newName) {
//     this.#name = newName;
//   }
//   set Password(newPassword) {
//     this.#password = newPassword;
//   }
//   // **getter ในรูปแบบของ accessor
//   get Name() {
//     return this.#name;
//   }
//   get Password() {
//     return this.#password;
//   }

//   static addUser(newUser) {             // สร้าง static method
//     this.database.push(newUser);
//   }
// }

// // สร้าง user
// const user1 = new User("Mek", 123);
// const user2 = new User("Jojo", 456);
// // เก็บข้อมูล user
// User.addUser(user1);
// User.addUser(user2);
// // แสดงข้อมูล user
// User.database.forEach((user) => {       // forEach เป็น method ที่ใช้เพื่อวนลูปผ่านแต่ละค่าใน array
//   user.showDetail();                    // (user) => { ... } เป็นฟังก์ชันที่ถูกส่งไปยัง forEach ซึ่งจะถูกเรียกใช้สำหรับแต่ละ user ใน User.database
// })                                      // ฟังก์ชัน showDetail() เป็นฟังก์ชันที่ถูกเรียกใช้สำหรับแต่ละ user
// //  ----------------------------------------------------------------

// ***Inheritance(การสืบทอดคุณสมบัติ) >> ทำการสร้างสิ่งใหม่ขึ้นด้วยการสืบทอด หรือรับเอา(inherit)คุณสมบัติบางอย่างมาจากสิ่งเดิมที่มีอยู่แล้ว
// ***สามารถนำสิ่งที่เคยสร้างไว้แล้วกลับมาใช้ใหม่(re-use)ได้ ***ช่วยประหยัดเวลาในการทำงานลง
// class User {
//   #name;
//   #password;

//   constructor(n, p) {
//     this.#name = n;
//     this.#password = p;
//   }

//   showDetail() {
//     console.log(`ชื่อผู้ใช้ : ${this.#name} , รหัสผ่าน : ${this.#password}`);
//   }

//   // **setter ในรูปแบบของ accessor
//   set Name(newName) {
//     this.#name = newName;
//   }
//   set Password(newPassword) {
//     this.#password = newPassword;
//   }
//   // **getter ในรูปแบบของ accessor
//   get Name() {
//     return this.#name;
//   }
//   get Password() {
//     return this.#password;
//   }
// }
// class Teacher extends User {      // class Teacher(คลาสลูก) สืบทอดคถณสมบัติมาจาก class User(คลาสแม่)
// }
// class Student extends User {      // class Student(คลาสลูก) สืบทอดคถณสมบัติมาจาก class User(คลาสแม่)
// }

// const user1 = new Teacher("teacher1", 1234)
// const user2 = new Student("student1", 5678)

// user1.showDetail()
// user2.showDetail()
// //  ----------------------------------------------------------------

// ***Super >> เป็นคำสั่งสำหรับเรียกใช้งานเมื่อต้องการคุณสมบัติต่างๆ ที่ทำงานอยู่ใน class แม่ เช่น construtor เป็นต้น
class User {
  #name;
  #password;

  constructor(n, p) {
    this.#name = n;
    this.#password = p;
  }

  showDetail() {
    console.log(`ชื่อผู้ใช้ : ${this.#name} , รหัสผ่าน : ${this.#password}`);
  }

  // **setter ในรูปแบบของ accessor
  set Name(newName) {
    this.#name = newName;
  }
  set Password(newPassword) {
    this.#password = newPassword;
  }
  // **getter ในรูปแบบของ accessor
  get Name() {
    return this.#name;
  }
  get Password() {
    return this.#password;
  }
}
class Teacher extends User {                  // class Teacher สืบทอดคถณสมบัติมาจาก class User
  #course;
  constructor(n, p, course) {
    super(n, p);                              // constructor จาก class แม่ // ส่งค่าจาก parameter ไปให้คลาสแม่
    this.#course = course;
  }
  showCourse() {
    console.log(`สอนวิชา: ${this.#course}`);
  }
}
class Student extends User {                   // class Student สืบทอดคถณสมบัติมาจาก class User
  #score;
  constructor(n, p, score) {
    super(n, p);                               // constructoe จาก class แม่ // ส่งค่าจาก parameter ไปให้คลาสแม่
    this.#score = score;
  }
  showScore() {
    console.log(`ได้คะแนน: ${this.#score}`)
  }
}

const user1 = new Teacher("teacher1", 1234, "math");
const user2 = new Student("student1", 5678, "10/10");

user1.showDetail();
user1.showCourse();
user2.showDetail();
user2.showScore();

//  ----------------------------------------------------------------
