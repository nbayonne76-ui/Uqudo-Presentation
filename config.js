window.CONFIG = {

  client: {
    name:    "Uqudo",
    initials:"UQ",
    tagline: "Identity · Fraud · Compliance · SaaS · MEA · 156+ passport types · 300M+ companies",
    colors: {
      primary:   "#0A0E27",
      secondary: "#4F46E5",
      accent:    "#06B6D4"
    }
  },

  cover: {
    headline:  "A Pre-Sales Intelligence Bot for Uqudo",
    sub:       "Compressing enterprise sales cycles through instant AI-powered qualification: prospects self-serve in real time, arrive briefed, and convert faster",
    chips: [
      { label: "🎯 Instant prospect qualification"         },
      { label: "🌍 22-country compliance navigator"        },
      { label: "⚡ Technical pre-sales answers 24/7"       },
      { label: "📊 Live ROI calculator"                    }
    ],
    presenter: "Nicolas Bayonne",
    role:      "AI Developer & Chatbot Architect",
    contact:   "nbayonne76@gmail.com",
    date:      "March 2026"
  },

  problems: [
    {
      icon:  "⏳",
      title: "Enterprise prospects can't self-qualify without a sales rep",
      desc:  "A bank CTO in Saudi Arabia lands on uqudo.com. They need eKYC + AML screening. They read 4 product pages, fill a demo form, and wait 24 to 48 hours for a response. By then, they may have already booked a call with Jumio or Sumsub. The friction between intent and qualification is where deals are lost, before your team even enters the picture."
    },
    {
      icon:  "🌍",
      title: "Country-specific compliance questions go unanswered instantly",
      desc:  "Is uqudo certified for SAMA in Saudi Arabia? Does it cover NFC chip reading for UAE national IDs? Is on-premise deployment available for GCC data residency requirements? These are the first questions every enterprise prospect asks. Right now, the only answer is 'book a demo and we'll explain.' A bot answers in seconds."
    },
    {
      icon:  "📞",
      title: "Every discovery call starts from zero",
      desc:  "Your sales team joins a call with no context: which product does the prospect need? What country are they in? What's their monthly verification volume? What's their stack? These 15 minutes of qualification happen on every single call, compressing a process that a bot could handle before the meeting even starts."
    }
  ],

  features: [
    {
      icon:  "🎯",
      title: "Instant sector + geography qualification",
      desc:  "The bot identifies the prospect's sector (bank, fintech, crypto, government, marketplace), geography, and use case (eKYC, KYB, biometric auth, fraud, AML) in under 2 minutes. It then recommends the exact uqudo product stack that fits, with the relevant regulatory context for their market. Prospects arrive at demos knowing which product they need.",
      tag:   "Core feature"
    },
    {
      icon:  "🌍",
      title: "22-country compliance navigator",
      desc:  "The bot knows the regulatory requirements of every market uqudo covers: SAMA (KSA), CBUAE (UAE), CBK (Kuwait), CBE (Egypt), CBN (Nigeria), FATF standards, and more. A prospect from Egypt asks 'are you compliant for Egyptian KYC?' The bot answers with the specific requirements met, documents supported, and government database integrations available. No competitor does this.",
      tag:   "Core feature"
    },
    {
      icon:  "📊",
      title: "ROI calculator + technical pre-sales answers",
      desc:  "The bot calculates the prospect's estimated ROI based on their monthly verification volume, current manual review cost, and fraud exposure, showing the business case before the first call. It also answers developer questions: SDK support, API response times, on-premise options, FIDO2 compliance, integration effort. Sales team joins a call with a fully briefed, pre-qualified lead.",
      tag:   "High-value layer"
    }
  ],

  chatbot: {
    name:    "Uqudo Pre-Sales Assistant",
    welcome: "Welcome to Uqudo. 🔐\nI'm your AI pre-sales assistant. I'll help you find the right solution for your identity, fraud, or compliance needs in under 2 minutes.\n\nLet's start. What best describes you?",
    steps: {
      start: {
        opts: [
          ["🏦 Bank or financial institution",        "sector_bank"],
          ["💳 Fintech or neobank",                   "sector_fintech"],
          ["₿ Crypto exchange or Web3",               "sector_crypto"],
          ["🏛️ Government or public sector",         "sector_gov"],
          ["🛒 Marketplace or platform",              "sector_marketplace"],
          ["🌍 Compliance & regulatory question",     "compliance"],
          ["⚙️ Technical / integration question",    "technical"],
          ["📊 Estimate my ROI",                      "roi"]
        ]
      },

      /* ── BANK ── */
      sector_bank: {
        fan: "🏦 Bank or financial institution",
        bot: "Great. Banks typically need a combination of our products. What's your primary challenge right now?",
        opts: [
          ["🪪 Digital customer onboarding (eKYC)",   "bank_kyc"],
          ["🏢 Business account opening (KYB)",        "bank_kyb"],
          ["🚨 Fraud prevention & device intelligence","bank_fraud"],
          ["📋 AML screening & compliance",            "bank_aml"],
          ["← Back",                                   "start"]
        ]
      },
      bank_kyc: {
        fan: "🪪 Digital onboarding (eKYC)",
        bot: "uqudo's eKYC covers the full identity verification stack for banks:\n\n• AI document parsing at 99.5% accuracy (passports, national IDs, driver's licenses)\n• NFC chip reading for e-passports and national IDs\n• Government database cross-check in UAE, KSA, Egypt and more\n• Facial recognition + liveness detection (active or passive)\n• Full onboarding flow under 30 seconds\n\nWhich country are you operating in? I'll confirm the specific documents and government checks available.",
        opts: [
          ["🌍 Check my country's coverage", "compliance"],
          ["📊 Estimate ROI",                "roi"],
          ["📅 Book a demo",                 "book_demo"],
          ["← Back",                         "start"]
        ]
      },
      bank_kyb: {
        fan: "🏢 Business account opening (KYB)",
        bot: "uqudo's KYB automates business verification end to end:\n\n• Data on 300+ million companies worldwide\n• Retrieves registration details, directors, and ultimate beneficial owners automatically\n• AI document scanning for trade licenses and corporate certificates\n• Integrated KYC checks on individual business principals\n\nThis is particularly powerful for banks onboarding SMEs or corporate clients at scale. What's your monthly volume of business verifications?",
        opts: [
          ["📊 Estimate ROI", "roi"],
          ["📅 Book a demo",  "book_demo"],
          ["← Back",          "start"]
        ]
      },
      bank_fraud: {
        fan: "🚨 Fraud prevention",
        bot: "uqudo's Device Intelligence module is one of its strongest differentiators:\n\n• 99.9%+ device recognition accuracy. Persistent across resets and spoofing attempts\n• Detects emulator usage, app cloners, rooted devices, GPS spoofing, VPN/Tor\n• Flags when the same ID document is reused across multiple accounts\n• 30+ real-time risk signals scored before any transaction is approved\n\nThis is especially valuable for banks facing account takeover, new account fraud, or bonus abuse. What type of fraud are you currently experiencing?",
        opts: [
          ["📅 Book a demo", "book_demo"],
          ["← Back",         "start"]
        ]
      },
      bank_aml: {
        fan: "📋 AML screening",
        bot: "uqudo's compliance layer includes:\n\n• Sanctions list screening (OFAC, EU, UN and local lists)\n• PEP (Politically Exposed Persons) database checks\n• Adverse media monitoring\n• Ongoing re-screening. Not just at onboarding, but continuously\n• Automated alerts when a customer's risk status changes post-onboarding\n\nFor banks in MEA, ongoing monitoring is a regulatory requirement in most jurisdictions. uqudo automates this entirely. Which country's regulatory framework applies to you?",
        opts: [
          ["🌍 Check compliance", "compliance"],
          ["📅 Book a demo",      "book_demo"],
          ["← Back",              "start"]
        ]
      },

      /* ── FINTECH ── */
      sector_fintech: {
        fan: "💳 Fintech or neobank",
        bot: "Fintechs and neobanks typically need fast, frictionless onboarding without sacrificing compliance. What's your main priority?",
        opts: [
          ["⚡ Speed of onboarding (under 30s)",       "fintech_speed"],
          ["🛡️ Reducing fraud at account creation",    "fintech_fraud"],
          ["📋 Regulatory compliance (KYC/AML)",       "bank_aml"],
          ["← Back",                                   "start"]
        ]
      },
      fintech_speed: {
        fan: "⚡ Speed of onboarding",
        bot: "uqudo's success-based pricing model is built for fintechs: you only pay for successfully verified users. No charge for failed attempts or extra verification steps.\n\nThe onboarding flow (document scan → facial match → liveness check → government verification) completes in under 30 seconds on mobile. It integrates via SDK (iOS, Android, React Native, Web) or REST API, typically live in days, not weeks.\n\nWhat's your expected monthly verification volume?",
        opts: [
          ["📊 Estimate ROI", "roi"],
          ["📅 Book a demo",  "book_demo"],
          ["← Back",          "start"]
        ]
      },
      fintech_fraud: {
        fan: "🛡️ Reducing fraud",
        bot: "For fintechs, new account fraud and bonus abuse are the most common attack vectors. uqudo addresses both:\n\n• ID reuse detection: flags if the same document appears across multiple signup attempts\n• Device fingerprinting: detects device farms, app cloners, emulators used to create fake accounts\n• Liveness detection: blocks deepfake selfies and presentation attacks at onboarding\n\nAll checks happen in real time within the onboarding flow. No manual review needed.",
        opts: [
          ["📅 Book a demo", "book_demo"],
          ["← Back",         "start"]
        ]
      },

      /* ── CRYPTO ── */
      sector_crypto: {
        fan: "₿ Crypto exchange or Web3",
        bot: "Crypto exchanges face some of the most stringent KYC requirements globally, especially in MEA, where regulators are actively tightening rules. uqudo covers:\n\n• Full eKYC flow for individual user onboarding (FATF Travel Rule compliance)\n• High-risk jurisdiction flagging\n• Ongoing AML monitoring and transaction pattern analysis\n• Biometric authentication for high-value transaction approval\n\nWhich jurisdiction are you regulated under?",
        opts: [
          ["🌍 Check compliance", "compliance"],
          ["📅 Book a demo",      "book_demo"],
          ["← Back",              "start"]
        ]
      },

      /* ── GOV ── */
      sector_gov: {
        fan: "🏛️ Government or public sector",
        bot: "uqudo works with government entities on digital identity infrastructure, including e-government onboarding, citizen identity verification, and cross-agency identity reuse. Key capabilities:\n\n• NFC chip reading for government-issued e-documents\n• Direct integration with national ID databases in key MEA countries\n• On-premise or private cloud deployment for full data sovereignty\n• FIDO2-compliant biometric authentication for government portals\n\nWhich country and use case are you evaluating?",
        opts: [
          ["🌍 Check compliance", "compliance"],
          ["⚙️ On-premise options","technical"],
          ["📅 Book a demo",      "book_demo"],
          ["← Back",              "start"]
        ]
      },

      /* ── MARKETPLACE ── */
      sector_marketplace: {
        fan: "🛒 Marketplace or platform",
        bot: "Marketplaces and platforms need to verify both individual users and businesses, often at scale. uqudo's combined eKYC + KYB approach lets you verify sellers, service providers, or business partners in the same flow:\n\n• Individual identity verification for users/sellers\n• Business verification for corporate accounts (300M+ companies)\n• Fraud prevention to block fake accounts and bonus abuse\n• Biometric re-authentication for high-value transactions\n\nWhat's your primary market and user type?",
        opts: [
          ["📊 Estimate ROI", "roi"],
          ["📅 Book a demo",  "book_demo"],
          ["← Back",          "start"]
        ]
      },

      /* ── COMPLIANCE ── */
      compliance: {
        fan: "🌍 Compliance & regulatory question",
        bot: "Which country or regulatory framework are you asking about?",
        opts: [
          ["🇸🇦 Saudi Arabia (SAMA)",                 "comp_ksa"],
          ["🇦🇪 UAE (CBUAE)",                          "comp_uae"],
          ["🇪🇬 Egypt (CBE)",                          "comp_egypt"],
          ["🇳🇬 Nigeria (CBN)",                        "comp_nigeria"],
          ["🌐 FATF / International standards",        "comp_fatf"],
          ["← Back",                                   "start"]
        ]
      },
      comp_ksa: {
        fan: "🇸🇦 Saudi Arabia",
        bot: "For Saudi Arabia (SAMA regulations):\n\n✅ uqudo covers Saudi national ID (Iqama + Citizen ID) with NFC chip reading\n✅ Cross-check against Absher / national database for real-time ID validation\n✅ AML screening aligned with SAMA's AML/CFT framework\n✅ On-premise deployment available for KSA data residency requirements\n✅ Arabic language support in the onboarding flow\n\nuqudo is one of the few international platforms with direct government database integration in KSA. Want to see the technical spec?",
        opts: [
          ["⚙️ Technical details", "technical"],
          ["📅 Book a demo",       "book_demo"],
          ["← Back",               "start"]
        ]
      },
      comp_uae: {
        fan: "🇦🇪 UAE",
        bot: "For the UAE (CBUAE regulations):\n\n✅ UAE national ID (Emirates ID) with NFC chip reading\n✅ UAE passport and residency visa verification\n✅ Integration with UAE PASS for government identity verification\n✅ CBUAE-aligned KYC and AML requirements covered\n✅ On-premise and UAE cloud hosting available\n✅ Arabic + English bilingual onboarding flow\n\nThe UAE is one of uqudo's strongest markets. Full regulatory alignment and government database access.",
        opts: [
          ["📅 Book a demo", "book_demo"],
          ["← Back",         "start"]
        ]
      },
      comp_egypt: {
        fan: "🇪🇬 Egypt",
        bot: "For Egypt (Central Bank of Egypt regulations):\n\n✅ Egyptian National ID verification with AI document parsing\n✅ CBE-aligned eKYC requirements for digital banking onboarding\n✅ Arabic language support\n✅ AML screening covering Egyptian PEP and sanctions lists\n\nEgypt is one of the fastest-growing digital banking markets in MEA. Uqudo is actively expanding coverage here.",
        opts: [
          ["📅 Book a demo", "book_demo"],
          ["← Back",         "start"]
        ]
      },
      comp_nigeria: {
        fan: "🇳🇬 Nigeria",
        bot: "For Nigeria (CBN regulations):\n\n✅ Nigerian NIN (National Identification Number) verification\n✅ BVN (Bank Verification Number) integration\n✅ CBN KYC tier compliance (Tier 1/2/3 accounts)\n✅ AML screening for NFIU requirements\n\nNigeria is one of Africa's largest fintech markets. Uqudo provides the identity infrastructure to onboard users compliantly at scale.",
        opts: [
          ["📅 Book a demo", "book_demo"],
          ["← Back",         "start"]
        ]
      },
      comp_fatf: {
        fan: "🌐 FATF / International",
        bot: "uqudo is designed around FATF's 40 Recommendations for AML/CFT compliance:\n\n✅ Customer Due Diligence (CDD): full identity verification at onboarding\n✅ Enhanced Due Diligence (EDD): additional checks for high-risk profiles\n✅ Ongoing monitoring: continuous re-screening post-onboarding\n✅ Travel Rule: transaction data sharing for crypto/VASP compliance\n✅ Sanctions + PEP screening across global watchlists\n\nFor businesses operating across multiple FATF member countries, uqudo provides a single platform that meets requirements across all jurisdictions.",
        opts: [
          ["📅 Book a demo", "book_demo"],
          ["← Back",         "start"]
        ]
      },

      /* ── TECHNICAL ── */
      technical: {
        fan: "⚙️ Technical / integration question",
        bot: "What do you need to know?",
        opts: [
          ["📱 SDK & mobile integration",              "tech_sdk"],
          ["🔌 REST API & web integration",            "tech_api"],
          ["🏗️ On-premise / private cloud",           "tech_onprem"],
          ["🔐 FIDO2 & biometric auth",               "tech_fido"],
          ["← Back",                                   "start"]
        ]
      },
      tech_sdk: {
        fan: "📱 SDK & mobile",
        bot: "uqudo provides native SDKs for:\n\n• iOS (Swift)\n• Android (Kotlin/Java)\n• React Native\n• Flutter\n• Web (JavaScript)\n\nThe SDK handles the full verification flow: document capture, NFC reading, facial recognition, liveness check. Integration time is typically 1 to 3 days for a standard flow. The UI is fully customizable to match your brand. Sandbox environment available for testing before go-live.",
        opts: [["← Back", "start"]]
      },
      tech_api: {
        fan: "🔌 REST API",
        bot: "uqudo exposes a comprehensive REST API that lets you:\n\n• Trigger individual verification steps (document check, face match, AML screening) independently\n• Build a fully custom user experience on top of uqudo's verification engine\n• Receive webhook callbacks on verification completion or status change\n• Query verification results and audit logs programmatically\n\nAPI documentation, Postman collection, and sandbox credentials available immediately after signing up.",
        opts: [["← Back", "start"]]
      },
      tech_onprem: {
        fan: "🏗️ On-premise / private cloud",
        bot: "uqudo supports flexible deployment for clients with strict data residency requirements:\n\n• Cloud SaaS (default, fastest time to market)\n• Private cloud deployment within your own cloud environment\n• On-premise deployment on your infrastructure\n\nThis is particularly relevant for GCC government entities, banks under SAMA/CBUAE data localization rules, and large enterprises with internal data governance policies. Full support and SLA available for all deployment modes.",
        opts: [["← Back", "start"]]
      },
      tech_fido: {
        fan: "🔐 FIDO2 & biometric auth",
        bot: "uqudo's biometric authentication layer is FIDO2-compliant, enabling:\n\n• Passwordless login via facial recognition (selfie = login)\n• Biometric account recovery (reset password via face verification)\n• Step-up authentication for high-value transactions\n• Passive liveness detection for continuous session verification\n• Multi-factor: device recognition + biometric combined\n\nThis significantly improves both security (no stolen passwords) and UX (no 2FA codes). Integrates via SDK or API into any existing app.",
        opts: [["← Back", "start"]]
      },

      /* ── ROI ── */
      roi: {
        fan: "📊 Estimate my ROI",
        bot: "Let me calculate your potential ROI with uqudo. What's your approximate monthly volume of new user verifications?",
        opts: [
          ["< 1,000 verifications/month",             "roi_small"],
          ["1,000 to 10,000 verifications/month",     "roi_mid"],
          ["10,000 to 100,000 verifications/month",   "roi_large"],
          ["> 100,000 verifications/month",           "roi_enterprise"],
          ["← Back",                                   "start"]
        ]
      },
      roi_small: {
        fan: "< 1,000/month",
        bot: "At under 1,000 verifications/month, the primary ROI drivers for you are:\n\n• Eliminating manual document review (typically 3 to 8 min per case at $15 to $25/hr)\n• Reducing fraud losses from fake accounts\n• Accelerating onboarding speed (30s vs 24 to 48h manual) = lower drop-off\n\nEstimated annual savings: $15,000 to $40,000 depending on current manual review process. uqudo's success-based pricing means cost scales only with verified users. No fixed overhead.",
        opts: [["📅 Book a demo", "book_demo"], ["← Back", "start"]]
      },
      roi_mid: {
        fan: "1,000 to 10,000/month",
        bot: "At 1,000 to 10,000 verifications/month:\n\n• Manual review elimination: 50 to 500 hours/month saved\n• Fraud prevention: typically 0.5 to 2% of new accounts are fraudulent at this scale\n• Onboarding drop-off reduction: automated flow reduces abandonment by 35 to 50%\n\nEstimated annual value: $80,000 to $300,000 in operational savings + fraud prevention. The ROI typically breaks even in the first 2 to 3 months of deployment.",
        opts: [["📅 Book a demo", "book_demo"], ["← Back", "start"]]
      },
      roi_large: {
        fan: "10,000 to 100,000/month",
        bot: "At this scale, uqudo's impact becomes transformational:\n\n• 10,000 to 100,000 manual reviews eliminated monthly\n• Fraud ring detection (ID reuse across accounts) can recover 1 to 3% of revenue\n• Device intelligence blocks bot farms and synthetic identity attacks\n• Compliance automation eliminates a significant portion of your compliance team's repetitive work\n\nAt 50,000 verifications/month, clients typically see $500k to $2M in annual value from fraud reduction + operational savings combined. I'd recommend a dedicated ROI workshop with our team.",
        opts: [["📅 Book a demo", "book_demo"], ["← Back", "start"]]
      },
      roi_enterprise: {
        fan: "> 100,000/month",
        bot: "At enterprise scale (100,000+ verifications/month), this is a strategic infrastructure decision:\n\n• Full API integration into your onboarding pipeline\n• Custom SLA and dedicated support team\n• On-premise or private cloud deployment options\n• Custom pricing model aligned with your growth trajectory\n\nAt this volume, the ROI analysis requires a dedicated session with our enterprise team. I'll flag your profile as high-priority. Expect a response within 4 hours.",
        opts: [["📅 Book a demo", "book_demo"], ["← Back", "start"]]
      },

      /* ── BOOK DEMO ── */
      book_demo: {
        fan: "📅 Book a demo",
        bot: "Perfect. To make sure you speak with the right specialist, let me confirm a few things:\n\n1. What sector are you in?\n2. Which country / region?\n3. What's your primary use case?\n\nShare these details and I'll route you to the most relevant person on the uqudo team. They will arrive fully briefed on your profile. Expected response: within 2 hours.",
        opts: [["← Back", "start"]]
      }
    }
  },

  testimonial: {
    show: true,
    client: { name: "Innatural Shop", initials: "IS", sector: "Natural beauty e-commerce · Hair care · Bilingual FR/AR · Production" },
    built: [
      { icon: "🤖", title: "End-to-end custom chatbot, production-grade",  desc: "Product recommendations by hair type, 24/7 customer support, order tracking, built on Claude AI and deployed live on the existing website" },
      { icon: "🌍", title: "Bilingual FR/Arabic with adaptive RTL interface", desc: "Full right-to-left layout switching, integrated in 1 line of code on the client's site. No website rebuild." }
    ],
    quote:   "A production bot, built from scratch, capable of recommending products based on user profile, qualifying leads and handling customer support, without any infrastructure change on the client side.",
    contact: "Live production reference · Innatural Shop",
    note:    "Source code available · Live demo on request"
  },

  cta: {
    title:    "Let's build this",
    subtitle: "I can design, build and deploy this pre-sales bot for uqudo, from architecture to production, in 4 weeks",
    chips: [
      "⚡ Full-stack bot development",
      "🔗 API integration with your existing stack",
      "🌍 Multi-country compliance knowledge base",
      "🚀 Production-ready in 4 weeks"
    ],
    contact: {
      name:   "Nicolas Bayonne",
      role:   "AI Developer & Chatbot Architect",
      email:  "nbayonne76@gmail.com",
      email2: "contact@happi-bot.com",
      site:   "happi-bot.com"
    }
  }

};
