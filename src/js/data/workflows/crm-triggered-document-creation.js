export default {
  "title": "CRM-Triggered Document Creation",
  "id": "crm-triggered-document-creation",
  "description": "Automatically generate documents based on specific triggers in your CRM, ATS, HRIS, or other business systems. Perfect for sales, HR, and operations teams that need to ensure timely document creation when key business events occur.",
  "icons": [
    {
      "src": "public/icons/crm.svg",
      "color": "light-red"
    },
    {
      "src": "public/icons/trigger.svg",
      "color": "green"
    },
    {
      "src": "public/icons/document.svg",
      "color": "blue"
    }
  ],
  "link": "crm-triggered-document-creation.html",
  "plan": "Business",
  "availability": "Coming Soon",
  "type": "Trigger-based automation",
  "name": "CRM-Triggered Document Creation",
  "plans": "Business, Enterprise",
  "useCase": "Sales teams needing contracts when deals close, HR teams requiring offer letters when candidates are approved, Operations teams needing shipping documents when orders are processed. Any scenario where document creation should be triggered by a specific system event.",
  "example": "A sales rep closes a deal in Salesforce. The system automatically generates a contract with the client's details, terms, and pricing, ready for review and signature. No manual document creation required.",
  "featuresTitle": "Automated Document Generation",
  "featuresIntro": "Transform your document creation process into an automated workflow that responds to your business systems' events.",
  "steps": [
    {
      "name": "Select Trigger",
      "icon": "public/icons/trigger.svg",
      "alt": "Trigger",
      "iconBgColor": "rgba(36, 174, 97, 0.08)",
      "iconBorderColor": "rgba(36, 174, 97, 0.16)"
    },
    {
      "name": "Create Document",
      "icon": "public/icons/document.svg",
      "alt": "Create Document",
      "iconBgColor": "rgba(33, 103, 198, 0.08)",
      "iconBorderColor": "rgba(33, 103, 198, 0.16)"
    },
    {
      "name": "Send Document",
      "icon": "public/icons/send.svg",
      "alt": "Send Document",
      "iconBgColor": "rgba(33, 103, 198, 0.08)",
      "iconBorderColor": "rgba(33, 103, 198, 0.16)"
    }
  ],
  "features": [
    {
      "title": "System Integration",
      "description": "Connect with your CRM, ATS, HRIS, or other business systems to monitor for specific events that should trigger document creation."
    },
    {
      "title": "Event-Based Triggers",
      "description": "Configure triggers based on specific status changes, stage transitions, or other events in your connected systems."
    },
    {
      "title": "Data Mapping",
      "description": "Automatically populate documents with relevant data from the triggering system, ensuring accuracy and consistency."
    },
    {
      "title": "Workflow Automation",
      "description": "Set up complete document workflows that include generation, review, and distribution based on system events."
    }
  ],
  "workflowDocumentScenarios": {
    "Sales Contracts": "Automatically generate the contract when the deal is marked as won or ready for contracting in CRM.",
    "Service Agreements": "Automatically generate the contract when the deal is marked as won or ready for contracting in CRM.",
    "Offer Letters": "Automatically generate the offer letter once internal approvals are complete in the hiring system.",
    "Employment Contract": "Automatically generate the offer letter once internal approvals are complete in the hiring system.",
    "Onboarding Packet": "Automatically generate the necessary onboarding paperwork when a new employee record is finalized in HRIS.",
    "HR Forms": "Automatically generate the necessary onboarding paperwork when a new employee record is finalized in HRIS.",
    "Shipping Documents": "Automatically generate shipping documentation when an order is processed in the ERP.",
    "Packing List": "Automatically generate shipping documentation when an order is processed in the ERP.",
    "NDA": "Automatically generate an NDA when a deal progresses to a stage requiring confidentiality.",
    "Change Order": "Automatically generate a formal Change Order document when a change request task is marked approved.",
    "SOW": "Automatically generate a formal Change Order document when a change request task is marked approved."
  }
};
