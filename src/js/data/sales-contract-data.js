const salesContractData = {
    title: "Sales Contract",
    name: "Sales Contract",
    plans: "Business, Enterprise",
    screenshot: "public/images/sales-contract-large.png",
    description: `Create, negotiate, and sign sales contracts faster with PandaDoc. Our Sales Contract templates help you capture all the key terms, reduce manual work, and ensure every deal is closed with clarity and compliance. Use our guided workflows to make contract creation effortless for your team and your clients.`,
    example: `A sales manager uses PandaDoc's guided workflow to generate a contract for a new client. Instead of editing a long document, the manager fills out a simple form, and the system generates a compliant, professional contract ready for e-signature. This saves time, reduces errors, and accelerates the sales cycle.`,
    steps: [
        {
            name: "Trigger in CRM or sales system",
            icon: "public/icons/trigger.svg",
            alt: "Trigger",
            iconBgColor: "rgba(36, 174, 97, 0.08)",
            iconBorderColor: "rgba(36, 174, 97, 0.16)"
        },
        {
            name: "Generate contract",
            icon: "public/icons/document.svg",
            alt: "Document",
            iconBgColor: "rgba(33, 103, 198, 0.08)",
            iconBorderColor: "rgba(33, 103, 198, 0.16)"
        },
        {
            name: "Send for signature",
            icon: "public/icons/send.svg",
            alt: "Send",
            iconBgColor: "rgba(68, 169, 154, 0.08)",
            iconBorderColor: "rgba(68, 169, 154, 0.16)"
        },
        {
            name: "Contract signed",
            icon: "public/icons/trigger.svg",
            alt: "Trigger Signed",
            iconBgColor: "rgba(255, 152, 0, 0.08)",
            iconBorderColor: "rgba(255, 152, 0, 0.16)"
        },
        {
            name: "Store contract in cloud",
            icon: "public/icons/external-storage.svg",
            alt: "Store in Cloud",
            iconBgColor: "rgba(154, 68, 169, 0.08)",
            iconBorderColor: "rgba(154, 68, 169, 0.16)"
        }
    ],
    documentTypes: [
        { 
            name: "Product Sales",
            scenario: "Formalize the sale of products with clear terms, pricing, and delivery details."
        },
        { 
            name: "Service Agreements",
            scenario: "Define the scope, deliverables, and payment terms for services provided."
        },
        { 
            name: "Subscription Contracts",
            scenario: "Set up recurring billing and renewal terms for SaaS or other subscription-based offerings."
        },
        { 
            name: "Channel/Partner Sales",
            scenario: "Establish agreements with resellers, distributors, or partners."
        },
        { 
            name: "Custom Solutions",
            scenario: "Capture unique terms for custom or complex sales deals."
        }
    ],
    relatedWorkflows: [
        {
            title: "Guided Document Creation",
            description: "Let the AI agent help you by turning your long contract into a simple form. Fill in the form, and the agent will generate the document for you.",
            url: "workflow-detail.html?id=guided-document-creation",
            icons: [
                { src: "public/icons/workflow-automation.svg", alt: "Workflow Automation", color: "purple" },
                { src: "public/icons/crm-integration.svg", alt: "CRM Integration", color: "blue" },
                { src: "public/icons/document.svg", alt: "Document", color: "blue" }
            ]
        },
        {
            title: "Move Document to Folder After Send or Completion",
            description: "Automatically file contracts in the right folder after sending or signing. This workflow keeps your workspace organized and ensures contracts are always easy to find.",
            url: "workflow-detail.html?id=move-document-to-folder-after-send-or-completion",
            icons: [
                { src: "public/icons/trigger.svg", alt: "Trigger", color: "green" },
                { src: "public/icons/document.svg", alt: "Document", color: "blue" },
                { src: "public/icons/document-storage.svg", alt: "Folder", color: "teal" }
            ]
        },
        {
            title: "Post-Signature Follow-Up Document",
            description: "Send the next document automatically after a contract is signed. This workflow helps you keep business moving by instantly generating and sending the next required document.",
            url: "workflow-detail.html?id=post-signature-follow-up",
            icons: [
                { src: "public/icons/trigger.svg", alt: "Trigger", color: "green" },
                { src: "public/icons/document.svg", alt: "Document", color: "blue" },
                { src: "public/icons/send.svg", alt: "Send", color: "blue" }
            ]
        }
    ],
    usageCount: 10231,
    rating: 4.5,
    reviewsCount: 18,
    aiAssistantIncluded: true,
    userRating: 0 // Placeholder for user rating, static for now
};

window.salesContractData = salesContractData;

window.salesContractData.workflowDocumentScenarios = {
    "Product Sales": "Pull product and customer data, generate contract, update CRM with contract status.",
    "Service Agreements": "Pull service and client data, generate contract, update project management system.",
    "Subscription Contracts": "Pull subscription details, generate contract, update billing system.",
    "Channel/Partner Sales": "Pull partner data, generate contract, update partner portal.",
    "Custom Solutions": "Pull custom deal data, generate contract, update CRM and project system."
}; 