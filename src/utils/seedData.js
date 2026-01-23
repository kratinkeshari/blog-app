import {
  isStorageEmpty,
  initStorage,
  setUsers,
  setBlogs,
  setCategories,
} from "./storage.js";

const generateId = () => {
  return Date.now().toString(36) + Math.random().toString(36).substring(2);
};

const seedCategories = () => {
  return [
    {
      id: generateId(),
      name: "Technology",
      slug: "technology",
      icon: "PsychologyIcon",
      // description: 'Tech trends, programming, and innovation',
      createdAt: new Date("2024-01-01").toISOString(),
    },
    {
      id: generateId(),
      name: "Lifestyle",
      slug: "lifestyle",
      icon: "TrendingUpIcon",
      // description: 'Health, wellness, and everyday living',
      createdAt: new Date("2024-01-01").toISOString(),
    },
    {
      id: generateId(),
      name: "Business",
      slug: "business",
      icon: "WorkIcon",
      // description: 'Entrepreneurship, startups, and finance',
      createdAt: new Date("2024-01-01").toISOString(),
    },
    {
      id: generateId(),
      name: "Programming",
      slug: "programming",
      icon: "CodeIcon",
      // description: 'Entrepreneurship, startups, and finance',
      createdAt: new Date("2024-01-01").toISOString(),
    },
    {
      id: generateId(),
      name: "Productivity",
      slug: "productivity",
      icon: "SchoolIcon",
      // description: 'Entrepreneurship, startups, and finance',
      createdAt: new Date("2024-01-01").toISOString(),
    },
    {
      id: generateId(),
      name: "Career",
      slug: "career",
      icon: "WorkIcon",
      // description: 'Entrepreneurship, startups, and finance',
      createdAt: new Date("2024-01-01").toISOString(),
    },
    {
      id: generateId(),
      name: "Travel",
      slug: "travel",
      icon: "WebIcon",
      // description: 'Entrepreneurship, startups, and finance',
      createdAt: new Date("2024-01-01").toISOString(),
    },
  ];
};

const seedUsers = () => {
  return [
    {
      id: generateId(),
      email: "kratin@gmail.com",
      name: "kratin",
      createdAt: new Date("2026-01-15").toISOString(),
    },
    {
      id: generateId(),
      email: "richa@gmail.com",
      name: "richa",
      createdAt: new Date("2026-01-20").toISOString(),
    },
    {
      id: generateId(),
      email: "harshit@gmail.com",
      name: "harshit",
      createdAt: new Date("2026-01-19").toISOString(),
    },
  ];
};

