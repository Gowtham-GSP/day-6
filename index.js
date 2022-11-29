
//Q.1
     const User1 ={
        Name :"gowtham",
        Lastname :"s",
        DOB : 14/08/2000,
        Clg :"nandha engineering college",
        Dept :"mechanical engineering",
        PassedOut : 2021,
        Experience: "fresher",
        Address:{
            no: 22/3,
            street:"vembuliyamman kovil street",
            Area: "velachery",
            city:"chennai"
        },
        state:"tamilnadu",
        country:"india",

     }  
     console.log(User1);
     

//Q.2 uber price
let baseFee = 44
let cities = ["chennai", "covai", "porur", ]
let uberRates = [5, 10, 15]

let customerName = "gowtham" 
let customerCity = "chennai" 

console.log("Hello", customerName+ ", welcome to the Uber Rate Program")

function getRate(customerCity) {
  
  function uberRate(customerCity, index) {
    
    let finalRate = (uberRates[index]) * baseFee
    return finalRate
  }
  
  console.log(customerCity, "rate is:", uberRate(customerCity, cities.indexOf(customerCity)))
}

getRate(customerCity)

