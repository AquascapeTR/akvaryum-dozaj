// AquascapeTR Dozaj Sistemi - web arayuzu
// ESPHome web_server icine gomulur (js_include). Internet gerektirmez.
// https://github.com/AquascapeTR/akvaryum-dozaj
const VERSION = "1.1.0";
const LOGO = "data:image/webp;base64,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";
const RENK = ["#ff5f6d", "#f7c948", "#4aa8ff", "#3ddc97"];
const P = [1, 2, 3, 4];
const S = {};

const css = `
esp-app{display:none!important}
body.atr-std esp-app{display:block!important}
body.atr-std #atr{display:none}
html,body{margin:0;background:#0b0f14}
#atr{--bg:#0b0f14;--card:#141a22;--card2:#1b232d;--line:#26313d;--txt:#e9eef3;--mut:#8b98a5;--red:#e5383b;
  font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;color:var(--txt);
  min-height:100vh;background:radial-gradient(1200px 600px at 50% -200px,#16212d 0%,var(--bg) 60%);padding:0 0 40px}
#atr *{box-sizing:border-box}
.a-wrap{max-width:1080px;margin:0 auto;padding:0 18px}
.a-top{display:flex;align-items:center;gap:14px;padding:18px 0 10px;flex-wrap:wrap}
.a-top img{width:56px;height:56px;border-radius:50%;box-shadow:0 0 0 2px #ffffff22}
.a-brand b{display:block;font-size:20px;letter-spacing:.5px}
.a-brand b i{font-style:normal;color:var(--red)}
.a-brand span{font-size:13px;color:var(--mut)}
.a-sp{flex:1}
.a-pill{display:flex;align-items:center;gap:8px;background:var(--card);border:1px solid var(--line);
  border-radius:999px;padding:8px 14px;font-size:13px;color:var(--mut);white-space:nowrap}
.a-dot{width:9px;height:9px;border-radius:50%;background:#3ddc97}
.a-dot.run{animation:pulse 1s infinite}
.a-dot.off{background:#666}
@keyframes pulse{50%{opacity:.25}}
.a-stop{background:var(--red);color:#fff;border:0;border-radius:999px;padding:10px 18px;font-weight:700;
  font-size:14px;cursor:pointer;box-shadow:0 6px 18px #e5383b40}
.a-stop:active{transform:scale(.97)}
.a-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:16px;margin-top:14px}
.a-card{background:linear-gradient(180deg,var(--card2),var(--card));border:1px solid var(--line);border-radius:22px;
  padding:18px;position:relative;overflow:hidden;cursor:pointer;transition:transform .15s,border-color .15s}
.a-card:hover{transform:translateY(-2px);border-color:#38475a}
.a-card::before{content:"";position:absolute;inset:0 0 auto 0;height:4px;background:var(--c)}
.a-card.run{box-shadow:0 0 0 2px var(--c),0 0 30px -6px var(--c)}
.a-ch{display:flex;align-items:center;justify-content:space-between;font-size:12px;color:var(--mut);
  letter-spacing:1px;text-transform:uppercase}
.a-name{font-size:19px;font-weight:700;margin:4px 0 12px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.a-ring{position:relative;width:150px;height:150px;margin:6px auto 10px}
.a-ring svg{transform:rotate(-90deg)}
.a-ring .t{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center}
.a-ring .t b{font-size:28px}
.a-ring .t span{font-size:12px;color:var(--mut)}
.a-ring.low .t b{color:var(--red)}
.a-row{display:flex;justify-content:space-between;align-items:center;padding:8px 0;border-top:1px solid var(--line);font-size:14px}
.a-row span{color:var(--mut)}
.a-btn{width:100%;margin-top:12px;border:0;border-radius:14px;padding:12px;font-weight:700;font-size:14px;cursor:pointer;
  background:var(--c);color:#0b0f14}
.a-btn.ghost{background:transparent;border:1px solid var(--line);color:var(--txt)}
.a-btn:disabled{opacity:.4;cursor:default}
.a-sw{position:relative;width:46px;height:26px;border-radius:99px;background:#33404d;cursor:pointer;flex:none;transition:.2s;border:0}
.a-sw::after{content:"";position:absolute;top:3px;left:3px;width:20px;height:20px;border-radius:50%;background:#fff;transition:.2s}
.a-sw.on{background:var(--c,#3ddc97)}
.a-sw.on::after{left:23px}
.a-foot{text-align:center;color:var(--mut);font-size:12px;margin-top:28px}
.a-foot a{color:var(--mut)}
.a-link{background:none;border:0;color:var(--mut);text-decoration:underline;cursor:pointer;font-size:12px}
.a-sheet{position:fixed;inset:0;background:#000a;display:none;align-items:flex-end;justify-content:center;z-index:50}
.a-sheet.open{display:flex}
.a-panel{background:var(--card);border:1px solid var(--line);border-radius:24px 24px 0 0;width:100%;max-width:560px;
  max-height:92vh;overflow:auto;padding:22px;border-top:4px solid var(--c)}
@media(min-width:700px){.a-sheet{align-items:center}.a-panel{border-radius:24px}}
.a-ph{display:flex;align-items:center;justify-content:space-between;margin-bottom:6px}
.a-ph b{font-size:20px}
.a-x{background:var(--card2);border:0;color:var(--txt);width:34px;height:34px;border-radius:50%;font-size:18px;cursor:pointer}
.a-sec{margin-top:18px}
.a-sec h4{margin:0 0 8px;font-size:12px;letter-spacing:1px;text-transform:uppercase;color:var(--mut)}
.a-box{background:var(--card2);border:1px solid var(--line);border-radius:16px;padding:6px 14px}
.a-f{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:10px 0;border-bottom:1px solid var(--line);font-size:14px}
.a-f:last-child{border-bottom:0}
.a-f input{background:#0e141b;border:1px solid var(--line);color:var(--txt);border-radius:10px;padding:9px 10px;font-size:15px;
  width:120px;text-align:right}
.a-f input[type=text]{width:180px;text-align:left}
.a-f input[type=time]{width:140px}
@media(max-width:620px){.a-sp{display:none}.a-pill{order:4}.a-stop{order:5;flex:1;padding:12px}.a-brand{flex:1}.a-ring{width:130px;height:130px}.a-ring svg{width:130px;height:130px}}
.a-f input:focus{outline:2px solid var(--c);border-color:transparent}
.a-step{display:flex;align-items:center;gap:6px}
.a-step button{width:34px;height:34px;border-radius:10px;border:1px solid var(--line);background:#0e141b;color:var(--txt);font-size:18px;cursor:pointer}
.a-step input{width:80px;text-align:center}
.a-hint{font-size:12px;color:var(--mut);margin:8px 0 2px;line-height:1.5}
.a-btns{display:flex;gap:10px}
.a-btns .a-btn{margin-top:10px}
.a-toast{position:fixed;left:50%;bottom:24px;transform:translateX(-50%);background:#fff;color:#111;padding:10px 16px;
  border-radius:12px;font-size:14px;font-weight:600;opacity:0;transition:.25s;z-index:99;pointer-events:none}
.a-toast.show{opacity:1}
.a-off{position:fixed;inset:0;background:#0b0f14ee;display:none;align-items:center;justify-content:center;z-index:98;color:var(--mut);font-size:15px}
.a-off.show{display:flex}
`;

