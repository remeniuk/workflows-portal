window.automationsList = [
  {
  "title": "2-Way Sync with CRM",
  "description": "Eliminate manual data entry and errors by enabling seamless two-way synchronization between PandaDoc and your CRM. Automatically sync fillable fields, product updates, and document data between PandaDoc and your CRM platform (works with HubSpot, Salesforce, Pipedrive, and more). Keep your sales process fast, accurate, and always up-to-date.",
  "icons": [
    {
      "src": "public/icons/api-or-integration.svg",
      "color": "blue"
    },
    {
      "src": "public/icons/document.svg",
      "color": "blue"
    },
    {
      "src": "public/icons/send.svg",
      "color": "blue"
    }
  ],
  "link": "2way-sync-crm.html",
  "id": "2way-sync-crm",
  "plan": "Business",
  "availability": "Generally Available",
  "type": "Integrations & custom logic",
  "name": "2-Way Sync with CRM",
  "plans": "Enterprise (or Business with Automations add-on)",
  "useCase": "Ideal for sales teams who want to keep CRM and document data in perfect sync, reduce manual work, and accelerate deal cycles.",
  "example": "A sales rep updates a quote in PandaDoc, and the changes are instantly reflected in the CRM. When a customer fills out a form or signs a document, all relevant data is pushed back to the CRM, ensuring both systems are always aligned.",
  "featuresTitle": "Automate Data Sync Between PandaDoc and Your CRM",
  "featuresIntro": "Experience the power of true two-way data synchronization. No more copy-pasting or switching between systems. Keep your sales documents and CRM records perfectly aligned at all times.",
  "integrations": {
    "title": "Supported CRMs",
    "logos": [
      {
        "src": "public/images/Salesforce-logo.png",
        "alt": "Salesforce"
      },
      {
        "src": "public/images/hubspot-logo.png",
        "alt": "HubSpot"
      },
      {
        "src": "public/images/pipedrive-logo.png",
        "alt": "Pipedrive"
      }
    ],
    "description": "Seamlessly integrate with leading CRM platforms"
  },
  "steps": [
    {
      "name": "Pull data from CRM",
      "icon": "public/icons/api-or-integration.svg",
      "alt": "Pull from CRM",
      "iconBgColor": "rgba(36, 174, 97, 0.08)",
      "iconBorderColor": "rgba(36, 174, 97, 0.16)"
    },
    {
      "name": "Create document",
      "icon": "public/icons/document.svg",
      "alt": "Create Document",
      "iconBgColor": "rgba(33, 103, 198, 0.08)",
      "iconBorderColor": "rgba(33, 103, 198, 0.16)"
    },
    {
      "name": "Send document",
      "icon": "public/icons/send.svg",
      "alt": "Send Document",
      "iconBgColor": "rgba(33, 103, 198, 0.08)",
      "iconBorderColor": "rgba(33, 103, 198, 0.16)"
    },
    {
      "name": "Update data in CRM",
      "icon": "public/icons/api-or-integration.svg",
      "alt": "Update CRM",
      "iconBgColor": "rgba(36, 174, 97, 0.08)",
      "iconBorderColor": "rgba(36, 174, 97, 0.16)"
    },
    {
      "name": "Upload document",
      "icon": "public/icons/api-or-integration.svg",
      "alt": "Upload Document",
      "iconBgColor": "rgba(36, 174, 97, 0.08)",
      "iconBorderColor": "rgba(36, 174, 97, 0.16)"
    },
    {
      "name": "Change deal stage",
      "icon": "public/icons/api-or-integration.svg",
      "alt": "Change Deal Stage",
      "iconBgColor": "rgba(36, 174, 97, 0.08)",
      "iconBorderColor": "rgba(36, 174, 97, 0.16)"
    }
  ],
  "features": [
    {
      "title": "Automatic Field Sync",
      "description": "Data entered in PandaDoc fillable fields (text, checkboxes, dropdowns) is automatically pushed back to your CRM, keeping records up-to-date without manual effort."
    },
    {
      "title": "Product & Pricing Table Sync",
      "description": "Sync product and pricing data between PandaDoc and your CRM, including support for custom fields and complex mapping logic."
    },
    {
      "title": "Real-Time Document Updates",
      "description": "Update existing documents with the latest CRM data, including added/removed line items and optional products, ensuring both systems are always in sync."
    }
  ],
  "enterpriseFeatures": {
    "description": "Unlock advanced automation workflows for two-way sync, including support for custom objects, advanced mapping, and bulk updates.",
    "features": [
      {
        "title": "Custom Object Sync",
        "description": "Map and sync data with custom objects and fields in your CRM."
      },
      {
        "title": "Advanced Mapping Logic",
        "description": "Handle complex data formats and relationships with flexible mapping options."
      },
      {
        "title": "Bulk Data Sync",
        "description": "Sync large volumes of data between PandaDoc and your CRM efficiently."
      }
    ]
  },
  "documentTypes": [
    {
      "name": "Sales Proposals",
      "scenario": "Sync line items, pricing, and custom fields between PandaDoc and CRM."
    },
    {
      "name": "Sales Quotes",
      "scenario": "Sync line items, pricing, and custom fields between PandaDoc and CRM."
    },
    {
      "name": "Sales Contracts",
      "scenario": "Push signed contract data and status updates back to CRM records."
    },
    {
      "name": "Service Agreements",
      "scenario": "Push signed agreement data and status updates back to CRM records."
    },
    {
      "name": "Invoices & Payments",
      "scenario": "Sync invoice data and payment status between PandaDoc and CRM."
    },
    {
      "name": "NDA (Sales Administration)",
      "scenario": "Ensure all signed agreements are reflected in CRM instantly."
    },
    {
      "name": "Vendor Agreements",
      "scenario": "Sync vendor agreement data and status between PandaDoc and CRM."
    }
  ],
  "workflowDocumentScenarios": {
    "Sales Proposals": "Pull deal/product/contact data, push quote details back, update deal stage on acceptance, trigger follow-ups based on status (viewed, completed).",
    "Sales Quotes": "Pull deal/product/contact data, push quote details back, update deal stage on acceptance, trigger follow-ups based on status (viewed, completed).",
    "Sales Contracts": "Pull all relevant data from CRM deal/account, auto-attach signed PDF to CRM record, update deal stage to Closed Won, sync key contract terms back to CRM.",
    "Service Agreements": "Pull all relevant data from CRM deal/account, auto-attach signed PDF to CRM record, update deal stage to Closed Won, sync key contract terms back to CRM.",
    "Invoices & Payments": "Trigger invoice generation upon deal closure in CRM, potentially sync payment status back to a CRM field.",
    "NDA (Sales Administration)": "Auto-generate from CRM contact/deal, update custom field in CRM with NDA status, attach signed NDA.",
    "Vendor Agreements": "If vendors are managed as CRM records, pull data for agreements, store signed docs, track status."
  },
  "shortDescription": "Seamlessly sync data between PandaDoc and your CRM to eliminate manual entry."
},
  {
  "title": "AI Contract Review & Risk Flagging",
  "id": "ai-contract-review-risk-flagging",
  "description": "Instantly detect redlines and risks in customer-sent contracts. The agent compares the document to your preferred terms and flags unusual clauses, missing sections, or high-risk changes.",
  "icons": [
    {
      "src": "public/icons/ai_icon_only.svg"
    },
    {
      "src": "public/icons/document.svg",
      "color": "blue"
    },
    {
      "src": "public/icons/approval-workflow.svg",
      "color": "purple"
    }
  ],
  "link": "ai-contract-review.html",
  "plan": "Enterprise",
  "availability": "Coming Soon",
  "type": "AI-Driven automation",
  "name": "AI Contract Review & Risk Flagging",
  "plans": "Enterprise (In Development)",
  "useCase": "Ideal for legal, procurement, and sales teams that regularly review third-party contracts and need to quickly identify deviations from standard terms, risky clauses, or missing sections. Perfect for organizations seeking to reduce legal review time and minimize risk exposure.",
  "example": "When a customer sends back a redlined contract, the agent automatically compares it to your standard template, flags any non-standard language, highlights missing compliance sections, and summarizes all high-risk changes for legal review.",
  "featuresTitle": "AI-Driven Contract Risk Detection",
  "featuresIntro": "Let AI handle the tedious contract review process. Instantly spot risks, deviations, and missing terms—no manual clause-by-clause review required.",
  "steps": [
    {
      "name": "Edit Document",
      "icon": "public/icons/document.svg",
      "alt": "Document",
      "iconBgColor": "rgba(33, 103, 198, 0.08)",
      "iconBorderColor": "rgba(33, 103, 198, 0.16)"
    },
    {
      "name": "Compare to Standard Terms",
      "icon": "public/icons/ai_icon_only.svg",
      "alt": "AI",
      "iconBgColor": "rgba(0, 184, 212, 0.08)",
      "iconBorderColor": "rgba(0, 184, 212, 0.16)"
    },
    {
      "name": "Flag Risks & Deviations",
      "icon": "public/icons/approval-workflow.svg",
      "alt": "Approvals",
      "iconBgColor": "rgba(255, 152, 0, 0.08)",
      "iconBorderColor": "rgba(255, 152, 0, 0.16)"
    }
  ],
  "features": [
    {
      "title": "Automated Redline Detection",
      "description": "The agent highlights all changes from your standard contract, including additions, deletions, and edits."
    },
    {
      "title": "Risk Flagging & Scoring",
      "description": "Unusual clauses, missing compliance sections, and high-risk language are flagged and scored for review."
    },
    {
      "title": "Clause-by-Clause Comparison",
      "description": "Each section is compared to your preferred terms, with deviations clearly marked."
    },
    {
      "title": "Automated Review Summaries",
      "description": "Receive a concise summary of all flagged risks and required actions."
    },
    {
      "title": "Real-Time Collaboration",
      "description": "Share flagged contracts and risk summaries with legal, sales, or procurement instantly."
    }
  ],
  "enterpriseFeatures": {
    "description": "On the Enterprise plan, unlock advanced contract review and risk management capabilities:",
    "features": [
      {
        "title": "Customizable Risk Profiles",
        "description": "Define what constitutes high, medium, or low risk for your organization."
      },
      {
        "title": "Integration with CLM & DMS",
        "description": "Connect to your contract lifecycle management or document management systems for seamless workflow."
      },
      {
        "title": "AI-Powered Negotiation Suggestions",
        "description": "Get recommended fallback language and negotiation tips for flagged clauses."
      },
      {
        "title": "Audit-Ready Reporting",
        "description": "Export detailed risk reports and review logs for compliance and audits."
      }
    ]
  }
},
  {
  "title": "AI Discovery Assistant",
  "id": "ai-discovery-assistant",
  "description": "Turn any sales call or meeting notes into a tailored solution brief. The agent reads notes, call transcripts, or raw text and matches customer pain points to your product capabilities—outputting a summary or proposal draft.",
  "icons": [
    {
      "src": "public/icons/ai_icon_only.svg"
    },
    {
      "src": "public/icons/document.svg",
      "color": "blue"
    },
    {
      "src": "public/icons/send.svg",
      "color": "blue"
    }
  ],
  "link": "ai-discovery-assistant.html",
  "plan": "Enterprise",
  "availability": "Coming Soon",
  "type": "AI-Driven automation",
  "name": "AI Discovery Assistant",
  "plans": "Enterprise (In Development)",
  "useCase": "Perfect for sales, solutions engineering, and customer success teams who want to quickly turn raw discovery notes or call transcripts into actionable solution briefs, proposals, or summaries. Ideal for organizations looking to standardize discovery outputs and accelerate deal cycles.",
  "example": "After a discovery call, the agent reads the transcript, identifies key pain points and requirements, and generates a tailored solution brief that maps your product features to the customer's needs—ready to send or review.",
  "featuresTitle": "AI-Powered Discovery Summaries",
  "featuresIntro": "Transform unstructured meeting notes into structured, actionable solution briefs and proposals—instantly and automatically.",
  "steps": [
    {
      "name": "Input Notes or Transcript",
      "icon": "public/icons/document.svg",
      "alt": "Notes",
      "iconBgColor": "rgba(33, 103, 198, 0.08)",
      "iconBorderColor": "rgba(33, 103, 198, 0.16)"
    },
    {
      "name": "Extract Pain Points & Goals",
      "icon": "public/icons/ai_icon_only.svg",
      "alt": "AI",
      "iconBgColor": "rgba(0, 184, 212, 0.08)",
      "iconBorderColor": "rgba(0, 184, 212, 0.16)"
    },
    {
      "name": "Map to Product Capabilities",
      "icon": "public/icons/ai_icon_only.svg",
      "alt": "AI",
      "iconBgColor": "rgba(0, 184, 212, 0.08)",
      "iconBorderColor": "rgba(0, 184, 212, 0.16)"
    },
    {
      "name": "Generate Solution Brief or Proposal",
      "icon": "public/icons/document.svg",
      "alt": "Brief",
      "iconBgColor": "rgba(33, 103, 198, 0.08)",
      "iconBorderColor": "rgba(33, 103, 198, 0.16)"
    }
  ],
  "features": [
    {
      "title": "Automated Note Analysis",
      "description": "The agent reads and understands raw notes, transcripts, or meeting summaries."
    },
    {
      "title": "Pain Point Extraction",
      "description": "Key customer challenges and requirements are identified and highlighted."
    },
    {
      "title": "Product Mapping",
      "description": "Automatically matches customer needs to your product's features and benefits."
    },
    {
      "title": "Instant Solution Briefs",
      "description": "Generates a ready-to-send solution brief or proposal draft in your preferred format."
    },
    {
      "title": "Consistent Output",
      "description": "Standardizes discovery outputs across your team for faster, higher-quality follow-up."
    }
  ],
  "enterpriseFeatures": {
    "description": "On the Enterprise plan, unlock advanced discovery and proposal automation capabilities:",
    "features": [
      {
        "title": "Customizable Output Templates",
        "description": "Define your own solution brief or proposal templates for consistent branding and messaging."
      },
      {
        "title": "CRM & Call Platform Integration",
        "description": "Automatically pull in notes and transcripts from your CRM or call recording platform."
      },
      {
        "title": "Multi-Language Support",
        "description": "Generate briefs and proposals in multiple languages for global teams."
      },
      {
        "title": "Collaboration & Approval Workflows",
        "description": "Route drafts for review, feedback, and approval before sending to customers."
      }
    ]
  }
},
  {
  "title": "AI-Powered Approvals (Playbook-Based)",
  "id": "ai-powered-approvals-playbook-based",
  "description": "AI reviews document changes, compares them to your template, and routes for approval based on your playbook—no rules setup required.",
  "icons": [
    {
      "src": "public/icons/ai_icon_only.svg"
    },
    {
      "src": "public/icons/approval-workflow.svg",
      "color": "purple"
    },
    {
      "src": "public/icons/document.svg",
      "color": "blue"
    }
  ],
  "link": "ai-powered-approvals.html",
  "plan": "Enterprise",
  "availability": "Coming Soon",
  "type": "AI-Driven automation",
  "name": "AI-Powered Approvals (Playbook-Based)",
  "plans": "Enterprise (In Development)",
  "useCase": "Perfect for teams that use editable templates but want guardrails for pricing, terms, or contract language. Ideal for organizations managing approvals via Slack or email with no central logic, and businesses that want policy enforcement without building complex workflows.",
  "example": "When a rep modifies pricing, terms, or other critical parts of a document, the agent detects the changes and checks them against your approval guidelines. These guidelines can live in a Google Doc, Word file, or anywhere else in plain language. No rule configuration needed.",
  "featuresTitle": "AI-Driven, Playbook-Based Approvals",
  "featuresIntro": "Let AI handle the heavy lifting. This workflow compares document changes to your original template and routes approvals based on your playbook—no rules engine required.",
  "steps": [
    {
      "name": "Edit Document",
      "icon": "public/icons/document.svg",
      "alt": "Document",
      "iconBgColor": "rgba(33, 103, 198, 0.08)",
      "iconBorderColor": "rgba(33, 103, 198, 0.16)"
    },
    {
      "name": "Analyze Against Playbook",
      "icon": "public/icons/ai_icon_only.svg",
      "alt": "AI",
      "iconBgColor": "rgba(0, 184, 212, 0.08)",
      "iconBorderColor": "rgba(0, 184, 212, 0.16)"
    },
    {
      "name": "Trigger Approval Routing",
      "icon": "public/icons/approval-workflow.svg",
      "alt": "Approval",
      "iconBgColor": "rgba(255, 152, 0, 0.08)",
      "iconBorderColor": "rgba(255, 152, 0, 0.16)"
    }
  ],
  "features": [
    {
      "title": "No Rules to Configure",
      "description": "Approval logic is driven by your playbook in plain English—no need to set up complex rules or conditions."
    },
    {
      "title": "AI-Powered Change Detection",
      "description": "The agent compares the sent document to its original template and identifies key differences automatically."
    },
    {
      "title": "Playbook-Based Decisioning",
      "description": "Approval guidelines can live in Google Docs, Word files, or any text format. The AI interprets your policies and applies them to each document change."
    },
    {
      "title": "Automated Approval Routing",
      "description": "Documents are routed to the right approvers based on what was changed, with no manual intervention."
    },
    {
      "title": "Real-Time Logging & Status Tracking",
      "description": "All actions and decisions are logged, and approval status is updated in real-time for full transparency."
    }
  ],
  "enterpriseFeatures": {
    "description": "On the Enterprise plan, leverage advanced AI capabilities for even more powerful, flexible approval workflows:",
    "features": [
      {
        "title": "Multi-Playbook Support",
        "description": "Use different playbooks for different document types, teams, or regions."
      },
      {
        "title": "Integration with Slack & Email",
        "description": "Route approvals and send notifications directly to Slack or email, with no central logic required."
      },
      {
        "title": "Customizable AI Sensitivity",
        "description": "Adjust how strictly the AI interprets your playbook, from flagging minor edits to only major changes."
      },
      {
        "title": "Audit-Ready Logs",
        "description": "Maintain a complete, exportable record of all approval actions and decisions for compliance."
      }
    ]
  }
},
  {
  "title": "AI-Powered Quoting (Deal Desk)",
  "id": "ai-powered-quoting-deal-desk",
  "description": "Generate accurate quotes with zero setup—no rules required. The DealDesk Agent uses your sales playbooks (Docs, Excel, etc.) to build quotes from sales rep instructions, acting as your automated quoting expert.",
  "icons": [
    {
      "src": "public/icons/ai_icon_only.svg"
    },
    {
      "src": "public/icons/form.svg",
      "color": "blue"
    },
    {
      "src": "public/icons/document.svg",
      "color": "blue"
    }
  ],
  "link": "ai-powered-quoting.html",
  "plan": "Enterprise",
  "availability": "Coming Soon",
  "type": "AI-Driven automation",
  "name": "AI-Powered Quoting (Deal Desk)",
  "plans": "Enterprise (In Development)",
  "useCase": "Perfect for sales teams, deal desks, and revenue operations who want to automate quoting without building complex rules engines. Ideal for organizations using playbooks, spreadsheets, or documents to guide pricing and approvals.",
  "example": "A sales rep submits deal details via email or form. The agent reads the instructions, references your pricing playbook, and generates a compliant quote—routing for approvals if needed, all without manual setup.",
  "featuresTitle": "AI-Driven, Playbook-Based Quoting",
  "featuresIntro": "Let AI handle quoting complexity. The agent interprets your playbooks and generates accurate, compliant quotes—no rules engine required.",
  "steps": [
    {
      "name": "Provide Quote Context",
      "icon": "public/icons/form.svg",
      "alt": "Form",
      "iconBgColor": "rgba(33, 103, 198, 0.08)",
      "iconBorderColor": "rgba(33, 103, 198, 0.16)"
    },
    {
      "name": "Generate Quote Based on Playbook",
      "icon": "public/icons/ai_icon_only.svg",
      "alt": "AI",
      "iconBgColor": "rgba(0, 184, 212, 0.08)",
      "iconBorderColor": "rgba(0, 184, 212, 0.16)"
    },
    {
      "name": "Create Document",
      "icon": "public/icons/document.svg",
      "alt": "Document",
      "iconBgColor": "rgba(33, 103, 198, 0.08)",
      "iconBorderColor": "rgba(33, 103, 198, 0.16)"
    }
  ],
  "features": [
    {
      "title": "No Rules Engine Required",
      "description": "The agent interprets your playbooks or spreadsheets to generate quotes—no manual configuration needed."
    },
    {
      "title": "Automated Approval Routing",
      "description": "Quotes are routed to the right approvers based on deal size, discount, or other criteria."
    },
    {
      "title": "Compliant Pricing & Terms",
      "description": "Ensures all quotes adhere to your pricing guidelines and approval policies."
    },
    {
      "title": "Instant Quote Generation",
      "description": "Generates and delivers quotes in real-time, reducing sales cycle time."
    },
    {
      "title": "Audit Trail & Status Tracking",
      "description": "All quoting actions and approvals are logged for transparency and compliance."
    }
  ],
  "enterpriseFeatures": {
    "description": "On the Enterprise plan, unlock advanced quoting and deal desk automation capabilities:",
    "features": [
      {
        "title": "Multi-Playbook & Multi-Currency Support",
        "description": "Use different playbooks for different products, regions, or currencies."
      },
      {
        "title": "CRM & CPQ Integration",
        "description": "Connect to your CRM or CPQ system for seamless data flow and quote generation."
      },
      {
        "title": "Custom Approval Workflows",
        "description": "Define custom approval chains and escalation paths for complex deals."
      },
      {
        "title": "Exportable Quote Logs",
        "description": "Export detailed quote histories and approval logs for compliance and analysis."
      }
    ]
  }
},
  {
  "title": "AI Proposal Writer",
  "id": "ai-proposal-writer",
  "description": "Auto-generate a complete proposal draft from just a few inputs. Based on customer info and high-level goals, the agent writes a full proposal using your best-performing templates and positioning language.",
  "icons": [
    {
      "src": "public/icons/ai_icon_only.svg"
    },
    {
      "src": "public/icons/document.svg",
      "color": "blue"
    },
    {
      "src": "public/icons/send.svg",
      "color": "blue"
    }
  ],
  "link": "ai-proposal-writer.html",
  "plan": "Enterprise",
  "availability": "Coming Soon",
  "type": "AI-Driven automation",
  "name": "AI Proposal Writer",
  "plans": "Enterprise (In Development)",
  "useCase": "Perfect for sales, marketing, and solutions teams who want to quickly generate high-quality, customized proposals with minimal manual effort. Ideal for organizations looking to standardize proposal quality and accelerate response times.",
  "example": "A sales rep enters basic customer info and goals. The agent pulls in relevant templates, tailors the content to the customer's needs, and generates a polished proposal draft—ready for review or sending.",
  "featuresTitle": "AI-Driven Proposal Generation",
  "featuresIntro": "Transform a few inputs into a complete, professional proposal—instantly and automatically.",
  "steps": [
    {
      "name": "Input Customer Info & Goals",
      "icon": "public/icons/form.svg",
      "alt": "Input",
      "iconBgColor": "rgba(33, 103, 198, 0.08)",
      "iconBorderColor": "rgba(33, 103, 198, 0.16)"
    },
    {
      "name": "AI Drafts Proposal Content",
      "icon": "public/icons/ai_icon_only.svg",
      "alt": "AI Drafting",
      "iconBgColor": "rgba(255, 152, 0, 0.08)",
      "iconBorderColor": "rgba(255, 152, 0, 0.16)"
    },
    {
      "name": "Create Document",
      "icon": "public/icons/document.svg",
      "alt": "Document",
      "iconBgColor": "rgba(33, 103, 198, 0.08)",
      "iconBorderColor": "rgba(33, 103, 198, 0.16)"
    }
  ],
  "features": [
    {
      "title": "Template-Based Drafting",
      "description": "The agent uses your best-performing templates to ensure consistency and quality."
    },
    {
      "title": "AI-Powered Personalization",
      "description": "Content is tailored to each customer's needs, goals, and industry."
    },
    {
      "title": "Instant Proposal Generation",
      "description": "Generate a complete proposal draft in seconds, not hours."
    },
    {
      "title": "Easy Editing & Collaboration",
      "description": "Review, edit, and collaborate on drafts before sending to the customer."
    },
    {
      "title": "Consistent Branding & Messaging",
      "description": "Ensure every proposal reflects your brand and value proposition."
    }
  ],
  "enterpriseFeatures": {
    "description": "On the Enterprise plan, unlock advanced proposal automation and customization capabilities:",
    "features": [
      {
        "title": "Customizable Template Library",
        "description": "Manage and update your proposal templates for different products, regions, or verticals."
      },
      {
        "title": "CRM & Content Integration",
        "description": "Pull in customer data and content snippets from your CRM or content management system."
      },
      {
        "title": "Approval & Collaboration Workflows",
        "description": "Route drafts for internal review, feedback, and approval before sending."
      },
      {
        "title": "Exportable Proposal Logs",
        "description": "Export proposal histories and review logs for compliance and analysis."
      }
    ]
  }
},
  {
  "title": "Basic Document Approval Workflow",
  "id": "basic-document-approval-workflow",
  "description": "Route documents to designated approvers before sending to recipients. Ensure compliance and transparency by automating internal reviews and approval orders at the template level.",
  "icons": [
    {
      "src": "public/icons/document.svg",
      "color": "blue"
    },
    {
      "src": "public/icons/approval-workflow.svg",
      "color": "purple"
    },
    {
      "src": "public/icons/send.svg",
      "color": "blue"
    }
  ],
  "link": "approval-workflow.html",
  "plan": "Business",
  "availability": "Generally Available",
  "type": "Workflow execution & routing",
  "name": "Basic Document Approval Workflow",
  "plans": "Business, Enterprise",
  "useCase": "Ideal for contracts, NDAs, proposals, and other documents that require internal review before being sent externally.",
  "example": "When sending a contract, the legal team is automatically prompted to review and approve the document before it goes to the client.",
  "featuresTitle": "Streamline Your Document Approval Process",
  "featuresIntro": "Automate the approval process and define a clear path for every document you create. Set up approval order and groups, and track every step with audit trails and notifications.",
  "steps": [
    {
      "name": "Create document",
      "icon": "public/icons/document.svg",
      "alt": "Document",
      "iconBgColor": "rgba(33, 103, 198, 0.08)",
      "iconBorderColor": "rgba(33, 103, 198, 0.16)"
    },
    {
      "name": "Approval",
      "icon": "public/icons/approval-workflow.svg",
      "alt": "Approval",
      "iconBgColor": "rgba(255, 152, 0, 0.08)",
      "iconBorderColor": "rgba(255, 152, 0, 0.16)"
    },
    {
      "name": "Send to client",
      "icon": "public/icons/send.svg",
      "alt": "Send",
      "iconBgColor": "rgba(33, 103, 198, 0.08)",
      "iconBorderColor": "rgba(33, 103, 198, 0.16)"
    }
  ],
  "features": [
    {
      "title": "Template-Level Approvals",
      "description": "Enable and manage approval workflows directly on your document templates. Set up approval order and groups for flexible routing."
    },
    {
      "title": "Approval Groups & Order",
      "description": "Add individual approvers or groups. Only one approval is needed per group. Set approval order for multi-stage reviews."
    },
    {
      "title": "Notifications & Audit Trail",
      "description": "Approvers receive email notifications. All approval actions are tracked in the audit trail and latest activity."
    },
    {
      "title": "Approve on Behalf",
      "description": "Admins and Managers can approve documents on behalf of others if needed."
    },
    {
      "title": "Easy Editing",
      "description": "Edit or remove approvers and groups at any time before sending for approval."
    }
  ],
  "enterpriseFeatures": {
    "description": "On the Enterprise plan, you get access to advanced approval workflow capabilities that help you handle complex approval scenarios with ease:",
    "features": [
      {
        "title": "Conditional Approvals",
        "description": "Set up dynamic approval paths based on document content, values, or metadata. For example, route contracts to legal only when the value exceeds $100,000 or when specific clauses are included."
      },
      {
        "title": "Approval Groups",
        "description": "Create predefined groups of approvers (like 'Legal Team' or 'Finance Department') and route documents to entire teams at once. Documents can be approved when any member of the group approves, or require approval from all members."
      },
      {
        "title": "Advanced Rules Engine",
        "description": "Build complex approval logic using a powerful rules engine. Combine multiple conditions, set up parallel approval paths, and create sophisticated approval workflows that match your business processes."
      },
      {
        "title": "Role-Based Approvals",
        "description": "Route documents based on user roles rather than specific individuals, making your workflows more flexible and maintainable as your organization grows."
      }
    ]
  },
  "workflowDocumentScenarios": {
    "Sales Proposals": "Pull proposal data, route to approvers based on value/terms, update proposal status in system.",
    "Sales Contracts": "Pull contract data, route to legal/finance, update contract status in system.",
    "Service Agreements": "Pull agreement data, route to approvers, update agreement status in system.",
    "Sales Quotes": "Pull quote data, route based on discount/value, update quote status in system.",
    "Invoices & Payments": "Pull invoice data, route to finance, update payment status in system.",
    "Employment Contract": "Pull contract data, route to HR/legal, update contract status in system.",
    "Compensation Change Forms": "Pull form data, route to HR/finance, update compensation status in system.",
    "Offer Letters": "Pull offer data, route to HR/management, update offer status in system.",
    "Contractor Agreements": "Pull agreement data, route to legal/HR, update agreement status in system.",
    "Government Forms": "Pull form data, route to HR/legal, update form status in system.",
    "Compliance Policies": "Pull policy data, route to legal/compliance, update policy status in system.",
    "NDA": "Pull NDA data, route to legal, update NDA status in system.",
    "Liability Waivers": "Pull waiver data, route to legal, update waiver status in system.",
    "Service Requests": "Pull request data, route to approvers, update request status in system.",
    "Purchase Orders": "Pull PO data, route to finance, update PO status in system.",
    "Tax Forms": "Pull form data, route to finance, update form status in system."
  }
},
  {
  "title": "Auto-Save Documents to Cloud Storage",
  "id": "auto-save-documents-to-cloud-storage",
  "description": "Provides a simple, automated way to archive final, signed documents into common cloud storage platforms (Google Drive, SharePoint, OneDrive, Dropbox, Box). Addresses the fundamental need for centralized, accessible long-term storage outside of PandaDoc.",
  "icons": [
    {
      "src": "public/icons/trigger.svg",
      "color": "blue"
    },
    {
      "src": "public/icons/external-storage.svg",
      "color": "teal"
    }
  ],
  "link": "external-storage.html",
  "plan": "Business",
  "availability": "Coming Soon",
  "type": "Document management",
  "name": "Auto-Save Documents to Cloud Storage",
  "plans": "Business, Enterprise",
  "useCase": "Automatically archive signed documents to your preferred cloud storage platform",
  "example": "A sales team automatically saves all signed contracts to a specific folder in Google Drive, making them accessible to the entire organization.",
  "featuresTitle": "Key Features",
  "featuresIntro": "The External Storage Integration provides powerful capabilities for document archiving and management:",
  "steps": [
    {
      "name": "Document Created",
      "icon": "public/icons/trigger.svg",
      "iconBgColor": "rgba(33, 103, 198, 0.08)",
      "iconBorderColor": "rgba(33, 103, 198, 0.16)",
      "alt": "Document"
    },
    {
      "name": "Create Folder in Cloud",
      "icon": "public/icons/external-storage.svg",
      "iconBgColor": "rgba(33, 103, 198, 0.08)",
      "iconBorderColor": "rgba(33, 103, 198, 0.16)",
      "alt": "Create Folder"
    },
    {
      "name": "Save PDF to Cloud",
      "icon": "public/icons/external-storage.svg",
      "iconBgColor": "rgba(33, 103, 198, 0.08)",
      "iconBorderColor": "rgba(33, 103, 198, 0.16)",
      "alt": "Save PDF"
    }
  ],
  "features": [
    {
      "title": "Multi-Platform Support",
      "description": "Integrate with popular cloud storage platforms including Google Drive, SharePoint, OneDrive, Dropbox, and Box"
    },
    {
      "title": "Automated Organization",
      "description": "Automatically create and organize folders based on document metadata"
    },
    {
      "title": "Secure Storage",
      "description": "Ensure documents are safely stored in your preferred cloud storage solution"
    },
    {
      "title": "Compliance Ready",
      "description": "Meet regulatory requirements by storing documents in approved locations"
    }
  ],
  "integrations": {
    "title": "Supported Integrations",
    "description": "Connect with your preferred cloud storage platform",
    "logos": [
      {
        "src": "public/images/google-drive.svg",
        "alt": "Google Drive"
      },
      {
        "src": "public/images/sharepoint.svg",
        "alt": "SharePoint"
      },
      {
        "src": "public/images/dropbox.svg",
        "alt": "Dropbox"
      }
    ]
  },
  "workflowDocumentScenarios": {
    "Sales Contracts": "Automatically archive signed contracts to a dedicated folder in your cloud storage",
    "Sales Proposals": "Store finalized proposals in a structured folder hierarchy",
    "NDA (Sales Administration)": "Maintain a secure archive of all signed non-disclosure agreements",
    "Invoices & Payments": "Organize paid invoices by date and client in cloud storage",
    "Service Agreements": "Archive completed service agreements with proper versioning and access control"
  },
  "shortDescription": "Automatically save signed documents to Google Drive, SharePoint, Dropbox, and more for secure archiving."
},
  {
  "title": "Automated Document Creation (by Schedule)",
  "id": "automated-document-creation-by-schedule",
  "description": "Automatically generates documents based on a predefined time schedule (e.g., monthly, quarterly, annually). Perfect for recurring reports, renewals, and compliance documents.",
  "icons": [
    {
      "src": "public/icons/trigger.svg",
      "color": "green"
    },
    {
      "src": "public/icons/document.svg",
      "color": "blue"
    },
    {
      "src": "public/icons/send.svg",
      "color": "blue"
    }
  ],
  "link": "automated-document-creation-by-schedule.html",
  "plan": "Business",
  "availability": "Coming Soon",
  "type": "Trigger-based automation",
  "name": "Automated Document Creation (by Schedule)",
  "targetCustomers": [
    "Businesses with recurring reporting needs",
    "Simple subscription renewals managed outside CRM triggers",
    "Periodic compliance checks or attestations"
  ],
  "exampleCustomers": [
    "Segmed (Renewals)",
    "Marketing Diversified Services (Annual forms)",
    "South Central Kansas Area Agency (Annual contracts)"
  ],
  "steps": [
    {
      "name": "Schedule Trigger",
      "description": "System automatically triggers document creation based on predefined schedule",
      "icon": "public/icons/trigger.svg",
      "iconBgColor": "rgba(36, 174, 97, 0.08)",
      "iconBorderColor": "rgba(36, 174, 97, 0.16)",
      "alt": "Schedule Trigger"
    },
    {
      "name": "Create Document",
      "description": "System creates document using predefined template and available data",
      "icon": "public/icons/document.svg",
      "iconBgColor": "rgba(33, 103, 198, 0.08)",
      "iconBorderColor": "rgba(33, 103, 198, 0.16)",
      "alt": "Create Document"
    }
  ],
  "documentTypes": [
    {
      "name": "Report / Summary Document",
      "scenario": "Automatically generate a template for a recurring client report, perhaps pulling some static data, ready for manual additions."
    },
    {
      "name": "Renewal Agreement / Quote",
      "scenario": "Automatically generate a standard renewal notice or basic agreement shortly before the contract expiration date."
    },
    {
      "name": "Compliance Form / Policy Ack.",
      "scenario": "Automatically generate and send annual policy acknowledgment forms or compliance questionnaires."
    },
    {
      "name": "Audit Checklist / Review Form",
      "scenario": "Generate forms needed for scheduled internal processes."
    }
  ],
  "benefits": [
    "Eliminates manual document creation for recurring tasks",
    "Ensures timely delivery of important documents",
    "Reduces risk of missing critical deadlines",
    "Standardizes document creation process",
    "Improves compliance with scheduled requirements"
  ],
  "demoLink": "Workflow Automation/Scheduling Placeholder",
  "plans": "Business or Enterprise",
  "example": "Monthly/Quarterly reporting, annual renewals, compliance attestations, and scheduled audits.",
  "workflowDocumentScenarios": {
    "Sales & Marketing Collateral": "Automatically generate a template for a recurring client report, perhaps pulling some static data, ready for manual additions.",
    "Sales Contracts": "Automatically generate a standard renewal notice or basic agreement shortly before the contract expiration date.",
    "Employment Contract": "Automatically generate and send annual policy acknowledgment forms or compliance questionnaires.",
    "NDA (Sales Administration)": "Generate forms needed for scheduled internal processes."
  }
},
  {
  "title": "Automated Generation based on Data Tables",
  "id": "automated-generation-based-on-data-tables",
  "description": "Enable single-click creation of complex documents through PandaDoc's enterprise features. The system automatically applies business rules and generates fully compliant documents with minimal user intervention.",
  "icons": [
    {
      "src": "public/icons/api-or-integration.svg",
      "color": "blue"
    },
    {
      "src": "public/icons/lookup-table.svg",
      "color": "blue"
    },
    {
      "src": "public/icons/rules.svg",
      "color": "blue"
    },
    {
      "src": "public/icons/document.svg",
      "color": "blue"
    }
  ],
  "link": "fully-automated-document-creation.html",
  "plan": "Enterprise",
  "availability": "Coming Soon",
  "type": "Document generation",
  "name": "Automated Generation based on Data Tables",
  "plans": "Enterprise",
  "example": "With a single click, an HR manager can generate a complete employment contract that automatically includes the correct legal language, benefits, and tax forms based on the employee's location, role, and company policies.",
  "featuresTitle": "Enterprise Automation Features",
  "featuresIntro": "PandaDoc's enterprise automation capabilities enable businesses to create highly dynamic documents with minimal manual intervention.",
  "steps": [
    {
      "name": "Pull Data from Integration",
      "icon": "public/icons/api-or-integration.svg",
      "alt": "API Integration",
      "iconBgColor": "rgba(33, 103, 198, 0.08)",
      "iconBorderColor": "rgba(33, 103, 198, 0.16)"
    },
    {
      "name": "Load Data from Lookup Tables",
      "icon": "public/icons/lookup-table.svg",
      "alt": "Lookup Table",
      "iconBgColor": "rgba(33, 103, 198, 0.08)",
      "iconBorderColor": "rgba(33, 103, 198, 0.16)"
    },
    {
      "name": "Apply Business Rules",
      "icon": "public/icons/rules.svg",
      "alt": "Rules",
      "iconBgColor": "rgba(33, 103, 198, 0.08)",
      "iconBorderColor": "rgba(33, 103, 198, 0.16)"
    },
    {
      "name": "Create Document",
      "icon": "public/icons/document.svg",
      "alt": "Document",
      "iconBgColor": "rgba(33, 103, 198, 0.08)",
      "iconBorderColor": "rgba(33, 103, 198, 0.16)"
    },
    {
      "name": "Send Document",
      "icon": "public/icons/send.svg",
      "alt": "Send",
      "iconBgColor": "rgba(33, 103, 198, 0.08)",
      "iconBorderColor": "rgba(33, 103, 198, 0.16)"
    }
  ],
  "features": [
    {
      "title": "Smart Content",
      "description": "Dynamically include or exclude content sections based on predefined conditions and business rules. Perfect for managing regional variations, product configurations, and legal requirements."
    },
    {
      "title": "Lookup Tables",
      "description": "Automatically populate document fields with data from integrated sources or predefined tables. Ideal for product catalogs, pricing structures, and customer information."
    },
    {
      "title": "Conditional Logic",
      "description": "Create complex business rules that determine document structure and content flow. Enables sophisticated automation scenarios and ensures compliance with business policies."
    }
  ],
  "enterpriseFeatures": {
    "description": "Enterprise plan unlocks advanced automation capabilities for complex document workflows:",
    "features": [
      {
        "title": "Advanced Smart Content",
        "description": "Create sophisticated conditional logic for content inclusion/exclusion"
      },
      {
        "title": "Custom Lookup Tables",
        "description": "Build and manage complex data relationships for document population"
      },
      {
        "title": "API Integration",
        "description": "Connect with external systems for real-time data synchronization"
      }
    ]
  },
  "documentTypes": [
    {
      "name": "Master Service Agreements",
      "scenario": "Manage variations in standard clauses based on client type or governing law."
    },
    {
      "name": "Statements of Work",
      "scenario": "Build SOWs dynamically by selecting service components with automatic cost calculations."
    },
    {
      "name": "HR Documents",
      "scenario": "Include country-specific legal language and benefits information based on employee location."
    },
    {
      "name": "Channel Partner Agreements",
      "scenario": "Create partner-specific agreements with customized terms and commission structures."
    },
    {
      "name": "Legal Documents",
      "scenario": "Generate jurisdiction-specific legal documents with appropriate clauses and requirements."
    }
  ],
  "workflowDocumentScenarios": {
    "Sales Contracts": "Dynamically include/exclude clauses based on location/service type (smart content), populate pricing terms based on selected plan (lookup/pricing).",
    "Service Agreements": "Dynamically include/exclude clauses based on location/service type (smart content), populate pricing terms based on selected plan (lookup/pricing).",
    "Sales & Marketing Collateral": "Use Smart Content to manage variations in standard clauses based on client type or governing law.",
    "SOW": "Build SOWs dynamically by selecting service components; Smart Content inserts relevant descriptions/tasks; Lookups/Pricing provide costs.",
    "Employment Contract": "Use Smart Content to include country-specific legal language, benefits info, or tax forms based on employee location.",
    "Offer Letters": "Use Smart Content to include country-specific legal language, benefits info, or tax forms based on employee location.",
    "NDA (Sales Administration)": "Smart Content adjusts terms, commission structures, or product access based on partner tier or region.",
    "Compensation Change Forms": "Use Smart Content to include country-specific legal language, benefits info, or tax forms based on employee location.",
    "Candidate Applications": "Less need for complex conditional logic or dynamic tables if the document is largely static or only requires basic variable fills.",
    "Contractor Agreements": "Smart Content adjusts terms, commission structures, or product access based on partner tier or region.",
    "Government Forms (HR Administration)": "Use Smart Content to include country-specific legal language, benefits info, or tax forms based on employee location.",
    "Liability Waivers": "Less need for complex conditional logic or dynamic tables if the document is largely static or only requires basic variable fills.",
    "Service Requests": "Less need for complex conditional logic or dynamic tables if the document is largely static or only requires basic variable fills.",
    "Purchase Orders": "Less need for complex conditional logic or dynamic tables if the document is largely static or only requires basic variable fills.",
    "Tax Forms": "Use Smart Content to include country-specific legal language, benefits info, or tax forms based on employee location.",
    "Invoices & Payments": "Less need for complex conditional logic or dynamic tables if the document is largely static or only requires basic variable fills."
  }
},
  {
  "title": "Basic Document Approval Workflow",
  "id": "basic-document-approval-workflow",
  "description": "Route documents to designated approvers before sending to recipients. Ensure compliance and transparency by automating internal reviews and approval orders at the template level.",
  "icons": [
    {
      "src": "public/icons/document.svg",
      "color": "blue"
    },
    {
      "src": "public/icons/approval-workflow.svg",
      "color": "purple"
    },
    {
      "src": "public/icons/send.svg",
      "color": "blue"
    }
  ],
  "link": "approval-workflow.html",
  "plan": "Business",
  "availability": "Generally Available",
  "type": "Workflow execution & routing",
  "name": "Basic Document Approval Workflow",
  "plans": "Business, Enterprise",
  "useCase": "Ideal for contracts, NDAs, proposals, and other documents that require internal review before being sent externally.",
  "example": "When sending a contract, the legal team is automatically prompted to review and approve the document before it goes to the client.",
  "featuresTitle": "Streamline Your Document Approval Process",
  "featuresIntro": "Automate the approval process and define a clear path for every document you create. Set up approval order and groups, and track every step with audit trails and notifications.",
  "steps": [
    {
      "name": "Create document",
      "icon": "public/icons/document.svg",
      "alt": "Document",
      "iconBgColor": "rgba(33, 103, 198, 0.08)",
      "iconBorderColor": "rgba(33, 103, 198, 0.16)"
    },
    {
      "name": "Approval",
      "icon": "public/icons/approval-workflow.svg",
      "alt": "Approval",
      "iconBgColor": "rgba(255, 152, 0, 0.08)",
      "iconBorderColor": "rgba(255, 152, 0, 0.16)"
    },
    {
      "name": "Send to client",
      "icon": "public/icons/send.svg",
      "alt": "Send",
      "iconBgColor": "rgba(33, 103, 198, 0.08)",
      "iconBorderColor": "rgba(33, 103, 198, 0.16)"
    }
  ],
  "features": [
    {
      "title": "Template-Level Approvals",
      "description": "Enable and manage approval workflows directly on your document templates. Set up approval order and groups for flexible routing."
    },
    {
      "title": "Approval Groups & Order",
      "description": "Add individual approvers or groups. Only one approval is needed per group. Set approval order for multi-stage reviews."
    },
    {
      "title": "Notifications & Audit Trail",
      "description": "Approvers receive email notifications. All approval actions are tracked in the audit trail and latest activity."
    },
    {
      "title": "Approve on Behalf",
      "description": "Admins and Managers can approve documents on behalf of others if needed."
    },
    {
      "title": "Easy Editing",
      "description": "Edit or remove approvers and groups at any time before sending for approval."
    }
  ],
  "enterpriseFeatures": {
    "description": "On the Enterprise plan, you get access to advanced approval workflow capabilities that help you handle complex approval scenarios with ease:",
    "features": [
      {
        "title": "Conditional Approvals",
        "description": "Set up dynamic approval paths based on document content, values, or metadata. For example, route contracts to legal only when the value exceeds $100,000 or when specific clauses are included."
      },
      {
        "title": "Approval Groups",
        "description": "Create predefined groups of approvers (like 'Legal Team' or 'Finance Department') and route documents to entire teams at once. Documents can be approved when any member of the group approves, or require approval from all members."
      },
      {
        "title": "Advanced Rules Engine",
        "description": "Build complex approval logic using a powerful rules engine. Combine multiple conditions, set up parallel approval paths, and create sophisticated approval workflows that match your business processes."
      },
      {
        "title": "Role-Based Approvals",
        "description": "Route documents based on user roles rather than specific individuals, making your workflows more flexible and maintainable as your organization grows."
      }
    ]
  },
  "workflowDocumentScenarios": {
    "Sales Proposals": "Pull proposal data, route to approvers based on value/terms, update proposal status in system.",
    "Sales Contracts": "Pull contract data, route to legal/finance, update contract status in system.",
    "Service Agreements": "Pull agreement data, route to approvers, update agreement status in system.",
    "Sales Quotes": "Pull quote data, route based on discount/value, update quote status in system.",
    "Invoices & Payments": "Pull invoice data, route to finance, update payment status in system.",
    "Employment Contract": "Pull contract data, route to HR/legal, update contract status in system.",
    "Compensation Change Forms": "Pull form data, route to HR/finance, update compensation status in system.",
    "Offer Letters": "Pull offer data, route to HR/management, update offer status in system.",
    "Contractor Agreements": "Pull agreement data, route to legal/HR, update agreement status in system.",
    "Government Forms": "Pull form data, route to HR/legal, update form status in system.",
    "Compliance Policies": "Pull policy data, route to legal/compliance, update policy status in system.",
    "NDA": "Pull NDA data, route to legal, update NDA status in system.",
    "Liability Waivers": "Pull waiver data, route to legal, update waiver status in system.",
    "Service Requests": "Pull request data, route to approvers, update request status in system.",
    "Purchase Orders": "Pull PO data, route to finance, update PO status in system.",
    "Tax Forms": "Pull form data, route to finance, update form status in system."
  }
},
  {
  "title": "Bulk Creation (Mass Personalized Docs)",
  "id": "bulk-creation-mass-personalized-docs",
  "description": "Generate a large number of individualized documents simultaneously from a single template and a data source (like a CSV or integrated list). Each document is populated with unique recipient data. Essential for mass communications requiring personalization and individual tracking/signatures.",
  "icons": [
    {
      "src": "public/icons/lookup-table.svg",
      "color": "green"
    },
    {
      "src": "public/icons/document.svg",
      "color": "blue"
    },
    {
      "src": "public/icons/send.svg",
      "color": "blue"
    }
  ],
  "link": "bulk-creation.html",
  "plan": "Business",
  "availability": "Coming Soon",
  "type": "Document generation",
  "name": "Bulk Creation",
  "plans": "Business, Enterprise",
  "useCase": "HR sending personalized compensation letters or policy updates, Sales/Account Management sending mass renewals or updates, Finance sending individual statements, Marketing sending personalized offers. High volume needs where each doc needs unique data.",
  "example": "A company needs to send personalized compensation letters to 500 employees. Using Bulk Creation, they upload a CSV with employee data and a template. The system automatically generates 500 unique documents, each populated with the specific employee's salary, bonus, and personal details, ready for individual review and signature.",
  "featuresTitle": "Mass Personalization Made Simple",
  "featuresIntro": "Transform your bulk document needs into a streamlined, automated process. Perfect for HR, sales, finance, and marketing teams that need to send personalized documents at scale.",
  "steps": [
    {
      "name": "Select Lookup Table",
      "icon": "public/icons/lookup-table.svg",
      "alt": "Lookup Table",
      "iconBgColor": "rgba(36, 174, 97, 0.08)",
      "iconBorderColor": "rgba(36, 174, 97, 0.16)"
    },
    {
      "name": "Create Document (Batch)",
      "icon": "public/icons/document.svg",
      "alt": "Create Batch",
      "iconBgColor": "rgba(33, 103, 198, 0.08)",
      "iconBorderColor": "rgba(33, 103, 198, 0.16)"
    },
    {
      "name": "Send Document (Batch)",
      "icon": "public/icons/send.svg",
      "alt": "Send Batch",
      "iconBgColor": "rgba(33, 103, 198, 0.08)",
      "iconBorderColor": "rgba(33, 103, 198, 0.16)"
    }
  ],
  "features": [
    {
      "title": "Data Source Flexibility",
      "description": "Upload CSV files or connect to integrated systems to source your recipient data. Support for various data formats and structures."
    },
    {
      "title": "Smart Field Mapping",
      "description": "Intuitive interface to map data fields to document placeholders. Preview how data will populate in your documents before generation."
    },
    {
      "title": "Bulk Processing",
      "description": "Generate hundreds or thousands of documents simultaneously. Monitor progress and handle any errors or exceptions efficiently."
    },
    {
      "title": "Individual Tracking",
      "description": "Track each document's status, signature progress, and completion independently. Maintain full audit trail for compliance."
    }
  ],
  "workflowDocumentScenarios": {
    "Employment Contract": "Generate unique letters for each employee with their specific salary/bonus details from a master list/HRIS export.",
    "Sales Contracts": "Generate individual renewal agreements/notices for hundreds/thousands of clients, populated with their specific account details/dates.",
    "Compliance Policies": "Send updated policy documents requiring individual acknowledgment, personalized with employee name/ID.",
    "Sales & Marketing Collateral": "Marketing sends targeted offers where specific terms or codes vary per recipient segment, generated from a customer list.",
    "Tax Forms": "Accounting firms generate personalized engagement letters or requests for info for tax clients en masse at year-end.",
    "Invoices & Payments": "Generate individual statements or updates for investors based on their holdings/account data.",
    "Service Agreements": "Rolling out a standard agreement to a large group (e.g., all vendors, all contractors) with personalized details."
  },
  "shortDescription": "Generate and send hundreds of personalized documents at once from a template and data list."
},
  {
  "title": "Conditional Execution & Routing",
  "id": "conditional-execution-routing",
  "description": "Enables workflows to branch or take different paths based on document data, metadata, or external triggers. Perfect for managing complex approval processes with varying requirements based on specific conditions.",
  "icons": [
    {
      "src": "public/icons/document.svg",
      "color": "blue"
    },
    {
      "src": "public/icons/routing.svg",
      "color": "blue"
    },
    {
      "src": "public/icons/approval-workflow.svg",
      "color": "purple"
    }
  ],
  "link": "conditional-routing.html",
  "plan": "Business",
  "availability": "Coming Soon",
  "type": "Workflow execution & routing",
  "name": "Conditional Execution & Routing",
  "plans": "Business, Enterprise",
  "example": "A sales contract workflow that automatically routes to different approvers based on the contract value, with high-value contracts requiring executive approval and additional legal review.",
  "featuresTitle": "Key Features",
  "featuresIntro": "Conditional routing automation provides intelligent workflow branching based on your business rules and document data.",
  "features": [
    {
      "title": "Dynamic Approval Routing",
      "description": "Automatically route documents to different approvers based on criteria like amount, department, or location. Ensure the right people review each document based on your business rules."
    },
    {
      "title": "Conditional Document Generation",
      "description": "Generate different document versions or include specific clauses based on conditions like contract value, product type, or customer location."
    },
    {
      "title": "Multi-Stage Workflow Support",
      "description": "Create complex workflows with multiple branches and decision points, all managed automatically based on your predefined rules."
    }
  ],
  "enterpriseFeatures": {
    "description": "Advanced conditional routing capabilities for complex business processes.",
    "features": [
      {
        "title": "Advanced Rule Builder",
        "description": "Create complex routing rules with multiple conditions and nested logic"
      },
      {
        "title": "Custom Integration Triggers",
        "description": "Trigger workflow branches based on external system events and data"
      },
      {
        "title": "Audit Trail & Compliance",
        "description": "Detailed tracking of all routing decisions and workflow branches"
      }
    ]
  },
  "steps": [
    {
      "icon": "public/icons/document.svg",
      "alt": "Document",
      "name": "Generate document",
      "iconBgColor": "rgba(33, 103, 198, 0.08)",
      "iconBorderColor": "rgba(33, 103, 198, 0.16)"
    },
    {
      "type": "condition",
      "icon": "public/images/branch.png",
      "alt": "Condition",
      "name": "Conditional Branch",
      "iconBgColor": "rgba(33, 103, 198, 0.08)",
      "iconBorderColor": "rgba(33, 103, 198, 0.16)",
      "branches": [
        {
          "label": "Branch A",
          "steps": [
            {
              "icon": "public/icons/approval-workflow.svg",
              "alt": "Approval",
              "name": "Approve with legal",
              "iconBgColor": "rgba(255, 152, 0, 0.08)",
              "iconBorderColor": "rgba(255, 152, 0, 0.16)"
            }
          ]
        },
        {
          "label": "Fallback",
          "steps": [
            {
              "icon": "public/icons/send.svg",
              "alt": "Send",
              "name": "Send document",
              "iconBgColor": "rgba(33, 103, 198, 0.08)",
              "iconBorderColor": "rgba(33, 103, 198, 0.16)"
            }
          ]
        }
      ]
    }
  ],
  "workflowDocumentScenarios": {
    "Sales Proposals": "Route for approval only if discount > X%, route to different manager based on region, include specific terms based on product type",
    "Sales Contracts": "Route to legal only if non-standard clauses used, apply different T&Cs based on client location, trigger different onboarding paths",
    "Service Agreements": "Route based on service type and value, apply different terms based on client requirements",
    "Sales & Marketing Collateral": "Route to different approvers based on content type and target audience",
    "Invoices & Payments": "Route to different approvers based on amount and department, require additional sign-off for large payments",
    "Vendor Agreements": "Route to different internal reviewers based on vendor risk level or contract value"
  }
},
  {
  "title": "Conditional Execution & Routing - PandaDoc",
  "id": "conditional-execution-routing-pandadoc",
  "description": "Enables workflows to branch or take different paths based on document data, metadata, or external triggers. Perfect for managing complex approval processes with varying requirements based on specific conditions.",
  "icons": [
    {
      "src": "public/icons/document.svg",
      "color": "blue"
    },
    {
      "src": "public/icons/routing.svg",
      "color": "blue"
    },
    {
      "src": "public/icons/approval-workflow.svg",
      "color": "purple"
    }
  ],
  "link": "conditional-routing.html",
  "plan": "Business",
  "availability": "Coming Soon",
  "type": "Workflow execution & routing",
  "name": "Conditional Execution & Routing",
  "plans": "Business, Enterprise",
  "example": "A sales contract workflow that automatically routes to different approvers based on the contract value, with high-value contracts requiring executive approval and additional legal review.",
  "featuresTitle": "Key Features",
  "featuresIntro": "Conditional routing automation provides intelligent workflow branching based on your business rules and document data.",
  "features": [
    {
      "title": "Dynamic Approval Routing",
      "description": "Automatically route documents to different approvers based on criteria like amount, department, or location. Ensure the right people review each document based on your business rules."
    },
    {
      "title": "Conditional Document Generation",
      "description": "Generate different document versions or include specific clauses based on conditions like contract value, product type, or customer location."
    },
    {
      "title": "Multi-Stage Workflow Support",
      "description": "Create complex workflows with multiple branches and decision points, all managed automatically based on your predefined rules."
    }
  ],
  "enterpriseFeatures": {
    "description": "Advanced conditional routing capabilities for complex business processes.",
    "features": [
      {
        "title": "Advanced Rule Builder",
        "description": "Create complex routing rules with multiple conditions and nested logic"
      },
      {
        "title": "Custom Integration Triggers",
        "description": "Trigger workflow branches based on external system events and data"
      },
      {
        "title": "Audit Trail & Compliance",
        "description": "Detailed tracking of all routing decisions and workflow branches"
      }
    ]
  },
  "steps": [
    {
      "icon": "public/icons/document.svg",
      "alt": "Document",
      "name": "Generate document",
      "iconBgColor": "rgba(33, 103, 198, 0.08)",
      "iconBorderColor": "rgba(33, 103, 198, 0.16)"
    },
    {
      "type": "condition",
      "icon": "public/images/branch.png",
      "alt": "Condition",
      "name": "Conditional Branch",
      "iconBgColor": "rgba(33, 103, 198, 0.08)",
      "iconBorderColor": "rgba(33, 103, 198, 0.16)",
      "branches": [
        {
          "label": "Branch A",
          "steps": [
            {
              "icon": "public/icons/approval-workflow.svg",
              "alt": "Approval",
              "name": "Approve with legal",
              "iconBgColor": "rgba(255, 152, 0, 0.08)",
              "iconBorderColor": "rgba(255, 152, 0, 0.16)"
            }
          ]
        },
        {
          "label": "Fallback",
          "steps": [
            {
              "icon": "public/icons/send.svg",
              "alt": "Send",
              "name": "Send document",
              "iconBgColor": "rgba(33, 103, 198, 0.08)",
              "iconBorderColor": "rgba(33, 103, 198, 0.16)"
            }
          ]
        }
      ]
    }
  ],
  "workflowDocumentScenarios": {
    "Sales Proposals": "Route for approval only if discount > X%, route to different manager based on region, include specific terms based on product type",
    "Sales Contracts": "Route to legal only if non-standard clauses used, apply different T&Cs based on client location, trigger different onboarding paths",
    "Service Agreements": "Route based on service type and value, apply different terms based on client requirements",
    "Sales & Marketing Collateral": "Route to different approvers based on content type and target audience",
    "Invoices & Payments": "Route to different approvers based on amount and department, require additional sign-off for large payments",
    "Vendor Agreements": "Route to different internal reviewers based on vendor risk level or contract value"
  }
},
  {
  "title": "Conditional & Multi-Step Approval Workflow",
  "id": "conditional-multi-step-approval-workflow",
  "description": "Automate approvals with conditions and multi-step routing. Trigger approvals only when criteria are met for advanced compliance.",
  "icons": [
    {
      "src": "public/icons/document.svg",
      "color": "blue"
    },
    {
      "src": "public/icons/approval-workflow.svg",
      "color": "purple"
    },
    {
      "src": "public/icons/send.svg",
      "color": "blue"
    }
  ],
  "link": "conditional-approvals.html",
  "plan": "Enterprise",
  "availability": "Generally Available",
  "type": "Workflow execution & routing",
  "name": "Conditional & Multi-Step Approval Workflow",
  "plans": "Business (add-on), Enterprise",
  "useCase": "Perfect for contracts, quotes, or proposals that require approval only under certain conditions, such as high-value deals or special terms.",
  "example": "If a contract value exceeds $100,000, route to legal for approval. If a discount over 20% is applied, require finance approval. Otherwise, send directly to the client.",
  "featuresTitle": "Automate Complex Approval Scenarios",
  "featuresIntro": "Set up flexible, rules-based approval workflows that adapt to your business needs. Use conditions to trigger approvals only when necessary, and keep your process efficient and compliant.",
  "steps": [
    {
      "name": "Create document",
      "icon": "public/icons/document.svg",
      "alt": "Document",
      "iconBgColor": "rgba(33, 103, 198, 0.08)",
      "iconBorderColor": "rgba(33, 103, 198, 0.16)"
    },
    {
      "name": "Conditional & multi-step approval",
      "icon": "public/icons/approval-workflow.svg",
      "alt": "Conditional & Multi-Step Approval",
      "iconBgColor": "rgba(255, 152, 0, 0.08)",
      "iconBorderColor": "rgba(255, 152, 0, 0.16)"
    },
    {
      "name": "Send to client",
      "icon": "public/icons/send.svg",
      "alt": "Send",
      "iconBgColor": "rgba(33, 103, 198, 0.08)",
      "iconBorderColor": "rgba(33, 103, 198, 0.16)"
    }
  ],
  "features": [
    {
      "title": "Set Approval Conditions",
      "description": "Trigger approvals based on document value, discounts, quote variables, or custom fields. Use AND/OR logic for advanced routing."
    },
    {
      "title": "Dynamic & Multi-Step Routing",
      "description": "Route documents to different approvers or groups depending on the conditions met. Chain multiple approval steps for complex workflows. Bypass approvals when not needed."
    },
    {
      "title": "Approval Groups & Order",
      "description": "Combine conditional logic with approval order and groups for multi-stage, flexible workflows."
    },
    {
      "title": "Notifications & Audit Trail",
      "description": "Approvers receive email notifications only when conditions are met. All actions are tracked in the audit trail."
    },
    {
      "title": "Easy Setup & Editing",
      "description": "Add, edit, or remove conditions and approvers at any time from your template settings."
    }
  ],
  "workflowDocumentScenarios": {
    "Sales Proposals": "If proposal value > $50,000, route to Sales Director; otherwise, send directly to client.",
    "Contracts": "If contract includes non-standard terms, route to Legal; if value > $100,000, add CFO approval.",
    "Quotes": "If discount > 15%, require Finance approval; otherwise, only Sales Manager approval needed.",
    "Purchase Orders": "If PO is for IT equipment, route to IT Manager; if over $10,000, also require Finance approval.",
    "Service Agreements": "If agreement duration > 2 years, require Legal review; otherwise, send to client after Manager approval."
  }
},
  {
  "title": "Contract Naming & Tagging Standardization",
  "description": "Auto-name, tag, and organize contracts for easy search and compliance. This workflow ensures every document follows a consistent naming convention, is tagged by type, and is placed in the correct folder—making filtering and search effortless for recurring document types.",
  "icons": [
    {
      "src": "public/icons/trigger.svg",
      "color": "green"
    },
    {
      "src": "public/icons/document.svg",
      "color": "blue"
    },
    {
      "src": "public/icons/document-storage.svg",
      "color": "teal"
    }
  ],
  "link": "contract-naming-tagging.html",
  "plan": "Starter",
  "availability": "Generally Available",
  "type": "Document management",
  "name": "Contract Naming & Tagging Standardization",
  "plans": "Starter",
  "useCase": "Easier filtering and search for recurring document types.",
  "example": "Easier filtering and search for recurring document types.",
  "steps": [
    {
      "name": "Use Naming Convention",
      "icon": "public/icons/trigger.svg",
      "iconBgColor": "rgba(36, 174, 97, 0.08)",
      "iconBorderColor": "rgba(36, 174, 97, 0.16)",
      "alt": "Trigger"
    },
    {
      "name": "Auto-Tag by Type",
      "icon": "public/icons/document.svg",
      "iconBgColor": "rgba(33, 103, 198, 0.08)",
      "iconBorderColor": "rgba(33, 103, 198, 0.16)",
      "alt": "Document"
    },
    {
      "name": "Auto-Place in Folder",
      "icon": "public/icons/document-storage.svg",
      "iconBgColor": "rgba(20, 150, 160, 0.08)",
      "iconBorderColor": "rgba(20, 150, 160, 0.16)",
      "alt": "Folder"
    }
  ],
  "features": [
    {
      "title": "Key Features",
      "description": "- Enforces naming conventions during document creation.<br>- Auto-tags documents based on type (e.g., proposal, NDA, invoice).<br>- Automatically places documents in the correct folder.<br>- Improves searchability and compliance.<br>- Reduces manual work and errors."
    }
  ],
  "workflowDocumentScenarios": {
    "NDAs": "All NDAs are named, tagged, and stored for quick retrieval and compliance audits.",
    "Invoices": "Invoices are auto-tagged and placed in the correct folder for finance teams.",
    "Service Agreements": "Service agreements follow a naming standard and are always easy to find.",
    "Sales Proposals": "Proposals are consistently named and tagged for fast retrieval and tracking.",
    "Sales Contracts": "Contracts are auto-tagged and organized for compliance and easy reference.",
    "Employment Contract": "Employment contracts are named and stored for HR compliance and audits.",
    "Offer Letters": "Offer letters are tagged and placed in the correct folder for onboarding.",
    "Purchase Orders": "Purchase orders are auto-named and organized for procurement tracking.",
    "Vendor Agreements": "Vendor agreements are tagged and stored for vendor management and compliance."
  },
  "id": "contract-naming-tagging",
  "shortDescription": "Auto-name, tag, and organize contracts for easy search and compliance."
},
  {
  "title": "CRM-Triggered Document Creation",
  "id": "crm-triggered-document-creation",
  "description": "Automatically generate documents based on specific triggers in your CRM, ATS, HRIS, or other business systems. Perfect for sales, HR, and operations teams that need to ensure timely document creation when key business events occur.",
  "icons": [
    {
      "src": "public/icons/crm.svg",
      "color": "light-red"
    },
    {
      "src": "public/icons/trigger.svg",
      "color": "green"
    },
    {
      "src": "public/icons/document.svg",
      "color": "blue"
    }
  ],
  "link": "crm-triggered-document-creation.html",
  "plan": "Business",
  "availability": "Coming Soon",
  "type": "Trigger-based automation",
  "name": "CRM-Triggered Document Creation",
  "plans": "Business, Enterprise",
  "useCase": "Sales teams needing contracts when deals close, HR teams requiring offer letters when candidates are approved, Operations teams needing shipping documents when orders are processed. Any scenario where document creation should be triggered by a specific system event.",
  "example": "A sales rep closes a deal in Salesforce. The system automatically generates a contract with the client's details, terms, and pricing, ready for review and signature. No manual document creation required.",
  "featuresTitle": "Automated Document Generation",
  "featuresIntro": "Transform your document creation process into an automated workflow that responds to your business systems' events.",
  "steps": [
    {
      "name": "Select Trigger",
      "icon": "public/icons/trigger.svg",
      "alt": "Trigger",
      "iconBgColor": "rgba(36, 174, 97, 0.08)",
      "iconBorderColor": "rgba(36, 174, 97, 0.16)"
    },
    {
      "name": "Create Document",
      "icon": "public/icons/document.svg",
      "alt": "Create Document",
      "iconBgColor": "rgba(33, 103, 198, 0.08)",
      "iconBorderColor": "rgba(33, 103, 198, 0.16)"
    },
    {
      "name": "Send Document",
      "icon": "public/icons/send.svg",
      "alt": "Send Document",
      "iconBgColor": "rgba(33, 103, 198, 0.08)",
      "iconBorderColor": "rgba(33, 103, 198, 0.16)"
    }
  ],
  "features": [
    {
      "title": "System Integration",
      "description": "Connect with your CRM, ATS, HRIS, or other business systems to monitor for specific events that should trigger document creation."
    },
    {
      "title": "Event-Based Triggers",
      "description": "Configure triggers based on specific status changes, stage transitions, or other events in your connected systems."
    },
    {
      "title": "Data Mapping",
      "description": "Automatically populate documents with relevant data from the triggering system, ensuring accuracy and consistency."
    },
    {
      "title": "Workflow Automation",
      "description": "Set up complete document workflows that include generation, review, and distribution based on system events."
    }
  ],
  "workflowDocumentScenarios": {
    "Sales Contracts": "Automatically generate the contract when the deal is marked as won or ready for contracting in CRM.",
    "Service Agreements": "Automatically generate the contract when the deal is marked as won or ready for contracting in CRM.",
    "Offer Letters": "Automatically generate the offer letter once internal approvals are complete in the hiring system.",
    "Employment Contract": "Automatically generate the offer letter once internal approvals are complete in the hiring system.",
    "Onboarding Packet": "Automatically generate the necessary onboarding paperwork when a new employee record is finalized in HRIS.",
    "HR Forms": "Automatically generate the necessary onboarding paperwork when a new employee record is finalized in HRIS.",
    "Shipping Documents": "Automatically generate shipping documentation when an order is processed in the ERP.",
    "Packing List": "Automatically generate shipping documentation when an order is processed in the ERP.",
    "NDA": "Automatically generate an NDA when a deal progresses to a stage requiring confidentiality.",
    "Change Order": "Automatically generate a formal Change Order document when a change request task is marked approved.",
    "SOW": "Automatically generate a formal Change Order document when a change request task is marked approved."
  }
},
  {
  "title": "Custom Logic & API Integration",
  "id": "custom-logic-api-integration",
  "description": "Build custom automations with PandaDoc's API or logic steps to support proprietary systems or advanced workflows. Create specialized integrations, implement complex business logic, and connect with any system through custom code. Leverage AI capabilities by making calls to LLMs or AI agents to enhance your document workflows. The code is written in Python, the most common and widely supported language, making it easy to generate and maintain with the help of AI assistants.",
  "icons": [
    {
      "src": "public/icons/storage.svg",
      "color": "teal"
    },
    {
      "src": "public/icons/document.svg",
      "color": "blue"
    },
    {
      "src": "public/icons/send.svg",
      "color": "blue"
    }
  ],
  "link": "custom-workflow.html",
  "plan": "Enterprise",
  "availability": "Early Access",
  "type": "Integrations & custom logic",
  "name": "Custom Logic & API Integration",
  "plans": "Enterprise",
  "useCase": "Ideal for companies with in-house developers or integration partners, businesses using custom-built software, or those needing special signing and data flows.",
  "example": "Imagine you're generating contracts where pricing depends on live inventory data from a custom warehouse system. A Custom Code Step can pull that information in real time, calculate the right price, and update the document — without any manual work. You can even integrate AI to analyze contract terms or generate personalized content based on customer data.",
  "featuresTitle": "Maximum Flexibility with Custom Code",
  "featuresIntro": "Extend your workflow capabilities beyond standard automation tools with custom code integration.",
  "features": [
    {
      "title": "Custom Calculations & Logic",
      "description": "Perform complex calculations and implement custom business logic that can't be handled by standard workflows or automation tools."
    },
    {
      "title": "System Integration",
      "description": "Connect directly to proprietary or industry-specific systems (like legal software, healthcare records, or construction platforms) through APIs and webhooks."
    },
    {
      "title": "Automated Data Flow",
      "description": "Automatically pull or push data between PandaDoc and your own software, eliminating manual steps and reducing errors."
    },
    {
      "title": "Custom Triggers & Actions",
      "description": "Trigger special actions, embed signing processes, or build entirely unique flows based on your company's specific needs."
    }
  ],
  "steps": [
    {
      "name": "Custom Integration",
      "icon": "public/icons/storage.svg",
      "alt": "Custom Integration",
      "iconBgColor": "rgba(36, 174, 97, 0.08)",
      "iconBorderColor": "rgba(36, 174, 97, 0.16)"
    },
    {
      "name": "Customer Processing Logic",
      "icon": "public/icons/storage.svg",
      "alt": "Customer Processing Logic",
      "iconBgColor": "rgba(36, 174, 97, 0.08)",
      "iconBorderColor": "rgba(36, 174, 97, 0.16)"
    },
    {
      "name": "Create Document",
      "icon": "public/icons/document.svg",
      "alt": "Create Document",
      "iconBgColor": "rgba(33, 103, 198, 0.08)",
      "iconBorderColor": "rgba(33, 103, 198, 0.16)"
    },
    {
      "name": "Send Document",
      "icon": "public/icons/send.svg",
      "alt": "Send Document",
      "iconBgColor": "rgba(33, 103, 198, 0.08)",
      "iconBorderColor": "rgba(33, 103, 198, 0.16)"
    }
  ],
  "workflowDocumentScenarios": {
    "Sales Proposals": "Generate dynamic proposals with real-time pricing and custom calculations",
    "Sales Contracts": "Create specialized contracts that integrate with your custom systems",
    "Service Agreements": "Build service agreements that automatically sync with your business logic",
    "Vendor Agreements": "Implement unique document flows with custom triggers and actions"
  },
  "shortDescription": "Automate any workflow with custom code and API integration. Connect PandaDoc to your unique systems and logic."
},
  {
  "title": "Automated Document Creation (Form Trigger)",
  "id": "form-triggered-document-creation",
  "description": "Generates a PandaDoc document automatically when a PandaDoc Form or an integrated external web form is submitted. Enables self-service workflows, streamlines intake and application processes, ensures data capture before document creation.",
  "icons": [
    {
      "src": "public/icons/form.svg",
      "color": "blue"
    },
    {
      "src": "public/icons/trigger.svg",
      "color": "green"
    },
    {
      "src": "public/icons/document.svg",
      "color": "blue"
    }
  ],
  "link": "form-triggered-document-creation.html",
  "plan": "Business",
  "availability": "Coming Soon",
  "type": "Trigger-based automation",
  "name": "Form-Triggered Document Creation",
  "plans": "Business, Enterprise (with Automations add-on)",
  "useCase": "Public-facing applications/registrations, client/patient intake processes, standardized internal requests initiated via form, replacing paper forms or basic online forms (Google Forms, etc.).",
  "example": "A non-profit organization uses a PandaDoc Form for volunteer applications. When a potential volunteer submits their application, the system automatically generates a volunteer agreement document with their information and sends it for review. This automation streamlines the volunteer onboarding process and ensures all necessary documentation is created immediately upon application submission.",
  "featuresTitle": "Form-Triggered Document Creation",
  "featuresIntro": "Transform form submissions into professional documents instantly. Perfect for applications, registrations, and intake processes that require immediate document generation.",
  "steps": [
    {
      "icon": "public/icons/form.svg",
      "iconBgColor": "rgba(154, 68, 169, 0.08)",
      "iconBorderColor": "rgba(154, 68, 169, 0.16)",
      "name": "Submit form",
      "alt": "Form Submission"
    },
    {
      "icon": "public/icons/trigger.svg",
      "iconBgColor": "rgba(244, 67, 54, 0.08)",
      "iconBorderColor": "rgba(244, 67, 54, 0.16)",
      "name": "Trigger: Form submitted",
      "alt": "Form Submitted"
    },
    {
      "icon": "public/icons/document.svg",
      "iconBgColor": "rgba(33, 103, 198, 0.08)",
      "iconBorderColor": "rgba(33, 103, 198, 0.16)",
      "name": "Generate document",
      "alt": "Generate Document"
    },
    {
      "icon": "public/icons/send.svg",
      "iconBgColor": "rgba(33, 103, 198, 0.08)",
      "iconBorderColor": "rgba(33, 103, 198, 0.16)",
      "name": "Send document",
      "alt": "Send Document"
    }
  ],
  "documentTypes": [
    {
      "name": "Website Contact/Request Form",
      "scenario": "Generate a basic quote or informational document based on details submitted via website form."
    },
    {
      "name": "Event Registration Form",
      "scenario": "Generate a participation agreement or invoice upon event registration form submission."
    },
    {
      "name": "Applicant/Candidate Form",
      "scenario": "Populate an internal candidate summary or parts of an employment agreement based on application form data."
    },
    {
      "name": "Client/Patient Intake Form",
      "scenario": "Generate necessary service agreements or consent forms populated with data submitted during intake."
    },
    {
      "name": "Standardized Internal Request Form",
      "scenario": "Generate a formal internal document for approval based on an employee submitting a standardized request form."
    },
    {
      "name": "Partner/Reseller Application Form",
      "scenario": "Generate a standard partner agreement or internal checklist based on data submitted through an application form."
    }
  ],
  "exampleCustomers": [
    "Academic Gateway",
    "DignityMoves",
    "yoshinopower.com",
    "Marketing Diversified",
    "Milestones",
    "We Are The Women"
  ],
  "workflowDocumentScenarios": {
    "Sales & Marketing Collateral": "Generate a basic quote or informational document based on details submitted via website form.",
    "Sales Contracts": "Generate a participation agreement or invoice upon event registration form submission.",
    "Employment Contract": "Populate an internal candidate summary or parts of an employment agreement based on application form data.",
    "Service Agreements": "Generate necessary service agreements or consent forms populated with data submitted during intake.",
    "Purchase Orders": "Generate a formal internal document for approval based on an employee submitting a standardized request form.",
    "Contractor Agreements": "Generate a standard partner agreement or internal checklist based on data submitted through an application form."
  },
  "shortDescription": "Instantly generate documents when a form is submitted—perfect for intake, onboarding, and self-service."
},
  {
  "title": "Guided Document Creation",
  "id": "guided-document-creation",
  "description": "Create documents with confidence using guided templates that walk you through the process step by step. Perfect for complex documents that require specific information and formatting.",
  "icons": [
    {
      "src": "public/icons/workflow-automation.svg",
      "color": "purple"
    },
    {
      "src": "public/icons/crm-integration.svg",
      "color": "blue"
    },
    {
      "src": "public/icons/document.svg",
      "color": "blue"
    }
  ],
  "link": "guided-document-creation.html",
  "plan": "Business",
  "availability": "Generally Available",
  "type": "Document generation",
  "name": "Guided Document Creation",
  "plans": "Business, Enterprise",
  "useCase": "Ideal for sales proposals, contracts, service agreements, and other documents that need to be created with specific information and formatting.",
  "example": "When creating a sales proposal, the system guides you through each section, ensuring you include all necessary information and format it correctly.",
  "featuresTitle": "Guided Document Creation",
  "featuresIntro": "Create documents with confidence using guided templates that walk you through the process step by step.",
  "steps": [
    {
      "name": "Select Template",
      "icon": "public/icons/document.svg",
      "alt": "Document",
      "iconBgColor": "rgba(33, 103, 198, 0.08)",
      "iconBorderColor": "rgba(33, 103, 198, 0.16)"
    },
    {
      "name": "Fill Information",
      "icon": "public/icons/form.svg",
      "alt": "Form",
      "iconBgColor": "rgba(33, 103, 198, 0.08)",
      "iconBorderColor": "rgba(33, 103, 198, 0.16)"
    },
    {
      "name": "Review & Send",
      "icon": "public/icons/send.svg",
      "alt": "Send",
      "iconBgColor": "rgba(33, 103, 198, 0.08)",
      "iconBorderColor": "rgba(33, 103, 198, 0.16)"
    }
  ],
  "features": [
    {
      "title": "Step-by-Step Guidance",
      "description": "Follow a guided process to create documents, ensuring you include all necessary information and format it correctly."
    },
    {
      "title": "Template Library",
      "description": "Access a library of pre-built templates for common document types, saving time and ensuring consistency."
    },
    {
      "title": "Customizable Templates",
      "description": "Create and customize templates to match your specific business needs and branding."
    },
    {
      "title": "Real-time Preview",
      "description": "See how your document will look as you create it, ensuring it meets your requirements before sending."
    }
  ],
  "workflowDocumentScenarios": {
    "Sales Proposals": "Create persuasive proposals to win new business and close deals faster.",
    "Sales Contracts": "Formalize agreements with clients to ensure clear terms and conditions for every sale.",
    "Service Agreements": "Outline the scope, deliverables, and terms for services provided to clients.",
    "Sales Quotes": "Provide clients with detailed pricing and terms for products or services.",
    "Sales & Marketing Collateral": "Share branded materials to support sales and marketing efforts.",
    "Invoices & Payments": "Request and track payments for goods or services rendered.",
    "NDA": "Protect confidential information shared during business processes.",
    "Employment Contract": "Define the terms and conditions of employment for new hires.",
    "Compensation Change Forms": "Document and approve changes to employee compensation.",
    "Offer Letters": "Extend formal job offers to candidates with key terms outlined.",
    "Contractor Agreements": "Set clear expectations and terms for contractor engagements.",
    "Government Forms": "Complete required government documentation for compliance.",
    "Compliance Policies": "Communicate company policies to ensure regulatory compliance.",
    "Liability Waivers": "Limit company liability by having participants acknowledge risks.",
    "Service Requests": "Submit and track requests for internal or external services.",
    "Purchase Orders": "Authorize and document the purchase of goods or services.",
    "Tax Forms": "Report and file necessary tax information with authorities."
  }
},
  {
  "title": "Guided Selling (CPQ)",
  "id": "guided-selling-cpq",
  "description": "Uses PandaDoc's forms, rules engine, pricing tables, product catalog, and potentially Smart Content to guide sales reps through the process of configuring complex quotes and proposals accurately and compliantly. Prevents errors, enforces pricing rules, ensures required components are included, and speeds up quote generation.",
  "icons": [
    {
      "src": "public/icons/form.svg",
      "color": "purple"
    },
    {
      "src": "public/icons/rules.svg",
      "color": "blue"
    },
    {
      "src": "public/icons/document.svg",
      "color": "blue"
    }
  ],
  "link": "guided-selling-cpq.html",
  "plan": "CPQ Add-on",
  "availability": "Generally Available",
  "type": "Document generation",
  "name": "Guided Selling (CPQ)",
  "plans": "Business, Enterprise",
  "useCase": "Ideal for companies with complex product catalogs, configurable offerings, and a need to standardize the sales quoting process while ensuring accuracy and compliance.",
  "example": "A manufacturing company uses guided selling to help sales reps configure complex equipment quotes, renewals, proposals, and statements of work. The system ensures all required components are included, applies correct pricing based on volume and customer tier, and enforces compliance with industry regulations.",
  "featuresTitle": "Smart Quote Configuration & Generation",
  "featuresIntro": "Transform your sales quoting process with intelligent automation and guided workflows. Create accurate, compliant quotes in minutes while ensuring consistency across your team.",
  "features": [
    {
      "title": "CRM Integration",
      "description": "Syncs quote data with your CRM system for seamless opportunity management and accurate customer data"
    },
    {
      "title": "Product Catalog",
      "description": "Access to your complete product catalog with pricing and configuration rules, ensuring accurate product selection"
    },
    {
      "title": "Smart Content",
      "description": "Dynamically adjusts content based on customer profile and selected options, personalizing each quote"
    },
    {
      "title": "Rules Engine",
      "description": "Enforces business rules, validates configurations, and ensures compliance with company policies"
    }
  ],
  "steps": [
    {
      "icon": "public/icons/form.svg",
      "name": "Sales Rep Input",
      "description": "Sales rep starts the guided selling process by entering initial customer requirements",
      "iconBgColor": "rgba(33, 103, 198, 0.08)",
      "iconBorderColor": "rgba(33, 103, 198, 0.16)"
    },
    {
      "icon": "public/icons/rules.svg",
      "name": "Create Quote",
      "description": "System applies business rules to validate configuration and generate accurate quotes",
      "iconBgColor": "rgba(33, 103, 198, 0.08)",
      "iconBorderColor": "rgba(33, 103, 198, 0.16)"
    },
    {
      "icon": "public/icons/document.svg",
      "name": "Document Generation",
      "description": "Generates a professional, compliant quote or proposal with all selected options",
      "iconBgColor": "rgba(33, 103, 198, 0.08)",
      "iconBorderColor": "rgba(33, 103, 198, 0.16)"
    }
  ],
  "workflowDocumentScenarios": {
    "Sales Proposals": "Guide sales reps through configuring multi-component systems with required accessories and service packages",
    "Service Agreements": "Create customized service proposals with tiered pricing, optional add-ons, and compliance requirements",
    "Sales Contracts": "Generate renewal quotes with automatic pricing adjustments and optional upgrade paths",
    "SOW": "Build detailed SOWs with proper scoping, deliverables, and pricing based on selected services",
    "Sales Quotes": "Configure subscription packages with proper billing cycles, add-ons, and volume discounts",
    "NDA (Sales Administration)": "Create partner-specific quotes with appropriate margins, terms, and co-marketing options"
  },
  "targetCustomers": [
    "Complex product/service catalogs",
    "Configurable offerings",
    "Frequent quoting errors",
    "Need for pricing/discount controls",
    "Desire to standardize sales quoting process",
    "Replacing inadequate CRM quoting or spreadsheets"
  ],
  "exampleCustomers": [
    "MachMotion",
    "Okendo",
    "Simpatico Systems",
    "SchoolAI",
    "coboworx GmbH",
    "Servers Australia"
  ],
  "shortDescription": "Guide sales reps to create accurate, compliant quotes and proposals with smart forms and rules.",
  "aiAssistant": {
    "title": "AI Onboarding Agent for Quoting & Proposal Workflows",
    "shortDescription": "Setting up CPQ can take weeks or months—your team knows your process, but not the CPQ platform. The AI agent bridges this gap, building your ideal workflow from your requirements and unstructured data.",
    "messages": [
      { "role": "user", "text": "I have an Excel file with our quoting process. Can you help onboard it to PandaDoc?" },
      { "role": "assistant", "text": "Sure! Upload your Excel or CSV file and I'll extract SKUs, price lists, and rules." },
      { "role": "user", "text": "[uploads file]" },
      { "role": "assistant", "text": "I've found SKUs, price lists, and discount rules. Ready to create them in PandaDoc and share your onboarding plan. Proceed?" },
      { "role": "user", "text": "Yes, proceed." },
      { "role": "assistant", "text": "Done! Your catalog and rules are set up. Check your onboarding plan and test everything when ready." }
    ],
    "input": { "placeholder": "Upload your quote spreadsheet or ask about onboarding..." }
  }
},
  {
  "title": "Move Document to Folder After Send or Completion",
  "description": "Automatically file documents in the right folder after sending or signing. This workflow ensures your workspace stays organized and documents are always easy to find.",
  "icons": [
    {
      "src": "public/icons/trigger.svg",
      "color": "green"
    },
    {
      "src": "public/icons/document.svg",
      "color": "blue"
    },
    {
      "src": "public/icons/document-storage.svg",
      "color": "teal"
    }
  ],
  "link": "move-document-to-folder.html",
  "plan": "Starter",
  "availability": "Generally Available",
  "type": "Document management",
  "name": "Move Document to Folder After Send or Completion",
  "plans": "Starter",
  "useCase": "Store all signed invoices in a specific folder, or auto-organize NDAs, proposals, and contracts by type.",
  "example": "Store all signed invoices in a specific folder, or auto-organize NDAs, proposals, and contracts by type.",
  "steps": [
    {
      "name": "Document Sent or Completed",
      "icon": "public/icons/trigger.svg",
      "iconBgColor": "rgba(36, 174, 97, 0.08)",
      "iconBorderColor": "rgba(36, 174, 97, 0.16)",
      "alt": "Trigger"
    },
    {
      "name": "Check Document Type & Tags",
      "icon": "public/icons/document.svg",
      "iconBgColor": "rgba(33, 103, 198, 0.08)",
      "iconBorderColor": "rgba(33, 103, 198, 0.16)",
      "alt": "Document"
    },
    {
      "name": "Move to Correct Folder",
      "icon": "public/icons/document-storage.svg",
      "iconBgColor": "rgba(20, 150, 160, 0.08)",
      "iconBorderColor": "rgba(20, 150, 160, 0.16)",
      "alt": "Folder"
    }
  ],
  "features": [
    {
      "title": "Key Features",
      "description": "- Automatically moves documents to the correct folder after sending or completion.<br>- Auto-tags by type (e.g., proposal, NDA, invoice).<br>- Auto-creates folders if missing.<br>- Keeps your workspace organized and searchable.<br>- Runs asynchronously, so user experience is not interrupted."
    }
  ],
  "workflowDocumentScenarios": {
    "Invoices & Payments": "Store all signed invoices in a dedicated folder for easy access and compliance.",
    "NDA (Sales Administration)": "Automatically organize NDAs by client or project for better tracking.",
    "Service Agreements": "Keep all service agreements in the right folder for quick reference and audits.",
    "Sales Proposals": "Proposals are filed in the correct folder for each client or opportunity.",
    "Sales Contracts": "Contracts are moved to a secure folder after signing for compliance.",
    "Employment Contract": "Employment contracts are stored in the HR folder after completion.",
    "Offer Letters": "Offer letters are organized by candidate in the onboarding folder.",
    "Purchase Orders": "Purchase orders are automatically placed in the procurement folder.",
    "Vendor Agreements": "Vendor agreements are filed for easy vendor management.",
    "Service Requests": "Service request forms are routed to the appropriate department folder."
  },
  "id": "move-document-to-folder-after-send-or-completion",
  "shortDescription": "Automatically file documents in the right folder after sending or signing. Keeps your workspace organized and documents easy to find."
},
  {
  "title": "Post-Signature Follow-Up Document",
  "description": "Send the next document automatically after a contract is signed. This workflow helps you keep business moving by instantly generating and sending the next required document.",
  "icons": [
    {
      "src": "public/icons/trigger.svg",
      "color": "green"
    },
    {
      "src": "public/icons/document.svg",
      "color": "blue"
    },
    {
      "src": "public/icons/send.svg",
      "color": "blue"
    }
  ],
  "link": "post-signature-follow-up.html",
  "plan": "Starter",
  "availability": "Generally Available",
  "type": "Trigger-based automation",
  "name": "Post-Signature Follow-Up Document",
  "plans": "Starter",
  "useCase": "After an NDA is signed, automatically send a tailored proposal. After an onboarding form is signed, send a service agreement. After an offer letter is signed, trigger an equipment form. After invoice terms are agreed, send a payment authorization.",
  "example": "When an NDA is signed, a tailored sales proposal is automatically generated and sent to the client, ensuring no manual follow-up is needed and the sales process moves forward instantly.",
  "steps": [
    {
      "name": "Document Completed",
      "icon": "public/icons/trigger.svg",
      "iconBgColor": "rgba(36, 174, 97, 0.08)",
      "iconBorderColor": "rgba(36, 174, 97, 0.16)",
      "alt": "Trigger"
    },
    {
      "name": "Create Follow-Up Document",
      "icon": "public/icons/document.svg",
      "iconBgColor": "rgba(33, 103, 198, 0.08)",
      "iconBorderColor": "rgba(33, 103, 198, 0.16)",
      "alt": "Document"
    },
    {
      "name": "Send Follow-Up Document",
      "icon": "public/icons/send.svg",
      "iconBgColor": "rgba(33, 103, 198, 0.08)",
      "iconBorderColor": "rgba(33, 103, 198, 0.16)",
      "alt": "Send"
    }
  ],
  "features": [
    {
      "title": "Key Features",
      "description": "- Instantly sends the next document after a contract is signed.<br>- Extracts data from the signed document to prefill the follow-up.<br>- Supports custom field mapping and business logic.<br>- Works for any document type or scenario.<br>- Fully automated and seamless for users."
    }
  ],
  "workflowDocumentScenarios": {
    "NDA (Sales Administration)": "After NDA is signed, auto-generate a tailored sales proposal.",
    "Candidate Applications": "After onboarding intake form is signed, create a contract with selected services.",
    "Offer Letters": "After offer is signed, trigger a form to collect device preferences.",
    "Invoices & Payments": "After agreeing to invoice terms, create a payment setup document."
  },
  "id": "post-signature-follow-up",
  "shortDescription": "Send the next document automatically after a contract is signed. Instantly generate and send the next required document."
}
];
