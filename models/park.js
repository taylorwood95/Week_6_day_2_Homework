const Park = function(name, ticketPrice, dinosaurs){
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.dinosaurs = []
    
}

Park.prototype.addDinosaur = function(dinosaur){
    this.dinosaurs.push(dinosaur);
};

Park.prototype.removeDinosaur = function(dinosaur){
    let dinosaurToRemove;
    for (const dino of this.dinosaurs){
        if(dino.name === dinosaur){
        dinosaurToRemove = this.dinosaurs.indexOf(dino);
        break;
    }
}
    this.dinosaurs.splice(dinosaurToRemove,1)
}

Park.prototype.mostAttractiveDino = function(){
    let mostAttractiveDino = this.dinosaurs[0]

    for(const dino of this.dinosaurs){
        if( dino.guestsAttractedPerDay > mostAttractiveDino.guestsAttractedPerDay){
            mostAttractiveDino = dino
        }

    }
    return mostAttractiveDino;
}

Park.prototype.foundDinoSpecies = function (){
    const foundDinoSpecies = []
    for (const dino of this.dinosaurs){
        if(dino.species === 't-rex'){
            foundDinoSpecies.push(dino)
        }
    }
   return foundDinoSpecies.length
}

Park.prototype.totalVisitors = function (){
    let total = 0
    for (const dino of this.dinosaurs){
        total += dino.guestsAttractedPerDay 
    }
        
    
    return total
}

Park.prototype.totalVisitsPerYear = function (){
    return this.totalVisitors() * 365;
    
}

Park.prototype.totalRevenuePerYear = function () {
    return this.ticketPrice * 365
}

Park.prototype.removeAllSpecies = function () {
    const findDinoSpecies = []
    for (const dino of this.dinosaurs){
        if(dino.species === 't-rex'){
            findDinoSpecies.splice(0, this.dinosaurs.length)
        }
    }
   return findDinoSpecies
}

Park.prototype.totalDietType = function() {
    // console.log(this.dinosaurs)
    let totalDiet = {}
    for (const dino of this.dinosaurs){
        // console.log(dino)
        if(dino.diet in totalDiet){
            totalDiet[dino.diet] += 1
        } else {
            totalDiet[dino.diet] = 1
        }
    }

    return totalDiet
}


module.exports = Park
