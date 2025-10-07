import { useState, useEffect } from 'react';

export const usePortfolioData = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const portfolioData = {
       personalInfo: {
    name: "Somanath Kambar",
    title: "Senior Software Engineer (Android & Web)",
    experience: "7+ years",
    phone: "+91 8861930437",
    email: "somu23.sk@gmail.com",
    availability: "Available for Full-time, Part-time & Freelance projects",
    location: "India",
    rate: "$25-40/hour",
    employmentTypes: ["Full-time", "Part-time", "Freelance", "Contract"],
    stats: {
      experience: "7+",
      projects: "10+", 
      apps: "10+",
      mentored: "4+"
    },
    objective: "Senior Android Developer with 7+ years of experience specializing in Kotlin, Java, and modern Android development. Delivered 10+ projects and 10+ production apps with clean architecture and best practices.",
    social: {
      linkedin: "https://linkedin.com/in/somanath-kambar-b90537126",
      github: "https://github.com/SomanathKambar",
      medium: "https://medium.com/@kambarsomanath",
      stackoverflow: "https://stackoverflow.com/users/16511914/somanath-kambar",
    }
  },
       services: [ // New section for freelance services
        {
          title: "Android App Development",
          description: "Custom Android applications using Kotlin, Java, and modern Android SDK",
          icon: "📱",
          features: ["Native Development", "Material Design", "Performance Optimization"]
        },
        {
          title: "App Migration & Modernization",
          description: "Upgrade legacy apps to modern architecture and latest Android standards",
          icon: "🔄",
          features: ["Java to Kotlin", "Architecture Upgrade", "SDK Updates"]
        },
        {
          title: "UI/UX Implementation",
          description: "Pixel-perfect implementation of designs with smooth animations",
          icon: "🎨",
          features: ["Jetpack Compose", "Custom Views", "Animation"]
        },
        {
          title: "API Integration & Backend",
          description: "Seamless integration with REST APIs, GraphQL, and backend services",
          icon: "🔗",
          features: ["REST APIs", "gRPC", "WebSocket", "Firebase"]
        }
      ],
      skills: {
        programming: ["Kotlin", "Java", "OOP", "Coroutines", "Flows", "React", "React Native"],
        android: ["Mobile", "Android TV (AOSP)", "Tablet", "POS", "Web"],
        jetpack: ["Compose", "ViewModel", "LiveData", "DataBinding", "Room", "Navigation", "Paging", "WorkManager", "Leanback"],
        monetization: ["In-App Purchases", "Google AdMob"],
        integration: ["REST API", "JSON/XML Parsing", "gRPC", "KTOR", "DeepLinking"],
        architecture: ["MVVM", "Clean Architecture", "Dependency Injection (Dagger Hilt)"],
        bestPractices: ["SOLID", "Design Patterns", "Clean Code"],
        networking: ["Retrofit", "Volley", "GSON", "Moshi"],
        versionControl: ["Git", "GitHub", "GitLab", "Azure DevOps", "JIRA"],
        debugging: ["Profiling", "LeakCanary", "ANRWatchDog"],
        media: ["ExoPlayer", "Audio & Video Playback"],
        tools: ["Android SDK", "Firebase", "Gradle", "Jenkins", "Postman", "Charles"],
        mentorship: ["Coaching", "Continuous Learning", "Cross-team Collaboration"]
      },
      experience: [
        {
          company: "Ovyo Tech Services",
          period: "FEB 2025 – Present",
          type: "Freelance Contract",
          project: "ReachTV",
          description: "Ad Integration Using GoogleIMA + BrightCove, Parsing Vast Tags to get AdCreative to schedule download using XMLPull Parser",
          responsibilities: [
            "Developed features for Airport TV application which runs on Android STB"
          ],
          tech: [
            "Android SDK", "Kotlin", "BrightCove Player", "ExoPlayer", "Google IMA",
            "WorkManager", "Room DB", "Retrofit", "Moshi", "OkHTTP", "Xml Pull Parser"
          ],
          architecture: "MVVM Architecture"
        },
        {
          company: "OneHubPOS",
          period: "April 2024 - Jan 2025",
          role: "Android Developer",
          projects: ["OneHubPOS Restaurant", "Loomis POS Retail"],
          responsibilities: [
            "Developed features for multiple POS systems (Retail, Restaurant, PickList)",
            "Integrated gRPC, Ktor for multi-terminal synchronization",
            "Implemented PAX, Dejavoo, and CardConnect for POS payment API integration",
            "Led technical discussions and mentored junior developers"
          ],
          tech: ["Kotlin", "gRPC", "KTOR", "Jetpack Compose", "Retrofit", "Modular Architecture", "Dagger Hilt"]
        },
        {
          company: "Totality Corp India",
          period: "January 2023 - April 2024",
          role: "Software Development Engineer (Android Developer)",
          project: "NeverAI",
          responsibilities: [
            "Led AI Tool Suite development for AI-based image enhancement and face swapping",
            "Integrated Jetpack Compose for UI, MLKit for face detection",
            "Implemented TensorFlow Lite for image matching and CameraX for capturing",
            "Integrated Google In-App Purchases for subscription models"
          ],
          tech: ["Kotlin", "Jetpack Compose", "Retrofit", "Firebase", "MLKit", "TensorFlow Lite", "Coroutines", "Room"]
        },
        {
          company: "News Corp India",
          period: "November 2021 - January 2023",
          role: "Mobile Application Developer (Android Developer)",
          projects: ["The Sun", "news.com.au"],
          responsibilities: [
            "Developed subscription-based news apps using TDD and Clean Architecture",
            "Integrated Auth0 for authentication and Algolia for search functionality",
            "Worked on monetization features and media playback using Bright-Cove SDK"
          ],
          tech: ["Kotlin", "Java", "Retrofit", "Firebase", "GSON", "Moshi", "Auth0", "Algolia", "Taboola", "BrightCove", "Dagger"]
        },
        {
          company: "Jio Platforms Ltd.",
          period: "October 2018 - November 2021",
          role: "Software Engineer (Android Developer)",
          project: "JioPages (JioBrowser)",
          responsibilities: [
            "Developed 70% of UI components for India's first Android TV browser",
            "Implemented multi-language support and designed Search Suggestions feature",
            "Contributed to app stability and real-time user feedback integration"
          ],
          tech: ["Leanback", "Volley", "Glide", "RxJava", "Dagger 2", "Firebase", "ExoPlayer"]
        }
      ],
      education: {
        degree: "Bachelor of Engineering in Computer Science and Engineering",
        university: "VTU, Belgaum",
        period: "August 2013 - May 2017",
        details: "Graduated with focus on software engineering and computer science fundamentals"
      },
      projects: [
        {
          name: "HealthMonitorApp",
          description: "Comprehensive health monitoring application for tracking vital signs, hydration, and family health profiles with AI-powered recommendations",
          tech: ["Kotlin",  "Jetpack Compose", "MVVM Architecture",   "Room Database",   "Firebase Firestore",  "WorkManager",
                  "Hilt Dependency Injection",    "DataStore",     "Material Design 3" ],
          github: "https://github.com/SomanathKambar/HealthMonitorApp",
          demo:""
        },
        {
          name: "VideoPlayer",
          description: "Custom video player implementation with advanced controls and streaming capabilities",
          tech: ["Kotlin", "ExoPlayer", "Media3", "Custom UI Components"],
          github: "https://github.com/SomanathKambar/VideoPlayer",
           demo:""
        },
        {
          name: "ChatDemoUsingGetStream",
          description: "Real-time chat application demo with modern UI and real-time messaging features",
          tech: ["Kotlin", "GetStream", "WebSockets", "Material Design"],
          github: "https://github.com/SomanathKambar/DemoChatApp",
           demo:""
        },
        {
          name: "KotlinSpringBoot",
          description: "Backend development with Kotlin and Spring Boot demonstrating modern server-side development",
          tech: ["Kotlin", "Spring Boot", "REST API", "JPA", "Security"],
          github: "https://github.com/SomanathKambar/first_spring_boot_kt",
           demo:""
        },
      ],
      upskilling: [
        "React Native for Cross-Platform Mobile App Development",
        "SpringBoot With Kotlin",
        "KMM (Kotlin Multiplatform Mobile)"
      ],
      certifications: [
        "React Native for Cross-Platform Mobile App Development"
      ]
    };

    setData(portfolioData);
  }, []);

  return data;
};