interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'Safiri',
    description:
      "Rebuilt the backend with Temporal and Node.js, creating a reliable multi-modal ticket booking system with mobile money integration. Implemented key features including push notifications, an agent commission system, multi-currency support, and expense tracking for transportation companies. Developed the train booking flow for mobile and backend, enhancing the platform's functionality and user experience.",
    imgSrc: '/static/images/safiri.webp',
    href: 'https://www.safiri.com',
  },
  {
    title: 'Hexis',
    description:
      'Developed key features including an intra-workout fuelling system and a Notes & Notification scheduler, enhancing user performance and coach-client communication. Created a Coach Hub desktop web app for athlete monitoring and feedback. Implemented E2E testing with Maestro and managed app releases for both iOS and Android platforms, ensuring a robust and user-friendly fitness solution.',
    imgSrc: '/static/images/hexis-project.png',
    href: 'https://www.hexis.live',
  },
  {
    title: 'Tamagui',
    description:
      "Contributed to the development of the toggle button component in Tamagui, a high-performance UI kit for React Native and web applications. This open-source project focuses on creating fast, customizable, and cross-platform user interface elements. By working on the toggle button, I helped enhance Tamagui's component library, improving its versatility for developers building responsive and accessible applications across multiple platforms",
    imgSrc: '/static/images/tamagui.jpg',
    href: 'https://tamagui.dev',
  },
  {
    title: 'Leonco Fuel Station Management System',
    description:
      'Led a team of 5 developers in creating a comprehensive Fuel Station Management system for Leonco in Sierra Leone. Developed with the team both an admin portal and a mobile app, streamlining operations and improving efficiency. Contributed to app development while managing the team, ensuring successful delivery of a tailored solution for fuel station oversight and administration.',
    imgSrc: '/static/images/leonco.png',
    href: 'https://www.leonoil.sl',
  },
  {
    title: 'Royal Stable Zanzibar',
    description:
      'Developed a streamlined booking website for Royal Stable Zanzibar, enabling users to easily reserve horse riding experiences. Created an intuitive interface for browsing and selecting ride packages, coupled with an efficient booking system. Implemented a user-friendly process that allows customers to complete their reservations in just a few minutes, enhancing the overall user experience and potentially increasing bookings for the stable',
    imgSrc: '/static/images/royalstablezanzibar.png',
    href: 'https://www.royalstablezanzibar.com',
  },
  {
    title: 'Royal Apartment',
    description:
      'Developed an elegant booking platform for Royal Apartment Zanzibar, featuring 12 luxurious beachfront villas. Created a user-friendly interface for villa exploration and implemented a streamlined reservation system. Users can easily select dates and receive instant booking confirmations, simplifying the process of securing high-end beach accommodation',
    imgSrc: '/static/images/royalapartment.png',
    href: 'https://www.royal-apartment.com',
  },
]

export default projectsData