// ---------- yardimcilar ----------
const $ = (s, r = document) => r.querySelector(s);
const enc = encodeURIComponent;
const num = (n) => (S["number/" + n] || {}).value;
const val = (k) => (S[k] || {}).value;
const st = (k) => (S[k] || {}).state;
const ad = (p) => { const v = st(`text/Pompa ${p} Adı`); return v && v.trim() ? v : `Pompa ${p}`; };
const fmt = (x, d = 1) => (x === undefined || x === null || isNaN(x)) ? "–" : Number(x).toFixed(d).replace(".", ",");
const hhmm = (p) => { const v = st(`time/Pompa ${p} Doz Saati`) || ""; return v.slice(0, 5) || "--:--"; };

async function post(dom, name, action, value) {
  let u = `/${dom}/${enc(name)}/${action}`;
  if (value !== undefined) u += `?value=${enc(value)}`;
  try {
    const r = await fetch(u, { method: "POST" });
    if (!r.ok) throw new Error(r.status);
    return true;
  } catch (e) { toast("İşlem gönderilemedi"); return false; }
}
const setNum = (n, v) => post("number", n, "set", v);
const press = (n) => post("button", n, "press");

let tt;
function toast(m) {
  const t = $(".a-toast"); t.textContent = m; t.classList.add("show");
  clearTimeout(tt); tt = setTimeout(() => t.classList.remove("show"), 2200);
}

