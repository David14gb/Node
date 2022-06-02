class Professional{

    
    constructor(name, age, genre, weight, height){
            this.name = name
            this.age = age
            this.genre = genre
            this.weight = weight
            this.height = height
        }
        print(){
            console.log("Name: " + this.name + "\n" + "Age: " + this.age + "\n" + "Genre: " + this.genre + "\n" + "Weight: " + this.weight
            + "\n" + "Height: " + this.height + "\n" + "HairColor: " + this.hairColor + "\n" + "EyeColor" + this.eyeColor + "\n" + "Race: " + this.race
            + "\n" + "IsRetired: " + this.isRetired + "\n" + "Nationality: " + this.nationality + "\n" + "OscarsNumber: " + this.oscarsNumber
            + "\n" + "Porfession: " + this.profession);
        }

}

module.exports = {Professional}