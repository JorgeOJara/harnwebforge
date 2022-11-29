//  this its a big class that contains simple values for the game nothing else ... just values
// it helps to recall information of the game 
export class ValueGetter{
// frame => 3d6 +/- modifier if needed
frame = {
"Modifiers":[-3,-2,+3],
"Frame":['Scant','Light','Medium','Heavy','Massive']
}

// height => male listed first, female second, khuzdul are same 4d6
heightOfCharacters = {
"Human":['54+4d6','52+4d6'],
"Sindarin":['51+4d6','50+4d6'],
"Khuzdul":['40+4d6']
}

// weight => first # is height, second # is weight for that height; multiply weight by frame modifier for final weight
finalWeight = {
"Frame Modifier":[['Scant',0.8],['Light',0.9],['Medium',1],['Heavy',1.1],['Massive',1.2]],
"Weight":[[40,75],[41,77],[42,79],[43,81],[44,83],[45,85],[46,87],[47,89],[48,91],[49,93],
[50,95],[51,97],[52,100],[53,103],[54,106],[55,109],[56,112],[57,115],[58,118],[59,121],
[60,124],[61,127],[62,130],[63,133],[64,137],[65,141],[66,145],[67,149],[68,153],[69,157],
[70,160],[71,165],[72,170],[73,175],[74,180],[75,185],[76,190],[77,195],[78,200],[79,205],
[80,210],[81,215],[82,220],[83,225],[84,230],[85,235],[86,240],[87,245],[88,250],[89,255]]
}

// Comeliness => 3d6 (+ modifier ONLY if Sindarin)
Comeliness  = { 
	"Modifier":[+2],
	"Comeliness":['Ugly','Plain','Average','Attractive','Handsome']
}

Complexion = ['Fair','Medium','Dark'];

eyeColor = ['Brown','Hazel','Gray','Violet','Green','Blue'];

hairColor = ['Brown','Black','Red','Silver','Blond'];


// Key Attribute => optional rule, roll 4d6, discarding the lowest roll

//intelligence [key] => 3d6
intelligence = {
"Memory":['Absent Minded','Forgetful','Average','Good','Excellent'],
"Reasoning":['Moronic/Stupid','Slow Witted','Average','Clever','Genius']
}

//aura [key] => 3d6 +/- modifiers
aura = {"Species Modifiers":[+2, +4, -2] }

//will [key] => 3d6 + modifiers
Species = {"Species Modifiers": [+3] }

//morality => choice or 3d6 + modifiers
morality = {
"Species Modifiers":[+3],
"Morality Descriptions":['Diabolical','Unscrupulous','Corruptible','Law-Abiding','Principled','Exemplary']
}

//deity => choice

//piety => 5d6

//Medical table; optional, roll 1d100; should allow player to add 2 points to their any stats no affected directly by whatever they roll on this table
MedicalTable = {
	"Human":['Addiction','Albinism','Allergy','Ambidextrous','Arm','Birthmark(s)','Dwarfism','Epilepsy','Ear','Eye','Gigantism','Hemophilia','Hirsutism','Leg','Left-handed','Leprosy','Lycanthropy','Monochromasia','Obesity','Parasites','Poxmarks (healed)','Scars','Sterile','Multiple Traits','No Medical Traits'],
    "Sindarin":['Addiction','Albinism','Allergy','Ambidextrous','Arm','Birthmark(s)','Dwarfism','Sterile','Ear','Eye','Gigantism','Sterile','Hirsutism','Leg','Left-handed','Sterile','Lycanthropy','Monochromasia','Obesity','Sterile','Sterile','Scars','Sterile','Multiple Traits','No Medical Traits'],
}

//psyche table; optional, roll 1d100; should allow a combination of GM Options
psycheTable  = {
	"Mental Disorder":['Acrophobia (fear of heights)','Aichmophobia (fear of sharp blades, etc','Algophobia (fear of pain)','Astraphobia (fear of thunder/lightning','Ballistophobia (fear of missiles)','Bulimia (eating mania)','Claustrophobia (fear of confined spaces)','Cynophobia (fear of dogs)','Dylexia (learning/reading disorder)','Entomophobia','Gamblamania (gambling mania)','Gephyrophobia (fear of crossing bridges','Heliophobia (fear of sun/daylight)','Hemophobia (fear of blood)','Hydrophobia (fear of water/drowning)','Hypochondria (imagined illnesses)','Ivashuphobia (fear of Ivashu)','Kleptomania (compulsion to steal)','Megalomania (exaggerated self-worth)','Mysophobia (fear of dirt/filth)','Multiple Personality*','Musophobia (fear of mice/rats)','Necrophobia (fear of corpses)','Nyctophobia (fear of darkness/night)','Ophidiophobia (fear of snakes)','Ornithophobia (fear of birds)','Paranoia/Persecution Complex','Psychopathy (cannot tell right from wrong)','Pvaraphobia (fear of magic/wizards)','Pyromania (fascination with fire)','Pyrophobia (fear of fire)','Sadism (pleasure inflicting pain)','Sex Mania/Deviancy','Theophobia (fear of divine retribution','Toxicophobia (fear of being poisoned)','Violent Temper (loses control)','Xenophobia (fear of strangers)','Yaelophobia (fear of the moon)','Multiple Disorders (roll twice more)','No Mental Disorders']
}

// Key Attribute => optional rule, roll 4d6, discarding the lowest roll
// for all Species Modifiers, Khuzdul are listed first, Sindarin second

// strength [key] => 3d6 +/- modifiers
strength = { "Species Modifiers":[+4, +1], "Weight Modifiers":[-4, -3, -2, -1, +0, +1, +2, +3, +4] }

//stamina [key] => 3d6 + modifiers
stamina = { "Species Modifiers":[+4, +1] }

//dexterity [key] => 3d6 + modifiers
dexterity = { "Species Modifiers":[+1, +2] }

//agility [key] => 3d6 +/- modifiers
agility = { "Species Modifiers":[+2], "Frame Modifiers":[+2, +1, -1, -2] }

//eyesight => 3d6 + modifiers
eyesight = { "Species Modifiers":[+1, +2],  "Cultural Modifiers":[+1] }

//hearing => 3d6 + modifiers
hearing = { "Species Modifiers":[+2, +2], "Cultural Modifiers":[+2] }

//smell => 3d6 + modifiers
smell = { "Species Modifiers":[+2, +3], "Cultural Modifiers":[+2] }

//voice => 3d6 + modifiers
voice  = { "Species Modifiers":[+2] }


