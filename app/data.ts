// ─────────────────────────────────────────────────────────────
//  EDIT THIS FILE ONLY. Every name, photo and sentence on the
//  site comes from here. Photos: drop files in /public/photos
//  and use paths like "/photos/us-1.jpg".
// ─────────────────────────────────────────────────────────────

// Dummy photos. Delete this helper once you use your own pictures.
const pic = (seed: string, w: number, h: number) =>
  `https://picsum.photos/seed/${seed}/${w}/${h}`;

export const data = {
  name: "Hollice", // her name
  from: "Kevin", // your name
  age: 17,
  heroLine: "Seventeen looks beautiful on you.",
  heroPhoto: pic("sophia-hero", 900, 1200),

  // The day you became "us". Powers the live counter.
  startDate: "2025-06-06T18:00:00",

  // Optional song. Put a file at /public/music/song.mp3 and set
  // this to "/music/song.mp3". Leave empty to hide the music button.
  music: "",

  letter: {
    greeting: "Dear Hollice,",
    paragraphs: [
      "Seventeen! Seneng rasanya karna AKU BISA NGERAYAIN 17 NYA KAMUU!",
      "Ajaibnya kamu adalah kamu bisa ngubah hari hari biasa jadi hari hari yang aku gabisa lupain. Call kangennya kamu, nempelnya kamu, suara ketawa kamu, even tantrumnya kamu menurut aku lucu.",
      "Sedihnya aku gabisa dateng keruma kamu jam 12 karna gaada kamu disitu, jadi satu website ini khusus untuk kamu, kita, dan bagaimana aku ngerasa disayang banget sama kamu.",
      "Hope you enjoy the rest of the site, andd apapun yang terjadi di 17 tahun nya kamu, aku akan ada disamping kamu, cheering and cherishing YOU the loudest! Happy birthday kesayangannya aku.",
    ],
    signoff: "Forever yours,",
  },

  gallery: [
    { src: "/photobooth.jpeg", caption: "Photobooth date" },
    { src: "/iceCream.jpeg", caption: "Ice cream date" },
    { src: "/pelayanan.jpeg", caption: "Pelayanan bareng" },
    { src: "/grocery.jpeg", caption: "Grocery Date" },
    { src: "/skatedate.jpeg", caption: "Skate date" },
    { src: "/sleep.jpeg", caption: "Sleep!" },
    { src: "/monyong.jpeg", caption: "Melet" },
    { src: "/smile.jpeg", caption: "Senyum favorit aku!" },
  ],

  story: [
    {
      date: "June 6, 2025",
      title: "Where it all started",
      text: "Hari dimana aku janji selalu ada buat kamu!",

    },
    {
      date: "June 7, 2025",
      title: "Our first date",
      text: "Aku inget aku seneng kita banyak pegangan disini hehe",
      photo: "firstDate.jpeg",
    },
    {
      date: "Oct 3, 2025",
      title: "ULTAH KAMU!",
      text: "I think this was our first hachi grill together?",
      photo: "ultah kamu.jpeg",
    },
    {
      date: "June 6, 2026",
      title: "OUR FIRST ANNIVERSARRY!",
      text: "ini memorable banget buat aku sayang, aku seneng orangnya kamu",
      photo: "anniv.jpeg"
    },
    {
      date: "Today",
      title: "Your 17th birthday",
      text: "Still choosing you. Every single day.",
    },
  ] as { date: string; title: string; text: string; photo?: string }[],

  reasons: [
    "Kamu bisa buat aku seneng dari yang gak aku sangka",
    "Kamu inget hal kecil tentang aku, kayak gabisa makan kalo ngga minum",
    "Kamu positive vibes banget sama semua orang",
    "Kamu lucu banget kalo lagi ketawa",
    "Aku suka senyum kamu",
    "PELUKAN KAMUU",
    "Aku ngerasa disayang sama kamu saat aku lagi runtuh runtuhnya.",
    "Karna kamu bakal cocok banget jadi ISTRI AKU",
    "Kamu ngga ngerasa aku aneh.",
    "KAMU LUCUUU",
    "Kamu peduli bukan cuma sama aku, tapi juga ke KITA.",
    "Kamu ngebuat mau jadi orang yang lebih baik.",
    "Kamu percaya aku.",
    "Sama kamu rasanya nyaman, adem, tenang.",
    "Karena kamu milih aku, setiap hari.",
    "Karena kamu ngga nyerah sama aku",
    "Karna itu kamu, dan akan selalu kamu.",
  ],

  bouquet: {
    title: "A bouquet buat kamu!",
    hint: "Pilih bunganya, masing-masing ada janji aku",
    promises: [
      "Aku akan selalu beliin kamu eskrim mint!",
      "Aku akan terus buat kamu ketawa sampe kita tua!",
      "Aku akan selalu pegang tangan kamu di keramaian! (biar kamu ngga ilang)",
      "Aku akan selalu support kamu!",
      "Aku akan selalu berusaha jadi calon suami yang lebih baik",
      "Aku akan selalu milih kamu, now, and forever!",
    ],
    final: "6 mawar, dan sisanya bakal nyusul (eh?)",
  },

  wish: {
    before: "Make a wish",
    hint: "Tutup mata, doa sebentar, trus teken lilinnya",
    after: "Aminnn semoga terwujud!",
    message:
      "Apapun yang kamu impikan, semoga terwujud ya sayangku",
    closing: "Happy birthday sayang, I love you forever and always!",
  },
};
