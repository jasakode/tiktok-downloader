const fs = require("fs");

// const keywords = `${item} app
// ${item} online
// Best Tiktok video downloader
// Free Tiktok video downloader
// Tiktok MP4 video downloader
// Tiktok HD video downloader
// Tiktok 4K video downloader
// Fast Tiktok video downloader
// Tiktok video downloader software
// Tiktok video downloader for Android
// Tiktok video downloader for iPhone
// Tiktok video downloader no watermark
// Tiktok video downloader without watermark
// Tiktok video downloader with sound
// Tiktok video downloader for PC
// Tiktok video downloader for Mac
// Tiktok video downloader for Windows
// Tiktok video downloader for iOS
// Tiktok video downloader for Android APK
// Tiktok video downloader for iPhone app
// Tiktok video downloader for Windows 10
// Tiktok video downloader for Mac free
// Tiktok video downloader for iOS free
// Tiktok video downloader for Android free
// Tiktok video downloader for PC free
// Tiktok video downloader for Windows 7
// Tiktok video downloader for Windows 8
// Tiktok video downloader for Windows 11
// Tiktok video downloader for Windows 2023
// Tiktok video downloader for Macbook
// Tiktok video downloader for Macbook Pro
// Tiktok video downloader for Macbook Air
// Tiktok video downloader for Macbook Pro 2023
// Tiktok video downloader for Macbook Air 2023
// Tiktok video downloader for Mac OS
// Tiktok video downloader for Mac Catalina
// Tiktok video downloader for Mac Big Sur
// Tiktok video downloader for Mac M1
// Tiktok video downloader for Mac Mini
// Tiktok video downloader for Mac Mini 2023
// Tiktok video downloader for Macbook Pro M2
// Tiktok video downloader for Macbook Air M2
// Tiktok video downloader for Macbook Pro M3
// Tiktok video downloader for Macbook Air M3
// Tiktok video downloader for Macbook Pro 16-inch
// Tiktok video downloader for Macbook Air 13-inch
// Tiktok video downloader for Macbook Pro 14-inch
// Tiktok video downloader for Macbook Air 15-inch
// Tiktok video downloader for Macbook Pro 2024
// Tiktok video downloader for Macbook Air 2024
// Tiktok video downloader for Macbook Pro 2025
// Tiktok video downloader for Macbook Air 2025
// Tiktok video downloader for Macbook Pro 17-inch
// Tiktok video downloader for Macbook Air 12-inch
// Tiktok video downloader for Macbook Pro 13-inch
// Tiktok video downloader for Macbook Air 14-inch
// Tiktok video downloader for Macbook Pro 15-inch
// Tiktok video downloader for Macbook Air 16-inch
// Tiktok video downloader for Macbook Pro 2026
// Tiktok video downloader for Macbook Air 2026
// Tiktok video downloader for Macbook Pro 2027
// Tiktok video downloader for Macbook Air 2027
// Tiktok video downloader for Macbook Pro 18-inch
// Tiktok video downloader for Macbook Air 17-inch
// Tiktok video downloader for Macbook Pro 19-inch
// Tiktok video downloader for Macbook Air 18-inch
// Tiktok video downloader for Macbook Pro 20-inch
// Tiktok video downloader for Macbook Air 19-inch
// Tiktok video downloader for Macbook Pro 21-inch
// Tiktok video downloader for Macbook Air 20-inch
// Tiktok video downloader for Macbook Pro 22-inch
// Tiktok video downloader for Macbook Air 21-inch
// Tiktok video downloader for Macbook Pro 23-inch
// Tiktok video downloader for Macbook Air 22-inch
// Tiktok video downloader for Macbook Pro 24-inch
// Tiktok video downloader for Macbook Air 23-inch
// Tiktok video downloader for Macbook Pro 25-inch
// Tiktok video downloader for Macbook Air 24-inch
// Tiktok video downloader for Macbook Pro 26-inch
// Tiktok video downloader for Macbook Air 25-inch
// Tiktok video downloader for Macbook Pro 27-inch
// Tiktok video downloader for Macbook Air 26-inch
// Tiktok video downloader for Macbook Pro 28-inch
// Tiktok video downloader for Macbook Air 27-inch
// Tiktok video downloader for Macbook Pro 29-inch
// Tiktok video downloader for Macbook Air 28-inch
// Tiktok video downloader for Macbook Pro 30-inch
// Tiktok video downloader for Macbook Air 29-inch
// Tiktok video downloader for Macbook Pro 31-inch
// Tiktok video downloader for Macbook Air 30-inch
// Tiktok video downloader for Macbook Pro 32-inch
// Tiktok video downloader for Macbook Air 31-inch
// Tiktok video downloader for Macbook Pro 33-inch
// Tiktok video downloader for Macbook Air 32-inch
// Tiktok video downloader for Macbook Pro 34-inch
// Tiktok video downloader for Macbook Air 33-inch
// Tiktok video downloader for Macbook Pro 35-inch
// Tiktok video downloader for Macbook Air 34-inch
// Tiktok video downloader for Macbook Pro 36-inch
// Tiktok video downloader for Macbook Air 35-inch`;



