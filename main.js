let mass = []
let bob = '';

for(let i = 0; i < Infinity; i++) {
    let prMass = prompt('')
    let spMass = prMass.split(','); 

    
    for(let key in spMass){
        spMass[key] == 'add' ? mass.push(spMass[1]) : ''
        spMass[key] == 'del' ? bob = spMass[1] : ''
    }

    for(let newKey in mass){
        mass[newKey] == bob ? mass.splice(newKey,1) : '' 
    }
    
    console.log(mass);
    
    if(prMass == 'stop') {
        break
    }
}