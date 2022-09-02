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
    num1 >= 1 && num1 <= 18? boldTable = "Barbarian":displayNothing();
    num1 >= 19 ? boldTable = "Chybisa": displayNothing();
    num1 >= 20 && num1 <= 32? boldTable = "Kaldor": displayNothing();
    num1 >= 33 && num1 <= 44? boldTable = "Kanday": displayNothing();
    num1 >= 45 && num1 <= 64? boldTable = "Melderyn": displayNothing();
    num1 >= 65 && num1 <= 74? boldTable = "Orbaal": displayNothing();
    num1 >= 75 && num1 <= 86? boldTable = "Rethem": displayNothing();
    num1 >= 87 && num1 <= 99? boldTable = "Tharda": displayNothing();
    num1 >= 100 ? boldTable = "Misc": displayNothing();

    let finalbirthPplaceResult;

     if(boldTable == "Barbarian")
     {
        num2 >= 1 && num2 <= 5? finalbirthPplaceResult = "Adaenum":displayNothing();
        num2 >= 6 && num2 <= 9? finalbirthPplaceResult = "Anoa": displayNothing();
        num2 >= 10 && num2 <= 12? finalbirthPplaceResult = "Bujoc": displayNothing();
        num2 >= 13 && num2 <= 16? finalbirthPplaceResult = "Chelni": displayNothing();
        num1 >= 17 ? boldTable = "Chymak": displayNothing();
        num2 >= 18 && num2 <= 23? finalbirthPplaceResult = "Equani": displayNothing();
        num2 >= 24 && num2 <= 27? finalbirthPplaceResult = "Gozyda": displayNothing();
        num2 >= 28 && num2 <= 43? finalbirthPplaceResult = "Hodiri": displayNothing();
        num2 >= 44 ? boldTable = "Kabloqui": displayNothing();
        num2 >= 45 && num2 <= 46? finalbirthPplaceResult = "Kamaki": displayNothing();
        num2 >= 47 && num2 <= 48? finalbirthPplaceResult = "Kath": displayNothing();
        num2 >= 49 && num2 <= 56? finalbirthPplaceResult = "Kubora": displayNothing();
        num2 >= 57 && num2 <= 68? finalbirthPplaceResult = "Pagaelin": displayNothing();
        num2 >= 69 && num2 <= 71? finalbirthPplaceResult = "Solori": displayNothing();
        num2 >= 72 && num2 <= 82? finalbirthPplaceResult = "Taelda": displayNothing();
        num2 >= 83 && num2 <= 92? finalbirthPplaceResult = "Tulwyn": displayNothing();
        num2 >= 93 && num2 <= 98? finalbirthPplaceResult = "Urdu": displayNothing();
        num2 >= 99 && num2 <= 100? finalbirthPplaceResult = "Ymodi": displayNothing();
     }
     if(boldTable == "Chybisa")
     {
        num2 >= 1 && num2 <= 40? finalbirthPplaceResult = "Burzyn":displayNothing();
        num2 >= 41 && num2 <= 60? finalbirthPplaceResult = "Geda": displayNothing();
        num2 >= 61 && num2 <= 75? finalbirthPplaceResult = "Lerenil": displayNothing();
        num2 >= 76 && num2 <= 100? finalbirthPplaceResult = "Onden": displayNothing();

     }
     if(boldTable == "Kaldor")
     {
        num2 >= 1 && num2 <= 2? finalbirthPplaceResult = "Athelren":displayNothing();
        num2 >= 3 && num2 <= 4? finalbirthPplaceResult = "Baseta": displayNothing();
        num2 >= 5 && num2 <= 6? finalbirthPplaceResult = "Bidow": displayNothing();
        num2 >= 7 && num2 <= 9? finalbirthPplaceResult = "Esenor": displayNothing();
        // num1 >= 17 ? boldTable = "Chymak": displayNothing();
        num2 >= 10 && num2 <= 11? finalbirthPplaceResult = "Fisen": displayNothing();
        num2 >= 12 && num2 <= 17? finalbirthPplaceResult = "Gardiren": displayNothing();
        num2 >= 18 ? boldTable = "Getha": displayNothing();
        num2 >= 19 && num2 <= 20? finalbirthPplaceResult = "Heru": displayNothing();
        num2 >= 21 && num2 <= 22? finalbirthPplaceResult = "Hutop": displayNothing();
        num2 >= 23 ? boldTable = "Jedes": displayNothing();
        num2 >= 24 && num2 <= 31? finalbirthPplaceResult = "Kiban": displayNothing();
        num2 >= 32 && num2 <= 33? finalbirthPplaceResult = "Kobing": displayNothing();
        num2 >= 34 && num2 <= 36? finalbirthPplaceResult = "Kolorn": displayNothing();
        num2 >= 37 && num2 <= 38? finalbirthPplaceResult = "Kyg": displayNothing();
        num2 >= 39 && num2 <= 46? finalbirthPplaceResult = "Minarsas": displayNothing();
        num2 >= 47 && num2 <= 48? finalbirthPplaceResult = "Nenda": displayNothing();
        num2 >= 49 && num2 <= 50? finalbirthPplaceResult = "Nubeth": displayNothing();
        num2 >= 51 && num2 <= 56? finalbirthPplaceResult = "Olokand": displayNothing();
        num2 >= 57 && num2 <= 58? finalbirthPplaceResult = "Pendeth": displayNothing();
        num2 >= 59 && num2 <= 65? finalbirthPplaceResult = "Qualdris": displayNothing();
        num2 >= 66 && num2 <= 70? finalbirthPplaceResult = "Querina": displayNothing();
        num2 >= 71 && num2 <= 72? finalbirthPplaceResult = "Setrew": displayNothing();
        num2 >= 73 && num2 <= 75? finalbirthPplaceResult = "Shebra": displayNothing();
        num2 >= 76 && num2 <= 77? finalbirthPplaceResult = "Sirendel": displayNothing();
        num2 >= 78 && num2 <= 88? finalbirthPplaceResult = "Tashal": displayNothing();
        num2 >= 89 && num2 <= 91? finalbirthPplaceResult = "Ternua": displayNothing();
        num2 >= 92 && num2 <= 93? finalbirthPplaceResult = "Tonot": displayNothing();
        num2 >= 94 && num2 <= 96? finalbirthPplaceResult = "Uldien": displayNothing();
        num2 >= 97 && num2 <= 98? finalbirthPplaceResult = "Yeged": displayNothing();
        num2 >= 99 && num2 <= 100? finalbirthPplaceResult = "Zoben": displayNothing();
     }
     if(boldTable == "Kanday")
     {
        num2 >= 1 && num2 <= 16? finalbirthPplaceResult = "Aleath":displayNothing();
        num2 >= 17 && num2 <= 18? finalbirthPplaceResult = "Avertu": displayNothing();
        num2 >= 19 && num2 <= 20? finalbirthPplaceResult = "Chison": displayNothing();
        num2 >= 21 && num2 <= 22? finalbirthPplaceResult = "Cuton": displayNothing();
        num2 >= 23 ? boldTable = "Dunir": displayNothing();
        num2 >= 24 && num2 <= 31? finalbirthPplaceResult = "Dyrisa": displayNothing();
        num2 >= 32 && num2 <= 33 ? finalbirthPplaceResult = "Edino": displayNothing();
        num2 >= 34 && num2 <= 38? finalbirthPplaceResult = "Ewen": displayNothing();
        num2 >= 39 && num2 <= 40? finalbirthPplaceResult = "Findumon": displayNothing();
        num2 >= 41 ? boldTable = "Gimon": displayNothing();
        num2 >= 42 ? boldTable = "Hebon": displayNothing();
        num2 >= 43 && num2 <= 46? finalbirthPplaceResult = "Heroth": displayNothing();
        num2 >= 47 ? boldTable = "Ibonost": displayNothing();
        num2 >= 48 && num2 <= 51? finalbirthPplaceResult = "Imiden": displayNothing();
        num2 >= 52 && num2 <= 57? finalbirthPplaceResult = "Kedis": displayNothing();
        num2 >= 58 && num2 <= 62? finalbirthPplaceResult = "Menekod": displayNothing();
        num2 >= 63 ? boldTable = "Minilaous": displayNothing();
        num2 >= 64 && num2 <= 66? finalbirthPplaceResult = "Ohetis": displayNothing();
        num2 >= 67 && num2 <= 68? finalbirthPplaceResult = "Pinide": displayNothing();
        num2 >= 69 && num2 <= 72? finalbirthPplaceResult = "Quivum": displayNothing();
        num2 >= 73 && num2 <= 78? finalbirthPplaceResult = "Sarkum": displayNothing();
        num2 >= 79 && num2 <= 85? finalbirthPplaceResult = "Selvos": displayNothing();
        num2 >= 86 && num2 <= 91? finalbirthPplaceResult = "Sepire": displayNothing();
        num2 >= 92 && num2 <= 97? finalbirthPplaceResult = "Sumon": displayNothing();
        num2 >= 98 ? boldTable = "Torthan": displayNothing();
        num2 >= 991 && num2 <= 100? finalbirthPplaceResult = "Zerien": displayNothing();
        
     }
     if(boldTable == "Melderyn")
     {
        
     }
     if(boldTable == "Orbaal")
     {
        
     }
     if(boldTable == "Rethem")
     {
        
     }
     if(boldTable == "Tharda")
     {
        
     }
     if(boldTable == "Misc")
     {
        
     }
   }

}



