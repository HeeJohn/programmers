const readline = require('readline');

const rl = readline.createInterface({
   input : process.stdin,
   output : process.stdout
});

let dwarf = [];
let sum = 0;

rl.on('line', (line)=>{
     let input = parseInt(line);
     dwarf.push(input);
     sum+=input;     
});

rl.on('close', ()=>{
   let result = solve(sum, dwarf);
   result.sort((a, b) => a - b).forEach(function(number) {
       console.log(number);
   });
});


function solve(sum, dwarf){
    
    for(let i =0;i<dwarf.length;i++){
        for(let j =i+1;j<dwarf.length;j++){    
            if(sum - dwarf[i] - dwarf[j] === 100){
                let result = [];
                for (let index = 0 ; index < dwarf.length; index++){
                    if(index === i || index === j) continue;
                    result.push(dwarf[index]);
                }
                return result;
            }
        }
    }
}