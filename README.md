# İspanyolca Öğren - AI Öğretmen ile Etkileşimli Platform

Modern web teknolojileri ile yapılmış, İspanyolca öğrenme platformu. AI öğretmen Claude ile gerçek zamanlı sohbet yapabilirsiniz.

## Özellikler

- 📚 **Kelime Öğrenme** - 31 kelime, 5 kategoride
- 🎧 **Dinleme Egzersizi** - Text-to-speech ile telaffuz pratikleri
- ✅ **Etkileşimli Quiz** - 5 sorudan oluşan sınavlar
- 👤 **Profil ve İstatistikler** - İlerleme takibi
- 🤖 **AI Öğretmen** - Claude ile İspanyolca öğrenme sohbeti

## Kurulum

### Gereksinimler
- Node.js 14+
- Anthropic API Key

### Adımlar

1. **Depoyu klonla**
```bash
git clone https://github.com/crazycaptainumut1-ui/ispanyolca-ogren.git
cd ispanyolca-ogren
```

2. **Paketleri yükle**
```bash
npm install
```

3. **API Key'i ekle**
```bash
# .env dosyasını oluştur
cp .env.example .env

# .env dosyasını düzenle ve ANTHROPIC_API_KEY'i ekle
```

API key almak için: https://console.anthropic.com

4. **Sunucuyu başlat**
```bash
npm start
```

5. **Tarayıcı aç**
```
http://localhost:3000
```

## Kullanım

### Ana Sayfada
- 📚 Kelime öğrenmeye başla
- 🎧 Dinleme egzersizi yap
- ✅ Kendini sınav ile test et

### Kelimeler Sekmesi
- 5 kategoride kelime öğren
- Sesli telaffuz dinle
- Kategori filtrelemeyi kullan

### Dinleme Sekmesi
- Kelimeye tıkla ve dinle
- Text-to-speech teknolojisi kullanır

### Quiz Sekmesi
- 5 sorudan oluşan sınavlar yap
- Puanını görmek için testi tamamla

### AI Öğretmen Sekmesi
- Claude ile İspanyolca konuş
- Türkçe veya İspanyolca soru sor
- Gramer ve kelime bilgisi öğren

## Teknik Detaylar

- **Frontend:** Vanilla HTML/CSS/JavaScript
- **Backend:** Node.js + Express.js
- **AI:** Anthropic Claude API
- **Responsive:** Mobil uyumlu tasarım

## Dosya Yapısı

```
ispanyolca-ogren/
├── index.html          # Ana HTML dosyası
├── server.js           # Express backend sunucusu
├── package.json        # npm paket yöneticisi
├── .env.example        # Ortam değişkenleri örneği
└── README.md          # Bu dosya
```

## Sorun Giderme

### "API key ayarlanmamış" hatası
- .env dosyasını oluşturdum mu?
- ANTHROPIC_API_KEY doğru mu girildi?

### "Bağlantı hatası"
- Sunucu çalışıyor mu? (npm start)
- Port 3000 boş mu?

### "Çok fazla istek" hatası
- API rate limit'i aşıldı
- Biraz bekleyin ve tekrar deneyin

## Lisans

MIT

## Katkı

Geliştirme önerileri ve bug raporları için pull request açabilirsiniz.
