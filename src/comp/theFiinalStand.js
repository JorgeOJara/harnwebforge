import { toHaveAccessibleName, toHaveDisplayValue } from "@testing-library/jest-dom/dist/matchers";
import { makeitForMe } from "./autocharactercreationFunctionality";

export const  checkBeforeSafe =  class 
{

    

collect(obj) {
     this.helper = new makeitForMe();
     this.obj = obj 
 }
checkforAll()
{
  if(this.obj.Name == ""){ console.log("Name its required..")}
  if(this.obj.Race == ""){this.obj.Race = this.helper.chooseRaceForMe(this.helper.roll(100))}
  if(this.obj.Sex == ""){this.obj.Sex = this.helper.chooseSexForMe(this.helper.roll(100),this.obj.Race)}
  if(this.obj.Sunsigns == ""){this.obj.Sunsigns = this.helper.chooseMyBirthdayForMe("undefined","undefined")}
  if(this.obj.Culture == "")
  {let done = this.helper.giveMeAsocialClass(this.helper.roll(100),this.obj.Culture,this.obj.birthPlace);this.obj.Culture = done[0]}
  if(this.obj.giveBackbirthplace == ""){this.obj.birthPlace = this.helper.birthPlace(this.obj.Culture,this.helper.roll(100))}
  if(this.obj.SocialClass == "")
  {let done  = this.helper.giveMeAsocialClass(this.helper.roll(100),this.obj.Culture,this.obj.birthPlace) ; this.obj.SocialClass = done[1];}
  if(this.obj.ocupation == ""){this.obj.ocupation = this.helper.chooseMyOcupationForME(this.obj.SocialClass,this.obj.Culture)}
  if(this.obj.height == ""){ this.obj.height = this.helper.giveMeMyHeiGHt(this.obj.Race,this.obj.Sex)}
  if(this.obj.frame == ""){this.obj.frame = this.helper.howFatItsMycharacter()}
  if(this.obj.weight == 0){this.obj.weight = this.helper.howHavyItsMyCharacter(this.obj.height,this.obj.frame)}
  if(this.obj.comeliness == ""){this.obj.comeliness = this.helper.itsMyCharacterCute()}
  if(this.obj.complexion == ""){this.obj.complexion = this.helper.tellMeMyCoMPlexion(this.helper.roll(100),this.obj.Race)}
  if(this.obj.eyeColor == ""){this.obj.eyeColor = this.helper.whatsMyEyeColor(this.helper.roll(100),this.obj.Race)}
  if(this.obj.hairColor == ""){ this.obj.hairColor = this.helper.whatsMyHairColor(this.helper.roll(100),this.obj.Race)}
  if(this.obj.strength == 0){this.obj.strength = this.helper.howItsMycharacterStrenGtH(this.obj.weight,this.obj.Race)}
  if(this.obj.stamina == 0){this.obj.stamina = this.helper.whatsMyCharacterStamina(this.obj.Race)}
  if(this.obj.dexterity == 0){this.obj.dexterity = this.helper.dexterityAttribute(this.obj.Race)}
  if(this.obj.agility == 0){this.obj.agility = this.helper.agilityAttribute(this.obj.frame,this.obj.Race)}
  if(this.obj.eyesight == 0){this.obj.eyesight = this.helper.eyesightAttribute(this.obj.Culture,this.obj.Race)}
  if(this.obj.hearing == 0 ){ this.obj.hearing = this.helper.hearingAttribute(this.obj.Culture,this.obj.Race)}
  if(this.obj.smell == 0){this.obj.smell = this.helper.smellAttribute(this.obj.Culture,this.obj.Race)}
  if(this.obj.voice == 0){ this.obj.voice = this.helper.voiceAttribute(this.obj.Race)}
  if(this.obj.intelligence == 0){ this.obj.intelligence = this.helper.intelligenceAttribute()}
  if(this.obj.aura == 0){ this.obj.aura = this.helper.auraAttribute(this.obj.Race,this.obj.Sex)}
  if(this.obj.will == 0 ){ this.obj.will = this.helper.willAttribute(this.obj.Race)}
  if(this.obj.morality == 0){this.obj.morality = this.helper.moralAttribute(this.obj.Race)}
  if(this.obj.deity == ""){this.obj.deity = "non believer"}
}
   displayer(){console.table(this.obj)}
      
}