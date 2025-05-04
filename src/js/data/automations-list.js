// List of automation workflow cards for dynamic rendering
window.automationsList = [
  {
    title: "2-Way CRM Sync",
    description: "Keep PandaDoc and your CRM (HubSpot, Salesforce, Pipedrive, etc.) perfectly aligned with automated 2-way data sync for fields, products, and documents.",
    icons: [
      { src: "public/icons/api-or-integration.svg", color: "blue" },
      { src: "public/icons/document.svg", color: "blue" },
      { src: "public/icons/send.svg", color: "blue" }
    ],
    link: "2way-sync-crm.html",
    plan: "Enterprise",
    availability: "Generally Available",
    type: "Integrations & custom logic"
  },
  {
    title: "Approval Workflow",
    description: "Automate internal reviews and approvals based on predefined rules to ensure compliance, transparency, and speed.",
    icons: [
      { src: "public/icons/document.svg", color: "blue" },
      { src: "public/icons/approval-workflow.svg", color: "purple" },
      { src: "public/icons/send.svg", color: "blue" }
    ],
    link: "approval-workflow.html",
    plan: "Business",
    availability: "Generally Available",
    type: "Workflow execution & routing"
  },
  {
    title: "Document Storage Management",
    description: "Automatically organize and manage documents within PandaDoc. Create folders, move documents based on status or metadata, rename files, and maintain a clean document workspace.",
    icons: [
      { src: "public/icons/trigger.svg", color: "blue" },
      { src: "public/icons/document-storage.svg", color: "purple" },
      { src: "public/icons/document.svg", color: "blue" }
    ],
    link: "document-management.html",
    plan: "Business",
    availability: "Generally Available",
    type: "Document management"
  },
  {
    title: "External Storage Integration",
    description: "Archive finalized documents automatically to platforms like Google Drive, SharePoint, or Dropbox.",
    icons: [
      { src: "public/icons/trigger.svg", color: "blue" },
      { src: "public/icons/external-storage.svg", color: "teal" }
    ],
    link: "external-storage.html",
    plan: "Business",
    availability: "Generally Available",
    type: "Document management"
  },
  {
    title: "Form-Triggered Document Creation",
    description: "Automatically generate documents when a form is submitted. Perfect for collecting information from customers or employees and instantly creating personalized documents.",
    icons: [
      { src: "public/icons/form.svg", color: "blue" },
      { src: "public/icons/trigger.svg", color: "green" },
      { src: "public/icons/document.svg", color: "blue" }
    ],
    link: "form-triggered-document-creation.html",
    plan: "Business",
    availability: "Generally Available",
    type: "Trigger-based automation"
  },
  {
    title: "Guided Selling (CPQ)",
    description: "Guide sales reps through complex quote configuration with rules-based validation, pricing automation, and compliant document generation.",
    icons: [
      { src: "public/icons/form.svg", color: "purple" },
      { src: "public/icons/rules.svg", color: "blue" },
      { src: "public/icons/document.svg", color: "blue" }
    ],
    link: "guided-selling-cpq.html",
    plan: "CPQ Add-on",
    availability: "Early Access",
    type: "AI-Driven automation"
  },
  {
    title: "Custom Logic & API Integration",
    description: "Build custom automations with PandaDoc's API or logic steps to support proprietary systems or advanced workflows.",
    icons: [
      { src: "public/icons/storage.svg", color: "teal" },
      { src: "public/icons/document.svg", color: "blue" },
      { src: "public/icons/send.svg", color: "blue" }
    ],
    link: "custom-workflow.html",
    plan: "Enterprise",
    availability: "Closed Beta",
    type: "Integrations & custom logic"
  },
  {
    title: "Bulk Creation",
    description: "Generate hundreds or thousands of personalized documents in minutes. Perfect for mass communications, renewals, or any scenario requiring many similar documents.",
    icons: [
      { src: "public/icons/lookup-table.svg", color: "green" },
      { src: "public/icons/document.svg", color: "blue" },
      { src: "public/icons/send.svg", color: "blue" }
    ],
    link: "bulk-creation.html",
    plan: "Business",
    availability: "Generally Available",
    type: "Document generation"
  },
  {
    title: "Guided Document Creation",
    description: "Transform complex document creation into simple guided workflows. Help users create perfect documents every time with smart forms that automatically populate and customize content based on their inputs.",
    icons: [
      { src: "public/icons/workflow-automation.svg", color: "purple" },
      { src: "public/icons/crm-integration.svg", color: "blue" },
      { src: "public/icons/document.svg", color: "blue" }
    ],
    link: "guided-document-creation.html",
    plan: "Business",
    availability: "Generally Available",
    type: "Document generation"
  },
  {
    title: "Conditional Execution & Routing",
    description: "Enables workflows to branch or take different paths based on document data, metadata, or external triggers. Perfect for managing complex approval processes with varying requirements.",
    icons: [
      { src: "public/icons/document.svg", color: "blue" },
      { src: "public/icons/routing.svg", color: "blue" },
      { src: "public/icons/approval-workflow.svg", color: "purple" }
    ],
    link: "conditional-routing.html",
    plan: "Enterprise",
    availability: "In Development",
    type: "Workflow execution & routing"
  },
  {
    title: "Document Status-Triggered Creation",
    description: "Automatically generate the next document in your workflow when a PandaDoc document's status changes (e.g., Proposal signed triggers Contract creation). Perfect for workflows that stay entirely within the PandaDoc ecosystem.",
    icons: [
      { src: "public/icons/send.svg", color: "blue" },
      { src: "public/icons/trigger.svg", color: "green" },
      { src: "public/icons/document.svg", color: "blue" }
    ],
    link: "automated-document-creation.html",
    plan: "Add-on",
    availability: "Generally Available",
    type: "Trigger-based automation"
  },
  {
    title: "CRM-Triggered Document Creation",
    description: "Automatically generate documents when specific events occur in your CRM (e.g., deal stage changes, status updates). Perfect for sales and customer success workflows.",
    icons: [
      { src: "public/icons/crm.svg", color: "light-red" },
      { src: "public/icons/trigger.svg", color: "green" },
      { src: "public/icons/document.svg", color: "blue" }
    ],
    link: "crm-triggered-document-creation.html",
    plan: "Business",
    availability: "Generally Available",
    type: "Trigger-based automation"
  },
  {
    title: "Automated Generation based on Data Tables",
    description: "Enable single-click creation of complex documents through PandaDoc's enterprise features. The system automatically applies business rules and generates fully compliant documents with minimal user intervention.",
    icons: [
      { src: "public/icons/api-or-integration.svg", color: "blue" },
      { src: "public/icons/lookup-table.svg", color: "blue" },
      { src: "public/icons/rules.svg", color: "blue" },
      { src: "public/icons/document.svg", color: "blue" }
    ],
    link: "fully-automated-document-creation.html",
    plan: "Enterprise",
    availability: "Early Access",
    type: "AI-Driven automation"
  },
  {
    title: "Automated Document Creation (by Schedule)",
    description: "Automatically generates documents based on a predefined time schedule (e.g., monthly, quarterly, annually). Perfect for recurring reports, renewals, and compliance documents.",
    icons: [
      { src: "public/icons/trigger.svg", color: "green" },
      { src: "public/icons/document.svg", color: "blue" },
      { src: "public/icons/send.svg", color: "blue" }
    ],
    link: "automated-document-creation-by-schedule.html",
    plan: "Business",
    availability: "In Plans",
    type: "Trigger-based automation"
  }
]; 