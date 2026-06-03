# HablaTurco - İspanyolca Öğrenme Uygulaması

## Projenin Amacı

HablaTurco, Türkçe konuşan kullanıcıların İspanyolcayı öğrenmesi için tasarlanmış interaktif bir web uygulamasıdır. Proje, modern web teknolojileri ve yapay zeka (Claude API) kullanarak etkili bir öğrenme deneyimi sunmayı hedeflemektedir.

## Proje Özeti

- **Adı:** HablaTurco (İspanyolca'da "Türkçe Konuş")
- **Türü:** Eğitim Uygulaması (Web)
- **Dil:** HTML, CSS, Vanilla JavaScript
- **AI Entegrasyonu:** Anthropic Claude API
- **Repository:** https://github.com/crazycaptainumut1-ui/ispanyolca-ogren

## Dosya Yapısı

```
ispanyolca-ogren/
├── index.html           # Ana HTML dosyası (web uygulaması)
├── server.js            # Express backend (opsiyonel, API proxy için)
├── package.json         # Node.js paket yöneticisi
├── .env.example         # Ortam değişkenleri şablonu
├── .gitignore           # Git ignore kuralları
├── README.md            # Hızlı başlangıç rehberi
└── CLAUDE.md            # Bu dosya (proje belgeleri)
```

### Dosya Açıklamaları

- **index.html** - Uygulamanın tüm HTML, CSS ve JavaScript kodunu içerir
- **server.js** - Node.js/Express backend sunucusu (isteğe bağlı)
- **package.json** - npm bağımlılıkları (express, cors, dotenv, @anthropic-ai/sdk)
- **.env.example** - API key gibi gizli bilgilerin şablonu
- **.gitignore** - Git tarafından izlenmeyen dosyalar
- **README.md** - Kurulum ve kullanım talimatları
- **CLAUDE.md** - Bu proje belgeleme dosyası

## Özellikler

### Mevcut Özellikler

1. **Hamburger Menü**
   - Sağ üstte ☰ ikonu
   - Tıklayınca menü açılır
   - Responsive tasarım

2. **Kelime Öğrenme** (Eski sürümlerde)
   - 30+ İspanyolca kelime kartı
   - Görsel ve renk degradeli tasarım
   - Her kelimeye tıklayarak dinleme

3. **Dinleme Egzersizi** (Eski sürümlerde)
   - Text-to-Speech teknolojisi
   - Sesli telaffuz pratikleri
   - İspanyolca (es-ES) dil desteği

4. **Quiz Sistemi** (Eski sürümlerde)
   - 5 sorulu sınavlar
   - Multiple choice sorular
   - Puan hesaplama
   - İlerleme göstergesi

5. **AI Chat** (Eski sürümlerde)
   - Anthropic Claude API entegrasyonu
   - localStorage'da API key saklama
   - İspanyolca öğretmen rolü
   - Konuşma geçmişi

### Kullanılan Teknolojiler

- **Frontend:** Vanilla JavaScript (Framework yok)
- **Styling:** CSS3 (Grid, Flexbox, Gradients, Animations)
- **API:** Anthropic Claude (GPT benzeri)
- **Storage:** localStorage (tarayıcı depolama)
- **Backend (Opsiyonel):** Express.js

## Nasıl Güncelleme Yapılır

### 1. Dosyayı Düzenlemek

İndex.html dosyasını düzenlemek için:

```bash
# Dosyayı metin editörü ile aç
# VSCode, Sublime Text, Notepad++ vb. kullanabilirsiniz
```

### 2. HTML Değişiklikleri

```html
<!-- Yeni öğe eklemek -->
<div id="yeni-sayfa" class="page">
    <h2>Yeni Sayfa</h2>
    <p>İçerik buraya gelir</p>
</div>
```

### 3. CSS Değişiklikleri

```css
/* Yeni stil eklemek */
.yeni-stil {
    background: #667eea;
    padding: 20px;
    border-radius: 10px;
}
```

### 4. JavaScript Değişiklikleri

```javascript
// Yeni fonksiyon eklemek
function yeniIslem() {
    console.log('Yeni işlem çalıştı');
}
```

## Git Push Nasıl Yapılır

### Adım 1: Değişiklikleri Kontrol Etmek

```bash
cd C:\Users\user\Desktop\ispanyolca-ogren
git status
```

### Adım 2: Dosyaları Eklemek

```bash
# Tüm değişiklikleri ekle
git add -A

# Veya spesifik dosya
git add index.html
```

### Adım 3: Commit Oluşturmak

```bash
# Basit commit
git commit -m "Açıklama buraya gelir"

# Detaylı commit
git commit -m "Başlık

Detaylı açıklama buraya gelir.
Neden bu değişiklik yapıldığını yazın.

Kaynaklar:
- Link1
- Link2"
```

### Adım 4: Push Etmek

```bash
# Değişiklikleri GitHub'a gönder
git push

# Veya belirtili branch'e
git push origin main
```

### Örnek Commit Mesajı

```bash
git commit -m "Kelime kartlarına yeni özellik ekle

- 10 yeni kelime eklendi
- Dinleme butonu eklendi
- Responsive tasarım geliştirildi"
```

## API Key Yönetimi

### Anthropic API Key Almak

1. https://console.anthropic.com adresine gidin
2. Hesap oluşturun
3. API key'inizi kopyalayın
4. index.html'de "API key'inizi girin" alanına yapıştırın
5. "Kaydet" butonuna tıklayın

### localStorage'da Saklı Kalır

```javascript
// API key tarayıcıda saklanır
localStorage.getItem('anthropic_api_key')
```

## Kurulum & Çalıştırma

### Frontend Kurulumu

1. index.html dosyasını tarayıcıda açın
2. Herhangi bir kurulum gerekmez

### Backend Kurulumu (Opsiyonel)

```bash
# Paketleri yükle
npm install

# .env dosyası oluştur
cp .env.example .env

# API key ekle
# .env dosyasında ANTHROPIC_API_KEY=sk-ant-... yazın

# Sunucuyu başlat
npm start

# Tarayıcıda aç
http://localhost:3000
```

## Sorun Giderme

### Menü Açılmıyor
- F12 Console'ı açın
- JavaScript hataları olup olmadığını kontrol edin
- Tarayıcıyı yenileyin (Ctrl+F5)

### API Hatası
- API key'in doğru olduğunu kontrol edin
- console.anthropic.com adresinde key'in aktif olduğundan emin olun
- Network tab'ında API yanıtını kontrol edin (F12)

### localStorage Sorunu
- Tarayıcı verilerinizi temizleyin (Ctrl+Shift+Delete)
- Private/Incognito modda denemeyin
- Başka tarayıcı deneyin

## Geliştirme Notları

### Best Practices

1. **Commit Mesajları**
   - Açık ve anlaşılır yazın
   - Türkçe ya da İngilizce seçin ve tutarlı olun
   - Neden değişiklik yapıldığını belirtin

2. **Kod Stili**
   - 2 boşluk indentation (tabs değil)
   - Anlaşılır değişken adları
   - Inline comments ekleyin (gerekli yerlerde)

3. **Git Workflow**
   - Sık sık commit edin
   - Bir değişikliğin bir amacı olsun (atomic commits)
   - Push etmeden önce kontrol edin

### Kütüphane & Framework Kısıtlaması

- Vanilla JavaScript kullanılır (jQuery, React, Vue yok)
- CSS framework kullanılmaz (Bootstrap, Tailwind yok)
- Sadece gerekli npm paketleri kullanılır

## Lisans

Bu proje MIT lisansı altında açık kaynaklıdır.

## Katkı

Geliştirme önerileri ve hata raporları için GitHub Issues kullanın.

## Kontakt

- **Repository Owner:** crazycaptainumut1-ui
- **GitHub:** https://github.com/crazycaptainumut1-ui/ispanyolca-ogren

## Son Güncelleme

- **Tarih:** 2026-06-04
- **Sürüm:** 1.0.0
- **Durumu:** Aktif

---

**Not:** Bu belge proje geliştirirken düzenli olarak güncellenmelidir.
