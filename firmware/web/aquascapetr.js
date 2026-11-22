// AquascapeTR Dozaj Sistemi - web arayuzu
// ESPHome web_server icine gomulur (js_include). Internet gerektirmez.
// https://github.com/AquascapeTR/akvaryum-dozaj  ·  https://www.youtube.com/@AquascapeTR
const VERSION = "2.3.1";
const LOGO = "data:image/webp;base64,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";
const YT = "https://www.youtube.com/@AquascapeTR";
const GH = "https://aquascapetr.github.io/akvaryum-dozaj/";
const SSS = [["Bu sistem ne işe yarar?", "Akvaryumuna sıvı gübreleri (makro, mikro, potasyum, iz element vb.) senin belirlediğin gün ve saatlerde, ml hassasiyetinde otomatik olarak verir. Her gün elle dozlama yapma derdini ortadan kaldırır, bitkilere düzenli ve dengeli besin sağlar."], ["Hangi parçalar gerekiyor?", "Bir ESP32 geliştirme kartı, 4 kanallı 5V röle modülü, 12V→5V USB dönüştürücü, 12V adaptör, 4 adet 12V peristaltik pompa, 4 diyot ve jumper kablolar. Lehim gerekmez. Ayrıntılı liste ve bağlantı şeması kurulum sayfasında."], ["Kod bilmem gerekiyor mu?", "Hayır. Yazılım hazır: ESP32'yi USB ile bilgisayara takıp kurulum sayfasındaki “Yazılımı Yükle” butonuna basman yeterli. Wi-Fi ayarı da aynı sayfada yapılır."], ["Bir uygulama, üyelik veya internet gerekli mi?", "Uygulama ya da üyelik gerekmez; kontrol paneli cihazın içindedir ve ev ağından tarayıcıyla aquascapetr.local adresinden açılır. İnternet yalnızca saati öğrenmek ve güncellemeleri kontrol etmek için kullanılır; dozlama internetten bağımsız çalışır."], ["Programı nasıl kurarım?", "Pompa kartına dokun, dozlama yapılacak günleri seç (her gün, hafta içi ya da istediğin günler), ardından doz zamanlarını ve miktarlarını ekle. Günde 6 doza kadar tanımlanabilir. “Programı kaydet” deyince program cihaza yazılır ve “Otomatik” açıkken uygulanır."], ["Kalibrasyon nedir, ne sıklıkla yapmalıyım?", "Her pompanın saniyede kaç ml bastığını ölçmektir. İlk kurulumda, hortum değiştirdiğinde ve ayda bir kontrol amaçlı yapmanı öneririz. Sihirbaz pompayı 30 sn çalıştırır, sen ölçü kabındaki miktarı girersin, gerisini sistem hesaplar."], ["Aynı anda birden fazla pompa çalışır mı?", "Hayır. Aynı saate denk gelen dozlar sırayla ve aralarında 10 saniye beklenerek verilir. Böylece bazı gübrelerin hortumda veya suyun aynı noktasında birbiriyle tepkimeye girmesi engellenir."], ["Elektrik veya internet kesilirse ne olur?", "Tüm ayarlar cihazın hafızasında kalır. Kesinti sırasında saati gelen dozlar atlanır; sistem asla telafi için fazladan doz vermez. Elektrik geldikten sonra saat internetten tekrar alınır ve program kaldığı yerden devam eder."], ["Bir pompa takılı kalıp tüm gübreyi basabilir mi?", "Buna karşı birkaç önlem var: tek doz “Maks. pompa süresi”ni (varsayılan 30 sn) aşamaz, kapatma komutu tekrarlanır, boştayken röleler düzenli olarak kapalı konuma çekilir, açılışta tüm pompalar kapalıdır ve panelde her zaman bir Acil Durdur butonu bulunur."], ["Şişe takibi nasıl çalışır?", "Şişe hacmini bir kez girersin. Şişeyi doldurduğunda “Şişeyi doldurdum”a basarsın; her dozda kalan miktar otomatik düşer ve kartta gübrenin yaklaşık kaç gün yeteceği gösterilir."], ["Wi-Fi bağlantısı koparsa ne olur?", "Dozlama programı cihazın içinde çalıştığı için bağlantı kopsa da dozlar zamanında verilir. Bağlantı bekçisi her dakika modemi kontrol eder; 3 dakika yanıt alamazsa Wi-Fi'ı yeniden kurar, 10 dakika düzelmezse (pompa çalışmıyorken) cihazı yeniden başlatır. Bilinen Wi-Fi ağı tamamen giderse cihaz 5 dakika sonra kendini yeniden başlatır. Panel de bağlantı kopunca kendiliğinden yeniden bağlanır; Ayarlar → Bağlantı durumu bölümünde kopma geçmişini görebilirsin."], ["Cihazı başka bir yere (başka bir Wi-Fi ağına) taşırsam?", "Cihaz bir seferde tek bir ağı hatırlar. Taşımadan önce panelde Ayarlar → Wi-Fi ağını değiştir bölümüne yeni ağın adını ve şifresini girersen cihaz yeni yerinde doğrudan bağlanır. Girmediysen, cihaz yeni yerde kayıtlı ağı bulamayınca yaklaşık 1,5 dakika sonra “AquascapeTR Kurulum” ağını açar (şifre dozaj1234); telefonla bağlanıp yeni ağı seçmen yeterli. Bu ağ, sen ayar yapabilesin diye 30 dakika açık kalır. Cihazı USB ile bilgisayara takıp kurulum sayfasından “Change Wi-Fi” ile de ayarlayabilirsin."], ["Panel açılmıyor, ne yapmalıyım?", "Telefonun/bilgisayarın cihazla aynı Wi-Fi ağında olduğundan emin ol. aquascapetr.local açılmazsa modem arayüzündeki bağlı cihazlar listesinden “aquascapetr” cihazının IP adresini bulup tarayıcıya yaz. Bazı Android telefonlar .local adreslerini açamaz."], ["Yazılımı nasıl güncellerim?", "Cihaz haftada bir yeni sürüm olup olmadığını kendiliğinden kontrol eder; yeni sürüm varsa panelin üstünde “Yeni sürüm hazır” uyarısı çıkar. Ayarlar → Yazılım güncelleme bölümünden istediğin zaman “Güncellemeleri kontrol et” diyebilir, “Şimdi güncelle” ile tek tıkla kurabilirsin. Güncelleme sırasında pompalar durdurulur; ayarların ve programların korunur."], ["Hangi gübreleri kullanabilirim?", "Akvaryum için üretilmiş sıvı gübrelerin ve kendi hazırladığın çözeltilerin tamamı kullanılabilir. Pompa hortumunun (silikon/BPT) kullandığın sıvıya uygun olduğundan emin ol ve hortumları belirli aralıklarla kontrol et."]];
const OZELLIK = [["💧", "4 bağımsız kanal", "Her pompa için ayrı ad, renk ve program."], ["🗓️", "Haftalık program", "İstediğin günler, günde 6 doza kadar."], ["🎯", "ml hassasiyeti", "Doz ml olarak girilir, süre otomatik hesaplanır."], ["🧪", "Kolay kalibrasyon", "30 saniyelik test, adım adım sihirbaz."], ["🍾", "Şişe takibi", "Kalan gübre ve kaç gün yeteceği görünür."], ["🛡️", "Güvenlik", "Pompalar asla aynı anda çalışmaz; süre sınırı ve acil durdur."], ["📶", "Kendi kontrol paneli", "Telefon ve bilgisayardan tarayıcıyla açılır; uygulama veya üyelik gerekmez."], ["🔄", "Çevrimiçi güncelleme", "Yeni sürüm çıkınca panel haber verir, tek tıkla kurulur."], ["🔌", "Bağlantı bekçisi", "Kopmaları algılar, Wi-Fi'ı kendiliğinden yeniden kurar."]];
const RENK = ["#f7c948", "#4aa8ff", "#e9eef3", "#3ddc97"]; // 1 Sari, 2 Mavi, 3 Beyaz, 4 Yesil
const GUN = ["Pzt", "Sal", "Çar", "Per", "Cum", "Cmt", "Paz"];
const GUN1 = ["Pt", "Sa", "Ça", "Pe", "Cu", "Ct", "Pz"];
const MAKS_DOZ = 6;
const P = [1, 2, 3, 4];
const S = {};
const GUN_ID = "update/Yazılım Güncellemesi";

