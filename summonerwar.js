//convert images to js
const img = document.getElementById('image');
const img2 = document.getElementById('image2');
const img3 = document.getElementById('image3');

const img4 = document.getElementById('image4');
const img5 = document.getElementById('image5');
const img6 = document.getElementById('image6');

const img7 = document.getElementById('image7');
const img8 = document.getElementById('image8');
const img9 = document.getElementById('image9');


let names = [
  "Bellenus",
  "Camilla",
  "Chacha",
  "Chasun",
  "Clara",
  "Coco",
  "Collen",
  "Covenant",
  "Diana",
  "Dominic",
  "Elucia",
  "Eshir",
  "Fran",
  "Fuuki",
  "Haegang",
  "Helena",
  "Hwadam",
  "Iunu",
  "Jeanne",
  "Khmun",
  "Kinki",
  "Konamiya",
  "Laika",
  "Leo",
  "Louise",
  "lulu",
  "Malite",
  "Manon",
  "Mihyang",
  "Miles",
  "Monte",
  "Nora",
  "Odin",
  "Racuni",
  "Riley",
  "Rina",
  "Roid",
  "Savannah",
  "Seara",
  "Tesarion",
  "Theomars",
  "Vigor",
  "Zerath",
];

let sortedNames = names.sort();



function auto() {
  //reference
  let input = document.getElementById("input1");
  //Execute function on keyup
  input.addEventListener("keyup", (e) => {
    //loop through above array
    //Initially remove all elements ( so if user erases a letter or adds new letter then clean previous outputs)
    removeElements();
    for (let i of sortedNames) {
      //convert input to lowercase and compare with each string
      if (
        i.toLowerCase().startsWith(input.value.toLowerCase()) &&
        input.value != ""
      ) {
        //create li element
        let listItem = document.createElement("li");
        //One common class name
        listItem.classList.add("list-items");
        listItem.style.cursor = "pointer";
        listItem.setAttribute("onclick", "displayNames('" + i + "')");
        //Display matched part in bold
        let word = "<b>" + i.substr(0, input.value.length) + "</b>";
        word += i.substr(input.value.length);
        //display the value in array
        listItem.innerHTML = word;
        document.querySelector(".list1").appendChild(listItem);
      }
    }
  });
}
function displayNames(value) {
  input.value = value.toLowerCase();
  removeElements();
}
function removeElements() {
  //clear all the item
  let items = document.querySelectorAll(".list-items");
  items.forEach((item) => {
    item.remove();
  });
}
input = document.getElementById("input1");



function auto2() {
  //reference
  let input2 = document.getElementById("input2");
  //Execute function on keyup
  input2.addEventListener("keyup", (e) => {
    //loop through above array
    //Initially remove all elements ( so if user erases a letter or adds new letter then clean previous outputs)
    removeElements();
    for (let i of sortedNames) {
      //convert input2 to lowercase and compare with each string
      if (
        i.toLowerCase().startsWith(input2.value.toLowerCase()) &&
        input2.value != ""
      ) {
        //create li element
        let listItem = document.createElement("li");
        //One common class name
        listItem.classList.add("list-items");
        listItem.style.cursor = "pointer";
        listItem.setAttribute("onclick", "displayNames2('" + i + "')");
        //Display matched part in bold
        let word = "<b>" + i.substr(0, input2.value.length) + "</b>";
        word += i.substr(input2.value.length);
        //display the value in array
        listItem.innerHTML = word;
        document.querySelector(".list2").appendChild(listItem);
      }
    }
  });
}
function displayNames2(value) {
  input2.value = value.toLowerCase();
  removeElements();
}
function removeElements() {
  let items = document.querySelectorAll(".list-items");
  items.forEach((item) => {
    item.remove();
  });
}
input2 = document.getElementById("input2");



