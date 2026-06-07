function renderSummary(data) {
  const section = document.getElementById('summary-section');
  section.innerHTML = `
    <div class="half-width">
      <h1>Welcome To</h1>
      <h1><span class="orange-color">${data.name}'s</span> Portfolio...!!!</h1>
      <h3><span class="gray-color">${data.titles.join(' | ')}</span></h3>
      ${data.summary.map(p => `<p>${p}</p>`).join('')}
      <a class="link-button" target="_blank" href="${data.linkedin}">HIRE ME</a>
    </div>
    <div class="half-width">
      <img src="${data.photo}" alt="${data.name}">
    </div>
  `;
}

function renderEducation(data) {
  const section = document.getElementById('education-section');
  const educationItems = data.education.map(edu => {
    const highlightsList = edu.highlights.length
      ? `<ul>${edu.highlights.map(h => `<li>${h}</li>`).join('')}</ul>`
      : '';
    const institutionLink = edu.institutionUrl
      ? `<a target="_blank" href="${edu.institutionUrl}">${edu.institution}</a>`
      : edu.institution;
    return `
      <div class="education-item">
        <h3 class="navy-color">${edu.degree}</h3>
        <h4 class="orange-color">${institutionLink} &mdash; ${edu.period}</h4>
        ${highlightsList}
      </div>
    `;
  }).join('');

  section.innerHTML = `
    <div class="half-width">
      <img src="${data.photo2}" alt="${data.name}">
    </div>
    <div class="half-width">
      <h2>Education</h2>
      ${educationItems}
      <a class="link-button" target="_blank" href="${data.resume}">DOWNLOAD RESUME</a>
    </div>
  `;
}

function renderExperience(data) {
  const container = document.getElementById('experience-container');
  container.innerHTML = data.experience.map(exp => `
    <div class="experience-company" style="border-image: ${exp.gradient}; border-image-slice: 1;">
      <h3 class="navy-color">${exp.role} at ${exp.company}</h3>
      <h4 class="orange-color">${exp.period}</h4>
      <p>${exp.description}</p>
    </div>
  `).join('');
}

function renderSkills(data) {
  const section = document.getElementById('skills-section');
  section.innerHTML = `
    <h2>Skills</h2>
    <div class="skills-grid">
      ${data.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
    </div>
  `;
}

function renderCertificates(data) {
  const section = document.getElementById('certificates-section');
  const categories = [...new Set(data.certificates.map(c => c.category))];

  const groups = categories.map(cat => {
    const certs = data.certificates.filter(c => c.category === cat);
    return `
      <div class="cert-group">
        <h4 class="navy-color">${cat}</h4>
        <ul>
          ${certs.map(c => `<li><a target="_blank" href="${c.file}">${c.name}</a></li>`).join('')}
        </ul>
      </div>
    `;
  }).join('');

  section.innerHTML = `
    <h2>Certificates</h2>
    <div class="certificates-grid">${groups}</div>
  `;
}

function renderFooter(data) {
  const footer = document.getElementById('footer-text');
  footer.textContent = `Copyright © ${data.footer.year} | ${data.footer.name}`;
}

document.addEventListener('DOMContentLoaded', () => {
  renderSummary(portfolioData);
  renderEducation(portfolioData);
  renderExperience(portfolioData);
  renderSkills(portfolioData);
  renderCertificates(portfolioData);
  renderFooter(portfolioData);
});