// keywords.split("\n").map(item => {
//     const path = "./out/" + item.trim() + ".html";
//     const exist = fs.existsSync(path);
//     if (exist) {
//         return
//     } else {
//         fs.writeFileSync(path, `<!DOCTYPE html>
//         <html lang="en">
//         <head>
        
//             <meta charset="UTF-8">
//             <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable">
//             <link rel="profile" href="https://gmpg.org/xfn/11">
//             <meta name='robots' content='index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'/>
//             <title>${item.trim()}</title> 
//             <!-- Title Optional -->
//             <meta name="description" content="Pakar SEO dan Master SEO Indonesia Terbaik, melayani pelatihan, konsultan dan Jasa SEO. Teknik terupdate mengikuti perkembangan algoritma Goog"/>
//             <link rel="canonical" href="https://defriansyah.net/pakar-seo/"/>
//             <meta property="og:locale" content="en_US"/>
//             <meta property="og:type" content="article"/>
//             <!-- Open Graph Perlu Di pelajari -->
//             <meta property="og:title" content="${item.trim()}"/>
//             <meta property="og:description" content="Pakar SEO dan Master SEO Indonesia Terbaik, melayani pelatihan, konsultan dan Jasa SEO. Teknik terupdate mengikuti perkembangan algoritma Goog"/>
//             <meta property="og:url" content="https://defriansyah.net/pakar-seo/"/>
//             <meta property="og:site_name" content="Defriansyah"/>
//             <meta property="article:modified_time" content="2023-07-27T10:47:26+00:00"/>
//             <meta property="og:image" content="https://defriansyah.net/wp-content/uploads/2020/02/Pakar-SEO-dan-Master-SEO-Indonesia.jpg"/>
        
//             <meta property="og:image:width" content="817"/>
//             <meta property="og:image:height" content="395"/>
//             <meta property="og:image:type" content="image/jpeg"/>
//             <meta name="twitter:card" content="summary_large_image"/>
//             <meta name="twitter:label1" content="Est. reading time"/>
//             <meta name="twitter:data1" content="10 minutes"/>
        
        
        
//             <script type="application/ld+json" class="yoast-schema-graph"></script>
        
        
//             <link rel='dns-prefetch' href='//secure.gravatar.com'/>
//             <link rel='dns-prefetch' href='//stats.wp.com'/>
//             <link rel='dns-prefetch' href='//v0.wordpress.com'/>
//             <link rel="alternate" type="application/rss+xml" title="Defriansyah &raquo; Feed" href="https://defriansyah.net/feed/"/>
//             <link rel="alternate" type="application/rss+xml" title="Defriansyah &raquo; Comments Feed" href="https://defriansyah.net/comments/feed/"/>
        
        
//             <link rel="https://api.w.org/" href="https://defriansyah.net/wp-json/"/><link rel="alternate" type="application/json" href="https://defriansyah.net/wp-json/wp/v2/pages/6887"/><link rel="EditURI" type="application/rsd+xml" title="RSD" href="https://defriansyah.net/xmlrpc.php?rsd"/>
//             <link rel='shortlink' href='https://wp.me/P5CETb-1N5'/>
//             <link rel="alternate" type="application/json+oembed" href="https://defriansyah.net/wp-json/oembed/1.0/embed?url=https%3A%2F%2Fdefriansyah.net%2Fpakar-seo%2F"/>
//             <link rel="alternate" type="text/xml+oembed" href="https://defriansyah.net/wp-json/oembed/1.0/embed?url=https%3A%2F%2Fdefriansyah.net%2Fpakar-seo%2F&#038;format=xml"/>
//             <script type="application/ld+json">{
//                 "@context": "https://schema.org/",
//                 "@type": "CreativeWorkSeries",
//                 "name": "Pakar SEO dan Master SEO Indonesia Terbaik",
//                 "aggregateRating": {
//                     "@type": "AggregateRating",
//                     "ratingValue": "5",
//                     "bestRating": "5",
//                     "ratingCount": "1"
//                 }
//             }</script>
        
//             <noscript><style id="rocket-lazyload-nojs-css">.rll-youtube-player,[data-lazy-src]{display:none!important}</style></noscript>
        
//         </head>
//         <body>
            
//         </body>
//         </html>`)
//     }    
// });
// console.log(fs.readdirSync("./out/").length)





// const files = fs.readdirSync("./out")
// let tages = "";
// files.map(item => {
//     tages += `<sitemap>
//     <loc>https://www.maingames.tech/${item.replace(/\ /g, "-")}</loc>
//     </sitemap>\n`
//         tages += `<sitemap>
//         <loc>https://www.maingames.tech/${item.toLocaleLowerCase().replace(/\ /g, "-")}</loc>
//     </sitemap>\n`
//     tages += `<sitemap>
//         <loc>https://www.maingames.tech/${item.toLocaleUpperCase().replace(/\ /g, "-")}</loc>
//     </sitemap>\n`
// })


