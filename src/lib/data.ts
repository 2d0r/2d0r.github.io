import { ProjectDataType } from './types';

export const projectsData : ProjectDataType[] = [
    {
        id: 'wejam',
        title: 'WeJam',
        description: 'A music game for immersive band experiences',
        thumbnail: 'images/wejam-thumb.png',
        links: [],
        tools: ['React', 'Node.js', 'Python', 'Socket.io', 'SASS', 'Figma'],
        sections: [
            {
                title: 'Overview',
                text: `
                    <p>WeJam is an immersive band experience for groups of up to 6 people who can play popular songs together in sync.</p>
                    <p>This is made possible by a user interface that simplifies the song score, while still triggering the full track. A bit like Guitar Hero.</p>
                `,
                images: [ 'gifs/wejam-studio-1.1.gif' ],
                layout: 'wide',
            },
            {
                title: 'My Contribution',
                layout: 'wide',
                text: `
                    <p style='text-align:left'>I arrived at the company at a time when the experience was ready for booked sessions, but still bare bones in terms of UI and features.
                    Here are some of the features I developed:</p>
                    <ul style='text-align:left'>
                        <li>Game modes: studio, quick, school sessions, accessible for special needs, accessible for visually impaired</li>
                        <li>Stats Screen, with players' scores and metrics</li>
                        <li>UI Redesign: from a black and white, bare bones UI, to a colourful and dynamic theme, in line with the existing branding.</li>
                        <li>Python script that turns a MuseScore score into the images needed in the game (using Lilypond, a music engraving language)</li>
                        <li>Animated karaoke mode (CSS Animations)</li>
                        <li>Song list for browsing available songs and difficulties</li>
                        <li>Video tutorials and UI</li>
                        <li>Minimised random client disconnections</li>
                        <li>Facilitator controls to manage client tablets remotely</li>
                        <li>Migrated to Redux for more efficient state management (than the context providers)</li>
                        <li class='soon'>Automating the score creation process in Python, by testing different note patterns for each difficulty</li>
                        <li class='soon'>Optimising the server for faster loading and better connectivity</li>
                        <li class='soon'>Adding animations for a more dynamic UI</li>
                        <li class='soon'>Generating scores directly from code, for faster loading and real-time feedback</li>
                        <li class='soon'>Side-scroll animation</li>
                    </ul>
                `,
                images: [ 'gifs/wejam-play.gif' ],
            },
            {
                title: 'What I Learned',
                text: `
                    <ul style='text-align:left'>
                        <li>Becoming familiar with an existing codebase</li>
                        <li>Coding with consideration for other developers</li>
                        <li>Reusing code and components</li>
                        <li>Complex CSS animations managed by custom classes</li>
                        <li>Git versioning and GitLab</li>
                        <li>Pair programming and pair debugging</li>
                        <li>Workflow automation with Python</li>
                        <li>Improving server logs</li>
                        <li>Using a project management tool</li>
                        <li>Refactoring, evergreening, migrating to better technologies</li>
                        <li>Designing UI in line with a brand</li>
                    </ul>
                `,
                images: [ 'gifs/wejam-setUpPlayer-1.1.gif' ],
                layout: 'wide',
            },
        ],
    },
    {
        id: 'dnm-academy',
        title: 'D&M Academy',
        description: 'Learning management system with user roles and permissions',
        thumbnail: 'images/dnm-academy-thumb.png',
        tools: ['React', 'CSS', 'Python', 'Django', 'PostgreSQL'],
        sections: [
            {
                title: 'Overview',
                text: `
                    <p style='padding-bottom:12px'>Learning management system built in React and Django (Python). This was the final project for the Learning People Full-Stack Certification.</p>
                    <ul style='text-align:left'>
                        <li>Built a React frontend connected to a Django REST API backend.</li>
                        <li>Implemented JWT-based user authentication and protected routes.</li>
                        <li>Used PostgreSQL for data modeling and storage; deployed via Render.com</li>
                        <li>Wrote unit tests using React Testing Library and Jest to validate core components.</li>
                        <li>Deployed frontend to Netlify with environment-based API integration.</li>
                    </ul>
                `,
                images: [ 'images/dnm-academy-thumb.png' ],
                layout: 'wide',
            },
        ],
        links: [
            { name: 'GitHub Repo', href: 'https://github.com/2d0r/dm-lms' },
            { name: 'Live App', href: 'https://dnmacademy.netlify.app/' },
        ]
    },
    {
        id: 'a-music-quiz',
        title: 'a music quiz',
        description: 'A straight forward music quiz that uses TriviaAPI',
        thumbnail: 'images/a-music-quiz.png',
        tools: ['HTML', 'CSS', 'JavaScript'],
        sections: [
            {
                title: 'Overview',
                text: `
                    <p style='padding-bottom:12px'>A simple, mobile-responsive music trivia app that fetches random quiz data using external APIs.</p>
                    <ul style='text-align:left'>
                        <li>Fetches data dynamically using the Open Trivia API.</li>
                        <li>Developed interactive UI components with vanilla JavaScript (no frameworks).</li>
                        <li>Styled with custom CSS3, including transitions and responsive layout.</li>
                        <li>Focused on logic-driven quiz flows with clean separation of concerns.</li>
                    </ul>
                `,
                layout: 'wide',
                images: [ 'images/a-music-quiz.png' ],
            }
        ],
        links: [
            { name: 'Live App', href: 'https://2d0r.github.io/music-quiz' },
            { name: 'GitHub Repo', href: 'https://github.com/2d0r/music-quiz' },
        ],
    },
    {
        id: '2d0r-portfolio',
        title: 'This portfolio',
        description: 'This very online portfolio',
        thumbnail: 'images/2d0r-portfolio-1.png',
        tools: ['Next.js', 'Tailwind', 'Framer Motion'],
        sections: [
            {
                title: 'Overview',
                text: `
                    <p style='padding-bottom:12px'>My interactive personal website, showcasing my journey, technical projects, and creative work.</p>
                    <ul style='text-align:left'>
                        <li>Built with Next.js and optimized for performance and SEO.</li>
                        <li>Used Framer Motion to create smooth animations and transitions.</li>
                        <li>Fully responsive and mobile-first, tested across breakpoints.</li>
                        <li>Custom-designed UI system using Tailwind CSS for rapid prototyping.</li>
                        <li>Deployed on GitHub Pages.</li>
                    </ul>
                `,
                layout: 'wide',
            }
        ],
        links: [
            { name: 'Deployed Site', href: 'https://2d0r.github.io/' },
            { name: 'Repo', href: 'https://github.com/2d0r/2d0r.github.io' },
        ]
    },
    {
        id: 'kronos',
        title: 'Kronos',
        description: 'A smart organiser that understands mindsets',
        thumbnail: 'images/kronos-playTask-1.png',
        tools: ['React', 'Next.js', 'Tailwind', 'Typescript', 'Prisma', 'PostgreSQL'],
        sections: [
            {
                title: 'Overview',
                text: `
                    <p>Kronos is a productivity tool designed to help users reach flow state, by aligning tasks with organically evolving mindsets and with layered personal goals.</p>
                    <p>It is a long-lived passion of mine, to make a computer understand human time and goals, in order to be a companion who is aware of our most valuable asset: time.</p>
                    <p>Aside from my research in turning flow-state and well-known time management paradigms into an algorithm, Kronos draws from my personal life as I learn how to juggle my goals, everyday life, and my obstacles, and observe useful or bad patterns.</p>
                `,
                layout: 'wide',
                images: [ 'gifs/kronos-timeline-1.gif' ],
            },
            {
                title: 'Key Features',
                text: `
                    <ul style='text-align:left'>
                        <li>
                            <h3 style='text-align: left; font-weight: 600; font-size: 1.1em'>Task Scheduler Algorithm</h3>
                            <p>Automatically schedules tasks into ideal calendar gaps using constraints like:<br>
                                - Preferred time of day (morning, afternoon, evening)<br>
                                - Ideal days of week<br>
                                - Repetition rules (daily, weekly, hourly)<br>
                                - Time durations
                            </p>
                            <p>Avoids overlaps with existing events using a gap-finding and conflict resolution strategy.</p>
                        </li>
                        <li>
                            <h3 style='text-align: left; font-weight: 600; font-size: 1.1em; margin-top: 24px;'>Dynamic Modal Routing</h3>
                            <p>Uses Next.js searchParams to open modals for editing tasks/events while preserving the current route.</p>
                            <p>Modals behave like overlays but retain full routing capabilities.</p>
                        </li>
                        <li>
                            <h3 style='text-align: left; font-weight: 600; font-size: 1.1em; margin-top: 24px;'>Animated, color-coded UI</h3>
                            <p>The UI si designed with a dynamic accent colour, reflective of the ongoing task.</p>
                            <p>Transitions and animations are created with Framer Motion</p>
                        </li>
                        <li>
                            <h3 style='text-align: left; font-weight: 600; font-size: 1.1em; margin-top: 24px;'>Reusable Input System</h3>
                            <p>MultiSelect, DateTime, and Mindset selectors are modular React components, fully controlled via props and Redux state sync.</p>
                        </li>
                        <li>Calendar component built with Hexaflexa library</li>
                        <li>Markdown editor built with TipTap</li>
                    </ul>
                `,
                images: [ 'gifs/kronos-addTask-1.gif' ],
                layout: 'wide',
            },
            {
                title: 'Architecture and Engineering Highlights',
                text: `
                    <ul style='text-align:left'>
                        <li>
                            <h3 style='text-align: left; font-weight: 600; font-size: 1.1em'>Monolithic App with Modular Domain Separation</h3>
                            <p>
                                - /app - routing and pages<br>
                                - /components - client-side UI and forms<br>
                                - /lib - database interface, shared types, utilities
                            </p>
                        </li>
                        <li>
                            <h3 style='text-align: left; font-weight: 600; font-size: 1.1em; margin-top: 24px;'>Database (PostgreSQL + Prisma)</h3>
                            <p>Uses Next.js searchParams to open modals for editing tasks/events while preserving the current route.</p>
                            <p>Modals behave like overlays but retain full routing capabilities.</p>
                        </li>
                        <li>
                            <h3 style='text-align: left; font-weight: 600; font-size: 1.1em; margin-top: 24px;'>Testing and Local Dev Strategy</h3>
                            <p>Mock database layer using pg-mem and Jest for unit testing the organiser algorithm</p>
                            <p>Development and preview databases separated via .env, .env.development.local, .env.test</p>
                        </li>
                        <li>
                            <h3 style='text-align: left; font-weight: 600; font-size: 1.1em; margin-top: 24px;'>Deployment</h3>
                            <p>Hosted on Vercel with Postgres.</p>
                            <p>Preview deployments use a separate database to avoid schema drift.</p>
                        </li>
                    </ul>
                `,
                images: [ 'gifs/kronos-organiser-2.3.gif' ],
                layout: 'wide',
            },
            {
                title: 'Next Steps',
                text: `
                    <ul style='text-align:left'>
                        <li>Implement an 7-layer system of tracking goals and determining emerging priority, tied to humans' perception of time: from life goals down to work sessions.</li>
                        <li>Connect to Notion API, to make use of the world's most versatile personal data organisation tool.</li>
                        <li>Train a custom ML model that learns from weekly patterns and offers suggestions accordingly.</li>
                        <li>Build a React Native version, to be used and tested as a mobile app.</li>
                        <li>Come up with ways to gather data about the user's time, without needing direct input. The need for abundant and constant input is of the biggest hurdles for such a tool.</li>
                    </ul>
                `,
                layout: 'wide',
            },
        ],
        links: [
            // { name: 'Deployed App', href: 'https://kronos-web-umber.vercel.app/' },
            { name: 'GitHub Repo', href: 'https://github.com/2d0r/kronos-web.git' },
        ],
    },
    {
        id: 'wolfpack',
        title: 'WolfpackNFT',
        description: 'Landing site for an NFT collection',
        thumbnail: 'images/wolfpack-thumb.png',
        tools: ['HTML', 'CSS', 'JavaScript', 'Figma'],
        sections: [
            { 
                title: 'Overview', 
                text: `
                    <p>Landing page for the brand new NFT collection launched by Wolfy’s Bar. Coded from scratch using HTML, CSS and JavaScript, inside a Popmenu HTML block.</p>
                    <p>This is because some of the requirements weren’t possible with the Popmenu web builder. It also helped give a custom look, the feels more special than the rest of the site.
                `, 
                images: [ 'gifs/wolfpack-demo-2.gif' ],
                layout: 'wide',
            },
            { 
                title: 'Features', 
                text: `
                    <ul>
                        <li>Responsive webpage created with HTML, CSS and JavaScript.</li>
                        <li>Scrollable galleries for mobile</li>
                        <li>Collapsible box with JS</li>
                        <li>UI elements and illustrations in line with Wolfy’s existing brand, but with a premium finish.</li>
                        <li>UX project in Figma.</li>
                    </ul>
                `, 
                images: [ 'gifs/wolfpack-demo-mobile.gif' ],
            },
            { title: '', text: '', images: [] },
        ],
        links: [
            { name: 'Live Page', href: 'https://www.wolfysbar.com/nft-wolfys-bar' },
        ]
    },
    {
        id: 'bvr',
        title: 'BVR',
        description: 'UX Project for a new sports booking app, for mobile and web',
        thumbnail: 'images/bvr-thumb.png',
        tools: ['Figma', 'Pixelmator'],
        sections: [
            { 
                title: 'Overview', 
                text: `
                    <p>Beach Volley Romania is a volleyball player's passion project to bring all the amateur beach volley events in Romania in one place.</p>
                    <p>I executed the mobile UX project from the existing, bare-bones look, and later extended the mobile look for web.</p>
                `, 
                images: [ 'gifs/bvr-demo-mobile.gif' ] 
            },
            {
                title: 'Design Notes', 
                text: `
                    <ul>
                        <li>Colour palette inspired by sand and clear skies</li>
                        <li>Versatile design system with responsiveness in mind</li>
                        <li>High fidelity visual prototypes for more specific transitions</li>
                        <li>Mostly Dark UI, as per requirement</li>
                    </ul>
                `, 
                images: [ 'gifs/bvr-demo-drawer.gif' ] 
            },
        ],
    },
    {
        id: 'ccc',
        title: 'Collab Centre',
        description: 'Website redesign for NFT projects community',
        thumbnail: 'images/ccc-thumb.png',
        tools: ['Wix', 'JavaScript'],
        sections: [
            { 
                title: 'Overview', 
                text: 'Redesigned the website for a community that tracks, vets and collaborates on NFT projects. Featuring a dynamically updated projects directory built using JavaScript, which can be updated via the Wix CMS tool.', 
                images: [ 'gifs/ccc-site.gif' ],
                layout: 'wide',
            },
        ],
        links: [
            { href: 'https://www.thecollabcentre.co.uk/', name: 'Live Site' },
        ],
    }, 
    {
        id: 'soundr-landing',
        title: 'Soundr Landing',
        description: 'Landing site for a metaverse NFT creator',
        thumbnail: 'images/soundr-landing-thumb.png',
        tools: ['Wix', 'Pixelmator', 'Figma'],
        sections: [
            { title: 'Demo', text: 'Designed in Figma. Assets edited in Pixelmator. Built using Wix.', images: ['gifs/soundr-landing-demo-1.gif'], layout: 'wide' },
        ],
    },
    {
        id: 'counselling-site',
        title: 'Counselling Site',
        description: 'Landing page for an independend counsellor',
        thumbnail: 'images/counselling-site-thumb.png',
        tools: ['Wix', 'Figma'],
        sections: [
            { title: 'Demo', text: 'Landing page for an independent wellbeing counsellor looking to improve his online presence. Built with Wix.', images: [ 'gifs/counselling-site-demo.gif' ], layout: 'wide', },
        ],
        links: [
            { name: 'Live Site', href: 'https://www.wellbeingcounselingoregon.com/' }
        ],
    },
    {
        id: 'ftt',
        title: 'Finish That Track',
        description: 'Logo design for a mixing and mastering teacher',
        thumbnail: 'images/ftt-thumb.png',
        tools: ['Figma'],
        sections: [
            { 
                title: 'Overview', 
                text: 'Logo design for a mixing and mastering mentorship package that promises to teach how to get your song ready for release. Created in Figma.', 
                images: [ 'images/ftt-blackBg-1.png' ],
                layout: 'sides',
            }
        ],
        links: [
            { href: 'https://finishthattrack.com/', name: 'Live Site' }
        ],
    },
    {
        id: 'dreams-and-monsters',
        title: 'Dreams & Monsters',
        description: 'Logo design for an alternative music label',
        thumbnail: 'images/dreams-and-monsters-thumb.png',
        tools: ['Figma', 'Pixelmator'],
        sections: [
            { 
                title: 'Overview', 
                text: 'Logo design for a music studio who define their sound as half dreamy, half dark and gritty.', 
                images: [
                    'images/d&m-logo-wide.png'
                ],
                layout: 'wide',
            },
            {
                title: 'Poster header',
                text: '',
                images: [ 'images/d&m-poster-1.png' ],
                layout: 'wide',
            },
        ],
    },
    {
        id: 'vosports',
        title: 'VoSports',
        description: 'Logo design for a sporting events organiser',
        thumbnail: 'images/vosports-thumb.png',
        tools: ['Sketch'],
        sections: [
            { 
                title: 'Overview', 
                text: 'Logo design for a sporting events organiser specialising in net sports: volleyball, badminton, foot volleyball, tennis. Hence the net and ball.', 
                images: [ 'images/vosports-colour-2-sq.png' ] 
            },
        ],
    },
    {
        id: 'f1-showcase',
        title: 'F1 Showcase',
        description: 'Design for an event that promoted will.i.am\'s collaboration with F1',
        thumbnail: 'images/f1-thumb-1.png',
        tools: ['Figma', 'Pixelmator', 'Photoshop'],
        sections: [
            { 
                title: 'Overview', 
                text: 'I created a showcase project of F1 Silverstone to promote their collaboration with will.i.am. This project would be shared on FYI, will.i.am\'s freshly launched app for creative collaboration.', 
                images: [ 'gifs/f1-demo.gif' ],
                layout: 'gallery',
            },
            {
                title: 'Assets',
                text: '',
                images: [ 'images/f1-1.png', 'images/f1-2.png' ],
                layout: 'wide',
            },
        ],
    },
    {
        id: 'wolfys-posters',
        title: 'Wolfy\'s Posters',
        description: 'Poster designs for a cosy café bar in south-east London',
        thumbnail: 'images/wolfys-posters-thumb.png',
        tools: ['Figma', 'Pixelmator', 'Photoshop'],
        sections: [
            { 
                title: 'Overview', 
                text: 'Wolfy’s Bar started hosting events to engage their community and create a sense of excitement around the brand. The posters sprinkle that excitement over their cosy, hearth-of-the-neighbourhood aesthetic and spirit.', 
                images: [ 'images/wolfys-posters-qr.jpg', 'images/wolfys-posters-halloween.jpg', 'images/wolfys-posters-dragshow.jpg', 'images/wolfys-posters-rugby.jpg', 'images/wolfys-posters-nft.png' ],
                layout: 'gallery',
            },
        ],
    },
    {
        id: 'soundr-rebrand',
        title: 'Soundr Rebrand',
        description: 'Design assets for a rebranded metaverse NFT creator',
        thumbnail: 'images/soundr-rebrand-thumb.png',
        tools: ['Pixelmator', 'Photoshop'],
        sections: [
            { 
                title: 'Overview', 
                text: 'Soundr were shifting their focus to metaverse NFTs, which required rethinking their visual identity to express the futuristic and natively digital nature of their new product.', 
                images: ['images/soundr-rebrand-posters-sq.png', 'images/soundr-rebrand-banner.png'], layout: 'gallery' },
            { title: '', text: '', images: [] },
        ],
    },
    {
        id: 'music-artworks',
        title: 'Music Artworks',
        description: 'Artworks for my music creations',
        thumbnail: 'images/music-artworks-thumb.png',
        tools: ['Photoshop', 'Pixelmator'],
        sections: [
            { 
                title: 'Gallery', 
                text: 'I use Photoshop, Pixelmator and Rhino 3D to create artworks for music releases.', 
                images: [
                    'images/musicArt-autopilot-1.png',
                    'images/musicArt-collection-silver.png',
                    'images/musicArt-trust-2.png',
                ],
                layout: 'gallery',
            },
        ],
    }
] as const;

