export default {
  "title": "Guided Selling (CPQ)",
  "id": "guided-selling-cpq",
  "description": "Uses PandaDoc's forms, rules engine, pricing tables, product catalog, and potentially Smart Content to guide sales reps through the process of configuring complex quotes and proposals accurately and compliantly. Prevents errors, enforces pricing rules, ensures required components are included, and speeds up quote generation.",
  "icons": [
    {
      "src": "public/icons/form.svg",
      "color": "purple"
    },
    {
      "src": "public/icons/rules.svg",
      "color": "blue"
    },
    {
      "src": "public/icons/document.svg",
      "color": "blue"
    }
  ],
  "link": "guided-selling-cpq.html",
  "plan": "CPQ Add-on",
  "availability": "Generally Available",
  "type": "Document generation",
  "name": "Guided Selling (CPQ)",
  "plans": "Business, Enterprise",
  "useCase": "Ideal for companies with complex product catalogs, configurable offerings, and a need to standardize the sales quoting process while ensuring accuracy and compliance.",
  "example": "A manufacturing company uses guided selling to help sales reps configure complex equipment quotes, renewals, proposals, and statements of work. The system ensures all required components are included, applies correct pricing based on volume and customer tier, and enforces compliance with industry regulations.",
  "featuresTitle": "Smart Quote Configuration & Generation",
  "featuresIntro": "Transform your sales quoting process with intelligent automation and guided workflows. Create accurate, compliant quotes in minutes while ensuring consistency across your team.",
  "features": [
    {
      "title": "CRM Integration",
      "description": "Syncs quote data with your CRM system for seamless opportunity management and accurate customer data"
    },
    {
      "title": "Product Catalog",
      "description": "Access to your complete product catalog with pricing and configuration rules, ensuring accurate product selection"
    },
    {
      "title": "Smart Content",
      "description": "Dynamically adjusts content based on customer profile and selected options, personalizing each quote"
    },
    {
      "title": "Rules Engine",
      "description": "Enforces business rules, validates configurations, and ensures compliance with company policies"
    }
  ],
  "steps": [
    {
      "icon": "public/icons/form.svg",
      "name": "Sales Rep Input",
      "description": "Sales rep starts the guided selling process by entering initial customer requirements",
      "iconBgColor": "rgba(33, 103, 198, 0.08)",
      "iconBorderColor": "rgba(33, 103, 198, 0.16)"
    },
    {
      "icon": "public/icons/rules.svg",
      "name": "Create Quote",
      "description": "System applies business rules to validate configuration and generate accurate quotes",
      "iconBgColor": "rgba(33, 103, 198, 0.08)",
      "iconBorderColor": "rgba(33, 103, 198, 0.16)"
    },
    {
      "icon": "public/icons/document.svg",
      "name": "Document Generation",
      "description": "Generates a professional, compliant quote or proposal with all selected options",
      "iconBgColor": "rgba(33, 103, 198, 0.08)",
      "iconBorderColor": "rgba(33, 103, 198, 0.16)"
    }
  ],
  "workflowDocumentScenarios": {
    "Sales Proposals": "Guide sales reps through configuring multi-component systems with required accessories and service packages",
    "Service Agreements": "Create customized service proposals with tiered pricing, optional add-ons, and compliance requirements",
    "Sales Contracts": "Generate renewal quotes with automatic pricing adjustments and optional upgrade paths",
    "SOW": "Build detailed SOWs with proper scoping, deliverables, and pricing based on selected services",
    "Sales Quotes": "Configure subscription packages with proper billing cycles, add-ons, and volume discounts",
    "NDA (Sales Administration)": "Create partner-specific quotes with appropriate margins, terms, and co-marketing options"
  },
  "targetCustomers": [
    "Complex product/service catalogs",
    "Configurable offerings",
    "Frequent quoting errors",
    "Need for pricing/discount controls",
    "Desire to standardize sales quoting process",
    "Replacing inadequate CRM quoting or spreadsheets"
  ],
  "exampleCustomers": [
    "MachMotion",
    "Okendo",
    "Simpatico Systems",
    "SchoolAI",
    "coboworx GmbH",
    "Servers Australia"
  ],
  "shortDescription": "Guide sales reps to create accurate, compliant quotes and proposals with smart forms and rules."
};
