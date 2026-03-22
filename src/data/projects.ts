export interface ProjectSection {
  title: string;
  description: string;
  image: string;
}

export interface TechStack {
  name: string;
  percent: number;
}

export interface Project {
  id: number;
  slug: string;
  title: string;
  subtitle?: string;
  banner: string;
  platforms: string;
  description: string;
  techStack: TechStack[];
  sections: ProjectSection[];
}

export const projects: Project[] = [
  {
    id: 1,
    slug: "hbh",
    title: "HBH Notification App",
    banner: "/images/hbh/hbh_banner.png",
    platforms: "iOS & Android",
    description:
      "The Store Notifications app is an iOS & Android app built from scratch for Honey Baked Ham, a US national food service corporation. The app allows individual retail stores receive local notifications that an order has been placed and when the order is due. App utilizes websockets, device authentication, online/offline modes, network connectivity handling, notification settings and more. The HBH Store Notifications app is deployed to over 250 nationwide retail locations.",
    techStack: [
      { name: "Flutter/Dart", percent: 100 },
      { name: "Azure Web Socket", percent: 80 },
      { name: "Redis", percent: 20 },
      { name: "Local Notifications", percent: 100 },
    ],
    sections: [
      {
        title: "Realtime Orders",
        description:
          "Orders are displayed in realtime as they are placed from the consumer mobile app and website. Users can filter by order type and search by customer name.",
        image: "/images/hbh/hbh_order_detail_800.jpg",
      },
      {
        title: "Notifications",
        description:
          "Visible and audible notifications are sent to the device when an order is due within a 30 minute window.",
        image: "/images/hbh/hbh_notification_800.jpg",
      },
      {
        title: "Background Notifications",
        description:
          "The app supports individual or grouped notifications while the app is in the background.",
        image: "/images/hbh/in_app_group_notifications.jpg",
      },
      {
        title: "Order Calendar",
        description:
          "Select individual days and see orders for those days. Days with orders display indicator dots.",
        image: "/images/hbh/hbh_calendar_800.jpg",
      },
      {
        title: "Order Details",
        description:
          "View unique information about each order to help with preparation.",
        image: "/images/hbh/hbh_order_detail_600.jpg",
      },
      {
        title: "Notification Control",
        description:
          "Silence or remove notifications on individual devices.",
        image: "/images/hbh/hbh_notification_schedule_800.jpg",
      },
    ],
  },
  {
    id: 2,
    slug: "kanuga",
    title: "Kanuga Bike Park",
    banner: "/images/kanuga/kanuga_banner.png",
    platforms: "iOS & Android",
    description:
      "iOS and Android mobile app that lets users buy passes & merchandise, see trail status updates, get push notifications for events, as well as record and view ride history and get medical attention based on GPS location.",
    techStack: [
      { name: "Flutter/Dart", percent: 100 },
      { name: "Firestore", percent: 100 },
      { name: "Cloud Functions", percent: 50 },
    ],
    sections: [
      {
        title: "Trail Status",
        description:
          "See park trails and realtime status updates.",
        image: "/images/kanuga/kanuga_trails.jpg",
      },
      {
        title: "Trail Details",
        description:
          "View detailed trail info and save favorites.",
        image: "/images/kanuga/kanuga_trail_detail.jpg",
      },
      {
        title: "User Lap Data",
        description:
          "Record and review laps with GPS ride data including elevation, distance, and speed.",
        image: "/images/kanuga/kanuga_laps_6.jpg",
      },
      {
        title: "Park Passes",
        description:
          "Digital passes that can be scanned at the park entrance.",
        image: "/images/kanuga/kanuga_valid_pass.jpg",
      },
      {
        title: "Ride Maps",
        description:
          "Record laps with GPS, map your route, and intelligently pause when stopped.",
        image: "/images/kanuga/kanuga_record_lap.jpg",
      },
      {
        title: "Lap Data Metrics",
        description:
          "Display ride GPS data after recording a lap.",
        image: "/images/kanuga/kanuga_lap_metrics.jpg",
      },
      {
        title: "Map Actions",
        description:
          "Geofences and request help feature for rider safety.",
        image: "/images/kanuga/kanuga_map_actions.jpg",
      },
      {
        title: "Request Help",
        description:
          "Sends notification to park office with GPS location and timestamp.",
        image: "/images/kanuga/kanuga_request_help.jpg",
      },
      {
        title: "In-App Park Store",
        description:
          "Buy passes, merchandise, and rentals via integrated webview.",
        image: "/images/kanuga/kanuga_store.jpg",
      },
      {
        title: "Admin Console",
        description:
          "Tablet view to scan passes, update trail status, and view analytics.",
        image: "/images/kanuga/kanuga_tablet_admin.jpg",
      },
      {
        title: "Rider Analytics",
        description:
          "View daily, monthly, and annual rider data with export capabilities.",
        image: "/images/kanuga/kanuga_tablet_analytics.jpg",
      },
    ],
  },
  {
    id: 4,
    slug: "onevision",
    title: "1Vision StatKeeper",
    banner: "/images/onevision/onevision_banner.png",
    platforms: "iOS",
    description:
      "StatKeeper is an iOS app written from scratch for 1Vision Media, LLC, a sports technology startup attempting to bring college experiences to the high school market. The basic premise is recording every play of a sports contest, including each player, penalties, play type, and result of the play. Data is then sent to AWS via GraphQL where aggregations take the data and compile player and team stats to be consumed by a freestanding user Companion app. There fans can keep track of player metrics and recruiters can follow prospects.",
    techStack: [
      { name: "Flutter/Dart", percent: 100 },
      { name: "AWS", percent: 100 },
      { name: "GraphQL", percent: 100 },
    ],
    sections: [
      {
        title: "Football & Basketball",
        description:
          "Record plays by type and players involved. Choose sport before recording.",
        image: "/images/onevision/onevision_football.jpg",
      },
    ],
  },
  {
    id: 5,
    slug: "stuller",
    title: "Stuller Power",
    banner: "/images/stuller/stuller_banner.png",
    platforms: "iOS & Web",
    description:
      "Web and iOS app for an electrical contractor to schedule appointments, track timing of jobs, track employees, map customers, track inventory, and manage billing and invoicing. Database integration with Firestore. Billing/Invoicing integrated with Quickbooks.",
    techStack: [
      { name: "Flutter/Dart", percent: 100 },
      { name: "Firestore", percent: 100 },
      { name: "Cloud Functions", percent: 33 },
      { name: "Node", percent: 20 },
    ],
    sections: [
      {
        title: "Customer Map",
        description:
          "See a map of assigned customers, call customers, and view details.",
        image: "/images/stuller/stuller_map.jpg",
      },
      {
        title: "Technician Tracking",
        description:
          "Auto-sends ETA to next customer when a job is finished.",
        image: "/images/stuller/stuller_map_customer.jpg",
      },
      {
        title: "Scheduling",
        description:
          "Calendar view of appointments and service dates from Firestore.",
        image: "/images/stuller/stuller_calendar.jpg",
      },
      {
        title: "Appointment Details",
        description:
          "View detailed appointment info including service history.",
        image: "/images/stuller/stuller_job.jpg",
      },
      {
        title: "Inventory Control",
        description:
          "Parts are automatically removed from inventory when used on a job.",
        image: "/images/stuller/stuller_parts.jpg",
      },
      {
        title: "Customer Details",
        description:
          "Contact info, job history, and job notes for each customer.",
        image: "/images/stuller/stuller_customer_detail.jpg",
      },
    ],
  },
];
