import fs from 'fs';

fs.stat(__dirname, (e, stat) => console.log(stat))