function auto3() {
  let input3 = document.getElementById("input3");
  input3.addEventListener("keyup", (e) => {
    removeElements();
    for (let i of sortedNames) {
      if (
        i.toLowerCase().startsWith(input3.value.toLowerCase()) &&
        input3.value != ""
      ) {
        let listItem = document.createElement("li");
        listItem.classList.add("list-items");
        listItem.style.cursor = "pointer";
        listItem.setAttribute("onclick", "displayNames3('" + i + "')");
        let word = "<b>" + i.substr(0, input3.value.length) + "</b>";
        word += i.substr(input3.value.length);
        listItem.innerHTML = word;
        document.querySelector(".list3").appendChild(listItem);
      }
    }
  });
}
function displayNames3(value) {
  input3.value = value.toLowerCase();
  removeElements();
}
function removeElements() {
  let items = document.querySelectorAll(".list-items");
  items.forEach((item) => {
    item.remove();
  });
}
let input3 = document.getElementById("input3");



function searchCounter() {

  const monster1 = document.querySelector('.mon1')
  const monster2 = document.querySelector('.mon2')
  const monster3 = document.querySelector('.mon3')

  let mon1 = monster1.value;
  let mon2 = monster2.value;
  let mon3 = monster3.value;

  const against = document.getElementById('against');
  against.innerHTML = `Against: ${mon1}, ${mon2}, ${mon3}`;

  setTimeout(function () {
    monster1.value = '';
    monster2.value = '';
    monster3.value = '';
  }, 2000)


  claraTheomarsAnyMonster(mon1, mon2, mon3)
 
  claraZerathSavannah(mon1, mon2, mon3);
  mihyangMonteKinki(mon1, mon2, mon3);
  claraMonteIunu(mon1, mon2, mon3);
  claraEshirMonte(mon1, mon2, mon3);
  claraTheomarsSavannah(mon1, mon2, mon3);
  louiseMilesCoco(mon1, mon2, mon3);
  odinTesarionRiley(mon1, mon2, mon3);
  claraVigorFuuki(mon1, mon2, mon3);
  searaNoraManon(mon1, mon2, mon3);
  claraVigorKinki(mon1, mon2, mon3);


}


function hideAllTeam() {
  const element = document.getElementById('counter-team');
  const element2 = document.getElementById('counter-team2');
  const or = document.getElementById('or');
  or.style.display = 'none';
  element2.style.display = 'none';
  element.style.display = 'none';

}

function hideSecondTeam() {
  const element2 = document.getElementById('counter-team2');
  const or = document.getElementById('or');
  or.style.display = 'none';
  element2.style.display = 'none';
}

function showSecondTeam() {
  const element2 = document.getElementById('counter-team2');
  const or = document.getElementById('or');
  or.style.display = 'block';
  element2.style.display = 'block';

}

function enemyMonsterImages(mon1, mon2, mon3) {
  img.src = `monster-images/${mon1}.png`
  img2.src = `monster-images/${mon2}.png`
  img3.src = `monster-images/${mon3}.png`
}

function claraZerathSavannah(mon1, mon2, mon3) {
  if (mon1 === 'clara' || mon1 === 'zerath' || mon1 === 'savannah') {
    if (mon2 === 'clara' || mon2 === 'zerath' || mon2 === 'savannah') {
      if (mon3 === 'clara' || mon3 === 'zerath' || mon3 === 'savannah') {

        enemyMonsterImages(mon1, mon2, mon3);

        img4.src = "monster-images/jeanne.png"
        img5.src = "monster-images/leo.png"
        img6.src = "monster-images/diana.png"

        const bring = document.getElementById('bring');
        bring.innerHTML = 'Bring: jeanne, leo, diana';

        let tip = document.getElementById('tip');
        tip.innerHTML = 'HIT CLARA FIRST!!!';
        hideSecondTeam();
      }
    }
  }
}

function claraMonteIunu(mon1, mon2, mon3) {
  if (mon1 === 'clara' || mon1 === 'monte' || mon1 === 'iunu') {
    if (mon2 === 'clara' || mon2 === 'monte' || mon2 === 'iunu') {
      if (mon3 === 'clara' || mon3 === 'monte' || mon3 === 'iunu') {

        enemyMonsterImages(mon1, mon2, mon3);

        img4.src = "monster-images/khmun.png"
        img5.src = "monster-images/racuni.png"
        img6.src = "monster-images/malite.png"

        const bring = document.getElementById('bring');
        bring.innerHTML = 'Bring: khmun, racuni, malite';

        let tip = document.getElementById('tip');
        tip.innerHTML = 'KILL MONTE FIRST!!!';
      }
    }
  }
}

