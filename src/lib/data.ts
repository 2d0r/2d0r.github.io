import { ProjectDataType } from './types';

export const projectsData : ProjectDataType[] = [
    {
        id: 'kronos',
        title: 'Kronos',
        description: 'A smart organiser that understands mindsets',
        thumbnail: 'images/kronos-thumb.png',
        sections: [
            {
                title: 'Overview',
                text: `
                    <p>Kronos was born from a creative's need to get organised. 
                    It is a smart organiser that goes one step further from Motion and Reclaim.ai by understanding a user's tasks more deeply and assisting with reaching personal goals.</p>
                    <p>The aim is to integrate scientific findings about personal time management and the psychology of motivation into a bespoke language of rules and patterns which describe the user's use of time and allow AI models to guide and improve it.</p>
                `,
                images: [ 'images/kronos-1.png' ],
            },
            {
                title: 'Features',
                text: `
                    <ul className='list-disc'>
                        <li>Next.js app, using the latest app router</li>
                        <li>Smart timeline showing the task to focus on and every option relevant to that moment</li>
                        <li>Calendar powered by Hexaflexa, to visualise and edit events</li>
                        <li>Task browser, with filters and sorting options</li>
                        <li>Custom checkbox, showing additional task statuses such as 'in progress' and 'repeating'</li>
                        <li>Conditional task input form, to speed up adding the needed nuance to each task</li>
                        <li>Markdown text editor, which allows checklists, links and headings</li>
                    </ul>
                `,
                images: [ 'images/kronos-2.png' ],
            },
            {
                title: 'Next Steps',
                text: `
                    <ol>
                        <li>Implement time monitors to aid task input</li>
                        <li>Implement smart notifications</li>
                        <li>Measure stats: routine streaks, daily completion rate, task distribution</li>
                        <li>SMART AUTOMATION:</li>
                        <li>Implement NLP model to understand and categorise tasks by mindset</li>
                        <li>Train ML model on task mindset distribution, and the user's interaction with it</li>
                    </ol>
                `,
                images: [ 'images/kronos-3.png' ],
            },
        ],
        tools: ['React', 'Next.js', 'Tailwind', 'Typescript', 'Prisma', 'PostgreSQL'],
        link: { name: 'Kronos Git Repo', href: 'https://github.com/2d0r/kronos-web.git' },
    },
    {
        id: 'wejam',
        title: 'WeJam',
        description: 'A music game for immersive band experiences',
        thumbnail: 'images/wejam-thumb.png',
        sections: [
            {
                title: 'Overview',
                text: `
                    <p>WeJam is an immersive band experience for groups of up to 6 people who can play popular songs together in sync.</p>
                    <p>This is made possible by a user interface that simplifies the song score, while still triggering the full track. A bit like Guitar Hero.</p>
                `,
                images: [ 'images/wejam-1.png' ],
            },
            {
                title: 'Features',
                text: `
                    <p>I arrived at the company at a time when the experience was ready for booked sessions, but still bare bones in terms of UI and features.
                    Here are some of the features I developed:</p>
                    <ul>
                        <li>User journeys that separate functionality for facilitators, booking clients, and school sessions</li>
                        <li>Stats screen: players' performance metrics after a song, and overall leaderboard</li>
                        
                        <li>UI Redesign: from a black and white, bare bones UI, to a colourful and dynamic theme, in line with the existing branding.</li>
                        <li>Python script that turns a MuseScore score into the images needed in the game (using Lilypond, a music engraving language)</li>
                        <li>Animated karaoke mode (CSS Animations)</li>
                        <li>Song list for browsing available songs and difficulties</li>
                        <li>Game tutorial: animated demonstrations and UI</li>
                        <li>Minimised random client disconnections</li>
                        <li>Facilitator controls to manage client tablets during a session (in collaboration with the MaxMSP developers)</li>
                    </ul>
                `,
                images: [ 'images/wejam-2.png' ],
            },
            {
                title: 'Next Steps',
                text: `
                    <ol>
                        <li>Automating the score creation process, by testing patterns of note selection based on different levels of difficulty</li>
                        <li>Implementing Redux for better complex state management (than the context providers)</li>
                        <li>Optimising the server for faster loading and better connectivity</li>
                        <li>Adding animations for a more dynamic UI</li>
                        <li>Turning the score images into functional code, for faster loading, faster score creation and a customisable score scroll animation</li>
                    </ol>
                `,
                images: [ 'images/wejam-3.png' ],
            },
        ],
        tools: ['React', 'Node.js', 'Python', 'Socket.io', 'SASS', 'Figma'],
    },
    {
        id: 'wolfpack',
        title: 'Wolfpack',
        description: 'Landing site for an NFT collection',
        thumbnail: 'images/wolfpack-thumb.png',
        sections: [
            { title: '', text: '', images: [] },
            { title: '', text: '', images: [] },
            { title: '', text: '', images: [] },
        ],
        tools: ['HTML', 'CSS', 'JavaScript', 'Figma']
    },
    {
        id: 'bvr',
        title: 'BVR',
        description: 'UX Project for a new beach volley booking app, mobile and web',
        thumbnail: 'images/bvr-thumb.png',
        sections: [
            { title: '', text: '', images: [] },
            { title: '', text: '', images: [] },
            { title: '', text: '', images: [] },
        ],
        tools: ['Figma', 'Pixelmator']
    },
    {
        id: 'wolf-mentorship',
        title: 'Wolf Mentorship',
        description: 'Landing site for a business mentorship programme',
        thumbnail: 'images/wolf-mentorship-thumb.png',
        sections: [
            { title: '', text: '', images: [] },
            { title: '', text: '', images: [] },
            { title: '', text: '', images: [] },
        ],
        tools: ['React', 'Next.js', 'PostgreSQL', 'Tailwind', 'Prisma']
    },
    {
        id: 'soundr-landing',
        title: 'Soundr Landing',
        description: 'Landing site for a metaverse NFT creator',
        thumbnail: 'images/soundr-landing-thumb.png',
        sections: [
            { title: '', text: '', images: [] },
            { title: '', text: '', images: [] },
            { title: '', text: '', images: [] },
        ],
        tools: ['Photoshop', 'Figma']
    },
    {
        id: 'counselling-site',
        title: 'Counselling Site',
        description: '',
        thumbnail: 'images/counselling-site-thumb.png',
        sections: [
            { title: '', text: '', images: [] },
            { title: '', text: '', images: [] },
            { title: '', text: '', images: [] },
        ],
        tools: ['Figma']
    },
    {
        id: 'ftt',
        title: 'Finish That Track',
        description: 'Logo design for a mixing and mastering teacher',
        thumbnail: 'images/ftt-thumb.png',
        sections: [
            { title: '', text: '', images: [] },
            { title: '', text: '', images: [] },
            { title: '', text: '', images: [] },
        ],
        tools: ['Figma']
    },
    {
        id: 'dreams-and-monsters',
        title: 'Dreams & Monsters',
        description: 'Logo design for an alternative music label',
        thumbnail: 'images/dreams-and-monsters-thumb.png',
        sections: [
            { title: '', text: '', images: [] },
            { title: '', text: '', images: [] },
            { title: '', text: '', images: [] },
        ],
        tools: ['Figma', 'Pixelmator']
    },
    {
        id: 'vosports',
        title: 'VoSports',
        description: 'Logo design for a sporting events organiser',
        thumbnail: 'images/vosports-thumb.png',
        sections: [
            { title: '', text: '', images: [] },
            { title: '', text: '', images: [] },
            { title: '', text: '', images: [] },
        ],
        tools: ['Sketch']
    },
    {
        id: 'music-artworks',
        title: 'Music Artworks',
        description: 'Artworks for my music creations',
        thumbnail: 'images/music-artworks-thumb.png',
        sections: [
            { title: '', text: '', images: [] },
            { title: '', text: '', images: [] },
            { title: '', text: '', images: [] },
        ],
        tools: ['Photoshop', 'Pixelmator']
    },
    {
        id: 'soundr-rebrand',
        title: 'Soundr Rebrand',
        description: 'Design assets for a rebranded metaverse NFT creator',
        thumbnail: 'images/soundr-rebrand-thumb.png',
        sections: [
            { title: '', text: '', images: [] },
            { title: '', text: '', images: [] },
            { title: '', text: '', images: [] },
        ],
        tools: ['Pixelmator']
    },
    {
        id: 'wolfys-posters',
        title: "Wolfy's Posters",
        description: 'Poster designs for a cosy café bar in south-east London',
        thumbnail: 'images/wolfys-posters-thumb.png',
        sections: [
            { title: '', text: '', images: [] },
            { title: '', text: '', images: [] },
            { title: '', text: '', images: [] },
        ],
        tools: ['Figma', 'Pixelmator']
    },
] as const;

export const aboutData = {
    text: `
        <p>After graduating music, the affected music industry during the pandemic turned me to my other passion from college, programming.</p><br/>
        <p>I started in a sound production role at WeJam, then received training as a front-end programmer. I finished a UX course at Love Circular and completed several programming certifications to fill in the gaps.</p><br/>
        <p>On the side, I started working as a freelancer, designing and building sites and assets.</p>
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
        text: 'Learnt React and worked as a front-end developer at WeJam for 2 years. I then moved into node.js and back-end.',
        years: '2022 - 2024',
        type: 'work',
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
        name: 'Tailwind',
        icon: './icons/tailwind-w.png',
    },
    {
        name: 'Typescript',
        icon: './icons/typescript-w.png'
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