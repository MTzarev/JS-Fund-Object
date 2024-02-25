function printCity(cityData) {
    let keys = Object.keys(cityData);
    
    for (const key of keys) {
        console.log(`${key} -> ${cityData[key]}`);
    }
}
printCity({ name: "Plovdiv", population: "1234567", country: "Bulgaria", postCode: 4000 })