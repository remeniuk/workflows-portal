window.crmTriggeredDocumentCreationData = {
    title: "Automated Document Creation (Integration Trigger)",
    name: "CRM-Triggered Document Creation",
    plans: "Business, Enterprise (with Automations add-on)",
    description: `Generates a PandaDoc document automatically based on an event occurring in an external integrated system (most commonly a CRM Deal Stage change, HRIS status update, ERP order status). This is a cornerstone of cross-system workflow automation, eliminating manual document initiation.`,
    useCase: "Heavy users of integrated systems (CRM, HRIS, ERP), high-volume processes tied to stages in those systems, strong desire to eliminate manual initiation steps and reduce delays.",
    example: `A company's CRM system automatically triggers document creation when a deal reaches "Closed Won" status. The system generates a detailed contract with all the agreed terms and sends it to the client for signature. This automation eliminates manual steps between deal closure and contract generation, ensuring a smooth transition from sales to contracting without any delays in the process.`,
    featuresTitle: "Cross-System Document Automation",
    featuresIntro: "Automatically generate documents based on events in your integrated systems. Perfect for sales, HR, and operations workflows that require seamless handoffs between systems.",
    steps: [
        {
            icon: "public/icons/crm.svg",
            iconBgColor: "rgba(33, 103, 198, 0.08)",
            iconBorderColor: "rgba(33, 103, 198, 0.16)",
            name: "CRM status change",
            alt: "CRM Status Change"
        },
        {
            icon: "public/icons/trigger.svg",
            iconBgColor: "rgba(36, 174, 97, 0.08)",
            iconBorderColor: "rgba(36, 174, 97, 0.16)",
            name: "Trigger: Status update",
            alt: "Status Update Trigger"
        },
        {
            icon: "public/icons/document.svg",
            iconBgColor: "rgba(33, 103, 198, 0.08)",
            iconBorderColor: "rgba(33, 103, 198, 0.16)",
            name: "Generate document",
            alt: "Generate Document"
        },
        {
            icon: "public/icons/send.svg",
            iconBgColor: "rgba(33, 103, 198, 0.08)",
            iconBorderColor: "rgba(33, 103, 198, 0.16)",
            name: "Send document",
            alt: "Send Document"
        }
    ],
    documentTypes: [
        { 
            name: "Sales Contract / Service Agreement",
            scenario: "Automatically generate the contract when the deal is marked as won or ready for contracting in CRM."
        },
        { 
            name: "Offer Letter / Employment Contract",
            scenario: "Automatically generate the offer letter once internal approvals are complete in the hiring system."
        },
        { 
            name: "Onboarding Packet / HR Forms",
            scenario: "Automatically generate the necessary onboarding paperwork when a new employee record is finalized in HRIS."
        },
        { 
            name: "Shipping Documents / Packing List",
            scenario: "Automatically generate shipping documentation when an order is processed in the ERP."
        },
        { 
            name: "NDA",
            scenario: "Automatically generate an NDA when a deal progresses to a stage requiring confidentiality."
        },
        { 
            name: "Change Order / SOW",
            scenario: "Automatically generate a formal Change Order document when a change request task is marked approved."
        }
    ]
}; 