// fs.writeFileSync(`./sitemap.xml`, `<sitemapindex xmlns="http://www.google.com/schemas/sitemap/0.84">
// ${tages}
// </sitemapindex>`)
// console.log(files.length * 3)
// console.log("DONE ... ")



// const date = new Date();



// const files = JSON.parse(fs.readFileSync("./sitemap.json", "utf-8"))
// let tages = [];
// for (let index = 0; index < files.length; index++) {
//     const item = files[index];
//     tages.push(item.replace(/.html/, "").replace(".", "").replace(".HTML", ""));
//     tages.push(item.replace(/.html/, "").replace(".", "").replace(".HTML", "").replace(/\ /g, "-"));
//     tages.push(item.replace(/.html/, "").replace(".", "").replace(".HTML", "").toLocaleLowerCase().replace(/\ /g, "-"));
//     tages.push(item.replace(/.html/, "").replace(".", "").replace(".HTML", "").toLocaleUpperCase().replace(/\ /g, "-"));
//     tages.push(item.replace(/.html/, "").replace(".", "").replace(".HTML", "").toLocaleLowerCase());
//     tages.push(item.replace(/.html/, "").replace(".", "").replace(".HTML", "").toLocaleUpperCase());
// }

// const atags = [];
// tages.map(k => {
//     if(!atags.includes(k)) {
//         atags.push(k)
//         // atags.push(k.replace(/&/g, "%26").replace(/ /g, "%20"))
//     }
// })
// let site = "";
// atags.map(ke => {
//     site += `<url>
//     <loc>https://www.maingames.tech/${ke}/</loc>
//     <lastmod>${date.getFullYear()}-${date.getMonth()}-${date.getDate()}</lastmod>
//     <changefreq>monthly</changefreq>
//     <priority>0.9</priority>
//  </url>\n`
// })

// fs.writeFileSync("./sitemap.xml", `<?xml version="1.0" encoding="UTF-8"?>
// <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
//    <url>
//       <loc>https://www.maingames.tech/index.html</loc>
//       <lastmod>2023-08-22</lastmod>
//       <changefreq>monthly</changefreq>
//       <priority>1.0</priority>
//    </url>
//    ${site}
// </urlset> `)

// const filess = fs.readdirSync("./public/viewsss", "utf-8")

// filess.map(item => {
//     const exist = fs.existsSync(`./public/views/${item}`)
//     if (!exist) {
//         fs.mkdirSync(`./public/views/${item}`);
//         fs.writeFileSync(`./public/views/${item}/index.html`, `<!DOCTYPE html>
//         <html lang="en">
//         <head>
//             <meta charset="UTF-8">
//             <meta name="viewport" content="width=device-width, initial-scale=1">
//             <link rel="profile" href="https://gmpg.org/xfn/11">
//             <meta name='robots' content='index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'/>
//             <title>${item} | Maingames</title> 
//             <meta name="description" content="${item}, download video atau audio titok cepat,praktis,gratis,tanpa tanda air, terbaik indonesia."/>
//             <link rel="canonical" href="https://www.maingames.tech/tiktok-video-downlader/"/>
        
//             <meta property="og:locale" content="en_US"/>
//             <meta property="og:type" content="website" />
//             <meta property="og:title" content="${item} | Maingames"/>
//             <meta property="og:description" content="${item}, download video atau audio titok cepat,praktis,gratis,tanpa tanda air, terbaik indonesia."/>
//             <meta property="og:url" content="https://www.maingames.tech/tiktok-video-downlader/"/>
//             <meta property="og:site_name" content="Maingames"/>
//             <meta property="article:modified_time" content="2023-09-27T10:47:26+00:00"/>
//             <meta property="og:image" content="https://www.maingames.tech/assets/icon/logo.png"/>
        
//             <meta property="og:image:width" content="50"/>
//             <meta property="og:image:height" content="50"/>
//             <meta property="og:image:type" content="image/jpeg"/>
//             <meta name="twitter:card" content="summary_large_image"/>
//             <meta name="twitter:label1" content="Est. reading time"/>
//             <meta name="twitter:data1" content="10 minutes"/>
        
         
        
//             <link rel='dns-prefetch' href='//secure.gravatar.com' />
//             <link rel='dns-prefetch' href='//stats.wp.com' />
//             <link rel='dns-prefetch' href='//v0.wordpress.com' />
//             <link rel="alternate" type="application/rss+xml" title="Maingames » Feed" href="https://www.maingames.tech/feed/" />
//             <link rel="alternate" type="application/rss+xml" title="Maingames » Comments Feed" href="https://www.maingames.tech/comments/feed/" />
            
        
            
        
//             <script type="application/ld+json">{
//                 "@context": "https://schema.org/",
//                 "@type": "SoftwareApplication",
//                 "name": "${item}",
//                 "aggregateRating": {
//                     "@type": "AggregateRating",
//                     "ratingValue": "5",
//                     "bestRating": "5",
//                     "ratingCount": "1"
//                 }
//             }</script>
//             <script type="application/ld+json">
//                 {
//                   "@context": "https://schema.org/",
//                   "@type": "WebPage",
//                   "name": "${item}",
//                   "description": "${item}, download video atau audio titok cepat,praktis,gratis,tanpa tanda air, terbaik indonesia.",
//                   "url": "https://www.maingames.tech/tiktok-video-downlader/"
//                 }
//             </script>
        
