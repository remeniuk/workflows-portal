window.guidedDocumentCreationData = {
    title: "Guided Document Creation",
    name: "Guided Document Creation",
    plans: "Business",
    description: "Streamline the creation of complex documents with Guided Document Creation in PandaDoc. Instead of starting from scratch or editing manually, users are prompted through a series of questions and choices that automatically customize the document.",
    useCase: "Perfect for generating contracts, MSAs, NDAs, onboarding packages, or project scopes — where different terms, clauses, or attachments are needed based on the situation.",
    example: "A legal team creating a Master Services Agreement can dynamically include the right jurisdiction clauses and service descriptions based on project type and client location — all through a simple guided experience.",
    steps: [
        {
            icon: "public/icons/form.svg",
            iconBgColor: "rgba(154, 68, 169, 0.08)",
            iconBorderColor: "rgba(154, 68, 169, 0.16)",
            name: "Fill out a form",
            alt: "Form"
        },
        {
            icon: "public/icons/document.svg",
            iconBgColor: "rgba(33, 103, 198, 0.08)",
            iconBorderColor: "rgba(33, 103, 198, 0.16)",
            name: "Generate document",
            alt: "Document"
        },
        {
            icon: "public/icons/send.svg",
            iconBgColor: "rgba(33, 103, 198, 0.08)",
            iconBorderColor: "rgba(33, 103, 198, 0.16)",
            name: "Send document",
            alt: "Send"
        }
    ],
    documentTypes: [
        { name: "Statements of Work (SOWs - Modular)", scenario: "Select modules, add specifics, no template access needed" },
        { name: "Change Orders", scenario: "Detail changes, cost, reference contract, faster than editing doc" },
        { name: "Simple Service Agreements/Contracts", scenario: "Input client info, select packages, define dates, no template navigation" },
        { name: "Internal Requests (PO, Funding, HR)", scenario: "Employee details request, justification, amounts, ensures all info captured" },
        { name: "HR Action Forms (Comp Change, etc.)", scenario: "Manager inputs employee and change details, ensures consistency" },
        { name: "Sales Proposals (Modular/Simple)", scenario: "Select content blocks, add client specifics, less ideal for high customization" },
        { name: "Simple Contracts (Internal Initiation)", scenario: "Generate standard contract variations by form" },
        { name: "Vendor/Contractor Setup Forms", scenario: "Input vendor details, service, payment info, populate standard agreement" },
        { name: "Onboarding Checklists", scenario: "Standardize onboarding steps and documentation for new hires or vendors" },
        { name: "Expense Reports", scenario: "Employees submit expenses via form, auto-generate report for approval" },
        { name: "Sales Contracts (Complex)", scenario: "High variability, needs template/content library interaction" },
        { name: "NDAs", scenario: "Often triggered by CRM or sent via template, form adds little efficiency" }
    ]
}; 