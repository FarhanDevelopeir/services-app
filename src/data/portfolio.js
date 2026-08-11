import ecommerceImage from "../img/fortesting.png";
import placeholderImage from "../img/fortesting.png";
import chatting_app from "../img/chatting_app.png";

// import ecommerceImage from "../img/port5.png";
const projects = [
  {
    id: 1,
    title: "Real Time Chatting Application",
    shortTitle: "Real Time Chat",
    category: "Web Application",
    description:
      "A real-time messaging platform with instant delivery, online presence, group chats, and a responsive interface built for seamless communication.",
    image: chatting_app,
    tags: ["React", "WebSockets", "Node.js"],
  },
  {
    id: 2,
    title: "Ecommerce Application",
    shortTitle: "Ecommerce App",
    category: "E-Commerce",
    description:
      "A full-featured online store with product catalog, cart, secure checkout, order tracking, and an admin dashboard for inventory management.",
    image: ecommerceImage,
    tags: ["Next.js", "Stripe", "MongoDB"],
  },
  {
    id: 3,
    title: "n8n Automation Workflow",
    shortTitle: "n8n Automation",
    category: "Automation",
    description:
      "Custom n8n workflows that connect APIs, automate repetitive tasks, sync data across platforms, and reduce manual operations for business teams.",
    image: placeholderImage,
    tags: ["n8n", "API Integration", "Workflows"],
  },
  {
    id: 4,
    title: "English Learning Software",
    shortTitle: "English Learning",
    category: "EdTech",
    description:
      "An interactive language-learning platform with lessons, quizzes, progress tracking, and personalized learning paths for students of all levels.",
    image: placeholderImage,
    tags: ["React", "AI", "LMS"],
  },
  {
    id: 5,
    title: "Distributor Software",
    shortTitle: "Distributor Software",
    category: "Business Software",
    description:
      "A distributor management system for inventory, orders, sales tracking, and reporting — built to streamline supply chain operations at scale.",
    image: placeholderImage,
    tags: ["Full Stack", "Dashboard", "ERP"],
  },
];

export default projects;
