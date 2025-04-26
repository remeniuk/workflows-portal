const twoWaySyncCrmData = {
    title: "2-Way Sync with CRM",
    name: "2-Way Sync with CRM",
    plans: "Enterprise (or Business with Automations add-on)",
    description: `Eliminate manual data entry and errors by enabling seamless two-way synchronization between PandaDoc and your CRM. Automatically sync fillable fields, product updates, and document data between PandaDoc and your CRM platform (works with HubSpot, Salesforce, Pipedrive, and more). Keep your sales process fast, accurate, and always up-to-date.`,
    useCase: "Ideal for sales teams who want to keep CRM and document data in perfect sync, reduce manual work, and accelerate deal cycles.",
    example: `A sales rep updates a quote in PandaDoc, and the changes are instantly reflected in the CRM. When a customer fills out a form or signs a document, all relevant data is pushed back to the CRM, ensuring both systems are always aligned.`,
    featuresTitle: "Automate Data Sync Between PandaDoc and Your CRM",
    featuresIntro: "Experience the power of true two-way data synchronization. No more copy-pasting or switching between systems. Keep your sales documents and CRM records perfectly aligned at all times.",
    integrations: {
        title: "Supported CRMs",
        logos: [
            {
                src: "public/images/Salesforce-logo.png",
                alt: "Salesforce"
            },
            {
                src: "public/images/hubspot-logo.png",
                alt: "HubSpot"
            },
            {
                src: "public/images/pipedrive-logo.png",
                alt: "Pipedrive"
            }
        ],
        description: "Seamlessly integrate with leading CRM platforms"
    },
    steps: [
        {
            name: "Pull data from CRM",
            icon: "public/icons/api-integration.svg",
            alt: "Pull from CRM",
            iconBgColor: "rgba(68, 169, 154, 0.08)",
            iconBorderColor: "rgba(68, 169, 154, 0.16)"
        },
        {
            name: "Create document",
            icon: "public/icons/document.svg",
            alt: "Create Document",
            iconBgColor: "rgba(154, 68, 169, 0.08)",
            iconBorderColor: "rgba(154, 68, 169, 0.16)"
        },
        {
            name: "Send document",
            icon: "public/icons/send.svg",
            alt: "Send Document",
            iconBgColor: "rgba(33, 103, 198, 0.08)",
            iconBorderColor: "rgba(33, 103, 198, 0.16)"
        },
        {
            name: "Update data in CRM",
            icon: "public/icons/api-integration.svg",
            alt: "Update CRM",
            iconBgColor: "rgba(68, 169, 154, 0.08)",
            iconBorderColor: "rgba(68, 169, 154, 0.16)"
        },
        {
            name: "Upload document",
            icon: "public/icons/api-integration.svg",
            alt: "Upload Document",
            iconBgColor: "rgba(68, 169, 154, 0.08)",
            iconBorderColor: "rgba(68, 169, 154, 0.16)"
        },
        {
            name: "Change deal stage",
            icon: "public/icons/api-integration.svg",
            alt: "Change Deal Stage",
            iconBgColor: "rgba(68, 169, 154, 0.08)",
            iconBorderColor: "rgba(68, 169, 154, 0.16)"
        }
    ],
    features: [
        {
            title: "Automatic Field Sync",
            description: "Data entered in PandaDoc fillable fields (text, checkboxes, dropdowns) is automatically pushed back to your CRM, keeping records up-to-date without manual effort."
        },
        {
            title: "Product & Pricing Table Sync",
            description: "Sync product and pricing data between PandaDoc and your CRM, including support for custom fields and complex mapping logic."
        },
        {
            title: "Real-Time Document Updates",
            description: "Update existing documents with the latest CRM data, including added/removed line items and optional products, ensuring both systems are always in sync."
        }
    ],
    enterpriseFeatures: {
        description: "Unlock advanced automation workflows for two-way sync, including support for custom objects, advanced mapping, and bulk updates.",
        features: [
            {
                title: "Custom Object Sync",
                description: "Map and sync data with custom objects and fields in your CRM."
            },
            {
                title: "Advanced Mapping Logic",
                description: "Handle complex data formats and relationships with flexible mapping options."
            },
            {
                title: "Bulk Data Sync",
                description: "Sync large volumes of data between PandaDoc and your CRM efficiently."
            }
        ]
    },
    documentTypes: [
        { name: "Quotes & Proposals", scenario: "Sync line items, pricing, and custom fields between PandaDoc and CRM." },
        { name: "Contracts", scenario: "Push signed contract data and status updates back to CRM records." },
        { name: "Order Forms", scenario: "Automatically update order details and statuses in both systems." },
        { name: "Onboarding Documents", scenario: "Sync onboarding data and progress between PandaDoc and CRM." },
        { name: "NDAs & Agreements", scenario: "Ensure all signed agreements are reflected in CRM instantly." }
    ]
};

window.twoWaySyncCrmData = twoWaySyncCrmData; 