const css = `
esp-app{display:none!important}
html,body{margin:0;background:#0b0f14}
#atr{--bg:#0b0f14;--card:#141a22;--card2:#1b232d;--line:#26313d;--txt:#e9eef3;--mut:#8b98a5;--red:#e5383b;--yt:#ff0033;
  font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;color:var(--txt);
  min-height:100vh;background:radial-gradient(1200px 600px at 50% -200px,#16212d 0%,var(--bg) 60%);padding:0 0 40px}
#atr *{box-sizing:border-box}
#atr a{color:inherit}
.a-wrap{max-width:1080px;margin:0 auto;padding:0 18px}
.a-top{display:flex;align-items:center;gap:14px;padding:18px 0 10px;flex-wrap:wrap}
.a-top img{width:56px;height:56px;border-radius:50%;box-shadow:0 0 0 2px #ffffff22;cursor:pointer}
.a-brand b{display:block;font-size:20px;letter-spacing:.5px}
.a-brand b i,.r{font-style:normal;color:var(--red)}
.a-brand span{font-size:13px;color:var(--mut)}
.a-sp{flex:1}
.a-pill{display:flex;align-items:center;gap:8px;background:var(--card);border:1px solid var(--line);
  border-radius:999px;padding:8px 14px;font-size:13px;color:var(--mut);white-space:nowrap}
.a-dot{width:9px;height:9px;border-radius:50%;background:#3ddc97}
.a-dot.run{animation:pulse 1s infinite}.a-dot.off{background:#666}
@keyframes pulse{50%{opacity:.25}}
.a-stop{background:var(--red);color:#fff;border:0;border-radius:999px;padding:10px 18px;font-weight:700;
  font-size:14px;cursor:pointer;box-shadow:0 6px 18px #e5383b40}
.a-stop:active{transform:scale(.97)}
.a-sub{display:flex;align-items:center;gap:14px;color:var(--mut);font-size:12px;flex-wrap:wrap}
.a-sub .a-sp{flex:1}
.a-lnk{background:none;border:0;color:var(--mut);cursor:pointer;font-size:13px;padding:4px 0;display:inline-flex;align-items:center;gap:6px;text-decoration:none}
.a-lnk:hover{color:var(--txt)}
.a-yt{display:inline-flex;align-items:center;gap:6px;background:var(--yt);color:#fff!important;border-radius:999px;padding:5px 12px;
  font-size:12px;font-weight:700;text-decoration:none}
.a-yt svg{width:14px;height:14px}
.a-banner{display:none;align-items:center;gap:10px;margin-top:12px;background:linear-gradient(90deg,#173326,#141a22);border:1px solid #2b5a43;
  border-radius:16px;padding:12px 16px;cursor:pointer;font-size:14px}
.a-banner .a-sp{flex:1;display:block!important}
.a-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:16px;margin-top:14px}
.a-card{background:linear-gradient(180deg,var(--card2),var(--card));border:1px solid var(--line);border-radius:22px;
  padding:18px;position:relative;overflow:hidden;cursor:pointer;transition:transform .15s,border-color .15s}
.a-card:hover{transform:translateY(-2px);border-color:#38475a}
.a-card::before{content:"";position:absolute;inset:0 0 auto 0;height:4px;background:var(--c)}
.a-card.run{box-shadow:0 0 0 2px var(--c),0 0 30px -6px var(--c)}
.a-ch{display:flex;align-items:center;justify-content:space-between;font-size:12px;color:var(--mut);letter-spacing:1px;text-transform:uppercase}
.a-name{font-size:19px;font-weight:700;margin:4px 0 8px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.a-ring{position:relative;width:140px;height:140px;margin:4px auto 10px}
.a-ring svg{transform:rotate(-90deg);width:140px;height:140px}
.a-ring .t{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center}
.a-ring .t b{font-size:26px}.a-ring .t span{font-size:12px;color:var(--mut)}
.a-ring.low .t b{color:var(--red)}
.a-days{display:flex;gap:4px;justify-content:center;margin:0 0 10px}
.a-days i{font-style:normal;font-size:10px;width:26px;text-align:center;padding:3px 0;border-radius:6px;background:#202a35;color:#5d6b79}
.a-days i.on{background:var(--c);color:#0b0f14;font-weight:700}
.a-row{display:flex;justify-content:space-between;align-items:center;padding:8px 0;border-top:1px solid var(--line);font-size:14px;gap:8px}
.a-row span{color:var(--mut)}.a-row b{text-align:right}
.a-btn{width:100%;margin-top:12px;border:0;border-radius:14px;padding:12px;font-weight:700;font-size:14px;cursor:pointer;background:var(--c);color:#0b0f14}
.a-btn.ghost{background:transparent;border:1px solid var(--line);color:var(--txt)}
.a-btn.red{background:var(--red);color:#fff}
.a-btn:disabled{opacity:.4;cursor:default}
.a-sw{position:relative;width:46px;height:26px;border-radius:99px;background:#33404d;cursor:pointer;flex:none;transition:.2s;border:0}
.a-sw::after{content:"";position:absolute;top:3px;left:3px;width:20px;height:20px;border-radius:50%;background:#fff;transition:.2s}
.a-sw.on{background:var(--c,#3ddc97)}.a-sw.on::after{left:23px;background:var(--k,#fff)}
.a-foot{margin-top:30px;display:flex;align-items:center;gap:16px;justify-content:center;flex-wrap:wrap;
  background:var(--card);border:1px solid var(--line);border-radius:18px;padding:16px}
.a-foot img{width:44px;height:44px;border-radius:50%}
.a-foot div{font-size:13px;color:var(--mut)}.a-foot b{color:var(--txt);font-size:15px}
.a-sheet{position:fixed;inset:0;background:#000a;display:none;align-items:flex-end;justify-content:center;z-index:50}
.a-sheet.open{display:flex}
.a-panel{background:var(--card);border:1px solid var(--line);border-radius:24px 24px 0 0;width:100%;max-width:580px;
  max-height:92vh;overflow:auto;padding:22px;border-top:4px solid var(--c)}
@media(min-width:700px){.a-sheet{align-items:center}.a-panel{border-radius:24px}}
.a-ph{display:flex;align-items:center;justify-content:space-between;margin-bottom:6px;gap:10px}
.a-ph b{font-size:20px}
.a-x{background:var(--card2);border:0;color:var(--txt);width:34px;height:34px;border-radius:50%;font-size:18px;cursor:pointer;flex:none}
.a-sec{margin-top:18px}
.a-sec h4{margin:0 0 8px;font-size:12px;letter-spacing:1px;text-transform:uppercase;color:var(--mut);display:flex;justify-content:space-between}
.a-box{background:var(--card2);border:1px solid var(--line);border-radius:16px;padding:6px 14px}
.a-f{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:10px 0;border-bottom:1px solid var(--line);font-size:14px}
.a-f:last-child{border-bottom:0}
.a-f input,.a-dz input{background:#0e141b;border:1px solid var(--line);color:var(--txt);border-radius:10px;padding:9px 10px;font-size:15px;width:120px;text-align:right}
.a-f input[type=text]{width:180px;text-align:left}
input[type=time]{width:136px!important;text-align:left!important}
#atr input:focus{outline:2px solid var(--c);border-color:transparent}
.a-step{display:flex;align-items:center;gap:6px}
.a-step button{width:34px;height:34px;border-radius:10px;border:1px solid var(--line);background:#0e141b;color:var(--txt);font-size:18px;cursor:pointer}
.a-step input{width:70px!important;text-align:center!important}
.a-hint{font-size:12px;color:var(--mut);margin:8px 0 2px;line-height:1.5}
.a-chips{display:flex;gap:6px;flex-wrap:wrap;padding:10px 0}
.a-chip{flex:1;min-width:42px;border:1px solid var(--line);background:#0e141b;color:var(--mut);border-radius:10px;padding:9px 0;font-weight:700;font-size:13px;cursor:pointer}
.a-chip.on{background:var(--c);color:#0b0f14;border-color:transparent}
.a-pre{display:flex;gap:12px;padding:0 0 10px}
.a-pre button{background:none;border:0;color:var(--mut);font-size:12px;text-decoration:underline;cursor:pointer;padding:0}
.a-dz{display:flex;align-items:center;gap:8px;padding:8px 0;border-top:1px solid var(--line)}
.a-dz .a-sp{flex:1}
.a-dz .del{background:none;border:0;color:var(--mut);font-size:20px;cursor:pointer;width:30px}
.a-add{width:100%;background:none;border:1px dashed var(--line);color:var(--txt);border-radius:12px;padding:10px;margin:6px 0 8px;cursor:pointer;font-size:14px}
.a-sum{font-size:13px;color:var(--mut);padding:8px 0 4px;border-top:1px solid var(--line)}
.a-sum b{color:var(--txt)}
.a-dirty{animation:glow 1.2s infinite}
@keyframes glow{50%{box-shadow:0 0 0 4px #ffffff22}}
.a-toast{position:fixed;left:50%;bottom:24px;transform:translateX(-50%);background:#fff;color:#111;padding:10px 16px;
  border-radius:12px;font-size:14px;font-weight:600;opacity:0;transition:.25s;z-index:99;pointer-events:none}
.a-toast.show{opacity:1}
.a-off{position:fixed;inset:0;background:#0b0f14ee;display:none;align-items:center;justify-content:center;z-index:98;color:var(--mut);font-size:15px}
.a-off.show{display:flex}
/* kalibrasyon */
.k-steps{display:flex;gap:6px;margin:6px 0 14px}
.k-steps i{flex:1;height:4px;border-radius:4px;background:var(--line)}
.k-steps i.on{background:var(--c)}
.k-vis{display:flex;justify-content:center;margin:6px 0}
.k-vis svg{width:100%;max-width:420px;height:auto}
.k-big{text-align:center;font-size:44px;font-weight:800;margin:4px 0}
.k-res{text-align:center;background:var(--card2);border:1px solid var(--line);border-radius:16px;padding:14px;margin-top:12px}
.k-res b{font-size:30px;color:var(--c)}
.k-ml{display:flex;align-items:center;justify-content:center;gap:10px;margin:10px 0}
.k-ml button{width:46px;height:46px;border-radius:14px;border:1px solid var(--line);background:#0e141b;color:var(--txt);font-size:16px;cursor:pointer}
.k-ml input{width:120px;font-size:28px;text-align:center;background:#0e141b;border:1px solid var(--line);color:var(--txt);border-radius:14px;padding:8px}
.k-liq{transform-origin:bottom;transform-box:fill-box}
.k-run .k-liq{animation:fill 30s linear forwards}
@keyframes fill{from{transform:scaleY(0)}to{transform:scaleY(1)}}
.k-drop{opacity:0}
.k-run .k-drop{animation:drop .7s linear infinite}
@keyframes drop{0%{opacity:1;transform:translateY(0)}100%{opacity:0;transform:translateY(46px)}}
.k-rot{transform-origin:center;transform-box:fill-box}
.k-run .k-rot{animation:spin 1.2s linear infinite}
@keyframes spin{to{transform:rotate(360deg)}}
.k-ok{width:84px;height:84px;margin:10px auto;border-radius:50%;background:var(--c);display:flex;align-items:center;justify-content:center;
  animation:pop .4s ease-out}
@keyframes pop{0%{transform:scale(.3);opacity:0}100%{transform:scale(1);opacity:1}}
/* kurulum semasi */
.a-panel.genis{max-width:1100px}
.k-tabs{display:flex;gap:6px;flex-wrap:wrap;margin:10px 0}
.k-tab{border:1px solid var(--line);background:#0e141b;color:var(--mut);border-radius:999px;padding:7px 12px;font-size:13px;font-weight:700;cursor:pointer}
.k-tab.on{background:#e9eef3;color:#0b0f14;border-color:transparent}
.k-sema{background:#0b0f14;border:1px solid var(--line);border-radius:16px;overflow:auto}
.k-sema svg{display:block;width:100%;min-width:640px;height:auto}
.k-adim{background:var(--card2);border:1px solid var(--line);border-radius:14px;padding:14px 16px;margin-top:12px;font-size:14px;line-height:1.6}
.k-adim b.t{display:block;font-size:15px;margin-bottom:4px}
.k-adim ul{margin:6px 0 0;padding-left:18px}
.k-uyari{background:#3b1d1d;border:1px solid #7f1d1d;color:#fecaca;border-radius:12px;padding:10px 12px;font-size:13px;margin-top:10px}
.k-tablo{width:100%;border-collapse:collapse;font-size:13px;margin-top:6px}
.k-tablo td,.k-tablo th{border-bottom:1px solid var(--line);padding:8px 6px;text-align:left}
.k-tablo th{color:var(--mut);font-weight:600}
.k-kab{display:inline-block;width:22px;height:5px;border-radius:3px;vertical-align:middle;margin-right:6px}
/* sss */
.s-hero{text-align:center;padding:6px 0 10px}
.s-hero img{width:110px;height:110px;border-radius:50%;box-shadow:0 0 0 3px #ffffff22}
.s-hero h2{margin:12px 0 4px;font-size:24px}
.s-hero p{color:var(--mut);margin:0 auto 12px;max-width:460px;line-height:1.6;font-size:14px}
.s-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:10px}
.s-grid div{background:var(--card2);border:1px solid var(--line);border-radius:14px;padding:12px;font-size:13px;color:var(--mut);line-height:1.45}
.s-grid div b{display:block;color:var(--txt);font-size:14px;margin:4px 0 2px}
.s-grid div em{font-style:normal;font-size:20px}
details{background:var(--card2);border:1px solid var(--line);border-radius:14px;margin-bottom:8px;padding:0 14px}
summary{cursor:pointer;padding:13px 0;font-weight:600;font-size:14px;list-style:none;display:flex;justify-content:space-between;gap:10px}
summary::after{content:"+";color:var(--mut);font-size:18px}
details[open] summary::after{content:"−"}
details p{margin:0 0 14px;color:var(--mut);font-size:14px;line-height:1.6}
@media(max-width:620px){#a-wifi{display:none}.a-sub{gap:10px}.a-sp{display:none}.a-sub .a-sp{display:block}.a-pill{order:4}.a-stop{order:5;flex:1;padding:12px}.a-brand{flex:1}}
`;

