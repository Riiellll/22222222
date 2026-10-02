// ─────────────────────────────────────────────────────────────
//  EDIT THIS FILE ONLY. Every name, photo and sentence on the
//  site comes from here. Photos: drop files in /public/photos
//  and use paths like "/photos/us-1.jpg".
// ─────────────────────────────────────────────────────────────

// Dummy photos. Delete this helper once you use your own pictures.
const pic = (seed: string, w: number, h: number) =>
  `https://picsum.photos/seed/${seed}/${w}/${h}`;

export const data = {
  name: "Sophia", // her name
  from: "Alex", // your name
  age: 17,
  heroLine: "Seventeen looks beautiful on you.",
  heroPhoto: pic("sophia-hero", 900, 1200),

  // The day you became "us". Powers the live counter.
  startDate: "2024-02-14T18:00:00",

  // Optional song. Put a file at /public/music/song.mp3 and set
  // this to "/music/song.mp3". Leave empty to hide the music button.
  music: "",

  letter: {
    greeting: "Dear Sophia,",
    paragraphs: [
      "Seventeen. I keep saying it out loud because I still can't believe how lucky I am to be the one celebrating it with you.",
      "You turn ordinary days into the ones I remember most: the late-night calls, the silly voice you do when you're tired, the way you start laughing before you finish the joke.",
      "I made you this little corner of the internet because a card felt too small. Everything on this page is you, or us, or the way you make me feel.",
      "Whatever this new year brings, I'll be right beside you, cheering the loudest. Happy birthday, my love.",
    ],
    signoff: "Forever yours,",
  },

  gallery: [
    { src: pic("us-1", 700, 700), caption: "Our first photo" },
    { src: pic("us-2", 700, 700), caption: "That rainy walk" },
    { src: pic("us-3", 700, 700), caption: "Your favourite café" },
    { src: pic("us-4", 700, 700), caption: "Sunset, you, me" },
    { src: pic("us-5", 700, 700), caption: "Silly faces" },
    { src: pic("us-6", 700, 700), caption: "Movie night" },
    { src: pic("us-7", 700, 700), caption: "The day trip" },
    { src: pic("us-8", 700, 700), caption: "My favourite smile" },
  ],

  story: [
    {
      date: "March 3, 2024",
      title: "The day I met you",
      text: "I didn't know it yet, but my whole year was about to change.",
      photo: pic("story-1", 800, 600),
    },
    {
      date: "March 21, 2024",
      title: "Our first date",
      text: "I was so nervous I forgot what I wanted to order. You laughed, and I stopped being nervous.",
    },
    {
      date: "May 9, 2024",
      title: "The first time I said it",
      text: "Three words, one shaky voice, and you said them back.",
      photo: pic("story-3", 800, 600),
    },
    {
      date: "December 24, 2024",
      title: "Our first Christmas",
      text: "Terrible gifts, perfect night. I'd do it all again.",
    },
    {
      date: "Today",
      title: "Your 17th birthday",
      text: "Still choosing you. Every single day.",
      photo: pic("story-5", 800, 600),
    },
  ] as { date: string; title: string; text: string; photo?: string }[],

  reasons: [
    "Your laugh makes everyone around you laugh too.",
    "You remember the tiny things I say and bring them back later.",
    "You're kind to people who can never repay it.",
    "The way you sing along when you think no one's listening.",
    "You make boring errands feel like adventures.",
    "You believe in me on the days I don't.",
    "Your hugs fix more than they should be able to.",
    "You get excited about the little things.",
    "You're braver than you give yourself credit for.",
    "You always know what to say to cheer me up.",
    "I have never gotten used to your smile.",
    "You make me want to be better.",
    "You're ridiculously good at being yourself.",
    "Even your bad jokes are my favourite.",
    "With you, home feels like a person, not a place.",
    "You choose me, every single day.",
    "Because it's you. It was always going to be you.",
  ],

  bouquet: {
    title: "A bouquet for you",
    hint: "Pick a rose. Every one has a promise inside.",
    promises: [
      "I'll always save you the last bite of dessert.",
      "I'll keep making you laugh until we're both old and loud.",
      "I'll hold your hand in every crowd.",
      "I'll cheer for every dream, even the ones that scare you.",
      "I'll keep leaving you little notes when you least expect them.",
      "I'll choose you today, and every day after.",
    ],
    final: "Six roses, and a whole lifetime of the rest.",
  },

  wish: {
    before: "Make a wish",
    hint: "Close your eyes, think of it, then tap the candle.",
    after: "I hope it comes true.",
    message:
      "Whatever you wished for, I'm going to spend this whole year cheering you on until it does.",
    closing: "Happy birthday, my love.",
  },
};