//             <script type="application/ld+json">
//                 {
//                   "@context": "https://schema.org/",
//                   "@type": "BreadcrumbList",
//                 "itemListElement": [
//                     {
//                       "@type": "ListItem",
//                       "position": 1,
//                       "name": "Peta Situs",
//                       "item": "https://maingames.tech/sitemap.xml"
//                     }
//                   ]
//                 }
//             </script>
        
//             <script type="application/ld+json">
//                 {
//                   "@context": "https://schema.org/",
//                   "@type": "FAQPage",
//                   "mainEntity": [
//                 {
//                       "@type": "Question",
//                       "name": "Bagaimana cara menggunakan alat pengunduhan video Tiktok?",
//                       "acceptedAnswer": {
//                         "@type": "Answer",
//                         "text": "Anda dapat mengikuti langkah-langkah berikut untuk menggunakan alat pengunduhan video Tiktok kami."
//                       }
//                     },
//                     {
//                       "@type": "Question",
//                       "name": "Apakah alat pengunduhan video Tiktok ini gratis?",
//                       "acceptedAnswer": {
//                         "@type": "Answer",
//                         "text": "Ya, alat pengunduhan video Tiktok kami sepenuhnya gratis."
//                       }
//                     }
//                   ]
//                 }
//             </script>
        
//             <script type="application/ld+json">
//                 {
//                   "@context": "https://schema.org/",
//                   "@type": "HowTo",
//                   "name": "Cara Mengunduh Video Tiktok",
//                   "description": "Panduan langkah demi langkah tentang cara mengunduh video Tiktok menggunakan alat kami.",
//                   "step": [
//                     {
//                       "@type": "HowToStep",
//                       "name": "Langkah 1",
//                       "text": "Buka aplikasi Tiktok dan temukan video yang ingin Anda unduh."
//                     },
//                     {
//                       "@type": "HowToStep",
//                       "name": "Langkah 2",
//                       "text": "Salin URL video Tiktok."
//                     },
//                     {
//                       "@type": "HowToStep",
//                       "name": "Langkah 3",
//                       "text": "Kunjungi situs web kami di [https://www.maingames.tech/tiktok-video-downlader/] dan tempel URL video."
//                     },
//                     {
//                       "@type": "HowToStep",
//                       "name": "Langkah 4",
//                       "text": "Klik tombol 'Unduh' dan tunggu proses selesai."
//                     }
//                   ]
//                 }
//             </script>
        
//             <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
//             <link type="text/css" rel="stylesheet" href="/css/output.css">
//             <link rel="stylesheet" href="/css/index.css">
        
//         </head>
//         <body>
//             <div class="loading-box" id="loadingBox">
//                 <lottie-player src="/assets/json/animation_lnj453ut.json" background="transparent"  speed="1"  style="width: 200px; height: 200px;" loop autoplay></lottie-player>
//             </div>
        
//             <header class="sticky-box bg-blue-500 p-4 shadow">
//                 <div class="container mx-auto flex justify-between items-center">
//                     <a href="/" class="text-white text-xl font-semibold" id="logo">Main Games</a>
//                     <nav>
//                     </nav>
//                 </div>
//             </header>
            
//             <div id="input-form" class="bg-gradient-to-r from-blue-500 to-blue-700 form-box box-video-form">
//                 <div class="content">
        
//                     <div class="w-full mx-auto form-input-header mt-10">
//                         <h1 class="text-4xl font-bold text-white">Download video TikTok</h1>
//                         <h1 class="text-2xl font-bold text-white mt-2">Tiktok Downloader Tanpa Watermark. Cepat. Semua perangkat</h1>
//                     </div>
                    
//                     <div class="flex justify-center mt-10">
//                         <div class="relative input-box">
//                             <input type="text" id="input-link" class="w-full h-12 px-4 rounded-lg border border-gray-400 focus:outline-none focus:border-blue-500" placeholder="Tempel tautan Tik Tok di sini">
//                             <button type="button" class="absolute h-8 top-2 right-2 flex items-center justify-center px-2 py-2 rounded-lg text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500" onclick="copyToClipboard(this)">
//                                 <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
//                                     <path stroke-linecap="round" stroke-linejoin="round" d="M4 16v1a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-1m-4-8l-4-4m4 4l4 4m-4 0a3 3 0 1 0 3-3m-3 3h6a3 3 0 0 0 3-3v-3m-12 3v3m12-3v-3m-12 3h6" />
//                                 </svg>
//                                 Tempel
//                             </button>
//                         </div>
//                         <button type="submit" class="inline-flex items-center px-4 py-2 ml-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 min-w-[100px] font-bold" onclick="processLink()">
//                             <img src="./assets/icon/download (1).png" width="30px" alt="">
//                             <span class="ml-2">Download</span>
//                         </button>
//                     </div>
        