export const aboutData = {
    text: `
        <p>I am Tudor, a Front-End Developer with a product mindset, 3 years of hands-on experience, and a focus on crafting clean, accessible, and intuitive interfaces using React, Next.js, and TypeScript. Currently transitioning into full-stack roles with growing backend experience and an AI certification in progress.</p>
        <p>I bridge the gap between design and engineering. With a foundation in UX and freelance design, I build digital experiences that aren’t just functional—but visually engaging and inclusive.</p>
        <p>I'm drawn to meaningful problems and I strive to combine performance, creativity, and empathy in the software I build.</p>
        <p>Let's build something that works and feels right.</p>
    `,
}

export const timelineData = [
    {
        index: 1,
        title: 'Computer Science College (Andrei Saguna)',
        location: 'Brasov, Romania',
        text: 'Graduated Maths and Computer Science profile at top-tier college in Romania. I passed the Baccalaureate with 9.80 in Maths, 9.30 in Physics, and 10 in Digital Competencies.',
        years: '',
        type: 'education',
    },
    {
        index: 2,
        title: 'Trainee Programmer',
        location: 'WeJam, London, UK',
        text: 'Learnt Python while working as a Music Data Assistant at WeJam. I automated parts of the song production workflow.',
        years: '2021 - 2022',
        type: 'work',
    },
    {
        index: 3,
        title: 'Product Design Course',
        location: 'Love Circular, London, UK',
        text: 'Completed a Product Design course at Love Circular, London. I overhauled the WeJam app UI. Pursued freelance design work on the side.',
        years: '2022',
        type: 'education',
    },
    {
        index: 4,
        title: 'Front-End Developer',
        location: 'Wejam, London, UK',
        text: 'Learnt React and worked as a front-end developer at WeJam for 2 years. Gradually started taking on back-end tasks in Express.js.',
        years: '2022 - 2024',
        type: 'work',
    },
    {
        index: 5,
        title: 'BCS Tech10 Full-Stack Developer Certification',
        location: 'The Learning People',
        text: 'After completing Codecademy\'s Front-End Engineer Professional Certification, I enrolled in The Learning People\'s accredited full-stack certification, which I completed in May 2025 with top grades.',
        years: '2024 - 2025',
        type: 'education',
    },
]

