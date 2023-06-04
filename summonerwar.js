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

  claraThermarsAnyMonster(mon1, mon2, mon3)

  claraZerathSavannah(mon1, mon2, mon3);
  mihyangMonteKinki(mon1, mon2, mon3);
  claraMonteIunu(mon1, mon2, mon3);
  claraEshirMonte(mon1, mon2, mon3);
  claraThermarsSavannah(mon1, mon2, mon3);
  louiseMilesCoco(mon1, mon2, mon3);
  odinTesarionRiley(mon1, mon2, mon3);

}
function hideSecondTeam() {
  const element = document.getElementById('counter-team2');
  const or = document.getElementById('or');
  or.style.display = 'none';
  element.style.display = 'none';
}

function showSecondTeam() {
  const element = document.getElementById('counter-team2');
  const or = document.getElementById('or');
  or.style.display = 'block';
  element.style.display = 'block';

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

function claraThermarsSavannah(mon1, mon2, mon3) {
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

function claraThermarsAnyMonster(mon1, mon2, mon3) {
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