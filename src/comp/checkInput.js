import { makeitForMe } from "./autocharactercreationFunctionality";
const autoFill = new makeitForMe();

class CheckInput {
  constructor(CharacterObj) {this.CharacterObj = CharacterObj;}
  checkObjectContent() {
    let num6 = autoFill.roll(6);
    let num100 = autoFill.roll(100);

    if (this.CharacterObj.Name === "") {console.error("You need a name");}
    if (this.CharacterObj.occupation === "") {console.error("You need an occupation");}
    if (this.CharacterObj.Race === "") {this.CharacterObj.Race = autoFill.chooseRaceForMe(num100); }
    if (this.CharacterObj.Sex === "") {
        this.CharacterObj.Sex = autoFill.chooseSexForMe(num100, this.CharacterObj.Race);
    }
    if(this.CharacterObj.birthPlace === "") {this.CharacterObj.Race = autoFill.chooseRaceForMe(num100, autoFill.roll(100));}
    if(this.CharacterObj.height === 0){
        this.CharacterObj.height = autoFill.giveMeMyHeiGHt(this.CharacterObj.Race, this.CharacterObj.Sex);
    }
  }
}

export default CheckInput;
