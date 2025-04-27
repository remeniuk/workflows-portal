const bulkCreationData = {
    title: "Bulk Creation (Mass Personalized Docs)",
    name: "Bulk Creation",
    plans: "Business, Enterprise",
    description: "Generate a large number of individualized documents simultaneously from a single template and a data source (like a CSV or integrated list). Each document is populated with unique recipient data. Essential for mass communications requiring personalization and individual tracking/signatures.",
    useCase: "HR sending personalized compensation letters or policy updates, Sales/Account Management sending mass renewals or updates, Finance sending individual statements, Marketing sending personalized offers. High volume needs where each doc needs unique data.",
    example: "A company needs to send personalized compensation letters to 500 employees. Using Bulk Creation, they upload a CSV with employee data and a template. The system automatically generates 500 unique documents, each populated with the specific employee's salary, bonus, and personal details, ready for individual review and signature.",
    featuresTitle: "Mass Personalization Made Simple",
    featuresIntro: "Transform your bulk document needs into a streamlined, automated process. Perfect for HR, sales, finance, and marketing teams that need to send personalized documents at scale.",
    steps: [
        {
            name: "Select Lookup Table",
            icon: "public/icons/lookup-table.svg",
            alt: "Lookup Table",
            iconBgColor: "rgba(36, 174, 97, 0.08)",
            iconBorderColor: "rgba(36, 174, 97, 0.16)"
        },
        {
            name: "Create Document (Batch)",
            icon: "public/icons/document.svg",
            alt: "Create Batch",
            iconBgColor: "rgba(33, 103, 198, 0.08)",
            iconBorderColor: "rgba(33, 103, 198, 0.16)"
        },
        {
            name: "Send Document (Batch)",
            icon: "public/icons/send.svg",
            alt: "Send Batch",
            iconBgColor: "rgba(33, 103, 198, 0.08)",
            iconBorderColor: "rgba(33, 103, 198, 0.16)"
        }
    ],
    features: [
        {
            title: "Data Source Flexibility",
            description: "Upload CSV files or connect to integrated systems to source your recipient data. Support for various data formats and structures."
        },
        {
            title: "Smart Field Mapping",
            description: "Intuitive interface to map data fields to document placeholders. Preview how data will populate in your documents before generation."
        },
        {
            title: "Bulk Processing",
            description: "Generate hundreds or thousands of documents simultaneously. Monitor progress and handle any errors or exceptions efficiently."
        },
        {
            title: "Individual Tracking",
            description: "Track each document's status, signature progress, and completion independently. Maintain full audit trail for compliance."
        }
    ],
    documentTypes: [
        {
            name: "HR Compensation Letters/Bonus Letters",
            scenario: "Generate unique letters for each employee with their specific salary/bonus details from a master list/HRIS export."
        },
        {
            name: "Annual Renewals (Simple/Standardized)",
            scenario: "Generate individual renewal agreements/notices for hundreds/thousands of clients, populated with their specific account details/dates."
        },
        {
            name: "Policy Updates/Acknowledgments",
            scenario: "Send updated policy documents requiring individual acknowledgment, personalized with employee name/ID."
        },
        {
            name: "Mass Personalized Offers/Promotions",
            scenario: "Marketing sends targeted offers where specific terms or codes vary per recipient segment, generated from a customer list."
        },
        {
            name: "Tax Forms/Engagement Letters (Annual)",
            scenario: "Accounting firms generate personalized engagement letters or requests for info for tax clients en masse at year-end."
        },
        {
            name: "Investor Updates/Statements",
            scenario: "Generate individual statements or updates for investors based on their holdings/account data."
        },
        {
            name: "Simple Contracts/Agreements (Mass Rollout)",
            scenario: "Rolling out a standard agreement to a large group (e.g., all vendors, all contractors) with personalized details."
        }
    ],
    exampleCustomers: [
        "Tax Professional Group",
        "Padgett Advisors",
        "employer.com",
        "Making Waves Academy",
        "Marketing Diversified",
        "Optimatics"
    ]
};

window.bulkCreationData = bulkCreationData; 