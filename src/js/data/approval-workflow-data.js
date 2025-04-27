const approvalWorkflowData = {
    title: "Approval Workflow",
    name: "Approval Workflow",
    plans: "Business, Enterprise",
    description: "Ensure every document is error-free and compliant before it reaches your clients with PandaDoc Approval Workflows. Automate the review process by assigning approvers at the template level and setting approval orders to route documents to the right stakeholders at the right time.",
    useCase: "Ideal for contracts, MSAs, NDAs, hiring packages, project scopes, and proposals that require internal review before sending externally.",
    example: "When sending a services agreement, the legal team is automatically prompted to review and approve the document if specific clauses or high contract values are included — saving time, avoiding manual follow-ups, and ensuring full compliance.",
    featuresTitle: "Streamline Your Document Approval Process",
    featuresIntro: "Stop chasing down key stakeholders and sending countless reminder emails. Automate the approval process and define a clear path for every document you create.",
    steps: [
        {
            name: "Create document",
            icon: "public/icons/document.svg",
            alt: "Document",
            iconBgColor: "rgba(33, 103, 198, 0.08)",
            iconBorderColor: "rgba(33, 103, 198, 0.16)"
        },
        {
            name: "Route for approval",
            icon: "public/icons/approval-workflow.svg",
            alt: "Approval",
            iconBgColor: "rgba(255, 152, 0, 0.08)",
            iconBorderColor: "rgba(255, 152, 0, 0.16)"
        },
        {
            name: "Send to client",
            icon: "public/icons/send.svg",
            alt: "Send",
            iconBgColor: "rgba(33, 103, 198, 0.08)",
            iconBorderColor: "rgba(33, 103, 198, 0.16)"
        }
    ],
    features: [
        {
            title: "Create a Seamless Document Approval Process",
            description: "Make sure the right people review your document at the right time. Set up an approval order in your template to ensure the right people are looped in automatically. To have the same person review a document at different stages, you can add them as an approver multiple times."
        },
        {
            title: "Customize Approval Processes",
            description: "Set up an automated internal workflow with designated approvers before sending to recipients. Designated approvers receive a document only when certain conditions are met, such as a specific document value or when adding a discount."
        },
        {
            title: "Notifications & Audit Trails",
            description: "Reviewers receive an email notification when a document is ready to approve. Audit trails and latest activity tiles track a document's approval status, so you always know where you are in the process."
        },
        {
            title: "Improve Communication and Collaboration",
            description: "Approvers can leave comments directly in the document. If a document is rejected, the sender must make edits and resend for review. Documents never go to clients before they're ready and bottlenecks are identified and easily eliminated."
        },
        {
            title: "Keep Documents Moving",
            description: "Set up an approval order, send your document for review, and lock sensitive content while tracking changes easily."
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
    },
    documentTypes: [
        {
            name: "Sales Quotes/Proposals (Discounted)",
            scenario: "Route quotes/proposals exceeding certain discount thresholds or total values to managers/finance for approval before sending to the client."
        },
        {
            name: "Sales Contracts/MSAs/SOWs",
            scenario: "Route agreements for legal, finance, or operational review based on complexity, value, or non-standard terms before final signature."
        },
        {
            name: "Purchase Orders",
            scenario: "Route internal POs for budget holder or finance department approval before sending to the vendor."
        },
        {
            name: "HR Action Forms (Comp Change, etc.)",
            scenario: "Route salary changes, promotions, or significant policy exceptions through management/HR leadership for approval."
        },
        {
            name: "Vendor Agreements/Contracts",
            scenario: "Ensure procurement/legal/finance reviews and approves agreements with new or existing vendors before they are finalized."
        },
        {
            name: "Change Orders",
            scenario: "Route significant change orders (affecting scope or budget) for project manager or client approval."
        },
        {
            name: "Offer Letters (Exec/High Value)",
            scenario: "High-level or non-standard offer letters may require multiple internal approvals before being extended."
        },
        {
            name: "Expense Reports/Internal Requests",
            scenario: "Automate the approval routing for internal financial requests based on amount or department policy."
        },
        {
            name: "NDAs (Standard)",
            scenario: "Standard NDAs often have pre-approved terms and may not require an instance-by-instance approval workflow."
        },
        {
            name: "Compliance Policies (Acknowledgment)",
            scenario: "Typically sent for signature/acknowledgment, not usually requiring a pre-send approval workflow for the standardized policy document itself."
        }
    ]
};

window.approvalWorkflowData = approvalWorkflowData; 