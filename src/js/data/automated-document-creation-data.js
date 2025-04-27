window.automatedDocumentCreationData = {
    title: "Document Status-Triggered Creation",
    name: "Document Status-Triggered Creation",
    plans: "Business, Enterprise (with Automations add-on)",
    description: `Creates a new PandaDoc document automatically when another PandaDoc document's status changes (typically 'Completed'). Connects sequential steps within a purely PandaDoc-driven workflow (e.g., signed Proposal triggers Contract, signed Contract triggers Invoice).`,
    useCase: "Multi-stage document processes where one signed document logically leads to the next step/document, desire to keep workflow automated within PandaDoc ecosystem.",
    example: `A company sends a proposal for a project to their client. When the client accepts the proposal, the system automatically generates a detailed contract with all the agreed terms and sends it to the client for final review and signature. This automation eliminates manual steps between proposal acceptance and contract generation, ensuring a smooth transition from proposal to contract without any delays in the sales process.`,
    featuresTitle: "Document Status-Triggered Creation & Chaining",
    featuresIntro: "Automatically generate the next document in your workflow when a PandaDoc document's status changes. Perfect for sales, onboarding, and service workflows that require seamless handoffs.",
    steps: [
        {
            icon: "public/icons/send.svg",
            iconBgColor: "rgba(33, 103, 198, 0.08)",
            iconBorderColor: "rgba(33, 103, 198, 0.16)",
            name: "Send proposal",
            alt: "Send Proposal"
        },
        {
            icon: "public/icons/trigger.svg",
            iconBgColor: "rgba(244, 67, 54, 0.08)",
            iconBorderColor: "rgba(244, 67, 54, 0.16)",
            name: "Trigger: Proposal accepted",
            alt: "Proposal Accepted"
        },
        {
            icon: "public/icons/document.svg",
            iconBgColor: "rgba(33, 103, 198, 0.08)",
            iconBorderColor: "rgba(33, 103, 198, 0.16)",
            name: "Generate contract",
            alt: "Generate Contract"
        },
        {
            icon: "public/icons/send.svg",
            iconBgColor: "rgba(33, 103, 198, 0.08)",
            iconBorderColor: "rgba(33, 103, 198, 0.16)",
            name: "Send contract",
            alt: "Send Contract"
        }
    ],
    workflowDocumentScenarios: {
        "Sales Proposals": "Trigger contract generation upon proposal acceptance, pull deal/product data, generate contract with terms, update deal stage.",
        "Sales Contracts": "Trigger invoice/welcome doc upon agreement signing, pull service details, generate next steps document, update service status.",
        "Service Agreements": "Trigger invoice/work ticket upon SOW completion, pull work details, generate billing document, update project status.",
        "Sales Quotes": "Trigger secondary doc upon form completion, pull submitted data, generate next-step document, update process status."
    }
}; 