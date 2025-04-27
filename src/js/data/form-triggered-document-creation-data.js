window.formTriggeredDocumentCreationData = {
    title: "Automated Document Creation (Form Trigger)",
    name: "Form-Triggered Document Creation",
    plans: "Business, Enterprise (with Automations add-on)",
    description: `Generates a PandaDoc document automatically when a PandaDoc Form or an integrated external web form is submitted. Enables self-service workflows, streamlines intake and application processes, ensures data capture before document creation.`,
    useCase: "Public-facing applications/registrations, client/patient intake processes, standardized internal requests initiated via form, replacing paper forms or basic online forms (Google Forms, etc.).",
    example: `A non-profit organization uses a PandaDoc Form for volunteer applications. When a potential volunteer submits their application, the system automatically generates a volunteer agreement document with their information and sends it for review. This automation streamlines the volunteer onboarding process and ensures all necessary documentation is created immediately upon application submission.`,
    featuresTitle: "Form-Triggered Document Creation",
    featuresIntro: "Transform form submissions into professional documents instantly. Perfect for applications, registrations, and intake processes that require immediate document generation.",
    steps: [
        {
            icon: "public/icons/form.svg",
            iconBgColor: "rgba(33, 103, 198, 0.08)",
            iconBorderColor: "rgba(33, 103, 198, 0.16)",
            name: "Submit form",
            alt: "Form Submission"
        },
        {
            icon: "public/icons/trigger.svg",
            iconBgColor: "rgba(36, 174, 97, 0.08)",
            iconBorderColor: "rgba(36, 174, 97, 0.16)",
            name: "Trigger: Form submitted",
            alt: "Form Submitted"
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
            name: "Website Contact/Request Form",
            scenario: "Generate a basic quote or informational document based on details submitted via website form."
        },
        { 
            name: "Event Registration Form",
            scenario: "Generate a participation agreement or invoice upon event registration form submission."
        },
        { 
            name: "Applicant/Candidate Form",
            scenario: "Populate an internal candidate summary or parts of an employment agreement based on application form data."
        },
        { 
            name: "Client/Patient Intake Form",
            scenario: "Generate necessary service agreements or consent forms populated with data submitted during intake."
        },
        { 
            name: "Standardized Internal Request Form",
            scenario: "Generate a formal internal document for approval based on an employee submitting a standardized request form."
        },
        { 
            name: "Partner/Reseller Application Form",
            scenario: "Generate a standard partner agreement or internal checklist based on data submitted through an application form."
        }
    ],
    exampleCustomers: [
        "Academic Gateway",
        "DignityMoves",
        "yoshinopower.com",
        "Marketing Diversified",
        "Milestones",
        "We Are The Women"
    ]
}; 