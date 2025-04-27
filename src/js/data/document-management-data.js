const documentManagementData = {
    title: "Document Storage Management",
    name: "Document Storage Management",
    plans: "Business (or Enterprise for advanced features)",
    description: `Automatically organize and manage documents within PandaDoc. Create folders, move documents based on status or metadata, rename files, and maintain a clean document workspace. Improve organization, accessibility, and compliance with automated document management workflows.`,
    example: `A sales team automatically organizes their documents into folders based on deal stage and quarter. When a document's status changes, it's automatically moved to the appropriate folder. Documents are renamed consistently using predefined patterns, and old versions are automatically archived. This keeps the workspace clean and makes it easy to find the right document at any time.`,
    featuresTitle: "Automate Document Organization and Management",
    featuresIntro: "Streamline your document management process with automated organization and maintenance. Keep your PandaDoc workspace well-organized, easily accessible, and compliant with your company's policies.",
    steps: [
        {
            name: "Document created",
            icon: "public/icons/trigger.svg",
            alt: "Document",
            iconBgColor: "rgba(33, 103, 198, 0.08)",
            iconBorderColor: "rgba(33, 103, 198, 0.16)"
        },
        {
            name: "Create folder",
            icon: "public/icons/document-storage.svg",
            alt: "Folder",
            iconBgColor: "rgba(154, 68, 169, 0.08)",
            iconBorderColor: "rgba(154, 68, 169, 0.16)"
        },
        {
            name: "Move document to folder",
            icon: "public/icons/document.svg",
            alt: "Move",
            iconBgColor: "rgba(68, 169, 154, 0.08)",
            iconBorderColor: "rgba(68, 169, 154, 0.16)"
        }
    ],
    features: [
        {
            title: "Smart Folder Organization",
            description: "Automatically create and manage folders based on document status, type, or custom metadata. Move documents to appropriate folders as their status changes."
        },
        {
            title: "Document Naming & Versioning",
            description: "Automatically rename documents using consistent patterns and manage document versions. Archive old versions to keep your workspace clean."
        },
        {
            title: "Workspace Cleanup",
            description: "Automatically archive or delete old documents based on predefined rules. Maintain a clean and organized workspace."
        }
    ],
    enterpriseFeatures: {
        description: "Unlock advanced document management features for complex organizational needs and compliance requirements.",
        features: [
            {
                title: "Advanced Folder Rules",
                description: "Create complex folder structures and rules based on multiple conditions and metadata fields."
            },
            {
                title: "Compliance Tracking",
                description: "Track document locations, versions, and access patterns for compliance reporting."
            },
            {
                title: "Bulk Operations",
                description: "Process and organize large volumes of documents efficiently with bulk operations."
            }
        ]
    },
    documentTypes: [
        { name: "Contracts & Agreements", scenario: "Automatically organize contracts by status and move them to appropriate folders as they progress through the approval process." },
        { name: "Proposals & Quotes", scenario: "Organize sales documents by quarter and deal stage, with automatic renaming and versioning." },
        { name: "Onboarding Documents", scenario: "Create employee-specific folders and organize onboarding documents by type and status." },
        { name: "Compliance Documents", scenario: "Maintain organized records with proper versioning and automatic archiving of old versions." },
        { name: "Project Documentation", scenario: "Keep project-related documents organized by project, phase, and document type." }
    ],
    workflowDocumentScenarios: {
        "Sales Proposals": "Automatically organize proposals by quarter and deal stage, with consistent naming and versioning",
        "Sales Contracts": "Manage contracts by status and automatically move them to appropriate folders",
        "Service Agreements": "Organize service agreements by client and status, with automatic versioning",
        "Sales & Marketing Collateral": "Maintain organized marketing materials with proper versioning and access control",
        "Invoices & Payments": "Track and organize financial documents by status and date"
    }
};

window.documentManagementData = documentManagementData; 