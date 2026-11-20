# Akvaryum Otomatik Gübre Dozaj Sistemi

**AquascapeTR** · [YouTube](https://www.youtube.com/@AquascapeTR)

4 kanallı, ml bazlı, zamanlamalı akvaryum gübre dozaj sistemi. Ucuz bir ESP-01 Wi-Fi röle kartı ve 12V peristaltik pompalarla yapılır. **Home Assistant veya başka bir sunucu gerekmez**; kontrol, kartın kendi web sayfasından yapılır.

## 👉 Kurulum sayfası

**https://aquascapetr.github.io/akvaryum-dozaj/**

Yazılımı oradaki **"Yazılımı Yükle"** butonuyla, tarayıcıdan (Chrome/Edge) doğrudan karta yükleyebilirsiniz. Program kurmanıza, kod yazmanıza gerek yok.

## Özellikler

- 4 bağımsız pompa, doz miktarı **ml** cinsinden
- Her pompa için ayrı doz saati, otomatik açma/kapama
- 30 saniyelik test ile kolay kalibrasyon
- Şişede kalan gübre takibi (her dozda otomatik düşer)
- Wi-Fi kurulumu telefondan, kurulum ağı üzerinden
- Ayarlar kartın hafızasında; elektrik kesilince kaybolmaz
- Yazılım güncellemesi kablosuz (web sayfasından)

### Güvenlik
- Pompalar asla aynı anda çalışmaz; sırayla ve 10 sn arayla
- Tek doz en fazla “Maks. Pompa Süresi” kadar sürer (varsayılan 30 sn)
- Her “kapat” komutu 3 kez gönderilir, boştayken 15 sn'de bir tüm röleler kapatılır
- Açılışta tüm röleler kapatılır, **Acil Durdur** butonu

## Malzeme listesi

| Parça | Not |
|---|---|
| ESP-01 4 Kanal **12V** Wi-Fi Röle Modülü (LC Technology tipi) | 12V versiyon olmalı |
| USB ESP-01 adaptörü (CH340) | Sadece ilk yükleme için |
| 4 × 12V DC peristaltik pompa | Örn. Kamoer |
| 12V adaptör, en az 2A | |
| 4 × diyot (1N4007 veya 1N5819) | Pompa başına bir tane |
| Kablo, silikon hortum, gübre şişeleri | |

## Bağlantı şeması

![Bağlantı şeması](docs/baglanti-semasi.svg)

- 12V (+) → kartın `IN+` girişi ve her rölenin `COM` ucu
- Rölenin `NO` ucu → pompanın (+) ucu
- Pompanın (−) ucu → 12V (−)
- Diyot pompanın uçlarına: **çizgili uç (+) tarafa**

## Kısa kurulum

1. ESP-01'i adaptöre tak, GPIO0–GND'yi kısa devre ederken USB'ye tak (yükleme modu).
2. [Kurulum sayfasından](https://aquascapetr.github.io/akvaryum-dozaj/) yazılımı yükle.
3. ESP-01'i karta geri tak, kartı 12V ile çalıştır.
4. Telefonla **Dozaj Kurulum** ağına bağlan (şifre `dozaj1234`), ev Wi-Fi'ını seç.
5. **http://akvaryum-dozaj.local** adresinden kalibrasyon ve doz ayarlarını yap.

> Kontrol paneli şifresizdir; yalnızca ev ağınızdan erişilebilir.

## Notlar

- Kart saati internetten alır. Elektrik kesintisinden sonra internet yoksa o süre içindeki dozlar **atlanır** (fazla doz riski yoktur).
- Kendi ihtiyacınıza göre değiştirmek için yapılandırma dosyası: [`firmware/akvaryum-dozaj.yaml`](firmware/akvaryum-dozaj.yaml) (ESPHome)
