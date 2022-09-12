import { toHaveDisplayValue } from "@testing-library/jest-dom/dist/matchers";
import { ValueGetter } from "./variablesContainer";
const done = new ValueGetter();

//  this are all functions to create a character automaticly 
// in here you can find a function to automate every part of the character 
// all the functions in here require some paramaters one more than others check onn the function itself for more information
   //  of what it expects to work...

// so if you are creating a character and you wanna avoid the dificulty of choosing the information for the character youself
// this class got you... with enough functions to do the character for you...

// later on the code you should make a function manager that check the values fiven and request values from here 
// values that the player did not provide on the form you can ask here for a random value and build a character 
// out of nothing.....

export const makeitForMe = class
{
   //  this function helps you with internal rolls. on this object
   // Use it for everytime you need a ramdom number generated
   //  it expects a number with the max value -> this.roll(100) its the same as saying = 1 -100
    roll(number){
      let  min = Math.ceil(1);
      let  max = Math.floor(number); 
       return Math.floor(Math.random() * (max - min + 1) + min);
     }

    // 100 roll
   chooseRaceForMe(num)
      // this functions helps you choose the Race of your character....
   {
      let RaceProvided;

         if(num <= 97){
              RaceProvided =  "Human" ;
         }
         else if(num == 98)
         {  RaceProvided =  "Sindarin" }else{ RaceProvided =  'Khuzdul';}

      return RaceProvided;
   }
// 100 roll
      chooseSexForMe(num,Species)
      {
    //  this function choose you characters gender...
   //  sorry but there its only 2 genders on this game 🤷‍♂️
  // it expects a random number from 1 - 100 
          if(Species == "Human")
          {
             if(num <= 48)
             {
                 return "Male"
             }else{ return "female" }
          }
          if(Species == "Sindarin")
          {
               if(num <= 45)
               {
                  return "Male";
               }else{ return "female" }
          }
          if(Species == "Khuzdul" )
          {
              if(num <= 75)
              {
                return "Male";
              }else{return "female";}
          }
      }
// roll 12 month
// roll 30 for day
      chooseMyBirthdayForMe(num12,num30)
      {

         // this functions as the names impplies helps you choose your day of birth also gives you a sunsigns value back..
         // later Note also return the actual value of the birthday before the sunsigns

         // it expects 2 numbers the first one from 1 - 12  and the second from 1 - 30
       
         let mul  = (num12 -1) *30;
         let results  = mul + num30;
         
         let sunsigns ="";
         function displayNothing(){return null;}

            results == 1? sunsigns = "Lado (the Galley)": displayNothing();
            results >= 2 && results <= 5? sunsigns = "Lado-Ulandus cusp":displayNothing();
            results >= 6 && results <= 31? sunsigns = "Ulandus (the Tree)": displayNothing();
            results >= 32 && results <= 35? sunsigns = "Ulandus-Aralius cusp": displayNothing();
            results >= 36 && results <= 60? sunsigns = "Aralius (the Wands)": displayNothing();
            results >= 61 && results <= 64? sunsigns = "Aralius-Feniri cusp": displayNothing();
            results >= 65 && results <= 91? sunsigns = "Feniri (the Smith)": displayNothing();
            results >= 92 && results <= 95? sunsigns = "Feniri-Ahnu cusp": displayNothing();
            results >= 96 && results <= 122? sunsigns = "Ahnu (the Fire Dragon)": displayNothing();
            results >= 123 && results <= 126? sunsigns = "Ahnu-Angberelius cusp": displayNothing();
            results >= 127 && results <= 154? sunsigns = "Angberelius (the Swords)": displayNothing();
            results >= 155 && results <= 158? sunsigns = "Angberelius-Nadai cusp": displayNothing();
            results >= 159 && results <= 183? sunsigns = "Nadai (the Salamander)": displayNothing();
            results >= 184 && results <= 187? sunsigns = "Nadai-Hirin cusp": displayNothing();
            results >= 188 && results <= 212? sunsigns = "Hirin (the Eagle)": displayNothing();
            results >= 213 && results <= 216? sunsigns = "Hirin-Tarael cusp": displayNothing();
            results >= 217 && results <= 241? sunsigns = "Tarael (the Pentacle)": displayNothing();
            results >= 242 && results <= 245? sunsigns = "Tarael-Tai cusp": displayNothing();
            results >= 246 && results <= 270? sunsigns = "Tai (the Lantern Bearer)": displayNothing();
            results >= 271 && results <= 274? sunsigns = "Tai-Skorus cusp": displayNothing();
            results >= 275 && results <= 300? sunsigns = "Skorus (the Mixer)": displayNothing();
            results >= 301 && results <= 303? sunsigns = "Skorus-Masara cusp": displayNothing();
            results >= 304 && results <= 329? sunsigns = "Masara (the Chalice)": displayNothing();
            results >= 330 && results <= 333? sunsigns = "Masara-Lado cusp": displayNothing();
            results >= 334 && results <= 360? sunsigns = "Lado (the Galley)": displayNothing();
            return sunsigns +"  " + results;
      }

   giveMeABirthPlace(num1,num2)
   {
   // this functions helps you get a place of birth for you character according to the Harn games maps and locations
   // its a long function but simple, expects 2 numbers from 1-100
   // depending on the number you might drop in a place 
    let boldTable;
    function displayNothing(){return null;}
   //  Tribal  social class
    num1 >= 1 && num1 <= 18? boldTable = "Barbarian":displayNothing();
   //  Feudal social class
    num1 >= 19 ? boldTable = "Chybisa": displayNothing();
   //  Feudal  social class
    num1 >= 20 && num1 <= 32? boldTable = "Kaldor": displayNothing();
   //  Feudal  social class
    num1 >= 33 && num1 <= 44? boldTable = "Kanday": displayNothing();
   //  Feudal social class
    num1 >= 45 && num1 <= 64? boldTable = "Melderyn": displayNothing();
   //  viking social class
    num1 >= 65 && num1 <= 74? boldTable = "Orbaal": displayNothing();
   //  Feudal social class
    num1 >= 75 && num1 <= 86? boldTable = "Rethem": displayNothing();
   //  imperial social class
    num1 >= 87 && num1 <= 99? boldTable = "Tharda": displayNothing();
   //  deep down on the place might change social class
    num1 >= 100 ? boldTable = "Misc":displayNothing();

    let finalbirthPplaceResult;
   //   console.log(num1 + " " + num2)
     if(boldTable == "Barbarian")
     {
        num2 >= 1 && num2 <= 5? finalbirthPplaceResult = done.birthTable.Barbarian[0]:displayNothing();
        num2 >= 6 && num2 <= 9? finalbirthPplaceResult = done.birthTable.Barbarian[1]: displayNothing();
        num2 >= 10 && num2 <= 12? finalbirthPplaceResult = done.birthTable.Barbarian[2]: displayNothing();
        num2 >= 13 && num2 <= 16? finalbirthPplaceResult = done.birthTable.Barbarian[3]: displayNothing();
        num1 >= 17 ? finalbirthPplaceResult = done.birthTable.Barbarian[4]: displayNothing();
        num2 >= 18 && num2 <= 23? finalbirthPplaceResult = done.birthTable.Barbarian[5]: displayNothing();
        num2 >= 24 && num2 <= 27? finalbirthPplaceResult = done.birthTable.Barbarian[6]: displayNothing();
        num2 >= 28 && num2 <= 43? finalbirthPplaceResult = done.birthTable.Barbarian[7]: displayNothing();
        num2 >= 44 ? finalbirthPplaceResult = done.birthTable.Barbarian[8]: displayNothing();
        num2 >= 45 && num2 <= 46? finalbirthPplaceResult = done.birthTable.Barbarian[9]: displayNothing();
        num2 >= 47 && num2 <= 48? finalbirthPplaceResult = done.birthTable.Barbarian[10]: displayNothing();
        num2 >= 49 && num2 <= 56? finalbirthPplaceResult = done.birthTable.Barbarian[11]: displayNothing();
        num2 >= 57 && num2 <= 68? finalbirthPplaceResult = done.birthTable.Barbarian[12]: displayNothing();
        num2 >= 69 && num2 <= 71? finalbirthPplaceResult = done.birthTable.Barbarian[13]: displayNothing();
        num2 >= 72 && num2 <= 82? finalbirthPplaceResult = done.birthTable.Barbarian[14]: displayNothing();
        num2 >= 83 && num2 <= 92? finalbirthPplaceResult = done.birthTable.Barbarian[15]: displayNothing();
        num2 >= 93 && num2 <= 98? finalbirthPplaceResult = done.birthTable.Barbarian[16]: displayNothing();
        num2 >= 99 && num2 <= 100? finalbirthPplaceResult = done.birthTable.Barbarian[17]: displayNothing();
     }
     if(boldTable == "Chybisa")
     {
        num2 >= 1 && num2 <= 40? finalbirthPplaceResult = done.birthTable.Chybisa[0]:displayNothing();
        num2 >= 41 && num2 <= 60? finalbirthPplaceResult =  done.birthTable.Chybisa[1]: displayNothing();
        num2 >= 61 && num2 <= 75? finalbirthPplaceResult =  done.birthTable.Chybisa[2]: displayNothing();
        num2 >= 76 && num2 <= 100? finalbirthPplaceResult =  done.birthTable.Chybisa[3]: displayNothing();

     }
     {
        num2 >= 1 && num2 <= 2? finalbirthPplaceResult =  done.birthTable.Kaldor[0]:displayNothing();
        if(boldTable == "Kaldor")
        num2 >= 3 && num2 <= 4? finalbirthPplaceResult = done.birthTable.Kaldor[1]:displayNothing();
        num2 >= 7 && num2 <= 9? finalbirthPplaceResult = done.birthTable.Kaldor[3]:displayNothing();
        num2 >= 5 && num2 <= 6? finalbirthPplaceResult = done.birthTable.Kaldor[2]:displayNothing();
        num2 >= 12 && num2 <= 17? finalbirthPplaceResult = done.birthTable.Kaldor[5]:displayNothing();
        num2 >= 18 ? finalbirthPplaceResult = done.birthTable.Kaldor[6]: displayNothing();
        num2 >= 19 && num2 <= 20? finalbirthPplaceResult = done.birthTable.Kaldor[7]:displayNothing();
        num2 >= 21 && num2 <= 22? finalbirthPplaceResult = done.birthTable.Kaldor[8]:displayNothing();
        num2 >= 23 ? finalbirthPplaceResult = done.birthTable.Kaldor[9]:displayNothing();
        num2 >= 10 && num2 <= 11? finalbirthPplaceResult = done.birthTable.Kaldor[4]:displayNothing();
        num2 >= 24 && num2 <= 31? finalbirthPplaceResult = done.birthTable.Kaldor[10]:displayNothing();
        num2 >= 32 && num2 <= 33? finalbirthPplaceResult = done.birthTable.Kaldor[11]:displayNothing();
        num2 >= 34 && num2 <= 36? finalbirthPplaceResult = done.birthTable.Kaldor[12]:displayNothing();
        num2 >= 37 && num2 <= 38? finalbirthPplaceResult = done.birthTable.Kaldor[13]:displayNothing();
        num2 >= 39 && num2 <= 46? finalbirthPplaceResult = done.birthTable.Kaldor[14]:displayNothing();
        num2 >= 47 && num2 <= 48? finalbirthPplaceResult = done.birthTable.Kaldor[15]:displayNothing();
        num2 >= 49 && num2 <= 50? finalbirthPplaceResult = done.birthTable.Kaldor[16]:displayNothing();
        num2 >= 51 && num2 <= 56? finalbirthPplaceResult = done.birthTable.Kaldor[17]:displayNothing();
        num2 >= 57 && num2 <= 58? finalbirthPplaceResult = done.birthTable.Kaldor[18]:displayNothing();
        num2 >= 59 && num2 <= 65? finalbirthPplaceResult = done.birthTable.Kaldor[19]:displayNothing();
        num2 >= 66 && num2 <= 70? finalbirthPplaceResult = done.birthTable.Kaldor[20]:displayNothing();
        num2 >= 71 && num2 <= 72? finalbirthPplaceResult = done.birthTable.Kaldor[21]:displayNothing();
        num2 >= 73 && num2 <= 75? finalbirthPplaceResult = done.birthTable.Kaldor[22]:displayNothing();
        num2 >= 76 && num2 <= 77? finalbirthPplaceResult = done.birthTable.Kaldor[23]:displayNothing();
        num2 >= 78 && num2 <= 88? finalbirthPplaceResult = done.birthTable.Kaldor[24]:displayNothing();
        num2 >= 89 && num2 <= 91? finalbirthPplaceResult = done.birthTable.Kaldor[25]:displayNothing();
        num2 >= 92 && num2 <= 93? finalbirthPplaceResult = done.birthTable.Kaldor[26]:displayNothing();
        num2 >= 94 && num2 <= 96? finalbirthPplaceResult = done.birthTable.Kaldor[27]:displayNothing();
        num2 >= 97 && num2 <= 98? finalbirthPplaceResult = done.birthTable.Kaldor[28]:displayNothing();
        num2 >= 99 && num2 <= 100? finalbirthPplaceResult = done.birthTable.Kaldor[29]:displayNothing();
     }

     if(boldTable == "Kanday")
     {
        num2 >= 1 && num2 <= 16? finalbirthPplaceResult = done.birthTable.Kanday[0]:displayNothing();
        num2 >= 17 && num2 <= 18? finalbirthPplaceResult = done.birthTable.Kanday[1]:displayNothing();
        num2 >= 19 && num2 <= 20? finalbirthPplaceResult = done.birthTable.Kanday[2]:displayNothing();
        num2 >= 21 && num2 <= 22? finalbirthPplaceResult = done.birthTable.Kanday[3]:displayNothing();
        num2 >= 23 ? finalbirthPplaceResult = done.birthTable.Kanday[4]: displayNothing();
        num2 >= 24 && num2 <= 31? finalbirthPplaceResult = done.birthTable.Kanday[5]:displayNothing();
        num2 >= 32 && num2 <= 33 ? finalbirthPplaceResult = done.birthTable.Kanday[6]:displayNothing();
        num2 >= 34 && num2 <= 38? finalbirthPplaceResult = done.birthTable.Kanday[7]:displayNothing();
        num2 >= 39 && num2 <= 40? finalbirthPplaceResult = done.birthTable.Kanday[8]:displayNothing();
        num2 >= 41 ? finalbirthPplaceResult = done.birthTable.Kanday[9]:displayNothing();
        num2 >= 42 ? finalbirthPplaceResult = done.birthTable.Kanday[10]:displayNothing();
        num2 >= 43 && num2 <= 46? finalbirthPplaceResult = done.birthTable.Kanday[11]:displayNothing();
        num2 >= 47 ? finalbirthPplaceResult = done.birthTable.Kanday[12]: displayNothing();
        num2 >= 48 && num2 <= 51? finalbirthPplaceResult = done.birthTable.Kanday[13]:displayNothing();
        num2 >= 52 && num2 <= 57? finalbirthPplaceResult = done.birthTable.Kanday[14]:displayNothing();
        num2 >= 58 && num2 <= 62? finalbirthPplaceResult = done.birthTable.Kanday[15]:displayNothing();
        num2 >= 63 ? finalbirthPplaceResult = done.birthTable.Kanday[16]: displayNothing();
        num2 >= 64 && num2 <= 66? finalbirthPplaceResult = done.birthTable.Kanday[17]:displayNothing();
        num2 >= 67 && num2 <= 68? finalbirthPplaceResult = done.birthTable.Kanday[18]:displayNothing();
        num2 >= 69 && num2 <= 72? finalbirthPplaceResult = done.birthTable.Kanday[19]:displayNothing();
        num2 >= 73 && num2 <= 78? finalbirthPplaceResult = done.birthTable.Kanday[20]:displayNothing();
        num2 >= 79 && num2 <= 85? finalbirthPplaceResult = done.birthTable.Kanday[21]:displayNothing();
        num2 >= 86 && num2 <= 91? finalbirthPplaceResult = done.birthTable.Kanday[22]:displayNothing();
        num2 >= 92 && num2 <= 97? finalbirthPplaceResult = done.birthTable.Kanday[23]:displayNothing();
        num2 >= 98 ? finalbirthPplaceResult = done.birthTable.Kanday[24]:displayNothing();
        num2 >= 991 && num2 <= 100? finalbirthPplaceResult = done.birthTable.Kanday[25]:displayNothing();
        
     }
     if(boldTable == "Melderyn")
     {
      num2 >= 1 && num2 <= 10? finalbirthPplaceResult = done.birthTable.Melderyn[0]:displayNothing();
      num2 >= 11 && num2 <= 20? finalbirthPplaceResult = done.birthTable.Melderyn[1]:displayNothing();
      num2 >= 21 ? finalbirthPplaceResult = done.birthTable.Melderyn[2]:displayNothing();
      num2 >= 22 ? finalbirthPplaceResult = done.birthTable.Melderyn[3]:displayNothing();
      num2 >= 23 && num2 <= 26? finalbirthPplaceResult = done.birthTable.Melderyn[4]:displayNothing();
      num2 >= 27 ? finalbirthPplaceResult = done.birthTable.Melderyn[5]:displayNothing();
      num2 >= 28 ? finalbirthPplaceResult = done.birthTable.Melderyn[6]:displayNothing();
      num2 >= 29 ? finalbirthPplaceResult = done.birthTable.Melderyn[7]:displayNothing();
      num2 >= 30 && num2 <= 32? finalbirthPplaceResult = done.birthTable.Melderyn[8]:displayNothing();
      num2 >= 33 && num2 <= 37? finalbirthPplaceResult = done.birthTable.Melderyn[9]:displayNothing();
      num2 >= 38&& num2 <= 41? finalbirthPplaceResult = done.birthTable.Melderyn[10]:displayNothing();
      num2 >= 42 && num2 <= 44? finalbirthPplaceResult = done.birthTable.Melderyn[11]:displayNothing();
      num2 >= 45 && num2 <= 46? finalbirthPplaceResult = done.birthTable.Melderyn[12]:displayNothing();
      num2 >= 47 && num2 <= 51? finalbirthPplaceResult = done.birthTable.Melderyn[13]:displayNothing();
      num2 >= 52 && num2 <= 53? finalbirthPplaceResult = done.birthTable.Melderyn[14]:displayNothing();
      num2 >= 54 && num2 <= 55? finalbirthPplaceResult = done.birthTable.Melderyn[15]:displayNothing();
      num2 >= 56 && num2 <= 57? finalbirthPplaceResult = done.birthTable.Melderyn[16]:displayNothing();
      num2 >= 58 && num2 <= 59? finalbirthPplaceResult = done.birthTable.Melderyn[17]:displayNothing();
      num2 >= 47 && num2 <= 51? finalbirthPplaceResult = done.birthTable.Melderyn[19]:displayNothing();
      num2 >= 60 && num2 <= 64? finalbirthPplaceResult = done.birthTable.Melderyn[20]:displayNothing();
      num2 >= 65 && num2 <= 67? finalbirthPplaceResult = done.birthTable.Melderyn[21]:displayNothing();
      num2 >= 68 && num2 <= 69? finalbirthPplaceResult = done.birthTable.Melderyn[22]:displayNothing();
      num2 >= 70 && num2 <= 72? finalbirthPplaceResult = done.birthTable.Melderyn[21]:displayNothing();
      num2 >= 73 ? finalbirthPplaceResult = done.birthTable.Melderyn[22]:displayNothing();
      num2 >= 74 && num2 <= 76? finalbirthPplaceResult = done.birthTable.Melderyn[23]:displayNothing();
      num2 >= 77 && num2 <= 80? finalbirthPplaceResult = done.birthTable.Melderyn[24]:displayNothing();
      num2 >= 81 && num2 <= 93? finalbirthPplaceResult = done.birthTable.Melderyn[25]:displayNothing();
      num2 >= 94 && num2 <= 96? finalbirthPplaceResult = done.birthTable.Melderyn[26]:displayNothing();
      num2 >= 97 && num2 <= 98? finalbirthPplaceResult = done.birthTable.Melderyn[27]:displayNothing();
      num2 >= 99 && num2 <= 100? finalbirthPplaceResult = done.birthTable.Melderyn[28]:displayNothing();
     }
     if(boldTable == "Orbaal")
     {

      num2 >= 1 && num2 <= 2? finalbirthPplaceResult = done.birthTable.Orbaal[0]: displayNothing();
      num2 >= 3 && num2 <= 4? finalbirthPplaceResult = done.birthTable.Orbaal[1]: displayNothing();
      num2 >= 5 && num2 <= 7? finalbirthPplaceResult = done.birthTable.Orbaal[2]: displayNothing();
      num2 >= 8 && num2 <= 9? finalbirthPplaceResult = done.birthTable.Orbaal[3]: displayNothing();
      num2 >= 10 && num2 <= 11? finalbirthPplaceResult = done.birthTable.Orbaal[4]: displayNothing();
      num2 >= 12 && num2 <= 13? finalbirthPplaceResult = done.birthTable.Orbaal[5]: displayNothing();
      num2 >= 14 && num2 <= 15? finalbirthPplaceResult = done.birthTable.Orbaal[6]: displayNothing();
      num2 >= 16 && num2 <= 17? finalbirthPplaceResult = done.birthTable.Orbaal[7]: displayNothing();
      num2 >= 18 && num2 <= 23? finalbirthPplaceResult = done.birthTable.Orbaal[8]: displayNothing();
      num2 >= 24 && num2 <= 25? finalbirthPplaceResult = done.birthTable.Orbaal[9]: displayNothing();
      num2 >= 26 && num2 <= 27? finalbirthPplaceResult = done.birthTable.Orbaal[10]: displayNothing();
      num2 >= 28 && num2 <= 29? finalbirthPplaceResult = done.birthTable.Orbaal[11]: displayNothing();
      num2 >= 30 && num2 <= 33? finalbirthPplaceResult = done.birthTable.Orbaal[12]: displayNothing();
      num2 >= 34 && num2 <= 35? finalbirthPplaceResult = done.birthTable.Orbaal[13]: displayNothing();
      num2 >= 36 && num2 <= 39? finalbirthPplaceResult = done.birthTable.Orbaal[14]: displayNothing();
      num2 >= 40 && num2 <= 44? finalbirthPplaceResult = done.birthTable.Orbaal[15]: displayNothing();
      num2 >= 45 && num2 <= 49? finalbirthPplaceResult = done.birthTable.Orbaal[16]: displayNothing();
      num2 >= 50 && num2 <= 51? finalbirthPplaceResult = done.birthTable.Orbaal[17]: displayNothing();
      num2 >= 52 && num2 <= 53? finalbirthPplaceResult = done.birthTable.Orbaal[18]: displayNothing();
      num2 >= 54 && num2 <= 55? finalbirthPplaceResult = done.birthTable.Orbaal[19]: displayNothing();
      num2 >= 56 && num2 <= 58? finalbirthPplaceResult = done.birthTable.Orbaal[20]: displayNothing();
      num2 >= 59 && num2 <= 60? finalbirthPplaceResult = done.birthTable.Orbaal[21]: displayNothing();
      num2 >= 61 && num2 <= 62? finalbirthPplaceResult = done.birthTable.Orbaal[22]: displayNothing();
      num2 >= 63 && num2 <= 64? finalbirthPplaceResult = done.birthTable.Orbaal[23]: displayNothing();
      num2 >= 65 && num2 <= 67? finalbirthPplaceResult = done.birthTable.Orbaal[24]: displayNothing();
      num2 >= 68 && num2 <= 69? finalbirthPplaceResult = done.birthTable.Orbaal[25]: displayNothing();
      num2 >= 70 && num2 <= 71? finalbirthPplaceResult = done.birthTable.Orbaal[26]: displayNothing();
      num2 >= 72 && num2 <= 75? finalbirthPplaceResult = done.birthTable.Orbaal[27]: displayNothing();
      num2 >= 76 && num2 <= 77? finalbirthPplaceResult = done.birthTable.Orbaal[28]: displayNothing();
      num2 >= 78 && num2 <= 79? finalbirthPplaceResult = done.birthTable.Orbaal[29]: displayNothing();
      num2 >= 81 && num2 <= 82? finalbirthPplaceResult = done.birthTable.Orbaal[30]: displayNothing();
      num2 >= 82 && num2 <= 83? finalbirthPplaceResult = done.birthTable.Orbaal[31]: displayNothing();
      num2 >= 84 && num2 <= 85? finalbirthPplaceResult = done.birthTable.Orbaal[32]: displayNothing();
      num2 >= 86 && num2 <= 87? finalbirthPplaceResult = done.birthTable.Orbaal[33]: displayNothing();
      num2 >= 88 && num2 <= 91? finalbirthPplaceResult = done.birthTable.Orbaal[34]: displayNothing();
      num2 >= 92 && num2 <= 93? finalbirthPplaceResult = done.birthTable.Orbaal[35]: displayNothing();
      num2 >= 94 && num2 <= 95? finalbirthPplaceResult = done.birthTable.Orbaal[36]: displayNothing();
      num2 >= 96 && num2 <= 98? finalbirthPplaceResult = done.birthTable.Orbaal[37]: displayNothing();
      num2 >= 99 && num2 <= 100? finalbirthPplaceResult = done.birthTable.Orbaal[38]: displayNothing();


     }
     if(boldTable == "Rethem")
     {
       num2 >= 1 && num2 <= 2? finalbirthPplaceResult = done.birthTable.Rethem[0]: displayNothing();
       num2 >= 3 && num2 <= 4? finalbirthPplaceResult = done.birthTable.Rethem[1]: displayNothing();
       num2 >= 5 && num2 <= 7? finalbirthPplaceResult = done.birthTable.Rethem[2]: displayNothing();
       num2 >= 8 && num2 <= 12? finalbirthPplaceResult = done.birthTable.Rethem[3]: displayNothing();
       num2 >= 13 && num2 <= 15? finalbirthPplaceResult = done.birthTable.Rethem[4]: displayNothing();
       num2 >= 16 && num2 <= 22? finalbirthPplaceResult = done.birthTable.Rethem[5]: displayNothing();
       num2 >= 23 && num2 <= 24? finalbirthPplaceResult = done.birthTable.Rethem[6]: displayNothing();
       num2 >= 25 && num2 <= 27? finalbirthPplaceResult = done.birthTable.Rethem[7]: displayNothing();
       num2 >= 28 && num2 <= 31? finalbirthPplaceResult = done.birthTable.Rethem[8]: displayNothing();
       num2 >= 32 && num2 <= 35? finalbirthPplaceResult = done.birthTable.Rethem[9]: displayNothing();
       num2 >= 36 && num2 <= 40? finalbirthPplaceResult = done.birthTable.Rethem[10]: displayNothing();
       num2 >= 41 && num2 <= 45? finalbirthPplaceResult = done.birthTable.Rethem[11]: displayNothing();
       num2 >= 46 && num2 <= 49? finalbirthPplaceResult = done.birthTable.Rethem[12]: displayNothing();
       num2 >= 50 && num2 <= 54? finalbirthPplaceResult = done.birthTable.Rethem[13]: displayNothing();
       num2 >= 55 && num2 <= 58? finalbirthPplaceResult = done.birthTable.Rethem[14]: displayNothing();
       num2 >= 59 && num2 <= 61? finalbirthPplaceResult = done.birthTable.Rethem[15]: displayNothing();
       num2 >= 62 && num2 <= 67? finalbirthPplaceResult = done.birthTable.Rethem[16]: displayNothing();
       num2 >= 68 && num2 <= 72? finalbirthPplaceResult = done.birthTable.Rethem[17]: displayNothing();
       num2 >= 73 && num2 <= 79? finalbirthPplaceResult = done.birthTable.Rethem[18]: displayNothing();
       num2 >= 80 && num2 <= 85? finalbirthPplaceResult = done.birthTable.Rethem[19]: displayNothing();
       num2 >= 86 && num2 <= 89? finalbirthPplaceResult = done.birthTable.Rethem[20]: displayNothing();
       num2 >= 90 && num2 <= 92? finalbirthPplaceResult = done.birthTable.Rethem[21]: displayNothing();
       num2 >= 93 && num2 <= 94? finalbirthPplaceResult = done.birthTable.Rethem[22]: displayNothing();
       num2 >= 95 && num2 <= 98? finalbirthPplaceResult = done.birthTable.Rethem[23]: displayNothing();
       num2 >= 99 && num2 <= 100? finalbirthPplaceResult = done.birthTable.Rethem[24]: displayNothing();
     }
     if(boldTable == "Tharda")
     {
       num2 >= 1 && num2 <= 3? finalbirthPplaceResult = done.birthTable.Tharda[0]: displayNothing();
       num2 >= 4 && num2 <= 6? finalbirthPplaceResult = done.birthTable.Tharda[1]: displayNothing();
       num2 >= 7 && num2 <= 9? finalbirthPplaceResult = done.birthTable.Tharda[2]: displayNothing();
       num2 >= 10 && num2 <= 24? finalbirthPplaceResult = done.birthTable.Tharda[3]: displayNothing();
       num2 >= 25 ? finalbirthPplaceResult = done.birthTable.Tharda[4]: displayNothing();
       num2 >= 26 && num2 <= 30? finalbirthPplaceResult = done.birthTable.Tharda[5]: displayNothing();
       num2 >= 31 && num2 <= 33? finalbirthPplaceResult = done.birthTable.Tharda[6]: displayNothing();
       num2 >= 34 && num2 <= 38? finalbirthPplaceResult = done.birthTable.Tharda[7]: displayNothing();
       num2 >= 39 && num2 <= 42? finalbirthPplaceResult = done.birthTable.Tharda[8]: displayNothing();
       num2 >= 43 && num2 <= 44? finalbirthPplaceResult = done.birthTable.Tharda[9]: displayNothing();
       num2 >= 45 && num2 <= 51? finalbirthPplaceResult = done.birthTable.Tharda[10]: displayNothing();
       num2 >= 52 && num2 <= 54? finalbirthPplaceResult = done.birthTable.Tharda[11]: displayNothing();
       num2 >= 55 && num2 <= 59? finalbirthPplaceResult = done.birthTable.Tharda[12]: displayNothing();
       num2 >= 60 && num2 <= 64? finalbirthPplaceResult = done.birthTable.Tharda[13]: displayNothing();
       num2 >= 65 && num2 <= 69? finalbirthPplaceResult = done.birthTable.Tharda[14]: displayNothing();
       num2 >= 70 && num2 <= 72? finalbirthPplaceResult = done.birthTable.Tharda[15]: displayNothing();
       num2 >= 73 && num2 <= 76? finalbirthPplaceResult = done.birthTable.Tharda[16]: displayNothing();
       num2 >= 77 && num2 <= 78? finalbirthPplaceResult = done.birthTable.Tharda[17]: displayNothing();
       num2 >= 79 && num2 <= 84? finalbirthPplaceResult = done.birthTable.Tharda[18]: displayNothing();
       num2 >= 85 && num2 <= 86? finalbirthPplaceResult = done.birthTable.Tharda[19]: displayNothing();
       num2 >= 87 && num2 <= 95? finalbirthPplaceResult = done.birthTable.Tharda[20]: displayNothing();
       num2 >= 96 ? finalbirthPplaceResult = done.birthTable.Tharda[21]: displayNothing();
       num2 >= 97 && num2 <= 100? finalbirthPplaceResult = done.birthTable.Tharda[22]: displayNothing();

     }
     if(boldTable == "Misc")
     {
         num2 >= 1 && num2 <= 5? finalbirthPplaceResult = done.birthTable.Misc[0]: displayNothing();
         num2 >= 87 && num2 <= 95? finalbirthPplaceResult = done.birthTable.Misc[1]: displayNothing();
         num2 >= 6 && num2 <= 90? finalbirthPplaceResult = done.birthTable.Misc[2]: displayNothing();
         num2 >= 91 && num2 <= 93? finalbirthPplaceResult = done.birthTable.Misc[3]: displayNothing();
         num2 >= 94 && num2 <= 95? finalbirthPplaceResult = done.birthTable.Misc[4]: displayNothing();
         num2 >= 96 && num2 <= 100? finalbirthPplaceResult = done.birthTable.Misc[5]: displayNothing();
     }
     console.log("culture  " + boldTable);
     console.log("place  " + finalbirthPplaceResult);
     this.giveMeAsocialClass(88,boldTable,finalbirthPplaceResult)
      //   end of function 
   }

   giveMeAsocialClass(num,culture,finalplace)
   {
      //  this functions helps you choose the social class of you character......

      // it needs a number from 1 - 100
      //  also needs a culture -> from boldTable headers
      // finally it needs a finalplace value for misc culture...

      // this function depends on giveMeABirthPlace() 
      let fSocialClass;
      function displayNothing(){}


      switch(culture) {
         case "Barbarian":
           // Tribal 
          //   if this its your culture this are the values for you social classes
         //  also the social classes avaliables
               num >= 1 && num <= 10? fSocialClass = "Slave": displayNothing();
               num >= 11 && num <= 99? fSocialClass = "Unguilded": displayNothing();
               num == 100? fSocialClass = "Noble": displayNothing();
           break;
         case "Melderyn":
           // Viking
          //   if this its your culture this are the values for you social classes
         //  also the social classes avaliables
                  num >= 1 && num <= 15? fSocialClass = "Slave": displayNothing();
                  num >= 16 && num <= 80? fSocialClass = "Serf": displayNothing();
                  num >= 81 && num <= 83? fSocialClass = "Unguilded": displayNothing();
                  num >= 84 && num <= 98? fSocialClass = "Guilded": displayNothing();
                  num == 99 && num <= 100? fSocialClass = "Noble": displayNothing();
           break;
         case "Tharda":
            // Imperial
           //   if this its your culture this are the values for you social classes
          //  also the social classes avaliables
               num >= 1 && num <= 25? fSocialClass = "Slave": displayNothing();
               num >= 26 && num <= 90? fSocialClass = "Unguilded": displayNothing();
               num >= 91 && num <= 98? fSocialClass = "Guilded": displayNothing();
               num == 99 && num <= 100? fSocialClass = "Noble": displayNothing();
              break;
         default:
         //   first find if there its misc culture before enythin....
              if(finalplace == "Habe")
              {
                //  Khuzan
               //   if this its your culture this are the values for you social classes
              //  also the social classes avaliables
                      num >= 1 && num <= 15? fSocialClass = "Unguilded": displayNothing();
                      num >= 16 && num <= 98? fSocialClass = "Guilded": displayNothing();
                      num >= 99 && num <= 100? fSocialClass = "Noble": displayNothing();
              }else if(finalplace== "elshavel" || finalplace == "ulfshafen")
              {
               // Sindarin
              //   if this its your culture this are the values for you social classes
             //  also the social classes avaliables
                     num >= 1 && num <= 70? fSocialClass = "Unguilded": displayNothing();
                     num >= 71 && num <= 99? fSocialClass = "Guilded": displayNothing();
                     num >= 100 ? fSocialClass = "Noble": displayNothing();
              }else{
               // Feudal
              //  if this its your culture this are the values for you social classes
             //  also the social classes avaliables
                 num >= 1 && num <= 15? fSocialClass = "Slave": displayNothing();
                 num >= 16 && num <= 70? fSocialClass = "Serf": displayNothing();
                 num >= 71 && num <= 93? fSocialClass = "Unguilded": displayNothing();
                 num >= 94 && num <= 98? fSocialClass = "Guilded": displayNothing();
                 num == 99 && num <= 100? fSocialClass = "Noble": displayNothing();
              }
             return fSocialClass;  
        }
   }
   giveMeMyHeiGHt(Race,Sex)
   {
      let theCreatedValueToAdd =  this.roll(6) + this.roll(6) + this.roll(6) + this.roll(6);
      let finalheight; 
      function displayNothing(){return null;}
      
      switch(Race) {
         case "Sindarin":
            // code  Male  = 51  female = 50
                 Sex == "Male"? finalheight = 51 + theCreatedValueToAdd: displayNothing();
                 Sex == "female"? finalheight = 50 + theCreatedValueToAdd: displayNothing();
           break;
         case "Khuzdul":
           // code  male  = 40  female = 40
          //   because they are both the same rule value  there its no diference if a male or female
         // thats why it dosent need a if statement
                 finalheight = 40 + theCreatedValueToAdd;
             break;
         default:
           // code  male  = 54  female = 52
           Sex == "Male"? finalheight = 54 + theCreatedValueToAdd: displayNothing();
           Sex == "female"? finalheight = 52 + theCreatedValueToAdd: displayNothing();
       } 
      // make the results into feets ......
       let convertIntonormal = finalheight / 12;
       let finalDisplayebleValue = convertIntonormal.toFixed(1)
   // first return its the inches values second feets values
       return [finalheight,finalDisplayebleValue];
   }

   howFatItsMycharacter()
   {
      // THIS FUNCTION GIVES YOU BACK THE FRAME OF THE CHARACTER
      //  3d6  = Frame Scant Light Medium Heavy Massive
      let fatvalue = this.roll(6) + this.roll(6) + this.roll(6);
      let finalFrame;
       
      // THIS DISPLAY NONE FUNCTION ITS JUST TO PATCH THE ERROR...🤫
      function displayNone(){return null}

      fatvalue >= 1 && fatvalue <= 5? finalFrame = "Scant":displayNone()
      fatvalue >= 6 && fatvalue <= 8? finalFrame = "Light":displayNone()
      fatvalue >= 9 && fatvalue <= 12? finalFrame = "Medium":displayNone()
      fatvalue >= 13 && fatvalue <= 15? finalFrame = "Heavy":displayNone()
      fatvalue >= 16? finalFrame = "Massive":displayNone()

      return finalFrame;
   }


   // wight function I do it on sunday

      //  WeiGHt
      howHavyItsMyCharacter(Ht,Frame)
      {
         // it needs the frame for the modifiers 
         // also it needs the Haight  for the default weight 
         // the height needs to be in inches not foots.. like its displayed
         let initialWeight;
         let modifier;
         let results;
         function displatNone(){return null;}
         // finalWeight
         done.finalWeight.Weight.map(d =>
            {
               d[0] == Ht? initialWeight = d[1] :displatNone();
            })
     // ['Scant',0.8],['Light',0.9],['Medium',1],['Heavy',1.1],['Massive',1.2]
         Frame == "Scant"?modifier = 0.8: displatNone();
         Frame == "Light"?modifier = 0.9: displatNone();
         Frame == "Medium"?modifier = 1: displatNone();
         Frame == "Heavy"?modifier = 1.1: displatNone();
         Frame == "Massive"?modifier= 1.2:displatNone();

      //  multiply the modifier  with the default value
         results = initialWeight * modifier;
         return results.toFixed(0)
      }

    // end of weight function.......


   itsMyCharacterCute()
   {
      // it needs race for the modiers... race

      // They say that cute·ness can not be measure I pruve them wrong with this function
      // this function will tell you how cute your Character its...

      //  3d6  = Frame Scant Light Medium Heavy Massive
      let CuteValue = this.roll(6) + this.roll(6) + this.roll(6);
      let finalcuteValue;
       
      // THIS DISPLAY NONE FUNCTION ITS JUST TO PATCH THE ERROR...🤫
      function displayNone(){return null}

      CuteValue >= 1 && CuteValue <= 5? finalcuteValue = "Ugly":displayNone()
      CuteValue >= 6 && CuteValue <= 8? finalcuteValue = "Plain":displayNone()
      CuteValue >= 9 && CuteValue <= 12? finalcuteValue = "Average":displayNone()
      CuteValue >= 13 && CuteValue <= 15? finalcuteValue = "Attractive":displayNone()
      CuteValue >= 16? finalcuteValue = "Handsome":displayNone()
      console.log(finalcuteValue);
   }

   // CoMPlexion
     // 1d100
     tellMeMyCoMPlexion(num,Race)
     {
       // Human Sindarin Khuzdul
       let howdarkItsMySkin;
       function displayNone(){return null;}
       if(Race == "Human")
       {
         num  >= 1 && num <= 27? howdarkItsMySkin = "Fair" :displayNone() 
         num  >= 28 && num <= 74? howdarkItsMySkin = "Medium" :displayNone() 
         num  >= 75 && num <= 100? howdarkItsMySkin = "Dark" :displayNone() 
       }
       if(Race == "Sindarin")
       {
         num  >= 1 && num <= 97? howdarkItsMySkin = "Fair" :displayNone() 
         num  >= 98 && num <= 99? howdarkItsMySkin = "Medium" :displayNone() 
         num  >= 100 ? howdarkItsMySkin = "Dark" :displayNone() 
       }
       if(Race == "Khuzdul")
       {
         num  >= 1 && num <= 90? howdarkItsMySkin = "Fair" :displayNone() 
         num  >= 91 && num <= 100? howdarkItsMySkin = "Medium" :displayNone() 
       }
       
       return howdarkItsMySkin; 
     }


     whatsMyHairColor(num,Race)
     {
       // Human Sindarin Khuzdul
        //  Brown Black Red Silver Blond
       let HairColor;
       function displayNone(){return null;}
       if(Race == "Human")
       {
         num  >= 1 && num <= 40? HairColor = "Brown" :displayNone() 
         num  >= 41 && num <= 55? HairColor = "Black" :displayNone() 
         num  >= 56 && num <= 65? HairColor = "Red" :displayNone() 
         num  >= 66 && num <= 70? HairColor = "Silver" :displayNone()
         num  >= 71 && num <= 100? HairColor = "Blond" :displayNone()
       }
       if(Race == "Sindarin")
       {
         num  >= 1 && num <= 25? HairColor = "Brown" :displayNone() 
         num  >= 26 && num <= 48? HairColor = "Black" :displayNone() 
         num  >= 49 && num <= 50? HairColor = "Red" :displayNone() 
         num  >= 51 && num <= 60? HairColor = "Silver" :displayNone()
         num  >= 61 && num <= 100? HairColor = "Blond" :displayNone()
       }
       if(Race == "Khuzdul")
       {
         num  >= 1 && num <= 40? HairColor = "Brown" :displayNone() 
         num  >= 41 && num <= 45? HairColor = "Black" :displayNone() 
         num  >= 46 && num <= 70? HairColor = "Red" :displayNone() 
         num  >= 71 && num <= 90? HairColor = "Silver" :displayNone()
         num  >= 91 && num <= 100? HairColor = "Blond" :displayNone()
       }
       
        console.log(HairColor); 
     }
     whatsMyEyeColor(num,Race)
     {
       // Human Sindarin Khuzdul
        //  Brown Hazel Gray Violet Green Blue
       let eyeColor;
       function displayNone(){return null;}
       if(Race == "Human")
       {
         num  >= 1 && num <= 40? eyeColor = "Brown" :displayNone() 
         num  >= 41 && num <= 45? eyeColor = "Hazel" :displayNone() 
         num  >= 46 && num <= 55? eyeColor = "Gray" :displayNone() 
         num  >= 56? eyeColor = "Violet" :displayNone()
         num  >= 57 && num <= 70? eyeColor = "Green" :displayNone()
         num  >= 71 && num <= 100? eyeColor = "Blue" :displayNone()
       }
       if(Race == "Sindarin")
       {
         num  >= 1 && num <= 15? eyeColor = "Brown" :displayNone() 
         num  >= 16 && num <= 20? eyeColor = "Hazel" :displayNone() 
         num  >= 21 && num <= 65? eyeColor = "Gray" :displayNone() 
         num  >= 66 && num <= 75? eyeColor = "Violet" :displayNone()
         num  >= 76 && num <= 80? eyeColor = "Green" :displayNone()
         num  >= 81 && num <= 100? eyeColor = "Blue" :displayNone()
       }
       if(Race == "Khuzdul")
       {
         num  >= 1 && num <= 50? eyeColor = "Brown" :displayNone() 
         num  >= 51 && num <= 55? eyeColor = "Hazel" :displayNone() 
         num  >= 56 && num <= 69? eyeColor = "Gray" :displayNone() 
         num  >= 70? eyeColor = "Violet" :displayNone()
         num  >= 71 && num <= 85? eyeColor = "Green" :displayNone()
         num  >= 86 && num <= 100? eyeColor = "Blue" :displayNone()
       }
       
        console.log(eyeColor); 
     }




//   you can write your next method here.......⬇️⬇️⬇️


 

// all functions  before this ending brack......⬆️⬆️⬆️
}



