// Privacy Policy and Terms & Conditions, copied word for word from her current site:
//   https://www.zenjuweddingsnevents.com/copy-of-terms-and-conditions (Privacy Policy)
//   https://www.zenjuweddingsnevents.com/terms-and-conditions
// Email addresses and web addresses in the text become links automatically when rendered.

export type LegalItem = string | { lead?: string; text?: string; items?: string[] };
export type LegalBlock = { p: string; lead?: string } | { list: LegalItem[] };
export type LegalSection = { id: string; title: string; blocks: LegalBlock[] };
export type LegalDoc = {
  title: string;
  description: string;
  updated: string;
  intro: LegalBlock[];
  sections: LegalSection[];
};

export const privacyPolicy: LegalDoc = {
  title: "Privacy Policy",
  description: "How Zenju Weddings and Events of Hawaii, LLC collects, uses and safeguards your personal information.",
  updated: "October 7, 2025",
  intro: [
    {
      p: "Zenju Weddings and Events of Hawaii, LLC (“Company,” “we,” “our,” or “us”) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information when you visit our website or engage with our services.",
    },
  ],
  sections: [
    {
      id: "information-we-collect",
      title: "Information We Collect",
      blocks: [
        { p: "We collect information from clients and potential clients when you:" },
        { list: ["Submit an inquiry about our services", "Purchase one of our marketing campaigns"] },
        { p: "The types of information we may collect include:" },
        {
          list: [
            {
              lead: "Personal Information:",
              text: "Name, business name, email address, mailing address, phone number, and payment details (such as credit card information).",
            },
            { lead: "Technical Information:", text: "IP addresses, cookie identifiers, and website activity." },
          ],
        },
        { lead: "Anonymous Visits:", p: "You may visit our site anonymously." },
        {
          lead: "Cookies and Retargeting:",
          p: "We may collect website activity data, IP addresses, and cookie identifiers to:",
        },
        {
          list: [
            "Retarget our ads to better show relevant Company services across platforms (e.g., display networks, social media, search engines).",
            "Improve the relevance and effectiveness of our advertising campaigns.",
          ],
        },
        {
          p: "This information may be shared with third-party partners, including AdRoll, Facebook, Instagram, Google, and others for advertising purposes.",
        },
        {
          lead: "Opt-Out Options:",
          p: "You can opt out of our retargeting campaigns and data collection at any of the following links:",
        },
        {
          list: [
            { lead: "DAA:", text: "https://optout.aboutads.info" },
            { lead: "NAI:", text: "https://optout.networkadvertising.org" },
            { lead: "EDAA (Europe Only):", text: "https://youronlinechoices.eu" },
            "Or email us at yanickew@zenjuweddingsnevents.com to request data deletion.",
          ],
        },
        { p: "We will never sell your personal information." },
      ],
    },
    {
      id: "how-we-use-your-information",
      title: "How We Use Your Information",
      blocks: [
        { p: "We use the information we collect for the following purposes:" },
        {
          list: [
            {
              lead: "Personalized Experience:",
              text: "To better respond to your individual needs and improve your experience during inquiries or active campaigns.",
            },
            {
              lead: "Improved Customer Service:",
              text: "To provide customized support and accurately identify and manage your account.",
            },
            {
              lead: "Processing Transactions:",
              items: [
                "To process agreed-upon transactions for our marketing services",
                "You will receive an email receipt confirming your transaction",
              ],
            },
            {
              lead: "Email Communications:",
              items: [
                "To provide updates, notifications, and important information regarding your campaigns",
                "To send occasional company news, updates, and educational resources",
              ],
            },
          ],
        },
        {
          lead: "Opt-Out of Emails:",
          p: "You can unsubscribe from emails at any time using the unsubscribe link or by contacting us at yanickew@zenjuweddingsnevents.com.",
        },
      ],
    },
    {
      id: "how-we-share-your-information",
      title: "How We Share Your Information",
      blocks: [
        {
          p: "We do not sell, trade, or rent your personal information. However, we may share it with trusted third parties to:",
        },
        {
          list: [
            "Provide technical, advertising, or operational support",
            "Fulfill legal requirements, such as responding to valid legal requests",
            "Support retargeting efforts with partners like AdRoll, Google, Facebook, Instagram, etc.",
          ],
        },
        { p: "All third-party partners are required to maintain confidentiality and only use the data for agreed purposes." },
      ],
    },
    {
      id: "cookies-and-tracking-technologies",
      title: "Cookies and Tracking Technologies",
      blocks: [
        { p: "We use cookies and similar technologies to:" },
        {
          list: [
            "Enhance your browsing experience",
            "Analyze site traffic and trends",
            "Deliver tailored advertisements across platforms",
          ],
        },
        {
          p: "You may disable cookies in your browser settings; however, doing so may limit some website functionalities.",
        },
      ],
    },
    {
      id: "data-security",
      title: "Data Security",
      blocks: [
        {
          p: "We implement robust security measures to protect your personal information against unauthorized access, alteration, or disclosure. However, no online transmission is 100% secure, so we cannot guarantee absolute security.",
        },
      ],
    },
    {
      id: "your-rights",
      title: "Your Rights",
      blocks: [
        { p: "Depending on your jurisdiction, you have the right to:" },
        {
          list: [
            { lead: "Access:", text: "Request the information we hold about you." },
            { lead: "Correct:", text: "Update inaccurate or incomplete information." },
            { lead: "Delete:", text: "Request the deletion of your data." },
            { lead: "Opt-Out:", text: "Withdraw from communications or data usage at any time." },
          ],
        },
        { p: "To exercise these rights, email us at yanickew@zenjuweddingsnevents.com." },
      ],
    },
    {
      id: "changes",
      title: "Changes to This Privacy Policy",
      blocks: [
        {
          p: "We may update this Privacy Policy periodically. Any changes will be posted on this page with an updated Effective Date. We encourage you to review this policy regularly.",
        },
      ],
    },
    {
      id: "contact-us",
      title: "Contact Us",
      blocks: [
        {
          p: "If you have questions or concerns regarding this Privacy Policy, please contact us at yanickew@zenjuweddingsnevents.com.",
        },
      ],
    },
  ],
};