// ---------- yardimcilar ----------
const $ = (s, r = document) => r.querySelector(s);
const enc = encodeURIComponent;
const num = (n) => (S["number/" + n] || {}).value;
const val = (k) => (S[k] || {}).value;
const st = (k) => (S[k] || {}).state;
const ad = (p) => { const v = st(`text/Pompa ${p} Adı`); return v && v.trim() ? v : `Pompa ${p}`; };
const fmt = (x, d = 1) => (x === undefined || x === null || isNaN(x)) ? "–" : Number(x).toFixed(d).replace(".", ",");
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const ytIkon = `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M23 7.2a3 3 0 0 0-2.1-2.1C19 4.6 12 4.6 12 4.6s-7 0-8.9.5A3 3 0 0 0 1 7.2 31 31 0 0 0 .5 12 31 31 0 0 0 1 16.8a3 3 0 0 0 2.1 2.1c1.9.5 8.9.5 8.9.5s7 0 8.9-.5a3 3 0 0 0 2.1-2.1c.4-1.6.5-4.8.5-4.8s0-3.2-.5-4.8zM9.7 15.1V8.9l5.8 3.1-5.8 3.1z"/></svg>`;

// Plan: "1111100 10:00=2.0,18:30=1.5"
function planOku(p) {
  const s = st(`text/Pompa ${p} Program`) || "";
  const gun = (s.slice(0, 7) + "0000000").slice(0, 7).split("").map((c) => c === "1");
  const dozlar = s.slice(7).split(",").map((x) => x.trim()).filter(Boolean).map((x) => {
    const m = x.match(/^(\d{1,2}):(\d{2})=([\d.]+)$/);
    return m ? { s: m[1].padStart(2, "0") + ":" + m[2], ml: +m[3] } : null;
  }).filter(Boolean);
  return { gun, dozlar };
}
function planYaz(pl) {
  const d = [...pl.dozlar].filter((x) => x.s).sort((a, b) => a.s.localeCompare(b.s));
  return pl.gun.map((b) => (b ? "1" : "0")).join("") + " " + d.map((x) => `${x.s}=${(+x.ml || 0).toFixed(1)}`).join(",");
}
const haftalik = (pl) => pl.gun.filter(Boolean).length * pl.dozlar.reduce((a, d) => a + (+d.ml || 0), 0);
function sonraki(pl) {
  if (!pl.gun.some(Boolean) || !pl.dozlar.length) return null;
  const now = new Date();
  for (let i = 0; i < 8; i++) {
    const g = new Date(now); g.setDate(now.getDate() + i);
    const gi = (g.getDay() + 6) % 7;
    if (!pl.gun[gi]) continue;
    for (const d of [...pl.dozlar].sort((a, b) => a.s.localeCompare(b.s))) {
      const [h, m] = d.s.split(":").map(Number);
      const t = new Date(g); t.setHours(h, m, 0, 0);
      if (t > now) return { gun: i === 0 ? "Bugün" : i === 1 ? "Yarın" : GUN[gi], saat: d.s, ml: d.ml };
    }
  }
  return null;
}
function gunOzet(g) {
  const n = g.filter(Boolean).length;
  if (n === 7) return "Her gün";
  if (n === 0) return "Gün seçilmedi";
  if (n === 5 && g.slice(0, 5).every(Boolean)) return "Hafta içi";
  if (n === 2 && g[5] && g[6]) return "Hafta sonu";
  return g.map((b, i) => (b ? GUN[i] : null)).filter(Boolean).join(", ");
}

async function post(dom, name, action, value) {
  let u = `/${dom}/${enc(name)}/${action}`;
  if (value !== undefined) u += `?value=${enc(value)}`;
  try { const r = await fetch(u, { method: "POST" }); if (!r.ok) throw new Error(r.status); return true; }
  catch (e) { toast("İşlem gönderilemedi"); return false; }
}
const setNum = (n, v) => post("number", n, "set", v);
const press = (n) => post("button", n, "press");
let tt;
function toast(m) { const t = $(".a-toast"); t.textContent = m; t.classList.add("show"); clearTimeout(tt); tt = setTimeout(() => t.classList.remove("show"), 2200); }
const renk = (el, p) => { el.style.setProperty("--c", p ? RENK[p - 1] : "#8b98a5"); el.style.setProperty("--k", p === 3 ? "#0b0f14" : "#fff"); };

// ---------- kartlar ----------
function ring(p, pl) {
  const kalan = num(`Pompa ${p} Şişe Kalan`) || 0, hacim = num(`Pompa ${p} Şişe Hacmi`) || 500;
  const oran = Math.max(0, Math.min(1, kalan / hacim));
  const r = 58, c = 2 * Math.PI * r;
  const hf = haftalik(pl), oto = val(`switch/Pompa ${p} Otomatik`);
  const gun = oto && hf > 0 ? Math.floor(kalan / (hf / 7)) : null;
  return `<div class="a-ring ${oran < 0.15 ? "low" : ""}">
    <svg viewBox="0 0 140 140"><circle cx="70" cy="70" r="${r}" stroke="#26313d" stroke-width="12" fill="none"/>
    <circle cx="70" cy="70" r="${r}" stroke="${RENK[p - 1]}" stroke-width="12" fill="none" stroke-linecap="round"
      stroke-dasharray="${c}" stroke-dashoffset="${c * (1 - oran)}" style="transition:stroke-dashoffset .6s"/></svg>
    <div class="t"><b>${Math.round(kalan)}</b><span>ml kaldı</span><span>${gun === null ? "" : `≈ ${gun} gün`}</span></div></div>`;
}
function kart(p) {
  const oto = val(`switch/Pompa ${p} Otomatik`);
  const pl = planOku(p), sn = sonraki(pl);
  const run = (st("text_sensor/Aktif Pompa") || "") === `Pompa ${p}`;
  const elle = num(`Pompa ${p} Elle Doz`);
  return `<div class="a-card ${run ? "run" : ""}" style="--c:${RENK[p - 1]};--k:${p === 3 ? "#0b0f14" : "#fff"}" data-p="${p}">
    <div class="a-ch"><span>Kanal ${p}</span><button class="a-sw ${oto ? "on" : ""}" data-oto="${p}" title="Otomatik dozlama"></button></div>
    <div class="a-name">${esc(ad(p))}</div>
    ${ring(p, pl)}
    <div class="a-days">${GUN1.map((g, i) => `<i class="${pl.gun[i] && oto ? "on" : ""}">${g}</i>`).join("")}</div>
    <div class="a-row"><span>Sonraki</span><b>${!oto ? "Otomatik kapalı" : sn ? `${sn.gun} ${sn.saat} · ${fmt(sn.ml)} ml` : "Plan yok"}</b></div>
    <div class="a-row"><span>Haftalık</span><b>${oto ? fmt(haftalik(pl)) + " ml" : "–"}</b></div>
    <button class="a-btn" data-doz="${p}" ${run ? "disabled" : ""}>${run ? "Dozlanıyor…" : `Şimdi Doz Ver · ${fmt(elle)} ml`}</button>
  </div>`;
}
function cizKartlar() {
  $("#a-grid").innerHTML = P.map(kart).join("");
  const m = (st("text_sensor/Aktif Pompa") || "").match(/Pompa (\d)/);
  $("#a-dot").className = "a-dot" + (m ? " run" : "") + (bagli ? "" : " off");
  const modemSorun = (st("text_sensor/Modem Erişimi") || "").startsWith("Yanıt yok");
  $("#a-durum").textContent = !bagli ? "Bağlantı yok" : m ? `${ad(+m[1])} çalışıyor` : modemSorun ? "Ağ sorunu" : "Beklemede";
  if (modemSorun && bagli && !m) $("#a-dot").style.background = "#f7a948"; else $("#a-dot").style.background = "";
  if (acik === -1 && $("#a-bag")) $("#a-bag").innerHTML = bagKutusu();
  if (acik === -1 && $("#a-gun")) $("#a-gun").innerHTML = gunKutusu();
  const bn = $("#a-banner");
  if (gunDurum() === "UPDATE AVAILABLE") { bn.style.display = "flex"; bn.querySelector("b").textContent = `Yeni sürüm hazır: v${gunYeni()}`; } else bn.style.display = "none";
  const w = val("sensor/Wi-Fi Sinyal");
  $("#a-wifi").textContent = w ? `Wi-Fi ${Math.round(w)} dBm` : "";
}