// ---------- arayuz ----------
function ring(p) {
  const kalan = num(`Pompa ${p} Şişe Kalan`) || 0, hacim = num(`Pompa ${p} Şişe Hacmi`) || 500;
  const oran = Math.max(0, Math.min(1, kalan / hacim));
  const r = 64, c = 2 * Math.PI * r;
  const doz = num(`Pompa ${p} Doz`) || 0;
  const gun = doz > 0 ? Math.floor(kalan / doz) : null;
  return `<div class="a-ring ${oran < 0.15 ? "low" : ""}">
    <svg width="150" height="150" viewBox="0 0 150 150"><circle cx="75" cy="75" r="${r}" stroke="#26313d" stroke-width="12" fill="none"/>
    <circle cx="75" cy="75" r="${r}" stroke="${RENK[p - 1]}" stroke-width="12" fill="none" stroke-linecap="round"
      stroke-dasharray="${c}" stroke-dashoffset="${c * (1 - oran)}" style="transition:stroke-dashoffset .6s"/></svg>
    <div class="t"><b>${Math.round(kalan)}</b><span>ml kaldı</span>
    <span>${gun === null ? "" : `≈ ${gun} gün`}</span></div></div>`;
}

function kart(p) {
  const oto = val(`switch/Pompa ${p} Otomatik`);
  const doz = num(`Pompa ${p} Doz`);
  const run = (st("text_sensor/Aktif Pompa") || "") === `Pompa ${p}`;
  return `<div class="a-card ${run ? "run" : ""}" style="--c:${RENK[p - 1]}" data-p="${p}">
    <div class="a-ch"><span>Kanal ${p}</span>
      <button class="a-sw ${oto ? "on" : ""}" data-oto="${p}" title="Otomatik dozlama"></button></div>
    <div class="a-name">${esc(ad(p))}</div>
    ${ring(p)}
    <div class="a-row"><span>Doz</span><b>${fmt(doz)} ml</b></div>
    <div class="a-row"><span>Saat</span><b>${oto ? hhmm(p) : "Kapalı"}</b></div>
    <button class="a-btn" data-doz="${p}" ${run ? "disabled" : ""}>${run ? "Dozlanıyor…" : "Şimdi Doz Ver"}</button>
  </div>`;
}
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

function cizKartlar() {
  $("#a-grid").innerHTML = P.map(kart).join("");
  const a = st("text_sensor/Aktif Pompa") || "";
  const m = a.match(/Pompa (\d)/);
  $("#a-dot").className = "a-dot" + (m ? " run" : "") + (bagli ? "" : " off");
  $("#a-durum").textContent = !bagli ? "Bağlantı yok" : m ? `${ad(+m[1])} çalışıyor` : "Beklemede";
  const w = val("sensor/Wi-Fi Sinyal");
  $("#a-wifi").textContent = w ? `Wi-Fi ${Math.round(w)} dBm` : "";
}

