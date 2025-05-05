const ndaData = {
    title: "Non-Disclosure Agreement (NDA)",
    name: "Non-Disclosure Agreement",
    plans: "All Plans",
    screenshot: "public/images/nda-large-screenshot.png",
    description: `Streamline your confidential information protection with PandaDoc's NDA templates. Our templates are designed to be flexible and comprehensive, covering various scenarios from sales discussions to employee onboarding. Each NDA template can be customized to match your specific requirements while maintaining legal compliance.`,
    example: `A technology company uses PandaDoc's NDA template to protect sensitive information during sales discussions. The template automatically adapts based on the type of information being shared, includes appropriate jurisdiction-specific clauses, and can be signed electronically in minutes. This ensures both parties are protected while maintaining a smooth business process.`,
    steps: [
        {
            name: "Trigger in integrated system",
            icon: "public/icons/trigger.svg",
            alt: "Trigger",
            iconBgColor: "rgba(36, 174, 97, 0.08)",
            iconBorderColor: "rgba(36, 174, 97, 0.16)"
        },
        {
            name: "Create document",
            icon: "public/icons/document.svg",
            alt: "Document",
            iconBgColor: "rgba(33, 103, 198, 0.08)",
            iconBorderColor: "rgba(33, 103, 198, 0.16)"
        },
        {
            name: "Send document",
            icon: "public/icons/send.svg",
            alt: "Send",
            iconBgColor: "rgba(68, 169, 154, 0.08)",
            iconBorderColor: "rgba(68, 169, 154, 0.16)"
        },
        {
            name: "Trigger on document signed",
            icon: "public/icons/trigger.svg",
            alt: "Trigger Signed",
            iconBgColor: "rgba(255, 152, 0, 0.08)",
            iconBorderColor: "rgba(255, 152, 0, 0.16)"
        },
        {
            name: "Store the document in cloud",
            icon: "public/icons/external-storage.svg",
            alt: "Store in Cloud",
            iconBgColor: "rgba(154, 68, 169, 0.08)",
            iconBorderColor: "rgba(154, 68, 169, 0.16)"
        }
    ],
    documentTypes: [
        { 
            name: "Sales & Business Development",
            scenario: "Protect sensitive information during sales discussions, partnerships, and business development activities."
        },
        { 
            name: "Employee & Contractor",
            scenario: "Safeguard company information when onboarding new employees or working with contractors."
        },
        { 
            name: "Product Development",
            scenario: "Secure intellectual property during product development and testing phases."
        },
        { 
            name: "Vendor & Supplier",
            scenario: "Protect confidential information when working with external vendors and suppliers."
        },
        { 
            name: "Investment & M&A",
            scenario: "Maintain confidentiality during investment discussions and merger/acquisition processes."
        }
    ],
    relatedWorkflows: [
        {
            title: "Move Document to Folder After Send or Completion",
            description: "Automatically file documents in the right folder after sending or signing. This workflow ensures your workspace stays organized and documents are always easy to find.",
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
    usageCount: 13434,
    rating: 4.3,
    reviewsCount: 21,
    aiAssistantIncluded: true,
    userRating: 0 // Placeholder for user rating, static for now
};

window.ndaData = ndaData;

window.ndaData.workflowDocumentScenarios = {
    "Sales & Business Development": "Pull contact/deal data, generate NDA, update CRM with NDA status.",
    "Employee & Contractor": "Pull employee/contractor data, generate NDA, update HR system with NDA status.",
    "Product Development": "Pull product/partner data, generate NDA, update product system with NDA status.",
    "Vendor & Supplier": "Pull vendor data, generate NDA, update vendor system with NDA status.",
    "Investment & M&A": "Pull deal data, generate NDA, update deal system with NDA status."
}; 