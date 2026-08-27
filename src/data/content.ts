export const profile = {
  name: 'Darius Korir Pilakan',
  firstName: 'Darius',
  role: 'Data Scientist & Machine Learning Engineer',
  roleTail: 'Full-Stack Developer',
  tagline:
    'I build practical machine learning, NLP, and full-stack applications — with a focus on African language technology and digital equity.',
  location: 'Nairobi, Kenya',
  email: 'pkorirdarius@gmail.com',
  linkedin: 'https://linkedin.com/in/pkorirdarius',
  linkedinLabel: 'linkedin.com/in/pkorirdarius',
  github: 'https://github.com/Pkorirdarius',
  githubLabel: 'github.com/Pkorirdarius',
  graduating: 'December 2026',
}

export interface NavLink {
  label: string
  href: string
}

export const navLinks: NavLink[] = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Research', href: '#research' },
  { label: 'Skills', href: '#skills' },
  { label: 'Certs', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
]

export const aboutBio = [
  'Computer Science and IT undergraduate at Kabarak University with hands-on experience building machine learning, NLP, and full-stack applications. Background spans FinTech automation, mobile health technology, and African language technology / digital equity, with recent certifications in machine learning, cybersecurity, and cloud AI.',
  'I split my time between practical, shippable projects and formal academic/research work — treating every build as a chance to move ideas from notebook to production.',
]

export interface Experience {
  role: string
  organization: string
  period: string
  location?: string
  highlights: string[]
}

export const experience: Experience[] = [
  {
    role: 'IT / Software Development Intern',
    organization: 'County Treasury — West Pokot County Government',
    period: '3-month internship',
    location: 'Kenya',
    highlights: [
      'Built a digital bursary application form to streamline student bursary submissions and processing',
      'Developed an inventory management system to track and manage county treasury office assets',
    ],
  },
]

export interface Project {
  title: string
  tagline: string
  description: string
  stack: string[]
  features?: string[]
  github: string
  screenshot?: string
  stars?: number
  forks?: number
  pinned?: boolean
  status?: 'flagship' | 'other'
}

export const flagshipProjects: Project[] = [
  {
    title: 'MediSauti',
    tagline: 'Medication Adherence Reminder App',
    description:
      'A bilingual (Swahili/English) mobile app that helps patients stay on track with their medication through Swahili voice-note reminders and text-to-speech. Ships adherence analytics with SVG charts and heatmaps, plus PDF report generation.',
    stack: ['React Native / Expo', 'Supabase', 'Tesseract.js', 'OCR'],
    features: [
      'Bilingual (Swahili/English) UI with Swahili voice-note reminders and text-to-speech',
      'OCR-based prescription scanning via Tesseract.js in a WebView',
      'Adherence analytics with SVG charts/heatmaps and PDF report generation',
      'PIN/biometric authentication and local data encryption',
      'Worked through Android build/toolchain issues (NDK, JDK/JAVA_HOME, permissions)',
    ],
    github: 'https://github.com/Pkorirdarius/Medical_reminder_App-Medisauti',
    screenshot: '/images/medisauti.jpg',
    stars: 2,
    pinned: true,
    status: 'flagship',
  },
  {
    title: 'ATS Application',
    tagline: 'LLM-Powered Trading Bot',
    description:
      'A hybrid trading system where MQL5 handles live trade execution via ONNX model inference, while a Django backend serves as the training and monitoring layer, talking to the market through the Deriv WebSocket API.',
    stack: ['Django', 'Deriv WebSocket API', 'MQL5', 'ONNX'],
    features: [
      'Hybrid architecture: MQL5 executes live trades via ONNX model inference; Django serves as training/monitoring backend',
      'Led code reviews that caught and fixed plaintext credential storage and inconsistent broker order routing',
      'Proposed a scoped broker-staff permission model instead of granting broker companies superuser access',
    ],
    github: 'https://github.com/Pkorirdarius',
    screenshot: '/images/ats.jpg',
    status: 'flagship',
  },
]

