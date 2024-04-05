export const MagicNumbers = {
  maxTextLength: 150,
  minTextLength: 135,
  imageSize: 1_400_000,
  timeout: 5_000,
  max_timeout: 8_000,
} as const;

export const AboutUs = [
  {
    image: "",
    title: "Meticulous Craftmanship",
    content:
      "Our seasoned artisans bring decades of expertise, ensuring each garment is a masterpiece of meticulous craftsmanship. From the initial measurements to the final stitch, we uphold a standard of excellence that defines our work.",
  },
  {
    image: "",
    title: "Personalization Redefined",
    content:
      "Experience tailoring that is truly yours. Collaborate with our skilled team to bring your unique vision to life. We offer a level of personalization that goes beyond measurements, ensuring each garment is a reflection of your individual style and personality.",
  },
  {
    image: "",
    title: "Online Convenience, Offline Quality",
    content:
      "Embrace the convenience of online ordering without compromising on the quality of traditional craftsmanship. Our online platform seamlessly integrates with our atelier, providing you with a modern, user-friendly experience.",
  },
];

export const HowKingClassWorks = [
  {
    title: "Explore Categories",
    content:
      "Browse through our diverse collections, including Agbada, Suits and Native Attires.",
    textDirection: "text-start",
    position: "-left-2",
    padding: "pl-[22px]",
  },
  {
    title: "Personalize Your Order",
    content:
      "Customize your selection by choosing fabrics, styles, and adding personal details.",
    textDirection: "text-end",
    position: "-right-2",
    padding: "pr-[22px]",
  },
  {
    title: "Place Your Order",
    content:
      "Effortlessly place your order through our user-friendly platform.",
    textDirection: "text-start",
    position: "-left-2",
    padding: "pl-[22px]",
  },
  {
    title: "Track Progress",
    content: "Keep track of your order's journey from creation to completion.",
    textDirection: "text-end",
    position: "-right-2",
    padding: "pr-[22px]",
  },
  {
    title: "Order Ready",
    content: "Once completed, your bespoke creation is ready for delivery",
    textDirection: "text-start",
    position: "-left-2",
    padding: "pl-[22px]",
  },
];

export const UserFeedback = [
  {
    author: "Fatima Adeyemi",
    Comment:
      "I'm impressed by the level of personalization offered. My native attire was tailored to perfection, capturing the essence of Nigerian tradition with a modern twist. The communication throughout the process was excellent. I'll definitely be a repeat customer.",
    location: "Abuja",
    date: new Date().toUTCString(),
  },
  {
    author: "Mark Daniel",
    Comment:
      "I'm impressed by the level of personalization offered. My native attire was tailored to perfection, capturing the essence of Nigerian tradition with a modern twist. The communication throughout the process was excellent. I'll definitely be a repeat customer.",
    location: "Lokoja",
    date: new Date().toUTCString(),
  },
  {
    author: "Joseph Obimba",
    Comment:
      "I'm impressed by the level of personalization offered. My native attire was tailored to perfection, capturing the essence of Nigerian tradition with a modern twist. The communication throughout the process was excellent. I'll definitely be a repeat customer.",
    location: "Lagos",
    date: new Date().toUTCString(),
  },
];

export const NavLinks = [
  { name: "Home", link: "/" },
  { name: "Products", link: "/products" },
  { name: "Orders", link: "/orders" },
  { name: "About Us", link: "/aboutus" },
  // { name: 'How It Works', link: '/#howItWorks' },
];

export const FooterLinks = {
  QuickLinks: {
    name: "Quick Links",
    values: [...NavLinks],
  },
  Support: {
    name: "Support",
    values: [
      { name: "Privacy Policy", link: "/privacyPolicy" },
      { name: "Return & Refund Policy", link: "/refund" },
      { name: "FAQ", link: "/faq" },
    ],
  },
};

export const UserNavigation = [
  { name: "My Measurement", link: "" },
  // { name: "Notifications", link: "" },
  // { name: "Settings", link: "/settings" },
];

export const HomeNavLinks = [
  { name: "Home", link: "/" },
  { name: "Products", link: "/products" },
  { name: "About Us", link: "/aboutus" },
  { name: "Contact Us", link: "/#contactUs" },
];

