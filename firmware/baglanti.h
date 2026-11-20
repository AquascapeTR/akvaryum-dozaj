// AquascapeTR - baglanti bekcisi yardimcilari
// Ag gecidine (modem) ICMP ping atar; sonucu YAML'daki interval okur.
#pragma once
#include "esp_netif.h"
#include "lwip/ip_addr.h"
#include "ping/ping_sock.h"

namespace atr {

// -1: sonuc yok / olcum suruyor, 0: yanit yok, 1: yanit var
static volatile int ping_sonuc = -1;
static volatile bool ping_suruyor = false;

static void ping_bitti(esp_ping_handle_t h, void *args) {
  uint32_t alinan = 0;
  esp_ping_get_profile(h, ESP_PING_PROF_REPLY, &alinan, sizeof(alinan));
  ping_sonuc = alinan > 0 ? 1 : 0;
  esp_ping_delete_session(h);
  ping_suruyor = false;
}

// Modeme 3 ping gonderir. Baslatilamazsa false doner.
inline bool modem_ping_baslat() {
  if (ping_suruyor) return false;
  esp_netif_t *n = esp_netif_get_handle_from_ifkey("WIFI_STA_DEF");
  if (n == nullptr) return false;
  esp_netif_ip_info_t bilgi;
  if (esp_netif_get_ip_info(n, &bilgi) != ESP_OK || bilgi.gw.addr == 0) return false;
  esp_ping_config_t cfg = ESP_PING_DEFAULT_CONFIG();
  ip_addr_set_ip4_u32(&cfg.target_addr, bilgi.gw.addr);
  cfg.count = 3;
  cfg.interval_ms = 300;
  cfg.timeout_ms = 1000;
  cfg.task_stack_size = 3072;
  esp_ping_callbacks_t cbs = {};
  cbs.on_ping_end = ping_bitti;
  esp_ping_handle_t h;
  if (esp_ping_new_session(&cfg, &cbs, &h) != ESP_OK) return false;
  ping_suruyor = true;
  esp_ping_start(h);
  return true;
}

}  // namespace atr