//                     <div class="flex mt-20"></div>
//                     <div class="w-full mx-auto form-input-info mt-20">
//                         <h3  class="text-2xl font-bold">Download video TikTok (Musically) Tanpa Watermark GRATIS</h3>
//                         <p>
//                             Maingames adalah salah satu TikTok Downloader terbaik yang tersedia online untuk TikTok tanpa tanda air. Anda tidak perlu menginstal perangkat lunak apa pun di komputer atau ponsel Anda, yang Anda butuhkan hanyalah tautan video TikTok, dan semua pemrosesan dilakukan di pihak kami, sehingga Anda dapat unduh video Tik tok dengan sangat cepat ke perangkat Anda dengan satu klik.
//                         </p>
//                         <h3  class="text-2xl font-bold mt-4">Fitur utama</h3>
//                         <p class="pl-4">
//                             Kecepatan Cepat... Kami membuat Maingames sangat cepat, Hampir tidak ada penundaan.
//                             Download Tiktok No watermark untuk kualitas yang lebih baik, yang sebagian besar alat di luar sana tidak bisa.
//                             Download video tiktok, Musically video di perangkat apa pun yang Anda inginkan: seluler, PC, atau tablet. TikTok hanya memungkinkan pengguna untuk download video dengan aplikasinya Tik Tok dan video yang diunduh berisi tanda air.
//                             Download dengan menggunakan browser Anda: Kami ingin mempermudah Anda. Tidak perlu mengunduh atau menginstal perangkat lunak apa pun. Kami membuat aplikasi untuk tujuan ini juga tetapi Anda hanya dapat menginstal kapan pun Anda mau.
//                             Itu selalu gratis. Kami hanya menempatkan beberapa iklan, yang mendukung pemeliharaan layanan kami, dan pengembangan lebih lanjut.
//                             Maingames Baru memberikan pengguna kemampuan untuk mengunduh tampilan slide foto Tiktok sebagai format Video Mp4. Gambar dan musik di tayangan slide Tiktok akan digabungkan secara otomatis oleh Maingames. Selain itu, Anda juga dapat mengunduh setiap gambar dalam tampilan slide ke komputer Anda segera.
//                         </p>
        
        
        
        
                        
//                         <div class="border border-gray-300 rounded bg-blue-600  text-white py-1 mt-20 mb-4">
//                             <button class="w-full px-4 py-2 flex items-center justify-between focus:outline-none">
//                               <span class="font-semibold">Bagaiman Cara download video tiktok tanpa watermark ?</span>
//                               <svg class="w-4 h-4 transform transition-transform" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
//                                 <path fill-rule="evenodd" d="M10 14a.75.75 0 01-.53-1.28l4.24-4.24a.75.75 0 111.06 1.06l-5 5a.75.75 0 01-.53.22z" clip-rule="evenodd" />
//                                 <path fill-rule="evenodd" d="M10 6a.75.75 0 01.53 1.28l-4.24 4.24a.75.75 0 01-1.06-1.06l5-5a.75.75 0 01.53-.22z" clip-rule="evenodd" />
//                               </svg>
//                             </button>
//                             <div class="pl-6 hidden p-4">
//                                 Buka aplikasi TikTok di ponsel Anda/atau Situs Web di komputer Anda.
//                                 Pilih video apa pun yang ingin Anda unduh.
//                                 Klik untuk Bagikan tombol di kanan bawah.
//                                 Klik Salin tautan tombol.
//                                 Download video tiktok, Musically video di perangkat apa pun yang Anda inginkan: seluler, PC, atau tablet. TikTok hanya memungkinkan pengguna untuk download video dengan aplikasinya Tik Tok dan video yang diunduh berisi tanda air.
//                                 Kembali ke Maingames dan tempel tautan unduhan Anda ke bidang di atas lalu klik ke Download tombol.
//                                 Tunggu server kami melakukan pekerjaan dan kemudian, Pilih Server 1 atau 3 untuk Save video Tiktok ke perangkat Anda.
          
//                             </div>
//                         </div>
//                         <div class="border border-gray-300 rounded bg-blue-600  text-white py-1 mb-4">
//                             <button class="w-full px-4 py-2 flex items-center justify-between focus:outline-none">
//                               <span class="font-semibold">Cara mendapat tiktok video download tautan ?</span>
//                               <svg class="w-4 h-4 transform transition-transform" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
//                                 <path fill-rule="evenodd" d="M10 14a.75.75 0 01-.53-1.28l4.24-4.24a.75.75 0 111.06 1.06l-5 5a.75.75 0 01-.53.22z" clip-rule="evenodd" />
//                                 <path fill-rule="evenodd" d="M10 6a.75.75 0 01.53 1.28l-4.24 4.24a.75.75 0 01-1.06-1.06l5-5a.75.75 0 01.53-.22z" clip-rule="evenodd" />
//                               </svg>
//                             </button>
//                             <div class="pl-6 hidden p-4">
//                                 Buka situs web atau aplikasi TikTok Anda
//                                 Pilih video TikTok yang ingin Anda unduh
//                                 Temukan tombol Bagikan, Klik. Di sana temukan tombol Salin tautan dan Pilih salin tautan
//                                 URL video unduhan Anda sudah siap di papan klip.
//                                 Misalnya, tautan akan memiliki formulir berikut
//                                 https://v.douyin.com/UFLNjnh/
//                                 atau
//                                 https://www.tiktok.com/@philandmore/video/6805867805452324102
//                                 atau
//                                 https://m.tiktok.com/v/6805867805452324102.html
//                                 dan banyak lagi...
          
