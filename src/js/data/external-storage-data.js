window.externalStorageData = {
    title: "Auto-Save Documents to Cloud Storage",
    name: "Auto-Save Documents to Cloud Storage",
    plans: "Business, Enterprise",
    description: "Provides a simple, automated way to archive final, signed documents into common cloud storage platforms (Google Drive, SharePoint, OneDrive, Dropbox, Box). Addresses the fundamental need for centralized, accessible long-term storage outside of PandaDoc.",
    useCase: "Automatically archive signed documents to your preferred cloud storage platform",
    example: "A sales team automatically saves all signed contracts to a specific folder in Google Drive, making them accessible to the entire organization.",
    featuresTitle: "Key Features",
    featuresIntro: "The External Storage Integration provides powerful capabilities for document archiving and management:",
    steps: [
        {
            name: "Document Created",
            icon: "public/icons/trigger.svg",
            iconBgColor: "rgba(33, 103, 198, 0.08)",
            iconBorderColor: "rgba(33, 103, 198, 0.16)",
            alt: "Document"
        },
        {
            name: "Create Folder in Cloud",
            icon: "public/icons/external-storage.svg",
            iconBgColor: "rgba(33, 103, 198, 0.08)",
            iconBorderColor: "rgba(33, 103, 198, 0.16)",
            alt: "Create Folder"
        },
        {
            name: "Save PDF to Cloud",
            icon: "public/icons/external-storage.svg",
            iconBgColor: "rgba(33, 103, 198, 0.08)",
            iconBorderColor: "rgba(33, 103, 198, 0.16)",
            alt: "Save PDF"
        }
    ],
    features: [
        {
            title: "Multi-Platform Support",
            description: "Integrate with popular cloud storage platforms including Google Drive, SharePoint, OneDrive, Dropbox, and Box"
        },
        {
            title: "Automated Organization",
            description: "Automatically create and organize folders based on document metadata"
        },
        {
            title: "Secure Storage",
            description: "Ensure documents are safely stored in your preferred cloud storage solution"
        },
        {
            title: "Compliance Ready",
            description: "Meet regulatory requirements by storing documents in approved locations"
        }
    ],
    integrations: {
        title: "Supported Integrations",
        description: "Connect with your preferred cloud storage platform",
        logos: [
            { src: "public/images/google-drive.svg", alt: "Google Drive" },
            { src: "public/images/sharepoint.svg", alt: "SharePoint" },
            { src: "public/images/dropbox.svg", alt: "Dropbox" }
        ]
    },
    workflowDocumentScenarios: {
        "Sales Contracts": "Automatically archive signed contracts to a dedicated folder in your cloud storage",
        "Sales Proposals": "Store finalized proposals in a structured folder hierarchy",
        "NDA (Sales Administration)": "Maintain a secure archive of all signed non-disclosure agreements",
        "Invoices & Payments": "Organize paid invoices by date and client in cloud storage",
        "Service Agreements": "Archive completed service agreements with proper versioning and access control"
    }
}; 