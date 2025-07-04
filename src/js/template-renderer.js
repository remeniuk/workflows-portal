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
                            <div class="step-arrow-vertical">
                                <img src="public/icons/arrow-down.svg" alt="↓">
                            </div>
                            <div class="branch-arrow-row" style="display: flex; justify-content: center; align-items: center; margin-bottom: 4px;">
                                <img src="${step.icon}" alt="${step.alt}" style="width: 64px; height: 64px; display: block;" />
                            </div>
                            <!--<div class="branch-connectors-row">
                                <svg width="340" height="48" style="overflow:visible;" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M170 0 V16" stroke="#248567" stroke-width="1" fill="none"/>
                                    <path d="M170 16 C170 28, 70 28, 50 40" stroke="#248567" stroke-width="1" fill="none"/>
                                    <path d="M170 16 C170 28, 270 28, 290 40" stroke="#ADADAD" stroke-width="1" fill="none"/>
                                </svg>
                            </div>-->
                            <div class="branch-chips-row" style="width:340px; margin:0 auto; display:flex; flex-direction:row; align-items:flex-start; gap:40px; justify-content:center;">
                                <div class="branch-chip-with-plus">
                                    <div class="step-arrow-vertical">
                                        <img src="public/icons/arrow-down.svg" alt="↓">
                                    </div>
                                    <div class="branch-chip">${step.branches[0].label}</div>
                                    <div class="step-arrow-vertical">
                                        <img src="public/icons/arrow-down.svg" alt="↓">
                                    </div>
                                    ${step.branches[0].steps && step.branches[0].steps.length > 0 ?
                                        step.branches[0].steps.map(branchStep => `
                                            <div class='step-vertical'>
                                                <div class='step-content-vertical'>
                                                    <div class='step-icon' style='background-color: ${branchStep.iconBgColor}; border-color: ${branchStep.iconBorderColor};'>
                                                        <img src='${branchStep.icon}' alt='${branchStep.alt}'>
                                                    </div>
                                                    <span>${branchStep.name}</span>
                                                </div>
                                            </div>
                                            <div class='step-arrow-vertical'>
                                                <img src='public/icons/arrow-down.svg' alt='↓'>
                                            </div>
                                        `).join('')
                                        :
                                        `<button class='branch-plus-btn' tabindex='-1' aria-label='Add step'>
                                            <svg width='20' height='20' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                                <path d='M12 7v10M7 12h10' stroke='#248567' stroke-width='2' stroke-linecap='round'/>
                                            </svg>
                                        </button>
                                        <div class='step-arrow-vertical'>
                                            <img src='public/icons/arrow-down.svg' alt='↓'>
                                        </div>`
                                    }
                                </div>
                                <div class="branch-chip-with-plus">
                                    <div class="step-arrow-vertical">
                                        <img src="public/icons/arrow-down.svg" alt="↓">
                                    </div>
                                    <div class="branch-chip fallback">${step.branches[1].label}</div>
                                    <div class="step-arrow-vertical">
                                        <img src="public/icons/arrow-down.svg" alt="↓">
                                    </div>
                                    ${step.branches[1].steps && step.branches[1].steps.length > 0 ?
                                        step.branches[1].steps.map(branchStep => `
                                            <div class='step-vertical'>
                                                <div class='step-content-vertical'>
                                                    <div class='step-icon' style='background-color: ${branchStep.iconBgColor}; border-color: ${branchStep.iconBorderColor};'>
                                                        <img src='${branchStep.icon}' alt='${branchStep.alt}'>
                                                    </div>
                                                    <span>${branchStep.name}</span>
                                                </div>
                                            </div>
                                            <div class='step-arrow-vertical'>
                                                <img src='public/icons/arrow-down.svg' alt='↓'>
                                            </div>
                                        `).join('')
                                        :
                                        `<button class='branch-plus-btn' tabindex='-1' aria-label='Add step'>
                                            <svg width='20' height='20' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                                <path d='M12 7v10M7 12h10' stroke='#248567' stroke-width='2' stroke-linecap='round'/>
                                            </svg>
                                        </button>
                                        <div class='step-arrow-vertical'>
                                            <img src='public/icons/arrow-down.svg' alt='↓'>
                                        </div>`
                                    }
                                </div>
                            </div>
                        </div>
                    `;
                    // Remove the arrow down after branching block since we now have arrows in each branch
                    if (idx < data.steps.length - 1) {
                        if (!data.steps[idx + 1].type || data.steps[idx + 1].type !== 'condition') {
                            stepsHtml += `<div class="step-arrow-vertical">
                                <img src="public/icons/arrow-down.svg" alt="↓">
                            </div>`;
                        }
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
        if (data.workflowDocumentScenarios) {
            // Get document types from catalog that are relevant to this workflow
            const filteredTypes = window.documentTypesCatalog.filter(type => 
                data.workflowDocumentScenarios[type.name]
            );

            const documentTypesHtml = `
                ${filteredTypes.map((type, idx) => `
                    <div class="template-card${idx > 2 ? ' hidden-document' : ''}">
                        <div class="card-image">
                            <img src="${type.image}" alt="${type.name}">
                        </div>
                        <div class="card-content">
                            <h3>${type.name}</h3>
                            <p>${data.workflowDocumentScenarios[type.name]}</p>
                        </div>
                    </div>
                `).join('')}
                ${filteredTypes.length > 3 ? `
                    <div class="see-more">
                        <button class="btn-text-icon" id="show-more-documents-btn">Show more documents</button>
                    </div>
                ` : ''}
            `;
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

class DocumentDetailsRenderer {
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
        html = html.replace(/<!-- TEMPLATE_SCREENSHOT -->/g, data.screenshot);
        html = html.replace(/<!-- TEMPLATE_DESCRIPTION -->/g, data.description);
        html = html.replace(/<!-- TEMPLATE_EXAMPLE -->/g, data.example);
        html = html.replace(/<!-- USAGE_COUNT -->/g, data.usageCount ? data.usageCount.toLocaleString() : "-");
        html = html.replace(/<!-- RATING -->/g, data.rating ? data.rating.toFixed(1) : "-");
        html = html.replace(/<!-- REVIEWS_COUNT -->/g, data.reviewsCount ? data.reviewsCount : "0");
        if (!data.aiAssistantIncluded) {
            html = html.replace(/<div style=\"display: flex; align-items: center; gap: 10px; margin-bottom: 8px;\">[\s\S]*?AI assistant included<\/span>[\s\S]*?<\/div>/, "");
        }

        // Replace related workflows
        if (data.relatedWorkflows && data.relatedWorkflows.length > 0) {
            const relatedWorkflowsHtml = data.relatedWorkflows.map(workflow => `
                <a href="${workflow.url}" class="template-card workflow-card">
                    <div class="card-icons">
                        ${workflow.icons.map(icon => `
                            <div class="app-icon ${icon.color}">
                                <img src="${icon.src}" alt="${icon.alt}">
                            </div>
                        `).join('')}
                    </div>
                    <div class="card-content">
                        <h3>${workflow.title}</h3>
                        <p>${workflow.description}</p>
                    </div>
                </a>
            `).join('');
            html = html.replace(/<!-- TEMPLATE_RELATED_WORKFLOWS -->/, relatedWorkflowsHtml);
        } else {
            // If no related workflows, remove the entire section
            html = html.replace(/<div class="related-workflows">[\s\S]*?<\/div>\s*<\/div>/, '');
        }
        
        // Render workflow steps as Figma card rows
        if (data.steps) {
            let stepsHtml = '';
            for (let idx = 0; idx < data.steps.length; idx++) {
                const step = data.steps[idx];
                stepsHtml += `
                    <div class="workflow-card-step">
                        <div class="workflow-card-step-left">
                            <div class="workflow-card-step-icon" style="background:${step.iconBgColor};">
                                <img src="${step.icon}" alt="${step.alt}">
                            </div>
                            <span class="workflow-card-step-label">${step.name}</span>
                        </div>
                        ${data.isWorkflowTemplate ? `<button class="workflow-card-step-action">Set up</button>` : ''}
                    </div>
                `;
            }
            html = html.replace(/<!-- TEMPLATE_STEPS -->/, stepsHtml);
        }

        // Replace document types
        if (data.documentTypes) {
            const documentTypesHtml = `
                ${data.documentTypes.map((type, idx) => `
                    <div class="template-card${idx > 2 ? ' hidden-document' : ''}">
                        <div class="card-image">
                            <img src="${type.image}" alt="${type.name}">
                        </div>
                        <div class="card-content">
                            <h3>${type.name}</h3>
                            <p>${type.scenario}</p>
                        </div>
                    </div>
                `).join('')}
                ${data.documentTypes.length > 3 ? `
                    <div class="see-more">
                        <button class="btn-text-icon" id="show-more-documents-btn">Show more documents</button>
                    </div>
                ` : ''}
            `;
            html = html.replace(/<!-- TEMPLATE_DOCUMENT_TYPES -->/, documentTypesHtml);
        }

        return html;
    }
}

// Export the renderer classes
window.AutomationDetailsRenderer = AutomationDetailsRenderer;
window.DocumentDetailsRenderer = DocumentDetailsRenderer; 