let data = [
  {school:'Alabama',team: 'Crimson Tide',logo:'333.png',city:'',state:'',seed:'1',info:''},
  {school:'Houston',team: 'Cougars',logo:'248.png',city:'Houston',state:'Texas',seed:'1',info:''},
  {school:'Kansas',team: 'Jayhawks',logo:'2305.png',city:'',state:'',seed:'1',info:''},
  {school:'Purdue',team: 'Boilermakers',logo:'2509.png',city:'West Lafayette',state:'Indiana',seed:'1',info:''},
  {school:'Arizona',team: 'Wildcats',logo:'12.png',city:'',state:'',seed:'2',info:''},
  {school:'Texas',team: 'Longhorns',logo:'251.png',city:'',state:'',seed:'2',info:''},
  {school:'UCLA',team: 'Bruins (bear)',logo:'26.png',city:'',state:'California',seed:'2',info:''},
  {school:'Marquette',team: 'Golden Eagles',logo:'269.png',city:'Milwakee',state:'Wisconsin',seed:'2',info:''},
  {school:'Baylor',team: 'Bears',logo:'239.png',city:'Waco',state:'Texas',seed:'3',info:''},
  {school:'Xavier',team: 'Musketeers',logo:'2752.png',city:'Cinci',state:'Ohio',seed:'3',info:''},
  {school:'Gonzaga',team: 'Bulldogs',logo:'2250.png',city:'Spokane',state:'Washingtion',seed:'3',info:''},
  {school:'Kansas State',team: 'Wildcats',logo:'2306.png',city:'',state:'',seed:'3',info:''},
  {school:'Virginia',team: 'Cavaliers',logo:'258.png',city:'',state:'',seed:'4',info:''},
  {school:'Indiana',team: 'Hoosiers',logo:'84.png',city:'',state:'',seed:'4',info:''},
  {school:'UConn',team: 'Huskies',logo:'41.png',city:'',state:'Connecticut',seed:'4',info:''},
  {school:'Tennessee',team: 'Volunteers',logo:'2633.png',city:'',state:'',seed:'4',info:''},
  {school:'San Diego State',team: 'Aztecs',logo:'21.png',city:'San Diego',state:'California',seed:'5',info:''},
  {school:'Miami',team: 'Hurricanes',logo:'2390.png',city:'',state:'',seed:'5',info:''},
  {school:'Saint Marys',team: 'Gaels',logo:'2608.png',city:'',state:'Indiana',seed:'5',info:''},
  {school:'Duke',team: 'Blue Devils',logo:'150.png',city:'',state:'',seed:'5',info:''},
  {school:'Creighton',team: 'Bluejays',logo:'156.png',city:'',state:'Nebraska',seed:'6',info:''},
  {school:'Iowa State',team: 'Cyclones',logo:'66.png',city:'',state:'',seed:'6',info:''},
  {school:'TCU',team: 'Horned Frogs',logo:'2628.png',city:'',state:'Texas',seed:'6',info:''},
  {school:'Kentucky',team: 'Wildcats',logo:'96.png',city:'',state:'Kentucky',seed:'6',info:''},
  {school:'Missouri',team: 'Tigers',logo:'142.png',city:'',state:'Missouri',seed:'7',info:''},
  {school:'Texas A&M',team: 'Aggies',logo:'245.png',city:'',state:'Texas',seed:'7',info:''},
  {school:'Northwestern',team: 'Wildcats',logo:'77.png',city:'Evanston',state:'Illinois',seed:'7',info:''},
  {school:'Michigan State',team: 'Spartans',logo:'127.png',city:'',state:'Michigan',seed:'7',info:''},
  {school:'Maryland',team: 'Terrapins (turtle)',logo:'120.png',city:'',state:'',seed:'8',info:''},
  {school:'Iowa',team: 'Hawkeyes',logo:'2294.png',city:'',state:'',seed:'8',info:''},
  {school:'Arkansas',team: 'Razorbacks',logo:'8.png',city:'',state:'',seed:'8',info:''},
  {school:'Memphis',team: 'Tigers',logo:'235.png',city:'',state:'',seed:'8',info:''},
  {school:'West Virginia',team: 'Mountaineers',logo:'277.png',city:'',state:'',seed:'9',info:''},
  {school:'Auburn',team: 'Tigers',logo:'2.png',city:'Auburn',state:'Alabama',seed:'9',info:''},
  {school:'Illinois',team: 'Fighting Illini',logo:'356.png',city:'',state:'',seed:'9',info:''},
  {school:'Florida',team: 'Atlantic Owls',logo:'2226.png',city:'',state:'',seed:'9',info:''},
  {school:'Utah State',team: 'Aggies',logo:'328.png',city:'',state:'',seed:'10',info:''},
  {school:'Penn State',team: 'Nittany Lions',logo:'213.png',city:'',state:'',seed:'10',info:''},
  {school:'Boise State',team: 'Broncos',logo:'68.png',city:'',state:'',seed:'10',info:''},
  {school:'USC',team: 'Trojans',logo:'30.png',city:'',state:'California',seed:'10',info:''},
  {school:'NC State',team: 'Wolfpack',logo:'152.png',city:'',state:'North Carolina',seed:'11',info:''},
  {school:'Mississippi State',team: 'Bulldogs',logo:'344.png',city:'',state:'',seed:'11',info:''},
  {school:'Pittsburgh',team: 'Panthers',logo:'221.png',city:'',state:'Pennsylvania',seed:'11',info:''},
  {school:'Arizona State',team: 'Sun Devils',logo:'9.png',city:'',state:'',seed:'11',info:''},
  {school:'Nevada',team: 'Wolf Pack',logo:'2440.png',city:'',state:'',seed:'11',info:''},
  {school:'Providence',team: 'Friars',logo:'2507.png',city:'',state:'RO',seed:'11',info:''},
  {school:'Charleston',team: 'Cougars',logo:'232.png',city:'',state:'SC',seed:'12',info:''},
  {school:'Drake',team: 'Bulldogs',logo:'2181.png',city:'Des Moines',state:'Iowa',seed:'12',info:''},
  {school:'VCU',team: 'Rams',logo:'2670.png',city:'Richmond',state:'Virginia',seed:'12',info:''},
  {school:'Oral Roberts',team: 'Golden Eagles',logo:'198.png',city:'',state:'Oklahoma',seed:'12',info:''},
  {school:'Furman',team: 'Paladins (knight)',logo:'231.png',city:'Greenville',state:'South Carolina',seed:'13',info:''},
  {school:'Kent State',team: 'Golden Flashes',logo:'2309.png',city:'',state:'Ohio',seed:'13',info:''},
  {school:'Iona',team: 'Gaels (Irish, Scottish)',logo:'314.png',city:'New Rochelle',state:'New York',seed:'13',info:''},
  {school:'Louisiana',team: 'Ragin Cajuns',logo:'309.png',city:'',state:'',seed:'13',info:''},
  {school:'UC Santa Barbara',team: 'Gauchos',logo:'2540.png',city:'',state:'California',seed:'14',info:''},
  {school:'Kennesaw State',team: 'Owls',logo:'338.png',city:'Kennesaw',state:'Georgia',seed:'14',info:''},
  {school:'Grand Canyon',team: 'Lopes',logo:'2253.png',city:'',state:'Arizona',seed:'14',info:''},
  {school:'Montana State',team: 'Bobcats',logo:'147.png',city:'',state:'',seed:'14',info:''},
  {school:'Princeton',team: 'Tigers',logo:'163.png',city:'Princeton',state:'New Jersey',seed:'15',info:''},
  {school:'Colgate',team: 'Raiders',logo:'2142.png',city:'Hamilton',state:'New York',seed:'15',info:''},
  {school:'UNC Asheville',team: 'Bulldogs',logo:'2427.png',city:'',state:'NC',seed:'15',info:''},
  {school:'Vermont',team: 'Catamounts (wild cat)',logo:'261.png',city:'',state:'',seed:'15',info:''},
  {school:'Texas A&M-Corpus Christi',team: 'Islanders',logo:'357.png',city:'',state:'',seed:'16',info:''},
  {school:'Southeast Missouri State',team: 'Redhawks',logo:'2546.png',city:'',state:'',seed:'16',info:''},
  {school:'Northern Kentucky',team: 'Norse (Viking)',logo:'94.png',city:'',state:'',seed:'16',info:''},
  {school:'Howard',team: 'Bison',logo:'47.png',city:'',state:'Washington, D.C.',seed:'16',info:''},
  {school:'Texas Southern',team: 'Tigers',logo:'2640.png',city:'',state:'',seed:'16',info:''},
  {school:'Fairleigh Dickinson',team: 'Knights',logo:'161.png',city:'Hackensack',state:'New Jersey',seed:'16',info:''},
];

