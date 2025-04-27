const customWorkflowData = {
    title: "Custom Logic & API Integration",
    name: "Custom Logic & API Integration",
    plans: "Enterprise",
    description: `Build custom automations with PandaDoc's API or logic steps to support proprietary systems or advanced workflows. Create specialized integrations, implement complex business logic, and connect with any system through custom code. Leverage AI capabilities by making calls to LLMs or AI agents to enhance your document workflows. The code is written in Python, the most common and widely supported language, making it easy to generate and maintain with the help of AI assistants.`,
    useCase: "Ideal for companies with in-house developers or integration partners, businesses using custom-built software, or those needing special signing and data flows.",
    example: `Imagine you're generating contracts where pricing depends on live inventory data from a custom warehouse system. A Custom Code Step can pull that information in real time, calculate the right price, and update the document — without any manual work. You can even integrate AI to analyze contract terms or generate personalized content based on customer data.`,
    featuresTitle: "Maximum Flexibility with Custom Code",
    featuresIntro: "Extend your workflow capabilities beyond standard automation tools with custom code integration.",
    features: [
        {
            title: "Custom Calculations & Logic",
            description: "Perform complex calculations and implement custom business logic that can't be handled by standard workflows or automation tools."
        },
        {
            title: "System Integration",
            description: "Connect directly to proprietary or industry-specific systems (like legal software, healthcare records, or construction platforms) through APIs and webhooks."
        },
        {
            title: "Automated Data Flow",
            description: "Automatically pull or push data between PandaDoc and your own software, eliminating manual steps and reducing errors."
        },
        {
            title: "Custom Triggers & Actions",
            description: "Trigger special actions, embed signing processes, or build entirely unique flows based on your company's specific needs."
        }
    ],
    steps: [
        {
            name: "Custom Integration",
            icon: "public/icons/storage.svg",
            alt: "Custom Integration",
            iconBgColor: "rgba(36, 174, 97, 0.08)",
            iconBorderColor: "rgba(36, 174, 97, 0.16)"
        },
        {
            name: "Customer Processing Logic",
            icon: "public/icons/storage.svg",
            alt: "Customer Processing Logic",
            iconBgColor: "rgba(36, 174, 97, 0.08)",
            iconBorderColor: "rgba(36, 174, 97, 0.16)"
        },
        {
            name: "Create Document",
            icon: "public/icons/document.svg",
            alt: "Create Document",
            iconBgColor: "rgba(33, 103, 198, 0.08)",
            iconBorderColor: "rgba(33, 103, 198, 0.16)"
        },
        {
            name: "Send Document",
            icon: "public/icons/send.svg",
            alt: "Send Document",
            iconBgColor: "rgba(33, 103, 198, 0.08)",
            iconBorderColor: "rgba(33, 103, 198, 0.16)"
        }
    ],
    workflowDocumentScenarios: {
        "Sales Proposals": "Generate dynamic proposals with real-time pricing and custom calculations",
        "Sales Contracts": "Create specialized contracts that integrate with your custom systems",
        "Service Agreements": "Build service agreements that automatically sync with your business logic",
        "Vendor Agreements": "Implement unique document flows with custom triggers and actions"
    }
};

window.customWorkflowData = customWorkflowData; 