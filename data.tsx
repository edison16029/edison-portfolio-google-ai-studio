import { Project, TravelEntry, BlogPost } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'AI Productivity Suite',
    description: 'A comprehensive suite of tools powered by LLMs to automate daily workflows.',
    longDescription: 'This project integrates multiple generative AI models to provide users with a unified workspace for drafting emails, summarizing documents, and generating code snippets. Built with React and Node.js.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
    tags: ['React', 'TypeScript', 'Gemini API', 'Node.js'],
  },
  {
    id: '2',
    title: 'EcoTrack Mobile App',
    description: 'Track your carbon footprint and discover sustainable local businesses.',
    longDescription: 'EcoTrack uses geolocation and community-driven data to help users make greener choices. It features a gamified experience to encourage sustainable habits.',
    image: 'https://images.unsplash.com/photo-1542601906-93947f6072cb?auto=format&fit=crop&q=80&w=800',
    tags: ['React Native', 'Firebase', 'Maps API'],
  },
  {
    id: '3',
    title: 'Nebula Design System',
    description: 'An open-source UI component library for building modern accessible web apps.',
    longDescription: 'A strictly typed, accessible component library focusing on developer experience and consistency across different platforms.',
    image: 'https://images.unsplash.com/photo-1586717791821-3f44a563dc4c?auto=format&fit=crop&q=80&w=800',
    tags: ['Design System', 'Storybook', 'Tailwind'],
  }
];

