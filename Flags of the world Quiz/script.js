const flags = [
  { country: "afghanistan", image: "https://flagpedia.net/data/flags/h80/af.png" },
  { country: "albania", image: "https://flagpedia.net/data/flags/h80/al.png" },
  { country: "algeria", image: "https://flagpedia.net/data/flags/h80/dz.png" },
  { country: "andorra", image: "https://flagpedia.net/data/flags/h80/ad.png" },
  { country: "angola", image: "https://flagpedia.net/data/flags/h80/ao.png" },
  { country: "antigua and barbuda", image: "https://flagpedia.net/data/flags/h80/ag.png" },
  { country: "argentina", image: "https://flagpedia.net/data/flags/h80/ar.png" },
  { country: "armenia", image: "https://flagpedia.net/data/flags/h80/am.png" },
  { country: "australia", image: "https://flagpedia.net/data/flags/h80/au.png" },
  { country: "austria", image: "https://flagpedia.net/data/flags/h80/at.png" },
  { country: "azerbaijan", image: "https://flagpedia.net/data/flags/h80/az.png" },
  { country: "bahamas", image: "https://flagpedia.net/data/flags/h80/bs.png" },
  { country: "bahrain", image: "https://flagpedia.net/data/flags/h80/bh.png" },
  { country: "bangladesh", image: "https://flagpedia.net/data/flags/h80/bd.png" },
  { country: "barbados", image: "https://flagpedia.net/data/flags/h80/bb.png" },
  { country: "belarus", image: "https://flagpedia.net/data/flags/h80/by.png" },
  { country: "belgium", image: "https://flagpedia.net/data/flags/h80/be.png" },
  { country: "belize", image: "https://flagpedia.net/data/flags/h80/bz.png" },
  { country: "benin", image: "https://flagpedia.net/data/flags/h80/bj.png" },
  { country: "bhutan", image: "https://flagpedia.net/data/flags/h80/bt.png" },
  { country: "bolivia", image: "https://flagpedia.net/data/flags/h80/bo.png" },
  { country: "bosnia and herzegovina", image: "https://flagpedia.net/data/flags/h80/ba.png" },
  { country: "botswana", image: "https://flagpedia.net/data/flags/h80/bw.png" },
  { country: "brazil", image: "https://flagpedia.net/data/flags/h80/br.png" },
  { country: "brunei", image: "https://flagpedia.net/data/flags/h80/bn.png" },
  { country: "bulgaria", image: "https://flagpedia.net/data/flags/h80/bg.png" },
  { country: "burkina faso", image: "https://flagpedia.net/data/flags/h80/bf.png" },
  { country: "burundi", image: "https://flagpedia.net/data/flags/h80/bi.png" },
  { country: "cabo verde", image: "https://flagpedia.net/data/flags/h80/cv.png" },
  { country: "cambodia", image: "https://flagpedia.net/data/flags/h80/kh.png" },
  { country: "cameroon", image: "https://flagpedia.net/data/flags/h80/cm.png" },
  { country: "canada", image: "https://flagpedia.net/data/flags/h80/ca.png" },
  { country: "central african republic", image: "https://flagpedia.net/data/flags/h80/cf.png" },
  { country: "chad", image: "https://flagpedia.net/data/flags/h80/td.png" },
  { country: "chile", image: "https://flagpedia.net/data/flags/h80/cl.png" },
  { country: "china", image: "https://flagpedia.net/data/flags/h80/cn.png" },
  { country: "colombia", image: "https://flagpedia.net/data/flags/h80/co.png" },
  { country: "comoros", image: "https://flagpedia.net/data/flags/h80/km.png" },
  { country: "congo (brazzaville)", image: "https://flagpedia.net/data/flags/h80/cg.png" },
  { country: "congo (kinshasa)", image: "https://flagpedia.net/data/flags/h80/cd.png" },
  { country: "costa rica", image: "https://flagpedia.net/data/flags/h80/cr.png" },
  { country: "croatia", image: "https://flagpedia.net/data/flags/h80/hr.png" },
  { country: "cuba", image: "https://flagpedia.net/data/flags/h80/cu.png" },
  { country: "cyprus", image: "https://flagpedia.net/data/flags/h80/cy.png" },
  { country: "czechia", image: "https://flagpedia.net/data/flags/h80/cz.png" },
  { country: "denmark", image: "https://flagpedia.net/data/flags/h80/dk.png" },
  { country: "djibouti", image: "https://flagpedia.net/data/flags/h80/dj.png" },
  { country: "dominica", image: "https://flagpedia.net/data/flags/h80/dm.png" },
  { country: "dominican republic", image: "https://flagpedia.net/data/flags/h80/do.png" },
  { country: "ecuador", image: "https://flagpedia.net/data/flags/h80/ec.png" },
  { country: "egypt", image: "https://flagpedia.net/data/flags/h80/eg.png" },
  { country: "el salvador", image: "https://flagpedia.net/data/flags/h80/sv.png" },
  { country: "equatorial guinea", image: "https://flagpedia.net/data/flags/h80/gq.png" },
  { country: "eritrea", image: "https://flagpedia.net/data/flags/h80/er.png" },
  { country: "estonia", image: "https://flagpedia.net/data/flags/h80/ee.png" },
  { country: "eswatini", image: "https://flagpedia.net/data/flags/h80/sz.png" },
  { country: "ethiopia", image: "https://flagpedia.net/data/flags/h80/et.png" },
  { country: "fiji", image: "https://flagpedia.net/data/flags/h80/fj.png" },
  { country: "finland", image: "https://flagpedia.net/data/flags/h80/fi.png" },
  { country: "france", image: "https://flagpedia.net/data/flags/h80/fr.png" },
  { country: "gabon", image: "https://flagpedia.net/data/flags/h80/ga.png" },
  { country: "gambia", image: "https://flagpedia.net/data/flags/h80/gm.png" },
  { country: "georgia", image: "https://flagpedia.net/data/flags/h80/ge.png" },
  { country: "germany", image: "https://flagpedia.net/data/flags/h80/de.png" },
  { country: "ghana", image: "https://flagpedia.net/data/flags/h80/gh.png" },
  { country: "greece", image: "https://flagpedia.net/data/flags/h80/gr.png" },
  { country: "grenada", image: "https://flagpedia.net/data/flags/h80/gd.png" },
  { country: "guatemala", image: "https://flagpedia.net/data/flags/h80/gt.png" },
  { country: "guinea", image: "https://flagpedia.net/data/flags/h80/gn.png" },
  { country: "guinea-bissau", image: "https://flagpedia.net/data/flags/h80/gw.png" },
  { country: "guyana", image: "https://flagpedia.net/data/flags/h80/gy.png" },
  { country: "haiti", image: "https://flagpedia.net/data/flags/h80/ht.png" },
  { country: "honduras", image: "https://flagpedia.net/data/flags/h80/hn.png" },
  { country: "hungary", image: "https://flagpedia.net/data/flags/h80/hu.png" },
  { country: "iceland", image: "https://flagpedia.net/data/flags/h80/is.png" },
  { country: "india", image: "https://flagpedia.net/data/flags/h80/in.png" },
  { country: "indonesia", image: "https://flagpedia.net/data/flags/h80/id.png" },
  { country: "iran", image: "https://flagpedia.net/data/flags/h80/ir.png" },
  { country: "iraq", image: "https://flagpedia.net/data/flags/h80/iq.png" },
  { country: "ireland", image: "https://flagpedia.net/data/flags/h80/ie.png" },
  { country: "israel", image: "https://flagpedia.net/data/flags/h80/il.png" },
  { country: "italy", image: "https://flagpedia.net/data/flags/h80/it.png" },
  { country: "jamaica", image: "https://flagpedia.net/data/flags/h80/jm.png" },
  { country: "japan", image: "https://flagpedia.net/data/flags/h80/jp.png" },
  { country: "jordan", image: "https://flagpedia.net/data/flags/h80/jo.png" },
  { country: "kazakhstan", image: "https://flagpedia.net/data/flags/h80/kz.png" },
  { country: "kenya", image: "https://flagpedia.net/data/flags/h80/ke.png" },
  { country: "kiribati", image: "https://flagpedia.net/data/flags/h80/ki.png" },
  { country: "kuwait", image: "https://flagpedia.net/data/flags/h80/kw.png" },
  { country: "kyrgyzstan", image: "https://flagpedia.net/data/flags/h80/kg.png" },
  { country: "laos", image: "https://flagpedia.net/data/flags/h80/la.png" },
  { country: "latvia", image: "https://flagpedia.net/data/flags/h80/lv.png" },
{ country: "lebanon", image: "https://flagpedia.net/data/flags/h80/lb.png" },
{ country: "lesotho", image: "https://flagpedia.net/data/flags/h80/ls.png" },
{ country: "liberia", image: "https://flagpedia.net/data/flags/h80/lr.png" },
{ country: "libya", image: "https://flagpedia.net/data/flags/h80/ly.png" },
{ country: "liechtenstein", image: "https://flagpedia.net/data/flags/h80/li.png" },
{ country: "lithuania", image: "https://flagpedia.net/data/flags/h80/lt.png" },
{ country: "luxembourg", image: "https://flagpedia.net/data/flags/h80/lu.png" },
{ country: "madagascar", image: "https://flagpedia.net/data/flags/h80/mg.png" },
{ country: "malawi", image: "https://flagpedia.net/data/flags/h80/mw.png" },
{ country: "malaysia", image: "https://flagpedia.net/data/flags/h80/my.png" },
{ country: "maldives", image: "https://flagpedia.net/data/flags/h80/mv.png" },
{ country: "mali", image: "https://flagpedia.net/data/flags/h80/ml.png" },
{ country: "malta", image: "https://flagpedia.net/data/flags/h80/mt.png" },
{ country: "marshall islands", image: "https://flagpedia.net/data/flags/h80/mh.png" },
{ country: "mauritania", image: "https://flagpedia.net/data/flags/h80/mr.png" },
{ country: "mauritius", image: "https://flagpedia.net/data/flags/h80/mu.png" },
{ country: "mexico", image: "https://flagpedia.net/data/flags/h80/mx.png" },
{ country: "micronesia", image: "https://flagpedia.net/data/flags/h80/fm.png" },
{ country: "moldova", image: "https://flagpedia.net/data/flags/h80/md.png" },
{ country: "monaco", image: "https://flagpedia.net/data/flags/h80/mc.png" },
{ country: "mongolia", image: "https://flagpedia.net/data/flags/h80/mn.png" },
{ country: "montenegro", image: "https://flagpedia.net/data/flags/h80/me.png" },
{ country: "morocco", image: "https://flagpedia.net/data/flags/h80/ma.png" },
{ country: "mozambique", image: "https://flagpedia.net/data/flags/h80/mz.png" },
{ country: "myanmar", image: "https://flagpedia.net/data/flags/h80/mm.png" },
{ country: "namibia", image: "https://flagpedia.net/data/flags/h80/na.png" },
{ country: "nauru", image: "https://flagpedia.net/data/flags/h80/nr.png" },
{ country: "nepal", image: "https://flagpedia.net/data/flags/h80/np.png" },
{ country: "netherlands", image: "https://flagpedia.net/data/flags/h80/nl.png" },
{ country: "new zealand", image: "https://flagpedia.net/data/flags/h80/nz.png" },
{ country: "nicaragua", image: "https://flagpedia.net/data/flags/h80/ni.png" },
{ country: "niger", image: "https://flagpedia.net/data/flags/h80/ne.png" },
{ country: "nigeria", image: "https://flagpedia.net/data/flags/h80/ng.png" },
{ country: "north korea", image: "https://flagpedia.net/data/flags/h80/kp.png" },
{ country: "north macedonia", image: "https://flagpedia.net/data/flags/h80/mk.png" },
{ country: "norway", image: "https://flagpedia.net/data/flags/h80/no.png" },
{ country: "oman", image: "https://flagpedia.net/data/flags/h80/om.png" },
{ country: "pakistan", image: "https://flagpedia.net/data/flags/h80/pk.png" },
{ country: "palau", image: "https://flagpedia.net/data/flags/h80/pw.png" },
{ country: "palestine", image: "https://flagpedia.net/data/flags/h80/ps.png" },
{ country: "panama", image: "https://flagpedia.net/data/flags/h80/pa.png" },
{ country: "papua new guinea", image: "https://flagpedia.net/data/flags/h80/pg.png" },
{ country: "paraguay", image: "https://flagpedia.net/data/flags/h80/py.png" },
{ country: "peru", image: "https://flagpedia.net/data/flags/h80/pe.png" },
{ country: "philippines", image: "https://flagpedia.net/data/flags/h80/ph.png" },
{ country: "poland", image: "https://flagpedia.net/data/flags/h80/pl.png" },
{ country: "portugal", image: "https://flagpedia.net/data/flags/h80/pt.png" },
{ country: "qatar", image: "https://flagpedia.net/data/flags/h80/qa.png" },
{ country: "romania", image: "https://flagpedia.net/data/flags/h80/ro.png" },
{ country: "russia", image: "https://flagpedia.net/data/flags/h80/ru.png" },
{ country: "rwanda", image: "https://flagpedia.net/data/flags/h80/rw.png" },
{ country: "saint kitts and nevis", image: "https://flagpedia.net/data/flags/h80/kn.png" },
{ country: "saint lucia", image: "https://flagpedia.net/data/flags/h80/lc.png" },
{ country: "saint vincent and the grenadines", image: "https://flagpedia.net/data/flags/h80/vc.png" },
{ country: "samoa", image: "https://flagpedia.net/data/flags/h80/ws.png" },
{ country: "san marino", image: "https://flagpedia.net/data/flags/h80/sm.png" },
{ country: "sao tome and principe", image: "https://flagpedia.net/data/flags/h80/st.png" },
{ country: "saudi arabia", image: "https://flagpedia.net/data/flags/h80/sa.png" },
{ country: "senegal", image: "https://flagpedia.net/data/flags/h80/sn.png" },
{ country: "serbia", image: "https://flagpedia.net/data/flags/h80/rs.png" },
{ country: "seychelles", image: "https://flagpedia.net/data/flags/h80/sc.png" },
{ country: "sierra leone", image: "https://flagpedia.net/data/flags/h80/sl.png" },
{ country: "singapore", image: "https://flagpedia.net/data/flags/h80/sg.png" },
{ country: "slovakia", image: "https://flagpedia.net/data/flags/h80/sk.png" },
{ country: "slovenia", image: "https://flagpedia.net/data/flags/h80/si.png" },
{ country: "solomon islands", image: "https://flagpedia.net/data/flags/h80/sb.png" },
{ country: "somalia", image: "https://flagpedia.net/data/flags/h80/so.png" },
{ country: "south africa", image: "https://flagpedia.net/data/flags/h80/za.png" },
{ country: "south korea", image: "https://flagpedia.net/data/flags/h80/kr.png" },
{ country: "south sudan", image: "https://flagpedia.net/data/flags/h80/ss.png" },
{ country: "spain", image: "https://flagpedia.net/data/flags/h80/es.png" },
{ country: "sri lanka", image: "https://flagpedia.net/data/flags/h80/lk.png" },
{ country: "sudan", image: "https://flagpedia.net/data/flags/h80/sd.png" },
{ country: "suriname", image: "https://flagpedia.net/data/flags/h80/sr.png" },
{ country: "sweden", image: "https://flagpedia.net/data/flags/h80/se.png" },
{ country: "switzerland", image: "https://flagpedia.net/data/flags/h80/ch.png" },
{ country: "syria", image: "https://flagpedia.net/data/flags/h80/sy.png" },
{ country: "taiwan", image: "https://flagpedia.net/data/flags/h80/tw.png" },
{ country: "tajikistan", image: "https://flagpedia.net/data/flags/h80/tj.png" },
{ country: "tanzania", image: "https://flagpedia.net/data/flags/h80/tz.png" },
{ country: "thailand", image: "https://flagpedia.net/data/flags/h80/th.png" },
{ country: "timor-leste", image: "https://flagpedia.net/data/flags/h80/tl.png" },
{ country: "togo", image: "https://flagpedia.net/data/flags/h80/tg.png" },
{ country: "tonga", image: "https://flagpedia.net/data/flags/h80/to.png" },
{ country: "trinidad and tobago", image: "https://flagpedia.net/data/flags/h80/tt.png" },
{ country: "tunisia", image: "https://flagpedia.net/data/flags/h80/tn.png" },
{ country: "turkey", image: "https://flagpedia.net/data/flags/h80/tr.png" },
{ country: "turkmenistan", image: "https://flagpedia.net/data/flags/h80/tm.png" },
{ country: "tuvalu", image: "https://flagpedia.net/data/flags/h80/tv.png" },
{ country: "uganda", image: "https://flagpedia.net/data/flags/h80/ug.png" },
{ country: "ukraine", image: "https://flagpedia.net/data/flags/h80/ua.png" },
{ country: "united arab emirates", image: "https://flagpedia.net/data/flags/h80/ae.png" },
{ country: "united kingdom", image: "https://flagpedia.net/data/flags/h80/gb.png" },
{ country: "united states", image: "https://flagpedia.net/data/flags/h80/us.png" },
{ country: "uruguay", image: "https://flagpedia.net/data/flags/h80/uy.png" },
{ country: "uzbekistan", image: "https://flagpedia.net/data/flags/h80/uz.png" },
{ country: "vanuatu", image: "https://flagpedia.net/data/flags/h80/vu.png" },
{ country: "vatican city", image: "https://flagpedia.net/data/flags/h80/va.png" },
{ country: "venezuela", image: "https://flagpedia.net/data/flags/h80/ve.png" },
{ country: "vietnam", image: "https://flagpedia.net/data/flags/h80/vn.png" },
{ country: "yemen", image: "https://flagpedia.net/data/flags/h80/ye.png" },
{ country: "zambia", image: "https://flagpedia.net/data/flags/h80/zm.png" },
{ country: "zimbabwe", image: "https://flagpedia.net/data/flags/h80/zw.png" }
];


