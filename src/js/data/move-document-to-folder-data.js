window.moveDocumentToFolderData = {
  title: "Move Document to Folder After Send or Completion",
  name: "Move Document to Folder After Send or Completion",
  plans: "Starter",
  description: "Automatically file documents in the right folder after sending or signing. This workflow ensures your workspace stays organized and documents are always easy to find.",
  useCase: "Store all signed invoices in a specific folder, or auto-organize NDAs, proposals, and contracts by type.",
  example: "Store all signed invoices in a specific folder, or auto-organize NDAs, proposals, and contracts by type.",
  steps: [
    {
      name: "Document Sent or Completed",
      icon: "public/icons/trigger.svg",
      iconBgColor: "rgba(36, 174, 97, 0.08)",
      iconBorderColor: "rgba(36, 174, 97, 0.16)",
      alt: "Trigger"
    },
    {
      name: "Check Document Type & Tags",
      icon: "public/icons/document.svg",
      iconBgColor: "rgba(33, 103, 198, 0.08)",
      iconBorderColor: "rgba(33, 103, 198, 0.16)",
      alt: "Document"
    },
    {
      name: "Move to Correct Folder",
      icon: "public/icons/document-storage.svg",
      iconBgColor: "rgba(20, 150, 160, 0.08)",
      iconBorderColor: "rgba(20, 150, 160, 0.16)",
      alt: "Folder"
    }
  ],
  features: [
    {
      title: "Key Features",
      description: "- Automatically moves documents to the correct folder after sending or completion.<br>- Auto-tags by type (e.g., proposal, NDA, invoice).<br>- Auto-creates folders if missing.<br>- Keeps your workspace organized and searchable.<br>- Runs asynchronously, so user experience is not interrupted."
    }
  ],
  workflowDocumentScenarios: {
    "Invoices & Payments": "Store all signed invoices in a dedicated folder for easy access and compliance.",
    "NDA (Sales Administration)": "Automatically organize NDAs by client or project for better tracking.",
    "Service Agreements": "Keep all service agreements in the right folder for quick reference and audits.",
    "Sales Proposals": "Proposals are filed in the correct folder for each client or opportunity.",
    "Sales Contracts": "Contracts are moved to a secure folder after signing for compliance.",
    "Employment Contract": "Employment contracts are stored in the HR folder after completion.",
    "Offer Letters": "Offer letters are organized by candidate in the onboarding folder.",
    "Purchase Orders": "Purchase orders are automatically placed in the procurement folder.",
    "Vendor Agreements": "Vendor agreements are filed for easy vendor management.",
    "Service Requests": "Service request forms are routed to the appropriate department folder."
  }
}; 