// ---------- detay paneli ----------
let acik = 0;
function panel(p) {
  acik = p;
  const sh = $("#a-sheet"); sh.style.setProperty("--c", RENK[p - 1]);
  $("#a-panel").innerHTML = `
  <div class="a-ph"><b>${esc(ad(p))}</b><button class="a-x" data-kapat>×</button></div>
  <div class="a-hint">Kanal ${p} · değişiklikler kartın hafızasına anında kaydedilir</div>

  <div class="a-sec"><h4>Dozlama</h4><div class="a-box">
    <div class="a-f">Pompa adı<input type="text" maxlength="20" data-text="Pompa ${p} Adı" value="${esc(ad(p))}"></div>
    <div class="a-f">Günlük doz (ml)<div class="a-step"><button data-adim="-0.5">−</button>
      <input type="number" step="0.1" min="0" max="50" data-num="Pompa ${p} Doz" value="${num(`Pompa ${p} Doz`) ?? 0}">
      <button data-adim="0.5">+</button></div></div>
    <div class="a-f">Doz saati<input type="time" data-time="Pompa ${p} Doz Saati" value="${hhmm(p)}"></div>
    <div class="a-f">Otomatik dozlama<button class="a-sw ${val(`switch/Pompa ${p} Otomatik`) ? "on" : ""}" data-oto="${p}"></button></div>
  </div></div>

  <div class="a-sec"><h4>Şişe</h4><div class="a-box">
    <div class="a-f">Şişe hacmi (ml)<input type="number" step="10" min="50" max="5000" data-num="Pompa ${p} Şişe Hacmi" value="${num(`Pompa ${p} Şişe Hacmi`) ?? 500}"></div>
    <div class="a-f">Kalan (ml)<input type="number" step="1" min="0" max="5000" data-num="Pompa ${p} Şişe Kalan" value="${Math.round(num(`Pompa ${p} Şişe Kalan`) ?? 0)}"></div>
  </div>
  <button class="a-btn" data-doldur="${p}">Şişeyi doldurdum</button></div>

  <div class="a-sec"><h4>Kalibrasyon</h4><div class="a-box">
    <div class="a-f">Akış (ml/sn)<input type="number" step="0.01" min="0.1" max="10" data-num="Pompa ${p} Akış" value="${num(`Pompa ${p} Akış`) ?? 2}"></div>
  </div>
  <div class="a-hint">1) Hortum ucunu boş bir ölçü kabına koy. 2) “30 sn çalıştır”a bas. 3) Biriken miktarı yaz ve kaydet.</div>
  <div class="a-btns"><button class="a-btn ghost" data-kal="${p}">30 sn çalıştır</button></div>
  <div class="a-box" style="margin-top:10px">
    <div class="a-f">Ölçülen miktar (ml)<input type="number" step="0.5" min="0" id="a-olcum" placeholder="örn. 57"></div>
  </div>
  <button class="a-btn" data-kalkaydet="${p}">Hesapla ve kaydet</button></div>
  `;
  sh.classList.add("open");
}
function kapat() { $("#a-sheet").classList.remove("open"); acik = 0; }

// ---------- olaylar ----------
function baglaOlaylar() {
  document.addEventListener("click", async (e) => {
    const t = e.target.closest("button,.a-card,[data-kapat]");
    if (!t) { if (e.target.id === "a-sheet") kapat(); return; }
    const d = t.dataset;
    if (d.kapat !== undefined) return kapat();
    if (d.oto) { e.stopPropagation(); const on = !val(`switch/Pompa ${d.oto} Otomatik`);
      t.classList.toggle("on", on);
      await post("switch", `Pompa ${d.oto} Otomatik`, on ? "turn_on" : "turn_off");
      return toast(on ? "Otomatik dozlama açık" : "Otomatik dozlama kapalı"); }
    if (d.doz) { e.stopPropagation(); const p = d.doz, m = num(`Pompa ${p} Doz`) || 0;
      if (m <= 0) return toast("Önce doz miktarını ayarla");
      if (!confirm(`${ad(p)}: ${fmt(m)} ml şimdi verilsin mi?`)) return;
      if (await press(`Pompa ${p} Şimdi Doz Ver`)) toast("Doz başlatıldı"); return; }
    if (d.adim) { const i = t.parentElement.querySelector("input");
      i.value = Math.max(0, Math.round((+i.value + +d.adim) * 10) / 10); i.dispatchEvent(new Event("change", { bubbles: true })); return; }
    if (d.doldur) { const p = d.doldur, h = num(`Pompa ${p} Şişe Hacmi`) || 500;
      if (await setNum(`Pompa ${p} Şişe Kalan`, h)) { toast("Şişe dolu olarak işaretlendi"); panel(p); } return; }
    if (d.kal) { if (!confirm("Pompa 30 saniye çalışacak. Hortum ucu ölçü kabında mı?")) return;
      if (await press(`Pompa ${d.kal} Kalibrasyon 30 sn`)) toast("Kalibrasyon: 30 sn çalışıyor"); return; }
    if (d.kalkaydet) { const ml = parseFloat($("#a-olcum").value);
      if (!(ml > 0)) return toast("Ölçülen miktarı gir");
      const hiz = Math.round((ml / 30) * 100) / 100;
      if (await setNum(`Pompa ${d.kalkaydet} Akış`, hiz)) { toast(`Akış ${fmt(hiz, 2)} ml/sn olarak kaydedildi`); panel(d.kalkaydet); } return; }
    if (d.durdur !== undefined) { await press("Acil Durdur"); return toast("Tüm pompalar durduruldu"); }
    if (d.std !== undefined) { document.body.classList.add("atr-std"); return; }
    if (d.ayar !== undefined) return ayarlar();
    if (d.yenile !== undefined) { if (confirm("Cihaz yeniden başlatılsın mı?")) { await press("Yeniden Başlat"); toast("Yeniden başlatılıyor"); } return; }
    if (t.classList.contains("a-card")) return panel(+t.dataset.p);
  });
  document.addEventListener("change", async (e) => {
    const i = e.target, d = i.dataset;
    if (d.num) { if (await setNum(d.num, i.value)) toast("Kaydedildi"); }
    else if (d.text) { if (await post("text", d.text, "set", i.value.trim())) toast("Kaydedildi"); }
    else if (d.time) { if (i.value && await post("time", d.time, "set", i.value + ":00")) toast("Kaydedildi"); }
  });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") kapat(); });
}

