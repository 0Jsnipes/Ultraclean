export const businessInfo = {
  name: 'MB Ultra Clean',
  tagline: 'Thoughtful cleaning for homes, rentals, and workplaces.',
  phone: '(336) 675-3700',
  phoneHref: 'tel:3366753700',
  email: 'mbultraclean@gmail.com',
  emailHref: 'mailto:mbultraclean@gmail.com',
};

export const primaryServices = [
  {
    key: 'deep-cleaning',
    title: 'Deep Cleaning',
    to: '/deep-cleaning',
    shortDescription:
      'A detail-heavy reset for buildup, overlooked surfaces, and first-time visits.',
  },
  {
    key: 'routine-cleaning',
    title: 'Routine Cleaning',
    to: '/routine-cleaning',
    shortDescription:
      'Recurring cleaning that keeps the essentials in shape without the weekly scramble.',
  },
  {
    key: 'move-in-out-cleaning',
    title: 'Move-In / Move-Out',
    to: '/move-in-out-cleaning',
    shortDescription:
      'Transition cleaning for empty or nearly empty homes, apartments, and rentals.',
  },
  {
    key: 'commercial-cleaning',
    title: 'Commercial Cleaning',
    to: '/commercial-cleaning',
    shortDescription:
      'Practical cleaning for offices and customer-facing spaces that need a polished finish.',
  },
  {
    key: 'residential-cleaning',
    title: 'Residential Cleaning',
    to: '/residential-cleaning',
    shortDescription:
      'Whole-home cleaning tailored to how your household uses the space every day.',
  },
];

export const roomFocusPages = [
  {
    key: 'bathroom-cleaning',
    title: 'Bathroom Cleaning',
    to: '/bathroom-cleaning',
    shortDescription:
      'Focused attention on residue, fixtures, mirrors, floors, and high-touch areas.',
  },
  {
    key: 'bedroom-cleaning',
    title: 'Bedroom Cleaning',
    to: '/bedroom-cleaning',
    shortDescription:
      'Dusting, surfaces, floors, and reset work that makes rooms feel calmer and lighter.',
  },
  {
    key: 'kitchen-cleaning',
    title: 'Kitchen Cleaning',
    to: '/kitchen-cleaning',
    shortDescription:
      'Counters, sinks, appliance exteriors, cabinet fronts, and the messiest daily touchpoints.',
  },
  {
    key: 'livingroom-cleaning',
    title: 'Living Room Cleaning',
    to: '/livingroom-cleaning',
    shortDescription:
      'Dusting, floors, shared surfaces, and detail work that keeps common areas guest-ready.',
  },
];

export const homeHighlights = [
  {
    title: 'Straightforward service',
    text: 'Clear cleaning options, short copy, and no bloated packages to sort through.',
  },
  {
    title: 'Built around real schedules',
    text: 'Book a one-time reset, set up recurring visits, or schedule around a move.',
  },
  {
    title: 'Detail-focused results',
    text: 'We put attention where it shows most: kitchens, bathrooms, floors, and touchpoints.',
  },
];

export const homeSteps = [
  {
    title: 'Tell us what you need',
    text: 'Share the service, size of the space, and any areas you want prioritized.',
  },
  {
    title: 'Confirm the plan',
    text: 'We help match the visit to the level of cleaning and timing that makes sense.',
  },
  {
    title: 'Enjoy the reset',
    text: 'Step back into a space that feels cleaner, lighter, and easier to manage.',
  },
];

export const testimonials = [
  {
    name: 'Sarah J.',
    text: 'My home felt noticeably lighter after the first visit. The detail work made the difference.',
  },
  {
    name: 'Michael P.',
    text: 'Prompt, professional, and easy to work with. The office looked polished and ready for clients.',
  },
  {
    name: 'Lisa K.',
    text: 'The service was efficient and thorough, and the quote process was simple from the start.',
  },
];

