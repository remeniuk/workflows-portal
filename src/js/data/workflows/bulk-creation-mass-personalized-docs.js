export default {
  "title": "Bulk Creation (Mass Personalized Docs)",
  "id": "bulk-creation-mass-personalized-docs",
  "description": "Generate a large number of individualized documents simultaneously from a single template and a data source (like a CSV or integrated list). Each document is populated with unique recipient data. Essential for mass communications requiring personalization and individual tracking/signatures.",
  "icons": [
    {
      "src": "public/icons/lookup-table.svg",
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
  "link": "bulk-creation.html",
  "plan": "Business",
  "availability": "Coming Soon",
  "type": "Document generation",
  "name": "Bulk Creation",
  "plans": "Business, Enterprise",
  "useCase": "HR sending personalized compensation letters or policy updates, Sales/Account Management sending mass renewals or updates, Finance sending individual statements, Marketing sending personalized offers. High volume needs where each doc needs unique data.",
  "example": "A company needs to send personalized compensation letters to 500 employees. Using Bulk Creation, they upload a CSV with employee data and a template. The system automatically generates 500 unique documents, each populated with the specific employee's salary, bonus, and personal details, ready for individual review and signature.",
  "featuresTitle": "Mass Personalization Made Simple",
  "featuresIntro": "Transform your bulk document needs into a streamlined, automated process. Perfect for HR, sales, finance, and marketing teams that need to send personalized documents at scale.",
  "steps": [
    {
      "name": "Select Lookup Table",
      "icon": "public/icons/lookup-table.svg",
      "alt": "Lookup Table",
      "iconBgColor": "rgba(36, 174, 97, 0.08)",
      "iconBorderColor": "rgba(36, 174, 97, 0.16)"
    },
    {
      "name": "Create Document (Batch)",
      "icon": "public/icons/document.svg",
      "alt": "Create Batch",
      "iconBgColor": "rgba(33, 103, 198, 0.08)",
      "iconBorderColor": "rgba(33, 103, 198, 0.16)"
    },
    {
      "name": "Send Document (Batch)",
      "icon": "public/icons/send.svg",
      "alt": "Send Batch",
      "iconBgColor": "rgba(33, 103, 198, 0.08)",
      "iconBorderColor": "rgba(33, 103, 198, 0.16)"
    }
  ],
  "features": [
    {
      "title": "Data Source Flexibility",
      "description": "Upload CSV files or connect to integrated systems to source your recipient data. Support for various data formats and structures."
    },
    {
      "title": "Smart Field Mapping",
      "description": "Intuitive interface to map data fields to document placeholders. Preview how data will populate in your documents before generation."
    },
    {
      "title": "Bulk Processing",
      "description": "Generate hundreds or thousands of documents simultaneously. Monitor progress and handle any errors or exceptions efficiently."
    },
    {
      "title": "Individual Tracking",
      "description": "Track each document's status, signature progress, and completion independently. Maintain full audit trail for compliance."
    }
  ],
  "workflowDocumentScenarios": {
    "Employment Contract": "Generate unique letters for each employee with their specific salary/bonus details from a master list/HRIS export.",
    "Sales Contracts": "Generate individual renewal agreements/notices for hundreds/thousands of clients, populated with their specific account details/dates.",
    "Compliance Policies": "Send updated policy documents requiring individual acknowledgment, personalized with employee name/ID.",
    "Sales & Marketing Collateral": "Marketing sends targeted offers where specific terms or codes vary per recipient segment, generated from a customer list.",
    "Tax Forms": "Accounting firms generate personalized engagement letters or requests for info for tax clients en masse at year-end.",
    "Invoices & Payments": "Generate individual statements or updates for investors based on their holdings/account data.",
    "Service Agreements": "Rolling out a standard agreement to a large group (e.g., all vendors, all contractors) with personalized details."
  },
  "shortDescription": "Generate and send hundreds of personalized documents at once from a template and data list."
};