export const termsAndConditions: LegalDoc = {
  title: "Terms & Conditions",
  description: "The terms and conditions that govern your use of the Zenju Weddings and Events of Hawaii, LLC website.",
  updated: "October 7, 2025",
  intro: [
    {
      p: "Welcome to Zenju Weddings and Events of Hawaii, LLC’s website (“Site”), located at https://www.zenjuweddingsnevents.com/. These Terms and Conditions (“Terms”) govern your use of the Site. By accessing or using the Site, you agree to comply with and be bound by these Terms. If you do not agree to these Terms, you must stop using the Site immediately.",
    },
    {
      p: "We may update these Terms periodically by amending this page. It is your responsibility to review this page regularly as changes are binding upon you.",
    },
  ],
  sections: [
    {
      id: "access-to-our-site",
      title: "Access to Our Site",
      blocks: [
        { p: "1.1 Access to our Site is provided on a temporary basis, and we reserve the right to:" },
        {
          list: ["Withdraw access to the Site", "Change or discontinue any service or feature on the Site without prior notice"],
        },
        { p: "1.2 We will not be held liable for any unavailability of the Site, at any time or for any duration." },
        { p: "1.3 You are responsible for:" },
        {
          list: [
            "Ensuring access to the Site",
            "Ensuring any individuals using your internet connection are aware of these Terms and comply with them",
          ],
        },
        { p: "1.4 You agree not to:" },
        {
          list: [
            "Damage, interfere with, or disrupt access to the Site",
            "Perform any action that interrupts or impairs the Site’s functionality",
          ],
        },
      ],
    },
    {
      id: "use-of-information",
      title: "Use of Information",
      blocks: [
        {
          p: "2.1 The content on the Site is for general informational purposes only. While we strive to ensure accuracy, we cannot guarantee that information is complete, up-to-date, or error-free.",
        },
        {
          p: "2.2 You must not rely solely on the content of this Site for making decisions. You acknowledge that you are responsible for verifying any information before acting on it.",
        },
        { p: "2.3 We reserve the right to modify or remove content on the Site at any time without notice." },
      ],
    },
    {
      id: "intellectual-property-rights",
      title: "Intellectual Property Rights",
      blocks: [
        {
          p: "3.1 All intellectual property rights on the Site, including but not limited to copyright, trademarks, design rights, database rights, and trade secrets (“Intellectual Property”), are owned or licensed by Zenju Weddings and Events of Hawaii, LLC.",
        },
        { p: "3.2 You may:" },
        { list: ["View, print, and download material from the Site for personal, non-commercial use only"] },
        { p: "3.3 You may not:" },
        {
          list: [
            "Modify, reproduce, or republish content from the Site",
            "Use any content for commercial purposes without our express written permission",
            "Attempt to reverse engineer, disassemble, or decompile any part of the Site",
          ],
        },
        { p: "All rights not explicitly granted to you in these Terms are reserved." },
      ],
    },
    {
      id: "user-conduct",
      title: "User Conduct",
      blocks: [
        { p: "By accessing or using the Site, you agree that you will:" },
        {
          list: [
            "Use the Site only for lawful purposes",
            "Refrain from using the Site to transmit malicious software, spam, or any illegal or harmful content",
          ],
        },
        { p: "We reserve the right to restrict or terminate your access to the Site if you breach these Terms." },
      ],
    },
    {
      id: "monitoring",
      title: "Monitoring",
      blocks: [
        {
          p: "We reserve the right to monitor and track user activity on the Site to ensure compliance with these Terms and improve user experience.",
        },
      ],
    },
    {
      id: "limitation-of-liability",
      title: "Limitation of Liability",
      blocks: [
        { p: "6.1 To the maximum extent permitted by law, we disclaim all liability for:" },
        {
          list: [
            "Any direct, indirect, or consequential loss arising from your use of or reliance on content available on the Site",
            "Interruptions or errors in Site functionality",
          ],
        },
        {
          lead: "6.2 No Warranties:",
          p: "The Site is provided on an “as is” and “as available” basis. We make no warranties, either express or implied, regarding the accuracy, completeness, or availability of the Site.",
        },
      ],
    },
    {
      id: "links-to-third-party-sites",
      title: "Links to Third-Party Sites",
      blocks: [
        {
          p: "The Site may contain links to third-party websites. We do not control or endorse these sites and are not responsible for their content, privacy practices, or availability. You access such third-party sites at your own risk.",
        },
      ],
    },
    {
      id: "privacy-policy",
      title: "Privacy Policy",
      blocks: [
        {
          p: "Your use of the Site is also governed by our Privacy Policy. Please review it to understand how we collect, use, and safeguard your information.",
        },
      ],
    },
    {
      id: "changes",
      title: "Changes to These Terms",
      blocks: [
        {
          p: "We may revise these Terms at any time by updating this page. Continued use of the Site after changes indicates your acceptance of the revised Terms.",
        },
      ],
    },
    {
      id: "governing-law",
      title: "Governing Law",
      blocks: [
        {
          p: "These Terms are governed by and construed in accordance with the laws of Hawaii. Any disputes arising out of these Terms shall be subject to the exclusive jurisdiction of the courts of Hawaii.",
        },
      ],
    },
    {
      id: "contact-us",
      title: "Contact Us",
      blocks: [
        {
          p: "If you have any questions or concerns about these Terms, please contact us at: yanickew@zenjuweddingsnevents.com",
        },
      ],
    },
  ],
};
