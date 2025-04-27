window.automatedDocumentCreationData = {
    title: "Automated Document Creation (Internal Trigger)",
    name: "Automated Document Creation",
    plans: "Business, Enterprise (with Automations add-on)",
    description: `Creates a new PandaDoc document automatically when another PandaDoc document reaches a specific status (typically 'Completed'). Connects sequential steps within a purely PandaDoc-driven workflow (e.g., signed Proposal triggers Contract, signed Contract triggers Invoice).`,
    useCase: "Multi-stage document processes where one signed document logically leads to the next step/document, desire to keep workflow automated within PandaDoc ecosystem.",
    example: `A company sends a proposal for a project to their client. When the client accepts the proposal, the system automatically generates a detailed contract with all the agreed terms and sends it to the client for final review and signature. This automation eliminates manual steps between proposal acceptance and contract generation, ensuring a smooth transition from proposal to contract without any delays in the sales process.`,
    featuresTitle: "Automated Document Creation & Chaining",
    featuresIntro: "Automatically generate the next document in your workflow when a PandaDoc document reaches a specific status. Perfect for sales, onboarding, and service workflows that require seamless handoffs.",
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
            iconBgColor: "rgba(36, 174, 97, 0.08)",
            iconBorderColor: "rgba(36, 174, 97, 0.16)",
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
    documentTypes: [
        { name: "Sales Proposal (Completed)", scenario: "Automatically generate the formal contract once the client accepts the proposal." },
        { name: "Service Agreement (Completed)", scenario: "Automatically generate the first invoice or a welcome/setup checklist upon signing." },
        { name: "SOW / Change Order (Completed)", scenario: "Automatically generate invoice for the work specified or an internal work ticket." },
        { name: "Initial Form/Packet (Completed)", scenario: "Generate a secondary document based on completion of an initial intake process." }
    ]
}; 