//                             </div>
//                         </div>
//                         <div class="border border-gray-300 rounded bg-blue-600  text-white py-1 mb-4">
//                             <button class="w-full px-4 py-2 flex items-center justify-between focus:outline-none">
//                               <span class="font-semibold">Dimanakah Tiktok Videos saved setelah di unduh ?</span>
//                               <svg class="w-4 h-4 transform transition-transform" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
//                                 <path fill-rule="evenodd" d="M10 14a.75.75 0 01-.53-1.28l4.24-4.24a.75.75 0 111.06 1.06l-5 5a.75.75 0 01-.53.22z" clip-rule="evenodd" />
//                                 <path fill-rule="evenodd" d="M10 6a.75.75 0 01.53 1.28l-4.24 4.24a.75.75 0 01-1.06-1.06l5-5a.75.75 0 01.53-.22z" clip-rule="evenodd" />
//                               </svg>
//                             </button>
//                             <div class="pl-6 hidden p-4">
//                                 Saat Anda mengunduh file, mereka biasanya disimpan ke folder apa pun yang telah Anda tetapkan sebagai default. Browser Anda biasanya mengatur folder ini untuk Anda. Dalam pengaturan browser, Anda dapat mengubah dan memilih secara manual folder tujuan untuk Download TikTok videos anda.
//                             </div>
//                         </div>
//                         <div class="border border-gray-300 rounded bg-blue-600  text-white py-1 mb-4">
//                             <button class="w-full px-4 py-2 flex items-center justify-between focus:outline-none">
//                               <span class="font-semibold">Apakah maingames.tech Menyimpan Video yang telah di unduh atau menyimpan salinan video ?</span>
//                               <svg class="w-4 h-4 transform transition-transform" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
//                                 <path fill-rule="evenodd" d="M10 14a.75.75 0 01-.53-1.28l4.24-4.24a.75.75 0 111.06 1.06l-5 5a.75.75 0 01-.53.22z" clip-rule="evenodd" />
//                                 <path fill-rule="evenodd" d="M10 6a.75.75 0 01.53 1.28l-4.24 4.24a.75.75 0 01-1.06-1.06l5-5a.75.75 0 01.53-.22z" clip-rule="evenodd" />
//                               </svg>
//                             </button>
//                             <div class="pl-6 hidden p-4">
//                                 Oh tidak, maingames.tech tidak menyimpan video, kami juga tidak menyimpan salinan video yang diunduh. Semua video di-host di server TikTok. Selain itu, kami tidak melacak riwayat unduhan pengguna kami, sehingga penggunaan maingames.tech benar-benar anonim.
//                             </div>
//                         </div>
//                         <div class="border border-gray-300 rounded bg-blue-600  text-white py-1 mb-4">
//                             <button class="w-full px-4 py-2 flex items-center justify-between focus:outline-none">
//                               <span class="font-semibold">Apakah Saya perlu mengistal intruksi atau ekstensi ?</span>
//                               <svg class="w-4 h-4 transform transition-transform" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
//                                 <path fill-rule="evenodd" d="M10 14a.75.75 0 01-.53-1.28l4.24-4.24a.75.75 0 111.06 1.06l-5 5a.75.75 0 01-.53.22z" clip-rule="evenodd" />
//                                 <path fill-rule="evenodd" d="M10 6a.75.75 0 01.53 1.28l-4.24 4.24a.75.75 0 01-1.06-1.06l5-5a.75.75 0 01.53-.22z" clip-rule="evenodd" />
//                               </svg>
//                             </button>
//                             <div class="pl-6 hidden p-4">
//                                 Tidak. Kami mencoba untuk menjaga hal-hal semudah mungkin bagi pengguna kami. Yang Anda butuhkan hanyalah tautan unduhan TikTok Anda. dan itu masuk ke situs web kami.
//                             </div>
//                         </div>
//                         <div class="border border-gray-300 rounded bg-blue-600  text-white py-1 mb-4">
//                             <button class="w-full px-4 py-2 flex items-center justify-between focus:outline-none">
//                               <span class="font-semibold">Apakah Saya Harus Membayar ke tiktok downloader ?</span>
//                               <svg class="w-4 h-4 transform transition-transform" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
//                                 <path fill-rule="evenodd" d="M10 14a.75.75 0 01-.53-1.28l4.24-4.24a.75.75 0 111.06 1.06l-5 5a.75.75 0 01-.53.22z" clip-rule="evenodd" />
//                                 <path fill-rule="evenodd" d="M10 6a.75.75 0 01.53 1.28l-4.24 4.24a.75.75 0 01-1.06-1.06l5-5a.75.75 0 01.53-.22z" clip-rule="evenodd" />
//                               </svg>
//                             </button>
//                             <div class="pl-6 hidden p-4">
//                                 Tidak, Anda tidak perlu membayar apa pun karena perangkat lunak kami selalu gratis. Anda dapat mendukung kami dengan menonaktifkan Ad Blocks di browser Anda. Ini mendukung pengembangan lebih lanjut kami.
//                             </div>
//                         </div>
//                         <div class="border border-gray-300 rounded bg-blue-600  text-white py-1 mb-4">
//                             <button class="w-full px-4 py-2 flex items-center justify-between focus:outline-none">
//                               <span class="font-semibold">Apakah ada batasan untuk unduh video tiktok di maingames.tech ?</span>
//                               <svg class="w-4 h-4 transform transition-transform" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
//                                 <path fill-rule="evenodd" d="M10 14a.75.75 0 01-.53-1.28l4.24-4.24a.75.75 0 111.06 1.06l-5 5a.75.75 0 01-.53.22z" clip-rule="evenodd" />
//                                 <path fill-rule="evenodd" d="M10 6a.75.75 0 01.53 1.28l-4.24 4.24a.75.75 0 01-1.06-1.06l5-5a.75.75 0 01.53-.22z" clip-rule="evenodd" />
//                               </svg>
//                             </button>
//                             <div class="pl-6 hidden p-4">
//                                 Tidak, Anda dapat mengunduh banyak video TikTok favorit Anda di maingames tanpa batas unduhan.
//                             </div>
//                         </div>
//                         <div class="border border-gray-300 rounded bg-blue-600  text-white py-1 mb-4">
//                             <button class="w-full px-4 py-2 flex items-center justify-between focus:outline-none">
//                               <span class="font-semibold">Apakah maingames.tech mendukung pengunduh banyak video/unduh unduh video dari saluran tiktok / tags tertentu ?</span>
//                               <svg class="w-4 h-4 transform transition-transform" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
//                                 <path fill-rule="evenodd" d="M10 14a.75.75 0 01-.53-1.28l4.24-4.24a.75.75 0 111.06 1.06l-5 5a.75.75 0 01-.53.22z" clip-rule="evenodd" />
//                                 <path fill-rule="evenodd" d="M10 6a.75.75 0 01.53 1.28l-4.24 4.24a.75.75 0 01-1.06-1.06l5-5a.75.75 0 01.53-.22z" clip-rule="evenodd" />
//                               </svg>
//                             </button>
//                             <div class="pl-6 hidden p-4">
//                                 Tidak, maingames belum mendukung fitur ini.
//                             </div>
//                         </div>
//                         <div class="border border-gray-300 rounded bg-blue-600  text-white py-1 mb-4">
//                             <button class="w-full px-4 py-2 flex items-center justify-between focus:outline-none">
//                               <span class="font-semibold">Bisakah saya unduh video bersuli tinggi di maingames.tech ?</span>
//                               <svg class="w-4 h-4 transform transition-transform" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
//                                 <path fill-rule="evenodd" d="M10 14a.75.75 0 01-.53-1.28l4.24-4.24a.75.75 0 111.06 1.06l-5 5a.75.75 0 01-.53.22z" clip-rule="evenodd" />
//                                 <path fill-rule="evenodd" d="M10 6a.75.75 0 01.53 1.28l-4.24 4.24a.75.75 0 01-1.06-1.06l5-5a.75.75 0 01.53-.22z" clip-rule="evenodd" />
//                               </svg>
//                             </button>
//                             <div class="pl-6 hidden p-4">
//                                 Ya, maingames adalah Download video TikTok yang menyediakan resolusi tertinggi untuk Anda. Jika kami menemukan video Tiktok beresolusi Full HD atau lebih tinggi, kami akan segera menampilkan tautan Unduh berkualitas tinggi dan Anda dapat mengunduhnya.
//                             </div>
//                         </div>
//                         <div class="border border-gray-300 rounded bg-blue-600  text-white py-1 mb-4">
//                             <button class="w-full px-4 py-2 flex items-center justify-between focus:outline-none">
//                               <span class="font-semibold">Apakah saya dapat hanya menggunduh suara atau mp3 dari video ?</span>
//                               <svg class="w-4 h-4 transform transition-transform" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
//                                 <path fill-rule="evenodd" d="M10 14a.75.75 0 01-.53-1.28l4.24-4.24a.75.75 0 111.06 1.06l-5 5a.75.75 0 01-.53.22z" clip-rule="evenodd" />
//                                 <path fill-rule="evenodd" d="M10 6a.75.75 0 01.53 1.28l-4.24 4.24a.75.75 0 01-1.06-1.06l5-5a.75.75 0 01.53-.22z" clip-rule="evenodd" />
//                               </svg>
//                             </button>
//                             <div class="pl-6 hidden p-4">
//                                 Ya, kamu dapat hanya mengunduh audio tanpa mengunduh video di maingames.tech
//                             </div>
//                         </div>
        