function mihyangMonteKinki(mon1, mon2, mon3) {
  if (mon1 === 'mihyang' || mon1 === 'monte' || mon1 === 'kinki') {
    if (mon2 === 'mihyang' || mon2 === 'monte' || mon2 === 'kinki') {
      if (mon3 === 'mihyang' || mon3 === 'monte' || mon3 === 'kinki') {

        enemyMonsterImages(mon1, mon2, mon3);

        img4.src = "monster-images/elucia.png"
        img5.src = "monster-images/chacha.png"
        img6.src = "monster-images/khmun.png"

        const bring = document.getElementById('bring');
        bring.innerHTML = 'Bring: elucia, chacha, khmun';

        let tip = document.getElementById('tip');
        tip.innerHTML = 'KILL MONTE FIRST!!!';

        hideSecondTeam();
      }
    }
  }
}

function claraEshirMonte(mon1, mon2, mon3) {
  if (mon1 === 'clara' || mon1 === 'monte' || mon1 === 'eshir') {
    if (mon2 === 'clara' || mon2 === 'monte' || mon2 === 'eshir') {
      if (mon3 === 'clara' || mon3 === 'monte' || mon3 === 'eshir') {

        enemyMonsterImages(mon1, mon2, mon3);

        img4.src = "monster-images/khmun.png"
        img5.src = "monster-images/Racuni.png"
        img6.src = "monster-images/hwadam.png"

        const bring = document.getElementById('bring');
        bring.innerHTML = 'Bring: khmun, racuni, hwadam';

        let tip = document.getElementById('tip');
        tip.innerHTML = 'KILL MONTE FIRST!!!';

        hideSecondTeam();
      }
    }
  }
}

function claraTheomarsSavannah(mon1, mon2, mon3) {
  if (mon1 === 'clara' || mon1 === 'theomars' || mon1 === 'savannah') {
    if (mon2 === 'clara' || mon2 === 'theomars' || mon2 === 'savannah') {
      if (mon3 === 'clara' || mon3 === 'theomars' || mon3 === 'savannah') {

        showSecondTeam();
        enemyMonsterImages(mon1, mon2, mon3);

        img4.src = "monster-images/tesarion.png"
        img5.src = "monster-images/chacha.png"
        img6.src = "monster-images/camilla.png"

        img7.src = "monster-images/fran.png"
        img8.src = "monster-images/haegang.png"
        img9.src = "monster-images/bellenus.png"

        const bring = document.getElementById('bring');
        bring.innerHTML = 'Bring: tesarion, chacha, camilla';
        ;

        const or = document.getElementById('or');
        or.innerHTML = 'Or: fran, haegang, bellenus'

        let tip = document.getElementById('tip');
        tip.innerHTML = 'Note: for tesarion, chacha, camilla team, kill savannah first || for fran, haegang, bellenus team, all monsters should be on will runes';
      }
    }
  }
}

function claraTheomarsAnyMonster(mon1, mon2, mon3) {
  if (mon1 === 'clara' || mon1 === 'theomars' || (mon1 !== 'savannah' && mon1 !== '')) {
    if (mon2 === 'clara' || mon2 === 'theomars' || (mon2 !== 'savannah' && mon2 !== '')) {
      if (mon3 === 'clara' || mon3 === 'theomars' || (mon3 !== 'savannah' && mon3 !== '')) {

        enemyMonsterImages(mon1, mon2, mon3);

        img4.src = "monster-images/leo.png"
        img5.src = "monster-images/helena.png"
        img6.src = "monster-images/jeanne.png"

        const bring = document.getElementById('bring');
        bring.innerHTML = 'Bring: leo, helena, jeanne';

        let tip = document.getElementById('tip');
        tip.innerHTML = 'Note: Jeanne lead if monsters are not 100% resistance and hit clara with leo turn 1';

        hideSecondTeam();
      }
    }
  }
}

