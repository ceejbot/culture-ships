'use strict';

const ships = [
	"(D)GOU Limiting Factor",
	"(D)ROU Zealot",
	"(ex-)GCU Smile Tolerantly",
	"Beastly To The Animals",
	"Clipper Screw Loose",
	"Cruise Ship Just Passing Through",
	"Fixed Grin",
	"FP/(D)GOU Eight Rounds Rapid",
	"FP/(D)GOU No One Knows What The Dead Think",
	"FP/(D)LOU Hylozoist",
	"FP/(D)ROU Refreshingly Unconcerned With The Vulgar Exigencies Of Veracity",
	"FP/(D)ROU The Usual But Etymologically Unsatisfactory",
	"FP/(D)ROU Value Judgement",
	"GCU A Series Of Unlikely Explanations",
	"GCU A Ship With A View",
	"GCU Ablation",
	"GCU Arbitrary",
	"GCU Armchair Traveller",
	"GCU Arrested Development",
	"GCU Big Sexy Beast",
	"GCU Bodhisattva, OAQS",
	"GCU Boo!",
	"GCU Cantankerous",
	"GCU Credibility Problem",
	"GCU Different Tan",
	"GCU Displacement Activity",
	"GCU Dramatic Exit",
	"GCU Excuses And Accusations",
	"GCU Experiencing A Significant Gravitas Shortfall",
	"GCU Fate Amenable To Change",
	"GCU Flexible Demeanour",
	"GCU Funny, It Worked Last Time...",
	"GCU God Told Me To Do It",
	"GCU Grey Area",
	"GCU Halation Effect",
	"GCU Happy Idiot Talk",
	"GCU Helpless In The Face Of Your Beauty",
	"GCU Heresiarch",
	"GCU I Thought He Was With You",
	"GCU It'll Be Over By Christmas",
	"GCU It's Character Forming",
	"GCU It's My Party And I'll Sing If I Want To",
	"GCU Jaundiced Outlook",
	"GCU Just Another Victim Of The Ambient Morality",
	"GCU Just Read The Instructions",
	"GCU Just Testing",
	"GCU Lightly Seared On The Reality Grill",
	"GCU Minority Report",
	"GCU Nervous Energy",
	"GCU Never Talk To Strangers",
	"GCU Not Wanted On Voyage",
	"GCU Of Course I Still Love You",
	"GCU Only Slightly Bent",
	"GCU Perfidy",
	"GCU Problem Child",
	"GCU Prosthetic Conscience",
	"GCU Pure Big Mad Boat Man",
	"GCU Qualifier",
	"GCU Reasonable Excuse",
	"GCU Recent Convert",
	"GCU Sacrificial Victim",
	"GCU Space Monster",
	"GCU Stranger Here Myself",
	"GCU Sweet and Full of Grace",
	"GCU Synchronize Your Dogmas",
	"GCU Tactical Grace",
	"GCU Thank You And Goodnight",
	"GCU The Precise Nature Of The Catastrophe",
	"GCU Transient Atmospheric Phenomenon",
	"GCU Ultimate Ship The Second",
	"GCU Unacceptable Behaviour",
	"GCU Undesirable Alien",
	"GCU Unwitting Accomplice",
	"GCU Very Little Gravitas Indeed",
	"GCU Warm, Considering",
	"GCU Well I Was In The Neighbourhood",
	"GCU You Naughty Monsters",
	"GCU You Would If You Really Loved Me",
	"GCU You'll Thank Me Later",
	"GCV Steely Glint",
	"GCV Subtle Shift In Emphasis",
	"GOU Headcrash",
	"GOU Questionable Ethics",
	"GOU Xenocrat",
	"GOU/PS Falling Outside The Normal Moral Constraints",
	"GSV A Fine Disregard For Awkward Facts",
	"GSV Anticipation Of A New Lover's Arrival, The",
	"GSV Bad For Business",
	"GSV Bora Horza Gobuchul",
	"GSV Cargo Cult",
	"GSV Congenital Optimist",
	"GSV Contents May Differ",
	"GSV Death And Gravity",
	"GSV Determinist",
	"GSV Dressed Up To Party",
	"GSV Empiricist",
	"GSV Eschatologist",
	"GSV Ethics Gradient",
	"GSV Experiencing A Significant Gravitas Shortfall",
	"GSV Honest Mistake",
	"GSV Irregular Apocalypse",
	"GSV Just The Washing Instruction Chip In Life's Rich Tapestry",
	"GSV Kakistocrat",
	"GSV Lasting Damage",
	"GSV Lasting Damage I",
	"GSV Lasting Damage II",
	"GSV Limivorous",
	"GSV Little Rascal",
	"GSV No Fixed Abode",
	"GSV No More Mr Nice Guy",
	"GSV Pelagian",
	"GSV Quietly Confident,",
	"GSV Sanctioned Parts List",
	"GSV Seed Drill",
	"GSV Sense Amid Madness, Wit Amidst Folly",
	"GSV Size Isn't Everything",
	"GSV So Much For Subtlety",
	"GSV The Answer Is Almost Certainly Yes",
	"GSV Teething Problems",
	"GSV The Ends Of Invention",
	"GSV Total Internal Reflection",
	"GSV Unfortunate Conflict Of Evidence",
	"GSV Uninvited Guest",
	"GSV Unreliable Witness",
	"GSV Use Psychology",
	"GSV What Are The Civilian Applications?",
	"GSV What Is The Answer And Why?",
	"GSV Wisdom Like Silence",
	"GSV Yawning Angel",
	"GSV Youthful Indiscretion",
	"GSV Zero Gravitas",
	"Hidden Income",
	"I Blame My Mother",
	"I Blame Your Mother",
	"LCU Anything Legal Considered",
	"LCU Beats Working",
	"Liveware Problem",
	"LOU Attitude Adjuster",
	"LOU Caconym",
	"LOU Gunboat Diplomat",
	"LOU New Toy",
	"LSV Misophist",
	"LSV Profit Margin",
	"LSV Serious Callers Only",
	"LSV Xenoglossicist",
	"LSV You Call This Clean?",
	"MSV Don't Try This At Home",
	"MSV Not Invented Here",
	"MSV Passing By And Thought I'd Drop In",
	"MSV Pressure Drop",
	"Now We Try It My Way",
	"OU/e Mistake Not…",
	"ROU Frank Exchange Of Views",
	"ROU Heavy Messing",
	"ROU Killing Time",
	"ROU Learned Response",
	"ROU Nuisance Value",
	"ROU Revisionist",
	"ROU Trade Surplus",
	"Scar Glamour",
	"Shoot Them Later",
	"Superlifter Charitable View",
	"Superlifter Kiss My Ass",
	"Superlifter Prime Mover",
	"Superlifter Zoologist",
	"VFP/(D)LOU Rapid Random Response Unit",
	"VFP/(D)ROU Outstanding Contribution To The Historical Process",
	"VFP/(D)ROU Resistance Is Character-Forming",
	"VFP/(D)ROU Xenophobe",
	"VFP/(D)ROU You'll Clean That Up Before You Leave",
];

exports.ships = ships;

exports.random = function random()
{
    const random = Math.floor(Math.random() * (ships.length + 1));
    return ships[random];
};