  //birthplace table
birthTable = {
"Barbarian":['Adaenum','Anoa','Bujoc','Chelni','Chymak','Equani','Gozyda','Hodiri','Kabloqui','Kamaki','Kath','Kubora','Pagaelin','Solori','Taelda','Tulwyn','Urdu','Ymodi'],

"Chybisa":['Burzyn','Geda','Lerenil','Onden'],

"Kaldor":['Athelren','Baseta','Bidow','Esenor','Fisen','Gardiren','Getha','Heru','Hutop','Jedes','Kiban','Kobing','Kolorn','Kyg','Minarsas','Nenda','Nubeth','Olokand','Pendeth','Qualdris','Querina','Setrew','Shebra','Sirendel','Tashal','Ternua','Tonot','Uldien','Yeged','Zoben'],


"Kanday":['Aleath','Avertu','Chison','Cuton','Dunir','Dyrisa','Edino','Ewen','Findumon','Gimon','Hebon','Heroth','Ibonost','Imiden','Kedis','Menekod','Minilaous','Ohetis','Pinide','Quivum','Sarkum','Selvos','Sepire','Sumon','Torthan','Zerien'],

"Melderyn":['Cherafir','Chyrefal','Cosyuh','Cundras','Cupeth','Fosumo','Glenoth','Gosus','Gythrun','Harden','Huvos','Jetust','Jothet','Karveth','Laket','Lyf','Menio','Moque','Nurisel','Ontur','Parios','Parnam','Racyn','Ramere','Shenap','Thay','Wharo','Yael','Zuilos'],

"Orbaal":['Aaldem','Antir','Arathel','Arone','Asax','Daasen','Ebein','Fjaga','Geldeheim','Gwaeryn','Gyfyn','Hjael','Keiren','Kjen','Leriel','Lorkin','Marby','Mul','Pethwys','Pjagel','Pled','Pyberg','Quiam','Quimen','Sherwyn','Shese','Shien','Tandir','Tawheim','Teryff','Thoen','Thrand','Thursa','Utera','Vaagel','Vold','Wethom','Zuden','Zynhold'],

"Rethem":['Arketh','Bedenes','Bekar','Chakta','Dasen','Golotha','Henwe','Hyen','Ithiko','Ithius','Menekai','Norienar','Omnis','Phira','Quiso','Quste','Senun','Shostim','Techen','Themeson','Thiri','Tormau','Weseda','Winen','Zaza'],

"Tharda":['Bythe','Cestor','Chenad','Coranan','Dumon','Eidru','Esuron','Firis','Fobin','Geminost','Geshtei','Hediro','Hibut','Imrium','Kuseme','Moleryn','Noru','Ostenor','Parnan','Peden','Shiran','Stimos','Telen'],
// elshavel Sindarin
// ulfshafen Sindarin
"Misc":['Elshavel','Habe','Noron','Trobridge','Ulfshafen']
}
//regional

//birthdate month
birthMonth = {
"Spring":['Nuzyael','Peonu','Kelen'],
"Summer":['Nolus','Larane','Agrazhar'],
"Autumn":['Azura','Halane','Savor'],
"Winter":['Ilvin','Navek','Morgat']
}


//sunsigns and related symbols
sunsigns = {
"Sunsign":['Ulandus','Aralius','Feniri','Ahnu','Angberelius','Nadai','Hirin','Tarael','Tai','Skorus','Masara','Lado'],
"Symbol":['Tree','Wands','Smith','Fire Dragon','Flaming Swords','Salamander','Eagle','Pentacle','Lantern Bearer','Mixer','Chalice','Galley']
}


//social class
socialClass = {
"Tribal":['Slave','Unguilded','Nobility'],
"Viking":['Slave','Unguilded','Guilded','Nobility'],
"Feudal":['Slave','Serf','Unguilded','Guilded','Nobility'],
"Imperial":['Slave','Unguilded','Guilded','Nobility'],
"Sindarin":['Unguilded','Guilded','Nobility'],
"Khuzan":['Unguilded','Guilded','Nobility']
}

// /////////////////////////////
  // we need another field that make you choose what it does as part of the social class..
////////////////////////////

//tribal culture
tribalCulture = {
"Slave":['Farmer','Herdsman','Cook/Servant'],
"Unguilded":['Cleric/Shaman','Fisherman','Herdsman','Hunter Trapper'],
"Nobility":['Tribal Chieftain']
}

//viking culture
vikingCulture = {
"Slave":['Farmer','Herdsman','Cook/Servant'],
"Unguilded":['Animal Trainer','Beggar/Scavenger','Cartographer/Artist','Cleric/Shaman',
	'Cook/Servant','Farmer (freehold)','Fisherman','Herdsman','Hunter/Trapper','Laborer/Longshoreman',
	'Prostitute/Pimp','Ratter','Sage/Tutor','Scribe','Soldier:Legionnaire/Guardsman','Soldier:Mercenary/Viking',
	'Teamster','Thatcher','Toymaker'],
"Guilded":['Alchemist','Apothecary','Astrologer','Chandler','Charcoaler','Clothier','Courtesan',
	'Embalmer','Glassworker','Harper/Skald','Hideworker','Innkeeper','Jeweler','Lexigrapher','Litigant',
	'Locksmith','Mage (Shek-Pvar)','Mason','Mercantyler','Metalsmith','Miller/Millwright','Miner',
	'Ostler','Perfumer','Physician','Pilot','Potter','Salter','Seaman','Shipwright','Tentmaker','Thespian',
	'Thief (Lia-Kavair)','Timberwright','Weaponcrafter','Woodcrafter'],
"Nobility":['Herald (noble)','Knight/Patrician/Lady']
}

//feudal culture
feudalCulture = {
"Slave":['Farmer','Herdsman','Cook/Servant'],
"Serf":['Farmer','Herdsman','Cook/Servant'],
"Unguilded":['Animal Trainer','Beggar/Scavenger','Cartographer/Artist','Cleric/Shaman',
	'Cook/Servant','Farmer (freehold)','Fisherman','Gladiator','Herdsman','Hunter/Trapper','Laborer/Longshoreman',
	'Prostitute/Pimp','Ratter','Sage/Tutor','Scribe','Soldier:Legionnaire/Guardsman','Soldier:Mercenary/Viking',
	'Soldier:Yeoman','Teamster','Thatcher','Toymaker'],
"Guilded":['Alchemist','Apothecary','Astrologer','Chandler','Charcoaler','Clothier','Courtesan',
	'Embalmer','Glassworker','Harper/Skald','Hideworker','Innkeeper','Jeweler','Lexigrapher','Litigant',
	'Locksmith','Mage (Shek-Pvar)','Mason','Mercantyler','Metalsmith','Miller/Millwright','Miner',
	'Ostler','Perfumer','Physician','Pilot','Potter','Salter','Seaman','Shipwright','Tentmaker','Thespian',
	'Thief (Lia-Kavair)','Timberwright','Weaponcrafter','Woodcrafter'],
"Nobility":['Cleric (noble)','Herald (noble)','Bailiff (manor)','Knight-Bachelor/Lady','Knight/Patrician/Lady']
}

//imperial culture
imperialCulture = {
"Slave":['Farmer','Herdsman','Cook/Servant','Gladiator/Guard'],
"Unguilded":['Animal Trainer','Beggar/Scavenger','Cartographer/Artist','Cleric/Shaman',
	'Cook/Servant','Farmer (freehold)','Fisherman','Gladiator','Herdsman','Hunter/Trapper','Laborer/Longshoreman',
	'Prostitute/Pimp','Ratter','Sage/Tutor','Scribe','Soldier:Legionnaire/Guardsman','Soldier:Mercenary/Viking',
	'Teamster','Thatcher','Toymaker'],
"Guilded":['Alchemist','Apothecary','Astrologer','Chandler','Charcoaler','Clothier','Courtesan',
	'Embalmer','Glassworker','Harper/Skald','Hideworker','Innkeeper','Jeweler','Lexigrapher','Litigant',
	'Locksmith','Mage (Shek-Pvar)','Mason','Mercantyler','Metalsmith','Miller/Millwright','Miner',
	'Ostler','Perfumer','Physician','Pilot','Potter','Salter','Seaman','Shipwright','Tentmaker','Thespian',
	'Thief (Lia-Kavair)','Timberwright','Weaponcrafter','Woodcrafter'],
"Nobility":['Cleric (noble)','Herald (noble)','Bailiff (manor)','Knight/Patrician/Lady']
}

//sindarin culture
sindarinCulture = { 
"Unguilded":['Animal Trainer','Cartographer/Artist','Cleric/Shaman','Cook/Servant','Fisherman',
	'Hunter/Trapper','Scribe','Soldier:Legionnaire/Guardsman','Soldier:Mercenary/Viking','Teamster','Thatcher','Toymaker'],
"Guilded":['Alchemist','Apothecary','Astrologer','Chandler','Charcoaler','Clothier',
	'Embalmer','Glassworker','Harper/Skald','Hideworker','Innkeeper','Jeweler','Lexigrapher',
	'Locksmith','Mage (Shek-Pvar)','Mason','Mercantyler','Metalsmith','Miller/Millwright','Miner',
	'Ostler','Perfumer','Physician','Pilot','Potter','Salter','Seaman','Shipwright','Tentmaker','Thespian',
	'Thief (Lia-Kavair)','Timberwright','Weaponcrafter','Woodcrafter'],
"Nobility":['Herald (noble)','Knight/Patrician/Lady']
}

//khuzan culture
khuzanCulture = {
"Unguilded":['Animal Trainer','Cartographer/Artist','Cleric/Shaman','Cook/Servant',
	'Hunter/Trapper','Laborer/Longshoreman','Sage/Tutor','Scribe','Soldier:Legionnaire/Guardsman',
	'Teamster','Toymaker'],
"Guilded":['Alchemist','Apothecary','Astrologer','Chandler','Charcoaler','Clothier',
	'Embalmer','Glassworker','Harper/Skald','Hideworker','Innkeeper','Jeweler','Lexigrapher','Litigant',
	'Locksmith','Mage (Shek-Pvar)','Mason','Mercantyler','Metalsmith','Miller/Millwright','Miner',
	'Perfumer','Physician','Potter','Salter','Tentmaker','Thespian','Thief (Lia-Kavair)','Timberwright',
	'Weaponcrafter','Woodcrafter'],
"Nobility":['Herald (noble)','Knight/Patrician/Lady']
}
avarageof = {
	"002-005":['Lado-Ulandus cusp'],
	"006-031":['Ulandus (the Tree'],
	"032-035":['Ulandus-Aralius cusp'],
	"036-060":['Aralius (the Wands'],
	"061-064":['Aralius-Feniri cusp'],
	"065-091":['Feniri (the Smith)'],
	"092-095":['Feniri-Ahnu cusp'],
	"096-122":['Ahnu (the Fire Dragon'],
	"123-126":['Ahnu-Angberelius cusp'],
	"127-154":['Angberelius (the Swords'],
	"155-158":['Angberelius-Nadai cusp'],
	"159-183":['Nadai (the Salamander)'],
	"184-187":['Nadai-Hirin cusp'],
	"188-212":['Hirin (the Eagle)'],
	"213-216":['Hirin-Tarael cusp'],
	"217-241":['Tarael (the Pentacle)'],
	"242-245":['Tarael-Tai cusp'],
	"246-270":['Tai (the Lantern Bearer'],
	"271-274":['Tai-Skorus cusp'],
	"275-300":['Skorus (the Mixer)'],

	"301-303":['Skorus-Masara cusp'],
	"304-329":['Masara (the Chalice)'],
	"330-333":['Masara-Lado cusp'],
	"334-001":['Lado (the Galley)']
	}
// end of constructor -----------------------------------------

}



// module.exports = ValueGetter;