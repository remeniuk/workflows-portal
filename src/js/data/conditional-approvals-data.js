const conditionalApprovalsData = {
    title: "Conditional & Multi-Step Approval Workflow",
    name: "Conditional & Multi-Step Approval Workflow",
    plans: "Business (add-on), Enterprise",
    description: "Automate approvals with conditions and multi-step routing. Trigger approvals only when criteria are met for advanced compliance.",
    useCase: "Perfect for contracts, quotes, or proposals that require approval only under certain conditions, such as high-value deals or special terms.",
    example: "If a contract value exceeds $100,000, route to legal for approval. If a discount over 20% is applied, require finance approval. Otherwise, send directly to the client.",
    featuresTitle: "Automate Complex Approval Scenarios",
    featuresIntro: "Set up flexible, rules-based approval workflows that adapt to your business needs. Use conditions to trigger approvals only when necessary, and keep your process efficient and compliant.",
    steps: [
        { name: "Create document", icon: "public/icons/document.svg", alt: "Document", iconBgColor: "rgba(33, 103, 198, 0.08)", iconBorderColor: "rgba(33, 103, 198, 0.16)" },
        { name: "Conditional & multi-step approval", icon: "public/icons/approval-workflow.svg", alt: "Conditional & Multi-Step Approval", iconBgColor: "rgba(255, 152, 0, 0.08)", iconBorderColor: "rgba(255, 152, 0, 0.16)" },
        { name: "Send to client", icon: "public/icons/send.svg", alt: "Send", iconBgColor: "rgba(33, 103, 198, 0.08)", iconBorderColor: "rgba(33, 103, 198, 0.16)" }
    ],
    features: [
        {
            title: "Set Approval Conditions",
            description: "Trigger approvals based on document value, discounts, quote variables, or custom fields. Use AND/OR logic for advanced routing."
        },
        {
            title: "Dynamic & Multi-Step Routing",
            description: "Route documents to different approvers or groups depending on the conditions met. Chain multiple approval steps for complex workflows. Bypass approvals when not needed."
        },
        {
            title: "Approval Groups & Order",
            description: "Combine conditional logic with approval order and groups for multi-stage, flexible workflows."
        },
        {
            title: "Notifications & Audit Trail",
            description: "Approvers receive email notifications only when conditions are met. All actions are tracked in the audit trail."
        },
        {
            title: "Easy Setup & Editing",
            description: "Add, edit, or remove conditions and approvers at any time from your template settings."
        }
    ],
    workflowDocumentScenarios: {
        "Sales Proposals": "If proposal value > $50,000, route to Sales Director; otherwise, send directly to client.",
        "Contracts": "If contract includes non-standard terms, route to Legal; if value > $100,000, add CFO approval.",
        "Quotes": "If discount > 15%, require Finance approval; otherwise, only Sales Manager approval needed.",
        "Purchase Orders": "If PO is for IT equipment, route to IT Manager; if over $10,000, also require Finance approval.",
        "Service Agreements": "If agreement duration > 2 years, require Legal review; otherwise, send to client after Manager approval."
    }
};

window.conditionalApprovalsData = conditionalApprovalsData; 