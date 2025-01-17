/* eslint-disable no-undef */
const alanTranscript = require('./transcripts/alan');
const andyTranscript = require('./transcripts/andy');
const anitaTranscript = require('./transcripts/anita');
const ashleyTranscript = require('./transcripts/ashley');
const beckyTranscript = require('./transcripts/becky');
const emilyTranscript = require('./transcripts/emily');
const florenceTranscript = require('./transcripts/florence');
const harunTranscript = require('./transcripts/harun');
// const jamesTranscript = require('./transcripts/james');
const jideTranscript = require('./transcripts/jide');
const johnTranscript = require('./transcripts/john');
const jonathanTranscript = require('./transcripts/jonathan');
const joseTranscript = require('./transcripts/jose');
const joshTranscript = require('./transcripts/josh');
const joshuaTranscript = require('./transcripts/joshua');
const martinTranscript = require('./transcripts/martin');
const michalTranscript = require('./transcripts/michal');
const philipTranscript = require('./transcripts/philip');
const rahimTranscript = require('./transcripts/rahim');
const stephenTranscript = require('./transcripts/stephen');
const timTranscript = require('./transcripts/tim');
const veriteeBarryTranscript = require('./transcripts/veritee-barry');

/* eslint-enable no-undef */

const stories = [
  {
    id: '234sdf',
    title: 'Alan',
    href: 'alan',
    mainImage: 'alan.jpg',
    images: [
      'photo-8.jpg',
      'photo-12.jpg',
      'photo-13.jpg',
      'photo-20.jpg',
      'photo-32.jpg',
    ],
    audioFile: '/static/audio/alan.mp3',
    shortDescription: "Alan's photos",
    longStory: alanTranscript,
  },
  {
    id: 'fgsdf43',
    title: 'Andy',
    href: 'andy',
    mainImage: 'andy.jpg',
    images: [
      'photo-25.jpg',
      'photo-26.jpg',
      'photo-28.jpg',
      'photo-29.jpg',
      'photo-30.jpg',
    ],
    audioFile: '/static/audio/andy.mp3',
    shortDescription: "Andy's photos",
    longStory: andyTranscript,
  },
  {
    id: 'xcbxcv32',
    title: 'Anita',
    href: 'anita',
    mainImage: 'anita.jpg',
    images: [
      'photo-48.jpg',
      'photo-49.jpg',
      'photo-50.jpg',
      'photo-51.jpg',
      'photo-52.jpg',
    ],
    audioFile: '/static/audio/anita.mp3',
    shortDescription: "Anita's photos",
    longStory: anitaTranscript,
  },
  {
    id: 'lkj@£2',
    title: 'Ashley',
    href: 'ashley',
    mainImage: 'ashley.jpg',
    images: [
      'photo-999.jpg',
      'photo-91.jpg',
      'photo-92.jpg',
      'photo-93.jpg',
      'photo-94.jpg',
      'photo-95.jpg',
    ],
    audioFile: '/static/audio/ashley.mp3',
    shortDescription: "Ashley's photos",
    longStory: ashleyTranscript,
  },
  {
    id: 'vsxcx33',
    title: 'Becky',
    href: 'becky',
    mainImage: 'becky.jpg',
    images: [
      'photo-82.jpg',
      'photo-83.jpg',
      'photo-84.jpg',
      'photo-85.jpg',
      'photo-106.jpg',
    ],
    audioFile: '/static/audio/becky.mp3',
    shortDescription: "Becky's photos",
    longStory: beckyTranscript,
  },
  {
    id: 'iou234',
    title: 'Emily',
    href: 'emily',
    mainImage: 'emily.jpg',
    images: [
      'photo-107.jpg',
      'photo-108.jpg',
      'photo-109.jpg',
      'photo-110.jpg',
      'photo-111.jpg',
    ],
    audioFile: '/static/audio/emily.mp3',
    shortDescription: "Emily's photos",
    longStory: emilyTranscript,
  },
  {
    id: '1as4r2',
    title: 'Florence',
    href: 'florence',
    mainImage: 'florence.jpg',
    images: [
      'photo-9.jpg',
      'photo-11.jpg',
      'photo-16.jpg',
      'photo-18.jpg',
      'photo-112.jpg',
    ],
    audioFile: '/static/audio/florence.mp3',
    shortDescription: "Florence's photos",
    longStory: florenceTranscript,
  },
  {
    id: '121sdf',
    title: 'Harun',
    href: 'harun',
    mainImage: 'harun.jpg',
    images: ['photo-42.jpg', 'photo-44.jpg', 'photo-45.jpg', 'photo-57.jpg'],
    audioFile: '/static/audio/harun.mp3',
    shortDescription: "Harun's photos",
    longStory: harunTranscript,
  },
  {
    id: 'sdfpol1',
    title: 'Jide',
    href: 'jide',
    mainImage: 'jide.jpg',
    images: [
      'photo-6.jpg',
      'photo-19.jpg',
      'photo-21.jpg',
      'photo-22.jpg',
      'photo-23.jpg',
    ],
    audioFile: '/static/audio/jide.mp3',
    shortDescription: "Jide's photos",
    longStory: jideTranscript,
  },
  {
    id: 'lnl23jdf',
    title: 'John',
    href: 'john',
    mainImage: 'john.jpg',
    images: [
      'photo-38.jpg',
      'aphoto-196.jpg',
      'photo-97.jpg',
      'photo-390.jpg',
      'photo-40.jpg',
    ],
    audioFile: '/static/audio/john.mp3',
    shortDescription: "John's photos",
    longStory: johnTranscript,
  },
  {
    id: '24mlnk',
    title: 'Jonathan',
    href: 'jonathan',
    mainImage: 'jonathan.jpg',
    images: [
      'photo-1.jpg',
      'photo-5.jpg',
      'photo-15.jpg',
      'photo-17.jpg',
      'photo-98.jpg',
    ],
    audioFile: '/static/audio/jonathan.mp3',
    shortDescription: "Jonathan's photos",
    longStory: jonathanTranscript,
  },
  {
    id: 'opipo123',
    title: 'José',
    href: 'jose',
    mainImage: 'jose.jpg',
    images: [
      'photo-55.jpg',
      'photo-69.jpg',
      'photo-74.jpg',
      'photo-75.jpg',
      'photo-77.jpg',
    ],
    audioFile: '/static/audio/jose.mp3',
    shortDescription: "Jose's photos",
    longStory: joseTranscript,
  },
  {
    id: 'po123dsa',
    title: 'Josh',
    href: 'josh',
    mainImage: 'josh.jpg',
    images: [
      'photo-35.jpg',
      'photo-62.jpg',
      'photo-63.jpg',
      'photo-64.jpg',
      'photo-68.jpg',
    ],
    audioFile: '/static/audio/josh.mp3',
    shortDescription: "Josh's photos",
    longStory: joshTranscript,
  },
  {
    id: 'joshdsasdfa',
    title: 'Joshua',
    href: 'joshua',
    mainImage: 'joshua.jpg',
    images: [
      'photo-27.jpg',
      'photo-33.jpg',
      'photo-54.jpg',
      'photo-81.jpg',
      'photo-105.jpg',
    ],
    audioFile: '/static/audio/joshua.mp3',
    shortDescription: "Joshua's photos",
    longStory: joshuaTranscript,
  },
  {
    id: 'msdfrew',
    title: 'Martin',
    href: 'martin',
    mainImage: 'martin.jpg',
    images: [
      'photo-100.jpg',
      'photo-101.jpg',
      'photo-102.jpg',
      'photo-103.jpg',
      'photo-104.jpg',
    ],
    audioFile: '/static/audio/martin.mp3',
    shortDescription: "Martin's photos",
    longStory: martinTranscript,
  },
  {
    id: 'mie9sdxc',
    title: 'Michal',
    href: 'michal',
    mainImage: 'michal.jpg',
    images: [
      'photo-2.jpg',
      'photo-4.jpg',
      'photo-7.jpg',
      'photo-10.jpg',
      'photo-14.jpg',
    ],
    audioFile: '',
    shortDescription: "Michal's photos",
    longStory: michalTranscript,
  },
  {
    id: 'phisdf32w',
    title: 'Philip',
    href: 'philip',
    mainImage: 'philip.jpg',
    images: [
      'photo-31.jpg',
      'photo-34.jpg',
      'photo-46.jpg',
      'photo-56.jpg',
      'photo-59.jpg',
    ],
    audioFile: '/static/audio/philip.mp3',
    shortDescription: "Philip's photos",
    longStory: philipTranscript,
  },
  {
    id: 'rah3e21rdfs',
    title: 'Rahim',
    href: 'rahim',
    mainImage: 'rahim.jpg',
    images: [
      'photo-86.jpg',
      'photo-87.jpg',
      'photo-88.jpg',
      'photo-89.jpg',
      'photo-90.jpg',
    ],
    audioFile: '/static/audio/rahim.mp3',
    shortDescription: "Rahim's photos",
    longStory: rahimTranscript,
  },
  {
    id: 's89df9',
    title: 'Stephen',
    href: 'stephen',
    mainImage: 'stephen.jpg',
    images: [
      'photo-67.jpg',
      'photo-70.jpg',
      'photo-71.jpg',
      'photo-72.jpg',
      'photo-73.jpg',
    ],
    audioFile: '/static/audio/stephen.mp3',
    shortDescription: "Stephen's photos",
    longStory: stephenTranscript,
  },
  {
    id: 'tim213123',
    title: 'Tim',
    href: 'tim',
    mainImage: 'tim.jpg',
    images: [
      'photo-24.jpg',
      'photo-58.jpg',
      'photo-60.jpg',
      'photo-61.jpg',
      'photo-79.jpg',
    ],
    audioFile: '/static/audio/tim.mp3',
    shortDescription: "Tim's photos",
    longStory: timTranscript,
  },
  {
    id: 'verbar213sdf',
    title: 'Veritee and Barry',
    href: 'veritee-and-barry',
    mainImage: 'veritee-and-barry.jpg',
    images: [
      'photo-53.jpg',
      'photo-76.jpg',
      'photo-78.jpg',
      'photo-80.jpg',
      'photo-99.jpg',
    ],
    audioFile: '/static/audio/veritee-barry.mp3',
    shortDescription: "Veritee and Barry's photos",
    longStory: veriteeBarryTranscript,
  },
];

// eslint-disable-next-line no-undef
module.exports = stories;