export const AdminNavLinks = [
  { name: "Dashboard", link: "/dashboard" },
  { name: "Upload product", link: "/uploadProduct" },
  { name: "Manage orders", link: "/adminOrders" },
  { name: "Contacts", link: "/#contactUs" },
];

export const DesktopDropdown = [
  ...NavLinks,
  { name: "My Measurement", link: "" },
  { name: "Notifications", link: "" },
  { name: "Logout", link: "" },
];

export const OrderStatus: Record<OrderStatusType, OrderStatusType> = {
  Pending: "Pending",
  "In progress": "In progress",
  Completed: "Completed",
};

export const orderProps: OrderPropsTypes = {
  Pending: {
    bgColor: "bg-[#6E6E6E]",
    color: "text-[#6E6E6E]",
    width: "w-[0%]",
  },
  "In progress": {
    bgColor: "bg-[#E28835]",
    color: "text-[#E28835]",
    width: "w-[36%]",
  },
  Completed: {
    bgColor: "bg-[#138F27]",
    color: "text-[#138F27]",
    width: "w-[100%]",
  },
};
export const hoverClass =
  "hover:opacity-90 active:opacity-100 transition-opacity";
export const OrderTableLabel = ["Order ID", "Date", "Status", "Customer"];
export const CustomerTableLabel = [
  "Customer",
  "Phone Number",
  "Email Address",
  "Measurement",
];

export const howItWork = [
  {
    number: "1",
    title: "Explore Categories",
    desc: "Browse through our diverse collections, including Agbada, Suits, and Native Attire",
  },

  {
    number: "2",
    title: "Personalize Your Order",
    desc: "Provide your precise measurements using our intuitive measurement guide",
  },

  {
    number: "3",
    title: "Place Your Order",
    desc: "Securely place your order with just a few taps. Your preferences are sent directly to our skilled tailors",
  },

  {
    number: "4",
    title: "Track Progress",
    desc: "Receive timely updates on the status of your order, from fabric cutting to stitching and final touches.",
  },
];

export const categories = [
  {
    name: "Agbada",
    url: "/agbada.png",
  },
  {
    name: "Senator",
    url: "/senator.png",
  },
  {
    name: "Suits",
    url: "/suit.png",
  },
  // {
  //   name: "Shirts",
  //   url: "/shirts"
  // }
];
// %his ensures a perfect fit tailored just for you.

