// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isloggedIn = false
// console.log(tinderUser)

const regularUser = {
  email: "some@gmail.com",
  fullname: {
    userfullname: {
      firstname: "upendra",
      lastname: "paudel"
    }
  }
}
// console.log(regularUser.fullname.userfullname);

const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "a", 4: "b" }
const obj4 = { 5: "a", 6: "b" }


// const obj3 = Object.assign({}, obj1, obj2, obj4)
// console.log(obj3);

const obj5 = { ...obj1, ...obj2, ...obj4 }
// console.log(obj5);

const users = [
  {
    id: 1,
    email: "up@gmail.com"
  },
  {
    id: 2,
    email: "lauda@gmiail.com"
  },
]

// console.log(users[1].email);
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));

console.log(tinderUser.hasOwnProperty('isloggedIn'));


const course = {
  coursename: "js in hindi",
  price: "999",
  courseInstructor: "upendra"
}

// course.courseInstructor

const { courseInstructor: instructor } = course
console.log(instructor);

// {
//   "name": "upendra",
//   "courename": "js in nepali",
//   "price": "Free"
// }