function ayarlar() {
  acik = -1;
  $("#a-sheet").style.setProperty("--c", "#8b98a5");
  $("#a-panel").innerHTML = `
  <div class="a-ph"><b>Ayarlar</b><button class="a-x" data-kapat>×</button></div>
  <div class="a-sec"><h4>Güvenlik</h4><div class="a-box">
    <div class="a-f">Maks. pompa süresi (sn)<input type="number" min="1" max="60" step="1" data-num="Maks. Pompa Süresi" value="${num("Maks. Pompa Süresi") ?? 30}"></div>
  </div><div class="a-hint">Tek bir doz bu süreden uzun sürmez. Pompalar hiçbir zaman aynı anda çalışmaz.</div></div>
  <div class="a-sec"><h4>Cihaz</h4>
    <div class="a-btns"><button class="a-btn ghost" data-yenile>Yeniden başlat</button>
    <button class="a-btn ghost" data-std>Gelişmiş görünüm</button></div>
    <div class="a-hint">Yazılım sürümü ${VERSION} · Güncelleme ve kurulum: aquascapetr.github.io/akvaryum-dozaj</div></div>`;
  $("#a-sheet").classList.add("open");
}

// ---------- canli veri ----------
let bagli = false, ciz = 0;
function guncelle() {
  cancelAnimationFrame(ciz);
  ciz = requestAnimationFrame(() => {
    cizKartlar();
    // panel acikken, kullanici yazmiyorsa degerleri tazele
    if (acik > 0 && !document.activeElement?.matches("#a-panel input")) {
      const o = $("#a-olcum")?.value; panel(acik); if (o) $("#a-olcum").value = o;
    }
  });
}
function baglan() {
  const es = new EventSource("/events");
  es.addEventListener("open", () => { bagli = true; $(".a-off").classList.remove("show"); guncelle(); });
  es.addEventListener("state", (e) => {
    try { const d = JSON.parse(e.data); S[d.name_id || d.id] = d; S[d.id] = d; guncelle(); } catch (_) {}
  });
  es.addEventListener("error", () => { bagli = false; $(".a-off").classList.add("show"); guncelle(); });
}

// ---------- baslat ----------
function kur() {
  const s = document.createElement("style"); s.textContent = css; document.head.appendChild(s);
  document.title = "AquascapeTR · Dozaj Sistemi";
  const ic = document.createElement("link"); ic.rel = "icon"; ic.href = LOGO; document.head.appendChild(ic);
  const root = document.createElement("div"); root.id = "atr";
  root.innerHTML = `<div class="a-wrap">
    <div class="a-top"><img src="${LOGO}" alt="AquascapeTR">
      <div class="a-brand"><b>Aquascape<i>TR</i></b><span>Otomatik Gübre Dozaj Sistemi</span></div>
      <div class="a-sp"></div>
      <div class="a-pill"><span class="a-dot" id="a-dot"></span><span id="a-durum">Bağlanıyor…</span></div>
      <button class="a-stop" data-durdur>■ Acil Durdur</button></div>
    <div style="display:flex;justify-content:space-between;color:var(--mut);font-size:12px">
      <span id="a-wifi"></span><button class="a-link" data-ayar>Ayarlar</button></div>
    <div class="a-grid" id="a-grid"></div>
    <div class="a-foot">AquascapeTR · <a href="https://www.youtube.com/@AquascapeTR" target="_blank">youtube.com/@AquascapeTR</a> · v${VERSION}</div>
  </div>
  <div class="a-sheet" id="a-sheet"><div class="a-panel" id="a-panel"></div></div>
  <div class="a-toast"></div><div class="a-off">Cihaza bağlanılamıyor… yeniden deneniyor</div>`;
  document.body.appendChild(root);
  baglaOlaylar(); cizKartlar(); baglan();
}
if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", kur); else kur();
