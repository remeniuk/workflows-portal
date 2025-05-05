export default {
  "title": "2-Way Sync with CRM",
  "description": "Eliminate manual data entry and errors by enabling seamless two-way synchronization between PandaDoc and your CRM. Automatically sync fillable fields, product updates, and document data between PandaDoc and your CRM platform (works with HubSpot, Salesforce, Pipedrive, and more). Keep your sales process fast, accurate, and always up-to-date.",
  "icons": [
    {
      "src": "public/icons/api-or-integration.svg",
      "color": "blue"
    },
    {
      "src": "public/icons/document.svg",
      "color": "blue"
    },
    {
      "src": "public/icons/send.svg",
      "color": "blue"
    }
  ],
  "link": "2way-sync-crm.html",
  "id": "2way-sync-crm",
  "plan": "Business",
  "availability": "Generally Available",
  "type": "Integrations & custom logic",
  "name": "2-Way Sync with CRM",
  "plans": "Enterprise (or Business with Automations add-on)",
  "useCase": "Ideal for sales teams who want to keep CRM and document data in perfect sync, reduce manual work, and accelerate deal cycles.",
  "example": "A sales rep updates a quote in PandaDoc, and the changes are instantly reflected in the CRM. When a customer fills out a form or signs a document, all relevant data is pushed back to the CRM, ensuring both systems are always aligned.",
  "featuresTitle": "Automate Data Sync Between PandaDoc and Your CRM",
  "featuresIntro": "Experience the power of true two-way data synchronization. No more copy-pasting or switching between systems. Keep your sales documents and CRM records perfectly aligned at all times.",
  "integrations": {
    "title": "Supported CRMs",
    "logos": [
      {
        "src": "public/images/Salesforce-logo.png",
        "alt": "Salesforce"
      },
      {
        "src": "public/images/hubspot-logo.png",
        "alt": "HubSpot"
      },
      {
        "src": "public/images/pipedrive-logo.png",
        "alt": "Pipedrive"
      }
    ],
    "description": "Seamlessly integrate with leading CRM platforms"
  },
  "steps": [
    {
      "name": "Pull data from CRM",
      "icon": "public/icons/api-or-integration.svg",
      "alt": "Pull from CRM",
      "iconBgColor": "rgba(36, 174, 97, 0.08)",
      "iconBorderColor": "rgba(36, 174, 97, 0.16)"
    },
    {
      "name": "Create document",
      "icon": "public/icons/document.svg",
      "alt": "Create Document",
      "iconBgColor": "rgba(33, 103, 198, 0.08)",
      "iconBorderColor": "rgba(33, 103, 198, 0.16)"
    },
    {
      "name": "Send document",
      "icon": "public/icons/send.svg",
      "alt": "Send Document",
      "iconBgColor": "rgba(33, 103, 198, 0.08)",
      "iconBorderColor": "rgba(33, 103, 198, 0.16)"
    },
    {
      "name": "Update data in CRM",
      "icon": "public/icons/api-or-integration.svg",
      "alt": "Update CRM",
      "iconBgColor": "rgba(36, 174, 97, 0.08)",
      "iconBorderColor": "rgba(36, 174, 97, 0.16)"
    },
    {
      "name": "Upload document",
      "icon": "public/icons/api-or-integration.svg",
      "alt": "Upload Document",
      "iconBgColor": "rgba(36, 174, 97, 0.08)",
      "iconBorderColor": "rgba(36, 174, 97, 0.16)"
    },
    {
      "name": "Change deal stage",
      "icon": "public/icons/api-or-integration.svg",
      "alt": "Change Deal Stage",
      "iconBgColor": "rgba(36, 174, 97, 0.08)",
      "iconBorderColor": "rgba(36, 174, 97, 0.16)"
    }
  ],
  "features": [
    {
      "title": "Automatic Field Sync",
      "description": "Data entered in PandaDoc fillable fields (text, checkboxes, dropdowns) is automatically pushed back to your CRM, keeping records up-to-date without manual effort."
    },
    {
      "title": "Product & Pricing Table Sync",
      "description": "Sync product and pricing data between PandaDoc and your CRM, including support for custom fields and complex mapping logic."
    },
    {
      "title": "Real-Time Document Updates",
      "description": "Update existing documents with the latest CRM data, including added/removed line items and optional products, ensuring both systems are always in sync."
    }
  ],
  "enterpriseFeatures": {
    "description": "Unlock advanced automation workflows for two-way sync, including support for custom objects, advanced mapping, and bulk updates.",
    "features": [
      {
        "title": "Custom Object Sync",
        "description": "Map and sync data with custom objects and fields in your CRM."
      },
      {
        "title": "Advanced Mapping Logic",
        "description": "Handle complex data formats and relationships with flexible mapping options."
      },
      {
        "title": "Bulk Data Sync",
        "description": "Sync large volumes of data between PandaDoc and your CRM efficiently."
      }
    ]
  },
  "documentTypes": [
    {
      "name": "Sales Proposals",
      "scenario": "Sync line items, pricing, and custom fields between PandaDoc and CRM."
    },
    {
      "name": "Sales Quotes",
      "scenario": "Sync line items, pricing, and custom fields between PandaDoc and CRM."
    },
    {
      "name": "Sales Contracts",
      "scenario": "Push signed contract data and status updates back to CRM records."
    },
    {
      "name": "Service Agreements",
      "scenario": "Push signed agreement data and status updates back to CRM records."
    },
    {
      "name": "Invoices & Payments",
      "scenario": "Sync invoice data and payment status between PandaDoc and CRM."
    },
    {
      "name": "NDA (Sales Administration)",
      "scenario": "Ensure all signed agreements are reflected in CRM instantly."
    },
    {
      "name": "Vendor Agreements",
      "scenario": "Sync vendor agreement data and status between PandaDoc and CRM."
    }
  ],
  "workflowDocumentScenarios": {
    "Sales Proposals": "Pull deal/product/contact data, push quote details back, update deal stage on acceptance, trigger follow-ups based on status (viewed, completed).",
    "Sales Quotes": "Pull deal/product/contact data, push quote details back, update deal stage on acceptance, trigger follow-ups based on status (viewed, completed).",
    "Sales Contracts": "Pull all relevant data from CRM deal/account, auto-attach signed PDF to CRM record, update deal stage to Closed Won, sync key contract terms back to CRM.",
    "Service Agreements": "Pull all relevant data from CRM deal/account, auto-attach signed PDF to CRM record, update deal stage to Closed Won, sync key contract terms back to CRM.",
    "Invoices & Payments": "Trigger invoice generation upon deal closure in CRM, potentially sync payment status back to a CRM field.",
    "NDA (Sales Administration)": "Auto-generate from CRM contact/deal, update custom field in CRM with NDA status, attach signed NDA.",
    "Vendor Agreements": "If vendors are managed as CRM records, pull data for agreements, store signed docs, track status."
  },
  "shortDescription": "Seamlessly sync data between PandaDoc and your CRM to eliminate manual entry."
};