//                         <div class="text-white">
//                             <b>Catatan: </b> Maingames bukan alat Tiktok, kami tidak memiliki hubungan dengan Tiktok atau ByteDance Ltd. Kami hanya mendukung pengguna Tiktok untuk mengunduh video kami di Tiktok tanpa logo tanpa masalah. Jika Anda memiliki masalah dengan situs seperti Tikmate atau SSStiktok, coba Maingames, kami terus memperbarui untuk memudahkan pengguna download video tiktok. Terima kasih!
//                         </div>
        
          
        
                          
        
        
                        
//                     </div>
        
//                 </div>
//             </div>
        
//             <div class="bg-gradient-to-r from-blue-500 to-blue-700 form-box flex-col align-middle w-full pt-20" id="video-box">
//                 <div class="box-video-info">
//                     <div class="box-video-info-cbox">
//                         <div class="image-video-box">
//                             <img id="image" src="./assets/image/10_seleb_cantik_korea_young_and_rich-20190716-005-non_fotografer_kly 1.png" alt="">
//                         </div>
//                     </div>
//                     <div class="box-video-info-cbox-info">
//                         <div class="w-full">
//                             <div class="flex">
//                                 <div class="flex rounded-lg" style="width: 30%;">
//                                     <p class="text-xl font-bold mr-2">Name </p>
//                                 </div>
//                                 <div class="flex" style="width: 70%;">
//                                     <p class="text-xl" id="video-name"></p>
//                                 </div>
//                             </div>
//                             <div class="flex">
//                                 <div class="flex rounded-lg" style="width: 30%;">
//                                     <p class="font-bold mr-2">creator </p>
//                                 </div>
//                                 <div class="flex" style="width: 70%;">
//                                     <p class="" id="video-creator">Crator</p>
//                                 </div>
//                             </div>
//                             <div class="flex">
//                                 <div class="flex rounded-lg" style="width: 30%;">
//                                     <p class="font-bold mr-2">size </p>
//                                 </div>
//                                 <div class="flex" style="width: 70%;">
//                                     <p class="" id="video-size">0</p>
//                                 </div>
//                             </div>
//                             <div class="flex">
//                                 <div class="flex rounded-lg" style="width: 30%;">
//                                     <p class="font-bold mr-2">durasi </p>
//                                 </div>
//                                 <div class="flex" style="width: 70%;">
//                                     <p class="" id="video-duration">0</p>
//                                 </div>
//                             </div>
//                         </div>
//                         <div class="mt-8 box-video-info-cbox-info-nav">
//                             <button type="button" class="flex items-center justify-center py-2 rounded-lg text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 font-bold mb-2" id="downloadHD">
//                                 Download HD
//                             </button>
//                             <button type="button" class="flex items-center justify-center py-2 rounded-lg text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 font-bold mb-2" id="downloadServer2">
//                                 Download Server 2
//                             </button>
//                             <button type="button" class="flex items-center justify-center py-2 rounded-lg text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 font-bold" onclick="backToHome()">
//                                 Download Video Lainnya
//                             </button>
//                         </div>
//                     </div>
                   