// ---------- pompa paneli ----------
let acik = 0, taslak = null;
function panel(p) {
  $("#a-panel").classList.remove("genis");
  if (acik !== p) taslak = null;
  acik = p;
  const pl = taslak || planOku(p);
  const kirli = !!taslak;
  const sh = $("#a-sheet"); renk(sh, p);
  const sc = $("#a-panel").scrollTop;
  $("#a-panel").innerHTML = `
  <div class="a-ph"><b>${esc(ad(p))}</b><button class="a-x" data-kapat>×</button></div>
  <div class="a-hint">Kanal ${p} · ayarlar cihazın hafızasında saklanır</div>
  <div class="a-sec"><div class="a-box">
    <div class="a-f">Pompa adı<input type="text" maxlength="20" data-text="Pompa ${p} Adı" value="${esc(ad(p))}"></div>
    <div class="a-f">Otomatik dozlama<button class="a-sw ${val(`switch/Pompa ${p} Otomatik`) ? "on" : ""}" data-oto="${p}"></button></div>
  </div></div>

  <div class="a-sec"><h4><span>Program</span><span>${esc(gunOzet(pl.gun))}</span></h4><div class="a-box">
    <div class="a-chips">${GUN.map((g, i) => `<button class="a-chip ${pl.gun[i] ? "on" : ""}" data-gun="${i}">${g}</button>`).join("")}</div>
    <div class="a-pre"><button data-hazir="7">Her gün</button><button data-hazir="5">Hafta içi</button><button data-hazir="0">Temizle</button></div>
    ${pl.dozlar.map((d, i) => `<div class="a-dz"><input type="time" data-ds="${i}" value="${d.s}">
      <div class="a-sp"></div><div class="a-step"><button data-dm="${i}" data-a="-0.5">−</button>
      <input type="number" step="0.1" min="0" max="50" data-dml="${i}" value="${d.ml}"><button data-dm="${i}" data-a="0.5">+</button></div>
      <span style="color:var(--mut);font-size:13px">ml</span><button class="del" data-dsil="${i}" title="Sil">×</button></div>`).join("")}
    ${pl.dozlar.length < MAKS_DOZ ? `<button class="a-add" data-dekle>+ Doz zamanı ekle</button>` : ""}
    <div class="a-sum">Haftada <b>${pl.gun.filter(Boolean).length} gün</b> × <b>${pl.dozlar.length} doz</b> = <b>${fmt(haftalik(pl))} ml</b> / hafta</div>
  </div>
  <button class="a-btn ${kirli ? "a-dirty" : ""}" data-pkaydet="${p}" ${kirli ? "" : "disabled"}>${kirli ? "Programı kaydet" : "Program kayıtlı ✓"}</button></div>

  <div class="a-sec"><h4>Elle doz</h4><div class="a-box">
    <div class="a-f">“Şimdi Doz Ver” miktarı (ml)<input type="number" step="0.1" min="0" max="50" data-num="Pompa ${p} Elle Doz" value="${num(`Pompa ${p} Elle Doz`) ?? 1}"></div>
  </div></div>

  <div class="a-sec"><h4>Şişe</h4><div class="a-box">
    <div class="a-f">Şişe hacmi (ml)<input type="number" step="10" min="50" max="5000" data-num="Pompa ${p} Şişe Hacmi" value="${num(`Pompa ${p} Şişe Hacmi`) ?? 500}"></div>
    <div class="a-f">Kalan (ml)<input type="number" step="1" min="0" max="5000" data-num="Pompa ${p} Şişe Kalan" value="${Math.round(num(`Pompa ${p} Şişe Kalan`) ?? 0)}"></div>
  </div><button class="a-btn ghost" data-doldur="${p}">Şişeyi doldurdum</button></div>

  <div class="a-sec"><h4><span>Kalibrasyon</span><span>${fmt(num(`Pompa ${p} Akış`), 2)} ml/sn</span></h4>
    <button class="a-btn ghost" data-kalsih="${p}">Kalibrasyon sihirbazını aç</button></div>`;
  $("#a-panel").scrollTop = sc;
  sh.classList.add("open");
}
function kapat() {
  if (taslak && !confirm("Kaydedilmemiş program değişiklikleri var. Çıkılsın mı?")) return;
  taslak = null; acik = 0; kalDur(); $("#a-sheet").classList.remove("open"); $("#a-panel").classList.remove("genis");
}
const tsl = () => (taslak = taslak || JSON.parse(JSON.stringify(planOku(acik))));

// ---------- kalibrasyon sihirbazi ----------
let kal = null;
function kalVis(p, run) {
  const c = RENK[p - 1];
  return `<div class="k-vis ${run ? "k-run" : ""}"><svg viewBox="0 0 420 220">
    <rect x="20" y="20" width="110" height="80" rx="16" fill="#1b232d" stroke="#2c3946"/>
    <circle cx="75" cy="60" r="28" fill="#0e141b" stroke="${c}" stroke-width="4"/>
    <g class="k-rot"><circle cx="75" cy="60" r="16" fill="none" stroke="${c}" stroke-width="3" stroke-dasharray="8 6"/></g>
    <text x="75" y="118" fill="#8b98a5" font-size="12" text-anchor="middle">pompa</text>
    <path d="M103 60 C 180 60, 200 30, 280 40 S 300 70, 300 92" stroke="${c}" stroke-width="6" fill="none" stroke-linecap="round" opacity=".85"/>
    <circle class="k-drop" cx="300" cy="104" r="4" fill="${c}"/>
    <path d="M250 110 h100 l-8 96 a6 6 0 0 1 -6 6 h-72 a6 6 0 0 1 -6 -6 z" fill="#0e141b" stroke="#c9d3dc" stroke-width="2.5"/>
    <rect class="k-liq" x="259" y="140" width="82" height="70" rx="3" fill="${c}" opacity=".75" style="${run ? "" : "transform:scaleY(0)"}"/>
    ${[0, 1, 2, 3, 4].map((i) => `<line x1="256" x2="268" y1="${200 - i * 18}" y2="${200 - i * 18}" stroke="#c9d3dc" stroke-width="1.5"/>`).join("")}
    <text x="300" y="232" fill="#8b98a5" font-size="12" text-anchor="middle"></text>
  </svg></div>`;
}
function kalCiz() {
  const p = kal.p, adim = kal.adim;
  const ust = `<div class="a-ph"><b>Kalibrasyon · ${esc(ad(p))}</b><button class="a-x" data-kgeri>×</button></div>
    <div class="k-steps">${[1, 2, 3].map((i) => `<i class="${i <= adim ? "on" : ""}"></i>`).join("")}</div>`;
  let h = "";
  if (adim === 1) h = `${kalVis(p, false)}
    <div class="a-hint" style="font-size:14px;text-align:center">Hortumun gübre ucunu şişeye, akvaryum ucunu <b>boş bir ölçü kabına</b> koy.
    Pompa <b>30 saniye</b> çalışacak.</div>
    <div class="a-hint" style="text-align:center">İpucu: Hortum ilk kez kullanılıyorsa önce “Şimdi Doz Ver” ile hortumu gübreyle doldur.</div>
    <button class="a-btn" data-kbasla>Başlat · 30 sn</button>`;
  else if (adim === 2) h = `${kalVis(p, true)}<div class="k-big" id="k-say">${kal.kalan}</div>
    <div class="a-hint" style="text-align:center">Pompa çalışıyor… ölçü kabını hareket ettirme.</div>
    <button class="a-btn red" data-kiptal>Durdur</button>`;
  else if (adim === 3) h = `<div class="a-hint" style="font-size:14px;text-align:center">Ölçü kabında biriken miktarı gir:</div>
    <div class="k-ml"><button data-kml="-1">−1</button><button data-kml="-0.1">−.1</button>
      <input type="number" step="0.1" min="0" id="k-ml" value="${kal.ml ?? ""}" placeholder="0"><button data-kml="0.1">+.1</button><button data-kml="1">+1</button></div>
    <div class="k-res" id="k-res"></div>
    <button class="a-btn" data-kkaydet>Kaydet</button>
    <button class="a-btn ghost" data-ktekrar>Tekrar ölç</button>`;
  else h = `<div class="k-ok"><svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#0b0f14" stroke-width="3"><path d="M5 13l4 4L19 7"/></svg></div>
    <div class="k-res"><div style="color:var(--mut);font-size:13px">Yeni akış hızı</div><b>${fmt(kal.hiz, 2)} ml/sn</b>
    <div style="color:var(--mut);font-size:13px;margin-top:6px">1 ml ≈ ${fmt(1 / kal.hiz, 2)} sn çalışma</div></div>
    <button class="a-btn" data-kgeri>Tamam</button>`;
  $("#a-panel").innerHTML = ust + h;
  if (adim === 3) kalHesap();
}
function kalHesap() {
  const ml = parseFloat($("#k-ml").value), eski = num(`Pompa ${kal.p} Akış`);
  kal.ml = isNaN(ml) ? null : ml;
  $("#k-res").innerHTML = ml > 0
    ? `<div style="color:var(--mut);font-size:13px">${fmt(ml)} ml ÷ 30 sn =</div><b>${fmt(ml / 30, 2)} ml/sn</b>
       <div style="color:var(--mut);font-size:13px;margin-top:6px">Önceki: ${fmt(eski, 2)} ml/sn</div>`
    : `<div style="color:var(--mut);font-size:13px">Miktarı girince akış hızı burada hesaplanır</div>`;
}
function kalAc(p) { kalDur(); kal = { p, adim: 1, kalan: 30 }; renk($("#a-sheet"), p); kalCiz(); }
function kalDur() { if (kal && kal.t) clearInterval(kal.t); }
async function kalBasla() {
  if (!(await press(`Pompa ${kal.p} Kalibrasyon 30 sn`))) return;
  kal.adim = 2; kal.kalan = 30; kalCiz();
  const bit = Date.now() + 30000;
  kal.t = setInterval(() => {
    kal.kalan = Math.max(0, Math.ceil((bit - Date.now()) / 1000));
    const e = $("#k-say"); if (e) e.textContent = kal.kalan;
    if (kal.kalan <= 0) { clearInterval(kal.t); kal.adim = 3; setTimeout(kalCiz, 1200); }
  }, 250);
}

