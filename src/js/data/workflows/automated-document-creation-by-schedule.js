export default {
  "title": "Automated Document Creation (by Schedule)",
  "id": "automated-document-creation-by-schedule",
  "description": "Automatically generates documents based on a predefined time schedule (e.g., monthly, quarterly, annually). Perfect for recurring reports, renewals, and compliance documents.",
  "icons": [
    {
      "src": "public/icons/trigger.svg",
      "color": "green"
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
  "link": "automated-document-creation-by-schedule.html",
  "plan": "Business",
  "availability": "Coming Soon",
  "type": "Trigger-based automation",
  "name": "Automated Document Creation (by Schedule)",
  "targetCustomers": [
    "Businesses with recurring reporting needs",
    "Simple subscription renewals managed outside CRM triggers",
    "Periodic compliance checks or attestations"
  ],
  "exampleCustomers": [
    "Segmed (Renewals)",
    "Marketing Diversified Services (Annual forms)",
    "South Central Kansas Area Agency (Annual contracts)"
  ],
  "steps": [
    {
      "name": "Schedule Trigger",
      "description": "System automatically triggers document creation based on predefined schedule",
      "icon": "public/icons/trigger.svg",
      "iconBgColor": "rgba(36, 174, 97, 0.08)",
      "iconBorderColor": "rgba(36, 174, 97, 0.16)",
      "alt": "Schedule Trigger"
    },
    {
      "name": "Create Document",
      "description": "System creates document using predefined template and available data",
      "icon": "public/icons/document.svg",
      "iconBgColor": "rgba(33, 103, 198, 0.08)",
      "iconBorderColor": "rgba(33, 103, 198, 0.16)",
      "alt": "Create Document"
    }
  ],
  "documentTypes": [
    {
      "name": "Report / Summary Document",
      "scenario": "Automatically generate a template for a recurring client report, perhaps pulling some static data, ready for manual additions."
    },
    {
      "name": "Renewal Agreement / Quote",
      "scenario": "Automatically generate a standard renewal notice or basic agreement shortly before the contract expiration date."
    },
    {
      "name": "Compliance Form / Policy Ack.",
      "scenario": "Automatically generate and send annual policy acknowledgment forms or compliance questionnaires."
    },
    {
      "name": "Audit Checklist / Review Form",
      "scenario": "Generate forms needed for scheduled internal processes."
    }
  ],
  "benefits": [
    "Eliminates manual document creation for recurring tasks",
    "Ensures timely delivery of important documents",
    "Reduces risk of missing critical deadlines",
    "Standardizes document creation process",
    "Improves compliance with scheduled requirements"
  ],
  "demoLink": "Workflow Automation/Scheduling Placeholder",
  "plans": "Business or Enterprise",
  "example": "Monthly/Quarterly reporting, annual renewals, compliance attestations, and scheduled audits.",
  "workflowDocumentScenarios": {
    "Sales & Marketing Collateral": "Automatically generate a template for a recurring client report, perhaps pulling some static data, ready for manual additions.",
    "Sales Contracts": "Automatically generate a standard renewal notice or basic agreement shortly before the contract expiration date.",
    "Employment Contract": "Automatically generate and send annual policy acknowledgment forms or compliance questionnaires.",
    "NDA (Sales Administration)": "Generate forms needed for scheduled internal processes."
  }
};