export const servicePages = {
  deepCleaning: {
    key: 'deep-cleaning',
    to: '/deep-cleaning',
    eyebrow: 'One-time or occasional reset',
    title: 'Deep cleaning for spaces that need a real reset.',
    description:
      'When standard upkeep is not enough, this service focuses on buildup, detail work, and the areas that change how a room feels.',
    heroImage: '/assets/deep-cleaning-header.webp',
    heroPoints: ['First visits', 'Seasonal resets', 'Detail work'],
    detailImage: '/assets/deep-cleaning-duties2.webp',
    detailImageAlt: 'Detailed deep cleaning in progress',
    includedHeading: 'What gets extra attention',
    includedIntro:
      'Deep cleaning is designed to go beyond surface pickup and cover the places that are easy to miss during a lighter visit.',
    included: [
      'Baseboards, trim, corners, and visible dust buildup',
      'Detailed bathroom scrubbing on tubs, showers, sinks, and fixtures',
      'Kitchen buildup on counters, cabinet fronts, and high-touch surfaces',
      'Doors, handles, switches, and reachable detail areas',
      'Floors, edges, and accessible space beneath furniture or fixtures',
    ],
    idealForHeading: 'Best times to book it',
    idealForIntro:
      'This service works well when a space feels overdue for more detail than a standard maintenance clean.',
    idealFor: [
      'Preparing for guests or special events',
      'Starting fresh before recurring service',
      'Resetting a home after a busy stretch',
      'Bringing neglected spaces back to baseline',
    ],
    benefits: [
      {
        title: 'More detail',
        text: 'Extra attention goes toward buildup, edges, and the surfaces that often get skipped.',
      },
      {
        title: 'Stronger reset',
        text: 'It is a good fit when you want a visible difference after one focused visit.',
      },
      {
        title: 'Flexible use',
        text: 'Book it as a standalone service or before moving into a routine schedule.',
      },
    ],
    ctaTitle: 'Need a deeper reset?',
    ctaText:
      'Request a quote and we can help you decide whether a deep clean, recurring service, or move-focused visit fits best.',
  },
  routineCleaning: {
    key: 'routine-cleaning',
    to: '/routine-cleaning',
    eyebrow: 'Weekly, biweekly, or monthly upkeep',
    title: 'Routine cleaning that keeps the essentials handled.',
    description:
      'This service keeps kitchens, bathrooms, floors, and shared living areas in shape so the mess never has a chance to build up.',
    heroImage: '/assets/routine-cleaning-header.webp',
    heroPoints: ['Recurring visits', 'Consistent upkeep', 'Flexible cadence'],
    detailImage: '/assets/routine-cleaning-duties.webp',
    detailImageAlt: 'Routine home cleaning service',
    includedHeading: 'What is covered regularly',
    includedIntro:
      'Routine cleaning is built around the tasks that make a space look cared for and easier to keep up between visits.',
    included: [
      'Kitchen counters, appliance exteriors, sinks, and visible surfaces',
      'Bathrooms, mirrors, fixtures, and floors',
      'Dusting on common furniture, ledges, and reachable surfaces',
      'Vacuuming and mopping in the rooms included in your visit',
      'High-touch areas and general straightening where needed',
    ],
    idealForHeading: 'A strong fit for',
    idealForIntro:
      'Recurring service works best when you want steady upkeep instead of waiting for the home to feel behind.',
    idealFor: [
      'Busy households with limited time for weekly chores',
      'Homes that need a cleaner baseline throughout the month',
      'Clients who want a predictable schedule and scope',
      'Anyone trying to reduce the stress of catch-up cleaning',
    ],
    benefits: [
      {
        title: 'Less buildup',
        text: 'Regular visits keep kitchens, bathrooms, and floors from slipping too far behind.',
      },
      {
        title: 'Easier upkeep',
        text: 'A consistent schedule means the home is simpler to maintain between cleanings.',
      },
      {
        title: 'Practical cadence',
        text: 'Choose a schedule that matches traffic, pets, and how fast clutter tends to return.',
      },
    ],
    ctaTitle: 'Want a recurring cleaning plan?',
    ctaText:
      'Tell us how often you want service and which rooms matter most, and we will help shape a practical schedule.',
  },
  moveInOutCleaning: {
    key: 'move-in-out-cleaning',
    to: '/move-in-out-cleaning',
    eyebrow: 'Cleaning for transitions and turnovers',
    title: 'Move-in and move-out cleaning with a cleaner handoff.',
    description:
      'When a space is changing hands, the priority is a fresh start. This service focuses on the details that matter most in empty or nearly empty homes and rentals.',
    heroImage: '/assets/move-in-out-hero.jpg',
    heroPoints: ['Rentals', 'Listings', 'Fresh starts'],
    detailImage: '/assets/moving-duties.jpg',
    detailImageAlt: 'Move-in and move-out cleaning',
    includedHeading: 'What we focus on during a move clean',
    includedIntro:
      'Move-focused cleaning gives extra attention to visible buildup and empty-space details that stand out during inspections and handoffs.',
    included: [
      'Inside reachable cabinets, shelves, and storage areas',
      'Counters, sinks, fixtures, and bathroom surfaces',
      'Appliance exteriors and accessible surrounding areas',
      'Base edges, floors, doors, and visible touchpoints',
      'General detail work that helps the space feel ready for the next step',
    ],
    idealForHeading: 'Common use cases',
    idealForIntro:
      'This service is often booked when the goal is a clean impression before keys change hands.',
    idealFor: [
      'Tenants leaving a rental',
      'Landlords preparing a turnover',
      'Buyers moving into a new place',
      'Sellers refreshing a home before final steps',
    ],
    benefits: [
      {
        title: 'Cleaner handoff',
        text: 'The space feels more polished and prepared for whoever walks in next.',
      },
      {
        title: 'Better visibility',
        text: 'Empty-space cleaning makes buildup and missed areas easier to catch and address.',
      },
      {
        title: 'Focused scope',
        text: 'The visit centers on transition priorities instead of day-to-day maintenance tasks.',
      },
    ],
    ctaTitle: 'Planning a move or turnover?',
    ctaText:
      'Share your timeline, the type of property, and whether it is empty or still being packed so we can plan the visit correctly.',
  },
  commercialCleaning: {
    key: 'commercial-cleaning',
    to: '/commercial-cleaning',
    eyebrow: 'For offices and customer-facing spaces',
    title: 'Commercial cleaning that keeps workspaces polished and presentable.',
    description:
      'A cleaner business space supports staff, clients, and day-to-day flow. This service focuses on the areas people see and use most.',
    heroImage: '/assets/commercial-header.jpg',
    heroPoints: ['Offices', 'Shared spaces', 'Professional finish'],
    detailImage: '/assets/commercial-duties.jpg',
    detailImageAlt: 'Commercial workspace cleaning',
    includedHeading: 'What this service covers',
    includedIntro:
      'Commercial cleaning is built around practical upkeep for high-use work areas and shared spaces.',
    included: [
      'Reception areas, desks, visible surfaces, and shared touchpoints',
      'Breakrooms, counters, sinks, and common-use fixtures',
      'Restrooms, mirrors, dispensers, and floors',
      'Trash removal and general surface refresh work',
      'Vacuuming and mopping in the areas included in your plan',
    ],
    idealForHeading: 'Good fit for',
    idealForIntro:
      'This service works best for businesses that need a cleaner appearance without adding more to the team’s workload.',
    idealFor: [
      'Offices and small workplaces',
      'Studios and service-based businesses',
      'Reception and waiting areas',
      'Customer-facing spaces that need a stronger first impression',
    ],
    benefits: [
      {
        title: 'More professional feel',
        text: 'A cleaner environment supports a stronger client and team experience.',
      },
      {
        title: 'Better upkeep',
        text: 'Regular cleaning reduces the drift that makes workspaces look tired or neglected.',
      },
      {
        title: 'Practical coverage',
        text: 'The visit focuses on the shared areas that have the biggest impact on presentation.',
      },
    ],
    ctaTitle: 'Need cleaning for your business?',
    ctaText:
      'Tell us about the type of workspace, the main traffic areas, and the schedule you are considering.',
  },
  residentialCleaning: {
    key: 'residential-cleaning',
    to: '/residential-cleaning',
    eyebrow: 'Whole-home care',
    title: 'Residential cleaning tailored to the way your home actually works.',
    description:
      'From shared spaces to private rooms, this service keeps the home cleaner, calmer, and easier to maintain around a real household schedule.',
    heroImage: '/assets/residential-header.jpg',
    heroPoints: ['Whole-home care', 'Flexible scope', 'Home-focused service'],
    detailImage: '/assets/residential-duties.jpg',
    detailImageAlt: 'Residential home cleaning',
    includedHeading: 'What we handle in the home',
    includedIntro:
      'Residential cleaning is built around the rooms that affect daily comfort most, with the scope adjusted to your priorities.',
    included: [
      'Kitchens, bathrooms, and shared living areas',
      'Dusting on furniture, ledges, and reachable surfaces',
      'Floors throughout the rooms included in the visit',
      'Visible touchpoints and general room refresh work',
      'A cleaning plan shaped around the parts of the home you use most',
    ],
    idealForHeading: 'Best for households that want',
    idealForIntro:
      'This service makes sense when the goal is a consistently cleaner home without losing weekends to catch-up chores.',
    idealFor: [
      'Recurring upkeep throughout the month',
      'Support for busy families or professionals',
      'A cleaner baseline before hosting or travel',
      'Help staying on top of the rooms that get messy fastest',
    ],
    benefits: [
      {
        title: 'More comfort',
        text: 'A cleaner home feels easier to settle into and easier to keep organized.',
      },
      {
        title: 'Better routine',
        text: 'The work centers on the daily-use rooms that shape how the home feels most.',
      },
      {
        title: 'Flexible priorities',
        text: 'Use the form to tell us which spaces matter most so the visit matches your household.',
      },
    ],
    ctaTitle: 'Ready for a cleaner home?',
    ctaText:
      'Request a quote and tell us which rooms need the most attention, how often you want help, and what kind of schedule works for you.',
  },
};

