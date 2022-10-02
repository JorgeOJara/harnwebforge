import { makeitForMe } from "./autocharactercreationFunctionality";
const autoFill = new makeitForMe();

class CheckInput {
  constructor(CharacterObj) {this.CharacterObj = CharacterObj;}
  checkObjectContent() {

    if (this.CharacterObj.Name === "") {console.error("You need a name");}
    if (this.CharacterObj.occupation === "") {console.error("You need an occupation");}
    if (this.CharacterObj.Race === "") {this.CharacterObj.Race = autoFill.chooseRaceForMe(autoFill.roll(100)); }
    if (this.CharacterObj.Sex === "") {
        this.CharacterObj.Sex = autoFill.chooseSexForMe(autoFill.roll(100), this.CharacterObj.Race);
    }
    if(this.CharacterObj.birthPlace === "") {
        this.CharacterObj.birthPlace = autoFill.giveMeABirthPlace(autoFill.roll(100), autoFill.roll(100));
    }
    if(this.CharacterObj.Culture ===""){}

    if(this.CharacterObj.height === 0){
        this.CharacterObj.height = autoFill.giveMeMyHeiGHt(this.CharacterObj.Race, this.CharacterObj.Sex);
    }
    if(this.CharacterObj.frame === ""){this.CharacterObj.frame = autoFill.howFatItsMycharacter();}
    if(this.CharacterObj.sunsign === ""){
        this.CharacterObj.sunsign = autoFill.chooseMyBirthdayForMe(autoFill.roll(12), autoFill.roll(30));
    }
  }
}

export default CheckInput;
