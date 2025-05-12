import { ProjectDataType } from './types';

export const projectsData : ProjectDataType[] = [
    {
        id: 'wejam',
        title: 'WeJam',
        description: 'A music game for immersive band experiences',
        thumbnail: 'images/wejam-thumb.png',
        links: [
            { href: 'https://wejam.studio/', name: 'WeJam Website' },
        ],
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
                layout: 'wide',
                text: 'Learning management system built in React and Django (Python). This was the final project for the Learning People Full-Stack Certification.',
            }
        ],
        links: [
            { name: 'Deployed Site', href: 'https://dnmacademy.netlify.app/' }
        ]
    },
    {
        id: 'a-music-quiz',
        title: 'a music quiz',
        description: 'A straight forward music quiz that uses TriviaAPI',
        thumbnail: 'images/a-music-quiz.png',
        tools: ['HTML', 'CSS', 'JavaScript'],
        sections: [],
        redirect: 'https://2d0r.github.io/music-quiz',
        links: [
            { href: 'https://2d0r.github.io/music-quiz', name: 'Deployed site' }
        ],
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
                    <p>Kronos was born from a creative's need to get organised. 
                    It is a smart organiser that goes one step further by understanding a user's tasks more deeply and assisting with reaching personal goals.</p>
                    <p>The final aim is to integrate research findings about personal time management and the psychology of motivation into an AI model that can offer a personalised and interactive guide towards one's goals.</p>
                `,
                images: [ 'gifs/kronos-timeline-1.gif' ],
                layout: 'wide',
            },
            {
                title: 'Features',
                text: `
                    <ul style='text-align:left'>
                        <li>Next.js app with app router</li>
                        <li>Smart timeline showing the next organised task in real time</li>
                        <li>Calendar component to visualise and edit events</li>
                        <li>Task browser, with filter and sort</li>
                        <li>Deeply conditional task input form, to speed up adding nuanced tasks</li>
                        <li>A dyanmic UI colour palette, updating in real time based on the nearest event's mindset</li>
                        <li>A next-level checkbox, for displaying 'in progress' and 'repeating' status</li>
                        <li>Markdown text editor, with checklists, headings and bullet lists</li>
                        <li>Framer Motion animations</li>
                        <li>Redux store which communicates with database to update the app's states</li>
                        <li class='soon'>User profile</li>
                        <li class='soon'>Smart notifications</li>
                        <li class='soon'>Drag & drop tasks into the calendar</li>
                        <li class='soon'>Search for dates and inside task notes</li>
                        <li class='soon'>Settings for a personalised experience</li>
                        <li class='soon'>User stats and scoring system</li>
                        <li class='soon'>Integration with Notion, to sync tasks with personal Notion database</li>
                        <li class='soon'>Interactive set up</li>
                        <li class='soon'>Smart prompts and dynamic guides</li>
                        <li class='soon'>NLP model to categorise tasks by mindset</li>
                        <li class='soon'>ML model to learn user's mindset patterns, and organise tasks in accordance</li>
                    </ul>
                `,
                images: [ 'gifs/kronos-addTask-1.gif' ],
                layout: 'wide',
            },
            {
                title: 'What I Learned',
                layout: 'wide',
                text: `
                    <ul style='text-align:left'>
                        <li>How to set up a Next.js web app with its own database from scratch</li>
                        <li>The life-saving preventive measures of Typescript</li>
                        <li>Styling like the wind with Tailwind CSS</li>
                        <li>When to use client components or server components</li>
                        <li>Using route handlers to fetch data from within client components</li>
                        <li>Self-hosting a database using Docker</li>
                        <li>The wonders of Redux: avoiding prop drilling and cascading hooks</li>
                        <li>Creating animations for transitions and gestures using Framer Motion</li>
                        <li>How search parameters can be used to centralise often-present components</li>
                        <li>Organising a web project and planning a complex algorithm</li>
                        <li>Deploying to Vercel</li>
                        <li>Iteratively developing a piece of software</li>
                    </ul>
                `,
                images: [ 'gifs/kronos-organiser-2.3.gif' ],
            },
        ],
        links: [
            { name: 'Deployed Site', href: 'https://kronos-web-umber.vercel.app/' },
            { name: 'Git Repo', href: 'https://github.com/2d0r/kronos-web.git' },
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
            { href: 'https://www.wolfysbar.com/nft-wolfys-bar', name: 'Link to live page'},
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
                        <li>
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
            { href: 'https://www.thecollabcentre.co.uk/', name: 'Live site' },
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
            { name: 'Go to site', href: 'https://www.wellbeingcounselingoregon.com/' }
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
            { href: 'https://finishthattrack.com/', name: 'Mentorship site' }
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
        tools: ['Pixelmator'],
        sections: [
            { 
                title: 'Overview', 
                text: 'Soundr were shifting their focus to metaverse NFTs, which required rethinking their visual identity to express the futuristic and natively digital nature of their new product.', 
                images: ['images/soundr-rebrand-posters-sq.png'], layout: 'sides' },
            { title: 'Banner', text: '', images: ['images/soundr-rebrand-banner.png'], layout: 'wide' },
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
        <p>After graduating music, a slowed-down music industry caused by the Covid pandemic turned me to my other passion: coding.<br/></p>
        <p>After a few months in a sound production role at WeJam, I did training as a front-end developer. I completed several coding courses in Python, React and Node to fill in the gaps, and finished a Product Design course at Love Circular, London.<br/></p>
        <p>On the side, I started working as a freelancer, designing and building sites and assets for various clients.<br/></p>
        <p>I like to understand every bit of code I work with, I refuse to separate great code from a great user experience and I am endlessly hungry to learn more and build better.</p>
    `,
}

export const timelineData = [
    {
        index: 1,
        title: 'Computer Science College',
        location: 'Brasov, Romania',
        text: 'Graduated Maths and Computer Science profile at top-tier college in Romania. I passed the Baccalaureate with 9.80 in Maths, 9.30 in Physics, and 10 in Digital Competencies.',
        years: '',
        type: 'education',
    },
    {
        index: 2,
        title: 'Trainee Programmer',
        location: 'WeJam, London, UK',
        text: 'Learnt Python while working at WeJam. For half a year I auomated parts of the song production workflow.',
        years: '2021 - 2022',
        type: 'work',
    },
    {
        index: 3,
        title: 'Product Design Course',
        location: 'Love Circular, London, UK',
        text: 'Completed a Product Design course at Love Circular, London. I saw through a design overhaul of the WeJam app UI. Pursued freelance design work on the side.',
        years: '2022',
        type: 'education',
    },
    {
        index: 4,
        title: 'Front-End Developer',
        location: 'Wejam, London, UK',
        text: 'Learnt React and worked as a front-end developer at WeJam for 2 years. Tasks started involving Node.js and back-end.',
        years: '2022 - 2024',
        type: 'work',
    },
    {
        index: 5,
        title: 'Filling in the gaps',
        location: null,
        text: 'Pursuing The Learning People\'s Full-Stack Certification. Completed Codecademy\'s Front-End Engineer Professional Certification. Built several projects from scratch, to solidify and connect my full stack skills.',
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
    cv: 'files/tudor-popescu-cv.pdf',
    linkedin: 'https://www.linkedin.com/in/tudor-m-p/',
}