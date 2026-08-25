
module.exports = {
  included: {
    title: "Students included",
    downloadLabel: "students included",
    downloadPath: "/download-csv/students-included",
    rows: [
      { lastName: "Watkins",   firstName: "Ollie",  sex: "M", dob: "1/1/2009", age: 15, cypmdId: "1234567", subject: "English" },
      { lastName: "Konsa",     firstName: "Ezri",   sex: "M", dob: "1/2/2009", age: 15, cypmdId: "1234567", subject: "English" },
      { lastName: "Gallagher", firstName: "Conor",  sex: "M", dob: "1/3/2009", age: 15, cypmdId: "1234567", subject: "English" },
      { lastName: "Palmer",    firstName: "Cole",   sex: "M", dob: "1/4/2009", age: 15, cypmdId: "1234567", subject: "English" }
    ]
  },
  "non-included": {
    title: "Students non-included",
    downloadLabel: "students non-included",
    downloadPath: "/download-csv/students-non-included",
    rows: [
      { lastName: "Bowen",     firstName: "Jarrod", sex: "M", dob: "1/8/2009",  age: 15, cypmdId: "2234567", subject: "Maths" },
      { lastName: "Trent",     firstName: "Alexander-Arnold", sex: "M", dob: "1/9/2009", age: 15, cypmdId: "2234567", subject: "Maths" },
      { lastName: "Grealish",  firstName: "Jack",   sex: "M", dob: "1/10/2009", age: 15, cypmdId: "2234567", subject: "Maths" }
    ]
  },
  "previously-published": {
    title: "Previously published",
    downloadLabel: "previously published",
    downloadPath: "/download-csv/previously-published",
    rows: [
      { lastName: "Foden",     firstName: "Phil",   sex: "M", dob: "1/7/2009", age: 15, cypmdId: "3234567", subject: "Science" },
      { lastName: "Toney",     firstName: "Ivan",   sex: "M", dob: "1/6/2009", age: 15, cypmdId: "3234567", subject: "Science" }
    ]
  }
}