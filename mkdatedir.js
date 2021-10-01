#!/usr/bin/node

const fs = require('fs/promises')

// creates a date directory in a folder
const main = async () => {
    try {
        const now = new Date();
        
        const paddedMonth = `${now.getMonth()}`.padStart(2, '0');
        const paddedDay = `${now.getDay()}`.padStart( 2, '0');
        
        const dirName = `${now.getFullYear()}-${paddedMonth}-${paddedDay}`;
            
        await fs.mkdir(dirName);
    } catch (e) {
        console.log(e.message);
    }
}

main();
