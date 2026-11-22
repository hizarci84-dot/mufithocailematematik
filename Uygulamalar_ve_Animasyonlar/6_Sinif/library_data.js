const libraryData = [
    // TEMA 1
    {
        id: "mat-6-1-1",
        grade: 6,
        theme: "Sayılar ve Nicelikler",
        title: "Çarpanlar ve Katlar",
        description: "Bir sayının çarpanlarını ve katlarını bularak sonsuz kat kavramını keşfetme.",
        tags: ["çarpan", "kat", "bölünebilme", "sayılar", "doğal sayılar"],
        icon: "🔢",
        color: "#3B82F6",
        animUrl: "MAT_6_1_1_Animasyon.html",
        labUrl: "MAT_6_1_1_Etkinlik.html"
    },
    {
        id: "mat-6-1-2",
        grade: 6,
        theme: "Sayılar ve Nicelikler",
        title: "Bölünebilme Kuralları",
        description: "Bölme işlemi yapmadan 2, 3, 4, 5, 6, 9 ve 10'a tam bölünebilme kriterlerini uygulama.",
        tags: ["bölünebilme", "kurallar", "test", "bölme", "son rakam", "rakamlar toplamı"],
        icon: "🔍",
        color: "#3B82F6",
        animUrl: "MAT_6_1_2_Animasyon.html",
        labUrl: "MAT_6_1_2_Etkinlik.html"
    },
    {
        id: "mat-6-1-3",
        grade: 6,
        theme: "Sayılar ve Nicelikler",
        title: "Asal Sayılar ve Çarpan Algoritması",
        description: "Eratosten kalburu ile asal sayıları bulma ve bölen listesiyle asal çarpanlara ayırma.",
        tags: ["asal", "sayılar", "çarpan ağacı", "bölen listesi", "eratosten", "üslü ifade"],
        icon: "🧬",
        color: "#3B82F6",
        animUrl: "MAT_6_1_3_Animasyon.html",
        labUrl: "MAT_6_1_3_Etkinlik.html"
    },
    {
        id: "mat-6-1-4",
        grade: 6,
        theme: "Sayılar ve Nicelikler",
        title: "Ortak Bölen ve Ortak Kat (Kesişim)",
        description: "İki sayının ortak bölenlerini (parçalanma) ve ortak katlarını (buluşma) modelleme.",
        tags: ["ortak bölen", "ortak kat", "kesişim", "ebob", "ekok", "trafik lambası"],
        icon: "🔗",
        color: "#3B82F6",
        animUrl: "MAT_6_1_4_Animasyon.html",
        labUrl: "MAT_6_1_4_Etkinlik.html"
    },
    {
        id: "mat-6-1-5",
        grade: 6,
        theme: "Sayılar ve Nicelikler",
        title: "Ondalık Gösterimlerin Basamakları",
        description: "Virgülün sağındaki onda, yüzde ve binde birler basamaklarını kesirlerle çözümleme.",
        tags: ["ondalık", "virgül", "çözümleme", "basamak değeri", "kesir"],
        icon: "🧩",
        color: "#10B981",
        animUrl: "MAT_6_1_5_Animasyon.html",
        labUrl: "MAT_6_1_5_Etkinlik.html"
    },
    {
        id: "mat-6-1-6",
        grade: 6,
        theme: "Sayılar ve Nicelikler",
        title: "Devirli Ondalık Gösterimler",
        description: "Kesir çizgisinin bölme olduğunu kavrama ve bitmeyen bölmeleri devir çizgisiyle ifade etme.",
        tags: ["devirli", "ondalık", "kesir", "bölme", "sonlu ondalık", "sonsuz"],
        icon: "🚨",
        color: "#10B981",
        animUrl: "MAT_6_1_6_Animasyon.html",
        labUrl: "MAT_6_1_6_Etkinlik.html"
    },
    {
        id: "mat-6-1-7",
        grade: 6,
        theme: "Sayılar ve Nicelikler",
        title: "Uzunluk Ölçme Birimleri",
        description: "Kilometre, metre, desimetre, santimetre ve milimetre arası dönüşüm merdiveni.",
        tags: ["uzunluk", "ölçme", "metre", "kilometre", "santimetre", "dönüşüm"],
        icon: "📏",
        color: "#10B981",
        animUrl: "MAT_6_1_7_Animasyon.html",
        labUrl: "MAT_6_1_7_Etkinlik.html"
    },
    {
        id: "mat-6-1-8",
        grade: 6,
        theme: "Sayılar ve Nicelikler",
        title: "Kesir, Ondalık ve Yüzde Problemleri",
        description: "Günlük hayattaki indirim, kar-zarar gibi problemleri farklı gösterimlerle çözme.",
        tags: ["yüzde", "problem", "indirim", "kar", "zarar", "kesir", "ondalık"],
        icon: "🛒",
        color: "#10B981",
        animUrl: "MAT_6_1_8_Animasyon.html",
        labUrl: "MAT_6_1_8_Etkinlik.html"
    },

    // TEMA 2
    {
        id: "mat-6-2-1",
        grade: 6,
        theme: "İşlemlerle Cebirsel Düşünme ve Değişimler",
        title: "Bilinmeyenin Peşinde: Cebir",
        description: "Günlük hayattaki problemleri harflerle (değişkenlerle) temsil etmeyi keşfetme.",
        tags: ["cebir", "değişken", "bilinmeyen", "x", "harfli ifade", "denklem"],
        icon: "🔤",
        color: "#F59E0B",
        animUrl: "MAT_6_2_1_Animasyon.html",
        labUrl: "MAT_6_2_1_Etkinlik.html"
    },
    {
        id: "mat-6-2-2",
        grade: 6,
        theme: "İşlemlerle Cebirsel Düşünme ve Değişimler",
        title: "Örüntülerin Dili (Kural Bulma)",
        description: "Sayı ve şekil örüntülerindeki sabit artışı bularak n'inci terimi cebirsel ifade etme.",
        tags: ["örüntü", "kural", "adım", "genel terim", "artış"],
        icon: "🧱",
        color: "#F59E0B",
        animUrl: "MAT_6_2_2_Animasyon.html",
        labUrl: "MAT_6_2_2_Etkinlik.html"
    },
    {
        id: "mat-6-2-3",
        grade: 6,
        theme: "İşlemlerle Cebirsel Düşünme ve Değişimler",
        title: "Algoritma Fabrikası",
        description: "Bilinmeyen (x) girdisini işlem bandından geçirerek hedeflenen cebirsel ifadeyi oluşturma.",
        tags: ["algoritma", "cebir", "işlem sırası", "makine", "girdi", "çıktı"],
        icon: "⚙️",
        color: "#F59E0B",
        animUrl: "MAT_6_2_3_Animasyon.html",
        labUrl: "MAT_6_2_3_Etkinlik.html"
    },

    // TEMA 3
    {
        id: "mat-6-3-1",
        grade: 6,
        theme: "Geometrik Şekiller",
        title: "Paralel Doğrular ve Kesen",
        description: "İki paralel doğrunun bir kesenle yaptığı yöndeş, ters, iç ters ve dış ters açıları belirleme.",
        tags: ["paralel", "kesen", "açı", "yöndeş", "iç ters", "z kuralı"],
        icon: "📐",
        color: "#8B5CF6",
        animUrl: "MAT_6_3_1_Animasyon.html",
        labUrl: "MAT_6_3_1_Etkinlik.html"
    },
    {
        id: "mat-6-3-2",
        grade: 6,
        theme: "Geometrik Şekiller",
        title: "Paralellerin Arasındaki Şekiller",
        description: "İki paralel doğrunun iki kesenle oluşturduğu dörtgenleri ve açı özelliklerini keşfetme.",
        tags: ["dörtgen", "paralelkenar", "yamuk", "açı", "özellik"],
        icon: "💠",
        color: "#8B5CF6",
        animUrl: "MAT_6_3_2_Animasyon.html",
        labUrl: "MAT_6_3_2_Etkinlik.html"
    },
    {
        id: "mat-6-3-3",
        grade: 6,
        theme: "Geometrik Şekiller",
        title: "Köşegenlerin Sırrı",
        description: "Birbirini ortalayan köşegenlerin dikliği ve eşitliği ile özel dörtgenleri oluşturma.",
        tags: ["köşegen", "dik kesişme", "eşitlik", "kare", "eşkenar dörtgen", "dikdörtgen"],
        icon: "🪄",
        color: "#8B5CF6",
        animUrl: "MAT_6_3_3_Animasyon.html",
        labUrl: "MAT_6_3_3_Etkinlik.html"
    },
    {
        id: "mat-6-3-4",
        grade: 6,
        theme: "Geometrik Şekiller",
        title: "Açı Problemleri Görevleri",
        description: "Üçgen ve özel dörtgenlerin açı özelliklerini (iç açı toplamı, paralellik) kullanarak problem çözme.",
        tags: ["problem", "açı", "üçgen", "dörtgen", "çözüm", "ikizkenar"],
        icon: "🎯",
        color: "#8B5CF6",
        animUrl: "MAT_6_3_4_Animasyon.html",
        labUrl: "MAT_6_3_4_Etkinlik.html"
    }
];
