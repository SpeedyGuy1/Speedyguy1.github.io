const flagElement = document.getElementById("flag");
const guessInput = document.getElementById("guess");
const resultElement = document.getElementById("result");
const scoreElement = document.getElementById("score");

let score = 0;
let total = 0;
let currentCountry = "";
let availableFlags = [];

const allFlags = [
  { country: "Afghanistan", image: "https://flagcdn.com/w320/af.png" },
  { country: "Albania", image: "https://flagcdn.com/w320/al.png" },
  { country: "Algeria", image: "https://flagcdn.com/w320/dz.png" },
  { country: "Andorra", image: "https://flagcdn.com/w320/ad.png" },
  { country: "Angola", image: "https://flagcdn.com/w320/ao.png" },
  { country: "Antigua and Barbuda", image: "https://flagcdn.com/w320/ag.png" },
  { country: "Argentina", image: "https://flagcdn.com/w320/ar.png" },
  { country: "Armenia", image: "https://flagcdn.com/w320/am.png" },
  { country: "Australia", image: "https://flagcdn.com/w320/au.png" },
  { country: "Austria", image: "https://flagcdn.com/w320/at.png" },
  { country: "Azerbaijan", image: "https://flagcdn.com/w320/az.png" },
  { country: "Bahamas", image: "https://flagcdn.com/w320/bs.png" },
  { country: "Bahrain", image: "https://flagcdn.com/w320/bh.png" },
  { country: "Bangladesh", image: "https://flagcdn.com/w320/bd.png" },
  { country: "Barbados", image: "https://flagcdn.com/w320/bb.png" },
  { country: "Belarus", image: "https://flagcdn.com/w320/by.png" },
  { country: "Belgium", image: "https://flagcdn.com/w320/be.png" },
  { country: "Belize", image: "https://flagcdn.com/w320/bz.png" },
  { country: "Benin", image: "https://flagcdn.com/w320/bj.png" },
  { country: "Bhutan", image: "https://flagcdn.com/w320/bt.png" },
  { country: "Bolivia", image: "https://flagcdn.com/w320/bo.png" },
  { country: "Bosnia and Herzegovina", image: "https://flagcdn.com/w320/ba.png" },
  { country: "Botswana", image: "https://flagcdn.com/w320/bw.png" },
  { country: "Brazil", image: "https://flagcdn.com/w320/br.png" },
  { country: "Brunei", image: "https://flagcdn.com/w320/bn.png" },
  { country: "Bulgaria", image: "https://flagcdn.com/w320/bg.png" },
  { country: "Burkina Faso", image: "https://flagcdn.com/w320/bf.png" },
  { country: "Burundi", image: "https://flagcdn.com/w320/bi.png" },
  { country: "Cambodia", image: "https://flagcdn.com/w320/kh.png" },
  { country: "Cameroon", image: "https://flagcdn.com/w320/cm.png" },
  { country: "Canada", image: "https://flagcdn.com/w320/ca.png" },
  { country: "Cape Verde", image: "https://flagcdn.com/w320/cv.png" },
  { country: "Central African Republic", image: "https://flagcdn.com/w320/cf.png" },
  { country: "Chad", image: "https://flagcdn.com/w320/td.png" },
  { country: "Chile", image: "https://flagcdn.com/w320/cl.png" },
  { country: "China", image: "https://flagcdn.com/w320/cn.png" },
  { country: "Colombia", image: "https://flagcdn.com/w320/co.png" },
  { country: "Comoros", image: "https://flagcdn.com/w320/km.png" },
  { country: "Congo", image: "https://flagcdn.com/w320/cg.png" },
  { country: "Costa Rica", image: "https://flagcdn.com/w320/cr.png" },
  { country: "Croatia", image: "https://flagcdn.com/w320/hr.png" },
  { country: "Cuba", image: "https://flagcdn.com/w320/cu.png" },
  { country: "Cyprus", image: "https://flagcdn.com/w320/cy.png" },
  { country: "Czech Republic", image: "https://flagcdn.com/w320/cz.png" },
  { country: "Denmark", image: "https://flagcdn.com/w320/dk.png" },
  { country: "Djibouti", image: "https://flagcdn.com/w320/dj.png" },
  { country: "Dominica", image: "https://flagcdn.com/w320/dm.png" },
  { country: "Dominican Republic", image: "https://flagcdn.com/w320/do.png" },
  { country: "Ecuador", image: "https://flagcdn.com/w320/ec.png" },
  { country: "Egypt", image: "https://flagcdn.com/w320/eg.png" },
  { country: "El Salvador", image: "https://flagcdn.com/w320/sv.png" },
  { country: "Estonia", image: "https://flagcdn.com/w320/ee.png" },
  { country: "Ethiopia", image: "https://flagcdn.com/w320/et.png" },
  { country: "Fiji", image: "https://flagcdn.com/w320/fj.png" },
  { country: "Finland", image: "https://flagcdn.com/w320/fi.png" },
  { country: "France", image: "https://flagcdn.com/w320/fr.png" },
  { country: "Gabon", image: "https://flagcdn.com/w320/ga.png" },
  { country: "Gambia", image: "https://flagcdn.com/w320/gm.png" },
  { country: "Georgia", image: "https://flagcdn.com/w320/ge.png" },
  { country: "Germany", image: "https://flagcdn.com/w320/de.png" },
  { country: "Ghana", image: "https://flagcdn.com/w320/gh.png" },
  { country: "Greece", image: "https://flagcdn.com/w320/gr.png" },
  { country: "Grenada", image: "https://flagcdn.com/w320/gd.png" },
  { country: "Guatemala", image: "https://flagcdn.com/w320/gt.png" },
  { country: "Guinea", image: "https://flagcdn.com/w320/gn.png" },
  { country: "Guyana", image: "https://flagcdn.com/w320/gy.png" },
  { country: "Haiti", image: "https://flagcdn.com/w320/ht.png" },
  { country: "Honduras", image: "https://flagcdn.com/w320/hn.png" },
  { country: "Hungary", image: "https://flagcdn.com/w320/hu.png" },
  { country: "Iceland", image: "https://flagcdn.com/w320/is.png" },
  { country: "India", image: "https://flagcdn.com/w320/in.png" },
  { country: "Indonesia", image: "https://flagcdn.com/w320/id.png" },
  { country: "Iran", image: "https://flagcdn.com/w320/ir.png" },
  { country: "Iraq", image: "https://flagcdn.com/w320/iq.png" },
  { country: "Ireland", image: "https://flagcdn.com/w320/ie.png" },
  { country: "Israel", image: "https://flagcdn.com/w320/il.png" },
  { country: "Italy", image: "https://flagcdn.com/w320/it.png" },
  { country: "Jamaica", image: "https://flagcdn.com/w320/jm.png" },
  { country: "Japan", image: "https://flagcdn.com/w320/jp.png" },
  { country: "Jordan", image: "https://flagcdn.com/w320/jo.png" },
  { country: "Kazakhstan", image: "https://flagcdn.com/w320/kz.png" },
  { country: "Kenya", image: "https://flagcdn.com/w320/ke.png" },
  { country: "Kiribati", image: "https://flagcdn.com/w320/ki.png" },
  { country: "Kuwait", image: "https://flagcdn.com/w320/kw.png" },
  { country: "Kyrgyzstan", image: "https://flagcdn.com/w320/kg.png" },
  { country: "Laos", image: "https://flagcdn.com/w320/la.png" },
  { country: "Latvia", image: "https://flagcdn.com/w320/lv.png" },
  { country: "Lebanon", image: "https://flagcdn.com/w320/lb.png" },
  { country: "Lesotho", image: "https://flagcdn.com/w320/ls.png" },
  { country: "Liberia", image: "https://flagcdn.com/w320/lr.png" },
  { country: "Libya", image: "https://flagcdn.com/w320/ly.png" },
  { country: "Liechtenstein", image: "https://flagcdn.com/w320/li.png" },
  { country: "Lithuania", image: "https://flagcdn.com/w320/lt.png" },
  { country: "Luxembourg", image: "https://flagcdn.com/w320/lu.png" },
  { country: "Madagascar", image: "https://flagcdn.com/w320/mg.png" },
  { country: "Malawi", image: "https://flagcdn.com/w320/mw.png" },
  { country: "Malaysia", image: "https://flagcdn.com/w320/my.png" },
  { country: "Maldives", image: "https://flagcdn.com/w320/mv.png" },
  { country: "Mali", image: "https://flagcdn.com/w320/ml.png" },
  { country: "Malta", image: "https://flagcdn.com/w320/mt.png" },
  { country: "Mauritius", image: "https://flagcdn.com/w320/mu.png" },
  { country: "Mexico", image: "https://flagcdn.com/w320/mx.png" },
  { country: "Moldova", image: "https://flagcdn.com/w320/md.png" },
  { country: "Monaco", image: "https://flagcdn.com/w320/mc.png" },
  { country: "Mongolia", image: "https://flagcdn.com/w320/mn.png" },
  { country: "Montenegro", image: "https://flagcdn.com/w320/me.png" },
  { country: "Morocco", image: "https://flagcdn.com/w320/ma.png" },
  { country: "Mozambique", image: "https://flagcdn.com/w320/mz.png" },
  { country: "Myanmar", image: "https://flagcdn.com/w320/mm.png" },
  { country: "Namibia", image: "https://flagcdn.com/w320/na.png" },
  { country: "Nepal", image: "https://flagcdn.com/w320/np.png" },
  { country: "Netherlands", image: "https://flagcdn.com/w320/nl.png" },
  { country: "New Zealand", image: "https://flagcdn.com/w320/nz.png" },
  { country: "Nicaragua", image: "https://flagcdn.com/w320/ni.png" },
  { country: "Niger", image: "https://flagcdn.com/w320/ne.png" },
  { country: "Nigeria", image: "https://flagcdn.com/w320/ng.png" },
  { country: "North Korea", image: "https://flagcdn.com/w320/kp.png" },
  { country: "North Macedonia", image: "https://flagcdn.com/w320/mk.png" },
  { country: "Norway", image: "https://flagcdn.com/w320/no.png" },
  { country: "Oman", image: "https://flagcdn.com/w320/om.png" },
  { country: "Pakistan", image: "https://flagcdn.com/w320/pk.png" },
  { country: "Palau", image: "https://flagcdn.com/w320/pw.png" },
  { country: "Palestine", image: "https://flagcdn.com/w320/ps.png" },
  { country: "Panama", image: "https://flagcdn.com/w320/pa.png" },
  { country: "Papua New Guinea", image: "https://flagcdn.com/w320/pg.png" },
  { country: "Paraguay", image: "https://flagcdn.com/w320/py.png" },
  { country: "Peru", image: "https://flagcdn.com/w320/pe.png" },
  { country: "Philippines", image: "https://flagcdn.com/w320/ph.png" },
  { country: "Poland", image: "https://flagcdn.com/w320/pl.png" },
  { country: "Portugal", image: "https://flagcdn.com/w320/pt.png" },
  { country: "Qatar", image: "https://flagcdn.com/w320/qa.png" },
  { country: "Romania", image: "https://flagcdn.com/w320/ro.png" },
  { country: "Russia", image: "https://flagcdn.com/w320/ru.png" },
  { country: "Rwanda", image: "https://flagcdn.com/w320/rw.png" },
  { country: "Saint Kitts and Nevis", image: "https://flagcdn.com/w320/kn.png" },
  { country: "Saint Lucia", image: "https://flagcdn.com/w320/lc.png" },
  { country: "Saint Vincent and the Grenadines", image: "https://flagcdn.com/w320/vc.png" },
  { country: "Samoa", image: "https://flagcdn.com/w320/ws.png" },
  { country: "San Marino", image: "https://flagcdn.com/w320/sm.png" },
  { country: "Saudi Arabia", image: "https://flagcdn.com/w320/sa.png" },
  { country: "Senegal", image: "https://flagcdn.com/w320/sn.png" },
  { country: "Serbia", image: "https://flagcdn.com/w320/rs.png" },
  { country: "Seychelles", image: "https://flagcdn.com/w320/sc.png" },
  { country: "Sierra Leone", image: "https://flagcdn.com/w320/sl.png" },
  { country: "Singapore", image: "https://flagcdn.com/w320/sg.png" },
  { country: "Slovakia", image: "https://flagcdn.com/w320/sk.png" },
  { country: "Slovenia", image: "https://flagcdn.com/w320/si.png" },
  { country: "Solomon Islands", image: "https://flagcdn.com/w320/sb.png" },
  { country: "Somalia", image: "https://flagcdn.com/w320/so.png" },
  { country: "South Africa", image: "https://flagcdn.com/w320/za.png" },
  { country: "South Korea", image: "https://flagcdn.com/w320/kr.png" },
  { country: "Spain", image: "https://flagcdn.com/w320/es.png" },
  { country: "Sri Lanka", image: "https://flagcdn.com/w320/lk.png" },
  { country: "Sudan", image: "https://flagcdn.com/w320/sd.png" },
  { country: "Suriname", image: "https://flagcdn.com/w320/sr.png" },
  { country: "Sweden", image: "https://flagcdn.com/w320/se.png" },
  { country: "Switzerland", image: "https://flagcdn.com/w320/ch.png" },
  { country: "Syria", image: "https://flagcdn.com/w320/sy.png" },
  { country: "Taiwan", image: "https://flagcdn.com/w320/tw.png" },
  { country: "Tajikistan", image: "https://flagcdn.com/w320/tj.png" },
  { country: "Tanzania", image: "https://flagcdn.com/w320/tz.png" },
  { country: "Thailand", image: "https://flagcdn.com/w320/th.png" },
  { country: "Togo", image: "https://flagcdn.com/w320/tg.png" },
  { country: "Tonga", image: "https://flagcdn.com/w320/to.png" },
  { country: "Trinidad and Tobago", image: "https://flagcdn.com/w320/tt.png" },
  { country: "Tunisia", image: "https://flagcdn.com/w320/tn.png" },
  { country: "Turkey", image: "https://flagcdn.com/w320/tr.png" },
  { country: "Turkmenistan", image: "https://flagcdn.com/w320/tm.png" },
  { country: "Tuvalu", image: "https://flagcdn.com/w320/tv.png" },
  { country: "Uganda", image: "https://flagcdn.com/w320/ug.png" },
  { country: "Ukraine", image: "https://flagcdn.com/w320/ua.png" },
  { country: "United Arab Emirates", image: "https://flagcdn.com/w320/ae.png" },
  { country: "United Kingdom", image: "https://flagcdn.com/w320/gb.png" },
  { country: "United States", image: "https://flagcdn.com/w320/us.png" , aliases ["us","United States of America", "USA"], }, 
  { country: "Uruguay", image: "https://flagcdn.com/w320/uy.png" },
  { country: "Uzbekistan", image: "https://flagcdn.com/w320/uz.png" },
  { country: "Vanuatu", image: "https://flagcdn.com/w320/vu.png" },
  { country: "Vatican City", image: "https://flagcdn.com/w320/va.png" },
  { country: "Venezuela", image: "https://flagcdn.com/w320/ve.png" },
  { country: "Vietnam", image: "https://flagcdn.com/w320/vn.png" },
  { country: "Yemen", image: "https://flagcdn.com/w320/ye.png" },
  { country: "Zambia", image: "https://flagcdn.com/w320/zm.png" },
  { country: "Zimbabwe", image: "https://flagcdn.com/w320/zw.png" }
];


const totalFlags = allFlags.length;

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function updateScoreDisplay() {
  scoreElement.textContent = `Score: ${score} / ${total} | Flags Shown: ${total} / ${totalFlags}`;
}

function newFlag() {
  if (availableFlags.length === 0) {
    availableFlags = shuffle([...allFlags]);
  }

  const randomFlag = availableFlags.pop();
  currentCountry = randomFlag.country;
  flagElement.src = randomFlag.image;
  guessInput.value = "";
  resultElement.textContent = "";
  updateScoreDisplay();
}

guessInput.addEventListener("keydown", event => {
  if (event.key === "Enter") {
    const userGuess = guessInput.value.trim().toLowerCase();
    total++;

    if (userGuess === currentCountry.toLowerCase()) {
      resultElement.textContent = "✅ Correct!";
      resultElement.className = "result correct";
      score++;
    } else {
      resultElement.textContent = `❌ Wrong! It was ${currentCountry}.`;
      resultElement.className = "result wrong";
    }

    updateScoreDisplay();
    setTimeout(newFlag, 1500);
  }
});

availableFlags = shuffle([...allFlags]);
newFlag();
