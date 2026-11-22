const libraryData = [
    // TEMA 1
    {
        id: "mat-5-1-1",
        grade: 5,
        theme: "Sayılar ve Nicelikler",
        title: "Doğal Sayılar (Milyonlar)",
        description: "9 basamaklı sayıları abaküs ile oluşturma ve basamak değerlerini keşfetme.",
        tags: ["milyonlar", "doğal sayılar", "abaküs", "basamak değeri", "okunuş", "sayı"],
        icon: "🔢",
        color: "#3B82F6",
        animUrl: "MAT_5_1_1_Animasyon.html",
        labUrl: "MAT_5_1_1_Etkinlik.html"
    },
    {
        id: "mat-5-1-2",
        grade: 5,
        theme: "Sayılar ve Nicelikler",
        title: "Örüntüler ve Kurallar",
        description: "Sayısal ve şekil örüntülerinin adımları arasındaki kuralı keşfetme.",
        tags: ["örüntü", "kural", "şekil", "sayı örüntüsü", "adım"],
        icon: "🧱",
        color: "#3B82F6",
        animUrl: "MAT_5_1_2_Animasyon.html",
        labUrl: "MAT_5_1_2_Etkinlik.html"
    },
    {
        id: "mat-5-1-3",
        grade: 5,
        theme: "Sayılar ve Nicelikler",
        title: "Kesirler ve Denk Kesirler",
        description: "Birim kesirleri sıralama, sadeleştirme ve genişletme (Pizza Fabrikası).",
        tags: ["kesir", "denk kesir", "birim kesir", "sadeleştirme", "genişletme", "pizza"],
        icon: "🍕",
        color: "#3B82F6",
        animUrl: "MAT_5_1_3_Animasyon.html",
        labUrl: "MAT_5_1_3_Etkinlik.html"
    },
    {
        id: "mat-5-1-4",
        grade: 5,
        theme: "Sayılar ve Nicelikler",
        title: "Ondalık Gösterim ve Yüzde",
        description: "Kesir, Ondalık ve Yüzde arasındaki geçişler ve 100'lük ızgara modeli.",
        tags: ["ondalık", "yüzde", "kesir", "virgül", "yüzdelik", "100"],
        icon: "📊",
        color: "#3B82F6",
        animUrl: "MAT_5_1_4_Animasyon.html",
        labUrl: "MAT_5_1_4_Etkinlik.html"
    },

    // TEMA 2
    {
        id: "mat-5-2-1",
        grade: 5,
        theme: "İşlemlerle Sayılar",
        title: "Zihinden İşlem Stratejileri",
        description: "Toplama ve çıkarmada onluğa tamamlama, basamaklarına ayırma, gruplama yöntemleri.",
        tags: ["zihinden", "toplama", "çıkarma", "strateji", "onluğa tamamlama", "gruplama"],
        icon: "➕",
        color: "#10B981",
        animUrl: "MAT_5_2_1_Animasyon_Dagilma.html",
        labUrl: "MAT_5_2_1_Etkinlik.html"
    },
    {
        id: "mat-5-2-2",
        grade: 5,
        theme: "İşlemlerle Sayılar",
        title: "Tahmin ve Gerçek Sonuç",
        description: "Sayıları yuvarlama yaparak işlem sonuçlarını tahmin etme ve karşılaştırma.",
        tags: ["tahmin", "yuvarlama", "gerçek sonuç", "işlem", "yaklaşık"],
        icon: "🎯",
        color: "#10B981",
        animUrl: "MAT_5_2_2_Animasyon.html",
        labUrl: "MAT_5_2_2_Etkinlik.html"
    },
    {
        id: "mat-5-2-3",
        grade: 5,
        theme: "İşlemlerle Sayılar",
        title: "Kesirlerle Toplama ve Çıkarma",
        description: "Görsel modellerle payda eşitleme ve kesirlerle işlem yapma.",
        tags: ["kesir", "toplama", "çıkarma", "payda eşitleme", "işlem"],
        icon: "🧩",
        color: "#10B981",
        animUrl: "MAT_5_2_3_Animasyon.html",
        labUrl: "MAT_5_2_3_Etkinlik.html"
    },
    {
        id: "mat-5-2-4",
        grade: 5,
        theme: "İşlemlerle Sayılar",
        title: "Yüzde Problemleri",
        description: "Bir çokluğun yüzdesini bulma, indirim ve zam problemleri çözme.",
        tags: ["yüzde", "problem", "indirim", "hesaplama", "çokluk"],
        icon: "💰",
        color: "#10B981",
        animUrl: "MAT_5_2_4_Animasyon.html",
        labUrl: "MAT_5_2_4_Etkinlik.html"
    },

    // TEMA 3
    {
        id: "mat-5-3-1",
        grade: 5,
        theme: "Geometrik Şekiller",
        title: "Temel Geometrik Çizimler",
        description: "Nokta, doğru, ışın, doğru parçası ve paralellik/diklik ilişkileri.",
        tags: ["nokta", "doğru", "ışın", "doğru parçası", "paralel", "dik", "geometri"],
        icon: "📏",
        color: "#F59E0B",
        animUrl: "MAT_5_3_1_Animasyon.html",
        labUrl: "MAT_5_3_1_Etkinlik.html"
    },
    {
        id: "mat-5-3-3",
        grade: 5,
        theme: "Geometrik Şekiller",
        title: "Açı Çeşitleri ve Ölçükler",
        description: "Dar, dik, geniş ve doğru açıları referans açılarına (gönyeye) göre kavrama.",
        tags: ["açı", "dar", "dik", "geniş", "doğru açı", "gönye", "ölçüm"],
        icon: "📐",
        color: "#F59E0B",
        animUrl: "MAT_5_3_3_Animasyon.html",
        labUrl: "MAT_5_3_3_Etkinlik.html"
    },
    {
        id: "mat-5-3-4",
        grade: 5,
        theme: "Geometrik Şekiller",
        title: "Çokgenler ve Özellikleri",
        description: "Üçgen ve dörtgenlerin özellikleri, köşegen yapıları ve isimlendirmeleri.",
        tags: ["çokgen", "üçgen", "dörtgen", "köşegen", "kenar", "köşe"],
        icon: "🔺",
        color: "#F59E0B",
        animUrl: "MAT_5_3_4_Animasyon.html",
        labUrl: "MAT_5_3_4_Etkinlik.html"
    },

    // TEMA 4
    {
        id: "mat-5-4-1",
        grade: 5,
        theme: "Geometrik Nicelikler",
        title: "Çevre ve Şekil İlişkisi",
        description: "Çevre uzunluğu sabit olan farklı dikdörtgenler oluşturma ve kuralları.",
        tags: ["çevre", "dikdörtgen", "geometri", "uzunluk", "kenar"],
        icon: "🔲",
        color: "#F43F5E",
        animUrl: "MAT_5_4_1_Animasyon.html",
        labUrl: "MAT_5_4_1_Etkinlik.html"
    },
    {
        id: "mat-5-4-2",
        grade: 5,
        theme: "Geometrik Nicelikler",
        title: "Birim Kareler ve Alan Formülü",
        description: "Dikdörtgenin alan formülünün (En x Boy) mantığını birim karelerle keşfetme.",
        tags: ["alan", "birim kare", "formül", "dikdörtgen", "çarpma"],
        icon: "⬜",
        color: "#F43F5E",
        animUrl: "MAT_5_4_2_Animasyon.html",
        labUrl: "MAT_5_4_2_Etkinlik.html"
    },
    {
        id: "mat-5-4-3",
        grade: 5,
        theme: "Geometrik Nicelikler",
        title: "Alan ve Çevre Ters Orantısı",
        description: "Kenarlar birbirine yaklaştıkça (Kareye yaklaştıkça) alan ve çevrenin değişimi.",
        tags: ["alan", "çevre", "kare", "optimizasyon", "değişim"],
        icon: "⚖️",
        color: "#F43F5E",
        animUrl: "MAT_5_4_3_Animasyon.html",
        labUrl: "MAT_5_4_3_Etkinlik.html"
    },
    {
        id: "mat-5-4-4",
        grade: 5,
        theme: "Geometrik Nicelikler",
        title: "Problem Çözme: Büyük Tasarım",
        description: "Bileşik şekiller üzerinde alan ve çevre hesaplayarak iç mimarlık problemleri çözme.",
        tags: ["problem", "çevre", "alan", "bileşik şekil", "tasarım"],
        icon: "🏠",
        color: "#F43F5E",
        animUrl: "MAT_5_4_4_Animasyon.html",
        labUrl: "MAT_5_4_4_Etkinlik.html"
    },

    // TEMA 5
    {
        id: "mat-5-5-1",
        grade: 5,
        theme: "İstatistiksel Araştırma Süreci",
        title: "Araştırma ve Veri Görselleştirme",
        description: "Araştırma sorusu üretme, sıklık tablosu, sütun ve daire grafiği oluşturma.",
        tags: ["istatistik", "araştırma", "veri", "sıklık", "sütun grafiği", "daire grafiği", "çetele"],
        icon: "📈",
        color: "#06B6D4",
        animUrl: "MAT_5_5_1_Animasyon.html",
        labUrl: "MAT_5_5_1_Etkinlik.html"
    },
    {
        id: "mat-5-5-2",
        grade: 5,
        theme: "İstatistiksel Araştırma Süreci",
        title: "İstatistik Dedektifi (Hatalı Grafikler)",
        description: "Başkalarının hazırladığı manipüle edilmiş hatalı grafikleri ve yorumları fark etme.",
        tags: ["istatistik", "hata", "grafik", "manipülasyon", "dedektif", "yanıltıcı"],
        icon: "🕵️‍♂️",
        color: "#06B6D4",
        animUrl: "MAT_5_5_2_Animasyon.html",
        labUrl: "MAT_5_5_2_Etkinlik.html"
    },

    // TEMA 6
    {
        id: "mat-5-6-1",
        grade: 5,
        theme: "Veriden Olasılığa",
        title: "Olasılık Spektrumu (0-1 Arası)",
        description: "İmkansız ve kesin olaylar arasında olasılık değerini (kesir/ondalık/yüzde) yorumlama.",
        tags: ["olasılık", "imkansız", "kesin", "şans", "spektrum", "kesir", "yüzde"],
        icon: "🎲",
        color: "#8B5CF6",
        animUrl: "MAT_5_6_1_Animasyon.html",
        labUrl: "MAT_5_6_1_Etkinlik.html"
    },
    {
        id: "mat-5-6-2",
        grade: 5,
        theme: "Veriden Olasılığa",
        title: "Az veya Çok Olasılıklı Olaylar",
        description: "Torbadan çekilen topun sayısına veya orana göre şans durumunu yapılandırma.",
        tags: ["olasılık", "çok olasılıklı", "az olasılıklı", "eşit şans", "çark", "torba", "şans"],
        icon: "🎰",
        color: "#8B5CF6",
        animUrl: "MAT_5_6_2_Animasyon.html",
        labUrl: "MAT_5_6_2_Etkinlik.html"
    }
];
