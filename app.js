const piiData = [
{
id: 1,
type: ‘direct’,
name: ‘Social Security Number (SSN)’,
definition: ‘Unique 9-digit identifier issued by US Social Security Administration. Highest PII risk.’,
examples: ‘123-45-6789, 987654321’,
regulations: ‘GDPR, CCPA, HIPAA, GLBA’,
riskLevel: ‘Critical’,
classification: ‘Level 4 - Restricted’
},
{
id: 2,
type: ‘direct’,
name: ‘Full Name’,
definition: ‘Complete legal name. By itself low-risk, but combined with other data becomes high-risk.’,
examples: ‘John Michael Smith, Maria García López’,
regulations: ‘GDPR, CCPA’,
riskLevel: ‘Medium’,
classification: ‘Level 2-3’
},
{
id: 3,
type: ‘direct’,
name: ‘Email Address’,
definition: ‘Electronic mail address. Enables direct contact and account access.’,
examples: ‘john.smith@example.com, user123@gmail.com’,
regulations: ‘GDPR, CCPA’,
riskLevel: ‘High’,
classification: ‘Level 3 - Confidential’
},
{
id: 4,
type: ‘direct’,
name: ‘Phone Number’,
definition: ‘Telephone number (mobile or landline). Enables direct contact.’,
examples: ‘(555) 123-4567, +1-555-987-6543’,
regulations: ‘GDPR, CCPA’,
riskLevel: ‘High’,
classification: ‘Level 3 - Confidential’
},
{
id: 5,
type: ‘direct’,
name: ‘Home Address’,
definition: ‘Physical residential location. Enables identification and targeted attacks.’,
examples: ‘123 Main St, Anytown, CA 90210’,
regulations: ‘GDPR, CCPA’,
riskLevel: ‘High’,
classification: ‘Level 3 - Confidential’
},
{
id: 6,
type: ‘direct’,
name: ‘Credit Card Number’,
definition: ‘16-digit payment card number. Highest financial risk.’,
examples: ‘4532-1234-5678-9010 (Visa)’,
regulations: ‘PCI-DSS, GDPR, CCPA’,
riskLevel: ‘Critical’,
classification: ‘Level 4 - Restricted’
},
{
id: 7,
type: ‘direct’,
name: ‘Passport / ID Number’,
definition: ‘Government-issued identification numbers. High re-identification risk.’,
examples: ‘A12345678, D1234567’,
regulations: ‘GDPR, CCPA’,
riskLevel: ‘Critical’,
classification: ‘Level 4 - Restricted’
},
{
id: 8,
type: ‘direct’,
name: ‘Driver's License Number’,
definition: ‘State-issued driver ID. Enables identity verification and location tracking.’,
examples: ‘D1234567 (CA DL)’,
regulations: ‘GDPR, CCPA’,
riskLevel: ‘Critical’,
classification: ‘Level 4 - Restricted’
},
{
id: 9,
type: ‘quasi’,
name: ‘Date of Birth’,
definition: ‘Birth date. Low risk alone, high risk when combined with other quasi-identifiers.’,
examples: ‘01/15/1985, 1990-03-22’,
regulations: ‘GDPR, CCPA’,
riskLevel: ‘Medium’,
classification: ‘Level 2-3’
},
{
id: 10,
type: ‘quasi’,
name: ‘ZIP Code’,
definition: ‘5-digit postal code. Combined with birth date/gender = re-identification possible.’,
examples: ‘90210, 10001, 60601’,
regulations: ‘GDPR, CCPA’,
riskLevel: ‘Medium’,
classification: ‘Level 2-3’
},
{
id: 11,
type: ‘quasi’,
name: ‘Gender’,
definition: ‘Biological sex (M/F/Other). Low individual risk, high combined with other data.’,
examples: ‘Male, Female, Non-binary’,
regulations: ‘GDPR, CCPA’,
riskLevel: ‘Low’,
classification: ‘Level 2’
},
{
id: 12,
type: ‘quasi’,
name: ‘Ethnicity / Race’,
definition: ‘Racial or ethnic origin. Sensitive under GDPR, protected in some jurisdictions.’,
examples: ‘Caucasian, African American, Asian, Hispanic’,
regulations: ‘GDPR (special category), CCPA’,
riskLevel: ‘High’,
classification: ‘Level 3 - Confidential’
},
{
id: 13,
type: ‘quasi’,
name: ‘IP Address’,
definition: ‘Internet Protocol address. Can be linked to identity via ISP records.’,
examples: ‘192.168.1.1, 203.0.113.45’,
regulations: ‘GDPR, CCPA’,
riskLevel: ‘Medium’,
classification: ‘Level 2-3’
},
{
id: 14,
type: ‘quasi’,
name: ‘Employment Title/Department’,
definition: ‘Job position and organizational unit. Combined with other data enables targeting.’,
examples: ‘Senior Software Engineer, VP Marketing’,
regulations: ‘GDPR, CCPA’,
riskLevel: ‘Low’,
classification: ‘Level 2 - Internal’
},
{
id: 15,
type: ‘sensitive’,
name: ‘Medical Records / Diagnoses’,
definition: ‘Health information including diagnoses, treatments, medications (PHI).’,
examples: ‘Diabetes, Depression diagnosis, Medication list’,
regulations: ‘HIPAA (Critical), GDPR, CCPA’,
riskLevel: ‘Critical’,
classification: ‘Level 4 - Restricted’
},
{
id: 16,
type: ‘sensitive’,
name: ‘Financial Account Numbers’,
definition: ‘Bank account, routing, investment account numbers.’,
examples: ‘Bank account: 123456789, Routing: 987654321’,
regulations: ‘GLBA, GDPR, CCPA’,
riskLevel: ‘Critical’,
classification: ‘Level 4 - Restricted’
},
{
id: 17,
type: ‘sensitive’,
name: ‘Salary / Compensation Data’,
definition: ‘Employee compensation, benefits, bonus information.’,
examples: ‘$120,000/year, 5% bonus, RSU vesting schedule’,
regulations: ‘GDPR, Labor laws, CCPA’,
riskLevel: ‘High’,
classification: ‘Level 3 - Confidential’
},
{
id: 18,
type: ‘sensitive’,
name: ‘Biometric Data’,
definition: ‘Fingerprints, DNA, facial recognition, iris scans, voice recordings.’,
examples: ‘Fingerprint template, Facial geometry, DNA sequence’,
regulations: ‘GDPR (special category), BIPA (Illinois), CCPA’,
riskLevel: ‘Critical’,
classification: ‘Level 4 - Restricted’
},
{
id: 19,
type: ‘sensitive’,
name: ‘Sexual Orientation / Gender Identity’,
definition: ‘Information revealing sexual orientation or gender identity.’,
examples: ‘LGBTQ+ status, Gender transition records’,
regulations: ‘GDPR (special category)’,
riskLevel: ‘Critical’,
classification: ‘Level 4 - Restricted’
},
{
id: 20,
type: ‘sensitive’,
name: ‘Religious / Political Beliefs’,
definition: ‘Information indicating religious affiliation or political views.’,
examples: ‘Church attendance, Political party membership’,
regulations: ‘GDPR (special category)’,
riskLevel: ‘High’,
classification: ‘Level 3 - Confidential’
}
];

