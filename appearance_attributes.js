// frame => 3d6 +/- modifier if needed
const frame = {
"Modifiers":[-3,-2,+3],
"Frame":['Scant','Light','Medium'.'Heavy','Massive']
}

// height => male listed first, female second, khuzdul are same 4d6
const heightOfCharacters = {
"Human":['54+4d6','52+4d6'],
"Sindarin":['51+4d6','50+4d6'],
"Khuzdul":['40+4d6']
}

// weight => first # is height, second # is weight for that height; multiply weight by frame modifier for final weight
const finalWeight = {
"Frame Modifier":[['Scant',0.8],['Light',0.9],['Medium',1],['Heavy',1.1],['Massive',1.2]],
"Weight":[[40,75],[41,77],[42,79],[43,81],[44,83],[45,85],[46,87],[47,89],[48,91],[49,93],
[50,95],[51,97],[52,100],[53,103],[54,106],[55,109],[56,112],[57,115],[58,118],[59,121],
[60,124],[61,127],[62,130],[63,133],[64,137],[65,141],[66,145],[67,149],[68,153],[69,157],
[70,160],[71,165],[72,170],[73,175],[74,180],[75,185],[76,190],[77,195],[78,200],[79,205],
[80,210],[81,215],[82,220],[83,225],[84,230],[85,235],[86,240],[87,245],[88,250],[89,255]]
}

// Comeliness => 3d6 (+ modifier ONLY if Sindarin)

const Comeliness  = { "Modifier":[+2],"Comeliness":['Ugly','Plain','Average','Attractive','Handsome']}

const Complexion = ['Fair','Medium','Dark'];

const eyeColor = ['Brown','Hazel','Gray','Violet','Green','Blue'];

const hairColor = ['Brown','Black','Red','Silver','Blond'];