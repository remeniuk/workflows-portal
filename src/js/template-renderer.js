class AutomationDetailsRenderer {
    constructor(templatePath) {
        this.templatePath = templatePath;
    }

    async render(data) {
        const response = await fetch(this.templatePath);
        let html = await response.text();

        // Replace all template placeholders with actual data
        html = html.replace(/<!-- TEMPLATE_TITLE -->/g, data.title);
        html = html.replace(/<!-- TEMPLATE_NAME -->/g, data.name);
        html = html.replace(/<!-- TEMPLATE_PLANS -->/g, data.plans);
        html = html.replace(/<!-- TEMPLATE_DESCRIPTION -->/g, data.description);
        html = html.replace(/<!-- TEMPLATE_USE_CASE -->/g, data.useCase);
        html = html.replace(/<!-- TEMPLATE_EXAMPLE -->/g, data.example);
        html = html.replace(/<!-- TEMPLATE_FEATURES_TITLE -->/g, data.featuresTitle || "");
        html = html.replace(/<!-- TEMPLATE_FEATURES_INTRO -->/g, data.featuresIntro || "");
        
        // Replace workflow steps
        if (data.steps) {
            let stepsHtml = '';
            for (let idx = 0; idx < data.steps.length; idx++) {
                const step = data.steps[idx];
                // Render conditional branch with Figma-style chips
                if (step.type === 'condition' && step.branches && step.branches.length === 2) {
                    stepsHtml += `
                        <div class="branching-block">
                            <div class="diamond-row">
                                <div class="condition-diamond">
                                    <img src="${step.icon}" alt="${step.alt}">
                                </div>
                            </div>
                            <div class="branch-chips-row">
                                <div class="branch-chip">${step.branches[0].label}</div>
                                <div class="branch-chip fallback">${step.branches[1].label}</div>
                            </div>
                        </div>
                    `;
                    // Only add arrow down if not last step
                    if (idx < data.steps.length - 1) {
                        stepsHtml += `<div class="step-arrow-vertical">
                            <img src="public/icons/arrow-down.svg" alt="↓">
                        </div>`;
                    }
                } else {
                    // Render normal step
                    stepsHtml += `
                        <div class="step-vertical">
                            <div class="step-content-vertical">
                                <div class="step-icon" style="background-color: ${step.iconBgColor}; border-color: ${step.iconBorderColor};">
                                    <img src="${step.icon}" alt="${step.alt}">
                                </div>
                                <span>${step.name}</span>
                            </div>
                        </div>
                    `;
                    if (idx < data.steps.length - 1) {
                        // Only add arrow down if not last step and next is not a condition
                        if (!data.steps[idx + 1].type || data.steps[idx + 1].type !== 'condition') {
                            stepsHtml += `<div class="step-arrow-vertical">
                                <img src="public/icons/arrow-down.svg" alt="↓">
                            </div>`;
                        }
                    }
                }
            }
            html = html.replace(/<!-- TEMPLATE_STEPS -->/, stepsHtml);
        }

        // Replace features
        if (data.features && data.features.length > 0) {
            const featuresHtml = data.features.map(feature => `
                <div style="margin-bottom: 32px;">
                    <h3 style="font-size: 18px; margin-bottom: 16px;">${feature.title}</h3>
                    <p style="font-size: 15px; line-height: 1.6; margin-bottom: 16px;">
                        ${feature.description}
                    </p>
                </div>
            `).join('');
            html = html.replace(/<!-- TEMPLATE_FEATURES -->/, featuresHtml);
        } else {
            // Remove the entire features block if no features, title, or intro
            html = html.replace(/<div class="features">[\s\S]*?<div class="feature-item" style="margin-top: 32px;">/, '<div class="feature-item" style="margin-top: 32px;">');
        }

        // Replace enterprise features
        if (data.enterpriseFeatures) {
            const enterpriseFeaturesHtml = `
                <div style="margin-bottom: 32px;">
                    <h3 style="font-size: 18px; margin-bottom: 16px;">Enterprise Plan Features</h3>
                    <p style="font-size: 15px; line-height: 1.6; margin-bottom: 16px;">
                        ${data.enterpriseFeatures.description}
                    </p>
                    <ul style="margin: 16px 0; padding-left: 24px; font-size: 15px; line-height: 1.6;">
                        ${data.enterpriseFeatures.features.map(feature => `
                            <li style="margin-bottom: 8px;"><b>${feature.title}:</b> ${feature.description}</li>
                        `).join('')}
                    </ul>
                </div>
            `;
            html = html.replace(/<!-- TEMPLATE_ENTERPRISE_FEATURES -->/, enterpriseFeaturesHtml);
        }

        // Replace document types
        if (data.documentTypes) {
            const documentTypesHtml = data.documentTypes.map((type, index) => `
                <tr style="background:${index % 2 === 0 ? '#fff' : '#fcfcfc'};">
                    <td style="padding:12px 12px; border-bottom:1px solid #f3f3f3;">${type.name}</td>
                    <td style="border-bottom:1px solid #f3f3f3;">${type.scenario}</td>
                </tr>
            `).join('');
            html = html.replace(/<!-- TEMPLATE_DOCUMENT_TYPES -->/, documentTypesHtml);
        }

        // Replace integrations
        if (data.integrations) {
            const integrationsHtml = `
                <div class="integrations" style="margin: 24px 0;">
                    <h3 class="integrations-title" style="font-size: 16px; font-weight: 600; margin-bottom: 16px;">${data.integrations.title}</h3>
                    <div class="integration-logos" style="display: flex; gap: 16px; margin-bottom: 8px;">
                        ${data.integrations.logos.map(logo => `
                            <img src="${logo.src}" alt="${logo.alt}" style="width: 32px; height: 32px;">
                        `).join('')}
                    </div>
                    <p class="integrations-description" style="font-size: 14px; color: #666;">${data.integrations.description}</p>
                </div>
            `;
            html = html.replace(/<!-- TEMPLATE_INTEGRATIONS -->/, integrationsHtml);
        }

        return html;
    }
}

// Export the renderer class
window.AutomationDetailsRenderer = AutomationDetailsRenderer; 
window.AutomationDetailsRenderer = AutomationDetailsRenderer; 
window.AutomationDetailsRenderer = AutomationDetailsRenderer; 