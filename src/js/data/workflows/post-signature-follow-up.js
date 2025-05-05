export default {
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
};
