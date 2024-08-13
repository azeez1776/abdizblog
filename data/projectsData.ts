interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'Hexis',
    description:
      'Developed key features including an intra-workout fuelling system and a Notes & Notification scheduler, enhancing user performance and coach-client communication. Created a Coach Hub desktop web app for athlete monitoring and feedback. Implemented E2E testing with Maestro and managed app releases for both iOS and Android platforms, ensuring a robust and user-friendly fitness solution.',
    imgSrc: '/static/images/hexis-project.png',
    href: 'https://www.hexis.live',
  },
  {
    title: 'Safiri',
    description:
      "Rebuilt the backend with Temporal and Node.js, creating a reliable multi-modal ticket booking system with mobile money integration. Implemented key features including push notifications, an agent commission system, multi-currency support, and expense tracking for transportation companies. Developed the train booking flow for mobile and backend, enhancing the platform's functionality and user experience.",
    imgSrc: '/static/images/safiri.webp',
    href: 'https://www.safiri.com',
  },
  {
    title: 'Royal Stable Zanzibar',
    description: `Imagine being able to travel back in time or to the future. Simple turn the knob
    to the desired date and press "Go". No more worrying about lost keys or
    forgotten headphones with this simple yet affordable solution.`,
    imgSrc: '/static/images/royal-stable-zanzibar.png',
    href: 'https://www.royalstablezanzibar.com',
  },
  {
    title: 'Royal Apartment',
    description: `Imagine being able to travel back in time or to the future. Simple turn the knob
    to the desired date and press "Go". No more worrying about lost keys or
    forgotten headphones with this simple yet affordable solution.`,
    imgSrc: '/static/images/time-machine.jpg',
    href: 'https://www.royal-apartment.com',
  },
  {
    title: 'Leonco Fuel Station Management System',
    description:
      'Led a team of 5 developers in creating a comprehensive Fuel Station Management system for Leonco in Sierra Leone. Developed both an admin portal and a mobile app, streamlining operations and improving efficiency. Contributed to app development while managing the team, ensuring successful delivery of a tailored solution for fuel station oversight and administration.',
    imgSrc: '/static/images/leonco.png',
    href: 'https://www.royal-apartment.com',
  },
  {
    title: 'Tamagui',
    description:
      "Contributed to the development of the toggle button component in Tamagui, a high-performance UI kit for React Native and web applications. This open-source project focuses on creating fast, customizable, and cross-platform user interface elements. By working on the toggle button, I helped enhance Tamagui's component library, improving its versatility for developers building responsive and accessible applications across multiple platforms",
    imgSrc: '/static/images/tamagui.jpg',
    href: 'https://tamagui.dev',
  },
]

export default projectsData
