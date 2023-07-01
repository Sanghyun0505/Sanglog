const CONFIG = {
  // profile setting (required)
  profile: {
    name: "Sanghyun",
    image: "/avatar.svg", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "Frontend-Developer",
    bio: "만족하지 말고 한번 더 생각하기",
    email: "sanghyun9467@gmail.com",
    linkedin: "sanghyun0505",
    github: "Sanghyun0505",
    instagram: "gustkdqkrr",
  },
  projects: [
    {
      name: `sanglog-repo`,
      href: "https://github.com/Sanghyun0505/Sanglog",
    },
    {
      name: `MenToMen-V2`,
      href: "https://github.com/B1ND-7th/MenToMen_Web_V2",
    },
    {
      name: `Rolling`,
      href: "https://github.com/StuBee2/Rolling_FrontEnd",
    },
  ],
  // blog setting (required)
  blog: {
    title: "sanghyun's blog",
    description: "welcome to sanglog!",
    theme: "light", // ['light', 'dark', 'auto']
  },

  // CONFIG configration (required)
  link: "https://sanglog.vercel.app/",
  since: 2022, // If leave this empty, current year will be used.
  lang: "en-US", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash
  seo: {
    keywords: ["Blog", "Website", "Notion"],
  },

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: "Sanghyun0505/Sanglog",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
}

module.exports = { CONFIG }