export const processPages = {
  bathroom: {
    key: 'bathroom-cleaning',
    to: '/bathroom-cleaning',
    eyebrow: 'Room-by-room focus',
    title: 'Bathroom cleaning with a sharper, fresher finish.',
    description:
      'Bathrooms collect residue fast, so the work here focuses on fixtures, glass, hard surfaces, and the details that make the room feel fully reset.',
    heroImage: '/assets/bathroom-hero.jpg',
    heroPoints: ['Fixtures', 'Glass', 'Floors'],
    detailImage: '/assets/bathroom-process.jpg',
    detailImageAlt: 'Bathroom cleaning process',
    checklistHeading: 'What gets attention in the bathroom',
    checklistIntro:
      'The goal is a cleaner, brighter space with better attention to the buildup and touchpoints that show up quickly in bathrooms.',
    checklist: [
      'Sinks, counters, mirrors, faucets, and visible surfaces',
      'Tubs, showers, doors, and tile-facing areas',
      'Toilets, exterior fixtures, and high-touch points',
      'Floors, edges, and detail work around the room',
    ],
    focusAreas: [
      {
        title: 'Residue control',
        text: 'We focus on the soap scum, water spots, and film that make bathrooms look dull fast.',
      },
      {
        title: 'Visible polish',
        text: 'Fixtures, mirrors, and hard surfaces get the kind of attention that helps the room feel finished.',
      },
      {
        title: 'High-use care',
        text: 'Bathrooms see constant traffic, so routine attention here has an outsized impact on the whole home.',
      },
    ],
    cadenceHeading: 'Recommended cadence',
    cadenceIntro:
      'How often this room needs attention depends on traffic, humidity, and how quickly residue builds back up.',
    cadence: [
      'Weekly upkeep is helpful for frequently used bathrooms.',
      'Biweekly visits work well for guest baths and lower-traffic spaces.',
      'A deeper reset is useful when buildup starts to return faster than normal.',
    ],
  },
  bedroom: {
    key: 'bedroom-cleaning',
    to: '/bedroom-cleaning',
    eyebrow: 'Room-by-room focus',
    title: 'Bedroom cleaning that helps the room feel calmer and easier to reset.',
    description:
      'Bedrooms benefit from steady dusting, surface care, and floor work that keeps the room lighter, cleaner, and simpler to maintain.',
    heroImage: '/assets/bedroom-hero.jpg',
    heroPoints: ['Dusting', 'Surfaces', 'Floors'],
    detailImage: '/assets/bedroom-process.jpg',
    detailImageAlt: 'Bedroom cleaning process',
    checklistHeading: 'What we focus on in bedrooms',
    checklistIntro:
      'Bedrooms usually need a quieter type of cleaning: less heavy-duty scrubbing, more attention to dust, surfaces, and a clean finish.',
    checklist: [
      'Nightstands, dressers, mirrors, and reachable furniture surfaces',
      'Dusting on ledges, frames, and visible corners',
      'Floors, rugs, and underfoot areas included in the visit',
      'General room refresh work to help the space feel reset',
    ],
    focusAreas: [
      {
        title: 'Dust control',
        text: 'Regular dusting helps the room feel cleaner and reduces the flat, stale look bedrooms can pick up over time.',
      },
      {
        title: 'Visual calm',
        text: 'Clean surfaces and floors make bedrooms feel less cluttered even before anything else changes.',
      },
      {
        title: 'Consistent comfort',
        text: 'Because bedrooms are personal spaces, small details matter more than oversized chore lists.',
      },
    ],
    cadenceHeading: 'Recommended cadence',
    cadenceIntro:
      'The right schedule depends on how often the room is used, how much dust collects, and whether pets spend time there.',
    cadence: [
      'Biweekly visits are often enough for regularly used bedrooms.',
      'Weekly upkeep may make sense for primary bedrooms with more daily traffic.',
      'A one-time reset works well before guests arrive or after a busy season.',
    ],
  },
  kitchen: {
    key: 'kitchen-cleaning',
    to: '/kitchen-cleaning',
    eyebrow: 'Room-by-room focus',
    title: 'Kitchen cleaning built around the messiest room in the house.',
    description:
      'Kitchens need steady attention on counters, sinks, appliance fronts, and the surfaces that show grease, crumbs, and fingerprints quickly.',
    heroImage: '/assets/kitchen-hero.jpg',
    heroPoints: ['Counters', 'Sinks', 'Appliance fronts'],
    detailImage: '/assets/kitchen-process.jpg',
    detailImageAlt: 'Kitchen cleaning process',
    checklistHeading: 'What gets cleaned in the kitchen',
    checklistIntro:
      'Kitchen cleaning centers on the daily-use surfaces that shape how the entire home feels.',
    checklist: [
      'Counters, backsplashes, sinks, and faucets',
      'Stovetop areas, appliance exteriors, and cabinet fronts',
      'Tables, reachable surfaces, and visible touchpoints',
      'Floors and detail work in active prep areas',
    ],
    focusAreas: [
      {
        title: 'Daily buildup',
        text: 'Grease, crumbs, and fingerprints return quickly in kitchens, so regular upkeep matters here first.',
      },
      {
        title: 'Cleaner prep space',
        text: 'Fresh counters, sinks, and visible surfaces make the room feel ready to use instead of waiting to be tackled.',
      },
      {
        title: 'High-impact room',
        text: 'When the kitchen looks clean, the whole house usually feels more under control.',
      },
    ],
    cadenceHeading: 'Recommended cadence',
    cadenceIntro:
      'The kitchen usually benefits from the most consistent cleaning schedule because traffic and buildup show up there first.',
    cadence: [
      'Weekly cleaning is useful for busy households and frequent cooking.',
      'Biweekly visits can work when day-to-day upkeep is already strong.',
      'A deep reset helps when grease and buildup have started to linger.',
    ],
  },
  livingroom: {
    key: 'livingroom-cleaning',
    to: '/livingroom-cleaning',
    eyebrow: 'Room-by-room focus',
    title: 'Living room cleaning that keeps common spaces guest-ready.',
    description:
      'Shared living areas collect dust, traffic, and clutter fast. The focus here is on visible surfaces, floors, and the details people notice first.',
    heroImage: '/assets/living-hero.jpg',
    heroPoints: ['Shared spaces', 'Dusting', 'Floors'],
    detailImage: '/assets/living-process.jpg',
    detailImageAlt: 'Living room cleaning process',
    checklistHeading: 'What we handle in living spaces',
    checklistIntro:
      'Living room cleaning works best when it balances appearance, dust control, and steady upkeep on the room everyone uses.',
    checklist: [
      'Coffee tables, side tables, shelves, and reachable surfaces',
      'Dusting on media furniture, ledges, and visible corners',
      'Floors, rugs, and common underfoot areas',
      'Touchpoints and general refresh work in shared spaces',
    ],
    focusAreas: [
      {
        title: 'First impressions',
        text: 'This is often the room guests see first, so cleaner surfaces and floors make a fast difference.',
      },
      {
        title: 'Shared use',
        text: 'Because the space gets constant daily traffic, it benefits from steady upkeep more than occasional catch-up.',
      },
      {
        title: 'Cleaner flow',
        text: 'A polished living area helps the rest of the home feel more put together at a glance.',
      },
    ],
    cadenceHeading: 'Recommended cadence',
    cadenceIntro:
      'Common spaces usually need regular attention, especially when pets, kids, or frequent guests are part of the household routine.',
    cadence: [
      'Weekly or biweekly visits are often the most practical fit.',
      'Recurring cleaning helps prevent dust and floors from feeling behind.',
      'A one-time reset is useful before hosting or after a busy season at home.',
    ],
  },
};

