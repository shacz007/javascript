let company = { companyName: "Healthy Candy",
activity: "food manufacturing",
address: {
street: "2nd street",
number: "123",
zipcode: "33116",
city: "Miami",
state: "Florida"
},
yearOfEstablishment: 2021
};

console.log(company);
company.address.zipcode = "33117"; //updaate
company["address"]["number"] = "100"; //add
console.log(company);