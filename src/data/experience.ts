export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  summary: string;
  bullets: string[];
}

export const experience: ExperienceItem[] = [
  {
    role: 'Senior React Native Developer',
    company: 'Eos, Tel Aviv',
    period: 'March 2025 – Present',
    summary:
      'Eos is a Fintech Startup creating a Full-Stack agentic solution for the Banking industry. Stack: React Native, TypeScript, Node, CSS, MySQL, GraphQL.',
    bullets: [
      'Owner of full production grade features in the Loans department, from requirements to architecture to production, including close collaboration with PMs, design, and backend.',
      'Worked closely with the latest AI tools and methodologies like Claude Code and Co-Pilot to maintain an AI-first maintainable development experience.',
      'Developed and maintained reusable components as part of a shared Design System using Atomic Design methodology to improve consistency and accelerate development across the application.',
      'Played a key role in building a new platform using Nx & Monorepo architecture, enhancing maintainability and cross-project code sharing.',
      'Played a key role in building a new AI chat server using WebSockets, MCP server, and AWS Bedrock.',
    ],
  },
  {
    role: 'React Native Developer',
    company: 'MyGenes - LevHai Genetics, Tel Aviv',
    period: 'November 2023 – November 2024',
    summary:
      'MyGenes is a platform that analyzes individual genetics using DNA data to provide health and wellness insights.',
    bullets: [
      "Developed and maintained MyGenes's Android & iOS apps using React Native with Expo in TypeScript and CSS.",
      'Used Redux Toolkit and Redux Saga middleware for state management.',
      'Utilized React Query for managing REST API calls with automatic refetching, caching, and handling network reconnections and errors.',
      'Designed and built core features, including Firebase Chat, Calculator, and infinite subcategories design.',
    ],
  },
  {
    role: 'iOS Developer',
    company: 'Matrix Medika LTD, Tel Aviv',
    period: 'May 2020 – November 2021',
    summary:
      'Matrix Medika develops IoT-based healthcare solutions connecting medical devices with digital platforms for real-time monitoring.',
    bullets: [
      'Built the IoT product Nonagon (nonagon-care.com) from scratch, incorporating Bluetooth pairing and real-time video chat.',
      'Developed using Swift in Xcode, BLE, and Socket.io for 2-way real-time communication.',
    ],
  },
  {
    role: 'Android Developer',
    company: 'Beatman LTD, Tel Aviv',
    period: 'December 2019 – April 2020',
    summary: 'Beatman LTD is a professional software development and technology firm.',
    bullets: [
      'Built and maintained new features across several Android applications including MyOfer, Yapp, 011Global, and Big.',
      'Developed on Android platforms using Java in Android Studio.',
    ],
  },
];
