class User {
  constructor(username) {
    this.username = username
  }

  logMe() {
    console.log(`Username: ${this.username}`);
  }

  static createId() {
    return `123`
  }
}

const upendra = new User("upendra")


class Teacher extends User {
  constructor(username, email) {
    super(username)
    this.email = email
  }
}

const iphone = new Teacher("iphone", "iphone@gmail.com")
iphone.logMe()
console.log(upendra.createId())