export const otherProjects: Project[] = [
  {
    title: 'NLP GMO Misinformation Detector',
    tagline: 'Multilingual NLP misinformation detection',
    description:
      'Multilingual NLP app to detect and debunk GMO misinformation (e.g. "GMOs cause cancer").',
    stack: ['Python', 'Jupyter Notebook'],
    github: 'https://github.com/Pkorirdarius/Nlp_model',
    stars: 1,
    forks: 3,
    status: 'other',
  },
  {
    title: 'Spotify Recommendation System',
    tagline: 'Clustering-based music taste profiling',
    description:
      'Analyzed Spotify API data, applied K-Means clustering to group similar songs and surface listener taste profiles.',
    stack: ['Python'],
    github: 'https://github.com/Pkorirdarius/SpotifyRecommendation-system',
    status: 'other',
  },
  {
    title: 'Codecraft Blog Webapp',
    tagline: 'Tech-focused blog platform (group project)',
    description:
      'A tech-focused blog platform built collaboratively as a group project.',
    stack: ['HTML/CSS'],
    github: 'https://github.com/Pkorirdarius/Codecraft-Blog-Webapp',
    stars: 3,
    forks: 1,
    status: 'other',
  },
  {
    title: 'PHP Voting System',
    tagline: 'Full-stack voting application',
    description: 'A full-stack voting system application built in PHP.',
    stack: ['PHP'],
    github: 'https://github.com/Pkorirdarius/php_voting_system',
    stars: 1,
    status: 'other',
  },
]

export interface Research {
  title: string
  publication: string
  summary: string
  topics: string[]
}

export const research: Research = {
  title: 'African Languages in NLP',
  publication: 'Seminar paper',
  summary:
    'Seminar paper on the underrepresentation of African languages in NLP and large language models. Covers data scarcity, tokenization inefficiency, agglutinative morphology, cross-lingual transfer learning, community-led corpus construction, and digital colonialism.',
  topics: [
    'Data scarcity',
    'Tokenization inefficiency',
    'Agglutinative morphology',
    'Cross-lingual transfer',
    'Community-led corpora',
    'Digital colonialism',
  ],
}

export interface SkillGroup {
  category: string
  description?: string
  skills: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    category: 'Languages',
    skills: ['Python', 'JavaScript', 'TypeScript', 'C#', 'PHP'],
  },
  {
    category: 'ML / Data Science',
    skills: [
      'scikit-learn',
      'TensorFlow',
      'Pandas',
      'NumPy',
      'Jupyter',
      'NLP',
      'K-Means clustering',
    ],
  },
  {
    category: 'Web & Mobile',
    skills: ['React', 'React Native / Expo', 'Django', 'HTML5/CSS3', 'REST APIs'],
  },
  {
    category: 'Cloud & Tools',
    skills: [
      'Microsoft Azure (AI Fundamentals)',
      'Supabase',
      'Git/GitHub',
      'Linux',
      'VS Code',
    ],
  },
  {
    category: 'Other',
    description: 'Software estimation & RAD methodology, messaging systems, software quality management',
    skills: ['Software estimation & RAD', 'Messaging systems', 'Software quality management'],
  },
]

export interface Certification {
  issuer: string
  name: string
  date: string
  monogram: string
}

export const certifications: Certification[] = [
  {
    issuer: 'ISC2',
    name: 'Certified in Cybersecurity (CC) — Pre-Assessment',
    date: '2026',
    monogram: 'ISC2',
  },
  {
    issuer: 'GoMyCode',
    name: 'Data Scientist Bootcamp',
    date: 'May 2025',
    monogram: 'GM',
  },
  {
    issuer: 'Kaggle',
    name: 'Intro to Machine Learning',
    date: 'Feb 2025',
    monogram: 'K',
  },
  {
    issuer: 'lablab.ai',
    name: 'Alstronauts: Space Agents on a Mission Hackathon',
    date: 'Feb 2025',
    monogram: 'LL',
  },
  {
    issuer: 'ALX',
    name: 'AI Career Essentials',
    date: 'Apr 2024',
    monogram: 'ALX',
  },
  {
    issuer: 'Microsoft Learn Student Ambassador',
    name: 'Azure AI Fundamentals, Cloud Skills Challenge',
    date: 'Jan 2024',
    monogram: 'MS',
  },
]

export const education = {
  degree: 'Bachelor of Science in Computer Science and Information Technology',
  school: 'Kabarak University, Kenya',
  period: '2022 – Present',
  note: 'Graduating December 2026',
}
