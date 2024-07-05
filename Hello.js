console.log("Hello Winjit");

const myObject = {
    firstName:"John",
    lastName: "Doe",
    fullName: function () {
      return firstName + " " + lastName;
    }
  }
  
console.log(myObject.fullName());