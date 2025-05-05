const aiPoweredApprovalsData = {
    title: "AI-Powered Approvals (Playbook-Based)",
    name: "AI-Powered Approvals (Playbook-Based)",
    plans: "Enterprise (In Development)",
    description: "AI reviews document changes, compares them to your template, and routes for approval based on your playbook—no rules setup required.",
    useCase: "Perfect for teams that use editable templates but want guardrails for pricing, terms, or contract language. Ideal for organizations managing approvals via Slack or email with no central logic, and businesses that want policy enforcement without building complex workflows.",
    example: "When a rep modifies pricing, terms, or other critical parts of a document, the agent detects the changes and checks them against your approval guidelines. These guidelines can live in a Google Doc, Word file, or anywhere else in plain language. No rule configuration needed.",
    featuresTitle: "AI-Driven, Playbook-Based Approvals",
    featuresIntro: "Let AI handle the heavy lifting. This workflow compares document changes to your original template and routes approvals based on your playbook—no rules engine required.",
    steps: [
        { name: "Load Document Changes", icon: "public/icons/document.svg", alt: "Document", iconBgColor: "rgba(33, 103, 198, 0.08)", iconBorderColor: "rgba(33, 103, 198, 0.16)" },
        { name: "Analyze Against Playbook", icon: "public/icons/ai_icon_only.svg", alt: "AI", iconBgColor: "rgba(0, 184, 212, 0.08)", iconBorderColor: "rgba(0, 184, 212, 0.16)" },
        { name: "Trigger Approval Routing", icon: "public/icons/approval-workflow.svg", alt: "Approval", iconBgColor: "rgba(255, 152, 0, 0.08)", iconBorderColor: "rgba(255, 152, 0, 0.16)" },
        { name: "Log Decision & Track Status", icon: "public/icons/document-storage.svg", alt: "Log", iconBgColor: "rgba(33, 103, 198, 0.08)", iconBorderColor: "rgba(33, 103, 198, 0.16)" }
    ],
    features: [
        {
            title: "No Rules to Configure",
            description: "Approval logic is driven by your playbook in plain English—no need to set up complex rules or conditions."
        },
        {
            title: "AI-Powered Change Detection",
            description: "The agent compares the sent document to its original template and identifies key differences automatically."
        },
        {
            title: "Playbook-Based Decisioning",
            description: "Approval guidelines can live in Google Docs, Word files, or any text format. The AI interprets your policies and applies them to each document change."
        },
        {
            title: "Automated Approval Routing",
            description: "Documents are routed to the right approvers based on what was changed, with no manual intervention."
        },
        {
            title: "Real-Time Logging & Status Tracking",
            description: "All actions and decisions are logged, and approval status is updated in real-time for full transparency."
        }
    ],
    enterpriseFeatures: {
        description: "On the Enterprise plan, leverage advanced AI capabilities for even more powerful, flexible approval workflows:",
        features: [
            {
                title: "Multi-Playbook Support",
                description: "Use different playbooks for different document types, teams, or regions."
            },
            {
                title: "Integration with Slack & Email",
                description: "Route approvals and send notifications directly to Slack or email, with no central logic required."
            },
            {
                title: "Customizable AI Sensitivity",
                description: "Adjust how strictly the AI interprets your playbook, from flagging minor edits to only major changes."
            },
            {
                title: "Audit-Ready Logs",
                description: "Maintain a complete, exportable record of all approval actions and decisions for compliance."
            }
        ]
    }
};

window.aiPoweredApprovalsData = aiPoweredApprovalsData; 