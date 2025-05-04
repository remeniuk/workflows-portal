const approvalWorkflowData = {
    title: "Basic Document Approval Workflow",
    name: "Basic Document Approval Workflow",
    plans: "Business, Enterprise",
    description: "Route documents to designated approvers before sending to recipients. Ensure compliance and transparency by automating internal reviews and approval orders at the template level.",
    useCase: "Ideal for contracts, NDAs, proposals, and other documents that require internal review before being sent externally.",
    example: "When sending a contract, the legal team is automatically prompted to review and approve the document before it goes to the client.",
    featuresTitle: "Streamline Your Document Approval Process",
    featuresIntro: "Automate the approval process and define a clear path for every document you create. Set up approval order and groups, and track every step with audit trails and notifications.",
    steps: [
        { name: "Create document", icon: "public/icons/document.svg", alt: "Document", iconBgColor: "rgba(33, 103, 198, 0.08)", iconBorderColor: "rgba(33, 103, 198, 0.16)" },
        { name: "Approval", icon: "public/icons/approval-workflow.svg", alt: "Approval", iconBgColor: "rgba(255, 152, 0, 0.08)", iconBorderColor: "rgba(255, 152, 0, 0.16)" },
        { name: "Send to client", icon: "public/icons/send.svg", alt: "Send", iconBgColor: "rgba(33, 103, 198, 0.08)", iconBorderColor: "rgba(33, 103, 198, 0.16)" }
    ],
    features: [
        {
            title: "Template-Level Approvals",
            description: "Enable and manage approval workflows directly on your document templates. Set up approval order and groups for flexible routing."
        },
        {
            title: "Approval Groups & Order",
            description: "Add individual approvers or groups. Only one approval is needed per group. Set approval order for multi-stage reviews."
        },
        {
            title: "Notifications & Audit Trail",
            description: "Approvers receive email notifications. All approval actions are tracked in the audit trail and latest activity."
        },
        {
            title: "Approve on Behalf",
            description: "Admins and Managers can approve documents on behalf of others if needed."
        },
        {
            title: "Easy Editing",
            description: "Edit or remove approvers and groups at any time before sending for approval."
        }
    ],
    enterpriseFeatures: {
        description: "On the Enterprise plan, you get access to advanced approval workflow capabilities that help you handle complex approval scenarios with ease:",
        features: [
            {
                title: "Conditional Approvals",
                description: "Set up dynamic approval paths based on document content, values, or metadata. For example, route contracts to legal only when the value exceeds $100,000 or when specific clauses are included."
            },
            {
                title: "Approval Groups",
                description: "Create predefined groups of approvers (like 'Legal Team' or 'Finance Department') and route documents to entire teams at once. Documents can be approved when any member of the group approves, or require approval from all members."
            },
            {
                title: "Advanced Rules Engine",
                description: "Build complex approval logic using a powerful rules engine. Combine multiple conditions, set up parallel approval paths, and create sophisticated approval workflows that match your business processes."
            },
            {
                title: "Role-Based Approvals",
                description: "Route documents based on user roles rather than specific individuals, making your workflows more flexible and maintainable as your organization grows."
            }
        ]
    }
};

window.approvalWorkflowData = approvalWorkflowData;

window.approvalWorkflowData.workflowDocumentScenarios = {
    "Sales Proposals": "Pull proposal data, route to approvers based on value/terms, update proposal status in system.",
    "Sales Contracts": "Pull contract data, route to legal/finance, update contract status in system.",
    "Service Agreements": "Pull agreement data, route to approvers, update agreement status in system.",
    "Sales Quotes": "Pull quote data, route based on discount/value, update quote status in system.",
    "Invoices & Payments": "Pull invoice data, route to finance, update payment status in system.",
    "Employment Contract": "Pull contract data, route to HR/legal, update contract status in system.",
    "Compensation Change Forms": "Pull form data, route to HR/finance, update compensation status in system.",
    "Offer Letters": "Pull offer data, route to HR/management, update offer status in system.",
    "Contractor Agreements": "Pull agreement data, route to legal/HR, update agreement status in system.",
    "Government Forms": "Pull form data, route to HR/legal, update form status in system.",
    "Compliance Policies": "Pull policy data, route to legal/compliance, update policy status in system.",
    "NDA": "Pull NDA data, route to legal, update NDA status in system.",
    "Liability Waivers": "Pull waiver data, route to legal, update waiver status in system.",
    "Service Requests": "Pull request data, route to approvers, update request status in system.",
    "Purchase Orders": "Pull PO data, route to finance, update PO status in system.",
    "Tax Forms": "Pull form data, route to finance, update form status in system."
}; 