// ---------- kurulum semasi ----------
// AquascapeTR - kurulum semasi (SVG). adim: 0 = tumu, 1 = guc, 2 = role beslemesi, 3 = sinyal, 4 = pompalar
function semaSVG(adim, RNK) {
  RNK = RNK || ["#f7c948", "#4aa8ff", "#e9eef3", "#3ddc97"];
  const K = { r: "#ef4444", s: "#94a3b8", m: "#a78bfa", o: "#fb923c", b: "#60a5fa", y: "#22c55e", u: "#9ca3af" };
  const W = 1100, H = 860;
  const grp = (g) => (adim === 0 || adim === g ? 1 : 0.12);
  let o = `<svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" font-family="Segoe UI,Roboto,Arial,sans-serif">`;
  o += `<defs><filter id="sg" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="0" dy="3" stdDeviation="4" flood-opacity=".35"/></filter></defs>`;
  const t = (x, y, s, opt = {}) => `<text x="${x}" y="${y}" font-size="${opt.fs || 12}" fill="${opt.c || "#e5e7eb"}" text-anchor="${opt.a || "middle"}" font-weight="${opt.w || 600}">${s}</text>`;
  // kablo: noktalar listesi + atlama (hop) yapilacak y/x koordinatlari
  function kablo(pts, c, g, w = 4, hops = []) {
    let d = `M${pts[0][0]} ${pts[0][1]}`;
    for (let i = 1; i < pts.length; i++) {
      const [x0, y0] = pts[i - 1], [x1, y1] = pts[i];
      const hs = hops.filter((h) => (x0 === x1 ? h.x === x0 && h.y > Math.min(y0, y1) && h.y < Math.max(y0, y1)
        : h.y === y0 && h.x > Math.min(x0, x1) && h.x < Math.max(x0, x1)));
      hs.sort((a, b) => (x0 === x1 ? (y1 > y0 ? a.y - b.y : b.y - a.y) : (x1 > x0 ? a.x - b.x : b.x - a.x)));
      for (const h of hs) {
        if (x0 === x1) { const s = y1 > y0 ? 1 : -1; d += ` L${x0} ${h.y - 7 * s} A7 7 0 0 ${s > 0 ? 1 : 0} ${x0} ${h.y + 7 * s}`; }
        else { const s = x1 > x0 ? 1 : -1; d += ` L${h.x - 7 * s} ${y0} A7 7 0 0 ${s > 0 ? 1 : 0} ${h.x + 7 * s} ${y0}`; }
      }
      d += ` L${x1} ${y1}`;
    }
    return `<path d="${d}" fill="none" stroke="${c}" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round" opacity="${grp(g)}"/>`;
  }
  const nokta = (x, y, c, g) => `<circle cx="${x}" cy="${y}" r="5" fill="${c}" opacity="${grp(g)}"/>`;

  // ---------------- ESP32 ----------------
  const ex = 110, ey = 150, ew = 240, eh = 480;
  const sol = ["3V3", "EN", "VP", "VN", "34", "35", "32", "33", "25", "26", "27", "14", "12", "GND", "13", "D2", "D3", "CMD", "5V"];
  const sag = ["GND", "23", "22", "TX", "RX", "21", "GND", "19", "18", "5", "17", "16", "4", "0", "2", "15", "D1", "D0", "CLK"];
  const py = (i) => ey + 28 + i * 23.5;
  const kul = { "3V3": K.m, "5V": K.o, GND: "#cbd5e1", "18": K.b, "17": K.b, "16": K.b, "4": K.b };
  o += `<rect x="${ex}" y="${ey}" width="${ew}" height="${eh}" rx="12" fill="#111" stroke="#333" stroke-width="2" filter="url(#sg)"/>`;
  const mx = ex + ew / 2;
  o += `<rect x="${mx - 45}" y="${ey - 30}" width="90" height="34" rx="3" fill="#1f2937"/><rect x="${mx - 48}" y="${ey + 10}" width="96" height="120" rx="4" fill="#2b2b2b" stroke="#555"/>`;
  o += t(mx, ey + 66, "ESP32", { fs: 17, w: 800 }) + t(mx, ey + 86, "WROOM-32", { fs: 10, c: "#9ca3af" });
  o += `<rect x="${mx - 22}" y="${ey + eh - 12}" width="44" height="26" rx="6" fill="#9ca3af"/>` + t(mx + 30, ey + eh + 30, "USB-C", { fs: 11, c: "#9ca3af", a: "start" });
  o += `<rect x="${mx - 42}" y="${ey + eh - 52}" width="22" height="16" rx="3" fill="#444"/><rect x="${mx + 20}" y="${ey + eh - 52}" width="22" height="16" rx="3" fill="#444"/>`;
  o += t(mx - 31, ey + eh - 58, "EN", { fs: 9, c: "#9ca3af" }) + t(mx + 31, ey + eh - 58, "BOOT", { fs: 9, c: "#9ca3af" });
  sol.forEach((n, i) => { const c = kul[n] && !(n === "GND" && i === 13) ? kul[n] : null;
    o += `<circle cx="${ex + 12}" cy="${py(i)}" r="${c ? 6 : 4}" fill="${c || "#4b5563"}" stroke="${c ? "#fff" : "none"}" stroke-width="1.5"/>` + t(ex + 26, py(i) + 4, n, { fs: 10.5, a: "start", c: c ? "#fff" : "#9ca3af", w: c ? 800 : 500 }); });
  sag.forEach((n, i) => { const c = kul[n] && !(n === "GND" && i === 6) ? kul[n] : null;
    o += `<circle cx="${ex + ew - 12}" cy="${py(i)}" r="${c ? 6 : 4}" fill="${c || "#4b5563"}" stroke="${c ? "#fff" : "none"}" stroke-width="1.5"/>` + t(ex + ew - 26, py(i) + 4, n, { fs: 10.5, a: "end", c: c ? "#fff" : "#9ca3af", w: c ? 800 : 500 }); });

  // ---------------- Role modulu ----------------
  const rx = 490, ry = 150, rw = 230, rh = 570;
  o += `<rect x="${rx}" y="${ry}" width="${rw}" height="${rh}" rx="10" fill="#1e3a8a" stroke="#1e40af" stroke-width="2" filter="url(#sg)"/>`;
  o += t(rx + rw / 2, ry + 26, "4 Kanal Röle Modülü", { fs: 14, w: 800 });
  const hy = { GND: 300, IN1: 345, IN2: 390, IN3: 435, IN4: 480, VCC: 525 };
  o += `<rect x="${rx - 8}" y="${282}" width="16" height="262" rx="4" fill="#0f172a"/>`;
  Object.entries(hy).forEach(([n, y]) => { o += `<circle cx="${rx}" cy="${y}" r="6" fill="#facc15" stroke="#fff" stroke-width="1.5"/>` + t(rx + 16, y + 4, n, { fs: 11, a: "start" }); });
  // JD-VCC basligi
  o += `<rect x="${rx - 8}" y="${640}" width="16" height="70" rx="4" fill="#0f172a"/>`;
  [["JD-VCC", 655], ["VCC", 677], ["GND", 699]].forEach(([n, y], i) => { o += `<circle cx="${rx}" cy="${y}" r="${i ? 4 : 6}" fill="${i ? "#64748b" : "#facc15"}" stroke="${i ? "none" : "#fff"}" stroke-width="1.5"/>` + t(rx + 16, y + 4, n, { fs: i ? 10 : 11, a: "start", c: i ? "#94a3b8" : "#fff" }); });
  o += `<g opacity="${grp(2)}"><rect x="${rx + 84}" y="${646}" width="120" height="62" rx="8" fill="#7f1d1d" stroke="#ef4444"/>` +
    t(rx + 144, 668, "JUMPER'I ÇIKAR", { fs: 11, w: 800 }) + t(rx + 144, 684, "JD-VCC ↔ VCC", { fs: 10, c: "#fecaca" }) + t(rx + 144, 699, "arasındaki", { fs: 9, c: "#fecaca" }) + `</g>`;
  // roleler + klemensler
  const gy = (i) => 70 + ry + i * 118;
  for (let i = 0; i < 4; i++) {
    const y0 = gy(i);
    o += `<rect x="${rx + 70}" y="${y0 - 6}" width="80" height="66" rx="5" fill="#2563eb" stroke="#1d4ed8"/>` + t(rx + 110, y0 + 32, `Röle ${i + 1}`, { fs: 12 });
    o += `<rect x="${rx + rw - 36}" y="${y0 - 10}" width="36" height="74" rx="4" fill="#16a34a"/>`;
    ["NO", "COM", "NC"].forEach((n, j) => { const yy = y0 + j * 24 + 4; o += `<circle cx="${rx + rw}" cy="${yy}" r="6" fill="#d1d5db" stroke="#111" stroke-width="1.5"/>` + t(rx + rw - 18, yy + 4, n, { fs: 9, w: 800, c: "#052e16" }); });
  }

  // ---------------- Pompalar ----------------
  const pX = 935;
  for (let i = 0; i < 4; i++) {
    const cy = gy(i) + 24;
    o += `<g opacity="${grp(4)}"><circle cx="${pX}" cy="${cy}" r="30" fill="#1f2937" stroke="${RNK[i]}" stroke-width="4"/>` + t(pX, cy - 2, `P${i + 1}`, { fs: 14, w: 800, c: RNK[i] }) + t(pX, cy + 13, "pompa", { fs: 9, c: "#9ca3af" });
    // diyot
    const dx = pX + 52;
    o += `<path d="M${pX + 22} ${cy - 20} H${dx} V${cy - 9}" stroke="#9ca3af" stroke-width="2" fill="none"/><polygon points="${dx - 7},${cy + 6} ${dx + 7},${cy + 6} ${dx},${cy - 6}" fill="#9ca3af"/>` +
      `<line x1="${dx - 8}" y1="${cy - 7}" x2="${dx + 8}" y2="${cy - 7}" stroke="#e5e7eb" stroke-width="3"/><path d="M${dx} ${cy + 6} V${cy + 20} H${pX + 22}" stroke="#9ca3af" stroke-width="2" fill="none"/>` +
      t(dx + 12, cy + 4, "diyot", { fs: 9, a: "start", c: "#9ca3af", w: 500 }) + `</g>`;
    o += t(pX - 40, cy - 22, "+", { fs: 13, c: K.y, w: 800 });
  }

  // ---------------- Guc: adaptor + donusturucu ----------------
  const ax = 790, ay = 745, cx = 250, cyy = 745;
  o += `<g opacity="${grp(1)}"><rect x="${ax}" y="${ay}" width="150" height="70" rx="10" fill="#e5e7eb" filter="url(#sg)"/>` + t(ax + 75, ay + 30, "12V Adaptör", { fs: 14, w: 800, c: "#111" }) + t(ax + 75, ay + 50, "en az 2A", { fs: 11, c: "#374151" }) + `</g>`;
  o += `<g opacity="${grp(1)}"><rect x="${cx}" y="${cyy}" width="150" height="70" rx="8" fill="#0b0b0b" stroke="#444" filter="url(#sg)"/>` + t(cx + 75, cyy + 28, "12V → 5V USB", { fs: 13, w: 800 }) + t(cx + 75, cyy + 48, "dönüştürücü", { fs: 11, c: "#9ca3af" }) + `</g>`;

  // ---------------- Kablolar ----------------
  // 1) guc
  o += kablo([[ax, 760], [cx + 150, 760]], K.r, 1, 4);
  o += kablo([[ax, 790], [cx + 150, 790]], "#cbd5e1", 1, 4);
  o += kablo([[mx, ey + eh + 14], [mx, 780], [cx, 780]], "#6b7280", 1, 7, [{ x: mx, y: 730 }]);
  // 2) role beslemesi
  const yGNDsag = py(0);
  o += kablo([[ex + 12, py(0)], [80, py(0)], [80, 118], [460, 118], [460, hy.VCC], [rx, hy.VCC]], K.m, 2, 4, [300, 345, 390, 435, 480].map((y) => ({ x: 460, y })));
  o += kablo([[ex + 12, py(18)], [70, py(18)], [70, 730], [470, 730], [470, 655], [rx, 655]], K.o, 2, 4, [{ x: mx, y: 730 }]);
  o += kablo([[ex + ew - 12, yGNDsag], [420, yGNDsag], [420, hy.GND], [rx, hy.GND]], "#cbd5e1", 2, 4, [{ x: 460, y: hy.GND }]);
  // 3) sinyal
  [["18", "IN1"], ["17", "IN2"], ["16", "IN3"], ["4", "IN4"]].forEach(([p, n]) => {
    const y1 = py(sag.indexOf(p)), y2 = hy[n];
    o += kablo([[ex + ew - 12, y1], [420, y1], [420, y2], [rx, y2]], K.b, 3, 4, [{ x: 460, y: y2 }]);
  });
  // 4) pompalar: COM barasi (+12V), NO -> pompa +, pompa - -> 12V -
  const bus = 780;
  o += kablo([[bus, 760], [bus, gy(0) + 28]], K.r, 4, 4);
  o += nokta(bus, 760, K.r, 4);
  for (let i = 0; i < 4; i++) {
    const y0 = gy(i), cy = y0 + 24;
    o += kablo([[rx + rw, y0 + 28], [bus, y0 + 28]], K.r, 4, 3) + nokta(bus, y0 + 28, K.r, 4);
    o += kablo([[rx + rw, y0 + 4], [pX - 55, y0 + 4], [pX - 55, cy - 20], [pX - 22, cy - 20]], RNK[i] === "#e9eef3" ? "#f1f5f9" : RNK[i], 4, 3, [{ x: bus, y: y0 + 4 }]);
    o += kablo([[pX - 22, cy + 20], [pX - 40, cy + 20], [pX - 40, cy + 44], [1060, cy + 44]], "#cbd5e1", 4, 3);
  }
  o += kablo([[1060, gy(0) + 68], [1060, 790], [ax + 150, 790]], "#cbd5e1", 4, 4);

  // etiketler
  o += `<g opacity="${grp(2) > .5 || grp(3) > .5 ? 1 : .2}">` + t(400, 108, "3V3 → VCC", { fs: 11, c: K.m }) + `</g>`;
  o += `<g opacity="${grp(2)}">` + t(330, 722, "5V → JD-VCC", { fs: 11, c: K.o }) + `</g>`;
  o += `<g opacity="${grp(4)}">` + t(bus, gy(0) - 30, "+12V → COM", { fs: 11, c: K.r }) + t(1040, gy(0) - 30, "− (GND)", { fs: 11, c: "#cbd5e1" }) + `</g>`;
  o += `<g opacity="${grp(1)}">` + t(600, 753, "+12V", { fs: 11, c: K.r }) + t(600, 808, "− (GND)", { fs: 11, c: "#cbd5e1" }) + t(mx - 50, 772, "USB kablo", { fs: 11, c: "#9ca3af" }) + `</g>`;
  o += `</svg>`;
  return o;
}