export const TRAVEL_DATA: TravelEntry[] = [
  {
    id: 'v1',
    country: 'Thailand',
    city: 'Phuket, Krabi & Bangkok',
    date: 'October 2024',
    status: 'visited',
    image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&q=80&w=1200',
    notes: 'An unforgettable trip with my wife. From the crystal waters of Phuket and Krabi to the vibrant, energetic streets of Bangkok.'
  },
  {
    id: 'm1',
    country: 'Central Europe',
    city: 'Prague, Vienna & Budapest',
    date: 'Future',
    status: 'bucket-list',
    category: 'must-see',
    image: 'https://plus.unsplash.com/premium_photo-1661963067279-2f7bf970c49c?auto=format&fit=crop&q=80&w=800',
    notes: 'Historic architecture and rich history.'
  },
  {
    id: 'm2',
    country: 'UK + Scotland',
    city: 'London & Edinburgh',
    date: 'Future',
    status: 'bucket-list',
    category: 'must-see',
    image: 'https://images.unsplash.com/photo-1533929736458-ca588d08c8be?auto=format&fit=crop&q=80&w=800',
    notes: 'Rolling hills and historic castles.'
  },
  {
    id: 'm3',
    country: 'Iberia',
    city: 'Spain + Portugal',
    date: 'Future',
    status: 'bucket-list',
    category: 'must-see',
    image: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&q=80&w=800',
    notes: 'Sun, tapas, and coastal beauty.'
  },
  {
    id: 'm4',
    country: 'Japan',
    city: 'Tokyo, Kyoto & Osaka',
    date: 'Future',
    status: 'bucket-list',
    category: 'must-see',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=800',
    notes: 'Modern technology meets deep tradition.'
  },
  {
    id: 'm5',
    country: 'Western Europe',
    city: 'Italy + France',
    date: 'Future',
    status: 'bucket-list',
    category: 'must-see',
    image: 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&q=80&w=800',
    notes: 'Art, culture, and culinary excellence.'
  },
  {
    id: 'm6',
    country: 'UAE',
    city: 'Dubai',
    date: 'Future',
    status: 'bucket-list',
    category: 'must-see',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=800',
    notes: 'Futuristic skylines and desert luxury.'
  },
  {
    id: 'm7',
    country: 'Singapore',
    city: 'Singapore City',
    date: 'Future',
    status: 'bucket-list',
    category: 'must-see',
    image: 'https://plus.unsplash.com/premium_photo-1697730373939-3ebcaa9d295e?auto=format&fit=crop&q=80&w=800',
    notes: 'A garden city with incredible food.'
  },
  {
    id: 'm8',
    country: 'Iceland',
    city: 'Reykjavik',
    date: 'Future',
    status: 'bucket-list',
    category: 'must-see',
    image: 'https://images.unsplash.com/photo-1476610182048-b716b8518aae?auto=format&fit=crop&q=80&w=800',
    notes: 'The land of fire and ice.'
  },
  {
    id: 'm9',
    country: 'Turkey',
    city: 'Istanbul & Cappadocia',
    date: 'Future',
    status: 'bucket-list',
    category: 'must-see',
    image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&q=80&w=800',
    notes: 'Where East meets West.'
  },
  {
    id: 'm10',
    country: 'Switzerland',
    city: 'The Alps',
    date: 'Future',
    status: 'bucket-list',
    category: 'must-see',
    image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&q=80&w=800',
    notes: 'Pristine lakes and snowy peaks.'
  },
  {
    id: 'm11',
    country: 'East Africa',
    city: 'Kenya or Tanzania',
    date: 'Future',
    status: 'bucket-list',
    category: 'must-see',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=800',
    notes: 'Wildlife safaris and vast savannas.'
  },
  {
    id: 'm12',
    country: 'South Korea',
    city: 'Seoul',
    date: 'Future',
    status: 'bucket-list',
    category: 'must-see',
    image: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&q=80&w=800',
    notes: 'K-culture and vibrant city life.'
  },
  {
    id: 'm13',
    country: 'Oceania',
    city: 'New Zealand + Australia',
    date: 'Future',
    status: 'bucket-list',
    category: 'must-see',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=800',
    notes: 'Stunning landscapes and unique wildlife.'
  },
  { id: 'g1', country: 'Maldives', city: 'Atolls', date: 'Future', status: 'bucket-list', category: 'good-to-see', image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&q=80&w=400', notes: 'Crystal clear tropical paradise.' },
  { id: 'g2', country: 'Bhutan', city: 'Paro', date: 'Future', status: 'bucket-list', category: 'good-to-see', image: 'https://plus.unsplash.com/premium_photo-1661952578770-79010299a9f9?auto=format&fit=crop&q=80&w=400', notes: 'Kingdom of Himalayan happiness.' },
  { id: 'g3', country: 'Sri Lanka', city: 'Colombo', date: 'Future', status: 'bucket-list', category: 'good-to-see', image: 'https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&q=80&w=400', notes: 'Tea plantations and historic ruins.' },
  { id: 'g4', country: 'Greece', city: 'Santorini', date: 'Future', status: 'bucket-list', category: 'good-to-see', image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&q=80&w=400', notes: 'Iconic blue domes and Aegean sunsets.' },
  { id: 'g5', country: 'Azerbaijan', city: 'Baku', date: 'Future', status: 'bucket-list', category: 'good-to-see', image: 'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?auto=format&fit=crop&q=80&w=400', notes: 'Futuristic architecture in Baku.' },
  { id: 'g6', country: 'Vietnam', city: 'Ha Long Bay', date: 'Future', status: 'bucket-list', category: 'good-to-see', image: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&q=80&w=400', notes: 'Breathtaking limestone islands.' },
  { id: 'o1', country: 'Germany', city: 'Berlin & Munich', date: 'Future', status: 'bucket-list', category: 'other', image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&q=80&w=400', notes: 'Engineering marvels and festive culture.' },
  { id: 'o2', country: 'Canada', city: 'Vancouver & Toronto', date: 'Future', status: 'bucket-list', category: 'other', image: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&q=80&w=400', notes: 'Vibrant cities and majestic nature.' },
  { id: 'o3', country: 'Egypt', city: 'Cairo & Giza', date: 'Future', status: 'bucket-list', category: 'other', image: 'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&q=80&w=400', notes: 'Ancient wonders of the pharaohs.' },
  { id: 'o4', country: 'South Africa', city: 'Cape Town', date: 'Future', status: 'bucket-list', category: 'other', image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&q=80&w=400', notes: 'Stunning coastline and rich heritage.' },
  { id: 'o5', country: 'Chile', city: 'Patagonia', date: 'Future', status: 'bucket-list', category: 'other', image: 'https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?auto=format&fit=crop&q=80&w=400', notes: 'Untamed landscapes and glaciers.' },
  { id: 'o6', country: 'Brazil', city: 'Rio de Janeiro', date: 'Future', status: 'bucket-list', category: 'other', image: 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&q=80&w=400', notes: 'Lively festivals and iconic landmarks.' },
];

import ThailandTrip from './src/blog/honeymoon-thailand.mdx';

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'thailand-trip-2024',
    title: 'An October Escape to Thailand',
    excerpt: 'A personal chronicle of our unforgettable honeymoon journey through Phuket, Krabi, and Bangkok in October 2024.',
    date: 'Feb 10, 2026',
    readTime: '6 min read',
    image: 'https://res.cloudinary.com/dgmnxilzh/image/upload/v1771353084/1._Cover_Photo_ondzkm.jpg',
    category: 'Travel',
    Content: ThailandTrip
  },

];