console.log(flags);

let remainingFlags = [...flags]; // copy of all flags
let currentFlag;
let score = 0;
let total = 0;

const flagImg = document.getElementById('flag');
const guessInput = document.getElementById('guess');
const resultEl = document.getElementById('result');
const scoreEl = document.getElementById('score');

function newFlag() {
  if (remainingFlags.length === 0) {
    resultEl.textContent = `🎉 You finished! Final score: ${score} / 197`;
    flagImg.style.display = 'none';
    guessInput.style.display = 'none';

    const restartContainer = document.getElementById('restartContainer');
    const restartBtn = document.createElement('button');
    restartBtn.textContent = "Play Again";
    restartBtn.classList.add('restart-btn');
    restartBtn.addEventListener('click', restartGame);
    document.body.appendChild(restartBtn);
    return;
  }

  const randomIndex = Math.floor(Math.random() * remainingFlags.length);
  currentFlag = remainingFlags[randomIndex];
  flagImg.src = currentFlag.image;
  resultEl.textContent = '';
  guessInput.value = '';

  remainingFlags.splice(randomIndex, 1);

  total++;
  scoreEl.textContent = `Score: ${score} / 197`;
}

guessInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    const guess = guessInput.value.trim().toLowerCase();
    if (!guess) return;

    if (guess === currentFlag.country) {
      resultEl.textContent = '✅ Correct!';
      resultEl.className = 'result correct';
      score++;
    } else {
      resultEl.textContent = `❌ It was ${currentFlag.country.toUpperCase()}`;
      resultEl.className = 'result wrong';
    }

    scoreEl.textContent = `Score: ${score} / 197`;
    setTimeout(newFlag, 500);
  }
});

function restartGame() {
  remainingFlags = [...flags];
  score = 0;
  total = 0;

  flagImg.style.display = 'block';
  guessInput.style.display = 'inline-block';
  resultEl.textContent = '';
  scoreEl.textContent = `Score: 0 / 0`;

  const btn = document.querySelector('.restart-btn');
  if (btn) btn.remove();

  newFlag();
}

newFlag();