export const skillsData = [
    {
        name: 'React',
        icon: './icons/react-w.png',
    },
    {
        name: 'Next.js',
        icon: './icons/next-w.png',
    },
    {
        name: 'CSS',
        icon: './icons/css-w.png',
    },
    {
        name: 'Django',
        icon: './icons/django-w.png',
    },
    {
        name: 'Figma',
        icon: './icons/figma-w.png',
    },
    {
        name: 'Framer Motion',
        icon: './icons/framer-motion-w.png',
    },
    {
        name: 'GitHub',
        icon: './icons/github-w.png',
    },
    {
        name: 'GitLab',
        icon: './icons/gitlab-w.png',
    },
    {
        name: 'HTML',
        icon: './icons/html-w.png',
    },
    {
        name: 'JavaScript',
        icon: './icons/javascript-w.png',
    },
    {
        name: 'Notion',
        icon: './icons/notion-w.png',
    },
    {
        name: 'Node.js',
        icon: './icons/nodejs-w.png',
    },
    {
        name: 'Photoshop',
        icon: './icons/photoshop-w.png',
    },
    {
        name: 'Pixelmator',
        icon: './icons/pixelmator-w.png',
    },
    {
        name: 'PostgreSQL',
        icon: './icons/postgresql-w.png',
    },
    {
        name: 'Prisma',
        icon: './icons/prisma-w.png',
    },
    {
        name: 'Python',
        icon: './icons/python-w.png',
    },
    {
        name: 'Redux',
        icon: './icons/redux-w.png',
    },
    {
        name: 'Socket.io',
        icon: './icons/socketio-w.png',
    },
    {
        name: 'SASS',
        icon: './icons/sass-w.png',
    },
    {
        name: 'Sketch',
        icon: './icons/sketch-w.png',
    },
    {
        name: 'Squarespace',
        icon: './icons/squarespace-w.png',
    },
    {
        name: 'Tailwind',
        icon: './icons/tailwind-w.png',
    },
    {
        name: 'Typescript',
        icon: './icons/typescript-w.png',
    },
    {
        name: 'Wix',
        icon: './icons/wix-w.png',
    }
] as const;

export const links = [
    {
        name: 'Projects',
        hash: '/#projects',
    },
    {
        name: 'Skills',
        hash: '/#skills',
    },
    {
        name: 'About Me',
        hash: '/#about',
    },
    {
        name: 'Contact',
        hash: '/#contact',
    },
] as const;

export const personalLinks = {
    cv: 'files/CV_Tudor_Popescu_Frontend.pdf',
    linkedin: 'https://www.linkedin.com/in/tudor-m-p/',
}