const seedBlogs = (users, categories) => {
  const [kratin, richa, harshit] = users;
  const [
    techCategory,
    lifestyleCategory,
    businessCategory,
    programmingCategory,
    productivityCategory,
    careerCategory,
    travelCategory,
  ] = categories;

  return [
    // TECHNOLOGY — Kratin
    {
      id: generateId(),
      title: "Getting Started with React Hooks",
      content: `React Hooks fundamentally changed how developers write React applications. Before hooks, managing state and lifecycle logic required class components, which often led to complex, hard-to-maintain codebases. Hooks allow you to use state, side effects, context, and other powerful features directly inside functional components.

The most commonly used hooks are useState and useEffect. useState allows components to store and update local state, while useEffect lets you perform side effects such as API calls, DOM updates, and subscriptions. Understanding how and when these hooks run is critical for building predictable applications.

Beyond the basics, hooks unlock powerful architectural patterns. Custom hooks allow you to extract and reuse logic across components without introducing extra layers of abstraction. This encourages separation of concerns, improves testability, and keeps components focused on rendering.

However, hooks also introduce new responsibilities. Dependency arrays, stale closures, and unnecessary re-renders are common pitfalls. Mastering hooks means understanding how React schedules renders and how state updates propagate through the component tree.

If you want to write modern, scalable React code, hooks are not optional. They are the foundation upon which today’s React ecosystem is built.`,
      excerpt:
        "Learn how React Hooks transform component logic, reuse, and architecture in modern React apps.",
      authorEmail: kratin.email,
      authorName: kratin.name,
      categoryId: techCategory.id,
      categoryName: techCategory.name,
      likes: [richa.email],
      createdAt: new Date("2024-02-01").toISOString(),
      // updatedAt: new Date("2024-02-01").toISOString(),
    },

    // LIFESTYLE — Richa
    {
      id: generateId(),
      title: "10 Tips for Better Work-Life Balance",
      content: `Work-life balance is no longer a luxury; it is a necessity for sustainable performance. Constant connectivity, remote work, and competitive environments have blurred the line between professional and personal life.

The first step is setting clear boundaries. Define working hours and protect your non-working time. This trains both your mind and the people around you to respect personal space. Prioritizing sleep, nutrition, and movement is equally important. A tired body cannot support a focused mind.

Another critical element is learning to say no. Overcommitment leads to shallow work and chronic stress. Instead, focus on fewer tasks and execute them well. Scheduling breaks, stepping away from screens, and practicing mindfulness can significantly reduce mental fatigue.

Work-life balance is not about equal hours. It is about alignment. When your daily actions support your long-term values, you stop feeling constantly drained and start feeling intentionally engaged.

True balance is built through small, consistent decisions — not through dramatic lifestyle changes.`,
      excerpt:
        "Practical, realistic strategies to maintain harmony between your professional and personal life.",
      authorEmail: richa.email,
      authorName: richa.name,
      categoryId: lifestyleCategory.id,
      categoryName: lifestyleCategory.name,
      likes: [kratin.email],
      createdAt: new Date("2024-02-05").toISOString(),
      // updatedAt: new Date("2024-02-05").toISOString(),
    },

    // BUSINESS — Harshit
    {
      id: generateId(),
      title: "Building a Successful Startup in 2024",
      content: `The startup ecosystem in 2024 is more competitive and more opportunity-rich than ever. Barriers to entry are lower, but expectations are higher. A good idea is no longer enough.

Modern startups must begin with deep problem understanding. Founders who obsess over customer pain points consistently outperform those who focus only on features. Market validation should happen before heavy engineering investment.

Execution speed is another defining factor. Rapid prototyping, early releases, and tight feedback loops enable teams to adapt before resources are exhausted. Financial discipline remains essential; many startups fail not because they lack users, but because they mismanage runway.

Equally important is team composition. Complementary skills, psychological safety, and aligned incentives often matter more than raw technical ability.

Successful startups are not built by avoiding failure. They are built by failing intelligently, learning quickly, and iterating relentlessly.`,
      excerpt:
        "Essential lessons for entrepreneurs navigating today’s fast-moving startup ecosystem.",
      authorEmail: harshit.email,
      authorName: harshit.name,
      categoryId: businessCategory.id,
      categoryName: businessCategory.name,
      likes: [],
      createdAt: new Date("2024-02-10").toISOString(),
      // updatedAt: new Date("2024-02-10").toISOString(),
    },

    // PROGRAMMING — Kratin
    {
      id: generateId(),
      title: "Clean Coding Practices Every Developer Should Follow",
      content: `Clean code is not about style. It is about communication. Code is read far more often than it is written, and unclear code slows teams down.

Meaningful naming is the foundation. Variables, functions, and components should reveal intent without comments. Functions should be small, focused, and predictable. If a function does more than one conceptual task, it should be split.

Consistency matters. Formatting, structure, and architectural patterns should remain uniform across the codebase. Automated tools can enforce standards, but discipline builds quality.

Refactoring is not optional maintenance; it is part of development. As systems grow, assumptions change. Clean teams revisit old code and improve it before it becomes toxic.

Good developers make code work. Great developers make code understandable.`,
      excerpt:
        "Core principles that make your code readable, testable, and scalable.",
      authorEmail: kratin.email,
      authorName: kratin.name,
      categoryId: programmingCategory.id,
      categoryName: programmingCategory.name,
      likes: [harshit.email],
      createdAt: new Date("2024-02-12").toISOString(),
      // updatedAt: new Date("2024-02-12").toISOString(),
    },

    // PRODUCTIVITY — Richa
    {
      id: generateId(),
      title: "How to Stay Productive Without Burning Out",
      content: `Productivity is often misunderstood as doing more. In reality, it is about doing what matters, consistently, without exhausting your cognitive and emotional resources.

Sustainable productivity starts with energy management. Sleep, hydration, and physical activity have a greater impact on output than any productivity hack. Deep work sessions, protected from notifications and context switching, outperform long working hours.

Planning should be outcome-oriented, not task-heavy. Each day should be anchored around one or two meaningful objectives. Everything else is secondary.

Rest is not the enemy of productivity. It is its foundation. Strategic breaks, reflection time, and digital boundaries prevent burnout and support long-term performance.

High performers do not work endlessly. They work deliberately.`,
      excerpt:
        "A realistic approach to high performance without chronic mental fatigue.",
      authorEmail: richa.email,
      authorName: richa.name,
      categoryId: productivityCategory.id,
      categoryName: productivityCategory.name,
      likes: [kratin.email],
      createdAt: new Date("2024-02-15").toISOString(),
      // updatedAt: new Date("2024-02-15").toISOString(),
    },

    // CAREER — Harshit
    {
      id: generateId(),
      title: "How to Build a Strong Software Engineering Career",
      content: `A strong engineering career is not built on frameworks alone. It is built on problem-solving ability, learning velocity, and professional reliability.

Technical depth should be paired with communication skill. Engineers who can translate complexity into clarity amplify their impact across teams. Writing, documentation, and design discussions are career accelerators.

Career growth also requires ownership. Waiting for tasks limits development. Proactively identifying problems and proposing solutions builds trust and visibility.

Mentorship, both giving and receiving, compounds learning. The best engineers actively seek feedback and continuously refine their craft.

Long-term careers are built by consistency, not by occasional bursts of effort.`,
      excerpt:
        "Practical career strategies for long-term growth in the software industry.",
      authorEmail: harshit.email,
      authorName: harshit.name,
      categoryId: careerCategory.id,
      categoryName: careerCategory.name,
      likes: [kratin.email],
      createdAt: new Date("2024-02-18").toISOString(),
      // updatedAt: new Date("2024-02-18").toISOString(),
    },

    // TRAVEL — Kratin
    {
      id: generateId(),
      title: "Solo Travel: What It Teaches You About Life",
      content: `Solo travel removes the comfort of familiarity. It forces you to make decisions, solve problems, and navigate uncertainty independently.

Traveling alone sharpens observation. You become more aware of environments, cultures, and your own internal reactions. Small challenges build confidence and emotional resilience.

It also creates space for reflection. Without constant conversation, your thoughts become clearer. Many travelers report gaining new perspectives on ambition, relationships, and identity.

Solo travel is not about escaping life. It is about understanding it from a different vantage point.

Every unfamiliar street teaches something familiar about yourself.`,
      excerpt:
        "Lessons learned from stepping outside comfort zones and into the unknown.",
      authorEmail: kratin.email,
      authorName: kratin.name,
      categoryId: travelCategory.id,
      categoryName: travelCategory.name,
      likes: [richa.email, harshit.email],
      createdAt: new Date("2024-02-20").toISOString(),
      // updatedAt: new Date("2024-02-20").toISOString(),
    },
  ];
};

export const seedData = () => {
  // Initialize storage structure
  initStorage();

  // Check if data already exists
  if (!isStorageEmpty()) {
    console.log("Data already seeded, skipping...");
    return false;
  }

  console.log("Seeding initial data...");

  try {
    const categories = seedCategories();
    setCategories(categories);
    console.log(`Seeded ${categories.length} categories`);

    const users = seedUsers();
    setUsers(users);
    console.log(`Seeded ${users.length} users`);

    const blogs = seedBlogs(users, categories);
    setBlogs(blogs);
    console.log(`Seeded ${blogs.length} blogs`);

    console.log("Seeding completed successfully!");
    return true;
  } catch (error) {
    console.error("Error seeding data:", error);
    return false;
  }
};

export default seedData;
