window.guidedDocumentCreationData = {
    title: "Guided Document Creation",
    name: "Guided Document Creation",
    plans: "Enterprise (or Business with Automations add-on)",
    description: `Streamline your document creation process with smart content and guided workflows. Create dynamic documents that automatically adapt to your customer's needs using conditional content, placeholders, and pre-selected collateral. Save time and reduce errors by leveraging smart variables that populate based on CRM data, customer characteristics, and predefined rules.`,
    useCase: "Ideal for sales teams who want to create personalized documents quickly while maintaining consistency and accuracy.",
    example: `A sales rep starts creating a proposal. The system automatically populates company information from the CRM, suggests relevant case studies based on the industry, and adjusts pricing based on the customer's location. The rep only needs to review and send the document.`,
    featuresTitle: "Smart Document Creation with Guided Workflows",
    featuresIntro: "Transform your document creation process with intelligent automation and smart content. Create personalized documents in minutes while ensuring consistency and accuracy across your team.",
    forms: {
        title: "Smart Forms & Questionnaires",
        description: `Create intelligent forms that adapt to user responses using smart content. Use conditional logic to show or hide questions based on previous answers, automatically populate fields from your CRM, and guide users through a personalized document creation experience. Smart forms help you gather the right information while maintaining a smooth user experience.`,
        features: [
            {
                title: "Conditional Logic",
                description: "Show or hide questions based on previous answers, creating a dynamic form experience."
            },
            {
                title: "CRM Integration",
                description: "Auto-populate form fields with data from your CRM, reducing manual entry."
            },
            {
                title: "Smart Validation",
                description: "Validate responses in real-time and provide instant feedback to users."
            }
        ]
    },
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