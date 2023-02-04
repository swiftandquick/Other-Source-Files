// This is a string.  
const data = `{"ticker":{"base":"BTC","target":"USD","price":"16686.53702321","volume":"3232.82432860","change":"31.04800601"},"timestamp":1672531685,"success":true,"error":""}`;

// Change data into an object. 
const parsedData = JSON.parse(data);

// Get the value of ticker.  
console.log(parsedData.ticker);

// Get the value of price.  
console.log(parsedData.ticker.price);

const dog = {
    breed: 'lab',
    color: 'black',
    isAlive: true,
    owner: undefined
}

// Turn an object into a string, in JSON format.  
console.log(JSON.stringify(dog));