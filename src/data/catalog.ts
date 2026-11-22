import type { TopicModule } from '../types/studio';

/**
 * Otomatik oluşturulan müfredat kataloğu (scripts/sync-apps.mjs).
 * Yeni HTML animasyon veya etkinlik eklediğinizde `npm run sync` çalıştırarak güncelleyebilirsiniz.
 */
export const CATALOG_TOPICS: TopicModule[] = [
  {
    "id": "mat-5-1-1",
    "code": "MAT.5.1.1",
    "grade": 5,
    "levelGroup": "Ortaokul",
    "unit": 1,
    "theme": "Sayılar ve Nicelikler",
    "color": "#3B82F6",
    "icon": "🔢",
    "title": "Çok Basamaklı Sayılar",
    "description": "Ekranda görünen sayıyı bölüklerine ayır ve doğruluğunu kontrol et!",
    "kazanim": "MAT.5.1.1. Altı basamaklı sayıları okuma ve yazmayı çok basamaklı sayılara genelleyebilme",
    "tags": [
      "çok",
      "basamaklı",
      "sayılar",
      "ekranda",
      "görünen",
      "sayıyı",
      "bölüklerine",
      "ayır",
      "doğruluğunu",
      "kontrol"
    ],
    "animations": [
      {
        "label": "Animasyon: Çok Basamaklı Sayılar",
        "file": "MAT_5_1_1_Animasyon.html",
        "url": "apps/5_Sinif/MAT_5_1_1_Animasyon.html",
        "title": "Çok Basamaklı Sayılar",
        "isDraft": false
      }
    ],
    "labs": [
      {
        "label": "İnteraktif Laboratuvar",
        "file": "MAT_5_1_1_Etkinlik.html",
        "url": "apps/5_Sinif/MAT_5_1_1_Etkinlik.html",
        "title": "Çok Basamaklı Sayılar Keşfi",
        "isDraft": false
      }
    ],
    "hasCompletedContent": true,
    "hasDraftPart": false
  },
  {
    "id": "mat-5-1-2",
    "code": "MAT.5.1.2",
    "grade": 5,
    "levelGroup": "Ortaokul",
    "unit": 1,
    "theme": "Sayılar ve Nicelikler",
    "color": "#3B82F6",
    "icon": "🎯",
    "title": "Gerçek Yaşam Problemleri",
    "description": "Doğal sayılar ve işlemler içeren gerçek yaşam problemlerini çözebilme.",
    "kazanim": "MAT.5.1.2. Doğal sayılar ve işlemler içeren gerçek yaşam problemlerini çözebilme.",
    "tags": [
      "gerçek",
      "yaşam",
      "problemleri",
      "doğal",
      "sayılar",
      "işlemler",
      "içeren",
      "problemlerini",
      "çözebilme",
      "nicelikler"
    ],
    "animations": [
      {
        "label": "Animasyon: Gerçek Yaşam Problemleri",
        "file": "MAT_5_1_2_Animasyon.html",
        "url": "apps/5_Sinif/MAT_5_1_2_Animasyon.html",
        "title": "Gerçek Yaşam Problemleri",
        "isDraft": false
      }
    ],
    "labs": [
      {
        "label": "İnteraktif Laboratuvar",
        "file": "MAT_5_1_2_Etkinlik.html",
        "url": "apps/5_Sinif/MAT_5_1_2_Etkinlik.html",
        "title": "Gerçek Yaşam Problemleri - Çözüm Merkezi",
        "isDraft": false
      }
    ],
    "hasCompletedContent": true,
    "hasDraftPart": false
  },
  {
    "id": "mat-5-1-3",
    "code": "MAT.5.1.3",
    "grade": 5,
    "levelGroup": "Ortaokul",
    "unit": 1,
    "theme": "Sayılar ve Nicelikler",
    "color": "#3B82F6",
    "icon": "🍕",
    "title": "Kesir Gösterimleri",
    "description": "Kutucuklara tıklayarak veya sürükleyerek boyayın. Yandaki değerlerin nasıl değiştiğini gözlemleyin.",
    "kazanim": "MAT.5.1.3. Gerçek yaşam durumlarına karşılık gelen kesirleri farklı biçimlerde temsil edebilme.",
    "tags": [
      "kesir",
      "gösterimleri",
      "kutucuklara",
      "tıklayarak",
      "veya",
      "sürükleyerek",
      "boyayın",
      "yandaki",
      "değerlerin",
      "değiştiğini"
    ],
    "animations": [
      {
        "label": "Animasyon: Kesir Gösterimleri",
        "file": "MAT_5_1_3_Animasyon.html",
        "url": "apps/5_Sinif/MAT_5_1_3_Animasyon.html",
        "title": "Kesir Gösterimleri",
        "isDraft": false
      }
    ],
    "labs": [
      {
        "label": "İnteraktif Laboratuvar",
        "file": "MAT_5_1_3_Etkinlik.html",
        "url": "apps/5_Sinif/MAT_5_1_3_Etkinlik.html",
        "title": "Kesirlerin Farklı Gösterimleri - Yüzlük Kart",
        "isDraft": false
      }
    ],
    "hasCompletedContent": true,
    "hasDraftPart": false
  },
  {
    "id": "mat-5-1-4",
    "code": "MAT.5.1.4",
    "grade": 5,
    "levelGroup": "Ortaokul",
    "unit": 1,
    "theme": "Sayılar ve Nicelikler",
    "color": "#3B82F6",
    "icon": "🍕",
    "title": "Kesir Karşılaştırma",
    "description": "Farklı gösterimlerle ifade edilen kesirlerin karşılaştırılmasına yönelik çıkarım yapabilme.",
    "kazanim": "MAT.5.1.4. Farklı gösterimlerle ifade edilen kesirlerin karşılaştırılmasına yönelik çıkarım yapabilme.",
    "tags": [
      "kesir",
      "karşılaştırma",
      "farklı",
      "gösterimlerle",
      "ifade",
      "edilen",
      "kesirlerin",
      "karşılaştırılmasına",
      "yönelik",
      "çıkarım"
    ],
    "animations": [
      {
        "label": "Animasyon: Kesir Karşılaştırma",
        "file": "MAT_5_1_4_Animasyon.html",
        "url": "apps/5_Sinif/MAT_5_1_4_Animasyon.html",
        "title": "Kesir Karşılaştırma",
        "isDraft": false
      }
    ],
    "labs": [
      {
        "label": "İnteraktif Laboratuvar",
        "file": "MAT_5_1_4_Etkinlik.html",
        "url": "apps/5_Sinif/MAT_5_1_4_Etkinlik.html",
        "title": "Kesirleri Karşılaştırma Oyunu",
        "isDraft": false
      }
    ],
    "hasCompletedContent": true,
    "hasDraftPart": false
  },
  {
    "id": "mat-5-2-1",
    "code": "MAT.5.2.1",
    "grade": 5,
    "levelGroup": "Ortaokul",
    "unit": 2,
    "theme": "İşlemlerle Sayılar",
    "color": "#10B981",
    "icon": "🔢",
    "title": "İşlem Özellikleri ve Eşitliğin Korunumu",
    "description": "Çarpmada birleşme ve dağılma özellikleri ile eşitliğin korunumu animasyonları ve terazi laboratuvarı.",
    "kazanim": "MAT.5.2.1. Çarpma işleminde birleşme özelliği.",
    "tags": [
      "işlem",
      "özellikleri",
      "eşitliğin",
      "korunumu",
      "çarpmada",
      "birleşme",
      "dağılma",
      "animasyonları",
      "terazi",
      "işlemlerle"
    ],
    "animations": [
      {
        "label": "Birleşme Özelliği",
        "file": "MAT_5_2_1_Animasyon_Birlesme.html",
        "url": "apps/5_Sinif/MAT_5_2_1_Animasyon_Birlesme.html",
        "title": "Çarpmanın Birleşme Özelliği",
        "isDraft": false
      },
      {
        "label": "Dağılma Özelliği",
        "file": "MAT_5_2_1_Animasyon_Dagilma.html",
        "url": "apps/5_Sinif/MAT_5_2_1_Animasyon_Dagilma.html",
        "title": "Dağılma Özelliği",
        "isDraft": false
      },
      {
        "label": "Eşitliğin Korunumu",
        "file": "MAT_5_2_1_Animasyon_Esitlik.html",
        "url": "apps/5_Sinif/MAT_5_2_1_Animasyon_Esitlik.html",
        "title": "Eşitliğin Korunumu",
        "isDraft": false
      }
    ],
    "labs": [
      {
        "label": "İnteraktif Laboratuvar",
        "file": "MAT_5_2_1_Etkinlik.html",
        "url": "apps/5_Sinif/MAT_5_2_1_Etkinlik.html",
        "title": "Eşitliğin Korunumu - Terazi Oyunu",
        "isDraft": false
      }
    ],
    "hasCompletedContent": true,
    "hasDraftPart": false
  },
  {
    "id": "mat-5-2-2",
    "code": "MAT.5.2.2",
    "grade": 5,
    "levelGroup": "Ortaokul",
    "unit": 2,
    "theme": "İşlemlerle Sayılar",
    "color": "#10B981",
    "icon": "⭕",
    "title": "İşlem Önceliği Piramidi",
    "description": "Aşağıdaki problemin çözüm adımlarını, doğru sırada yapılması gereken işleme tıklayarak tamamla.",
    "kazanim": "MAT.5.2.2. İşlem Önceliği (Parantez > Üslü İfade > Çarpma/Bölme > Toplama/Çıkarma)",
    "tags": [
      "işlem",
      "önceliği",
      "piramidi",
      "aşağıdaki",
      "problemin",
      "çözüm",
      "adımlarını",
      "doğru",
      "sırada",
      "yapılması"
    ],
    "animations": [
      {
        "label": "Animasyon: İşlem Önceliği Piramidi",
        "file": "MAT_5_2_2_Animasyon.html",
        "url": "apps/5_Sinif/MAT_5_2_2_Animasyon.html",
        "title": "İşlem Önceliği Piramidi",
        "isDraft": false
      }
    ],
    "labs": [
      {
        "label": "İnteraktif Laboratuvar",
        "file": "MAT_5_2_2_Etkinlik.html",
        "url": "apps/5_Sinif/MAT_5_2_2_Etkinlik.html",
        "title": "İşlem Önceliği Görevi",
        "isDraft": false
      }
    ],
    "hasCompletedContent": true,
    "hasDraftPart": false
  },
  {
    "id": "mat-5-2-3",
    "code": "MAT.5.2.3",
    "grade": 5,
    "levelGroup": "Ortaokul",
    "unit": 2,
    "theme": "İşlemlerle Sayılar",
    "color": "#10B981",
    "icon": "🧱",
    "title": "Sayı ve Şekil Örüntüleri",
    "description": "Örüntü Kuralını Bulma",
    "kazanim": "MAT.5.2.3. Örüntü Kuralını Bulma",
    "tags": [
      "sayı",
      "şekil",
      "örüntüleri",
      "örüntü",
      "kuralını",
      "bulma",
      "işlemlerle",
      "sayılar",
      "sınıf",
      "tasarruf"
    ],
    "animations": [
      {
        "label": "Animasyon: Sayı ve Şekil Örüntüleri",
        "file": "MAT_5_2_3_Animasyon.html",
        "url": "apps/5_Sinif/MAT_5_2_3_Animasyon.html",
        "title": "Sayı ve Şekil Örüntüleri",
        "isDraft": false
      }
    ],
    "labs": [
      {
        "label": "İnteraktif Laboratuvar",
        "file": "MAT_5_2_3_Etkinlik.html",
        "url": "apps/5_Sinif/MAT_5_2_3_Etkinlik.html",
        "title": "Tasarruf Kumbarası - Örüntüler",
        "isDraft": false
      }
    ],
    "hasCompletedContent": true,
    "hasDraftPart": false
  },
  {
    "id": "mat-5-2-4",
    "code": "MAT.5.2.4",
    "grade": 5,
    "levelGroup": "Ortaokul",
    "unit": 2,
    "theme": "İşlemlerle Sayılar",
    "color": "#10B981",
    "icon": "⚙️",
    "title": "Algoritma Temsilleri",
    "description": "Marketten 700 gramı 140 TL olan bir peynir aldık. Acaba bu peynirin 1 Kilogramı (1000 gramı) ne kadardır? Gelin algoritmasını yazalım!",
    "kazanim": "MAT.5.2.4. Algoritma Temsilleri",
    "tags": [
      "algoritma",
      "temsilleri",
      "marketten",
      "700",
      "gramı",
      "140",
      "peynir",
      "aldık",
      "acaba",
      "peynirin"
    ],
    "animations": [
      {
        "label": "Animasyon: Algoritma Temsilleri",
        "file": "MAT_5_2_4_Animasyon.html",
        "url": "apps/5_Sinif/MAT_5_2_4_Animasyon.html",
        "title": "Algoritma Temsilleri",
        "isDraft": false
      }
    ],
    "labs": [
      {
        "label": "İnteraktif Laboratuvar",
        "file": "MAT_5_2_4_Etkinlik.html",
        "url": "apps/5_Sinif/MAT_5_2_4_Etkinlik.html",
        "title": "Akış Şeması ve Algoritma Takibi",
        "isDraft": false
      }
    ],
    "hasCompletedContent": true,
    "hasDraftPart": false
  },
  {
    "id": "mat-5-3-1",
    "code": "MAT.5.3.1",
    "grade": 5,
    "levelGroup": "Ortaokul",
    "unit": 3,
    "theme": "Geometrik Şekiller",
    "color": "#F59E0B",
    "icon": "🔢",
    "title": "Geometrinin Evrimi",
    "description": "Her şey kalemin kâğıtta bıraktığı bir izle başlar...",
    "kazanim": "MAT.5.3.1. Temel Geometrik Çizimler",
    "tags": [
      "geometrinin",
      "evrimi",
      "her",
      "şey",
      "kalemin",
      "kâğıtta",
      "bıraktığı",
      "izle",
      "başlar",
      "geometrik"
    ],
    "animations": [
      {
        "label": "Animasyon: Geometrinin Evrimi",
        "file": "MAT_5_3_1_Animasyon.html",
        "url": "apps/5_Sinif/MAT_5_3_1_Animasyon.html",
        "title": "Geometrinin Evrimi",
        "isDraft": false
      }
    ],
    "labs": [
      {
        "label": "İnteraktif Laboratuvar",
        "file": "MAT_5_3_1_Etkinlik.html",
        "url": "apps/5_Sinif/MAT_5_3_1_Etkinlik.html",
        "title": "Havacılık Radarı - Geometrik Çizimler",
        "isDraft": false
      }
    ],
    "hasCompletedContent": true,
    "hasDraftPart": false
  },
  {
    "id": "mat-5-3-2",
    "code": "MAT.5.3.2",
    "grade": 5,
    "levelGroup": "Ortaokul",
    "unit": 3,
    "theme": "Geometrik Şekiller",
    "color": "#F59E0B",
    "icon": "🔢",
    "title": "Geometrik Çıkarımlar",
    "description": "Geometrik Çıkarımlar",
    "kazanim": "MAT.5.3.2. Geometrik Çıkarımlar",
    "tags": [
      "geometrik",
      "çıkarımlar",
      "şekiller",
      "sınıf",
      "keşfi"
    ],
    "animations": [
      {
        "label": "Animasyon: Geometrik Çıkarımlar",
        "file": "MAT_5_3_2_Animasyon.html",
        "url": "apps/5_Sinif/MAT_5_3_2_Animasyon.html",
        "title": "Geometrik Çıkarımlar",
        "isDraft": false
      }
    ],
    "labs": [
      {
        "label": "İnteraktif Laboratuvar",
        "file": "MAT_5_3_2_Etkinlik.html",
        "url": "apps/5_Sinif/MAT_5_3_2_Etkinlik.html",
        "title": "Geometrik Çıkarımlar Keşfi",
        "isDraft": false
      }
    ],
    "hasCompletedContent": true,
    "hasDraftPart": false
  },
  {
    "id": "mat-5-3-3",
    "code": "MAT.5.3.3",
    "grade": 5,
    "levelGroup": "Ortaokul",
    "unit": 3,
    "theme": "Geometrik Şekiller",
    "color": "#F59E0B",
    "icon": "📐",
    "title": "Açının Serüveni - Dönme Miktarı",
    "description": "Bir ışın, sabit bir nokta etrafında dönerek açıları oluşturur.",
    "kazanim": "MAT.5.3.3. Açı Ölçümü",
    "tags": [
      "açının",
      "serüveni",
      "dönme",
      "miktarı",
      "ışın",
      "sabit",
      "nokta",
      "etrafında",
      "dönerek",
      "açıları"
    ],
    "animations": [
      {
        "label": "Animasyon: Açının Serüveni - Dönme Miktarı",
        "file": "MAT_5_3_3_Animasyon.html",
        "url": "apps/5_Sinif/MAT_5_3_3_Animasyon.html",
        "title": "Açının Serüveni - Dönme Miktarı",
        "isDraft": false
      }
    ],
    "labs": [
      {
        "label": "İnteraktif Laboratuvar",
        "file": "MAT_5_3_3_Etkinlik.html",
        "url": "apps/5_Sinif/MAT_5_3_3_Etkinlik.html",
        "title": "Etkileşimli Açıölçer",
        "isDraft": false
      }
    ],
    "hasCompletedContent": true,
    "hasDraftPart": false
  },
  {
    "id": "mat-5-3-4",
    "code": "MAT.5.3.4",
    "grade": 5,
    "levelGroup": "Ortaokul",
    "unit": 3,
    "theme": "Geometrik Şekiller",
    "color": "#F59E0B",
    "icon": "🔢",
    "title": "Doğruların Durumları",
    "description": "İki veya üç doğrunun birbirine göre durumları...",
    "kazanim": "MAT.5.3.4. Çıkarım Yapma",
    "tags": [
      "doğruların",
      "durumları",
      "iki",
      "veya",
      "doğrunun",
      "birbirine",
      "geometrik",
      "şekiller",
      "sınıf",
      "dansı"
    ],
    "animations": [
      {
        "label": "Animasyon: Doğruların Durumları",
        "file": "MAT_5_3_4_Animasyon.html",
        "url": "apps/5_Sinif/MAT_5_3_4_Animasyon.html",
        "title": "Doğruların Durumları",
        "isDraft": false
      }
    ],
    "labs": [
      {
        "label": "İnteraktif Laboratuvar",
        "file": "MAT_5_3_4_Etkinlik.html",
        "url": "apps/5_Sinif/MAT_5_3_4_Etkinlik.html",
        "title": "Doğruların Dansı - Geometri Laboratuvarı",
        "isDraft": false
      }
    ],
    "hasCompletedContent": true,
    "hasDraftPart": false
  },
  {
    "id": "mat-5-3-5",
    "code": "MAT.5.3.5",
    "grade": 5,
    "levelGroup": "Ortaokul",
    "unit": 3,
    "theme": "Geometrik Şekiller",
    "color": "#F59E0B",
    "icon": "📐",
    "title": "Çokgenlerin Doğuşu",
    "description": "Doğruların kesişimiyle ortaya çıkan kapalı dünyalar...",
    "kazanim": "MAT.5.3.5. Çokgenlerin Oluşumu",
    "tags": [
      "çokgenlerin",
      "doğuşu",
      "doğruların",
      "kesişimiyle",
      "ortaya",
      "çıkan",
      "kapalı",
      "dünyalar",
      "geometrik",
      "şekiller"
    ],
    "animations": [
      {
        "label": "Animasyon: Çokgenlerin Doğuşu",
        "file": "MAT_5_3_5_Animasyon.html",
        "url": "apps/5_Sinif/MAT_5_3_5_Animasyon.html",
        "title": "Çokgenlerin Doğuşu",
        "isDraft": false
      }
    ],
    "labs": [
      {
        "label": "İnteraktif Laboratuvar",
        "file": "MAT_5_3_5_Etkinlik.html",
        "url": "apps/5_Sinif/MAT_5_3_5_Etkinlik.html",
        "title": "Çokgenlerin Doğuşu - İnteraktif Laboratuvar",
        "isDraft": false
      }
    ],
    "hasCompletedContent": true,
    "hasDraftPart": false
  },
  {
    "id": "mat-5-3-6",
    "code": "MAT.5.3.6",
    "grade": 5,
    "levelGroup": "Ortaokul",
    "unit": 3,
    "theme": "Geometrik Şekiller",
    "color": "#F59E0B",
    "icon": "📐",
    "title": "Çokgenlerin Sırları",
    "description": "İç açılar, köşegenler ve isimlerin arkasındaki kurallar...",
    "kazanim": "MAT.5.3.6. İç Açılar ve Köşegenler",
    "tags": [
      "çokgenlerin",
      "sırları",
      "açılar",
      "köşegenler",
      "isimlerin",
      "arkasındaki",
      "kurallar",
      "geometrik",
      "şekiller",
      "sınıf"
    ],
    "animations": [
      {
        "label": "Animasyon: Çokgenlerin Sırları",
        "file": "MAT_5_3_6_Animasyon.html",
        "url": "apps/5_Sinif/MAT_5_3_6_Animasyon.html",
        "title": "Çokgenlerin Sırları",
        "isDraft": false
      }
    ],
    "labs": [
      {
        "label": "İnteraktif Laboratuvar",
        "file": "MAT_5_3_6_Etkinlik.html",
        "url": "apps/5_Sinif/MAT_5_3_6_Etkinlik.html",
        "title": "İç Açılar Laboratuvarı",
        "isDraft": false
      }
    ],
    "hasCompletedContent": true,
    "hasDraftPart": false
  },
  {
    "id": "mat-5-4-1",
    "code": "MAT.5.4.1",
    "grade": 5,
    "levelGroup": "Ortaokul",
    "unit": 4,
    "theme": "Geometrik Nicelikler",
    "color": "#F43F5E",
    "icon": "📏",
    "title": "Çitlerin Sırrı (Aynı Çevre - Animasyon)",
    "description": "Bahçemizin etrafını çevirmek için elimizde tam 24 metre çit var.",
    "kazanim": "MAT.5.4.1. Aynı Çevre Uzunluğu",
    "tags": [
      "çitlerin",
      "sırrı",
      "aynı",
      "çevre",
      "bahçemizin",
      "etrafını",
      "çevirmek",
      "elimizde",
      "tam",
      "metre"
    ],
    "animations": [
      {
        "label": "Animasyon: Çitlerin Sırrı (Aynı Çevre - Animasyon)",
        "file": "MAT_5_4_1_Animasyon.html",
        "url": "apps/5_Sinif/MAT_5_4_1_Animasyon.html",
        "title": "Çitlerin Sırrı (Aynı Çevre - Animasyon)",
        "isDraft": false
      }
    ],
    "labs": [
      {
        "label": "İnteraktif Laboratuvar",
        "file": "MAT_5_4_1_Etkinlik.html",
        "url": "apps/5_Sinif/MAT_5_4_1_Etkinlik.html",
        "title": "Sabit Çevre Laboratuvarı",
        "isDraft": false
      }
    ],
    "hasCompletedContent": true,
    "hasDraftPart": false
  },
  {
    "id": "mat-5-4-2",
    "code": "MAT.5.4.2",
    "grade": 5,
    "levelGroup": "Ortaokul",
    "unit": 4,
    "theme": "Geometrik Nicelikler",
    "color": "#F43F5E",
    "icon": "📏",
    "title": "Alan Formülü Nereden Geliyor?",
    "description": "Bu dikdörtgenin alanını (içini) birim karelerle kaplayalım.",
    "kazanim": "MAT.5.4.2. Alan Formülünün Keşfi",
    "tags": [
      "alan",
      "formülü",
      "nereden",
      "geliyor",
      "dikdörtgenin",
      "alanını",
      "içini",
      "birim",
      "karelerle",
      "kaplayalım"
    ],
    "animations": [
      {
        "label": "Animasyon: Alan Formülü Nereden Geliyor?",
        "file": "MAT_5_4_2_Animasyon.html",
        "url": "apps/5_Sinif/MAT_5_4_2_Animasyon.html",
        "title": "Alan Formülü Nereden Geliyor?",
        "isDraft": false
      }
    ],
    "labs": [
      {
        "label": "İnteraktif Laboratuvar",
        "file": "MAT_5_4_2_Etkinlik.html",
        "url": "apps/5_Sinif/MAT_5_4_2_Etkinlik.html",
        "title": "Birim Kare Laboratuvarı",
        "isDraft": false
      }
    ],
    "hasCompletedContent": true,
    "hasDraftPart": false
  },
  {
    "id": "mat-5-4-3",
    "code": "MAT.5.4.3",
    "grade": 5,
    "levelGroup": "Ortaokul",
    "unit": 4,
    "theme": "Geometrik Nicelikler",
    "color": "#F43F5E",
    "icon": "🔢",
    "title": "Kare'nin Sihri",
    "description": "Bazen alan, bazen de çevre sabittir. Peki şekil nasıl olmalı?",
    "kazanim": "MAT.5.4.3. Karenin Sihri",
    "tags": [
      "kare",
      "nin",
      "sihri",
      "bazen",
      "alan",
      "çevre",
      "sabittir",
      "peki",
      "şekil",
      "olmalı"
    ],
    "animations": [
      {
        "label": "Animasyon: Kare'nin Sihri",
        "file": "MAT_5_4_3_Animasyon.html",
        "url": "apps/5_Sinif/MAT_5_4_3_Animasyon.html",
        "title": "Kare'nin Sihri",
        "isDraft": false
      }
    ],
    "labs": [
      {
        "label": "İnteraktif Laboratuvar",
        "file": "MAT_5_4_3_Etkinlik.html",
        "url": "apps/5_Sinif/MAT_5_4_3_Etkinlik.html",
        "title": "Alan-Çevre Dengesi Laboratuvarı",
        "isDraft": false
      }
    ],
    "hasCompletedContent": true,
    "hasDraftPart": false
  },
  {
    "id": "mat-5-4-4",
    "code": "MAT.5.4.4",
    "grade": 5,
    "levelGroup": "Ortaokul",
    "unit": 4,
    "theme": "Geometrik Nicelikler",
    "color": "#F43F5E",
    "icon": "🔢",
    "title": "Bileşik Şekillerin Sırrı",
    "description": "Bazen odalarımız veya bahçelerimiz tam bir dikdörtgen olmayabilir.",
    "kazanim": "MAT.5.4.4. Bileşik Şekillerde Alan ve Çevre",
    "tags": [
      "bileşik",
      "şekillerin",
      "sırrı",
      "bazen",
      "odalarımız",
      "veya",
      "bahçelerimiz",
      "tam",
      "dikdörtgen",
      "olmayabilir"
    ],
    "animations": [
      {
        "label": "Animasyon: Bileşik Şekillerin Sırrı",
        "file": "MAT_5_4_4_Animasyon.html",
        "url": "apps/5_Sinif/MAT_5_4_4_Animasyon.html",
        "title": "Bileşik Şekillerin Sırrı",
        "isDraft": false
      }
    ],
    "labs": [
      {
        "label": "İnteraktif Laboratuvar",
        "file": "MAT_5_4_4_Etkinlik.html",
        "url": "apps/5_Sinif/MAT_5_4_4_Etkinlik.html",
        "title": "Büyük Tasarım Görevi (Problem Çözme)",
        "isDraft": false
      }
    ],
    "hasCompletedContent": true,
    "hasDraftPart": false
  },
  {
    "id": "mat-5-5-1",
    "code": "MAT.5.5.1",
    "grade": 5,
    "levelGroup": "Ortaokul",
    "unit": 5,
    "theme": "İstatistiksel Araştırma Süreci",
    "color": "#06B6D4",
    "icon": "📊",
    "title": "İstatistiksel Araştırma Süreci",
    "description": "Veri madenciliğinin 4 altın kuralını öğrenelim.",
    "kazanim": "MAT.5.5.1. İstatistiksel Araştırma Süreci",
    "tags": [
      "istatistiksel",
      "araştırma",
      "süreci",
      "veri",
      "madenciliğinin",
      "altın",
      "kuralını",
      "öğrenelim",
      "sınıf",
      "istatistik"
    ],
    "animations": [
      {
        "label": "Animasyon: İstatistiksel Araştırma Süreci",
        "file": "MAT_5_5_1_Animasyon.html",
        "url": "apps/5_Sinif/MAT_5_5_1_Animasyon.html",
        "title": "İstatistiksel Araştırma Süreci",
        "isDraft": false
      }
    ],
    "labs": [
      {
        "label": "İnteraktif Laboratuvar",
        "file": "MAT_5_5_1_Etkinlik.html",
        "url": "apps/5_Sinif/MAT_5_5_1_Etkinlik.html",
        "title": "İstatistik Laboratuvarı",
        "isDraft": false
      }
    ],
    "hasCompletedContent": true,
    "hasDraftPart": false
  },
  {
    "id": "mat-5-5-2",
    "code": "MAT.5.5.2",
    "grade": 5,
    "levelGroup": "Ortaokul",
    "unit": 5,
    "theme": "İstatistiksel Araştırma Süreci",
    "color": "#06B6D4",
    "icon": "📊",
    "title": "Sayılar Yalan Söyler mi?",
    "description": "\"Sayılar yalan söylemez ama grafikleri çizenler yalan söyleyebilir! \"",
    "kazanim": "MAT.5.5.2. Hatalı Grafikler ve Analiz",
    "tags": [
      "sayılar",
      "yalan",
      "söyler",
      "söylemez",
      "ama",
      "grafikleri",
      "çizenler",
      "söyleyebilir",
      "istatistiksel",
      "araştırma"
    ],
    "animations": [
      {
        "label": "Animasyon: Sayılar Yalan Söyler mi?",
        "file": "MAT_5_5_2_Animasyon.html",
        "url": "apps/5_Sinif/MAT_5_5_2_Animasyon.html",
        "title": "Sayılar Yalan Söyler mi?",
        "isDraft": false
      }
    ],
    "labs": [
      {
        "label": "İnteraktif Laboratuvar",
        "file": "MAT_5_5_2_Etkinlik.html",
        "url": "apps/5_Sinif/MAT_5_5_2_Etkinlik.html",
        "title": "İstatistik Dedektifi (Hatalı Grafikler)",
        "isDraft": false
      }
    ],
    "hasCompletedContent": true,
    "hasDraftPart": false
  },
  {
    "id": "mat-5-6-1",
    "code": "MAT.5.6.1",
    "grade": 5,
    "levelGroup": "Ortaokul",
    "unit": 6,
    "theme": "Veriden Olasılığa",
    "color": "#8B5CF6",
    "icon": "📊",
    "title": "0'dan 1'e Yolculuk",
    "description": "Matematikte şansın (olasılığın) her zaman kesin bir sınırı vardır.",
    "kazanim": "MAT.5.6.1. Olasılığın Sınırları",
    "tags": [
      "dan",
      "yolculuk",
      "matematikte",
      "şansın",
      "olasılığın",
      "her",
      "zaman",
      "kesin",
      "sınırı",
      "vardır"
    ],
    "animations": [
      {
        "label": "Animasyon: 0'dan 1'e Yolculuk",
        "file": "MAT_5_6_1_Animasyon.html",
        "url": "apps/5_Sinif/MAT_5_6_1_Animasyon.html",
        "title": "0'dan 1'e Yolculuk",
        "isDraft": false
      }
    ],
    "labs": [
      {
        "label": "İnteraktif Laboratuvar",
        "file": "MAT_5_6_1_Etkinlik.html",
        "url": "apps/5_Sinif/MAT_5_6_1_Etkinlik.html",
        "title": "Olasılık Metre (Olasılık Spektrumu)",
        "isDraft": false
      }
    ],
    "hasCompletedContent": true,
    "hasDraftPart": false
  },
  {
    "id": "mat-5-6-2",
    "code": "MAT.5.6.2",
    "grade": 5,
    "levelGroup": "Ortaokul",
    "unit": 6,
    "theme": "Veriden Olasılığa",
    "color": "#8B5CF6",
    "icon": "🎲",
    "title": "Şans Kime Güler?",
    "description": "Olasılık bir sihir değildir, sayıların gücüdür.",
    "kazanim": "MAT.5.6.2. Şans Kime Güler?",
    "tags": [
      "şans",
      "kime",
      "güler",
      "olasılık",
      "sihir",
      "değildir",
      "sayıların",
      "gücüdür",
      "veriden",
      "olasılığa"
    ],
    "animations": [
      {
        "label": "Animasyon: Şans Kime Güler?",
        "file": "MAT_5_6_2_Animasyon.html",
        "url": "apps/5_Sinif/MAT_5_6_2_Animasyon.html",
        "title": "Şans Kime Güler?",
        "isDraft": false
      }
    ],
    "labs": [
      {
        "label": "İnteraktif Laboratuvar",
        "file": "MAT_5_6_2_Etkinlik.html",
        "url": "apps/5_Sinif/MAT_5_6_2_Etkinlik.html",
        "title": "Şans Topları Laboratuvarı",
        "isDraft": false
      }
    ],
    "hasCompletedContent": true,
    "hasDraftPart": false
  },
  {
    "id": "mat-6-1-1",
    "code": "MAT.6.1.1",
    "grade": 6,
    "levelGroup": "Ortaokul",
    "unit": 1,
    "theme": "Sayılar ve Nicelikler",
    "color": "#3B82F6",
    "icon": "🧬",
    "title": "Çarpanlar ve Katlar",
    "description": "Her sayı aslında başka sayıların çarpımından doğar.",
    "kazanim": "MAT.6.1.1. Çarpan ve Kat Kavramı",
    "tags": [
      "çarpanlar",
      "katlar",
      "her",
      "sayı",
      "aslında",
      "başka",
      "sayıların",
      "çarpımından",
      "doğar",
      "sayılar"
    ],
    "animations": [
      {
        "label": "Animasyon: Çarpanlar ve Katlar",
        "file": "MAT_6_1_1_Animasyon.html",
        "url": "apps/6_Sinif/MAT_6_1_1_Animasyon.html",
        "title": "Çarpanlar ve Katlar",
        "isDraft": false
      }
    ],
    "labs": [
      {
        "label": "İnteraktif Laboratuvar",
        "file": "MAT_6_1_1_Etkinlik.html",
        "url": "apps/6_Sinif/MAT_6_1_1_Etkinlik.html",
        "title": "Çarpan ve Kat Fabrikası",
        "isDraft": false
      }
    ],
    "hasCompletedContent": true,
    "hasDraftPart": false
  },
  {
    "id": "mat-6-1-2",
    "code": "MAT.6.1.2",
    "grade": 6,
    "levelGroup": "Ortaokul",
    "unit": 1,
    "theme": "Sayılar ve Nicelikler",
    "color": "#3B82F6",
    "icon": "🔢",
    "title": "Bölünebilme Kuralları",
    "description": "Büyük sayıları uzun uzun bölmek yerine Pratik Kuralları kullanırız.",
    "kazanim": "MAT.6.1.2. Bölünebilme Kriterleri",
    "tags": [
      "bölünebilme",
      "kuralları",
      "büyük",
      "sayıları",
      "uzun",
      "bölmek",
      "yerine",
      "pratik",
      "kullanırız",
      "sayılar"
    ],
    "animations": [
      {
        "label": "Animasyon: Bölünebilme Kuralları",
        "file": "MAT_6_1_2_Animasyon.html",
        "url": "apps/6_Sinif/MAT_6_1_2_Animasyon.html",
        "title": "Bölünebilme Kuralları",
        "isDraft": false
      }
    ],
    "labs": [
      {
        "label": "İnteraktif Laboratuvar",
        "file": "MAT_6_1_2_Etkinlik.html",
        "url": "apps/6_Sinif/MAT_6_1_2_Etkinlik.html",
        "title": "Bölünebilme Test Merkezi",
        "isDraft": false
      }
    ],
    "hasCompletedContent": true,
    "hasDraftPart": false
  },
  {
    "id": "mat-6-1-3",
    "code": "MAT.6.1.3",
    "grade": 6,
    "levelGroup": "Ortaokul",
    "unit": 1,
    "theme": "Sayılar ve Nicelikler",
    "color": "#3B82F6",
    "icon": "🧬",
    "title": "Asal Sayılar",
    "description": "Bazı sayılar o kadar inatçıdır ki, sadece 1'e ve Kendisine bölünür.",
    "kazanim": "MAT.6.1.3. Asal Sayılar",
    "tags": [
      "asal",
      "sayılar",
      "bazı",
      "kadar",
      "inatçıdır",
      "sadece",
      "kendisine",
      "bölünür",
      "nicelikler",
      "sınıf"
    ],
    "animations": [
      {
        "label": "Animasyon: Asal Sayılar",
        "file": "MAT_6_1_3_Animasyon.html",
        "url": "apps/6_Sinif/MAT_6_1_3_Animasyon.html",
        "title": "Asal Sayılar",
        "isDraft": false
      }
    ],
    "labs": [
      {
        "label": "İnteraktif Laboratuvar",
        "file": "MAT_6_1_3_Etkinlik.html",
        "url": "apps/6_Sinif/MAT_6_1_3_Etkinlik.html",
        "title": "Asal Çarpan Algoritması",
        "isDraft": false
      }
    ],
    "hasCompletedContent": true,
    "hasDraftPart": false
  },
  {
    "id": "mat-6-1-4",
    "code": "MAT.6.1.4",
    "grade": 6,
    "levelGroup": "Ortaokul",
    "unit": 1,
    "theme": "Sayılar ve Nicelikler",
    "color": "#3B82F6",
    "icon": "🔢",
    "title": "Ortak Bölen ve Katlar",
    "description": "Farklı sayıların ortak katlarda ve ortak bölenlerde nasıl buluştuğunu görelim.",
    "kazanim": "MAT.6.1.4. Ortak Kat ve Ortak Bölen",
    "tags": [
      "ortak",
      "bölen",
      "katlar",
      "farklı",
      "sayıların",
      "katlarda",
      "bölenlerde",
      "buluştuğunu",
      "görelim",
      "sayılar"
    ],
    "animations": [
      {
        "label": "Animasyon: Ortak Bölen ve Katlar",
        "file": "MAT_6_1_4_Animasyon.html",
        "url": "apps/6_Sinif/MAT_6_1_4_Animasyon.html",
        "title": "Ortak Bölen ve Katlar",
        "isDraft": false
      }
    ],
    "labs": [
      {
        "label": "İnteraktif Laboratuvar",
        "file": "MAT_6_1_4_Etkinlik.html",
        "url": "apps/6_Sinif/MAT_6_1_4_Etkinlik.html",
        "title": "Kesişim Laboratuvarı",
        "isDraft": false
      }
    ],
    "hasCompletedContent": true,
    "hasDraftPart": false
  },
  {
    "id": "mat-6-1-5",
    "code": "MAT.6.1.5",
    "grade": 6,
    "levelGroup": "Ortaokul",
    "unit": 1,
    "theme": "Sayılar ve Nicelikler",
    "color": "#3B82F6",
    "icon": "🍕",
    "title": "Ondalık Gösterimler",
    "description": "Bir sayıyı parçaladıkça kesirlerin gücüyle yeni basamaklar keşfederiz.",
    "kazanim": "MAT.6.1.5. Ondalık Gösterimlerin Basamakları",
    "tags": [
      "ondalık",
      "gösterimler",
      "sayıyı",
      "parçaladıkça",
      "kesirlerin",
      "gücüyle",
      "yeni",
      "basamaklar",
      "keşfederiz",
      "sayılar"
    ],
    "animations": [
      {
        "label": "Animasyon: Ondalık Gösterimler",
        "file": "MAT_6_1_5_Animasyon.html",
        "url": "apps/6_Sinif/MAT_6_1_5_Animasyon.html",
        "title": "Ondalık Gösterimler",
        "isDraft": false
      }
    ],
    "labs": [
      {
        "label": "İnteraktif Laboratuvar",
        "file": "MAT_6_1_5_Etkinlik.html",
        "url": "apps/6_Sinif/MAT_6_1_5_Etkinlik.html",
        "title": "Ondalık Çözümleme Laboratuvarı",
        "isDraft": false
      }
    ],
    "hasCompletedContent": true,
    "hasDraftPart": false
  },
  {
    "id": "mat-6-1-6",
    "code": "MAT.6.1.6",
    "grade": 6,
    "levelGroup": "Ortaokul",
    "unit": 1,
    "theme": "Sayılar ve Nicelikler",
    "color": "#3B82F6",
    "icon": "🍕",
    "title": "Kesir ve Bölme İlişkisi",
    "description": "Kesir çizgisi aslında bir Bölme İşaretidir. Payı paydaya bölerek ondalık sayılara ulaşırız.",
    "kazanim": "MAT.6.1.6. Kesir ve Bölme İlişkisi",
    "tags": [
      "kesir",
      "bölme",
      "ilişkisi",
      "çizgisi",
      "aslında",
      "işaretidir",
      "payı",
      "paydaya",
      "bölerek",
      "ondalık"
    ],
    "animations": [
      {
        "label": "Animasyon: Kesir ve Bölme İlişkisi",
        "file": "MAT_6_1_6_Animasyon.html",
        "url": "apps/6_Sinif/MAT_6_1_6_Animasyon.html",
        "title": "Kesir ve Bölme İlişkisi",
        "isDraft": false
      }
    ],
    "labs": [
      {
        "label": "İnteraktif Laboratuvar",
        "file": "MAT_6_1_6_Etkinlik.html",
        "url": "apps/6_Sinif/MAT_6_1_6_Etkinlik.html",
        "title": "Devirli Kesir Avcısı",
        "isDraft": false
      }
    ],
    "hasCompletedContent": true,
    "hasDraftPart": false
  },
  {
    "id": "mat-6-1-7",
    "code": "MAT.6.1.7",
    "grade": 6,
    "levelGroup": "Ortaokul",
    "unit": 1,
    "theme": "Sayılar ve Nicelikler",
    "color": "#3B82F6",
    "icon": "🔢",
    "title": "Uzunluk Ölçüleri",
    "description": "Birimler arasında dönüşüm yaparken merdiven basamaklarını kullanırız.",
    "kazanim": "MAT.6.1.7. Uzunluk Ölçme Birimleri",
    "tags": [
      "uzunluk",
      "ölçüleri",
      "birimler",
      "arasında",
      "dönüşüm",
      "yaparken",
      "merdiven",
      "basamaklarını",
      "kullanırız",
      "sayılar"
    ],
    "animations": [
      {
        "label": "Animasyon: Uzunluk Ölçüleri",
        "file": "MAT_6_1_7_Animasyon.html",
        "url": "apps/6_Sinif/MAT_6_1_7_Animasyon.html",
        "title": "Uzunluk Ölçüleri",
        "isDraft": false
      }
    ],
    "labs": [
      {
        "label": "İnteraktif Laboratuvar",
        "file": "MAT_6_1_7_Etkinlik.html",
        "url": "apps/6_Sinif/MAT_6_1_7_Etkinlik.html",
        "title": "Uzunluk Dönüştürücü",
        "isDraft": false
      }
    ],
    "hasCompletedContent": true,
    "hasDraftPart": false
  },
  {
    "id": "mat-6-1-8",
    "code": "MAT.6.1.8",
    "grade": 6,
    "levelGroup": "Ortaokul",
    "unit": 1,
    "theme": "Sayılar ve Nicelikler",
    "color": "#3B82F6",
    "icon": "🍕",
    "title": "Kesir, Ondalık ve Yüzde",
    "description": "Günlük hayatta karşılaştığımız Kesirler, Ondalık sayılar ve Yüzdeler aslında aynı şeydir!",
    "kazanim": "MAT.6.1.8. Kesir, Ondalık ve Yüzde Problemleri",
    "tags": [
      "kesir",
      "ondalık",
      "yüzde",
      "günlük",
      "hayatta",
      "karşılaştığımız",
      "kesirler",
      "sayılar",
      "yüzdeler",
      "aslında"
    ],
    "animations": [
      {
        "label": "Animasyon: Kesir, Ondalık ve Yüzde",
        "file": "MAT_6_1_8_Animasyon.html",
        "url": "apps/6_Sinif/MAT_6_1_8_Animasyon.html",
        "title": "Kesir, Ondalık ve Yüzde",
        "isDraft": false
      }
    ],
    "labs": [
      {
        "label": "İnteraktif Laboratuvar",
        "file": "MAT_6_1_8_Etkinlik.html",
        "url": "apps/6_Sinif/MAT_6_1_8_Etkinlik.html",
        "title": "Problem Çözme Fabrikası",
        "isDraft": false
      }
    ],
    "hasCompletedContent": true,
    "hasDraftPart": false
  },
  {
    "id": "mat-6-2-1",
    "code": "MAT.6.2.1",
    "grade": 6,
    "levelGroup": "Ortaokul",
    "unit": 2,
    "theme": "İşlemlerle Cebirsel Düşünme",
    "color": "#F59E0B",
    "icon": "⚖️",
    "title": "Cebirsel İfadeler",
    "description": "Bazen matematikte bir sayıyı tam olarak bilemeyiz. O zaman imdadımıza Değişkenler (Harfler) yetişir!",
    "kazanim": "MAT.6.2.1. Cebirsel İfadeler",
    "tags": [
      "cebirsel",
      "ifadeler",
      "bazen",
      "matematikte",
      "sayıyı",
      "tam",
      "olarak",
      "bilemeyiz",
      "zaman",
      "imdadımıza"
    ],
    "animations": [
      {
        "label": "Animasyon: Cebirsel İfadeler",
        "file": "MAT_6_2_1_Animasyon.html",
        "url": "apps/6_Sinif/MAT_6_2_1_Animasyon.html",
        "title": "Cebirsel İfadeler",
        "isDraft": false
      }
    ],
    "labs": [
      {
        "label": "İnteraktif Laboratuvar",
        "file": "MAT_6_2_1_Etkinlik.html",
        "url": "apps/6_Sinif/MAT_6_2_1_Etkinlik.html",
        "title": "Cebirsel Çevirmen",
        "isDraft": false
      }
    ],
    "hasCompletedContent": true,
    "hasDraftPart": false
  },
  {
    "id": "mat-6-2-2",
    "code": "MAT.6.2.2",
    "grade": 6,
    "levelGroup": "Ortaokul",
    "unit": 2,
    "theme": "İşlemlerle Cebirsel Düşünme",
    "color": "#F59E0B",
    "icon": "⚖️",
    "title": "Örüntülerin Dili",
    "description": "Şekiller veya sayılar belirli bir kurala göre artar. Biz buna Cebirsel Kural (Genel Terim) diyoruz.",
    "kazanim": "MAT.6.2.2. Örüntülerin Dili",
    "tags": [
      "örüntülerin",
      "dili",
      "şekiller",
      "veya",
      "sayılar",
      "belirli",
      "kurala",
      "artar",
      "biz",
      "buna"
    ],
    "animations": [
      {
        "label": "Animasyon: Örüntülerin Dili",
        "file": "MAT_6_2_2_Animasyon.html",
        "url": "apps/6_Sinif/MAT_6_2_2_Animasyon.html",
        "title": "Örüntülerin Dili",
        "isDraft": false
      }
    ],
    "labs": [
      {
        "label": "İnteraktif Laboratuvar",
        "file": "MAT_6_2_2_Etkinlik.html",
        "url": "apps/6_Sinif/MAT_6_2_2_Etkinlik.html",
        "title": "Örüntü Dedektifi",
        "isDraft": false
      }
    ],
    "hasCompletedContent": true,
    "hasDraftPart": false
  },
  {
    "id": "mat-6-2-3",
    "code": "MAT.6.2.3",
    "grade": 6,
    "levelGroup": "Ortaokul",
    "unit": 2,
    "theme": "İşlemlerle Cebirsel Düşünme",
    "color": "#F59E0B",
    "icon": "⚙️",
    "title": "Algoritma ve Cebir",
    "description": "Cebirsel ifadeler, adım adım işleyen bir makine bandı (algoritma) gibidir.",
    "kazanim": "MAT.6.2.3. Cebirsel Algoritmalar",
    "tags": [
      "algoritma",
      "cebir",
      "cebirsel",
      "ifadeler",
      "adım",
      "işleyen",
      "makine",
      "bandı",
      "gibidir",
      "işlemlerle"
    ],
    "animations": [
      {
        "label": "Animasyon: Algoritma ve Cebir",
        "file": "MAT_6_2_3_Animasyon.html",
        "url": "apps/6_Sinif/MAT_6_2_3_Animasyon.html",
        "title": "Algoritma ve Cebir",
        "isDraft": false
      }
    ],
    "labs": [
      {
        "label": "İnteraktif Laboratuvar",
        "file": "MAT_6_2_3_Etkinlik.html",
        "url": "apps/6_Sinif/MAT_6_2_3_Etkinlik.html",
        "title": "Algoritma Fabrikası",
        "isDraft": false
      }
    ],
    "hasCompletedContent": true,
    "hasDraftPart": false
  },
  {
    "id": "mat-6-3-1",
    "code": "MAT.6.3.1",
    "grade": 6,
    "levelGroup": "Ortaokul",
    "unit": 3,
    "theme": "Geometrik Şekiller",
    "color": "#8B5CF6",
    "icon": "📐",
    "title": "Paralel Doğrular ve Kesen",
    "description": "İki paralel doğruyu kesen bir çizgi, 8 adet açı oluşturur.",
    "kazanim": "MAT.6.3.1. Paralel Doğrular ve Kesen",
    "tags": [
      "paralel",
      "doğrular",
      "kesen",
      "iki",
      "doğruyu",
      "çizgi",
      "adet",
      "açı",
      "oluşturur",
      "geometrik"
    ],
    "animations": [
      {
        "label": "Animasyon: Paralel Doğrular ve Kesen",
        "file": "MAT_6_3_1_Animasyon.html",
        "url": "apps/6_Sinif/MAT_6_3_1_Animasyon.html",
        "title": "Paralel Doğrular ve Kesen",
        "isDraft": false
      }
    ],
    "labs": [
      {
        "label": "İnteraktif Laboratuvar",
        "file": "MAT_6_3_1_Etkinlik.html",
        "url": "apps/6_Sinif/MAT_6_3_1_Etkinlik.html",
        "title": "Açı Avcısı",
        "isDraft": false
      }
    ],
    "hasCompletedContent": true,
    "hasDraftPart": false
  },
  {
    "id": "mat-6-3-2",
    "code": "MAT.6.3.2",
    "grade": 6,
    "levelGroup": "Ortaokul",
    "unit": 3,
    "theme": "Geometrik Şekiller",
    "color": "#8B5CF6",
    "icon": "📐",
    "title": "Paralellerin Arasındaki Şekiller",
    "description": "İki paralel doğruyu, iki farklı kesen kestiğinde neler olur? İzleyelim.",
    "kazanim": "MAT.6.3.2. Paralellerin Arasındaki Şekiller",
    "tags": [
      "paralellerin",
      "arasındaki",
      "şekiller",
      "iki",
      "paralel",
      "doğruyu",
      "farklı",
      "kesen",
      "kestiğinde",
      "neler"
    ],
    "animations": [
      {
        "label": "Animasyon: Paralellerin Arasındaki Şekiller",
        "file": "MAT_6_3_2_Animasyon.html",
        "url": "apps/6_Sinif/MAT_6_3_2_Animasyon.html",
        "title": "Paralellerin Arasındaki Şekiller",
        "isDraft": false
      }
    ],
    "labs": [
      {
        "label": "İnteraktif Laboratuvar",
        "file": "MAT_6_3_2_Etkinlik.html",
        "url": "apps/6_Sinif/MAT_6_3_2_Etkinlik.html",
        "title": "Şekil Laboratuvarı",
        "isDraft": false
      }
    ],
    "hasCompletedContent": true,
    "hasDraftPart": false
  },
  {
    "id": "mat-6-3-3",
    "code": "MAT.6.3.3",
    "grade": 6,
    "levelGroup": "Ortaokul",
    "unit": 3,
    "theme": "Geometrik Şekiller",
    "color": "#8B5CF6",
    "icon": "🔢",
    "title": "Köşegenlerin Sırrı",
    "description": "Birbirini tam ortadan bölen iki çubuk (köşegen), dörtgenlerin iskeletidir.",
    "kazanim": "MAT.6.3.3. Köşegenlerin Sırrı",
    "tags": [
      "köşegenlerin",
      "sırrı",
      "birbirini",
      "tam",
      "ortadan",
      "bölen",
      "iki",
      "çubuk",
      "köşegen",
      "dörtgenlerin"
    ],
    "animations": [
      {
        "label": "Animasyon: Köşegenlerin Sırrı",
        "file": "MAT_6_3_3_Animasyon.html",
        "url": "apps/6_Sinif/MAT_6_3_3_Animasyon.html",
        "title": "Köşegenlerin Sırrı",
        "isDraft": false
      }
    ],
    "labs": [
      {
        "label": "İnteraktif Laboratuvar",
        "file": "MAT_6_3_3_Etkinlik.html",
        "url": "apps/6_Sinif/MAT_6_3_3_Etkinlik.html",
        "title": "Köşegen Sihirbazı",
        "isDraft": false
      }
    ],
    "hasCompletedContent": true,
    "hasDraftPart": false
  },
  {
    "id": "mat-6-3-4",
    "code": "MAT.6.3.4",
    "grade": 6,
    "levelGroup": "Ortaokul",
    "unit": 3,
    "theme": "Geometrik Şekiller",
    "color": "#8B5CF6",
    "icon": "📐",
    "title": "Açıların Yolculuğu",
    "description": "Bir problemi çözerken şekillerin özellikleri bizim dedektif ipuçlarımızdır.",
    "kazanim": "MAT.6.3.4. Açıların Yolculuğu",
    "tags": [
      "açıların",
      "yolculuğu",
      "problemi",
      "çözerken",
      "şekillerin",
      "özellikleri",
      "bizim",
      "dedektif",
      "ipuçlarımızdır",
      "geometrik"
    ],
    "animations": [
      {
        "label": "Animasyon: Açıların Yolculuğu",
        "file": "MAT_6_3_4_Animasyon.html",
        "url": "apps/6_Sinif/MAT_6_3_4_Animasyon.html",
        "title": "Açıların Yolculuğu",
        "isDraft": false
      }
    ],
    "labs": [
      {
        "label": "İnteraktif Laboratuvar",
        "file": "MAT_6_3_4_Etkinlik.html",
        "url": "apps/6_Sinif/MAT_6_3_4_Etkinlik.html",
        "title": "Problem Çözme Görevleri",
        "isDraft": false
      }
    ],
    "hasCompletedContent": true,
    "hasDraftPart": false
  },
  {
    "id": "mat-6-4-1",
    "code": "MAT.6.4.1",
    "grade": 6,
    "levelGroup": "Ortaokul",
    "unit": 4,
    "theme": "Geometrik Nicelikler",
    "color": "#F43F5E",
    "icon": "📏",
    "title": "Alan Ölçüleri",
    "description": "Uzunluk ölçüleri 10'ar 10'ar değişirken, alan ölçüleri neden 100'er 100'er değişir? Birlikte keşfedelim.",
    "kazanim": "MAT.6.4.1. Alan Ölçüleri ve 100 Katı Kuralı",
    "tags": [
      "alan",
      "ölçüleri",
      "uzunluk",
      "değişirken",
      "neden",
      "100",
      "değişir",
      "birlikte",
      "keşfedelim",
      "geometrik"
    ],
    "animations": [
      {
        "label": "Animasyon: Alan Ölçüleri",
        "file": "MAT_6_4_1_Animasyon.html",
        "url": "apps/6_Sinif/MAT_6_4_1_Animasyon.html",
        "title": "Alan Ölçüleri",
        "isDraft": false
      }
    ],
    "labs": [
      {
        "label": "İnteraktif Laboratuvar",
        "file": "MAT_6_4_1_Etkinlik.html",
        "url": "apps/6_Sinif/MAT_6_4_1_Etkinlik.html",
        "title": "Alan Dönüşüm Makinesi",
        "isDraft": false
      }
    ],
    "hasCompletedContent": true,
    "hasDraftPart": false
  },
  {
    "id": "mat-6-4-2",
    "code": "MAT.6.4.2",
    "grade": 6,
    "levelGroup": "Ortaokul",
    "unit": 4,
    "theme": "Geometrik Nicelikler",
    "color": "#F43F5E",
    "icon": "📏",
    "title": "Alan Formüllerinin Sırrı",
    "description": "Bütün alan formülleri aslında bir yapboz gibi Dikdörtgen 'den türetilmiştir.",
    "kazanim": "MAT.6.4.2. Alan Formüllerinin Sırrı",
    "tags": [
      "alan",
      "formüllerinin",
      "sırrı",
      "bütün",
      "formülleri",
      "aslında",
      "yapboz",
      "gibi",
      "dikdörtgen",
      "den"
    ],
    "animations": [
      {
        "label": "Animasyon: Alan Formüllerinin Sırrı",
        "file": "MAT_6_4_2_Animasyon.html",
        "url": "apps/6_Sinif/MAT_6_4_2_Animasyon.html",
        "title": "Alan Formüllerinin Sırrı",
        "isDraft": false
      }
    ],
    "labs": [
      {
        "label": "İnteraktif Laboratuvar",
        "file": "MAT_6_4_2_Etkinlik.html",
        "url": "apps/6_Sinif/MAT_6_4_2_Etkinlik.html",
        "title": "Alan Hesaplama Laboratuvarı",
        "isDraft": false
      }
    ],
    "hasCompletedContent": true,
    "hasDraftPart": false
  },
  {
    "id": "mat-6-4-3",
    "code": "MAT.6.4.3",
    "grade": 6,
    "levelGroup": "Ortaokul",
    "unit": 4,
    "theme": "Geometrik Nicelikler",
    "color": "#F43F5E",
    "icon": "📏",
    "title": "Gerçek Hayatta Alanlar",
    "description": "Evimizin bahçesi karmaşık bir şekil. Çim ekeceğiz, metrekaresi 50 TL . Ne kadar öderiz?",
    "kazanim": "MAT.6.4.3. Gerçek Hayatta Alanlar",
    "tags": [
      "gerçek",
      "hayatta",
      "alanlar",
      "evimizin",
      "bahçesi",
      "karmaşık",
      "şekil",
      "çim",
      "ekeceğiz",
      "metrekaresi"
    ],
    "animations": [
      {
        "label": "Animasyon: Gerçek Hayatta Alanlar",
        "file": "MAT_6_4_3_Animasyon.html",
        "url": "apps/6_Sinif/MAT_6_4_3_Animasyon.html",
        "title": "Gerçek Hayatta Alanlar",
        "isDraft": false
      }
    ],
    "labs": [
      {
        "label": "İnteraktif Laboratuvar",
        "file": "MAT_6_4_3_Etkinlik.html",
        "url": "apps/6_Sinif/MAT_6_4_3_Etkinlik.html",
        "title": "Mimarlık Ofisi",
        "isDraft": false
      }
    ],
    "hasCompletedContent": true,
    "hasDraftPart": false
  },
  {
    "id": "mat-6-4-4",
    "code": "MAT.6.4.4",
    "grade": 6,
    "levelGroup": "Ortaokul",
    "unit": 4,
    "theme": "Geometrik Nicelikler",
    "color": "#F43F5E",
    "icon": "⭕",
    "title": "Pi'nin Keşfi",
    "description": "Herhangi bir çemberin uzunluğu, acaba çapının kaç katıdır? Yuvarlayıp görelim.",
    "kazanim": "MAT.6.4.4. Pi'nin Keşfi",
    "tags": [
      "nin",
      "keşfi",
      "herhangi",
      "çemberin",
      "uzunluğu",
      "acaba",
      "çapının",
      "kaç",
      "katıdır",
      "yuvarlayıp"
    ],
    "animations": [
      {
        "label": "Animasyon: Pi'nin Keşfi",
        "file": "MAT_6_4_4_Animasyon.html",
        "url": "apps/6_Sinif/MAT_6_4_4_Animasyon.html",
        "title": "Pi'nin Keşfi",
        "isDraft": false
      }
    ],
    "labs": [
      {
        "label": "İnteraktif Laboratuvar",
        "file": "MAT_6_4_4_Etkinlik.html",
        "url": "apps/6_Sinif/MAT_6_4_4_Etkinlik.html",
        "title": "Çember Laboratuvarı",
        "isDraft": false
      }
    ],
    "hasCompletedContent": true,
    "hasDraftPart": false
  },
  {
    "id": "mat-6-4-5",
    "code": "MAT.6.4.5",
    "grade": 6,
    "levelGroup": "Ortaokul",
    "unit": 4,
    "theme": "Geometrik Nicelikler",
    "color": "#F43F5E",
    "icon": "⭕",
    "title": "Çember Çevre Problemi",
    "description": "Yarıçapı 30 cm olan bir bisiklet tekerleği 50 tam tur döndüğünde kaç metre yol alır? (π = 3 alınız)",
    "kazanim": "MAT.6.4.5. Çember Problemleri",
    "tags": [
      "çember",
      "çevre",
      "problemi",
      "yarıçapı",
      "bisiklet",
      "tekerleği",
      "tam",
      "tur",
      "döndüğünde",
      "kaç"
    ],
    "animations": [
      {
        "label": "Animasyon: Çember Çevre Problemi",
        "file": "MAT_6_4_5_Animasyon.html",
        "url": "apps/6_Sinif/MAT_6_4_5_Animasyon.html",
        "title": "Çember Çevre Problemi",
        "isDraft": false
      }
    ],
    "labs": [
      {
        "label": "İnteraktif Laboratuvar",
        "file": "MAT_6_4_5_Etkinlik.html",
        "url": "apps/6_Sinif/MAT_6_4_5_Etkinlik.html",
        "title": "Çember Problem Çözücü",
        "isDraft": false
      }
    ],
    "hasCompletedContent": true,
    "hasDraftPart": false
  },
  {
    "id": "mat-6-4-6",
    "code": "MAT.6.4.6",
    "grade": 6,
    "levelGroup": "Ortaokul",
    "unit": 4,
    "theme": "Geometrik Nicelikler",
    "color": "#F43F5E",
    "icon": "⭕",
    "title": "Açı ve Yay Uzunluğu",
    "description": "Bir çemberin tamamı 360 derecedir. Peki bir dilimin kenar (yay) uzunluğu neye bağlıdır?",
    "kazanim": "MAT.6.4.6. Açı ve Yay Uzunluğu",
    "tags": [
      "açı",
      "yay",
      "uzunluğu",
      "çemberin",
      "tamamı",
      "360",
      "derecedir",
      "peki",
      "dilimin",
      "kenar"
    ],
    "animations": [
      {
        "label": "Animasyon: Açı ve Yay Uzunluğu",
        "file": "MAT_6_4_6_Animasyon.html",
        "url": "apps/6_Sinif/MAT_6_4_6_Animasyon.html",
        "title": "Açı ve Yay Uzunluğu",
        "isDraft": false
      }
    ],
    "labs": [
      {
        "label": "İnteraktif Laboratuvar",
        "file": "MAT_6_4_6_Etkinlik.html",
        "url": "apps/6_Sinif/MAT_6_4_6_Etkinlik.html",
        "title": "Yay Laboratuvarı",
        "isDraft": false
      }
    ],
    "hasCompletedContent": true,
    "hasDraftPart": false
  },
  {
    "id": "mat-6-5-1",
    "code": "MAT.6.5.1",
    "grade": 6,
    "levelGroup": "Ortaokul",
    "unit": 5,
    "theme": "İstatistiksel Araştırma Süreci",
    "color": "#06B6D4",
    "icon": "📊",
    "title": "İstatistiğin Kalbi",
    "description": "Bir veri grubunu tek bir sayıyla anlatmak istesek hangisini seçerdik?",
    "kazanim": "MAT.6.5.1. Merkezî Eğilim Ölçüleri",
    "tags": [
      "istatistiğin",
      "kalbi",
      "veri",
      "grubunu",
      "tek",
      "sayıyla",
      "anlatmak",
      "istesek",
      "hangisini",
      "seçerdik"
    ],
    "animations": [
      {
        "label": "Animasyon: İstatistiğin Kalbi",
        "file": "MAT_6_5_1_Animasyon.html",
        "url": "apps/6_Sinif/MAT_6_5_1_Animasyon.html",
        "title": "İstatistiğin Kalbi",
        "isDraft": false
      }
    ],
    "labs": [
      {
        "label": "İnteraktif Laboratuvar",
        "file": "MAT_6_5_1_Etkinlik.html",
        "url": "apps/6_Sinif/MAT_6_5_1_Etkinlik.html",
        "title": "Kök-Yaprak Laboratuvarı",
        "isDraft": false
      }
    ],
    "hasCompletedContent": true,
    "hasDraftPart": false
  },
  {
    "id": "mat-6-5-2",
    "code": "MAT.6.5.2",
    "grade": 6,
    "levelGroup": "Ortaokul",
    "unit": 5,
    "theme": "İstatistiksel Araştırma Süreci",
    "color": "#06B6D4",
    "icon": "📊",
    "title": "Yanıltıcı İstatistikler",
    "description": "Televizyondaki bu reklam grafiğine iyi bakın. Sizce A Markası gerçekten B'den kat kat daha mı iyi?",
    "kazanim": "MAT.6.5.2. İstatistikleri Eleştirme",
    "tags": [
      "yanıltıcı",
      "istatistikler",
      "televizyondaki",
      "reklam",
      "grafiğine",
      "iyi",
      "bakın",
      "sizce",
      "markası",
      "gerçekten"
    ],
    "animations": [
      {
        "label": "Animasyon: Yanıltıcı İstatistikler",
        "file": "MAT_6_5_2_Animasyon.html",
        "url": "apps/6_Sinif/MAT_6_5_2_Animasyon.html",
        "title": "Yanıltıcı İstatistikler",
        "isDraft": false
      }
    ],
    "labs": [
      {
        "label": "İnteraktif Laboratuvar",
        "file": "MAT_6_5_2_Etkinlik.html",
        "url": "apps/6_Sinif/MAT_6_5_2_Etkinlik.html",
        "title": "Haber Masası - İstatistikleri Eleştir",
        "isDraft": false
      }
    ],
    "hasCompletedContent": true,
    "hasDraftPart": false
  },
  {
    "id": "mat-6-6-1",
    "code": "MAT.6.6.1",
    "grade": 6,
    "levelGroup": "Ortaokul",
    "unit": 6,
    "theme": "Veriden Olasılığa",
    "color": "#10B981",
    "icon": "📊",
    "title": "Büyük Sayılar Kanunu",
    "description": "Bir madeni parayı havaya attığımızda Yazı gelme ihtimali teorik olarak %50'dir (Yarım ihtimal).",
    "kazanim": "MAT.6.6.1. Deneysel Olasılık ve Büyük Sayılar Kanunu",
    "tags": [
      "büyük",
      "sayılar",
      "kanunu",
      "madeni",
      "parayı",
      "havaya",
      "attığımızda",
      "yazı",
      "gelme",
      "ihtimali"
    ],
    "animations": [
      {
        "label": "Animasyon: Büyük Sayılar Kanunu",
        "file": "MAT_6_6_1_Animasyon.html",
        "url": "apps/6_Sinif/MAT_6_6_1_Animasyon.html",
        "title": "Büyük Sayılar Kanunu",
        "isDraft": false
      }
    ],
    "labs": [
      {
        "label": "İnteraktif Laboratuvar",
        "file": "MAT_6_6_1_Etkinlik.html",
        "url": "apps/6_Sinif/MAT_6_6_1_Etkinlik.html",
        "title": "Olasılık Simülatörü",
        "isDraft": false
      }
    ],
    "hasCompletedContent": true,
    "hasDraftPart": false
  },
  {
    "id": "mat-7-1-1",
    "code": "MAT.7.1.1",
    "grade": 7,
    "levelGroup": "Ortaokul",
    "unit": 1,
    "theme": "Sayılar ve Nicelikler",
    "color": "#3B82F6",
    "icon": "🔢",
    "title": "Sayı Kümelerinin Evrimi ve Mutlak Değer",
    "description": "İnsanlar önce saymayı öğrendi, sonra negatiflere ihtiyaç duydu, en sonunda da parçaları ifade etmek için rasyonel sayıları keşfetti.",
    "kazanim": "MAT.7.1.1. Tam Sayıların Rasyonel Sayılara Genişlemesi ve Mutlak Değer",
    "tags": [
      "sayı",
      "kümelerinin",
      "evrimi",
      "mutlak",
      "değer",
      "insanlar",
      "önce",
      "saymayı",
      "öğrendi",
      "sonra"
    ],
    "animations": [
      {
        "label": "Animasyon: Sayı Kümelerinin Evrimi ve Mutlak Değer",
        "file": "MAT_7_1_1_Animasyon.html",
        "url": "apps/7_Sinif/MAT_7_1_1_Animasyon.html",
        "title": "Sayı Kümelerinin Evrimi ve Mutlak Değer",
        "isDraft": false
      }
    ],
    "labs": [
      {
        "label": "İnteraktif Laboratuvar",
        "file": "MAT_7_1_1_Etkinlik.html",
        "url": "apps/7_Sinif/MAT_7_1_1_Etkinlik.html",
        "title": "Sayı Kümeleri Laboratuvarı",
        "isDraft": false
      }
    ],
    "hasCompletedContent": true,
    "hasDraftPart": false
  },
  {
    "id": "mat-7-1-2",
    "code": "MAT.7.1.2",
    "grade": 7,
    "levelGroup": "Ortaokul",
    "unit": 1,
    "theme": "Sayılar ve Nicelikler",
    "color": "#3B82F6",
    "icon": "🍕",
    "title": "Devirli Ondalık Makinesi",
    "description": "Kalan sıfır olmadığında sayıların nasıl tekrar ettiğini (devrettiğini) izleyin.",
    "kazanim": "MAT.7.1.2. Devirli Ondalık Gösterim (Animasyon)",
    "tags": [
      "devirli",
      "ondalık",
      "makinesi",
      "kalan",
      "sıfır",
      "olmadığında",
      "sayıların",
      "tekrar",
      "ettiğini",
      "devrettiğini"
    ],
    "animations": [
      {
        "label": "Animasyon: Devirli Ondalık Makinesi",
        "file": "MAT_7_1_2_Animasyon.html",
        "url": "apps/7_Sinif/MAT_7_1_2_Animasyon.html",
        "title": "Devirli Ondalık Makinesi",
        "isDraft": false
      }
    ],
    "labs": [
      {
        "label": "İnteraktif Laboratuvar",
        "file": "MAT_7_1_2_Etkinlik.html",
        "url": "apps/7_Sinif/MAT_7_1_2_Etkinlik.html",
        "title": "Devirli Ondalık Sayı Makinesi",
        "isDraft": false
      }
    ],
    "hasCompletedContent": true,
    "hasDraftPart": false
  },
  {
    "id": "mat-7-1-3",
    "code": "MAT.7.1.3",
    "grade": 7,
    "levelGroup": "Ortaokul",
    "unit": 1,
    "theme": "Sayılar ve Nicelikler",
    "color": "#3B82F6",
    "icon": "🔢",
    "title": "Sonsuzluğa Yakınlaştırma",
    "description": "Herhangi iki rasyonel sayı arasında daima başka bir rasyonel sayı bulunduğunun kanıtı.",
    "kazanim": "MAT.7.1.3. Sonsuzluğa Yakınlaştırma (Animasyon)",
    "tags": [
      "sonsuzluğa",
      "yakınlaştırma",
      "herhangi",
      "iki",
      "rasyonel",
      "sayı",
      "arasında",
      "daima",
      "başka",
      "bulunduğunun"
    ],
    "animations": [
      {
        "label": "Animasyon: Sonsuzluğa Yakınlaştırma",
        "file": "MAT_7_1_3_Animasyon.html",
        "url": "apps/7_Sinif/MAT_7_1_3_Animasyon.html",
        "title": "Sonsuzluğa Yakınlaştırma",
        "isDraft": false
      }
    ],
    "labs": [
      {
        "label": "İnteraktif Laboratuvar",
        "file": "MAT_7_1_3_Etkinlik.html",
        "url": "apps/7_Sinif/MAT_7_1_3_Etkinlik.html",
        "title": "Sonsuzluğa Yakınlaştırma (Sayı Doğrusu)",
        "isDraft": false
      }
    ],
    "hasCompletedContent": true,
    "hasDraftPart": false
  },
  {
    "id": "mat-7-1-4",
    "code": "MAT.7.1.4",
    "grade": 7,
    "levelGroup": "Ortaokul",
    "unit": 1,
    "theme": "Sayılar ve Nicelikler",
    "color": "#3B82F6",
    "icon": "🔢",
    "title": "Çok Adımlı İşlemler",
    "description": "İşlem önceliğine uyarak otomatik çözülen karmaşık kesri izleyin.",
    "kazanim": "MAT.7.1.4. Çok Adımlı İşlemler (Animasyon)",
    "tags": [
      "çok",
      "adımlı",
      "işlemler",
      "işlem",
      "önceliğine",
      "uyarak",
      "otomatik",
      "çözülen",
      "karmaşık",
      "kesri"
    ],
    "animations": [
      {
        "label": "Animasyon: Çok Adımlı İşlemler",
        "file": "MAT_7_1_4_Animasyon.html",
        "url": "apps/7_Sinif/MAT_7_1_4_Animasyon.html",
        "title": "Çok Adımlı İşlemler",
        "isDraft": false
      }
    ],
    "labs": [
      {
        "label": "İnteraktif Laboratuvar",
        "file": "MAT_7_1_4_Etkinlik.html",
        "url": "apps/7_Sinif/MAT_7_1_4_Etkinlik.html",
        "title": "Rasyonel Sayılarda Çok Adımlı İşlemler",
        "isDraft": false
      }
    ],
    "hasCompletedContent": true,
    "hasDraftPart": false
  },
  {
    "id": "mat-7-2-1",
    "code": "MAT.7.2.1",
    "grade": 7,
    "levelGroup": "Ortaokul",
    "unit": 2,
    "theme": "İşlemlerle Cebirsel Düşünme",
    "color": "#10B981",
    "icon": "⚖️",
    "title": "Cebirsel İfade Dağılma Özelliği",
    "description": "Parantez dışındaki sayının, parantez içindeki her bir terimle nasıl çarpıldığını izleyin.",
    "kazanim": "MAT.7.2.1. Cebirsel İfadelerde Dağılma Özelliği",
    "tags": [
      "cebirsel",
      "ifade",
      "dağılma",
      "özelliği",
      "parantez",
      "dışındaki",
      "sayının",
      "içindeki",
      "her",
      "terimle"
    ],
    "animations": [
      {
        "label": "Animasyon: Cebirsel İfade Dağılma Özelliği",
        "file": "MAT_7_2_1_Animasyon.html",
        "url": "apps/7_Sinif/MAT_7_2_1_Animasyon.html",
        "title": "Cebirsel İfade Dağılma Özelliği",
        "isDraft": false
      }
    ],
    "labs": [
      {
        "label": "İnteraktif Laboratuvar",
        "file": "MAT_7_2_1_Etkinlik.html",
        "url": "apps/7_Sinif/MAT_7_2_1_Etkinlik.html",
        "title": "Cebirsel Karo Laboratuvarı",
        "isDraft": false
      }
    ],
    "hasCompletedContent": true,
    "hasDraftPart": false
  },
  {
    "id": "mat-7-2-2",
    "code": "MAT.7.2.2",
    "grade": 7,
    "levelGroup": "Ortaokul",
    "unit": 2,
    "theme": "İşlemlerle Cebirsel Düşünme",
    "color": "#10B981",
    "icon": "⚖️",
    "title": "Denge Terazisi Denklem Çözümü",
    "description": "Eşitliği koruyarak denklemin nasıl adım adım çözüldüğünü izleyin.",
    "kazanim": "MAT.7.2.2. Denge Terazisi ile Denklem (Animasyon)",
    "tags": [
      "denge",
      "terazisi",
      "denklem",
      "çözümü",
      "eşitliği",
      "koruyarak",
      "denklemin",
      "adım",
      "çözüldüğünü",
      "izleyin"
    ],
    "animations": [
      {
        "label": "Animasyon: Denge Terazisi Denklem Çözümü",
        "file": "MAT_7_2_2_Animasyon.html",
        "url": "apps/7_Sinif/MAT_7_2_2_Animasyon.html",
        "title": "Denge Terazisi Denklem Çözümü",
        "isDraft": false
      }
    ],
    "labs": [
      {
        "label": "İnteraktif Laboratuvar",
        "file": "MAT_7_2_2_Etkinlik.html",
        "url": "apps/7_Sinif/MAT_7_2_2_Etkinlik.html",
        "title": "Terazi ile Denklem Çözme",
        "isDraft": false
      }
    ],
    "hasCompletedContent": true,
    "hasDraftPart": false
  },
  {
    "id": "mat-7-2-3",
    "code": "MAT.7.2.3",
    "grade": 7,
    "levelGroup": "Ortaokul",
    "unit": 2,
    "theme": "İşlemlerle Cebirsel Düşünme",
    "color": "#10B981",
    "icon": "⚖️",
    "title": "Tek + Tek = Çift İspatı",
    "description": "\"İki tek sayının toplamı her zaman çift sayıdır.\" varsayımını önce görsel noktalarla, ardından cebirsel ifadelerle ispatlayalım.",
    "kazanim": "MAT.7.2.3. Matematiksel İspat Muhakemesi",
    "tags": [
      "tek",
      "çift",
      "ispatı",
      "iki",
      "sayının",
      "toplamı",
      "her",
      "zaman",
      "sayıdır",
      "varsayımını"
    ],
    "animations": [
      {
        "label": "Animasyon: Tek + Tek = Çift İspatı",
        "file": "MAT_7_2_3_Animasyon.html",
        "url": "apps/7_Sinif/MAT_7_2_3_Animasyon.html",
        "title": "Tek + Tek = Çift İspatı",
        "isDraft": false
      }
    ],
    "labs": [],
    "hasCompletedContent": true,
    "hasDraftPart": false
  },
  {
    "id": "mat-7-2-4",
    "code": "MAT.7.2.4",
    "grade": 7,
    "levelGroup": "Ortaokul",
    "unit": 2,
    "theme": "İşlemlerle Cebirsel Düşünme",
    "color": "#10B981",
    "icon": "⚙️",
    "title": "Matematiksel Akış Şeması",
    "description": "Bir denklemin adım adım algoritmasını (Ters işlem mantığı) izleyin.",
    "kazanim": "MAT.7.2.4. Algoritma (Animasyon)",
    "tags": [
      "matematiksel",
      "akış",
      "şeması",
      "denklemin",
      "adım",
      "algoritmasını",
      "ters",
      "işlem",
      "mantığı",
      "izleyin"
    ],
    "animations": [
      {
        "label": "Animasyon: Matematiksel Akış Şeması",
        "file": "MAT_7_2_4_Animasyon.html",
        "url": "apps/7_Sinif/MAT_7_2_4_Animasyon.html",
        "title": "Matematiksel Akış Şeması",
        "isDraft": false
      }
    ],
    "labs": [
      {
        "label": "İnteraktif Laboratuvar",
        "file": "MAT_7_2_4_Etkinlik.html",
        "url": "apps/7_Sinif/MAT_7_2_4_Etkinlik.html",
        "title": "Matematiksel Akış Şeması",
        "isDraft": false
      }
    ],
    "hasCompletedContent": true,
    "hasDraftPart": false
  },
  {
    "id": "mat-7-3-1",
    "code": "MAT.7.3.1",
    "grade": 7,
    "levelGroup": "Ortaokul",
    "unit": 3,
    "theme": "Geometrik Şekiller",
    "color": "#F59E0B",
    "icon": "🪞",
    "title": "Yansıma Dönüşümü",
    "description": "Bir şeklin simetri aynasındaki yansımasının nasıl oluştuğunu ve uzaklıkların nasıl korunduğunu izleyin.",
    "kazanim": "MAT.7.3.1. Şekillerin Yansıma Dönüşümü (Animasyon)",
    "tags": [
      "yansıma",
      "dönüşümü",
      "şeklin",
      "simetri",
      "aynasındaki",
      "yansımasının",
      "oluştuğunu",
      "uzaklıkların",
      "korunduğunu",
      "izleyin"
    ],
    "animations": [
      {
        "label": "Animasyon: Yansıma Dönüşümü",
        "file": "MAT_7_3_1_Animasyon.html",
        "url": "apps/7_Sinif/MAT_7_3_1_Animasyon.html",
        "title": "Yansıma Dönüşümü",
        "isDraft": false
      }
    ],
    "labs": [
      {
        "label": "İnteraktif Laboratuvar",
        "file": "MAT_7_3_1_Etkinlik.html",
        "url": "apps/7_Sinif/MAT_7_3_1_Etkinlik.html",
        "title": "İnteraktif Simetri Çizimi Laboratuvarı",
        "isDraft": false
      }
    ],
    "hasCompletedContent": true,
    "hasDraftPart": false
  },
  {
    "id": "mat-7-3-2",
    "code": "MAT.7.3.2",
    "grade": 7,
    "levelGroup": "Ortaokul",
    "unit": 3,
    "theme": "Geometrik Şekiller",
    "color": "#F59E0B",
    "icon": "📐",
    "title": "Açıortay İnşa",
    "description": "Pergelin kollarını eşit mesafede tutarak bir açının tam ortasından geçen doğrunun nasıl bulunduğunu izleyin.",
    "kazanim": "MAT.7.3.2. Açıortay İnşası (Animasyon)",
    "tags": [
      "açıortay",
      "inşa",
      "pergelin",
      "kollarını",
      "eşit",
      "mesafede",
      "tutarak",
      "açının",
      "tam",
      "ortasından"
    ],
    "animations": [
      {
        "label": "Animasyon: Açıortay İnşa",
        "file": "MAT_7_3_2_Animasyon.html",
        "url": "apps/7_Sinif/MAT_7_3_2_Animasyon.html",
        "title": "Açıortay İnşa",
        "isDraft": false
      }
    ],
    "labs": [
      {
        "label": "İnteraktif Laboratuvar",
        "file": "MAT_7_3_2_Etkinlik.html",
        "url": "apps/7_Sinif/MAT_7_3_2_Etkinlik.html",
        "title": "İnteraktif Orta Dikme İnşası",
        "isDraft": false
      }
    ],
    "hasCompletedContent": true,
    "hasDraftPart": false
  },
  {
    "id": "mat-7-4-1",
    "code": "MAT.7.4.1",
    "grade": 7,
    "levelGroup": "Ortaokul",
    "unit": 4,
    "theme": "Geometrik Nicelikler",
    "color": "#F43F5E",
    "icon": "🧊",
    "title": "3D İz Düşüm",
    "description": "3 Boyutlu yapıya farklı açılardan ışık vurulduğunda 2 boyutlu duvarlarda oluşan görünümleri izleyin.",
    "kazanim": "MAT.7.4.1. Yapılar ve Görünümleri (Animasyon)",
    "tags": [
      "düşüm",
      "boyutlu",
      "yapıya",
      "farklı",
      "açılardan",
      "ışık",
      "vurulduğunda",
      "duvarlarda",
      "oluşan",
      "görünümleri"
    ],
    "animations": [
      {
        "label": "Animasyon: 3D İz Düşüm",
        "file": "MAT_7_4_1_Animasyon.html",
        "url": "apps/7_Sinif/MAT_7_4_1_Animasyon.html",
        "title": "3D İz Düşüm",
        "isDraft": false
      }
    ],
    "labs": [
      {
        "label": "İnteraktif Laboratuvar",
        "file": "MAT_7_4_1_Etkinlik.html",
        "url": "apps/7_Sinif/MAT_7_4_1_Etkinlik.html",
        "title": "Küplerle Yapılar Laboratuvarı",
        "isDraft": false
      }
    ],
    "hasCompletedContent": true,
    "hasDraftPart": false
  },
  {
    "id": "mat-7-4-2",
    "code": "MAT.7.4.2",
    "grade": 7,
    "levelGroup": "Ortaokul",
    "unit": 4,
    "theme": "Geometrik Nicelikler",
    "color": "#F43F5E",
    "icon": "📏",
    "title": "Yüzey Alanı",
    "description": "Kapalı bir prizmanın 6 yüzeye ayrılarak formülün nasıl türetildiğini izleyin.",
    "kazanim": "MAT.7.4.2. Prizma Yüzey Alanı (Animasyon)",
    "tags": [
      "yüzey",
      "alanı",
      "kapalı",
      "prizmanın",
      "yüzeye",
      "ayrılarak",
      "formülün",
      "türetildiğini",
      "izleyin",
      "geometrik"
    ],
    "animations": [
      {
        "label": "Animasyon: Yüzey Alanı",
        "file": "MAT_7_4_2_Animasyon.html",
        "url": "apps/7_Sinif/MAT_7_4_2_Animasyon.html",
        "title": "Yüzey Alanı",
        "isDraft": false
      }
    ],
    "labs": [
      {
        "label": "İnteraktif Laboratuvar",
        "file": "MAT_7_4_2_Etkinlik.html",
        "url": "apps/7_Sinif/MAT_7_4_2_Etkinlik.html",
        "title": "Prizma Açınım Laboratuvarı",
        "isDraft": false
      }
    ],
    "hasCompletedContent": true,
    "hasDraftPart": false
  },
  {
    "id": "mat-7-4-3",
    "code": "MAT.7.4.3",
    "grade": 7,
    "levelGroup": "Ortaokul",
    "unit": 4,
    "theme": "Geometrik Nicelikler",
    "color": "#F43F5E",
    "icon": "🧊",
    "title": "Yağan Küpler",
    "description": "Bir cismin hacminin, o cismi dolduran eş nesnelerin sayısına eşit olduğunu izleyin.",
    "kazanim": "MAT.7.4.3. Eş Nesnelerle Hacim (Animasyon)",
    "tags": [
      "yağan",
      "küpler",
      "cismin",
      "hacminin",
      "cismi",
      "dolduran",
      "nesnelerin",
      "sayısına",
      "eşit",
      "olduğunu"
    ],
    "animations": [
      {
        "label": "Animasyon: Yağan Küpler",
        "file": "MAT_7_4_3_Animasyon.html",
        "url": "apps/7_Sinif/MAT_7_4_3_Animasyon.html",
        "title": "Yağan Küpler",
        "isDraft": false
      }
    ],
    "labs": [
      {
        "label": "İnteraktif Laboratuvar",
        "file": "MAT_7_4_3_Etkinlik.html",
        "url": "apps/7_Sinif/MAT_7_4_3_Etkinlik.html",
        "title": "Hacim Doldurma Laboratuvarı",
        "isDraft": false
      }
    ],
    "hasCompletedContent": true,
    "hasDraftPart": false
  },
  {
    "id": "mat-7-4-4",
    "code": "MAT.7.4.4",
    "grade": 7,
    "levelGroup": "Ortaokul",
    "unit": 4,
    "theme": "Geometrik Nicelikler",
    "color": "#F43F5E",
    "icon": "🧊",
    "title": "Hacim Formülü",
    "description": "Taban alanının yüksekliğe doğru süpürülmesi (integral mantığı) ile hacmin nasıl oluştuğunu izleyin.",
    "kazanim": "MAT.7.4.4. Hacim Bağıntısı (Animasyon)",
    "tags": [
      "hacim",
      "formülü",
      "taban",
      "alanının",
      "yüksekliğe",
      "doğru",
      "süpürülmesi",
      "integral",
      "mantığı",
      "hacmin"
    ],
    "animations": [
      {
        "label": "Animasyon: Hacim Formülü",
        "file": "MAT_7_4_4_Animasyon.html",
        "url": "apps/7_Sinif/MAT_7_4_4_Animasyon.html",
        "title": "Hacim Formülü",
        "isDraft": false
      }
    ],
    "labs": [
      {
        "label": "İnteraktif Laboratuvar",
        "file": "MAT_7_4_4_Etkinlik.html",
        "url": "apps/7_Sinif/MAT_7_4_4_Etkinlik.html",
        "title": "Hacim Bağıntısı Simülatörü",
        "isDraft": false
      }
    ],
    "hasCompletedContent": true,
    "hasDraftPart": false
  },
  {
    "id": "mat-7-4-5",
    "code": "MAT.7.4.5",
    "grade": 7,
    "levelGroup": "Ortaokul",
    "unit": 4,
    "theme": "Geometrik Nicelikler",
    "color": "#F43F5E",
    "icon": "🔢",
    "title": "1 Litre = 1 dm³",
    "description": "1 Litre suyun, her bir ayrıtı 10 cm (1 dm) olan küp şeklinde bir kaba tam olarak sığdığını ispatlayalım.",
    "kazanim": "MAT.7.4.5. Hacim Ölçme Birimleri (Animasyon)",
    "tags": [
      "litre",
      "dm³",
      "suyun",
      "her",
      "ayrıtı",
      "küp",
      "şeklinde",
      "kaba",
      "tam",
      "olarak"
    ],
    "animations": [
      {
        "label": "Animasyon: 1 Litre = 1 dm³",
        "file": "MAT_7_4_5_Animasyon.html",
        "url": "apps/7_Sinif/MAT_7_4_5_Animasyon.html",
        "title": "1 Litre = 1 dm³",
        "isDraft": false
      }
    ],
    "labs": [
      {
        "label": "İnteraktif Laboratuvar",
        "file": "MAT_7_4_5_Etkinlik.html",
        "url": "apps/7_Sinif/MAT_7_4_5_Etkinlik.html",
        "title": "Hacim Birimleri Çevirici",
        "isDraft": false
      }
    ],
    "hasCompletedContent": true,
    "hasDraftPart": false
  },
  {
    "id": "mat-7-4-6",
    "code": "MAT.7.4.6",
    "grade": 7,
    "levelGroup": "Ortaokul",
    "unit": 4,
    "theme": "Geometrik Nicelikler",
    "color": "#F43F5E",
    "icon": "⚙️",
    "title": "Problem Çözme Akış Şeması",
    "description": "Bir hacim probleminin beyinde nasıl aşamalara bölünerek otomatik çözüldüğünü izleyin.",
    "kazanim": "MAT.7.4.6. Yüzey Alanı ve Hacim Problemleri (Animasyon)",
    "tags": [
      "problem",
      "çözme",
      "akış",
      "şeması",
      "hacim",
      "probleminin",
      "beyinde",
      "aşamalara",
      "bölünerek",
      "otomatik"
    ],
    "animations": [
      {
        "label": "Animasyon: Problem Çözme Akış Şeması",
        "file": "MAT_7_4_6_Animasyon.html",
        "url": "apps/7_Sinif/MAT_7_4_6_Animasyon.html",
        "title": "Problem Çözme Akış Şeması",
        "isDraft": false
      }
    ],
    "labs": [
      {
        "label": "İnteraktif Laboratuvar",
        "file": "MAT_7_4_6_Etkinlik.html",
        "url": "apps/7_Sinif/MAT_7_4_6_Etkinlik.html",
        "title": "Problem Çözme Simülasyonu",
        "isDraft": false
      }
    ],
    "hasCompletedContent": true,
    "hasDraftPart": false
  },
  {
    "id": "mat-7-4-7",
    "code": "MAT.7.4.7",
    "grade": 7,
    "levelGroup": "Ortaokul",
    "unit": 4,
    "theme": "Geometrik Nicelikler",
    "color": "#F43F5E",
    "icon": "⭕",
    "title": "Daire Alanı",
    "description": "Çok fazla sayıda dilime ayrılan dairenin nasıl kusursuz bir dikdörtgene dönüştüğünü izleyin.",
    "kazanim": "MAT.7.4.7. Dairenin Alanı (Animasyon)",
    "tags": [
      "daire",
      "alanı",
      "çok",
      "fazla",
      "sayıda",
      "dilime",
      "ayrılan",
      "dairenin",
      "kusursuz",
      "dikdörtgene"
    ],
    "animations": [
      {
        "label": "Animasyon: Daire Alanı",
        "file": "MAT_7_4_7_Animasyon.html",
        "url": "apps/7_Sinif/MAT_7_4_7_Animasyon.html",
        "title": "Daire Alanı",
        "isDraft": false
      }
    ],
    "labs": [
      {
        "label": "İnteraktif Laboratuvar",
        "file": "MAT_7_4_7_Etkinlik.html",
        "url": "apps/7_Sinif/MAT_7_4_7_Etkinlik.html",
        "title": "Dairenin Alanı Laboratuvarı",
        "isDraft": false
      }
    ],
    "hasCompletedContent": true,
    "hasDraftPart": false
  },
  {
    "id": "mat-7-4-8",
    "code": "MAT.7.4.8",
    "grade": 7,
    "levelGroup": "Ortaokul",
    "unit": 4,
    "theme": "Geometrik Nicelikler",
    "color": "#F43F5E",
    "icon": "⭕",
    "title": "Daire Dilimi",
    "description": "Bir silecek gibi hareket eden yarıçapın, açıyı büyüttükçe alanı nasıl doğru orantılı doldurduğunu izleyin.",
    "kazanim": "MAT.7.4.8. Daire Dilimi (Animasyon)",
    "tags": [
      "daire",
      "dilimi",
      "silecek",
      "gibi",
      "hareket",
      "eden",
      "yarıçapın",
      "açıyı",
      "büyüttükçe",
      "alanı"
    ],
    "animations": [
      {
        "label": "Animasyon: Daire Dilimi",
        "file": "MAT_7_4_8_Animasyon.html",
        "url": "apps/7_Sinif/MAT_7_4_8_Animasyon.html",
        "title": "Daire Dilimi",
        "isDraft": false
      }
    ],
    "labs": [
      {
        "label": "İnteraktif Laboratuvar",
        "file": "MAT_7_4_8_Etkinlik.html",
        "url": "apps/7_Sinif/MAT_7_4_8_Etkinlik.html",
        "title": "Daire Dilimi Alanı Laboratuvarı",
        "isDraft": false
      }
    ],
    "hasCompletedContent": true,
    "hasDraftPart": false
  },
  {
    "id": "mat-7-4-9",
    "code": "MAT.7.4.9",
    "grade": 7,
    "levelGroup": "Ortaokul",
    "unit": 4,
    "theme": "Geometrik Nicelikler",
    "color": "#F43F5E",
    "icon": "🔢",
    "title": "Eşkenar Dörtgen",
    "description": "Eşkenar dörtgenin parçalanıp dikdörtgene dönüşmesini ve (e×f)/2 formülünün ispatını izleyin.",
    "kazanim": "MAT.7.4.9. Çokgen Alanları (Animasyon)",
    "tags": [
      "eşkenar",
      "dörtgen",
      "dörtgenin",
      "parçalanıp",
      "dikdörtgene",
      "dönüşmesini",
      "formülünün",
      "ispatını",
      "izleyin",
      "geometrik"
    ],
    "animations": [
      {
        "label": "Animasyon: Eşkenar Dörtgen",
        "file": "MAT_7_4_9_Animasyon.html",
        "url": "apps/7_Sinif/MAT_7_4_9_Animasyon.html",
        "title": "Eşkenar Dörtgen",
        "isDraft": false
      }
    ],
    "labs": [
      {
        "label": "İnteraktif Laboratuvar",
        "file": "MAT_7_4_9_Etkinlik.html",
        "url": "apps/7_Sinif/MAT_7_4_9_Etkinlik.html",
        "title": "Yamuk Kes-Yapıştır Laboratuvarı",
        "isDraft": false
      }
    ],
    "hasCompletedContent": true,
    "hasDraftPart": false
  },
  {
    "id": "mat-7-4-10",
    "code": "MAT.7.4.10",
    "grade": 7,
    "levelGroup": "Ortaokul",
    "unit": 4,
    "theme": "Geometrik Nicelikler",
    "color": "#F43F5E",
    "icon": "⚙️",
    "title": "Problem Akış",
    "description": "İç içe geçmiş şekillerin alanlarının mantıksal olarak nasıl çıkarıldığını izleyin.",
    "kazanim": "MAT.7.4.10. Alan Problemleri (Animasyon)",
    "tags": [
      "problem",
      "akış",
      "içe",
      "geçmiş",
      "şekillerin",
      "alanlarının",
      "mantıksal",
      "olarak",
      "çıkarıldığını",
      "izleyin"
    ],
    "animations": [
      {
        "label": "Animasyon: Problem Akış",
        "file": "MAT_7_4_10_Animasyon.html",
        "url": "apps/7_Sinif/MAT_7_4_10_Animasyon.html",
        "title": "Problem Akış",
        "isDraft": false
      }
    ],
    "labs": [
      {
        "label": "İnteraktif Laboratuvar",
        "file": "MAT_7_4_10_Etkinlik.html",
        "url": "apps/7_Sinif/MAT_7_4_10_Etkinlik.html",
        "title": "Çokgen ve Daire Alan Problemleri",
        "isDraft": false
      }
    ],
    "hasCompletedContent": true,
    "hasDraftPart": false
  },
  {
    "id": "mat-7-5-1",
    "code": "MAT.7.5.1",
    "grade": 7,
    "levelGroup": "Ortaokul",
    "unit": 5,
    "theme": "İstatistiksel Araştırma Süreci",
    "color": "#06B6D4",
    "icon": "📊",
    "title": "Çizgi Grafiği",
    "description": "Zaman içindeki değişimi en iyi \"Çizgi Grafiği\" gösterir.",
    "kazanim": "MAT.7.5.1. Çizgi Grafiği (Animasyon)",
    "tags": [
      "çizgi",
      "grafiği",
      "zaman",
      "içindeki",
      "değişimi",
      "iyi",
      "gösterir",
      "istatistiksel",
      "araştırma",
      "süreci"
    ],
    "animations": [
      {
        "label": "Animasyon: Çizgi Grafiği",
        "file": "MAT_7_5_1_Animasyon.html",
        "url": "apps/7_Sinif/MAT_7_5_1_Animasyon.html",
        "title": "Çizgi Grafiği",
        "isDraft": false
      }
    ],
    "labs": [
      {
        "label": "İnteraktif Laboratuvar",
        "file": "MAT_7_5_1_Etkinlik.html",
        "url": "apps/7_Sinif/MAT_7_5_1_Etkinlik.html",
        "title": "İnteraktif Çizgi Grafiği Laboratuvarı",
        "isDraft": false
      }
    ],
    "hasCompletedContent": true,
    "hasDraftPart": false
  },
  {
    "id": "mat-7-5-2",
    "code": "MAT.7.5.2",
    "grade": 7,
    "levelGroup": "Ortaokul",
    "unit": 5,
    "theme": "İstatistiksel Araştırma Süreci",
    "color": "#06B6D4",
    "icon": "📊",
    "title": "Daire Grafiği İspat",
    "description": "Düz bir çubuk grafiğinin bükülerek bir daire grafiğine dönüşmesini izleyin.",
    "kazanim": "MAT.7.5.2. Daire Grafiği (Animasyon)",
    "tags": [
      "daire",
      "grafiği",
      "ispat",
      "düz",
      "çubuk",
      "grafiğinin",
      "bükülerek",
      "grafiğine",
      "dönüşmesini",
      "izleyin"
    ],
    "animations": [
      {
        "label": "Animasyon: Daire Grafiği İspat",
        "file": "MAT_7_5_2_Animasyon.html",
        "url": "apps/7_Sinif/MAT_7_5_2_Animasyon.html",
        "title": "Daire Grafiği İspat",
        "isDraft": false
      }
    ],
    "labs": [
      {
        "label": "İnteraktif Laboratuvar",
        "file": "MAT_7_5_2_Etkinlik.html",
        "url": "apps/7_Sinif/MAT_7_5_2_Etkinlik.html",
        "title": "Daire Grafiği Oluşturucu",
        "isDraft": false
      }
    ],
    "hasCompletedContent": true,
    "hasDraftPart": false
  },
  {
    "id": "mat-7-5-3",
    "code": "MAT.7.5.3",
    "grade": 7,
    "levelGroup": "Ortaokul",
    "unit": 5,
    "theme": "İstatistiksel Araştırma Süreci",
    "color": "#06B6D4",
    "icon": "📊",
    "title": "Aritmetik Ortalama",
    "description": "Fazlalıkların eksiklere paylaştırıldığında oluşan dümdüz çizgi \"Ortalama\"dır.",
    "kazanim": "MAT.7.5.3. Aritmetik Ortalama (Animasyon)",
    "tags": [
      "aritmetik",
      "ortalama",
      "fazlalıkların",
      "eksiklere",
      "paylaştırıldığında",
      "oluşan",
      "dümdüz",
      "çizgi",
      "dır",
      "istatistiksel"
    ],
    "animations": [
      {
        "label": "Animasyon: Aritmetik Ortalama",
        "file": "MAT_7_5_3_Animasyon.html",
        "url": "apps/7_Sinif/MAT_7_5_3_Animasyon.html",
        "title": "Aritmetik Ortalama",
        "isDraft": false
      }
    ],
    "labs": [
      {
        "label": "İnteraktif Laboratuvar",
        "file": "MAT_7_5_3_Etkinlik.html",
        "url": "apps/7_Sinif/MAT_7_5_3_Etkinlik.html",
        "title": "Aritmetik Ortalama Laboratuvarı",
        "isDraft": false
      }
    ],
    "hasCompletedContent": true,
    "hasDraftPart": false
  },
  {
    "id": "mat-7-5-4",
    "code": "MAT.7.5.4",
    "grade": 7,
    "levelGroup": "Ortaokul",
    "unit": 5,
    "theme": "İstatistiksel Araştırma Süreci",
    "color": "#06B6D4",
    "icon": "📊",
    "title": "Ortanca",
    "description": "Veri grubunun ortancasındaki sayının otomatik olarak nasıl ayıklandığını izleyin.",
    "kazanim": "MAT.7.5.4. Ortanca (Animasyon)",
    "tags": [
      "ortanca",
      "veri",
      "grubunun",
      "ortancasındaki",
      "sayının",
      "otomatik",
      "olarak",
      "ayıklandığını",
      "izleyin",
      "istatistiksel"
    ],
    "animations": [
      {
        "label": "Animasyon: Ortanca",
        "file": "MAT_7_5_4_Animasyon.html",
        "url": "apps/7_Sinif/MAT_7_5_4_Animasyon.html",
        "title": "Ortanca",
        "isDraft": false
      }
    ],
    "labs": [
      {
        "label": "İnteraktif Laboratuvar",
        "file": "MAT_7_5_4_Etkinlik.html",
        "url": "apps/7_Sinif/MAT_7_5_4_Etkinlik.html",
        "title": "Ortanca (Medyan) Laboratuvarı",
        "isDraft": false
      }
    ],
    "hasCompletedContent": true,
    "hasDraftPart": false
  },
  {
    "id": "mat-7-5-5",
    "code": "MAT.7.5.5",
    "grade": 7,
    "levelGroup": "Ortaokul",
    "unit": 5,
    "theme": "İstatistiksel Araştırma Süreci",
    "color": "#06B6D4",
    "icon": "📊",
    "title": "Tepe Değer",
    "description": "Gelen sayılar üst üste bindiğinde, oluşan en yüksek tepe bize Mod'u verir.",
    "kazanim": "MAT.7.5.5. Tepe Değer (Animasyon)",
    "tags": [
      "tepe",
      "değer",
      "gelen",
      "sayılar",
      "üst",
      "üste",
      "bindiğinde",
      "oluşan",
      "yüksek",
      "bize"
    ],
    "animations": [
      {
        "label": "Animasyon: Tepe Değer",
        "file": "MAT_7_5_5_Animasyon.html",
        "url": "apps/7_Sinif/MAT_7_5_5_Animasyon.html",
        "title": "Tepe Değer",
        "isDraft": false
      }
    ],
    "labs": [
      {
        "label": "İnteraktif Laboratuvar",
        "file": "MAT_7_5_5_Etkinlik.html",
        "url": "apps/7_Sinif/MAT_7_5_5_Etkinlik.html",
        "title": "Tepe Değer (Mod) Laboratuvarı",
        "isDraft": false
      }
    ],
    "hasCompletedContent": true,
    "hasDraftPart": false
  },
  {
    "id": "mat-7-6-1",
    "code": "MAT.7.6.1",
    "grade": 7,
    "levelGroup": "Ortaokul",
    "unit": 6,
    "theme": "Veriden Olasılığa",
    "color": "#8B5CF6",
    "icon": "📊",
    "title": "Olay ve Tümleyeni",
    "description": "Bir olayın olma olasılığı ile olmama olasılığı birbirini tam 1'e tamamlar.",
    "kazanim": "MAT.7.6.1. Olasılık Hesaplama (Animasyon)",
    "tags": [
      "olay",
      "tümleyeni",
      "olayın",
      "olma",
      "olasılığı",
      "olmama",
      "birbirini",
      "tam",
      "tamamlar",
      "veriden"
    ],
    "animations": [
      {
        "label": "Animasyon: Olay ve Tümleyeni",
        "file": "MAT_7_6_1_Animasyon.html",
        "url": "apps/7_Sinif/MAT_7_6_1_Animasyon.html",
        "title": "Olay ve Tümleyeni",
        "isDraft": false
      }
    ],
    "labs": [
      {
        "label": "İnteraktif Laboratuvar",
        "file": "MAT_7_6_1_Etkinlik.html",
        "url": "apps/7_Sinif/MAT_7_6_1_Etkinlik.html",
        "title": "Olasılık ve Tümleyen Laboratuvarı",
        "isDraft": false
      }
    ],
    "hasCompletedContent": true,
    "hasDraftPart": false
  },
  {
    "id": "mat-7-6-2",
    "code": "MAT.7.6.2",
    "grade": 7,
    "levelGroup": "Ortaokul",
    "unit": 6,
    "theme": "Veriden Olasılığa",
    "color": "#8B5CF6",
    "icon": "📊",
    "title": "Çarkıfelek",
    "description": "Eşit alan kaplayan olayların gerçekleşme olasılıkları eşittir.",
    "kazanim": "MAT.7.6.2. Eşit Olasılık (Animasyon)",
    "tags": [
      "çarkıfelek",
      "eşit",
      "alan",
      "kaplayan",
      "olayların",
      "gerçekleşme",
      "olasılıkları",
      "eşittir",
      "veriden",
      "olasılığa"
    ],
    "animations": [
      {
        "label": "Animasyon: Çarkıfelek",
        "file": "MAT_7_6_2_Animasyon.html",
        "url": "apps/7_Sinif/MAT_7_6_2_Animasyon.html",
        "title": "Çarkıfelek",
        "isDraft": false
      }
    ],
    "labs": [
      {
        "label": "İnteraktif Laboratuvar",
        "file": "MAT_7_6_2_Etkinlik.html",
        "url": "apps/7_Sinif/MAT_7_6_2_Etkinlik.html",
        "title": "Eşit Olasılık Laboratuvarı",
        "isDraft": false
      }
    ],
    "hasCompletedContent": true,
    "hasDraftPart": false
  },
  {
    "id": "mat-7-6-3",
    "code": "MAT.7.6.3",
    "grade": 7,
    "levelGroup": "Ortaokul",
    "unit": 6,
    "theme": "Veriden Olasılığa",
    "color": "#8B5CF6",
    "icon": "📊",
    "title": "Ayrık Olaylar",
    "description": "Ortak hiçbir çıktısı olmayan olaylar birleşemez, çarpışıp geri sekerler.",
    "kazanim": "MAT.7.6.3. Ayrık Olaylar (Animasyon)",
    "tags": [
      "ayrık",
      "olaylar",
      "ortak",
      "hiçbir",
      "çıktısı",
      "olmayan",
      "birleşemez",
      "çarpışıp",
      "geri",
      "sekerler"
    ],
    "animations": [
      {
        "label": "Animasyon: Ayrık Olaylar",
        "file": "MAT_7_6_3_Animasyon.html",
        "url": "apps/7_Sinif/MAT_7_6_3_Animasyon.html",
        "title": "Ayrık Olaylar",
        "isDraft": false
      }
    ],
    "labs": [
      {
        "label": "İnteraktif Laboratuvar",
        "file": "MAT_7_6_3_Etkinlik.html",
        "url": "apps/7_Sinif/MAT_7_6_3_Etkinlik.html",
        "title": "Ayrık ve Ayrık Olmayan Olaylar Laboratuvarı",
        "isDraft": false
      }
    ],
    "hasCompletedContent": true,
    "hasDraftPart": false
  },
  {
    "id": "mat-8-1-1",
    "code": "MAT.8.1.1",
    "grade": 8,
    "levelGroup": "Ortaokul",
    "unit": 1,
    "theme": "Sayılar ve Nicelikler",
    "color": "#3B82F6",
    "icon": "🧬",
    "title": "Üslü İfadelerde Çarpma",
    "description": "Tabanları (kutuları taşıyan zemin) aynı olan üslü ifadeler çarpılırken, üsler neden toplanır?",
    "kazanim": "MAT.8.1.1. Üslü İfadeler (Animasyon)",
    "tags": [
      "üslü",
      "ifadelerde",
      "çarpma",
      "tabanları",
      "kutuları",
      "taşıyan",
      "zemin",
      "aynı",
      "ifadeler",
      "çarpılırken"
    ],
    "animations": [
      {
        "label": "Animasyon: Üslü İfadelerde Çarpma",
        "file": "MAT_8_1_1_Animasyon.html",
        "url": "apps/8_Sinif/MAT_8_1_1_Animasyon.html",
        "title": "Üslü İfadelerde Çarpma",
        "isDraft": false
      }
    ],
    "labs": [
      {
        "label": "İnteraktif Laboratuvar",
        "file": "MAT_8_1_1_Etkinlik.html",
        "url": "apps/8_Sinif/MAT_8_1_1_Etkinlik.html",
        "title": "Hücre Bölünmesi - Üslü İfadeler Laboratuvarı",
        "isDraft": false
      }
    ],
    "hasCompletedContent": true,
    "hasDraftPart": false
  },
  {
    "id": "mat-8-1-2",
    "code": "MAT.8.1.2",
    "grade": 8,
    "levelGroup": "Ortaokul",
    "unit": 1,
    "theme": "Sayılar ve Nicelikler",
    "color": "#3B82F6",
    "icon": "🔢",
    "title": "Tam Kare Olmayan Sayılar",
    "description": "Alanı 20 olan bir karenin kenarı, 4 ile 5 arasında sıkışıp kalmış bir ondalık sayıdır.",
    "kazanim": "MAT.8.1.2. Kareköklü Sayılar (Animasyon)",
    "tags": [
      "tam",
      "kare",
      "olmayan",
      "sayılar",
      "alanı",
      "karenin",
      "kenarı",
      "arasında",
      "sıkışıp",
      "kalmış"
    ],
    "animations": [
      {
        "label": "Animasyon: Tam Kare Olmayan Sayılar",
        "file": "MAT_8_1_2_Animasyon.html",
        "url": "apps/8_Sinif/MAT_8_1_2_Animasyon.html",
        "title": "Tam Kare Olmayan Sayılar",
        "isDraft": false
      }
    ],
    "labs": [
      {
        "label": "İnteraktif Laboratuvar",
        "file": "MAT_8_1_2_Etkinlik.html",
        "url": "apps/8_Sinif/MAT_8_1_2_Etkinlik.html",
        "title": "Kareköklü Sayılar Laboratuvarı",
        "isDraft": false
      }
    ],
    "hasCompletedContent": true,
    "hasDraftPart": false
  },
  {
    "id": "mat-8-1-3",
    "code": "MAT.8.1.3",
    "grade": 8,
    "levelGroup": "Ortaokul",
    "unit": 1,
    "theme": "Sayılar ve Nicelikler",
    "color": "#3B82F6",
    "icon": "🔢",
    "title": "İrrasyonel Sonsuzluk",
    "description": "Virgülden sonraki ondalık kısmı hiçbir düzen veya tekrar (devir) barındırmadan sonsuza giden sayılara \"İrrasyonel Sayı\" denir.",
    "kazanim": "MAT.8.1.3. İrrasyonel Sayılar (Animasyon)",
    "tags": [
      "irrasyonel",
      "sonsuzluk",
      "virgülden",
      "sonraki",
      "ondalık",
      "kısmı",
      "hiçbir",
      "düzen",
      "veya",
      "tekrar"
    ],
    "animations": [
      {
        "label": "Animasyon: İrrasyonel Sonsuzluk",
        "file": "MAT_8_1_3_Animasyon.html",
        "url": "apps/8_Sinif/MAT_8_1_3_Animasyon.html",
        "title": "İrrasyonel Sonsuzluk",
        "isDraft": false
      }
    ],
    "labs": [
      {
        "label": "İnteraktif Laboratuvar",
        "file": "MAT_8_1_3_Etkinlik.html",
        "url": "apps/8_Sinif/MAT_8_1_3_Etkinlik.html",
        "title": "Rasyonel ve İrrasyonel Kutu Oyunu",
        "isDraft": false
      }
    ],
    "hasCompletedContent": true,
    "hasDraftPart": false
  },
  {
    "id": "mat-8-1-4",
    "code": "MAT.8.1.4",
    "grade": 8,
    "levelGroup": "Ortaokul",
    "unit": 1,
    "theme": "Sayılar ve Nicelikler",
    "color": "#3B82F6",
    "icon": "🔢",
    "title": "Sonsuz Derinlik",
    "description": "Sayı doğrusundaki herhangi iki nokta arasına ne kadar yaklaşırsanız (zoom yaparsanız), orada daima başka gerçek sayılar bulursunuz.",
    "kazanim": "MAT.8.1.4. Sayı Doğrusu Gerçek Sayılar (Animasyon)",
    "tags": [
      "sonsuz",
      "derinlik",
      "sayı",
      "doğrusundaki",
      "herhangi",
      "iki",
      "nokta",
      "arasına",
      "kadar",
      "yaklaşırsanız"
    ],
    "animations": [
      {
        "label": "Animasyon: Sonsuz Derinlik",
        "file": "MAT_8_1_4_Animasyon.html",
        "url": "apps/8_Sinif/MAT_8_1_4_Animasyon.html",
        "title": "Sonsuz Derinlik",
        "isDraft": false
      }
    ],
    "labs": [
      {
        "label": "İnteraktif Laboratuvar",
        "file": "MAT_8_1_4_Etkinlik.html",
        "url": "apps/8_Sinif/MAT_8_1_4_Etkinlik.html",
        "title": "Gerçek Sayı Aralıkları Laboratuvarı",
        "isDraft": false
      }
    ],
    "hasCompletedContent": true,
    "hasDraftPart": false
  },
  {
    "id": "mat-8-2-1",
    "code": "MAT.8.2.1",
    "grade": 8,
    "levelGroup": "Ortaokul",
    "unit": 2,
    "theme": "Doğrusal İlişkiler ve Algoritmalar",
    "color": "#10B981",
    "icon": "⚙️",
    "title": "Koordinat Sistemi Oluşumu",
    "description": "İki bağımsız sayı doğrusu bir araya gelerek 2 boyutlu uzayı (düzlemi) oluşturur.",
    "kazanim": "MAT.8.2.1. Dik Koordinat Sistemi (Animasyon)",
    "tags": [
      "koordinat",
      "sistemi",
      "oluşumu",
      "iki",
      "bağımsız",
      "sayı",
      "doğrusu",
      "araya",
      "gelerek",
      "boyutlu"
    ],
    "animations": [
      {
        "label": "Animasyon: Koordinat Sistemi Oluşumu",
        "file": "MAT_8_2_1_Animasyon.html",
        "url": "apps/8_Sinif/MAT_8_2_1_Animasyon.html",
        "title": "Koordinat Sistemi Oluşumu",
        "isDraft": false
      }
    ],
    "labs": [
      {
        "label": "İnteraktif Laboratuvar",
        "file": "MAT_8_2_1_Etkinlik.html",
        "url": "apps/8_Sinif/MAT_8_2_1_Etkinlik.html",
        "title": "Koordinat Sistemi Oyunu",
        "isDraft": false
      }
    ],
    "hasCompletedContent": true,
    "hasDraftPart": false
  },
  {
    "id": "mat-8-2-2",
    "code": "MAT.8.2.2",
    "grade": 8,
    "levelGroup": "Ortaokul",
    "unit": 2,
    "theme": "Doğrusal İlişkiler ve Algoritmalar",
    "color": "#10B981",
    "icon": "⚙️",
    "title": "Eğim",
    "description": "Eğim, bir doğrunun ne kadar dik olduğunu gösteren orandır (Dikey / Yatay).",
    "kazanim": "MAT.8.2.2. Eğim Kavramı (Animasyon)",
    "tags": [
      "eğim",
      "doğrunun",
      "kadar",
      "dik",
      "olduğunu",
      "gösteren",
      "orandır",
      "dikey",
      "yatay",
      "doğrusal"
    ],
    "animations": [
      {
        "label": "Animasyon: Eğim",
        "file": "MAT_8_2_2_Animasyon.html",
        "url": "apps/8_Sinif/MAT_8_2_2_Animasyon.html",
        "title": "Eğim",
        "isDraft": false
      }
    ],
    "labs": [
      {
        "label": "İnteraktif Laboratuvar",
        "file": "MAT_8_2_2_Etkinlik.html",
        "url": "apps/8_Sinif/MAT_8_2_2_Etkinlik.html",
        "title": "Taksi Ücreti Simülatörü",
        "isDraft": false
      }
    ],
    "hasCompletedContent": true,
    "hasDraftPart": false
  },
  {
    "id": "mat-8-2-3",
    "code": "MAT.8.2.3",
    "grade": 8,
    "levelGroup": "Ortaokul",
    "unit": 2,
    "theme": "Doğrusal İlişkiler ve Algoritmalar",
    "color": "#10B981",
    "icon": "⚙️",
    "title": "Doğruların Kesişimi",
    "description": "Eğimleri farklı olan iki araç, rotalarında ilerlerken mutlaka tek bir noktada kesişir (çarpışır).",
    "kazanim": "MAT.8.2.3. Doğruların Kesişimi (Animasyon)",
    "tags": [
      "doğruların",
      "kesişimi",
      "eğimleri",
      "farklı",
      "iki",
      "araç",
      "rotalarında",
      "ilerlerken",
      "mutlaka",
      "tek"
    ],
    "animations": [
      {
        "label": "Animasyon: Doğruların Kesişimi",
        "file": "MAT_8_2_3_Animasyon.html",
        "url": "apps/8_Sinif/MAT_8_2_3_Animasyon.html",
        "title": "Doğruların Kesişimi",
        "isDraft": false
      }
    ],
    "labs": [
      {
        "label": "İnteraktif Laboratuvar",
        "file": "MAT_8_2_3_Etkinlik.html",
        "url": "apps/8_Sinif/MAT_8_2_3_Etkinlik.html",
        "title": "İki Doğrunun Durumu",
        "isDraft": false
      }
    ],
    "hasCompletedContent": true,
    "hasDraftPart": false
  },
  {
    "id": "mat-8-2-4",
    "code": "MAT.8.2.4",
    "grade": 8,
    "levelGroup": "Ortaokul",
    "unit": 2,
    "theme": "Doğrusal İlişkiler ve Algoritmalar",
    "color": "#10B981",
    "icon": "📊",
    "title": "Fonksiyon Veri Fabrikası",
    "description": "Her doğrusal fonksiyon f(x) = ax + b, veriyi (x) alır, algoritmik bir işlemden geçirir ve çıktı (y) üretir.",
    "kazanim": "MAT.8.2.4. Doğrusal Algoritma (Animasyon)",
    "tags": [
      "fonksiyon",
      "veri",
      "fabrikası",
      "her",
      "doğrusal",
      "veriyi",
      "alır",
      "algoritmik",
      "işlemden",
      "geçirir"
    ],
    "animations": [
      {
        "label": "Animasyon: Fonksiyon Veri Fabrikası",
        "file": "MAT_8_2_4_Animasyon.html",
        "url": "apps/8_Sinif/MAT_8_2_4_Animasyon.html",
        "title": "Fonksiyon Veri Fabrikası",
        "isDraft": false
      }
    ],
    "labs": [
      {
        "label": "İnteraktif Laboratuvar",
        "file": "MAT_8_2_4_Etkinlik.html",
        "url": "apps/8_Sinif/MAT_8_2_4_Etkinlik.html",
        "title": "Algoritma Akış Şeması Oyunu",
        "isDraft": false
      }
    ],
    "hasCompletedContent": true,
    "hasDraftPart": false
  },
  {
    "id": "mat-8-3-1",
    "code": "MAT.8.3.1",
    "grade": 8,
    "levelGroup": "Ortaokul",
    "unit": 3,
    "theme": "Geometrik Şekiller ve Pisagor",
    "color": "#8B5CF6",
    "icon": "⭕",
    "title": "Açı Kenar",
    "description": "Kapı menteşesindeki açı büyüdükçe, kapının ucu ile kasa arasındaki mesafe (kenar) uzar.",
    "kazanim": "MAT.8.3.1. Açı Kenar Bağıntısı (Animasyon)",
    "tags": [
      "açı",
      "kenar",
      "kapı",
      "menteşesindeki",
      "büyüdükçe",
      "kapının",
      "ucu",
      "kasa",
      "arasındaki",
      "mesafe"
    ],
    "animations": [
      {
        "label": "Animasyon: Açı Kenar",
        "file": "MAT_8_3_1_Animasyon.html",
        "url": "apps/8_Sinif/MAT_8_3_1_Animasyon.html",
        "title": "Açı Kenar",
        "isDraft": false
      }
    ],
    "labs": [
      {
        "label": "İnteraktif Laboratuvar",
        "file": "MAT_8_3_1_Etkinlik.html",
        "url": "apps/8_Sinif/MAT_8_3_1_Etkinlik.html",
        "title": "Açı Kenar İlişkisi Laboratuvarı",
        "isDraft": false
      }
    ],
    "hasCompletedContent": true,
    "hasDraftPart": false
  },
  {
    "id": "mat-8-3-2",
    "code": "MAT.8.3.2",
    "grade": 8,
    "levelGroup": "Ortaokul",
    "unit": 3,
    "theme": "Geometrik Şekiller ve Pisagor",
    "color": "#8B5CF6",
    "icon": "⭕",
    "title": "Üçgen Eşitsizliği",
    "description": "Neden rastgele üç çubuktan her zaman üçgen elde edemeyiz?",
    "kazanim": "MAT.8.3.2. Üçgen Eşitsizliği (Animasyon)",
    "tags": [
      "üçgen",
      "eşitsizliği",
      "neden",
      "rastgele",
      "çubuktan",
      "her",
      "zaman",
      "elde",
      "edemeyiz",
      "geometrik"
    ],
    "animations": [
      {
        "label": "Animasyon: Üçgen Eşitsizliği",
        "file": "MAT_8_3_2_Animasyon.html",
        "url": "apps/8_Sinif/MAT_8_3_2_Animasyon.html",
        "title": "Üçgen Eşitsizliği",
        "isDraft": false
      }
    ],
    "labs": [
      {
        "label": "İnteraktif Laboratuvar",
        "file": "MAT_8_3_2_Etkinlik.html",
        "url": "apps/8_Sinif/MAT_8_3_2_Etkinlik.html",
        "title": "Üçgen İnşa Laboratuvarı",
        "isDraft": false
      }
    ],
    "hasCompletedContent": true,
    "hasDraftPart": false
  },
  {
    "id": "mat-8-3-3",
    "code": "MAT.8.3.3",
    "grade": 8,
    "levelGroup": "Ortaokul",
    "unit": 3,
    "theme": "Geometrik Şekiller ve Pisagor",
    "color": "#8B5CF6",
    "icon": "⭕",
    "title": "Benzerlik",
    "description": "Bir cismin gölgesi büyüse de şekli bozulmaz (Açılar değişmez, orantılı büyür).",
    "kazanim": "MAT.8.3.3. Benzerlik (Animasyon)",
    "tags": [
      "benzerlik",
      "cismin",
      "gölgesi",
      "büyüse",
      "şekli",
      "bozulmaz",
      "açılar",
      "değişmez",
      "orantılı",
      "büyür"
    ],
    "animations": [
      {
        "label": "Animasyon: Benzerlik",
        "file": "MAT_8_3_3_Animasyon.html",
        "url": "apps/8_Sinif/MAT_8_3_3_Animasyon.html",
        "title": "Benzerlik",
        "isDraft": false
      }
    ],
    "labs": [
      {
        "label": "İnteraktif Laboratuvar",
        "file": "MAT_8_3_3_Etkinlik.html",
        "url": "apps/8_Sinif/MAT_8_3_3_Etkinlik.html",
        "title": "Benzerlik ve Eşlik Laboratuvarı",
        "isDraft": false
      }
    ],
    "hasCompletedContent": true,
    "hasDraftPart": false
  },
  {
    "id": "mat-8-3-4",
    "code": "MAT.8.3.4",
    "grade": 8,
    "levelGroup": "Ortaokul",
    "unit": 3,
    "theme": "Geometrik Şekiller ve Pisagor",
    "color": "#8B5CF6",
    "icon": "⭕",
    "title": "Pisagor Su Çarkı",
    "description": "İki küçük karedeki suların hepsi büyük kareye (Hipotenüs'e) tam olarak sığar.",
    "kazanim": "MAT.8.3.4. Pisagor Bağıntısı (Animasyon)",
    "tags": [
      "pisagor",
      "çarkı",
      "iki",
      "küçük",
      "karedeki",
      "suların",
      "hepsi",
      "büyük",
      "kareye",
      "hipotenüs"
    ],
    "animations": [
      {
        "label": "Animasyon: Pisagor Su Çarkı",
        "file": "MAT_8_3_4_Animasyon.html",
        "url": "apps/8_Sinif/MAT_8_3_4_Animasyon.html",
        "title": "Pisagor Su Çarkı",
        "isDraft": false
      }
    ],
    "labs": [
      {
        "label": "İnteraktif Laboratuvar",
        "file": "MAT_8_3_4_Etkinlik.html",
        "url": "apps/8_Sinif/MAT_8_3_4_Etkinlik.html",
        "title": "Pisagor Kareleri Laboratuvarı",
        "isDraft": false
      }
    ],
    "hasCompletedContent": true,
    "hasDraftPart": false
  },
  {
    "id": "mat-8-4-1",
    "code": "MAT.8.4.1",
    "grade": 8,
    "levelGroup": "Ortaokul",
    "unit": 4,
    "theme": "Geometrik Nicelikler",
    "color": "#F43F5E",
    "icon": "📐",
    "title": "Dikdörtgenden Üçgen",
    "description": "Bir dikdörtgeni köşegen boyunca ikiye böldüğünüzde iki EŞ üçgen oluşur. Her üçgenin alanı dikdörtgenin yarısıdır.",
    "kazanim": "MAT.8.4.1. Üçgende Alan (Animasyon)",
    "tags": [
      "dikdörtgenden",
      "üçgen",
      "dikdörtgeni",
      "köşegen",
      "boyunca",
      "ikiye",
      "böldüğünüzde",
      "iki",
      "oluşur",
      "her"
    ],
    "animations": [
      {
        "label": "Animasyon: Dikdörtgenden Üçgen",
        "file": "MAT_8_4_1_Animasyon.html",
        "url": "apps/8_Sinif/MAT_8_4_1_Animasyon.html",
        "title": "Dikdörtgenden Üçgen",
        "isDraft": false
      }
    ],
    "labs": [
      {
        "label": "İnteraktif Laboratuvar",
        "file": "MAT_8_4_1_Etkinlik.html",
        "url": "apps/8_Sinif/MAT_8_4_1_Etkinlik.html",
        "title": "Üçgende Alan Simülatörü",
        "isDraft": false
      }
    ],
    "hasCompletedContent": true,
    "hasDraftPart": false
  },
  {
    "id": "mat-8-4-2",
    "code": "MAT.8.4.2",
    "grade": 8,
    "levelGroup": "Ortaokul",
    "unit": 4,
    "theme": "Geometrik Nicelikler",
    "color": "#F43F5E",
    "icon": "⭕",
    "title": "Çemberin Açınımı",
    "description": "Çemberi açıp düzleştirdiğimizde uzunluğunun çapın tam π katı (≈3.14) olduğunu görürüz.",
    "kazanim": "MAT.8.4.2. Çevre Formülü (Animasyon)",
    "tags": [
      "çemberin",
      "açınımı",
      "çemberi",
      "açıp",
      "düzleştirdiğimizde",
      "uzunluğunun",
      "çapın",
      "tam",
      "katı",
      "olduğunu"
    ],
    "animations": [
      {
        "label": "Animasyon: Çemberin Açınımı",
        "file": "MAT_8_4_2_Animasyon.html",
        "url": "apps/8_Sinif/MAT_8_4_2_Animasyon.html",
        "title": "Çemberin Açınımı",
        "isDraft": false
      }
    ],
    "labs": [
      {
        "label": "İnteraktif Laboratuvar",
        "file": "MAT_8_4_2_Etkinlik.html",
        "url": "apps/8_Sinif/MAT_8_4_2_Etkinlik.html",
        "title": "Çember ve Daire - π Laboratuvarı",
        "isDraft": false
      }
    ],
    "hasCompletedContent": true,
    "hasDraftPart": false
  },
  {
    "id": "mat-8-4-3",
    "code": "MAT.8.4.3",
    "grade": 8,
    "levelGroup": "Ortaokul",
    "unit": 4,
    "theme": "Geometrik Nicelikler",
    "color": "#F43F5E",
    "icon": "📐",
    "title": "Silindirin Açınımı",
    "description": "Silindiri keserek açtığımızda, 2 daire + 1 dikdörtgenden oluştuğunu görürüz.",
    "kazanim": "MAT.8.4.3. Silindirin Açınımı (Animasyon)",
    "tags": [
      "silindirin",
      "açınımı",
      "silindiri",
      "keserek",
      "açtığımızda",
      "daire",
      "dikdörtgenden",
      "oluştuğunu",
      "görürüz",
      "geometrik"
    ],
    "animations": [
      {
        "label": "Animasyon: Silindirin Açınımı",
        "file": "MAT_8_4_3_Animasyon.html",
        "url": "apps/8_Sinif/MAT_8_4_3_Animasyon.html",
        "title": "Silindirin Açınımı",
        "isDraft": false
      }
    ],
    "labs": [
      {
        "label": "İnteraktif Laboratuvar",
        "file": "MAT_8_4_3_Etkinlik.html",
        "url": "apps/8_Sinif/MAT_8_4_3_Etkinlik.html",
        "title": "Silindir Simülatörü",
        "isDraft": false
      }
    ],
    "hasCompletedContent": true,
    "hasDraftPart": false
  },
  {
    "id": "mat-8-4-4",
    "code": "MAT.8.4.4",
    "grade": 8,
    "levelGroup": "Ortaokul",
    "unit": 4,
    "theme": "Geometrik Nicelikler",
    "color": "#F43F5E",
    "icon": "🧊",
    "title": "Prizma Katman Dolumu",
    "description": "Hacim = Taban Alanı × Yükseklik. Katmanlar üst üste eklenerek prizma dolur.",
    "kazanim": "MAT.8.4.4. Prizma Hacmi (Animasyon)",
    "tags": [
      "prizma",
      "katman",
      "dolumu",
      "hacim",
      "taban",
      "alanı",
      "yükseklik",
      "katmanlar",
      "üst",
      "üste"
    ],
    "animations": [
      {
        "label": "Animasyon: Prizma Katman Dolumu",
        "file": "MAT_8_4_4_Animasyon.html",
        "url": "apps/8_Sinif/MAT_8_4_4_Animasyon.html",
        "title": "Prizma Katman Dolumu",
        "isDraft": false
      }
    ],
    "labs": [
      {
        "label": "İnteraktif Laboratuvar",
        "file": "MAT_8_4_4_Etkinlik.html",
        "url": "apps/8_Sinif/MAT_8_4_4_Etkinlik.html",
        "title": "Dik Prizma Simülatörü",
        "isDraft": false
      }
    ],
    "hasCompletedContent": true,
    "hasDraftPart": false
  },
  {
    "id": "mat-8-5-1",
    "code": "MAT.8.5.1",
    "grade": 8,
    "levelGroup": "Ortaokul",
    "unit": 5,
    "theme": "Dönüşüm Geometrisi",
    "color": "#F59E0B",
    "icon": "🪞",
    "title": "Öteleme Vektörü",
    "description": "Şeklin tüm noktaları aynı yönde, aynı mesafe kadar kayar. Şeklin şekli ve büyüklüğü değişmez.",
    "kazanim": "MAT.8.5.1. Öteleme Vektörü (Animasyon)",
    "tags": [
      "öteleme",
      "vektörü",
      "şeklin",
      "tüm",
      "noktaları",
      "aynı",
      "yönde",
      "mesafe",
      "kadar",
      "kayar"
    ],
    "animations": [
      {
        "label": "Animasyon: Öteleme Vektörü",
        "file": "MAT_8_5_1_Animasyon.html",
        "url": "apps/8_Sinif/MAT_8_5_1_Animasyon.html",
        "title": "Öteleme Vektörü",
        "isDraft": false
      }
    ],
    "labs": [
      {
        "label": "İnteraktif Laboratuvar",
        "file": "MAT_8_5_1_Etkinlik.html",
        "url": "apps/8_Sinif/MAT_8_5_1_Etkinlik.html",
        "title": "Öteleme - Şekli Kaydır",
        "isDraft": false
      }
    ],
    "hasCompletedContent": true,
    "hasDraftPart": false
  },
  {
    "id": "mat-8-5-2",
    "code": "MAT.8.5.2",
    "grade": 8,
    "levelGroup": "Ortaokul",
    "unit": 5,
    "theme": "Dönüşüm Geometrisi",
    "color": "#F59E0B",
    "icon": "🪞",
    "title": "Su Yüzeyi Yansıması",
    "description": "Su yüzeyi mükemmel bir yansıma eksenidir. Dağın sudaki görüntüsü dağın tam simetriğidir.",
    "kazanim": "MAT.8.5.2. Yansıma (Animasyon)",
    "tags": [
      "yüzeyi",
      "yansıması",
      "mükemmel",
      "yansıma",
      "eksenidir",
      "dağın",
      "sudaki",
      "görüntüsü",
      "tam",
      "simetriğidir"
    ],
    "animations": [
      {
        "label": "Animasyon: Su Yüzeyi Yansıması",
        "file": "MAT_8_5_2_Animasyon.html",
        "url": "apps/8_Sinif/MAT_8_5_2_Animasyon.html",
        "title": "Su Yüzeyi Yansıması",
        "isDraft": false
      }
    ],
    "labs": [
      {
        "label": "İnteraktif Laboratuvar",
        "file": "MAT_8_5_2_Etkinlik.html",
        "url": "apps/8_Sinif/MAT_8_5_2_Etkinlik.html",
        "title": "Yansıma - Simetri Oyunu",
        "isDraft": false
      }
    ],
    "hasCompletedContent": true,
    "hasDraftPart": false
  },
  {
    "id": "mat-8-5-3",
    "code": "MAT.8.5.3",
    "grade": 8,
    "levelGroup": "Ortaokul",
    "unit": 5,
    "theme": "Dönüşüm Geometrisi",
    "color": "#F59E0B",
    "icon": "🪞",
    "title": "Döndürme",
    "description": "Döndürme işleminde şeklin her noktası merkeze eşit uzaklıkta yay çizerek döner.",
    "kazanim": "MAT.8.5.3. Döndürme Animasyonu",
    "tags": [
      "döndürme",
      "işleminde",
      "şeklin",
      "her",
      "noktası",
      "merkeze",
      "eşit",
      "uzaklıkta",
      "yay",
      "çizerek"
    ],
    "animations": [
      {
        "label": "Animasyon: Döndürme",
        "file": "MAT_8_5_3_Animasyon.html",
        "url": "apps/8_Sinif/MAT_8_5_3_Animasyon.html",
        "title": "Döndürme",
        "isDraft": false
      }
    ],
    "labs": [
      {
        "label": "İnteraktif Laboratuvar",
        "file": "MAT_8_5_3_Etkinlik.html",
        "url": "apps/8_Sinif/MAT_8_5_3_Etkinlik.html",
        "title": "Döndürme - Merkez ve Açı",
        "isDraft": false
      }
    ],
    "hasCompletedContent": true,
    "hasDraftPart": false
  },
  {
    "id": "mat-8-6-1",
    "code": "MAT.8.6.1",
    "grade": 8,
    "levelGroup": "Ortaokul",
    "unit": 6,
    "theme": "İstatistiksel Araştırma Süreci",
    "color": "#06B6D4",
    "icon": "📊",
    "title": "Merkezi Eğilim",
    "description": "Ortalama, sayı doğrusunda tüm verilerin \"denge noktasıdır\". Aykırı değer onu nasıl etkiler?",
    "kazanim": "MAT.8.6.1. Merkezi Eğilim (Animasyon)",
    "tags": [
      "merkezi",
      "eğilim",
      "ortalama",
      "sayı",
      "doğrusunda",
      "tüm",
      "verilerin",
      "denge",
      "noktasıdır",
      "aykırı"
    ],
    "animations": [
      {
        "label": "Animasyon: Merkezi Eğilim",
        "file": "MAT_8_6_1_Animasyon.html",
        "url": "apps/8_Sinif/MAT_8_6_1_Animasyon.html",
        "title": "Merkezi Eğilim",
        "isDraft": false
      }
    ],
    "labs": [
      {
        "label": "İnteraktif Laboratuvar",
        "file": "MAT_8_6_1_Etkinlik.html",
        "url": "apps/8_Sinif/MAT_8_6_1_Etkinlik.html",
        "title": "Ortalama, Medyan, Mod Laboratuvarı",
        "isDraft": false
      }
    ],
    "hasCompletedContent": true,
    "hasDraftPart": false
  },
  {
    "id": "mat-8-6-2",
    "code": "MAT.8.6.2",
    "grade": 8,
    "levelGroup": "Ortaokul",
    "unit": 6,
    "theme": "İstatistiksel Araştırma Süreci",
    "color": "#06B6D4",
    "icon": "📊",
    "title": "Veri → Tablo → Grafik",
    "description": "İstatistiksel araştırmanın 3 aşamasını adım adım gözlemleyin.",
    "kazanim": "MAT.8.6.2. Veri → Grafik (Animasyon)",
    "tags": [
      "veri",
      "tablo",
      "grafik",
      "istatistiksel",
      "araştırmanın",
      "aşamasını",
      "adım",
      "gözlemleyin",
      "araştırma",
      "süreci"
    ],
    "animations": [
      {
        "label": "Animasyon: Veri → Tablo → Grafik",
        "file": "MAT_8_6_2_Animasyon.html",
        "url": "apps/8_Sinif/MAT_8_6_2_Animasyon.html",
        "title": "Veri → Tablo → Grafik",
        "isDraft": false
      }
    ],
    "labs": [
      {
        "label": "İnteraktif Laboratuvar",
        "file": "MAT_8_6_2_Etkinlik.html",
        "url": "apps/8_Sinif/MAT_8_6_2_Etkinlik.html",
        "title": "Histogram Oluşturma Laboratuvarı",
        "isDraft": false
      }
    ],
    "hasCompletedContent": true,
    "hasDraftPart": false
  },
  {
    "id": "mat-8-6-3",
    "code": "MAT.8.6.3",
    "grade": 8,
    "levelGroup": "Ortaokul",
    "unit": 6,
    "theme": "İstatistiksel Araştırma Süreci",
    "color": "#06B6D4",
    "icon": "📊",
    "title": "Yanıltıcı Grafik - Kritik Okuma",
    "description": "Aynı veri, farklı çizildiğinde çok farklı izlenimler bırakabilir. Aldatmacayı yakala!",
    "kazanim": "MAT.8.6.4. Yanıltıcı Grafik (Animasyon)",
    "tags": [
      "yanıltıcı",
      "grafik",
      "kritik",
      "okuma",
      "aynı",
      "veri",
      "farklı",
      "çizildiğinde",
      "çok",
      "izlenimler"
    ],
    "animations": [
      {
        "label": "Animasyon: Yanıltıcı Grafik - Kritik Okuma",
        "file": "MAT_8_6_3_Animasyon.html",
        "url": "apps/8_Sinif/MAT_8_6_3_Animasyon.html",
        "title": "Yanıltıcı Grafik - Kritik Okuma",
        "isDraft": false
      }
    ],
    "labs": [
      {
        "label": "İnteraktif Laboratuvar",
        "file": "MAT_8_6_3_Etkinlik.html",
        "url": "apps/8_Sinif/MAT_8_6_3_Etkinlik.html",
        "title": "Çeyrekler ve Aykırı Değer",
        "isDraft": false
      }
    ],
    "hasCompletedContent": true,
    "hasDraftPart": false
  },
  {
    "id": "mat-8-6-4",
    "code": "MAT.8.6.4",
    "grade": 8,
    "levelGroup": "Ortaokul",
    "unit": 6,
    "theme": "İstatistiksel Araştırma Süreci",
    "color": "#06B6D4",
    "icon": "📊",
    "title": "İstatistiksel Araştırma Süreci Özeti",
    "description": "İstatistiksel araştırmanın 5 aşaması adım adım görselleştiriliyor.",
    "kazanim": "MAT.8.6.4. İstatistik Süreci (Animasyon)",
    "tags": [
      "istatistiksel",
      "araştırma",
      "süreci",
      "özeti",
      "araştırmanın",
      "aşaması",
      "adım",
      "görselleştiriliyor",
      "sınıf",
      "veri"
    ],
    "animations": [
      {
        "label": "Animasyon: İstatistiksel Araştırma Süreci Özeti",
        "file": "MAT_8_6_4_Animasyon.html",
        "url": "apps/8_Sinif/MAT_8_6_4_Animasyon.html",
        "title": "İstatistiksel Araştırma Süreci Özeti",
        "isDraft": false
      }
    ],
    "labs": [
      {
        "label": "İnteraktif Laboratuvar",
        "file": "MAT_8_6_4_Etkinlik.html",
        "url": "apps/8_Sinif/MAT_8_6_4_Etkinlik.html",
        "title": "Veri Yorumlama ve Karşılaştırma",
        "isDraft": false
      }
    ],
    "hasCompletedContent": true,
    "hasDraftPart": false
  },
  {
    "id": "mat-8-7-1",
    "code": "MAT.8.7.1",
    "grade": 8,
    "levelGroup": "Ortaokul",
    "unit": 7,
    "theme": "Veriden Olasılığa",
    "color": "#EC4899",
    "icon": "🎲",
    "title": "Örnek Uzayı ve Olasılık",
    "description": "Bir deneyin tüm olası sonuçları = Örnek Uzay (S). Olasılık = İstenen / Tüm Durumlar",
    "kazanim": "MAT.8.7.1. Örnek Uzayı ve Olasılık (Etkileşimli)",
    "tags": [
      "örnek",
      "uzayı",
      "olasılık",
      "deneyin",
      "tüm",
      "olası",
      "sonuçları",
      "uzay",
      "istenen",
      "durumlar"
    ],
    "animations": [
      {
        "label": "Animasyon: Örnek Uzayı ve Olasılık",
        "file": "MAT_8_7_1_Animasyon.html",
        "url": "apps/8_Sinif/MAT_8_7_1_Animasyon.html",
        "title": "Örnek Uzayı ve Olasılık",
        "isDraft": false
      }
    ],
    "labs": [
      {
        "label": "İnteraktif Laboratuvar",
        "file": "MAT_8_7_1_Etkinlik.html",
        "url": "apps/8_Sinif/MAT_8_7_1_Etkinlik.html",
        "title": "Deneysel ve Teorik Olasılık",
        "isDraft": false
      }
    ],
    "hasCompletedContent": true,
    "hasDraftPart": false
  },
  {
    "id": "mat-8-7-2",
    "code": "MAT.8.7.2",
    "grade": 8,
    "levelGroup": "Ortaokul",
    "unit": 7,
    "theme": "Veriden Olasılığa",
    "color": "#EC4899",
    "icon": "📊",
    "title": "Olay Çeşitleri ve Venn Diyagramı",
    "description": "Birbirini dışlayan, tamamlayıcı ve kesişen olayları görsel olarak keşfedin.",
    "kazanim": "MAT.8.7.2. Olasılık Kuralları (Etkileşimli)",
    "tags": [
      "olay",
      "çeşitleri",
      "venn",
      "diyagramı",
      "birbirini",
      "dışlayan",
      "tamamlayıcı",
      "kesişen",
      "olayları",
      "görsel"
    ],
    "animations": [
      {
        "label": "Animasyon: Olay Çeşitleri ve Venn Diyagramı",
        "file": "MAT_8_7_2_Animasyon.html",
        "url": "apps/8_Sinif/MAT_8_7_2_Animasyon.html",
        "title": "Olay Çeşitleri ve Venn Diyagramı",
        "isDraft": false
      }
    ],
    "labs": [
      {
        "label": "İnteraktif Laboratuvar",
        "file": "MAT_8_7_2_Etkinlik.html",
        "url": "apps/8_Sinif/MAT_8_7_2_Etkinlik.html",
        "title": "Bileşik Olaylar ve Ağaç Diyagramı",
        "isDraft": false
      }
    ],
    "hasCompletedContent": true,
    "hasDraftPart": false
  },
  {
    "id": "mat-9-1-1",
    "code": "MAT.9.1.1",
    "grade": 9,
    "levelGroup": "Lise",
    "unit": 1,
    "theme": "Sayılar ve Özdeşlikler",
    "color": "#3B82F6",
    "icon": "⚖️",
    "title": "Sayıların Gösterimleri ve Muhakeme",
    "description": "Evrendeki devasa mesafeleri veya günlük hayattaki köklü sayıların yaklaşık değerlerini matematiğin diliyle nasıl ifade ederiz?",
    "kazanim": "MAT.9.1.1. Üslü ve Köklü Gösterimler (Animasyon)",
    "tags": [
      "sayıların",
      "gösterimleri",
      "muhakeme",
      "evrendeki",
      "devasa",
      "mesafeleri",
      "veya",
      "günlük",
      "hayattaki",
      "köklü"
    ],
    "animations": [
      {
        "label": "Animasyon: Sayıların Gösterimleri ve Muhakeme",
        "file": "MAT_9_1_1_Animasyon.html",
        "url": "apps/9_Sinif/MAT_9_1_1_Animasyon.html",
        "title": "Sayıların Gösterimleri ve Muhakeme",
        "isDraft": false
      }
    ],
    "labs": [
      {
        "label": "İnteraktif Laboratuvar",
        "file": "MAT_9_1_1_Etkinlik.html",
        "url": "apps/9_Sinif/MAT_9_1_1_Etkinlik.html",
        "title": "Sayıların Gösterimleri",
        "isDraft": false
      }
    ],
    "hasCompletedContent": true,
    "hasDraftPart": false
  },
  {
    "id": "mat-9-1-2",
    "code": "MAT.9.1.2",
    "grade": 9,
    "levelGroup": "Lise",
    "unit": 1,
    "theme": "Sayılar ve Özdeşlikler",
    "color": "#3B82F6",
    "icon": "⚖️",
    "title": "Sayı Aralıkları ve Kümeler",
    "description": "Mutlak değerin bir \"uzaklık\" olduğunu keşfedin. Aralıkların sayı doğrusunda nasıl birleştiğini izleyin.",
    "kazanim": "MAT.9.1.2. Gerçek Sayı Aralıkları (Animasyon)",
    "tags": [
      "sayı",
      "aralıkları",
      "kümeler",
      "mutlak",
      "değerin",
      "uzaklık",
      "olduğunu",
      "keşfedin",
      "aralıkların",
      "doğrusunda"
    ],
    "animations": [
      {
        "label": "Animasyon: Sayı Aralıkları ve Kümeler",
        "file": "MAT_9_1_2_Animasyon.html",
        "url": "apps/9_Sinif/MAT_9_1_2_Animasyon.html",
        "title": "Sayı Aralıkları ve Kümeler",
        "isDraft": false
      }
    ],
    "labs": [
      {
        "label": "İnteraktif Laboratuvar",
        "file": "MAT_9_1_2_Etkinlik.html",
        "url": "apps/9_Sinif/MAT_9_1_2_Etkinlik.html",
        "title": "Aralık Sentezleyici",
        "isDraft": false
      }
    ],
    "hasCompletedContent": true,
    "hasDraftPart": false
  },
  {
    "id": "mat-9-1-3",
    "code": "MAT.9.1.3",
    "grade": 9,
    "levelGroup": "Lise",
    "unit": 1,
    "theme": "Sayılar ve Özdeşlikler",
    "color": "#3B82F6",
    "icon": "⚖️",
    "title": "Sayı Kümeleri ve Kapalılık Özelliği",
    "description": "Bir işlem (Toplama, Çıkarma vb.) sonucunda ortaya çıkan sayı, hâlâ aynı sayı kümesinin içinde mi kalıyor, yoksa dışarı mı taşıyor?",
    "kazanim": "MAT.9.1.3. Sayı Kümeleri ve Kapalılık (Animasyon)",
    "tags": [
      "sayı",
      "kümeleri",
      "kapalılık",
      "özelliği",
      "işlem",
      "toplama",
      "çıkarma",
      "sonucunda",
      "ortaya",
      "çıkan"
    ],
    "animations": [
      {
        "label": "Animasyon: Sayı Kümeleri ve Kapalılık Özelliği",
        "file": "MAT_9_1_3_Animasyon.html",
        "url": "apps/9_Sinif/MAT_9_1_3_Animasyon.html",
        "title": "Sayı Kümeleri ve Kapalılık Özelliği",
        "isDraft": false
      }
    ],
    "labs": [
      {
        "label": "İnteraktif Laboratuvar",
        "file": "MAT_9_1_3_Etkinlik.html",
        "url": "apps/9_Sinif/MAT_9_1_3_Etkinlik.html",
        "title": "Sayı Doğrusunda Yoğunluk",
        "isDraft": false
      }
    ],
    "hasCompletedContent": true,
    "hasDraftPart": false
  },
  {
    "id": "mat-9-1-4",
    "code": "MAT.9.1.4",
    "grade": 9,
    "levelGroup": "Lise",
    "unit": 1,
    "theme": "Sayılar ve Özdeşlikler",
    "color": "#3B82F6",
    "icon": "⚖️",
    "title": "Cebirsel Özdeşliklerin Geometrisi",
    "description": "Cebirsel formüller aslında geometrik alanların matematikçesidir. Bu ispatı izlediğinizde ezberlemeye gerek kalmayacak!",
    "kazanim": "MAT.9.1.4. Özdeşliklerin Geometrik İspatı (Animasyon)",
    "tags": [
      "cebirsel",
      "özdeşliklerin",
      "geometrisi",
      "formüller",
      "aslında",
      "geometrik",
      "alanların",
      "matematikçesidir",
      "ispatı",
      "izlediğinizde"
    ],
    "animations": [
      {
        "label": "Animasyon: Cebirsel Özdeşliklerin Geometrisi",
        "file": "MAT_9_1_4_Animasyon.html",
        "url": "apps/9_Sinif/MAT_9_1_4_Animasyon.html",
        "title": "Cebirsel Özdeşliklerin Geometrisi",
        "isDraft": false
      }
    ],
    "labs": [
      {
        "label": "İnteraktif Laboratuvar",
        "file": "MAT_9_1_4_Etkinlik.html",
        "url": "apps/9_Sinif/MAT_9_1_4_Etkinlik.html",
        "title": "İşlem Özellikleri Motoru",
        "isDraft": false
      }
    ],
    "hasCompletedContent": true,
    "hasDraftPart": false
  },
  {
    "id": "mat-9-2-1",
    "code": "MAT.9.2.1",
    "grade": 9,
    "levelGroup": "Lise",
    "unit": 2,
    "theme": "Nicelikler ve Değişimler",
    "color": "#10B981",
    "icon": "📈",
    "title": "Fonksiyon Asansörü ve Eğim",
    "description": "Doğrusal fonksiyonların temel formülü  f(x) = x \\) referans alınarak dönüşümlerin (öteleme ve eğim) grafiği nasıl etkilediğini izleyin.",
    "kazanim": "MAT.9.2.1. Doğrusal Dönüşümler (Animasyon)",
    "tags": [
      "fonksiyon",
      "asansörü",
      "eğim",
      "doğrusal",
      "fonksiyonların",
      "temel",
      "formülü",
      "referans",
      "alınarak",
      "dönüşümlerin"
    ],
    "animations": [
      {
        "label": "Animasyon: Fonksiyon Asansörü ve Eğim",
        "file": "MAT_9_2_1_Animasyon.html",
        "url": "apps/9_Sinif/MAT_9_2_1_Animasyon.html",
        "title": "Fonksiyon Asansörü ve Eğim",
        "isDraft": false
      }
    ],
    "labs": [
      {
        "label": "İnteraktif Laboratuvar",
        "file": "MAT_9_2_1_Etkinlik.html",
        "url": "apps/9_Sinif/MAT_9_2_1_Etkinlik.html",
        "title": "Dönüşüm Laboratuvarı",
        "isDraft": false
      }
    ],
    "hasCompletedContent": true,
    "hasDraftPart": false
  },
  {
    "id": "mat-9-2-2",
    "code": "MAT.9.2.2",
    "grade": 9,
    "levelGroup": "Lise",
    "unit": 2,
    "theme": "Nicelikler ve Değişimler",
    "color": "#10B981",
    "icon": "🔢",
    "title": "Mutlak Değer Aynası",
    "description": "Doğrusal bir fonksiyon mutlak değer içine alındığında, x-ekseni (su yüzeyi) bir ayna gibi davranarak negatif bölgeyi yukarı katlar.",
    "kazanim": "MAT.9.2.2. Mutlak Değer Fonksiyonu (Animasyon)",
    "tags": [
      "mutlak",
      "değer",
      "aynası",
      "doğrusal",
      "fonksiyon",
      "içine",
      "alındığında",
      "ekseni",
      "yüzeyi",
      "ayna"
    ],
    "animations": [
      {
        "label": "Animasyon: Mutlak Değer Aynası",
        "file": "MAT_9_2_2_Animasyon.html",
        "url": "apps/9_Sinif/MAT_9_2_2_Animasyon.html",
        "title": "Mutlak Değer Aynası",
        "isDraft": false
      }
    ],
    "labs": [
      {
        "label": "İnteraktif Laboratuvar",
        "file": "MAT_9_2_2_Etkinlik.html",
        "url": "apps/9_Sinif/MAT_9_2_2_Etkinlik.html",
        "title": "Lazer Yansıma Simülatörü",
        "isDraft": false
      }
    ],
    "hasCompletedContent": true,
    "hasDraftPart": false
  },
  {
    "id": "mat-9-2-3",
    "code": "MAT.9.2.3",
    "grade": 9,
    "levelGroup": "Lise",
    "unit": 2,
    "theme": "Nicelikler ve Değişimler",
    "color": "#10B981",
    "icon": "⭕",
    "title": "Piyasa Denge Fiyatı (Arz-Talep)",
    "description": "Ekonomi disiplininde piyasa denge fiyatı, iki doğrusal fonksiyonun (Arz ve Talep) birbirine eşitlendiği denklem çözümüyle bulunur.",
    "kazanim": "MAT.9.2.3. Doğrusal Denklemler (Animasyon)",
    "tags": [
      "piyasa",
      "denge",
      "fiyatı",
      "arz",
      "talep",
      "ekonomi",
      "disiplininde",
      "iki",
      "doğrusal",
      "fonksiyonun"
    ],
    "animations": [
      {
        "label": "Animasyon: Piyasa Denge Fiyatı (Arz-Talep)",
        "file": "MAT_9_2_3_Animasyon.html",
        "url": "apps/9_Sinif/MAT_9_2_3_Animasyon.html",
        "title": "Piyasa Denge Fiyatı (Arz-Talep)",
        "isDraft": false
      }
    ],
    "labs": [
      {
        "label": "İnteraktif Laboratuvar",
        "file": "MAT_9_2_3_Etkinlik.html",
        "url": "apps/9_Sinif/MAT_9_2_3_Etkinlik.html",
        "title": "Dinamik Denklem Terazisi",
        "isDraft": false
      }
    ],
    "hasCompletedContent": true,
    "hasDraftPart": false
  },
  {
    "id": "mat-9-3-1",
    "code": "MAT.9.3.1",
    "grade": 9,
    "levelGroup": "Lise",
    "unit": 3,
    "theme": "Algoritma ve Bilişim",
    "color": "#06B6D4",
    "icon": "⚙️",
    "title": "Akış Şeması Simülasyonu",
    "description": "Matematiksel ve günlük yaşam problemleri algoritmalarla (akış şemalarıyla) adım adım çözülür.",
    "kazanim": "MAT.9.3.1. Algoritma Akış Şeması (Animasyon)",
    "tags": [
      "akış",
      "şeması",
      "simülasyonu",
      "matematiksel",
      "günlük",
      "yaşam",
      "problemleri",
      "algoritmalarla",
      "şemalarıyla",
      "adım"
    ],
    "animations": [
      {
        "label": "Animasyon: Akış Şeması Simülasyonu",
        "file": "MAT_9_3_1_Animasyon.html",
        "url": "apps/9_Sinif/MAT_9_3_1_Animasyon.html",
        "title": "Akış Şeması Simülasyonu",
        "isDraft": false
      }
    ],
    "labs": [
      {
        "label": "İnteraktif Laboratuvar",
        "file": "MAT_9_3_1_Etkinlik.html",
        "url": "apps/9_Sinif/MAT_9_3_1_Etkinlik.html",
        "title": "Sözde Kod Sıralayıcı",
        "isDraft": false
      }
    ],
    "hasCompletedContent": true,
    "hasDraftPart": false
  },
  {
    "id": "mat-9-3-2",
    "code": "MAT.9.3.2",
    "grade": 9,
    "levelGroup": "Lise",
    "unit": 3,
    "theme": "Algoritma ve Bilişim",
    "color": "#06B6D4",
    "icon": "⚙️",
    "title": "Mantık Kapıları Lojik Akış",
    "description": "Matematikteki \"VE\" (\\land) ile \"VEYA\" (\\lor) bağlaçları, bilgisayar algoritmalarının kalbinde yatan elektronik kapılardır.",
    "kazanim": "MAT.9.3.2. Mantık Bağlaçları (Animasyon)",
    "tags": [
      "mantık",
      "kapıları",
      "lojik",
      "akış",
      "matematikteki",
      "land",
      "veya",
      "lor",
      "bağlaçları",
      "bilgisayar"
    ],
    "animations": [
      {
        "label": "Animasyon: Mantık Kapıları Lojik Akış",
        "file": "MAT_9_3_2_Animasyon.html",
        "url": "apps/9_Sinif/MAT_9_3_2_Animasyon.html",
        "title": "Mantık Kapıları Lojik Akış",
        "isDraft": false
      }
    ],
    "labs": [
      {
        "label": "İnteraktif Laboratuvar",
        "file": "MAT_9_3_2_Etkinlik.html",
        "url": "apps/9_Sinif/MAT_9_3_2_Etkinlik.html",
        "title": "Mantık Devresi Laboratuvarı",
        "isDraft": false
      }
    ],
    "hasCompletedContent": true,
    "hasDraftPart": false
  },
  {
    "id": "mat-9-3-3",
    "code": "MAT.9.3.3",
    "grade": 9,
    "levelGroup": "Lise",
    "unit": 3,
    "theme": "Algoritma ve Bilişim",
    "color": "#06B6D4",
    "icon": "⚙️",
    "title": "Algoritmik İspat Makinesi",
    "description": "Önermelerin doğruluğu cebirsel algoritmalar ile adım adım kanıtlanabilir. Mantığın kesinliği ve yalınlığı burada yatar.",
    "kazanim": "MAT.9.3.3. Algoritmik İspat (Animasyon)",
    "tags": [
      "algoritmik",
      "ispat",
      "makinesi",
      "önermelerin",
      "doğruluğu",
      "cebirsel",
      "algoritmalar",
      "adım",
      "kanıtlanabilir",
      "mantığın"
    ],
    "animations": [
      {
        "label": "Animasyon: Algoritmik İspat Makinesi",
        "file": "MAT_9_3_3_Animasyon.html",
        "url": "apps/9_Sinif/MAT_9_3_3_Animasyon.html",
        "title": "Algoritmik İspat Makinesi",
        "isDraft": false
      }
    ],
    "labs": [
      {
        "label": "İnteraktif Laboratuvar",
        "file": "MAT_9_3_3_Etkinlik.html",
        "url": "apps/9_Sinif/MAT_9_3_3_Etkinlik.html",
        "title": "Doğruluk Tablosu Motoru",
        "isDraft": false
      }
    ],
    "hasCompletedContent": true,
    "hasDraftPart": false
  },
  {
    "id": "mat-9-4-1",
    "code": "MAT.9.4.1",
    "grade": 9,
    "levelGroup": "Lise",
    "unit": 4,
    "theme": "Geometrik Şekiller",
    "color": "#8B5CF6",
    "icon": "📐",
    "title": "Açı-Kenar İlişkisi",
    "description": "Üçgende açılar ile karşılarındaki kenarlar arasında organik bir gerilim bağı vardır. Biri artarsa diğeri de artmak zorundadır.",
    "kazanim": "MAT.9.4.1. Üçgenin Elemanları (Animasyon)",
    "tags": [
      "açı",
      "kenar",
      "ilişkisi",
      "üçgende",
      "açılar",
      "karşılarındaki",
      "kenarlar",
      "arasında",
      "organik",
      "gerilim"
    ],
    "animations": [
      {
        "label": "Animasyon: Açı-Kenar İlişkisi",
        "file": "MAT_9_4_1_Animasyon.html",
        "url": "apps/9_Sinif/MAT_9_4_1_Animasyon.html",
        "title": "Açı-Kenar İlişkisi",
        "isDraft": false
      }
    ],
    "labs": [
      {
        "label": "İnteraktif Laboratuvar",
        "file": "MAT_9_4_1_Etkinlik.html",
        "url": "apps/9_Sinif/MAT_9_4_1_Etkinlik.html",
        "title": "Dinamik Üçgen İnşaatçısı",
        "isDraft": false
      }
    ],
    "hasCompletedContent": true,
    "hasDraftPart": false
  },
  {
    "id": "mat-9-4-2",
    "code": "MAT.9.4.2",
    "grade": 9,
    "levelGroup": "Lise",
    "unit": 4,
    "theme": "Geometrik Şekiller",
    "color": "#8B5CF6",
    "icon": "⭕",
    "title": "Pisagor Su Deneyi",
    "description": "Dik üçgenin dik kenarları üzerine kurulan karelerin alanları toplamı, hipotenüs üzerine kurulan karenin alanına eşittir.",
    "kazanim": "MAT.9.4.2. Pisagor Bağıntısı (Animasyon)",
    "tags": [
      "pisagor",
      "deneyi",
      "dik",
      "üçgenin",
      "kenarları",
      "üzerine",
      "kurulan",
      "karelerin",
      "alanları",
      "toplamı"
    ],
    "animations": [
      {
        "label": "Animasyon: Pisagor Su Deneyi",
        "file": "MAT_9_4_2_Animasyon.html",
        "url": "apps/9_Sinif/MAT_9_4_2_Animasyon.html",
        "title": "Pisagor Su Deneyi",
        "isDraft": false
      }
    ],
    "labs": [
      {
        "label": "İnteraktif Laboratuvar",
        "file": "MAT_9_4_2_Etkinlik.html",
        "url": "apps/9_Sinif/MAT_9_4_2_Etkinlik.html",
        "title": "Öklid Şelalesi",
        "isDraft": false
      }
    ],
    "hasCompletedContent": true,
    "hasDraftPart": false
  },
  {
    "id": "mat-9-4-3",
    "code": "MAT.9.4.3",
    "grade": 9,
    "levelGroup": "Lise",
    "unit": 4,
    "theme": "Geometrik Şekiller",
    "color": "#8B5CF6",
    "icon": "📐",
    "title": "Thales Gölge Boyu",
    "description": "Thales, Mısır piramitlerinin yüksekliğini sadece bir çubuğun gölgesi ile piramidin gölgesini oranlayarak bulmuştur. (Benzerlik)",
    "kazanim": "MAT.9.4.3. Thales Teoremi (Animasyon)",
    "tags": [
      "thales",
      "gölge",
      "boyu",
      "mısır",
      "piramitlerinin",
      "yüksekliğini",
      "sadece",
      "çubuğun",
      "gölgesi",
      "piramidin"
    ],
    "animations": [
      {
        "label": "Animasyon: Thales Gölge Boyu",
        "file": "MAT_9_4_3_Animasyon.html",
        "url": "apps/9_Sinif/MAT_9_4_3_Animasyon.html",
        "title": "Thales Gölge Boyu",
        "isDraft": false
      }
    ],
    "labs": [
      {
        "label": "İnteraktif Laboratuvar",
        "file": "MAT_9_4_3_Etkinlik.html",
        "url": "apps/9_Sinif/MAT_9_4_3_Etkinlik.html",
        "title": "Sierpinski Benzerlik Fraktalı",
        "isDraft": false
      }
    ],
    "hasCompletedContent": true,
    "hasDraftPart": false
  },
  {
    "id": "mat-9-4-4",
    "code": "MAT.9.4.4",
    "grade": 9,
    "levelGroup": "Lise",
    "unit": 4,
    "theme": "Geometrik Şekiller",
    "color": "#8B5CF6",
    "icon": "🌀",
    "title": "Trigonometri Birim Çember",
    "description": "Birim çember (Hipotenüsü 1 olan dik üçgen) sayesinde, Karşı dik kenar direkt Sinüs , Komşu dik kenar ise direkt Kosinüs olur.",
    "kazanim": "MAT.9.4.4. Trigonometrik Oranlar (Animasyon)",
    "tags": [
      "trigonometri",
      "birim",
      "çember",
      "hipotenüsü",
      "dik",
      "üçgen",
      "sayesinde",
      "karşı",
      "kenar",
      "direkt"
    ],
    "animations": [
      {
        "label": "Animasyon: Trigonometri Birim Çember",
        "file": "MAT_9_4_4_Animasyon.html",
        "url": "apps/9_Sinif/MAT_9_4_4_Animasyon.html",
        "title": "Trigonometri Birim Çember",
        "isDraft": false
      }
    ],
    "labs": [
      {
        "label": "İnteraktif Laboratuvar",
        "file": "MAT_9_4_4_Etkinlik.html",
        "url": "apps/9_Sinif/MAT_9_4_4_Etkinlik.html",
        "title": "Sin-Cos-Tan Laboratuvarı",
        "isDraft": false
      }
    ],
    "hasCompletedContent": true,
    "hasDraftPart": false
  },
  {
    "id": "mat-10-1-1",
    "code": "MAT.10.1.1",
    "grade": 10,
    "levelGroup": "Lise",
    "unit": 1,
    "theme": "Sayılar ve Bölünebilme",
    "color": "#3B82F6",
    "icon": "🔢",
    "title": "Bölen Makinesi",
    "description": "Bir sayının bölen sayısı formülü (üsleri 1 artırıp çarpma) nereden gelir? 12 sayısının bölenleri üzerinden makineyi çalıştırarak formülün mantığını görelim.",
    "kazanim": "MAT.10.1.1. Asal Çarpanlar ve Bölenler (Animasyon)",
    "tags": [
      "bölen",
      "makinesi",
      "sayının",
      "sayısı",
      "formülü",
      "üsleri",
      "artırıp",
      "çarpma",
      "nereden",
      "gelir"
    ],
    "animations": [
      {
        "label": "Animasyon: Bölen Makinesi",
        "file": "MAT_10_1_1_Animasyon.html",
        "url": "apps/10_Sinif/MAT_10_1_1_Animasyon.html",
        "title": "Bölen Makinesi",
        "isDraft": false
      }
    ],
    "labs": [
      {
        "label": "İnteraktif Laboratuvar",
        "file": "MAT_10_1_1_Etkinlik.html",
        "url": "apps/10_Sinif/MAT_10_1_1_Etkinlik.html",
        "title": "Asal Çarpan Ağacı",
        "isDraft": false
      }
    ],
    "hasCompletedContent": true,
    "hasDraftPart": false
  },
  {
    "id": "mat-10-1-2",
    "code": "MAT.10.1.2",
    "grade": 10,
    "levelGroup": "Lise",
    "unit": 1,
    "theme": "Sayılar ve Bölünebilme",
    "color": "#3B82F6",
    "icon": "🧬",
    "title": "EKOK Çark ve Dişli",
    "description": "Farklı büyüklükteki iki dişli çark döndüklerinde, aynı kırmızı işaretli dişlerin tekrar yan yana gelmesi için toplam kaç diş geçmesi gerekir?",
    "kazanim": "MAT.10.1.2. EBOB ve EKOK Mantığı (Animasyon)",
    "tags": [
      "ekok",
      "çark",
      "dişli",
      "farklı",
      "büyüklükteki",
      "iki",
      "döndüklerinde",
      "aynı",
      "kırmızı",
      "işaretli"
    ],
    "animations": [
      {
        "label": "Animasyon: EKOK Çark ve Dişli",
        "file": "MAT_10_1_2_Animasyon.html",
        "url": "apps/10_Sinif/MAT_10_1_2_Animasyon.html",
        "title": "EKOK Çark ve Dişli",
        "isDraft": false
      }
    ],
    "labs": [
      {
        "label": "İnteraktif Laboratuvar",
        "file": "MAT_10_1_2_Etkinlik.html",
        "url": "apps/10_Sinif/MAT_10_1_2_Etkinlik.html",
        "title": "EBOB Fayans Simülasyonu",
        "isDraft": false
      }
    ],
    "hasCompletedContent": true,
    "hasDraftPart": false
  },
  {
    "id": "mat-10-1-3",
    "code": "MAT.10.1.3",
    "grade": 10,
    "levelGroup": "Lise",
    "unit": 1,
    "theme": "Sayılar ve Bölünebilme",
    "color": "#3B82F6",
    "icon": "🔢",
    "title": "Kalanı Bulma Mantığı",
    "description": "Aralarında asal olan 3 ve 4 ile bölümünden kalanlar biliniyorsa, bu sayının 12'ye bölümünden kalanı (c) makinede gözlemleyelim.",
    "kazanim": "MAT.10.1.3. Aralarında Asal Çarpanlarla Kalan İlişkisi (Animasyon)",
    "tags": [
      "kalanı",
      "bulma",
      "mantığı",
      "aralarında",
      "asal",
      "bölümünden",
      "kalanlar",
      "biliniyorsa",
      "sayının",
      "makinede"
    ],
    "animations": [
      {
        "label": "Animasyon: Kalanı Bulma Mantığı",
        "file": "MAT_10_1_3_Animasyon.html",
        "url": "apps/10_Sinif/MAT_10_1_3_Animasyon.html",
        "title": "Kalanı Bulma Mantığı",
        "isDraft": false
      }
    ],
    "labs": [
      {
        "label": "İnteraktif Laboratuvar",
        "file": "MAT_10_1_3_Etkinlik.html",
        "url": "apps/10_Sinif/MAT_10_1_3_Etkinlik.html",
        "title": "Taban Bloklarıyla Bölünebilme İspatı",
        "isDraft": false
      }
    ],
    "hasCompletedContent": true,
    "hasDraftPart": false
  },
  {
    "id": "mat-10-2-1",
    "code": "MAT.10.2.1",
    "grade": 10,
    "levelGroup": "Lise",
    "unit": 2,
    "theme": "Nicelikler ve Değişimler (Fonksiyonlar)",
    "color": "#10B981",
    "icon": "📈",
    "title": "Fonksiyon Olma Şartı",
    "description": "Bir A kümesinden B kümesine tanımlanan bir bağıntının \"Fonksiyon\" olabilmesi için iki altın kural vardır: 1) Tanım kümesinde boşta eleman kalamaz. 2) Tanım kümesindeki bir eleman iki farklı yere gidemez.",
    "kazanim": "MAT.10.2.1. Fonksiyon Kavramı",
    "tags": [
      "fonksiyon",
      "olma",
      "şartı",
      "kümesinden",
      "kümesine",
      "tanımlanan",
      "bağıntının",
      "olabilmesi",
      "iki",
      "altın"
    ],
    "animations": [
      {
        "label": "Animasyon: Fonksiyon Olma Şartı",
        "file": "MAT_10_2_1_Animasyon.html",
        "url": "apps/10_Sinif/MAT_10_2_1_Animasyon.html",
        "title": "Fonksiyon Olma Şartı",
        "isDraft": false
      }
    ],
    "labs": [
      {
        "label": "İnteraktif Laboratuvar",
        "file": "MAT_10_2_1_Etkinlik.html",
        "url": "apps/10_Sinif/MAT_10_2_1_Etkinlik.html",
        "title": "Fonksiyon Makinesi",
        "isDraft": false
      }
    ],
    "hasCompletedContent": true,
    "hasDraftPart": false
  },
  {
    "id": "mat-10-2-2",
    "code": "MAT.10.2.2",
    "grade": 10,
    "levelGroup": "Lise",
    "unit": 2,
    "theme": "Nicelikler ve Değişimler (Fonksiyonlar)",
    "color": "#10B981",
    "icon": "📈",
    "title": "Taksimetre (Doğrusal Fonksiyon)",
    "description": "Gerçek hayattaki birçok artış doğrusal fonksiyondur. Taksimetrenin açılış ücreti (y-keseni) ve KM başı ücreti (eğim) belirleyip yolculuğu başlatın.",
    "kazanim": "MAT.10.2.2. Doğrusal Fonksiyonlar (Animasyon)",
    "tags": [
      "taksimetre",
      "doğrusal",
      "fonksiyon",
      "gerçek",
      "hayattaki",
      "birçok",
      "artış",
      "fonksiyondur",
      "taksimetrenin",
      "açılış"
    ],
    "animations": [
      {
        "label": "Animasyon: Taksimetre (Doğrusal Fonksiyon)",
        "file": "MAT_10_2_2_Animasyon.html",
        "url": "apps/10_Sinif/MAT_10_2_2_Animasyon.html",
        "title": "Taksimetre (Doğrusal Fonksiyon)",
        "isDraft": false
      }
    ],
    "labs": [
      {
        "label": "İnteraktif Laboratuvar",
        "file": "MAT_10_2_2_Etkinlik.html",
        "url": "apps/10_Sinif/MAT_10_2_2_Etkinlik.html",
        "title": "Doğrusal Fonksiyonlar",
        "isDraft": false
      }
    ],
    "hasCompletedContent": true,
    "hasDraftPart": false
  },
  {
    "id": "mat-10-2-3",
    "code": "MAT.10.2.3",
    "grade": 10,
    "levelGroup": "Lise",
    "unit": 2,
    "theme": "Nicelikler ve Değişimler (Fonksiyonlar)",
    "color": "#10B981",
    "icon": "📈",
    "title": "Parçalı Fonksiyon (Kargo Fiyatlandırma)",
    "description": "Kargo şirketleri ağırlığa göre farklı tarife (kural) uygularlar. 0-5 kg arası sabit 30₺, 5-10 kg arası her kilo +5₺, 10 kg üstü her kilo +10₺ artar.",
    "kazanim": "MAT.10.2.3. Parçalı Fonksiyonlar (Animasyon)",
    "tags": [
      "parçalı",
      "fonksiyon",
      "kargo",
      "fiyatlandırma",
      "şirketleri",
      "ağırlığa",
      "farklı",
      "tarife",
      "kural",
      "uygularlar"
    ],
    "animations": [
      {
        "label": "Animasyon: Parçalı Fonksiyon (Kargo Fiyatlandırma)",
        "file": "MAT_10_2_3_Animasyon.html",
        "url": "apps/10_Sinif/MAT_10_2_3_Animasyon.html",
        "title": "Parçalı Fonksiyon (Kargo Fiyatlandırma)",
        "isDraft": false
      }
    ],
    "labs": [
      {
        "label": "İnteraktif Laboratuvar",
        "file": "MAT_10_2_3_Etkinlik.html",
        "url": "apps/10_Sinif/MAT_10_2_3_Etkinlik.html",
        "title": "Parçalı Fonksiyon Laboratuvarı",
        "isDraft": false
      }
    ],
    "hasCompletedContent": true,
    "hasDraftPart": false
  },
  {
    "id": "mat-10-2-4",
    "code": "MAT.10.2.4",
    "grade": 10,
    "levelGroup": "Lise",
    "unit": 2,
    "theme": "Nicelikler ve Değişimler (Fonksiyonlar)",
    "color": "#10B981",
    "icon": "📈",
    "title": "Parabol (Atış)",
    "description": "Yerçekimi altında fırlatılan bir cismin izlediği yol her zaman bir paraboldür. Fırlatma açısı ve hızını değiştirerek parabolün tepe noktasının (k) ve menzilinin nasıl değiştiğini görün.",
    "kazanim": "MAT.10.2.4. İkinci Dereceden Fonksiyonlar (Animasyon)",
    "tags": [
      "parabol",
      "atış",
      "yerçekimi",
      "altında",
      "fırlatılan",
      "cismin",
      "izlediği",
      "yol",
      "her",
      "zaman"
    ],
    "animations": [
      {
        "label": "Animasyon: Parabol (Atış)",
        "file": "MAT_10_2_4_Animasyon.html",
        "url": "apps/10_Sinif/MAT_10_2_4_Animasyon.html",
        "title": "Parabol (Atış)",
        "isDraft": false
      }
    ],
    "labs": [
      {
        "label": "İnteraktif Laboratuvar",
        "file": "MAT_10_2_4_Etkinlik.html",
        "url": "apps/10_Sinif/MAT_10_2_4_Etkinlik.html",
        "title": "Parabol (Karesel Fonksiyon) Dönüşümleri",
        "isDraft": false
      }
    ],
    "hasCompletedContent": true,
    "hasDraftPart": false
  },
  {
    "id": "mat-10-2-5",
    "code": "MAT.10.2.5",
    "grade": 10,
    "levelGroup": "Lise",
    "unit": 2,
    "theme": "Nicelikler ve Değişimler (Fonksiyonlar)",
    "color": "#10B981",
    "icon": "📈",
    "title": "Bileşke Fonksiyon (İndirim ve KDV)",
    "description": "Bileşke fonksiyonlar peş peşe uygulanan işlemlerdir. Örneğin bir ürüne önce %20 indirim (g(x)), ardından indirimli fiyata %10 KDV (f(x)) uygulandığında f(g(x)) bileşke fonksiyonu oluşur.",
    "kazanim": "MAT.10.2.5. Bileşke Fonksiyonlar (Animasyon)",
    "tags": [
      "bileşke",
      "fonksiyon",
      "indirim",
      "kdv",
      "fonksiyonlar",
      "peş",
      "peşe",
      "uygulanan",
      "işlemlerdir",
      "örneğin"
    ],
    "animations": [
      {
        "label": "Animasyon: Bileşke Fonksiyon (İndirim ve KDV)",
        "file": "MAT_10_2_5_Animasyon.html",
        "url": "apps/10_Sinif/MAT_10_2_5_Animasyon.html",
        "title": "Bileşke Fonksiyon (İndirim ve KDV)",
        "isDraft": false
      }
    ],
    "labs": [
      {
        "label": "İnteraktif Laboratuvar",
        "file": "MAT_10_2_5_Etkinlik.html",
        "url": "apps/10_Sinif/MAT_10_2_5_Etkinlik.html",
        "title": "Bileşke Fonksiyon Makinesi",
        "isDraft": false
      }
    ],
    "hasCompletedContent": true,
    "hasDraftPart": false
  },
  {
    "id": "mat-10-2-6",
    "code": "MAT.10.2.6",
    "grade": 10,
    "levelGroup": "Lise",
    "unit": 2,
    "theme": "Nicelikler ve Değişimler (Fonksiyonlar)",
    "color": "#10B981",
    "icon": "📈",
    "title": "Ters Fonksiyon Aynası",
    "description": "Bir fonksiyonun tersi ile kendisinin grafikleri her zaman  y = x  doğrusuna (aynaya) göre simetriktir.  (x, y) \\to (y, x) \\) noktasal geçişini animasyonla görelim.",
    "kazanim": "MAT.10.2.6. Ters Fonksiyonlar (Animasyon)",
    "tags": [
      "ters",
      "fonksiyon",
      "aynası",
      "fonksiyonun",
      "tersi",
      "kendisinin",
      "grafikleri",
      "her",
      "zaman",
      "doğrusuna"
    ],
    "animations": [
      {
        "label": "Animasyon: Ters Fonksiyon Aynası",
        "file": "MAT_10_2_6_Animasyon.html",
        "url": "apps/10_Sinif/MAT_10_2_6_Animasyon.html",
        "title": "Ters Fonksiyon Aynası",
        "isDraft": false
      }
    ],
    "labs": [
      {
        "label": "İnteraktif Laboratuvar",
        "file": "MAT_10_2_6_Etkinlik.html",
        "url": "apps/10_Sinif/MAT_10_2_6_Etkinlik.html",
        "title": "Ters Fonksiyon Makinesi",
        "isDraft": false
      }
    ],
    "hasCompletedContent": true,
    "hasDraftPart": false
  },
  {
    "id": "mat-10-3-1",
    "code": "MAT.10.3.1",
    "grade": 10,
    "levelGroup": "Lise",
    "unit": 3,
    "theme": "Sayma, Algoritma ve Bilişim",
    "color": "#06B6D4",
    "icon": "⚙️",
    "title": "Izgarada Yol Bulma",
    "description": "A noktasından B noktasına sadece sağa ve aşağıya giderek kaç farklı yoldan ulaşılabileceğini köşe noktalarındaki sayıları toplayarak hesaplayalım.",
    "kazanim": "MAT.10.3.1. Sayma Stratejileri (Animasyon)",
    "tags": [
      "ızgarada",
      "yol",
      "bulma",
      "noktasından",
      "noktasına",
      "sadece",
      "sağa",
      "aşağıya",
      "giderek",
      "kaç"
    ],
    "animations": [
      {
        "label": "Animasyon: Izgarada Yol Bulma",
        "file": "MAT_10_3_1_Animasyon.html",
        "url": "apps/10_Sinif/MAT_10_3_1_Animasyon.html",
        "title": "Izgarada Yol Bulma",
        "isDraft": false
      }
    ],
    "labs": [
      {
        "label": "İnteraktif Laboratuvar",
        "file": "MAT_10_3_1_Etkinlik.html",
        "url": "apps/10_Sinif/MAT_10_3_1_Etkinlik.html",
        "title": "Pascal Üçgeni ve Kombinasyon",
        "isDraft": false
      }
    ],
    "hasCompletedContent": true,
    "hasDraftPart": false
  },
  {
    "id": "mat-10-3-2",
    "code": "MAT.10.3.2",
    "grade": 10,
    "levelGroup": "Lise",
    "unit": 3,
    "theme": "Sayma, Algoritma ve Bilişim",
    "color": "#06B6D4",
    "icon": "⚙️",
    "title": "Faktöriyel Algoritma Simülatörü",
    "description": "Bir bilgisayarın cebirsel bir işlemi (çarpım ve döngü) algoritmik mantıkla ve akış şeması kullanarak nasıl hesapladığını adım adım inceleyin.",
    "kazanim": "MAT.10.3.2. Algoritma ve Bilişim (Akış Şeması)",
    "tags": [
      "faktöriyel",
      "algoritma",
      "simülatörü",
      "bilgisayarın",
      "cebirsel",
      "işlemi",
      "çarpım",
      "döngü",
      "algoritmik",
      "mantıkla"
    ],
    "animations": [
      {
        "label": "Animasyon: Olasılık ve Kombinasyon",
        "file": "MAT_10_3_2_Animasyon.html",
        "url": "apps/10_Sinif/MAT_10_3_2_Animasyon.html",
        "title": "Olasılık ve Kombinasyon",
        "isDraft": true
      }
    ],
    "labs": [
      {
        "label": "İnteraktif Laboratuvar",
        "file": "MAT_10_3_2_Etkinlik.html",
        "url": "apps/10_Sinif/MAT_10_3_2_Etkinlik.html",
        "title": "Faktöriyel Algoritma Simülatörü",
        "isDraft": false
      }
    ],
    "hasCompletedContent": true,
    "hasDraftPart": true
  },
  {
    "id": "mat-10-4-1",
    "code": "MAT.10.4.1",
    "grade": 10,
    "levelGroup": "Lise",
    "unit": 4,
    "theme": "Geometrik Şekiller ve Trigonometri",
    "color": "#F59E0B",
    "icon": "🌀",
    "title": "Dinamik Birim Çember",
    "description": "Birim çember üzerindeki noktayı (beyaz/mavi daire) fare ile sürükleyerek sinüs, kosinüs, tanjant ve kotanjant eksenlerinin geometrik anlamını keşfedin.",
    "kazanim": "MAT.10.4.1. Birim Çember ve Trigonometrik Oranlar",
    "tags": [
      "dinamik",
      "birim",
      "çember",
      "üzerindeki",
      "noktayı",
      "beyaz",
      "mavi",
      "daire",
      "fare",
      "sürükleyerek"
    ],
    "animations": [
      {
        "label": "Animasyon: Fonksiyonlara Giriş",
        "file": "MAT_10_4_1_Animasyon.html",
        "url": "apps/10_Sinif/MAT_10_4_1_Animasyon.html",
        "title": "Fonksiyonlara Giriş",
        "isDraft": true
      }
    ],
    "labs": [
      {
        "label": "İnteraktif Laboratuvar",
        "file": "MAT_10_4_1_Etkinlik.html",
        "url": "apps/10_Sinif/MAT_10_4_1_Etkinlik.html",
        "title": "Dinamik Birim Çember",
        "isDraft": false
      }
    ],
    "hasCompletedContent": true,
    "hasDraftPart": true
  },
  {
    "id": "mat-10-4-2",
    "code": "MAT.10.4.2",
    "grade": 10,
    "levelGroup": "Lise",
    "unit": 4,
    "theme": "Geometrik Şekiller ve Trigonometri",
    "color": "#F59E0B",
    "icon": "🌀",
    "title": "Üçgenin Merkezleri Simülatörü",
    "description": "A, B ve C köşelerini sürükleyerek geniş, dar ve dik açılı üçgenler oluşturun. Yardımcı elemanların kesişim noktalarının (Diklik Merkezi, Ağırlık Merkezi) üçgenin dışına nasıl çıktığını gözlemleyin.",
    "kazanim": "MAT.10.4.2. Üçgenin Yardımcı Elemanları",
    "tags": [
      "üçgenin",
      "merkezleri",
      "simülatörü",
      "köşelerini",
      "sürükleyerek",
      "geniş",
      "dar",
      "dik",
      "açılı",
      "üçgenler"
    ],
    "animations": [
      {
        "label": "Animasyon: Üçgenin Merkezleri Simülatörü",
        "file": "MAT_10_4_2_Animasyon.html",
        "url": "apps/10_Sinif/MAT_10_4_2_Animasyon.html",
        "title": "Üçgenin Merkezleri Simülatörü",
        "isDraft": false
      }
    ],
    "labs": [
      {
        "label": "İnteraktif Laboratuvar",
        "file": "MAT_10_4_2_Etkinlik.html",
        "url": "apps/10_Sinif/MAT_10_4_2_Etkinlik.html",
        "title": "Fonksiyon Çeşitleri",
        "isDraft": true
      }
    ],
    "hasCompletedContent": true,
    "hasDraftPart": true
  },
  {
    "id": "mat-10-4-4",
    "code": "MAT.10.4.4",
    "grade": 10,
    "levelGroup": "Lise",
    "unit": 4,
    "theme": "Geometrik Şekiller ve Trigonometri",
    "color": "#F59E0B",
    "icon": "🌀",
    "title": "Kosinüs Teoremi İspat Makinesi",
    "description": "İki kenar uzunluğu ve aralarındaki açıyı değiştirdiğinizde karşıdaki kenarın (a) nasıl değiştiğini izleyin. Açıyı tam 90° yaptığınızda formülün nasıl Pisagor Teoremine dönüştüğüne dikkat edin.",
    "kazanim": "MAT.10.4.4. Kosinüs Teoremi İspatı",
    "tags": [
      "kosinüs",
      "teoremi",
      "ispat",
      "makinesi",
      "iki",
      "kenar",
      "uzunluğu",
      "aralarındaki",
      "açıyı",
      "değiştirdiğinizde"
    ],
    "animations": [
      {
        "label": "Animasyon: Fonksiyon Grafikleri",
        "file": "MAT_10_4_4_Animasyon.html",
        "url": "apps/10_Sinif/MAT_10_4_4_Animasyon.html",
        "title": "Fonksiyon Grafikleri",
        "isDraft": true
      }
    ],
    "labs": [
      {
        "label": "İnteraktif Laboratuvar",
        "file": "MAT_10_4_4_Etkinlik.html",
        "url": "apps/10_Sinif/MAT_10_4_4_Etkinlik.html",
        "title": "Kosinüs Teoremi İspat Makinesi",
        "isDraft": false
      }
    ],
    "hasCompletedContent": true,
    "hasDraftPart": true
  },
  {
    "id": "mat-10-5-1",
    "code": "MAT.10.5.1",
    "grade": 10,
    "levelGroup": "Lise",
    "unit": 5,
    "theme": "Analitik Geometri",
    "color": "#8B5CF6",
    "icon": "🔢",
    "title": "Analitik Uzaklık ve Oran Radarı",
    "description": "A ve B hedeflerini sürükleyerek konumlarını değiştirin. Uzaklığın (Pisagor) ve aradaki C noktasının koordinatlarının (Benzerlik) nasıl hesaplandığını anlık takip edin.",
    "kazanim": "MAT.10.5.1. Uzaklık ve İçten Bölen Nokta",
    "tags": [
      "analitik",
      "uzaklık",
      "oran",
      "radarı",
      "hedeflerini",
      "sürükleyerek",
      "konumlarını",
      "değiştirin",
      "uzaklığın",
      "pisagor"
    ],
    "animations": [
      {
        "label": "Animasyon: Polinomlar",
        "file": "MAT_10_5_1_Animasyon.html",
        "url": "apps/10_Sinif/MAT_10_5_1_Animasyon.html",
        "title": "Polinomlar",
        "isDraft": true
      }
    ],
    "labs": [
      {
        "label": "İnteraktif Laboratuvar",
        "file": "MAT_10_5_1_Etkinlik.html",
        "url": "apps/10_Sinif/MAT_10_5_1_Etkinlik.html",
        "title": "Analitik Uzaklık ve Oran Radarı",
        "isDraft": false
      }
    ],
    "hasCompletedContent": true,
    "hasDraftPart": true
  },
  {
    "id": "mat-10-5-2",
    "code": "MAT.10.5.2",
    "grade": 10,
    "levelGroup": "Lise",
    "unit": 5,
    "theme": "Analitik Geometri",
    "color": "#8B5CF6",
    "icon": "📈",
    "title": "Doğru Denklemi ve Eğim Simülatörü",
    "description": "Eğim (m) ve y-eksenini kestiği nokta (n) değerlerini değiştirerek doğrunun hareketini izleyin. Dik doğruların eğimleri çarpımının neden -1 olduğunu keşfedin.",
    "kazanim": "MAT.10.5.2. Doğru Denklemi ve Eğim",
    "tags": [
      "doğru",
      "denklemi",
      "eğim",
      "simülatörü",
      "eksenini",
      "kestiği",
      "nokta",
      "değerlerini",
      "değiştirerek",
      "doğrunun"
    ],
    "animations": [
      {
        "label": "Animasyon: Çarpanlara Ayırma",
        "file": "MAT_10_5_2_Animasyon.html",
        "url": "apps/10_Sinif/MAT_10_5_2_Animasyon.html",
        "title": "Çarpanlara Ayırma",
        "isDraft": true
      }
    ],
    "labs": [
      {
        "label": "İnteraktif Laboratuvar",
        "file": "MAT_10_5_2_Etkinlik.html",
        "url": "apps/10_Sinif/MAT_10_5_2_Etkinlik.html",
        "title": "Doğru Denklemi ve Eğim Simülatörü",
        "isDraft": false
      }
    ],
    "hasCompletedContent": true,
    "hasDraftPart": true
  },
  {
    "id": "mat-10-6-1",
    "code": "MAT.10.6.1",
    "grade": 10,
    "levelGroup": "Lise",
    "unit": 6,
    "theme": "İstatistiksel Araştırma Süreci",
    "color": "#F43F5E",
    "icon": "📊",
    "title": "Veri Bilimi Laboratuvarı",
    "description": "İki kategorik değişkenli verileri analiz edin. Çapraz tabloyu (iki yönlü tablo) doldurun, göreli sıklıkları hesaplayın ve medyadaki \"yanıltıcı grafik\" taktiklerinin nasıl yapıldığını keşfedin.",
    "kazanim": "MAT.10.6.1 - 10.6.2. Veri Analizi ve İstatistiksel Hatalar",
    "tags": [
      "veri",
      "bilimi",
      "iki",
      "kategorik",
      "değişkenli",
      "verileri",
      "analiz",
      "edin",
      "çapraz",
      "tabloyu"
    ],
    "animations": [
      {
        "label": "Animasyon: İkinci Dereceden Denklemler",
        "file": "MAT_10_6_1_Animasyon.html",
        "url": "apps/10_Sinif/MAT_10_6_1_Animasyon.html",
        "title": "İkinci Dereceden Denklemler",
        "isDraft": true
      }
    ],
    "labs": [
      {
        "label": "İnteraktif Laboratuvar",
        "file": "MAT_10_6_1_Etkinlik.html",
        "url": "apps/10_Sinif/MAT_10_6_1_Etkinlik.html",
        "title": "Veri Bilimi Laboratuvarı",
        "isDraft": false
      }
    ],
    "hasCompletedContent": true,
    "hasDraftPart": true
  },
  {
    "id": "mat-10-7-1",
    "code": "MAT.10.7.1",
    "grade": 10,
    "levelGroup": "Lise",
    "unit": 7,
    "theme": "Veriden Olasılığa",
    "color": "#EC4899",
    "icon": "🎲",
    "title": "Dinamik Olasılık Ağacı",
    "description": "Torbadaki kırmızı ve mavi topların sayısını belirleyin. Art arda iki top çekildiğinde, topların geri atılıp atılmama durumuna göre (Bağımlı/Bağımsız Olay) tüm olasılık dallarının nasıl değiştiğini izleyin.",
    "kazanim": "MAT.10.7.1. Koşullu Olasılık (Ağaç Şeması)",
    "tags": [
      "dinamik",
      "olasılık",
      "ağacı",
      "torbadaki",
      "kırmızı",
      "mavi",
      "topların",
      "sayısını",
      "belirleyin",
      "art"
    ],
    "animations": [
      {
        "label": "Animasyon: Çokgenler ve Dörtgenler",
        "file": "MAT_10_7_1_Animasyon.html",
        "url": "apps/10_Sinif/MAT_10_7_1_Animasyon.html",
        "title": "Çokgenler ve Dörtgenler",
        "isDraft": true
      }
    ],
    "labs": [
      {
        "label": "İnteraktif Laboratuvar",
        "file": "MAT_10_7_1_Etkinlik.html",
        "url": "apps/10_Sinif/MAT_10_7_1_Etkinlik.html",
        "title": "Dinamik Olasılık Ağacı",
        "isDraft": false
      }
    ],
    "hasCompletedContent": true,
    "hasDraftPart": true
  },
  {
    "id": "mat-10-7-2",
    "code": "MAT.10.7.2",
    "grade": 10,
    "levelGroup": "Lise",
    "unit": 7,
    "theme": "Veriden Olasılığa",
    "color": "#EC4899",
    "icon": "🎲",
    "title": "Bayes Teoremi ve Medikal Risk Simülatörü",
    "description": "Ekranda 1000 kişiyi temsil eden popülasyon bulunmaktadır. Hastalığın yaygınlığını ve testin doğruluk oranını ayarlayın. Testi pozitif çıkan birinin GERÇEKTE hasta olma olasılığının ne kadar şaşırtıcı olduğunu keşfedin!",
    "kazanim": "MAT.10.7.2. Bayes Teoremi ve Risk Analizi",
    "tags": [
      "bayes",
      "teoremi",
      "medikal",
      "risk",
      "simülatörü",
      "ekranda",
      "1000",
      "kişiyi",
      "temsil",
      "eden"
    ],
    "animations": [
      {
        "label": "Animasyon: Bayes Teoremi ve Medikal Risk Simülatörü",
        "file": "MAT_10_7_2_Animasyon.html",
        "url": "apps/10_Sinif/MAT_10_7_2_Animasyon.html",
        "title": "Bayes Teoremi ve Medikal Risk Simülatörü",
        "isDraft": false
      }
    ],
    "labs": [
      {
        "label": "İnteraktif Laboratuvar",
        "file": "MAT_10_7_2_Etkinlik.html",
        "url": "apps/10_Sinif/MAT_10_7_2_Etkinlik.html",
        "title": "Özel Dörtgenler",
        "isDraft": true
      }
    ],
    "hasCompletedContent": true,
    "hasDraftPart": true
  },
  {
    "id": "mat-11-1-1",
    "code": "MAT.11.1.1",
    "grade": 11,
    "levelGroup": "Lise",
    "unit": 1,
    "theme": "Nicelikler ve Değişimler (Trigonometri & Logaritma)",
    "color": "#06B6D4",
    "icon": "🌀",
    "title": "Dönme Dolap ve Sinüsoidal Dalgalar",
    "description": "Bir kabinin zamana (t) göre yerden yüksekliği h(t) = R · sin(ω·t) + h₀ sinüsoidal fonksiyonunu oluşturur.",
    "kazanim": "MAT.11.1.1. Trigonometrik Fonksiyonlar - Dönme Dolap Modeli",
    "tags": [
      "dönme",
      "dolap",
      "sinüsoidal",
      "dalgalar",
      "kabinin",
      "zamana",
      "yerden",
      "yüksekliği",
      "sin",
      "fonksiyonunu"
    ],
    "animations": [
      {
        "label": "Animasyon: Dönme Dolap ve Sinüsoidal Dalgalar",
        "file": "MAT_11_1_1_Animasyon.html",
        "url": "apps/11_Sinif/MAT_11_1_1_Animasyon.html",
        "title": "Dönme Dolap ve Sinüsoidal Dalgalar",
        "isDraft": false
      }
    ],
    "labs": [
      {
        "label": "İnteraktif Laboratuvar",
        "file": "MAT_11_1_1_Etkinlik.html",
        "url": "apps/11_Sinif/MAT_11_1_1_Etkinlik.html",
        "title": "Trigonometrik Fonksiyon Dönüşüm Laboratuvarı",
        "isDraft": false
      }
    ],
    "hasCompletedContent": true,
    "hasDraftPart": false
  },
  {
    "id": "mat-11-1-2",
    "code": "MAT.11.1.2",
    "grade": 11,
    "levelGroup": "Lise",
    "unit": 1,
    "theme": "Nicelikler ve Değişimler (Trigonometri & Logaritma)",
    "color": "#06B6D4",
    "icon": "🌀",
    "title": "Trigonometrik Denklem Öteleme ve Kesişim",
    "description": "Adım 1: sin(x)'in π/6 kadar sağa ötelenmesi. Adım 2: sin(x - π/6) = cos(x) denklemini sağlayan köklerin tespiti.",
    "kazanim": "MAT.11.1.2. Trigonometrik Denklemlerde Öteleme ve Kesişim",
    "tags": [
      "trigonometrik",
      "denklem",
      "öteleme",
      "kesişim",
      "adım",
      "sin",
      "kadar",
      "sağa",
      "ötelenmesi",
      "cos"
    ],
    "animations": [
      {
        "label": "Animasyon: Trigonometrik Denklem Öteleme ve Kesişim",
        "file": "MAT_11_1_2_Animasyon.html",
        "url": "apps/11_Sinif/MAT_11_1_2_Animasyon.html",
        "title": "Trigonometrik Denklem Öteleme ve Kesişim",
        "isDraft": false
      }
    ],
    "labs": [
      {
        "label": "İnteraktif Laboratuvar",
        "file": "MAT_11_1_2_Etkinlik.html",
        "url": "apps/11_Sinif/MAT_11_1_2_Etkinlik.html",
        "title": "Temel Trigonometrik Denklemler",
        "isDraft": false
      }
    ],
    "hasCompletedContent": true,
    "hasDraftPart": false
  },
  {
    "id": "mat-11-1-3",
    "code": "MAT.11.1.3",
    "grade": 11,
    "levelGroup": "Lise",
    "unit": 1,
    "theme": "Nicelikler ve Değişimler (Trigonometri & Logaritma)",
    "color": "#06B6D4",
    "icon": "🌀",
    "title": "Üstel Büyüme ve Logaritma",
    "description": "Her saat başı ikiye katlanan bakterilerin çoğalması N(t) = 2ᵗ (üstel fonksiyon) ile modellenir. Bakteri sayısının hedeflenen sayıya ulaşması için gereken süre ise t = log₂(N) (logaritma) ile hesaplanır.",
    "kazanim": "MAT.11.1.3. Üstel Büyüme ve Logaritma Modeli",
    "tags": [
      "üstel",
      "büyüme",
      "logaritma",
      "her",
      "saat",
      "başı",
      "ikiye",
      "katlanan",
      "bakterilerin",
      "çoğalması"
    ],
    "animations": [
      {
        "label": "Animasyon: Üstel Büyüme ve Logaritma",
        "file": "MAT_11_1_3_Animasyon.html",
        "url": "apps/11_Sinif/MAT_11_1_3_Animasyon.html",
        "title": "Üstel Büyüme ve Logaritma",
        "isDraft": false
      }
    ],
    "labs": [
      {
        "label": "İnteraktif Laboratuvar",
        "file": "MAT_11_1_3_Etkinlik.html",
        "url": "apps/11_Sinif/MAT_11_1_3_Etkinlik.html",
        "title": "Üstel ve Logaritmik Fonksiyonlar",
        "isDraft": false
      }
    ],
    "hasCompletedContent": true,
    "hasDraftPart": false
  },
  {
    "id": "mat-11-1-4",
    "code": "MAT.11.1.4",
    "grade": 11,
    "levelGroup": "Lise",
    "unit": 1,
    "theme": "Nicelikler ve Değişimler (Trigonometri & Logaritma)",
    "color": "#06B6D4",
    "icon": "🌀",
    "title": "Fonksiyonlarda İşlemler",
    "description": "(f+g)(x) = f(x) + g(x) bağıntısının grafik üzerinde nasıl oluştuğunu izleyin. Her bir x noktası için f ve g fonksiyonlarının y değerleri (dikey çubuklar) üst üste eklenerek h grafiğini oluşturur.",
    "kazanim": "MAT.11.1.4. Fonksiyonlarda Noktasal Toplama (Animasyon)",
    "tags": [
      "fonksiyonlarda",
      "işlemler",
      "bağıntısının",
      "grafik",
      "üzerinde",
      "oluştuğunu",
      "izleyin",
      "her",
      "noktası",
      "fonksiyonlarının"
    ],
    "animations": [
      {
        "label": "Animasyon: Fonksiyonlarda İşlemler",
        "file": "MAT_11_1_4_Animasyon.html",
        "url": "apps/11_Sinif/MAT_11_1_4_Animasyon.html",
        "title": "Fonksiyonlarda İşlemler",
        "isDraft": false
      }
    ],
    "labs": [
      {
        "label": "İnteraktif Laboratuvar",
        "file": "MAT_11_1_4_Etkinlik.html",
        "url": "apps/11_Sinif/MAT_11_1_4_Etkinlik.html",
        "title": "Fonksiyonlarda İşlemler",
        "isDraft": false
      }
    ],
    "hasCompletedContent": true,
    "hasDraftPart": false
  },
  {
    "id": "mat-11-2",
    "code": "MAT.11.2",
    "grade": 11,
    "levelGroup": "Lise",
    "unit": 2,
    "theme": "Geometrik Şekiller (Çokgenler)",
    "color": "#8B5CF6",
    "icon": "📐",
    "title": "Dış Açılar ve Düzgün Çokgen",
    "description": "Çizici (lazer), her kenarın sonunda tam olarak \"Dış Açı\" kadar döner. Tüm kenarlar çizildiğinde, toplam dönüş tam bir tur (360°) oluşturur.",
    "kazanim": "MAT.11.2. Çokgen Çizimi ve Dış Açı Toplamı Animasyonu",
    "tags": [
      "dış",
      "açılar",
      "düzgün",
      "çokgen",
      "çizici",
      "lazer",
      "her",
      "kenarın",
      "sonunda",
      "tam"
    ],
    "animations": [
      {
        "label": "Animasyon: Dış Açılar ve Düzgün Çokgen",
        "file": "MAT_11_2_Animasyon.html",
        "url": "apps/11_Sinif/MAT_11_2_Animasyon.html",
        "title": "Dış Açılar ve Düzgün Çokgen",
        "isDraft": false
      }
    ],
    "labs": [
      {
        "label": "İnteraktif Laboratuvar",
        "file": "MAT_11_2_Etkinlik.html",
        "url": "apps/11_Sinif/MAT_11_2_Etkinlik.html",
        "title": "Düzgün Çokgenler",
        "isDraft": false
      }
    ],
    "hasCompletedContent": true,
    "hasDraftPart": false
  },
  {
    "id": "mat-11-3",
    "code": "MAT.11.3",
    "grade": 11,
    "levelGroup": "Lise",
    "unit": 3,
    "theme": "İstatistiksel Araştırma Süreci (Korelasyon)",
    "color": "#10B981",
    "icon": "📊",
    "title": "En Küçük Kareler Doğrusu",
    "description": "En Küçük Kareler Doğrusu , serpme diyagramındaki tüm noktaların doğruya olan dikey uzaklıklarının (hataların) kareleri toplamını en aza indiren (optimize eden) doğrudur.",
    "kazanim": "MAT.11.3. En Küçük Kareler Doğrusu Animasyonu",
    "tags": [
      "küçük",
      "kareler",
      "doğrusu",
      "serpme",
      "diyagramındaki",
      "tüm",
      "noktaların",
      "doğruya",
      "dikey",
      "uzaklıklarının"
    ],
    "animations": [
      {
        "label": "Animasyon: En Küçük Kareler Doğrusu",
        "file": "MAT_11_3_Animasyon.html",
        "url": "apps/11_Sinif/MAT_11_3_Animasyon.html",
        "title": "En Küçük Kareler Doğrusu",
        "isDraft": false
      }
    ],
    "labs": [
      {
        "label": "İnteraktif Laboratuvar",
        "file": "MAT_11_3_Etkinlik.html",
        "url": "apps/11_Sinif/MAT_11_3_Etkinlik.html",
        "title": "Serpme Diyagramı ve Korelasyon",
        "isDraft": false
      }
    ],
    "hasCompletedContent": true,
    "hasDraftPart": false
  }
];
