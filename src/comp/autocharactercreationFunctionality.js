import { ValueGetter } from "./variablesContainer";
const done = new ValueGetter();

export const makeitForMe = class
{
    // 100 roll
   chooseRaceForMe(num)
   {
         if(num <= 97){
              return "Human" ;
         }else if(num == 98){ return "Sindarin" }else{ return 'Khuzdul';}
   }
// 100 roll
      chooseSexForMe(num,Species)
      {
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
        // let mul = 0;

        // num12 > 12?mul  = (num12 -2) *30:mul = (num12 -1) *30;
         let mul  = (num12 -1) *30;
         
        //  console.log(num12)
        //  console.log(mul)

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
     console.log(boldTable);
     console.log(finalbirthPplaceResult);
      //   end of function 
   }

   giveMeAsocialClass(culture)
   {
      // it needs Culture from the birth table of place of birth
      switch(culture) {
         case "Barbarian":
           // Tribal roll

           break;
         case "Melderyn":
           // Viking

           break;
         case "Tharda":
            // Imperial

              break;
         default:
           // Feudal class

       }
   }



   // all functions  before this ending brack......
}



