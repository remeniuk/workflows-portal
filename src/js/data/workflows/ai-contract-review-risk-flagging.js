export default {
  "title": "AI Contract Review & Risk Flagging",
  "id": "ai-contract-review-risk-flagging",
  "description": "Instantly detect redlines and risks in customer-sent contracts. The agent compares the document to your preferred terms and flags unusual clauses, missing sections, or high-risk changes.",
  "icons": [
    {
      "src": "public/icons/ai_icon_only.svg"
    },
    {
      "src": "public/icons/document.svg",
      "color": "blue"
    },
    {
      "src": "public/icons/approval-workflow.svg",
      "color": "purple"
    }
  ],
  "link": "ai-contract-review.html",
  "plan": "Enterprise",
  "availability": "Coming Soon",
  "type": "AI-Driven automation",
  "name": "AI Contract Review & Risk Flagging",
  "plans": "Enterprise (In Development)",
  "useCase": "Ideal for legal, procurement, and sales teams that regularly review third-party contracts and need to quickly identify deviations from standard terms, risky clauses, or missing sections. Perfect for organizations seeking to reduce legal review time and minimize risk exposure.",
  "example": "When a customer sends back a redlined contract, the agent automatically compares it to your standard template, flags any non-standard language, highlights missing compliance sections, and summarizes all high-risk changes for legal review.",
  "featuresTitle": "AI-Driven Contract Risk Detection",
  "featuresIntro": "Let AI handle the tedious contract review process. Instantly spot risks, deviations, and missing terms—no manual clause-by-clause review required.",
  "steps": [
    {
      "name": "Edit Document",
      "icon": "public/icons/document.svg",
      "alt": "Document",
      "iconBgColor": "rgba(33, 103, 198, 0.08)",
      "iconBorderColor": "rgba(33, 103, 198, 0.16)"
    },
    {
      "name": "Compare to Standard Terms",
      "icon": "public/icons/ai_icon_only.svg",
      "alt": "AI",
      "iconBgColor": "rgba(0, 184, 212, 0.08)",
      "iconBorderColor": "rgba(0, 184, 212, 0.16)"
    },
    {
      "name": "Flag Risks & Deviations",
      "icon": "public/icons/approval-workflow.svg",
      "alt": "Approvals",
      "iconBgColor": "rgba(255, 152, 0, 0.08)",
      "iconBorderColor": "rgba(255, 152, 0, 0.16)"
    }
  ],
  "features": [
    {
      "title": "Automated Redline Detection",
      "description": "The agent highlights all changes from your standard contract, including additions, deletions, and edits."
    },
    {
      "title": "Risk Flagging & Scoring",
      "description": "Unusual clauses, missing compliance sections, and high-risk language are flagged and scored for review."
    },
    {
      "title": "Clause-by-Clause Comparison",
      "description": "Each section is compared to your preferred terms, with deviations clearly marked."
    },
    {
      "title": "Automated Review Summaries",
      "description": "Receive a concise summary of all flagged risks and required actions."
    },
    {
      "title": "Real-Time Collaboration",
      "description": "Share flagged contracts and risk summaries with legal, sales, or procurement instantly."
    }
  ],
  "enterpriseFeatures": {
    "description": "On the Enterprise plan, unlock advanced contract review and risk management capabilities:",
    "features": [
      {
        "title": "Customizable Risk Profiles",
        "description": "Define what constitutes high, medium, or low risk for your organization."
      },
      {
        "title": "Integration with CLM & DMS",
        "description": "Connect to your contract lifecycle management or document management systems for seamless workflow."
      },
      {
        "title": "AI-Powered Negotiation Suggestions",
        "description": "Get recommended fallback language and negotiation tips for flagged clauses."
      },
      {
        "title": "Audit-Ready Reporting",
        "description": "Export detailed risk reports and review logs for compliance and audits."
      }
    ]
  }
};
