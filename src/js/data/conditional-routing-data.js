window.conditionalRoutingData = {
    title: "Conditional Execution & Routing - PandaDoc",
    name: "Conditional Execution & Routing",
    plans: "Business, Enterprise",
    description: "Enables workflows to branch or take different paths based on document data, metadata, or external triggers. Perfect for managing complex approval processes with varying requirements based on specific conditions.",
    example: "A sales contract workflow that automatically routes to different approvers based on the contract value, with high-value contracts requiring executive approval and additional legal review.",
    featuresTitle: "Key Features",
    featuresIntro: "Conditional routing automation provides intelligent workflow branching based on your business rules and document data.",
    features: [
        {
            title: "Dynamic Approval Routing",
            description: "Automatically route documents to different approvers based on criteria like amount, department, or location. Ensure the right people review each document based on your business rules."
        },
        {
            title: "Conditional Document Generation",
            description: "Generate different document versions or include specific clauses based on conditions like contract value, product type, or customer location."
        },
        {
            title: "Multi-Stage Workflow Support",
            description: "Create complex workflows with multiple branches and decision points, all managed automatically based on your predefined rules."
        }
    ],
    enterpriseFeatures: {
        description: "Advanced conditional routing capabilities for complex business processes.",
        features: [
            {
                title: "Advanced Rule Builder",
                description: "Create complex routing rules with multiple conditions and nested logic"
            },
            {
                title: "Custom Integration Triggers",
                description: "Trigger workflow branches based on external system events and data"
            },
            {
                title: "Audit Trail & Compliance",
                description: "Detailed tracking of all routing decisions and workflow branches"
            }
        ]
    },
    documentTypes: [
        {
            name: "Sales Quotes/Proposals",
            scenario: "Route for approval only if discount > X%, route to different manager based on region, include specific terms based on product type."
        },
        {
            name: "Sales Contracts/Agreements/SOWs",
            scenario: "Route to legal only if non-standard clauses used, apply different T&Cs based on client location, trigger different onboarding paths."
        },
        {
            name: "HR Action Forms",
            scenario: "Route to higher-level approver based on % increase, require additional justification if outside policy."
        },
        {
            name: "Purchase Orders/Internal Requests",
            scenario: "Route to different budget approvers based on amount/department, require additional sign-off for capital expenditure."
        },
        {
            name: "Vendor Agreements",
            scenario: "Route to different internal reviewers based on vendor risk level or contract value."
        },
        {
            name: "Change Orders",
            scenario: "Require additional approvals if change order value exceeds a certain threshold relative to original contract."
        },
        {
            name: "Offer Letters",
            scenario: "Include location-specific benefits info, route non-standard offers for executive approval."
        },
        {
            name: "Intake Forms",
            scenario: "Route submitted form to different internal teams based on service requested or client type selected."
        }
    ],
    steps: [
        {
            icon: "public/icons/document.svg",
            alt: "Document",
            name: "Generate document",
            iconBgColor: "rgba(33, 103, 198, 0.08)",
            iconBorderColor: "rgba(33, 103, 198, 0.16)"
        },
        {
            type: "condition",
            icon: "public/images/branch.png",
            alt: "Condition",
            name: "Conditional Branch",
            iconBgColor: "rgba(33, 103, 198, 0.08)",
            iconBorderColor: "rgba(33, 103, 198, 0.16)",
            branches: [
                {
                    label: "Branch A",
                    steps: [
                        {
                            icon: "public/icons/approval-workflow.svg",
                            alt: "Approval",
                            name: "Approve with legal",
                            iconBgColor: "rgba(33, 103, 198, 0.08)",
                            iconBorderColor: "rgba(33, 103, 198, 0.16)"
                        }
                    ]
                },
                {
                    label: "Fallback",
                    steps: [
                        {
                            icon: "public/icons/send.svg",
                            alt: "Send",
                            name: "Send document",
                            iconBgColor: "rgba(33, 103, 198, 0.08)",
                            iconBorderColor: "rgba(33, 103, 198, 0.16)"
                        }
                    ]
                }
            ]
        }
    ]
}; 