export const faqItems = [
  {
    question: 'How do I request a quote?',
    answer:
      'Use the contact form or call directly. Include the type of cleaning you need, the size of the space, and anything you want prioritized.',
  },
  {
    question: 'What types of cleaning do you offer?',
    answer:
      'The site covers deep cleaning, routine cleaning, move-in and move-out cleaning, residential cleaning, commercial cleaning, and room-focused cleaning pages.',
  },
  {
    question: 'Can I customize the visit?',
    answer:
      'Yes. Use the message field to flag problem areas, rooms that need extra focus, or any scheduling details that matter for the quote.',
  },
  {
    question: 'How often should I book service?',
    answer:
      'That depends on traffic, pets, and how quickly the space falls behind. Many clients choose weekly, biweekly, monthly, or one-time service depending on their goals.',
  },
  {
    question: 'Do you handle both homes and businesses?',
    answer:
      'Yes. The site supports quote requests for both residential and commercial cleaning needs.',
  },
  {
    question: 'What should I include in my message?',
    answer:
      'The most helpful details are the service you want, the size of the property, your timing, and any rooms or surfaces that need special attention.',
  },
];

export const serviceOptions = [
  'Deep Cleaning',
  'Routine Cleaning',
  'Move-In / Move-Out',
  'Commercial Cleaning',
  'Residential Cleaning',
  'Bathroom Cleaning',
  'Bedroom Cleaning',
  'Kitchen Cleaning',
  'Living Room Cleaning',
];
