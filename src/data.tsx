interface NavItem {
  label: string
  href: string
}

const navItems: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

const skills: string[] = [
  'TypeScript',
  'React',
  'Node.js',
  'Design Systems',
  'UX Strategy',
  'API Design',
  'Testing',
  'Performance',
]

const roles: { title: string; company: string; period: string; description: string[] }[] = [
  {
    title: 'Full-Stack Developer',
    company: 'Transact',
    period: '2025 - 2026',
    description: [
      'Served as technical lead with Risk and Governance to meet regulatory compliance.',
      'Engineered resilient full-stack features for enterprise SaaS supporting 500+ internal users using PHP (Yii2), PostgreSQL, JavaScript, and jQuery.',
      'Managed GitLab CI/CD pipelines, led peer code reviews, and refactored legacy modules to reduce technical debt.',
      'Collaborated with cross-functional stakeholders and system administrators to translate operational requirements into scalable tools and provide operational support.',
    ],
  },
  {
    title: 'Developer',
    company: 'Umi Digital',
    period: 'November 2021 – August 2024',
    description: [
      'Designed and built modern single-page web applications and component libraries using React.js, Gatsby.js, JavaScript (ES6+), and CSS3/SASS, working closely with UI/UX designers to translate Figma wireframes into pixel-perfect interfaces.',
      'Architected end-to-end cloud integrations on AWS, connecting React frontends to AWS Lambda, API Gateway, DynamoDB, and S3 to power dynamic serverless features.',
      'Autonomously designed, developed, and deployed an embeddable React.js booking support widget with real-time AWS SNS notifications and a secure IAM-protected admin dashboard for hospitality client staff.',
      'Championed code quality, accessibility standards, and web performance across all client codebases; led regular internal technical mentoring sessions and created developer documentation to standardise engineering practices. '
    ]
  },
  {
    title: 'Junior Developer',
    company: 'Paramount Web Technology',
    period: 'March 2021 – November 2021',
    description: [
      'Built the frontend state architecture for an e-Learning single-page application using React.js and Redux, eliminating complex state-flow bugs and significantly improving overall data integrity.',
      'Authored custom PHP scripts and MySQL database queries to interface cleanly with frontend Axios API requests, establishing reliable client-server communication.',
      'Practised Test-Driven Development (TDD) using Jest, conducting cross-browser testing and performance optimisations across multiple client web products.',
      'Consulted directly with clients in an Agile/Scrum environment using Jira to scope requirements, deliver custom site features, and manage live production deployments.',
    ],
  },
    {
    title: 'Software Developer Trainee',
    company: '_nology',
    period: 'October 2020 – January 2021',
    description: [
      'Completed an intensive, full-time software engineering bootcamp focused on modern full-stack development using JavaScript (ES6+), React.js, HTML5/CSS3, and unit testing with Jest.',
      'Collaborated in an Agile team to design, build, and deploy a commercial mental health web application for a real-world client, utilizing daily standups, weekly sprints, and pair programming.',
    ],
  },
    {
    title: 'Police Constable',
    company: 'The Metropolitan Police',
    period: 'March 2019 – September 2020',
    description: [
      'Developed advanced analytical problem-solving, risk assessment, and conflict management skills within fast-moving, high-pressure environments.',
      'Communicated complex information clearly to diverse stakeholders and worked collaboratively within multidisciplinary teams—skills that directly transfer to agile software engineering teams.',
    ],
  },
]

const projects: { name: string; type: string; summary: string; stack: string[] }[] = [
  {
    name: 'Hospitality Support Widget',
    type: 'Embeddable Script + Serverless Backend',
    summary:
      'An autonomous, lightweight React widget and AWS serverless backend enabling hotel guests to schedule instant callback support, complete with a secure IAM-protected admin dashboard for staff.',
    stack: ['React', 'AWS Amplify', 'AWS Lambda', 'API Gateway', 'DynamoDB', 'S3', 'AWS SNS'],
  },
  // {
  //   name: 'Pulse Board',
  //   type: 'Operations dashboard',
  //   summary:
  //     'A KPI dashboard used by cross-functional teams to align roadmap progress, customer health, and delivery signals.',
  //   stack: ['TypeScript', 'Charting', 'REST APIs'],
  // },
  // {
  //   name: 'Northwind Labs',
  //   type: 'Brand + product experience',
  //   summary:
  //     'A research-driven marketing site that blended editorial storytelling with product storytelling for a new AI platform.',
  //   stack: ['Next.js', 'Motion', 'CMS'],
  // },
]

export { navItems, skills, roles, projects };