const ADIMLAR = [
  { b: "Tüm bağlantılar", m: `Sistemin bütün bağlantıları. Adım adım ilerlemek için yukarıdaki sekmeleri kullan; her adımda sadece ilgili kablolar vurgulanır.` },
  { b: "1 · Güç", m: `<ul><li>12V adaptörün <b style="color:#ef4444">+</b> ve <b>−</b> uçlarını 12V→5V USB dönüştürücünün girişine bağla.</li>
    <li>Dönüştürücünün USB kablosunu ESP32'nin USB-C girişine tak.</li><li>Bu adımda henüz pompa bağlama. Test için ESP32 bilgisayardan da beslenebilir.</li></ul>` },
  { b: "2 · Röle modülü beslemesi", m: `<ul><li>Röle modülündeki <b>JD-VCC ↔ VCC</b> arasındaki jumper kapağını <b>çıkar</b>.</li>
    <li>ESP32 <b style="color:#a78bfa">3V3</b> → modül <b>VCC</b> (IN pinlerinin sırasındaki)</li><li>ESP32 <b style="color:#fb923c">5V</b> → modül <b>JD-VCC</b></li><li>ESP32 <b>GND</b> → modül <b>GND</b></li></ul>
    <div class="k-uyari">⚠️ 5V'u <b>VCC</b>'ye bağlama, sadece <b>JD-VCC</b>'ye. Jumper takılı kalırsa röleler güvenilir şekilde kapanmayabilir.</div>` },
  { b: "3 · Sinyal kabloları", m: `<ul><li><b style="color:#60a5fa">GPIO18</b> → IN1 (Pompa 1)</li><li><b style="color:#60a5fa">GPIO17</b> → IN2 (Pompa 2)</li><li><b style="color:#60a5fa">GPIO16</b> → IN3 (Pompa 3)</li><li><b style="color:#60a5fa">GPIO4</b> → IN4 (Pompa 4)</li></ul>
    <div class="a-hint">Test: Kartı çalıştır, açılışta hiçbir röle tıklamamalı. Her pompa için “Şimdi Doz Ver”e bas; aynı numaralı röle tıklamalı.</div>` },
  { b: "4 · Pompalar", m: `<ul><li>12V adaptörün <b style="color:#ef4444">+</b> ucunu dört rölenin <b>COM</b> ucuna köprüle.</li>
    <li>Her rölenin <b>NO</b> ucu → aynı numaralı pompanın <b>+</b> ucu.</li><li>Pompaların <b>−</b> uçları → 12V adaptörün <b>−</b> ucu.</li>
    <li>Her pompanın uçlarına bir diyot (1N4007 / 1N5819) bağla: <b>çizgili uç pompanın + ucuna</b>.</li><li><b>NC</b> uçları boş kalır.</li></ul>
    <div class="a-hint">COM/NO uçlarından emin değilsen: kart kapalıyken multimetre bip modunda COM–NC arası ses verir, NO vermez.</div>` },
];
let kurAdim = 0;
function kurulum(adim) {
  if (adim !== undefined) kurAdim = adim;
  acik = -3; renk($("#a-sheet"), 0);
  $("#a-panel").classList.add("genis");
  $("#a-panel").innerHTML = `
  <div class="a-ph"><b>Kurulum Şeması</b><button class="a-x" data-kapat>×</button></div>
  <div class="a-hint">ESP32 · 4 kanal röle modülü · 12V→5V USB dönüştürücü · 4 × 12V peristaltik pompa</div>
  <div class="k-tabs">${ADIMLAR.map((a, i) => `<button class="k-tab ${i === kurAdim ? "on" : ""}" data-kadim="${i}">${i === 0 ? "Tümü" : a.b}</button>`).join("")}</div>
  <div class="k-sema">${semaSVG(kurAdim, RENK)}</div>
  <div class="a-hint" style="text-align:center">Telefonda şemayı yana kaydırabilirsin · <button class="a-lnk" style="text-decoration:underline;font-size:12px" data-kbuyut>Şemayı tam ekran aç</button></div>
  <div class="k-adim"><b class="t">${ADIMLAR[kurAdim].b}</b>${ADIMLAR[kurAdim].m}</div>
  <div class="a-btns">${kurAdim > 0 ? `<button class="a-btn ghost" data-kadim="${kurAdim - 1}">← Önceki adım</button>` : ""}
    ${kurAdim < 4 ? `<button class="a-btn" style="--c:#e9eef3" data-kadim="${kurAdim + 1}">${kurAdim === 0 ? "Adım adım başla →" : "Sonraki adım →"}</button>` : ""}</div>
  <div class="a-sec"><h4>Bağlantı tablosu</h4><div class="a-box"><table class="k-tablo">
    <tr><th>Nereden</th><th>Nereye</th><th>Kablo</th></tr>
    <tr><td>ESP32 3V3</td><td>Röle VCC</td><td><span class="k-kab" style="background:#a78bfa"></span>Mor</td></tr>
    <tr><td>ESP32 5V</td><td>Röle JD-VCC</td><td><span class="k-kab" style="background:#fb923c"></span>Turuncu</td></tr>
    <tr><td>ESP32 GND</td><td>Röle GND</td><td><span class="k-kab" style="background:#cbd5e1"></span>Gri</td></tr>
    ${[["18", 1], ["17", 2], ["16", 3], ["4", 4]].map(([g, n]) => `<tr><td>ESP32 GPIO${g}</td><td>Röle IN${n} · ${esc(ad(n))}</td><td><span class="k-kab" style="background:#60a5fa"></span>Mavi</td></tr>`).join("")}
    <tr><td>12V +</td><td>Röle 1–4 COM, dönüştürücü +</td><td><span class="k-kab" style="background:#ef4444"></span>Kırmızı</td></tr>
    ${P.map((n) => `<tr><td>Röle ${n} NO</td><td>${esc(ad(n))} pompası +</td><td><span class="k-kab" style="background:${RENK[n - 1]}"></span>Kanal rengi</td></tr>`).join("")}
    <tr><td>Pompalar −</td><td>12V −, dönüştürücü −</td><td><span class="k-kab" style="background:#cbd5e1"></span>Gri</td></tr>
  </table></div></div>`;
  $("#a-sheet").classList.add("open");
}

// ---------- sss / hakkinda ----------
function sss() {
  $("#a-panel").classList.remove("genis");
  acik = -2; renk($("#a-sheet"), 0);
  $("#a-panel").innerHTML = `
  <div class="a-ph"><span></span><button class="a-x" data-kapat>×</button></div>
  <div class="s-hero"><img src="${LOGO}" alt="AquascapeTR"><h2>Aquascape<span class="r">TR</span> Dozaj Sistemi</h2>
    <p>Bitkili akvaryumlar için 4 kanallı, programlanabilir otomatik gübre dozaj sistemi. Kendin yap, kendin kur — kod bilgisi gerekmez.</p>
    <a class="a-yt" href="${YT}" target="_blank">${ytIkon} YouTube · AquascapeTR</a>
    <div style="margin-top:10px"><button class="a-btn ghost" style="width:auto;padding:10px 18px" data-kurulum>Kurulum şemasını aç</button></div></div>
  <div class="a-sec"><h4>Öne çıkanlar</h4><div class="s-grid">${OZELLIK.map((o) => `<div><em>${o[0]}</em><b>${o[1]}</b>${o[2]}</div>`).join("")}</div></div>
  <div class="a-sec"><h4>Sıkça sorulan sorular</h4>${SSS.map((q) => `<details><summary>${q[0]}</summary><p>${q[1]}</p></details>`).join("")}</div>
  <div class="a-hint" style="text-align:center;margin-top:16px">Sürüm ${VERSION} · Kurulum ve güncellemeler: <a href="${GH}" target="_blank">${GH.replace("https://", "")}</a></div>`;
  $("#a-panel").scrollTop = 0;
  $("#a-sheet").classList.add("open");
}