const teams = data.sort(function(first_el, second_el) {
  const fname = first_el.school;
  const sname = second_el.school;
  if(fname.localeCompare(sname) < 0) return -1;
  else if(fname.localeCompare(sname) > 0) return 1;
  else if(fname.localeCompare(sname) == 0) return 0;
});

const dd1 = document.getElementById("dd1");
const dd2 = document.getElementById("dd2");

teams.forEach((res) => {
  const option = document.createElement("option");
  option.textContent = res.school;
  option.value = res.school;
  dd1.appendChild(option);
});

teams.forEach((res) => {
  const option = document.createElement("option");
  option.textContent = res.school;
  option.value = res.school;
  dd2.appendChild(option);
});


const team = {
  t1: document.getElementById("team1"),
  t2: document.getElementById("team2")
}


dd1.addEventListener("input", (event) => {
  const etVal = event.target.value;
  const el = data.find((team) => team.school.toLocaleLowerCase() === etVal.toLocaleLowerCase());
  team.t1.replaceChildren();
  if(el){
    appendFn(el, 't1')
  }
});
dd2.addEventListener("input", (event) => {
  const etVal = event.target.value;
  const el = data.find((team) => team.school.toLocaleLowerCase() === etVal.toLocaleLowerCase());
  team.t2.replaceChildren();
  if(el){
    appendFn(el, 't2')
  }
});


const appendFn = (el, tnum) =>{
  let p1 = document.createElement("h2"); p1.innerText = 'SCHOOL: ' + el.school; p1.className = 'font-bold';
  let p2 = document.createElement("h2"); p2.innerText = 'NAME: ' + el.team; p2.className = 'font-bold';
  let p3 = document.createElement("p"); p3.innerText = 'SEED: ' + el.seed; //p3.className = '';
  let p4 = document.createElement("p"); p4.innerText = 'CITY: ' + el.city; //p4.className = '';
  let p5 = document.createElement("p"); p5.innerText = 'STATE: ' + el.state; //p5.className = '';
  let img = document.createElement("img");
  img.src = "https://a.espncdn.com/combiner/i?img=/i/teamlogos/ncaa/500/" + el.logo;
  team[tnum].append(p1, p2, p3, p4, p5, img);
}