# Eray Ates Youtube Clone Project 

## TR:

## YouTube Clone (React + Vite)

YouTube arayüzünü temel alan, video listeleme ve oynatma özelliklerine sahip bir örnek uygulama. Proje React ve Vite ile geliştirilmiştir ve YouTube Data API v3 kullanır.

Geliştirici: Eray Ateş

### Özellikler
- Ana sayfada popüler videoların listelenmesi (kategori bazlı)
- Video sayfasında gömülü oynatıcı, kanal bilgileri ve yorumlar
- Önerilen videolar bölümü
- Basit arayüz ve responsive düzen

### Gereksinimler
- Node.js 18+ (önerilen) ve npm
- YouTube Data API v3 anahtarı

### Kurulum
1. Depoyu klonlayın veya indirin
   ```bash
   git clone <repo-url>
   cd youtube-clone
   ```
2. Bağımlılıkları yükleyin
   ```bash
   npm install
   ```
3. Ortam değişkenini oluşturun
   - Proje kök dizininde `.env` dosyası oluşturun ve kendi API anahtarınızı ekleyin:
   ```bash
   VITE_API_KEY=YOUR_YOUTUBE_DATA_API_KEY
   ```
   - Not: Vite projelerinde istemci tarafında kullanılan env değişkenlerinin `VITE_` ile başlaması gerekir.

### Geliştirme ve Çalıştırma
- Geliştirme sunucusunu başlatın:
  ```bash
  npm run dev
  ```
- Üretim derlemesi alın:
  ```bash
  npm run build
  ```
- Yerel önizleme (build sonrası):
  ```bash
  npm run preview
  ```

### API Hakkında (YouTube Data API v3)
Uygulama, YouTube verilerini almak için istemci tarafında YouTube Data API v3 kullanır. Aşağıdaki uç noktalar kullanılır:
- Videolar (popüler ve kategori bazlı):
  - `GET https://youtube.googleapis.com/youtube/v3/videos`
  - Parametreler: `part=snippet,contentDetails,statistics`, `chart=mostPopular`, `maxResults`, `regionCode`, `videoCategoryId`, `key`
- Kanal bilgileri:
  - `GET https://youtube.googleapis.com/youtube/v3/channels`
  - Parametreler: `part=snippet,contentDetails,statistics`, `id`, `key`
- Yorumlar:
  - `GET https://youtube.googleapis.com/youtube/v3/commentThreads`
  - Parametreler: `part=snippet,replies`, `maxResults`, `videoId`, `key`

Önemli notlar:
- API anahtarınızı istemci tarafında kullanmak, anahtarın kaynak koddan görülebileceği anlamına gelir. Üretim senaryolarında bir proxy sunucusu veya sunucu tarafı çağrısı önerilir.
- Kota limitlerini aşmamak için istek sayısını sınırlayın. Bu örnekte `maxResults` ve `chart=mostPopular` kullanımları bulunmaktadır.

### Proje Yapısı (Özet)
```
src/
  Components/
    Feed/           -> Popüler videolar listesi (API çağrısı içerir)
    Navbar/         -> Üst navigasyon
    PlayerVideo/    -> Video oynatıcı ve detaylar (API çağrıları içerir)
    Recommended/    -> Önerilen videolar (API çağrısı içerir)
    Sidebar/        -> Kategoriler ve menü
  Pages/
    Home/           -> Ana sayfa (Sidebar + Feed)
    Video/          -> Video detay sayfası (PlayerVideo + Recommended)
  assets/           -> Görseller ve örnek video
  data.js           -> Yardımcı `value_converter`
  App.jsx           -> Router ve layout
```

### Kullanılan Teknolojiler
- React 19, React Router 7
- Vite 7
- Moment.js
- ESLint yapılandırması

### SSS
- API anahtarını nereden alırım?
  - Google Cloud Console üzerinden “YouTube Data API v3” etkinleştirin ve bir API anahtarı oluşturun. Anahtarı `.env` dosyanıza `VITE_API_KEY` olarak ekleyin.
- Bölge ve kategori neden farklı?
  - Ana akışta TR bölgesi, önerilenlerde US bölgesi örnek olarak kullanılmıştır. İhtiyacınıza göre `regionCode` ve `videoCategoryId` değerlerini değiştirebilirsiniz.

### Lisans
Bu proje eğitim amaçlıdır. Tüm içerik ve görseller demo niteliğindedir. 




## ENG:
## YouTube Clone (React + Vite)

An example application inspired by the YouTube UI with video listing and playback. Built with React and Vite, and powered by the YouTube Data API v3.

Author: Eray Ateş

### Features
- Popular videos on the home page (category-based)
- Embedded player, channel info, and comments on the video page
- Recommended videos section
- Simple, responsive layout

### Requirements
- Node.js 18+ and npm
- YouTube Data API v3 key

### Setup
1. Clone or download the repository
   ```bash
   git clone <repo-url>
   cd youtube-clone
   ```
2. Install dependencies
   ```bash
   npm install
   ```
3. Create environment variables
   - Create a `.env` file in the project root and add your API key:
   ```bash
   VITE_API_KEY=YOUR_YOUTUBE_DATA_API_KEY
   ```
   - Note: In Vite apps, env variables used on the client must start with `VITE_`.

### Development and Run
- Start the dev server:
  ```bash
  npm run dev
  ```
- Build for production:
  ```bash
  npm run build
  ```
- Local preview (after build):
  ```bash
  npm run preview
  ```

### About the API (YouTube Data API v3)
This app uses the YouTube Data API v3 from the client-side to fetch data. Endpoints used:
- Videos (popular and category-based):
  - `GET https://youtube.googleapis.com/youtube/v3/videos`
  - Params: `part=snippet,contentDetails,statistics`, `chart=mostPopular`, `maxResults`, `regionCode`, `videoCategoryId`, `key`
- Channel details:
  - `GET https://youtube.googleapis.com/youtube/v3/channels`
  - Params: `part=snippet,contentDetails,statistics`, `id`, `key`
- Comments:
  - `GET https://youtube.googleapis.com/youtube/v3/commentThreads`
  - Params: `part=snippet,replies`, `maxResults`, `videoId`, `key`

Important notes:
- Using your API key on the client means it is visible in built assets. For production, consider using a proxy/server to keep the key private.
- Respect quota limits. This example uses `maxResults` and `chart=mostPopular` which consume quota per request.

### Project Structure (Overview)
```
src/
  Components/
    Feed/           -> Popular videos list (uses API)
    Navbar/         -> Top navigation
    PlayerVideo/    -> Player and video details (uses API)
    Recommended/    -> Recommended videos (uses API)
    Sidebar/        -> Categories and menu
  Pages/
    Home/           -> Home page (Sidebar + Feed)
    Video/          -> Video detail page (PlayerVideo + Recommended)
  assets/           -> Images and sample video
  data.js           -> Helper `value_converter`
  App.jsx           -> Router and layout
```

### Tech Stack
- React 19, React Router 7
- Vite 7
- Moment.js
- ESLint configuration

### FAQ
- Where do I get an API key?
  - Enable “YouTube Data API v3” in Google Cloud Console and create an API key. Add it to `.env` as `VITE_API_KEY`.
- Why are region and category different?
  - The feed uses region TR and the recommended list uses region US as examples. Adjust `regionCode` and `videoCategoryId` to your needs.

### License
This project is for educational purposes. All content and images are for demo only.