function renderPIICards(filteredData = piiData) {
const container = document.getElementById(‘piiCards’);
container.innerHTML = ‘’;


filteredData.forEach((item, index) => {
    const card = document.createElement('div');
    card.className = 'pii-card';
    card.style.animationDelay = `${index * 0.05}s`;

    const typeClass = item.type === 'direct' ? 'direct' : item.type === 'quasi' ? 'quasi' : 'sensitive';
    const typeLabel = item.type === 'direct' ? 'Direct Identifier' : item.type === 'quasi' ? 'Quasi-Identifier' : 'Sensitive Information';

    const riskColor = item.riskLevel === 'Critical' ? '#DC3545' : item.riskLevel === 'High' ? '#FFC107' : item.riskLevel === 'Medium' ? '#FFC107' : '#28A745';

    card.innerHTML = `
        <span class="pii-type ${typeClass}">${typeLabel}</span>
        <h4>${item.name}</h4>
        
        <div class="pii-definition">${item.definition}</div>
        
        <div class="pii-field">
            <div class="pii-field-label">Examples</div>
            <div class="pii-examples">
                <div class="pii-examples-items">${item.examples}</div>
            </div>
        </div>
        
        <div class="pii-field">
            <div class="pii-field-label">Risk Level</div>
            <div class="pii-field-value" style="color: ${riskColor}; font-weight: 600;">
                ${item.riskLevel}
            </div>
        </div>
        
        <div class="pii-field">
            <div class="pii-field-label">Classification</div>
            <div class="pii-field-value">${item.classification}</div>
        </div>
        
        <div class="pii-field">
            <div class="pii-regulations">
                <div class="pii-regulations-label">Protected By</div>
                <div class="pii-regulations-items">${item.regulations}</div>
            </div>
        </div>
    `;

    container.appendChild(card);
});


}

function filterPII() {
const filterValue = document.getElementById(‘filterType’).value;


if (filterValue === 'all') {
    renderPIICards(piiData);
} else {
    const filtered = piiData.filter(item => item.type === filterValue);
    renderPIICards(filtered);
}


}

// Initialize
document.addEventListener(‘DOMContentLoaded’, function() {
renderPIICards();
});