function louiseMilesCoco(mon1, mon2, mon3) {
  if (mon1 === 'louise' || mon1 === 'miles' || mon1 === 'coco') {
    if (mon2 === 'louise' || mon2 === 'miles' || mon2 === 'coco') {
      if (mon3 === 'louise' || mon3 === 'miles' || mon3 === 'coco') {

        enemyMonsterImages(mon1, mon2, mon3);

        img4.src = "monster-images/khmun.png"
        img5.src = "monster-images/konamiya.png"
        img6.src = "monster-images/covenant.png"

        const bring = document.getElementById('bring');
        bring.innerHTML = 'Bring: khmun, konamiya, covenant';

        let tip = document.getElementById('tip');
        tip.innerHTML = 'KILL MILES FIRST!!!';
        hideSecondTeam();
      }
    }
  }
}

function odinTesarionRiley(mon1, mon2, mon3) {
  if (mon1 === 'odin' || mon1 === 'tesarion' || mon1 === 'riley') {
    if (mon2 === 'odin' || mon2 === 'tesarion' || mon2 === 'riley') {
      if (mon3 === 'odin' || mon3 === 'tesarion' || mon3 === 'riley') {

        enemyMonsterImages(mon1, mon2, mon3);

        img4.src = "monster-images/covenant.png"
        img5.src = "monster-images/konamiya.png"
        img6.src = "monster-images/laika.png"

        const bring = document.getElementById('bring');
        bring.innerHTML = 'Bring: covenant, konamiya, laika';

        let tip = document.getElementById('tip');
        tip.innerHTML = 'KILL TESARION FIRST!!!';
        hideSecondTeam();
      }
    }
  }
}

function claraVigorFuuki(mon1, mon2, mon3) {
  if (mon1 === 'clara' || mon1 === 'vigor' || mon1 === 'fuuki') {
    if (mon2 === 'clara' || mon2 === 'vigor' || mon2 === 'fuuki') {
      if (mon3 === 'clara' || mon3 === 'vigor' || mon3 === 'fuuki') {

        enemyMonsterImages(mon1, mon2, mon3);

        img4.src = "monster-images/khmun.png"
        img5.src = "monster-images/roid.png"
        img6.src = "monster-images/racuni.png"

        const bring = document.getElementById('bring');
        bring.innerHTML = 'Bring: khmun, roid, racuni';

        let tip = document.getElementById('tip');
        tip.innerHTML = 'KILL FUUKI FIRST!!! || Note: can bring high hp% malite instead of roid';
        hideSecondTeam();
      }
    }
  }
}

function searaNoraManon(mon1, mon2, mon3) {
  if (mon1 === 'seara' || mon1 === 'nora' || mon1 === 'manon') {
    if (mon2 === 'seara' || mon2 === 'nora' || mon2 === 'manon') {
      if (mon3 === 'seara' || mon3 === 'nora' || mon3 === 'manon') {

        enemyMonsterImages(mon1, mon2, mon3);

        img4.src = "monster-images/dominic.png"
        img5.src = "monster-images/rina.png"
        img6.src = "monster-images/riley.png"

        const bring = document.getElementById('bring');
        bring.innerHTML = 'Bring: dominic, rina, riley';

        let tip = document.getElementById('tip');
        tip.innerHTML = 'Note: becareful on the buff you use, Nora can kill with dots';
        hideSecondTeam();
      }
    }
  }
}

function claraVigorKinki(mon1, mon2, mon3) {
  if (mon1 === 'clara' || mon1 === 'vigor' || mon1 === 'kinki') {
    if (mon2 === 'clara' || mon2 === 'vigor' || mon2 === 'kinki') {
      if (mon3 === 'clara' || mon3 === 'vigor' || mon3 === 'kinki') {

        showSecondTeam();
        enemyMonsterImages(mon1, mon2, mon3);

        img4.src = "monster-images/vigor.png"
        img5.src = "monster-images/elucia.png"
        img6.src = "monster-images/lulu.png"

        img7.src = "monster-images/khmun.png"
        img8.src = "monster-images/racuni.png"
        img9.src = "monster-images/malite.png"

        const bring = document.getElementById('bring');
        bring.innerHTML = 'Bring: vigor, elucia, lulu';
        ;

        const or = document.getElementById('or');
        or.innerHTML = 'Or: khumun, racuni, malite'

        let tip = document.getElementById('tip');
        tip.innerHTML = 'Note: for tesarion, chacha, camilla team, kill savannah first || for fran, haegang, bellenus team, all monsters should be on will runes';
      }
    }
  }
}