function ayarlar() {
  $("#a-panel").classList.remove("genis");
  acik = -1; renk($("#a-sheet"), 0);
  $("#a-panel").innerHTML = `
  <div class="a-ph"><b>Ayarlar</b><button class="a-x" data-kapat>×</button></div>
  <div class="a-sec"><h4>Güvenlik</h4><div class="a-box">
    <div class="a-f">Maks. pompa süresi (sn)<input type="number" min="1" max="60" step="1" data-num="Maks. Pompa Süresi" value="${num("Maks. Pompa Süresi") ?? 30}"></div>
  </div><div class="a-hint">Tek bir doz bu süreden uzun sürmez. Pompalar hiçbir zaman aynı anda çalışmaz; sırayla ve 10 sn arayla dozlanır.</div></div>
  <div class="a-sec"><h4>Bağlantı durumu</h4><div class="a-box" id="a-bag">${bagKutusu()}</div>
    <div class="a-hint">Bağlantı bekçisi her dakika modemi kontrol eder; sorun sürerse Wi-Fi'ı yeniden kurar, düzelmezse cihazı yeniden başlatır. Dozlama programı bağlantıdan bağımsız çalışır.</div></div>
  <div class="a-sec"><h4>Wi-Fi ağını değiştir</h4><div class="a-box">
    <div class="a-f">Yeni ağ adı (SSID)<input type="text" id="w-ssid" maxlength="32" autocomplete="off" placeholder="örn. Ofis_WiFi"></div>
    <div class="a-f">Şifre<input type="password" id="w-sifre" maxlength="64" autocomplete="new-password"></div></div>
    <button class="a-btn ghost" data-wifi>Kaydet ve yeni ağa geç</button>
    <div class="a-hint">Cihazı başka bir yere taşımadan önce yeni ağın bilgilerini buradan girebilirsin; cihaz yeni yerinde doğrudan o ağa bağlanır.
    Ağ 2.4 GHz olmalı. Ağ bulunamazsa cihaz “AquascapeTR Kurulum” ağını açar (şifre dozaj1234) ve oradan tekrar ayarlanabilir.</div></div>
  <div class="a-sec"><h4>Cihaz</h4><button class="a-btn ghost" data-yenile>Yeniden başlat</button>
    <div class="a-hint">Yazılım sürümü ${VERSION} · Kurulum ve güncellemeler: ${GH.replace("https://", "")}</div></div>
  <div class="a-sec" id="a-gsec"><h4>Yazılım güncelleme</h4><div id="a-gun">${gunKutusu()}</div>
    <details style="margin-top:10px"><summary>Elle güncelleme dosyası yükle (gelişmiş)</summary>
      <div class="a-box" style="margin-bottom:10px"><div class="a-f">.ota.bin dosyası<input type="file" id="a-ota" accept=".bin" style="width:200px;text-align:left"></div></div>
      <button class="a-btn ghost" data-ota style="margin-bottom:12px">Yükle</button><div class="a-hint" id="a-otad"></div></details></div>`;
  $("#a-sheet").classList.add("open");
}
// ---------- cevrimici guncelleme ----------
let kontrolBekle = 0, kuruluyor = false;
const gunDurum = () => (S[GUN_ID] || {}).state || "UNKNOWN";
const gunYeni = () => (S[GUN_ID] || {}).value || "";
const gunMevcut = () => (S[GUN_ID] || {}).current_version || VERSION;
function gunKutusu() {
  const d = gunDurum(), g = S[GUN_ID] || {};
  const yazi = { "NO UPDATE": "Yazılım güncel ✓", "UPDATE AVAILABLE": "Yeni sürüm var", "INSTALLING": "Kuruluyor…", "UNKNOWN": "Henüz kontrol edilmedi" }[d] || d;
  const sat = (a, b) => `<div class="a-f"><span>${a}</span><b style="font-weight:600">${b}</b></div>`;
  const pompa = /Pompa \d/.test(st("text_sensor/Aktif Pompa") || "");
  return `<div class="a-box">${sat("Yüklü sürüm", "v" + esc(gunMevcut()))}${sat("En son sürüm", gunYeni() ? "v" + esc(gunYeni()) : "–")}
    ${sat("Durum", `<span style="color:${d === "UPDATE AVAILABLE" ? "#f7c948" : d === "NO UPDATE" ? "#3ddc97" : "inherit"}">${yazi}</span>`)}</div>
    ${d === "UPDATE AVAILABLE" && g.summary ? `<div class="a-hint"><b>Yenilikler:</b> ${esc(g.summary)}</div>` : ""}
    ${d === "UPDATE AVAILABLE" ? `<button class="a-btn" style="--c:#3ddc97" data-gkur ${pompa ? "disabled" : ""}>${pompa ? "Pompa çalışıyor, bekleniyor…" : `Şimdi güncelle · v${esc(gunYeni())}`}</button>` : ""}
    <button class="a-btn ghost" data-gkontrol ${d === "INSTALLING" ? "disabled" : ""}>Güncellemeleri kontrol et</button>
    <div class="a-hint">Cihaz haftada bir yeni sürüm olup olmadığını kendiliğinden kontrol eder. Güncelleme yalnızca sen onaylayınca kurulur; ayarların ve programların korunur.</div>`;
}
function gunOlay() {
  const d = gunDurum();
  if (kontrolBekle) { clearTimeout(kontrolBekle); kontrolBekle = 0; gunSonuc(); }
  if (d === "INSTALLING") { kuruluyor = true; $(".a-off").textContent = "Güncelleme kuruluyor… cihaz yeniden başlayacak, sayfayı kapatma."; $(".a-off").classList.add("show"); }
}
function gunSonuc() {
  const d = gunDurum();
  toast(d === "UPDATE AVAILABLE" ? `Yeni sürüm var: v${gunYeni()}` : d === "NO UPDATE" ? "Yazılım güncel" : "Kontrol tamamlanamadı, internet bağlantısını kontrol et");
}
function sure(sn) {
  if (sn === undefined || isNaN(sn)) return "–";
  const g = Math.floor(sn / 86400), s = Math.floor((sn % 86400) / 3600), d = Math.floor((sn % 3600) / 60);
  return g ? `${g} gün ${s} sa` : s ? `${s} sa ${d} dk` : `${d} dk`;
}
function bagKutusu() {
  const w = val("sensor/Wi-Fi Sinyal");
  const kal = w === undefined ? "–" : w > -60 ? "Çok iyi" : w > -70 ? "İyi" : w > -80 ? "Zayıf" : "Çok zayıf";
  const sat = (a, b) => `<div class="a-f"><span>${a}</span><b style="font-weight:600">${b}</b></div>`;
  return sat("Bağlı ağ", esc(st("text_sensor/Bağlı Ağ") || "–")) + sat("Wi-Fi sinyali", w === undefined ? "–" : `${Math.round(w)} dBm · ${kal}`) +
    sat("Modem erişimi", esc(st("text_sensor/Modem Erişimi") || "–")) +
    sat("Kopma sayısı (açılıştan beri)", fmt(val("sensor/Bağlantı Kopması"), 0)) +
    sat("Son kopma", esc(st("text_sensor/Son Kopma") || "–")) +
    sat("Çalışma süresi", sure(val("sensor/Çalışma Süresi"))) +
    sat("Son başlatma nedeni", esc(st("text_sensor/Son Başlatma Nedeni") || "–"));
}
function ota() {
  const f = $("#a-ota").files[0], o = $("#a-otad");
  if (!f) return toast("Önce .ota.bin dosyasını seç");
  if (!confirm(`${f.name} yüklensin mi? Yükleme sırasında pompalar çalışmaz.`)) return;
  const fd = new FormData(); fd.append("update", f, f.name);
  const x = new XMLHttpRequest(); x.open("POST", "/update");
  x.upload.onprogress = (e) => { if (e.lengthComputable) o.textContent = `Yükleniyor… %${Math.round((e.loaded / e.total) * 100)}`; };
  x.onload = () => { o.textContent = x.status === 200 ? "Güncelleme tamam, cihaz yeniden başlıyor…" : "Güncelleme başarısız (" + x.status + ")"; };
  x.onerror = () => { o.textContent = "Yükleme sırasında bağlantı koptu"; };
  x.send(fd);
}

// ---------- olaylar ----------
function baglaOlaylar() {
  document.addEventListener("click", async (e) => {
    const t = e.target.closest("button,.a-card,#a-banner,img[data-sss]");
    if (!t) { if (e.target.id === "a-sheet") (kal ? kalKapat() : kapat()); return; }
    const d = t.dataset;
    if (d.kapat !== undefined) return kapat();
    if (d.oto) { e.stopPropagation(); const on = !val(`switch/Pompa ${d.oto} Otomatik`); t.classList.toggle("on", on);
      await post("switch", `Pompa ${d.oto} Otomatik`, on ? "turn_on" : "turn_off");
      return toast(on ? "Otomatik dozlama açık" : "Otomatik dozlama kapalı"); }
    if (d.doz) { e.stopPropagation(); const p = d.doz, m = num(`Pompa ${p} Elle Doz`) || 0;
      if (m <= 0) return toast("Önce elle doz miktarını ayarla");
      if (!confirm(`${ad(p)}: ${fmt(m)} ml şimdi verilsin mi?`)) return;
      if (await press(`Pompa ${p} Şimdi Doz Ver`)) toast("Doz başlatıldı"); return; }
    // program
    if (d.gun) { const pl = tsl(); pl.gun[+d.gun] = !pl.gun[+d.gun]; return panel(acik); }
    if (d.hazir) { const pl = tsl(), n = +d.hazir; pl.gun = pl.gun.map((_, i) => (n === 7 ? true : n === 5 ? i < 5 : false)); return panel(acik); }
    if (d.dekle !== undefined) { const pl = tsl(); const son = pl.dozlar[pl.dozlar.length - 1];
      let s = "10:00"; if (son) { const [h, m] = son.s.split(":").map(Number); s = String((h + 1) % 24).padStart(2, "0") + ":" + String(m).padStart(2, "0"); }
      pl.dozlar.push({ s, ml: son ? son.ml : 1 }); return panel(acik); }
    if (d.dsil) { const pl = tsl(); pl.dozlar.splice(+d.dsil, 1); return panel(acik); }
    if (d.dm) { const pl = tsl(), x = pl.dozlar[+d.dm]; x.ml = Math.max(0, Math.round(((+x.ml || 0) + +d.a) * 10) / 10); return panel(acik); }
    if (d.pkaydet) { const s = planYaz(taslak); if (await post("text", `Pompa ${d.pkaydet} Program`, "set", s)) {
      S[`text/Pompa ${d.pkaydet} Program`] = { state: s, value: s }; taslak = null; toast("Program kaydedildi"); panel(acik); } return; }
    if (d.doldur) { const p = d.doldur, h = num(`Pompa ${p} Şişe Hacmi`) || 500;
      if (await setNum(`Pompa ${p} Şişe Kalan`, h)) toast("Şişe dolu olarak işaretlendi"); return; }
    // kalibrasyon
    if (d.kalsih) { if (taslak && !confirm("Kaydedilmemiş program değişiklikleri silinsin mi?")) return; taslak = null; return kalAc(+d.kalsih); }
    if (d.kbasla !== undefined) return kalBasla();
    if (d.kiptal !== undefined) { await press("Acil Durdur"); kalDur(); kal.adim = 1; kalCiz(); return toast("Kalibrasyon durduruldu"); }
    if (d.kml) { const i = $("#k-ml"); i.value = Math.max(0, Math.round(((+i.value || 0) + +d.kml) * 10) / 10); return kalHesap(); }
    if (d.ktekrar !== undefined) { kal.adim = 1; kal.ml = null; return kalCiz(); }
    if (d.kkaydet !== undefined) { const ml = parseFloat($("#k-ml").value); if (!(ml > 0)) return toast("Ölçülen miktarı gir");
      const hiz = Math.round((ml / 30) * 100) / 100;
      if (await setNum(`Pompa ${kal.p} Akış`, hiz)) { kal.hiz = hiz; kal.adim = 4; kalCiz(); } return; }
    if (d.kgeri !== undefined) return kalKapat();
    // genel
    if (d.durdur !== undefined) { await press("Acil Durdur"); return toast("Tüm pompalar durduruldu"); }
    if (d.ayar !== undefined) { ayarlar(); if (t.id === "a-banner") $("#a-gsec").scrollIntoView({ behavior: "smooth" }); return; }
    if (d.sss !== undefined) return sss();
    if (d.kurulum !== undefined) return kurulum(0);
    if (d.kbuyut !== undefined) { const s = semaSVG(kurAdim, RENK).replace(/^<svg /, '<svg style="background:#0b0f14" ');
      window.open(URL.createObjectURL(new Blob([s], { type: "image/svg+xml" })), "_blank"); return; }
    if (d.kadim !== undefined) { kurulum(+d.kadim); $("#a-panel").scrollTop = 0; return; }
    if (d.ota !== undefined) return ota();
    if (d.wifi !== undefined) { const ss = $("#w-ssid").value.trim(), sf = $("#w-sifre").value;
      if (!ss) return toast("Yeni ağ adını gir");
      if (sf && sf.length < 8) return toast("Wi-Fi şifresi en az 8 karakter olmalı");
      if (!confirm(`Cihaz “${ss}” ağına geçecek ve bu ağdaki bağlantı kesilecek. Devam edilsin mi?`)) return;
      if (await post("text", "Yeni Wi-Fi Adı", "set", ss) && await post("text", "Yeni Wi-Fi Şifresi", "set", sf) && await press("Wi-Fi Ağını Değiştir")) {
        kuruluyor = true; $(".a-off").textContent = `Yeni ağ kaydedildi: “${ss}”. Cihaz şimdi o ağa bağlanıyor; yeni ağdan aquascapetr.local adresiyle ulaşabilirsin.`;
        $(".a-off").classList.add("show"); } return; }
    if (d.gkontrol !== undefined) { if (await press("Güncelleme Kontrolü")) { toast("Güncelleme kontrol ediliyor…");
      kontrolBekle = setTimeout(() => { kontrolBekle = 0; gunSonuc(); }, 15000); } return; }
    if (d.gkur !== undefined) { if (!confirm(`v${gunYeni()} indirilip kurulsun mu? Cihaz yaklaşık 1 dakika içinde yeniden başlar; ayarların korunur.`)) return;
      if (await post("update", "Yazılım Güncellemesi", "install")) { kuruluyor = true; toast("Güncelleme indiriliyor…"); } return; }
    if (d.yenile !== undefined) { if (confirm("Cihaz yeniden başlatılsın mı?")) { await press("Yeniden Başlat"); toast("Yeniden başlatılıyor"); } return; }
    if (t.classList.contains("a-card")) return panel(+t.dataset.p);
  });
  document.addEventListener("input", (e) => {
    const i = e.target, d = i.dataset;
    if (d.ds !== undefined && taslak !== undefined) { tsl().dozlar[+d.ds].s = i.value; kirliIsaretle(); }
    if (d.dml !== undefined) { tsl().dozlar[+d.dml].ml = +i.value; kirliIsaretle(); }
    if (i.id === "k-ml") kalHesap();
  });
  document.addEventListener("change", async (e) => {
    const i = e.target, d = i.dataset;
    if (d.ds !== undefined || d.dml !== undefined) return panel(acik);
    if (d.num) { if (await setNum(d.num, i.value)) toast("Kaydedildi"); }
    else if (d.text) { if (await post("text", d.text, "set", i.value.trim())) toast("Kaydedildi"); }
  });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") (kal ? kalKapat() : kapat()); });
}
function kirliIsaretle() { const b = $("[data-pkaydet]"); if (b) { b.disabled = false; b.textContent = "Programı kaydet"; b.classList.add("a-dirty"); } }
function kalKapat() { kalDur(); const p = kal ? kal.p : 0; kal = null; if (p) panel(p); else kapat(); }

// ---------- canli veri ----------
let bagli = false, ciz = 0, kirliPanel = false;
function guncelle(id) {
  if (acik > 0 && !kal && id && id.includes(`Pompa ${acik} `)) kirliPanel = true;
  cancelAnimationFrame(ciz);
  ciz = requestAnimationFrame(() => {
    cizKartlar();
    if (kirliPanel && acik > 0 && !kal && !document.activeElement?.matches("#a-panel input")) { kirliPanel = false; panel(acik); }
  });
}
// Panel bekcisi: olay akisi 20 sn sessiz kalirsa baglanti yeniden kurulur
let es = null, sonOlay = 0, deneme = 0;
function baglan() {
  if (es) es.close();
  es = new EventSource("/events");
  sonOlay = Date.now();
  es.addEventListener("open", () => { if (kuruluyor) { kuruluyor = false; setTimeout(() => toast(`Güncelleme tamamlandı · v${gunMevcut()}`), 3000); } bagli = true; deneme = 0; sonOlay = Date.now(); $(".a-off").classList.remove("show"); guncelle(); });
  es.addEventListener("ping", () => { sonOlay = Date.now(); });
  es.addEventListener("state", (e) => { sonOlay = Date.now(); try { const d = JSON.parse(e.data); S[d.id] = Object.assign(S[d.id] || {}, d); if (d.id === GUN_ID) gunOlay(); guncelle(d.id); } catch (_) {} });
  es.addEventListener("error", () => { bagli = false; $(".a-off").classList.add("show"); guncelle(); });
}
setInterval(() => {
  const sessiz = Date.now() - sonOlay;
  if (sessiz > 20000 || (es && es.readyState === 2)) {
    bagli = false; $(".a-off").classList.add("show"); guncelle();
    deneme++; if (!kuruluyor) $(".a-off").textContent = `Cihaza ulaşılamıyor… yeniden bağlanılıyor (${deneme})`;
    baglan();
  }
}, 5000);
document.addEventListener("visibilitychange", () => { if (!document.hidden && Date.now() - sonOlay > 5000) baglan(); });

// ---------- baslat ----------
function kur() {
  const s = document.createElement("style"); s.textContent = css; document.head.appendChild(s);
  document.title = "AquascapeTR · Dozaj Sistemi";
  const ic = document.createElement("link"); ic.rel = "icon"; ic.href = LOGO; document.head.appendChild(ic);
  const mv = document.createElement("meta"); mv.name = "viewport"; mv.content = "width=device-width,initial-scale=1"; document.head.appendChild(mv);
  const root = document.createElement("div"); root.id = "atr";
  root.innerHTML = `<div class="a-wrap">
    <div class="a-top"><img src="${LOGO}" alt="AquascapeTR" data-sss title="Hakkında">
      <div class="a-brand"><b>Aquascape<i>TR</i></b><span>Otomatik Gübre Dozaj Sistemi</span></div>
      <div class="a-sp"></div>
      <div class="a-pill"><span class="a-dot" id="a-dot"></span><span id="a-durum">Bağlanıyor…</span></div>
      <button class="a-stop" data-durdur>■ Acil Durdur</button></div>
    <div class="a-sub"><span id="a-wifi"></span><span class="a-sp"></span>
      <a class="a-yt" href="${YT}" target="_blank">${ytIkon} YouTube</a>
      <button class="a-lnk" data-kurulum>Kurulum Şeması</button><button class="a-lnk" data-sss>SSS & Hakkında</button><button class="a-lnk" data-ayar>Ayarlar</button></div>
    <div class="a-banner" id="a-banner" data-ayar><span>🎉</span><b></b><span class="a-sp"></span><span class="a-yt" style="background:#3ddc97;color:#0b0f14!important">Güncelle</span></div>
    <div class="a-grid" id="a-grid"></div>
    <div class="a-foot"><img src="${LOGO}" alt=""><div><b>AquascapeTR</b><br>Bu sistemin yapımını YouTube kanalımızda anlatıyoruz.</div>
      <a class="a-yt" href="${YT}" target="_blank">${ytIkon} Kanala git</a></div>
    <div style="text-align:center;color:var(--mut);font-size:12px;margin-top:12px">v${VERSION}</div>
  </div>
  <div class="a-sheet" id="a-sheet"><div class="a-panel" id="a-panel"></div></div>
  <div class="a-toast"></div><div class="a-off">Cihaza bağlanılamıyor… yeniden deneniyor</div>`;
  document.body.appendChild(root);
  baglaOlaylar(); cizKartlar(); baglan();
}
if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", kur); else kur();
