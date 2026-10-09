export const site = {
  name: 'Kristýna Zouzalová',
  shortName: 'KZ',
  tagline: 'Fitness & Travel Content Creator',
  location: 'Prague, Czech Republic',
  email: 'kristynazouzalova@gmail.com',
  phone: '+420777545666',
  phoneDisplay: '(+420) 777 545 666',
  instagram: 'https://instagram.com/zouzalova.tyna',
  instagramHandle: '@zouzalova.tyna',
  description:
    'Fitness and travel content creator based in Prague. Brand collaborations, training content, and lifestyle storytelling.',
  url: 'https://Ston3tom.github.io/KZ_Portfolio',
};

/** Join BASE_URL with a relative public path (handles missing trailing slash). */
export function withBase(path: string, baseUrl = import.meta.env.BASE_URL): string {
  const base = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;
  return `${base}${path.replace(/^\//, '')}`;
}

export const nav = [
  { label: 'About', href: '#about' },
  { label: 'Content', href: '#content' },
  { label: 'Partnerships', href: '#partnerships' },
  { label: 'Audience', href: '#audience' },
  { label: 'Contact', href: '#contact' },
] as const;

export type VideoItem = {
  id: string;
  title: string;
  description: string;
  thumb: string;
  video: string;
};

export const contentVideos: VideoItem[] = [
  {
    id: 'training',
    title: 'Training Session',
    description: 'Form-first workout energy — clear, intense, watchable.',
    thumb: 'images/training_thumb.jpg',
    video: 'videos/training.mp4',
  },
  {
    id: 'day-of-life',
    title: 'Day in the Life',
    description: 'Routines, movement, and everyday pace from Prague.',
    thumb: 'images/day_of_life_thumb.jpg',
    video: 'videos/day_of_life.mp4',
  },
  {
    id: 'legday-highlight',
    title: 'Leg Day Highlights',
    description: 'Lower-body training with pace and power.',
    thumb: 'images/legday_highlight_thumb.jpg',
    video: 'videos/legday_highlight.mp4',
  },
  {
    id: 'legday-tutorial',
    title: 'Leg Day Tutorial',
    description: 'Step-by-step cues for effective lower-body work.',
    thumb: 'images/legday_tutorial_thumb.jpg',
    video: 'videos/legday_tutorial.mp4',
  },
];

export const partnershipVideos: VideoItem[] = [
  {
    id: 'line-opening',
    title: 'Apparel Unboxing',
    description: 'Gymwear reveal for fitness apparel collaborations.',
    thumb: 'images/line_opening_thumb.jpg',
    video: 'videos/line_opening.mp4',
  },
  {
    id: 'opalovak',
    title: 'Product Review',
    description: 'Sunscreen testing for skincare and beauty brands.',
    thumb: 'images/opalovak_thumb.jpg',
    video: 'videos/opalovak.mp4',
  },
];

export const audience = {
  gender: [
    { label: 'Women', value: 60 },
    { label: 'Men', value: 38 },
    { label: 'Other', value: 2 },
  ],
  age: [
    { label: '18–24', value: 40 },
    { label: '25–34', value: 36 },
    { label: '35–44', value: 14 },
    { label: '45–54', value: 7 },
    { label: '55+', value: 3 },
  ],
};

export const focusAreas = [
  {
    title: 'Training content',
    text: 'Workouts, form cues, and highlights that feel authentic and watchable.',
  },
  {
    title: 'Lifestyle storytelling',
    text: 'Travel and day-to-day moments that connect fitness to real life.',
  },
  {
    title: 'Brand partnerships',
    text: 'Clean product storytelling for apparel, wellness, and lifestyle brands.',
  },
];