//                 </div>
//             </div>
        
//             <div class="bg-gray-800 text-white  flex-col justify-between">
//                 <div class="container mx-auto text-center py-6">
//                     <div class="max-w-screen-lg mx-auto">
//                         <div class="grid grid-cols-3 gap-4">
//                           <div class="p-4 flex-col">
//                             <h4 class="flex">Company</h4>
//                             <a href="#" class="flex pl-2">Kontak</a>
//                           </div>
//                           <div class="p-4 flex-col">
//                             <h4 class="flex">Legal</h4>
//                             <a href="#" class="flex pl-2">Ketenuan Layanan</a>
//                             <a href="#" class="flex pl-2">Kebijakan Pribad</a>
//                           </div>
//                           <div class="p-4 flex-col">
//                             <h4 class="flex">Tools</h4>
//                             <a href="#" class="flex pl-2">Download Video Douyin</a>
//                             <a href="#" class="flex pl-2">Download tiktok Slide</a>
//                             <a href="#" class="flex pl-2">Download tiktok Story</a>
//                             <a href="#" class="flex pl-2">How To Download video tiktok</a>
//                           </div>
//                         </div>
//                       </div>
//                 </div>
        
//                 <div class="w-full flex justify-center align-middle bg-gray-900 py-2">
//                     Copyright &copy; <a href="#">maingames.tech</a>
//                 </div>
//             </div>
        
        
//             <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
//             <script type='text/javascript' src='//pl21030652.highcpmrevenuegate.com/eb/ec/43/ebec43d14b6b6c5d307d2317db271c30.js'></script>
        
//             <script src="/js/code.js"></script>
//             <script src="/js/loading.js"></script>
        
//         </body>
//         </html>`)
//     } 
// })



// const site = fs.readFileSync("./public/html/sitemap.xml", "utf-8");
// const siap = site.replace(/2023-9-22/g, "2023-09-22");
// fs.writeFileSync("./public/html/sitemap.xml", siap)