export const promotionItems = [
  {
    __class__: "Product",
    created_at: "2024-04-02T16:40:37",
    description: "Nice senator",
    estimated: 4,
    id: "06216d12-b6cb-460c-82c6-8addf65188f5",
    img_url:
      "https://images.unsplash.com/photo-1493455198445-863243d88564?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Jocos",
    on_draft: false,
    price: 1234.56,
    updated_at: "2024-04-02T16:40:37",
  },
  {
    __class__: "Product",
    created_at: "2024-04-02T16:40:37",
    description: "Good dress",
    estimated: 4,
    id: "1b95cf07-2903-4df0-8b7d-54b4e37aef46",
    img_url:
      "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "KofuCap 4rm test",
    on_draft: false,
    price: 134.56,
    updated_at: "2024-04-02T16:40:37",
  },
  {
    __class__: "Product",
    created_at: "2024-04-02T16:40:37",
    description: "Nice senator",
    estimated: 4,
    id: "5a03a6dc-55a3-484f-9da1-a1eb3dbcb16f",
    img_url:
      "https://images.unsplash.com/photo-1493455198445-863243d88564?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Jocos",
    on_draft: false,
    price: 1234.56,
    updated_at: "2024-04-02T16:40:37",
  },
  {
    __class__: "Product",
    created_at: "2024-04-02T16:40:37",
    description: "Nice senator",
    estimated: 4,
    id: "6e6b7ae9-ec21-4eeb-be1f-ec7d2ed23f5d",
    img_url:
      "https://images.unsplash.com/photo-1493455198445-863243d88564?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Jocos",
    on_draft: false,
    price: 1234.56,
    updated_at: "2024-04-02T16:40:37",
  },
  {
    __class__: "Product",
    created_at: "2024-04-02T16:40:37",
    description: "Nice senator",
    estimated: 4,
    id: "878ae013-002a-4233-a5df-c316e159c387",
    img_url:
      "https://images.unsplash.com/photo-1493455198445-863243d88564?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Jocos",
    on_draft: false,
    price: 1234.56,
    updated_at: "2024-04-02T16:40:37",
  },
  {
    __class__: "Product",
    created_at: "2024-04-02T16:40:37",
    description: "Good dress",
    estimated: 4,
    id: "b405bcda-889f-4918-9fcd-c04bc268f2de",
    img_url:
      "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "KofuCap 4rm test",
    on_draft: false,
    price: 134.56,
    updated_at: "2024-04-02T16:40:37",
  },
  {
    __class__: "Product",
    created_at: "2024-04-02T16:40:37",
    description: "Nice senator",
    estimated: 4,
    id: "bd7750a9-b28c-48f6-8447-7af1cab1214c",
    img_url:
      "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Jocos",
    on_draft: false,
    price: 1234.56,
    updated_at: "2024-04-02T16:40:38",
  },
  {
    __class__: "Product",
    created_at: "2024-04-02T16:40:38",
    description: "Nice senator",
    estimated: 4,
    id: "c4f8bc99-1639-4cf9-958d-e9f590b6c6df",
    img_url:
      "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Jocos",
    on_draft: false,
    price: 1234.56,
    updated_at: "2024-04-02T16:40:38",
  },
  {
    __class__: "Product",
    created_at: "2024-04-02T16:40:37",
    description: "Nice senator",
    estimated: 4,
    id: "cc93c942-3af0-4628-ad00-aa44053bf304",
    img_url:
      "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Jocos",
    on_draft: false,
    price: 1234.56,
    updated_at: "2024-04-02T16:40:37",
  },
  {
    __class__: "Product",
    created_at: "2024-04-02T16:40:38",
    description: "Nice senator",
    estimated: 4,
    id: "d1eea00f-5bda-45b4-9a9c-e0c51960bd6d",
    img_url:
      "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Jocos",
    on_draft: false,
    price: 1234.56,
    updated_at: "2024-04-02T16:40:38",
  },
  {
    __class__: "Product",
    created_at: "2024-04-02T16:40:37",
    description: "E good",
    estimated: 4,
    id: "e1d5015c-7186-4dfa-91ce-0936993a390a",
    img_url:
      "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Senator",
    on_draft: false,
    price: 1234.56,
    updated_at: "2024-04-02T16:40:37",
  },
  {
    __class__: "Product",
    categories: ["Chinos"],
    created_at: "2024-04-02T16:40:37",
    description: "Good dress",
    estimated: 4,
    id: "e2149ce6-3a6f-4c6c-a67b-1f7c8ca34a7f",
    img_url:
      "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "KofuCap 4rm test",
    on_draft: false,
    price: 134.56,
    updated_at: "2024-04-02T16:40:37",
  },
  {
    __class__: "Product",
    created_at: "2024-04-02T16:40:37",
    description: "Good dress",
    estimated: 4,
    id: "e6b2e41e-9ce4-4590-8d36-4c4327872413",
    img_url:
      "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "KofuCap 4rm test",
    on_draft: false,
    price: 134.56,
    updated_at: "2024-04-02T16:40:37",
  },
  {
    __class__: "Product",
    created_at: "2024-04-02T16:40:37",
    description: "Nice senator",
    estimated: 4,
    id: "ebe5ef14-2910-40e1-bd67-477ad895382d",
    img_url:
      "https://images.unsplash.com/photo-1493455198445-863243d88564?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Jocos",
    on_draft: false,
    price: 1234.56,
    updated_at: "2024-04-02T16:40:37",
  },
  {
    __class__: "Product",
    created_at: "2024-04-02T16:40:37",
    description: "Good dress",
    estimated: 4,
    id: "f2c836de-0444-404b-856d-e7d6ed9db7df",
    img_url:
      "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "KofuCap 4rm test",

  },
  {
    __class__: "Product",
    created_at: "2024-04-02T16:40:37",
    description: "Nice senator",
    estimated: 4,
    id: "fa3f8d0c-fb08-4130-a84e-a101a662f428",
    img_url:
      "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Jocos",
    on_draft: false,
    price: 1234.56,
    updated_at: "2024-04-02T16:40:37",
  },
];
