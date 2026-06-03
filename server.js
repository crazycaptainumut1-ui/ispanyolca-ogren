const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const Anthropic = require('@anthropic-ai/sdk');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname)));

const client = new Anthropic({
    apiKey: process.env.ANTHROPIC_API_KEY
});

const SYSTEM_PROMPT = `Sen bir İspanyolca öğretmenisin. Kullanıcı Türkçe veya İspanyolca yazabilir.
Görevlerin:
1. Kullanıcının sorusunu cevapla
2. İspanyolca öğrenmeye yardımcı ol
3. Gramer ve kelime bilgisi sağla
4. Örnekler ver
5. Telaffuz tavsiyeleri ver

Cevaplarını açık ve öğretici yap. Mümkün olduğunca İspanyolca ve Türkçe karışık cevapla.`;

let conversationHistory = [];

app.post('/api/chat', async (req, res) => {
    try {
        const { message, history, apiKey } = req.body;

        if (!message) {
            return res.status(400).json({ error: 'Mesaj boş olamaz' });
        }

        // API key: client'tan ya da env'den
        const key = apiKey || process.env.ANTHROPIC_API_KEY;

        if (!key) {
            return res.status(400).json({
                error: 'API key bulunamadı. Lütfen API key'inizi girin.'
            });
        }

        // Client API key varsa, özel client oluştur
        let chatClient = client;
        if (apiKey) {
            chatClient = new Anthropic({ apiKey });
        }

        // Konuşma geçmişini güncelle
        conversationHistory.push({
            role: 'user',
            content: message
        });

        // Claude'a sorguyu gönder
        const response = await chatClient.messages.create({
            model: 'claude-3-5-sonnet-20241022',
            max_tokens: 1024,
            system: SYSTEM_PROMPT,
            messages: conversationHistory
        });

        const assistantMessage = response.content[0].text;

        // Konuşma geçmişine cevabı ekle
        conversationHistory.push({
            role: 'assistant',
            content: assistantMessage
        });

        // Son 10 mesajı sakla (bellek sınırlaması)
        if (conversationHistory.length > 20) {
            conversationHistory = conversationHistory.slice(-20);
        }

        res.json({
            reply: assistantMessage,
            success: true
        });

    } catch (error) {
        console.error('API Hatası:', error);

        if (error.status === 401) {
            return res.status(401).json({
                error: 'API key geçersiz.'
            });
        }

        if (error.status === 429) {
            return res.status(429).json({
                error: 'Çok fazla istek. Lütfen bekleyin.'
            });
        }

        res.status(500).json({
            error: error.message || 'Sunucu hatası'
        });
    }
});

// Ana sayfa
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Sunucu http://localhost:${PORT} adresinde çalışıyor`);
    console.log('');
    console.log('⚠️  Kullanmadan önce:');
    console.log('1. npm install çalıştırın');
    console.log('2. .env dosyasını oluşturun ve ANTHROPIC_API_KEY ekleyin');
    console.log('3. API key almak için: https://console.anthropic.com');
    console.log('');
});
