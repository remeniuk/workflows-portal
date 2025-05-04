// List of automation workflow cards for dynamic rendering
window.automationsList = [
  {
    title: "Move Document to Folder After Send or Completion",
    description: "Automatically file documents in the right folder after sending or signing.",
    icons: [
      { src: "public/icons/trigger.svg", color: "green" },
      { src: "public/icons/document.svg", color: "blue" },
      { src: "public/icons/document-storage.svg", color: "teal" }
    ],
    link: "move-document-to-folder.html",
    plan: "Starter",
    availability: "Generally Available",
    type: "Document management"
  },
  {
    title: "Post-Signature Follow-Up Document",
    description: "Send the next document automatically after a contract is signed.",
    icons: [
      { src: "public/icons/trigger.svg", color: "green" },
      { src: "public/icons/document.svg", color: "blue" },
      { src: "public/icons/send.svg", color: "blue" }
    ],
    link: "post-signature-follow-up.html",
    plan: "Starter",
    availability: "Generally Available",
    type: "Workflow execution & routing"
  },
  {
    title: "Contract Naming & Tagging Standardization",
    description: "Auto-name, tag, and organize contracts for easy search and compliance.",
    icons: [
      { src: "public/icons/trigger.svg", color: "green" },
      { src: "public/icons/document.svg", color: "blue" },
      { src: "public/icons/document-storage.svg", color: "teal" }
    ],
    link: "contract-naming-tagging.html",
    plan: "Starter",
    availability: "Generally Available",
    type: "Document management"
  },
  {
    title: "2-Way CRM Sync",
    description: "Keep PandaDoc and your CRM (HubSpot, Salesforce, Pipedrive, etc.) perfectly aligned with automated 2-way data sync for fields, products, and documents.",
    icons: [
      { src: "public/icons/api-or-integration.svg", color: "blue" },
      { src: "public/icons/document.svg", color: "blue" },
      { src: "public/icons/send.svg", color: "blue" }
    ],
    link: "2way-sync-crm.html",
    plan: "Business",
    availability: "Generally Available",
    type: "Integrations & custom logic"
  },
  {
    title: "Basic Document Approval Workflow",
    description: "Route documents to designated approvers before sending. Ensure compliance and transparency with approval order and group approvals.",
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
    title: "Conditional & Multi-Step Approval Workflow",
    description: "Automate approvals with conditions and multi-step routing. Trigger approvals only when criteria are met for advanced compliance.",
    icons: [
      { src: "public/icons/document.svg", color: "blue" },
      { src: "public/icons/approval-workflow.svg", color: "purple" },
      { src: "public/icons/send.svg", color: "blue" }
    ],
    link: "conditional-approvals.html",
    plan: "Enterprise",
    availability: "Generally Available",
    type: "Workflow execution & routing"
  },
  {
    title: "Auto-Save Documents to Cloud Storage",
    description: "Automatically save finalized documents to Google Drive, SharePoint, Dropbox, and more.",
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
    availability: "In Plans",
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
    availability: "Generally Available",
    type: "Workflow execution & routing"
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
    availability: "Early Access",
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
    availability: "In Plans",
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
    plan: "Business",
    availability: "In Development",
    type: "Workflow execution & routing"
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
    availability: "In Plans",
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
    availability: "In Plans",
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