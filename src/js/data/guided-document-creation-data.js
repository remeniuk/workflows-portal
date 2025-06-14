const guidedDocumentCreationData = {
    title: "Guided Document Creation",
    name: "Guided Document Creation",
    plans: "Business, Enterprise",
    description: "Create documents with confidence using guided templates that walk you through the process step by step. Perfect for complex documents that require specific information and formatting.",
    useCase: "Ideal for sales proposals, contracts, service agreements, and other documents that need to be created with specific information and formatting.",
    example: "When creating a sales proposal, the system guides you through each section, ensuring you include all necessary information and format it correctly.",
    featuresTitle: "Guided Document Creation",
    featuresIntro: "Create documents with confidence using guided templates that walk you through the process step by step.",
    steps: [
        {
            name: "Select Template",
            icon: "public/icons/document.svg",
            alt: "Document",
            iconBgColor: "rgba(33, 103, 198, 0.08)",
            iconBorderColor: "rgba(33, 103, 198, 0.16)"
        },
        {
            name: "Fill Information",
            icon: "public/icons/form.svg",
            alt: "Form",
            iconBgColor: "rgba(33, 103, 198, 0.08)",
            iconBorderColor: "rgba(33, 103, 198, 0.16)"
        },
        {
            name: "Review & Send",
            icon: "public/icons/send.svg",
            alt: "Send",
            iconBgColor: "rgba(33, 103, 198, 0.08)",
            iconBorderColor: "rgba(33, 103, 198, 0.16)"
        }
    ],
    features: [
        {
            title: "Step-by-Step Guidance",
            description: "Follow a guided process to create documents, ensuring you include all necessary information and format it correctly."
        },
        {
            title: "Template Library",
            description: "Access a library of pre-built templates for common document types, saving time and ensuring consistency."
        },
        {
            title: "Customizable Templates",
            description: "Create and customize templates to match your specific business needs and branding."
        },
        {
            title: "Real-time Preview",
            description: "See how your document will look as you create it, ensuring it meets your requirements before sending."
        }
    ]
};

window.guidedDocumentCreationData = guidedDocumentCreationData;

window.guidedDocumentCreationData.workflowDocumentScenarios = {
    "Sales Proposals": "Create persuasive proposals to win new business and close deals faster.",
    "Sales Contracts": "Formalize agreements with clients to ensure clear terms and conditions for every sale.",
    "Service Agreements": "Outline the scope, deliverables, and terms for services provided to clients.",
    "Sales Quotes": "Provide clients with detailed pricing and terms for products or services.",
    "Sales & Marketing Collateral": "Share branded materials to support sales and marketing efforts.",
    "Invoices & Payments": "Request and track payments for goods or services rendered.",
    "NDA": "Protect confidential information shared during business processes.",
    "Employment Contract": "Define the terms and conditions of employment for new hires.",
    "Compensation Change Forms": "Document and approve changes to employee compensation.",
    "Offer Letters": "Extend formal job offers to candidates with key terms outlined.",
    "Contractor Agreements": "Set clear expectations and terms for contractor engagements.",
    "Government Forms": "Complete required government documentation for compliance.",
    "Compliance Policies": "Communicate company policies to ensure regulatory compliance.",
    "Liability Waivers": "Limit company liability by having participants acknowledge risks.",
    "Service Requests": "Submit and track requests for internal or external services.",
    "Purchase Orders": "Authorize and document the purchase of goods or services.",
    "Tax Forms": "Report and file necessary tax information with authorities."
}; 