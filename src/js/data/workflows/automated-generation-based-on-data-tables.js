export default {
  "title": "Automated Generation based on Data Tables",
  "id": "automated-generation-based-on-data-tables",
  "description": "Enable single-click creation of complex documents through PandaDoc's enterprise features. The system automatically applies business rules and generates fully compliant documents with minimal user intervention.",
  "icons": [
    {
      "src": "public/icons/api-or-integration.svg",
      "color": "blue"
    },
    {
      "src": "public/icons/lookup-table.svg",
      "color": "blue"
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
  "link": "fully-automated-document-creation.html",
  "plan": "Enterprise",
  "availability": "Coming Soon",
  "type": "Document generation",
  "name": "Automated Generation based on Data Tables",
  "plans": "Enterprise",
  "example": "With a single click, an HR manager can generate a complete employment contract that automatically includes the correct legal language, benefits, and tax forms based on the employee's location, role, and company policies.",
  "featuresTitle": "Enterprise Automation Features",
  "featuresIntro": "PandaDoc's enterprise automation capabilities enable businesses to create highly dynamic documents with minimal manual intervention.",
  "steps": [
    {
      "name": "Pull Data from Integration",
      "icon": "public/icons/api-or-integration.svg",
      "alt": "API Integration",
      "iconBgColor": "rgba(33, 103, 198, 0.08)",
      "iconBorderColor": "rgba(33, 103, 198, 0.16)"
    },
    {
      "name": "Load Data from Lookup Tables",
      "icon": "public/icons/lookup-table.svg",
      "alt": "Lookup Table",
      "iconBgColor": "rgba(33, 103, 198, 0.08)",
      "iconBorderColor": "rgba(33, 103, 198, 0.16)"
    },
    {
      "name": "Apply Business Rules",
      "icon": "public/icons/rules.svg",
      "alt": "Rules",
      "iconBgColor": "rgba(33, 103, 198, 0.08)",
      "iconBorderColor": "rgba(33, 103, 198, 0.16)"
    },
    {
      "name": "Create Document",
      "icon": "public/icons/document.svg",
      "alt": "Document",
      "iconBgColor": "rgba(33, 103, 198, 0.08)",
      "iconBorderColor": "rgba(33, 103, 198, 0.16)"
    },
    {
      "name": "Send Document",
      "icon": "public/icons/send.svg",
      "alt": "Send",
      "iconBgColor": "rgba(33, 103, 198, 0.08)",
      "iconBorderColor": "rgba(33, 103, 198, 0.16)"
    }
  ],
  "features": [
    {
      "title": "Smart Content",
      "description": "Dynamically include or exclude content sections based on predefined conditions and business rules. Perfect for managing regional variations, product configurations, and legal requirements."
    },
    {
      "title": "Lookup Tables",
      "description": "Automatically populate document fields with data from integrated sources or predefined tables. Ideal for product catalogs, pricing structures, and customer information."
    },
    {
      "title": "Conditional Logic",
      "description": "Create complex business rules that determine document structure and content flow. Enables sophisticated automation scenarios and ensures compliance with business policies."
    }
  ],
  "enterpriseFeatures": {
    "description": "Enterprise plan unlocks advanced automation capabilities for complex document workflows:",
    "features": [
      {
        "title": "Advanced Smart Content",
        "description": "Create sophisticated conditional logic for content inclusion/exclusion"
      },
      {
        "title": "Custom Lookup Tables",
        "description": "Build and manage complex data relationships for document population"
      },
      {
        "title": "API Integration",
        "description": "Connect with external systems for real-time data synchronization"
      }
    ]
  },
  "documentTypes": [
    {
      "name": "Master Service Agreements",
      "scenario": "Manage variations in standard clauses based on client type or governing law."
    },
    {
      "name": "Statements of Work",
      "scenario": "Build SOWs dynamically by selecting service components with automatic cost calculations."
    },
    {
      "name": "HR Documents",
      "scenario": "Include country-specific legal language and benefits information based on employee location."
    },
    {
      "name": "Channel Partner Agreements",
      "scenario": "Create partner-specific agreements with customized terms and commission structures."
    },
    {
      "name": "Legal Documents",
      "scenario": "Generate jurisdiction-specific legal documents with appropriate clauses and requirements."
    }
  ],
  "workflowDocumentScenarios": {
    "Sales Contracts": "Dynamically include/exclude clauses based on location/service type (smart content), populate pricing terms based on selected plan (lookup/pricing).",
    "Service Agreements": "Dynamically include/exclude clauses based on location/service type (smart content), populate pricing terms based on selected plan (lookup/pricing).",
    "Sales & Marketing Collateral": "Use Smart Content to manage variations in standard clauses based on client type or governing law.",
    "SOW": "Build SOWs dynamically by selecting service components; Smart Content inserts relevant descriptions/tasks; Lookups/Pricing provide costs.",
    "Employment Contract": "Use Smart Content to include country-specific legal language, benefits info, or tax forms based on employee location.",
    "Offer Letters": "Use Smart Content to include country-specific legal language, benefits info, or tax forms based on employee location.",
    "NDA (Sales Administration)": "Smart Content adjusts terms, commission structures, or product access based on partner tier or region.",
    "Compensation Change Forms": "Use Smart Content to include country-specific legal language, benefits info, or tax forms based on employee location.",
    "Candidate Applications": "Less need for complex conditional logic or dynamic tables if the document is largely static or only requires basic variable fills.",
    "Contractor Agreements": "Smart Content adjusts terms, commission structures, or product access based on partner tier or region.",
    "Government Forms (HR Administration)": "Use Smart Content to include country-specific legal language, benefits info, or tax forms based on employee location.",
    "Liability Waivers": "Less need for complex conditional logic or dynamic tables if the document is largely static or only requires basic variable fills.",
    "Service Requests": "Less need for complex conditional logic or dynamic tables if the document is largely static or only requires basic variable fills.",
    "Purchase Orders": "Less need for complex conditional logic or dynamic tables if the document is largely static or only requires basic variable fills.",
    "Tax Forms": "Use Smart Content to include country-specific legal language, benefits info, or tax forms based on employee location.",
    "Invoices & Payments": "Less need for complex conditional logic or dynamic tables if the document is largely static or only requires basic variable fills."
  }
};
