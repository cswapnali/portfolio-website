/* ==========================================================================
   Swapnali Choudhari - Senior Software Developer Portfolio JavaScript
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  // 1. Mobile Menu Toggle
  const mobileToggle = document.getElementById('mobileToggle');
  const navLinks = document.getElementById('navLinks');

  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      const icon = mobileToggle.querySelector('i');
      if (icon) {
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
      }
    });
  }

  // 2. Skills Category Tab Filtering
  const skillTabs = document.querySelectorAll('.skills-tabs .tab-btn');
  const skillCards = document.querySelectorAll('.skills-grid .skill-card');

  skillTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Remove active class from all tabs
      skillTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const filter = tab.getAttribute('data-filter');

      skillCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.style.display = 'flex';
          card.style.animation = 'fadeIn 0.3s ease';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // 3. System Architecture Visualizer Switcher
  const archBtns = document.querySelectorAll('.arch-nav-btn');
  const archFlows = document.querySelectorAll('.arch-flow-content');

  archBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      archBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const targetId = btn.getAttribute('data-arch');
      archFlows.forEach(flow => {
        if (flow.id === targetId) {
          flow.style.display = 'grid';
        } else {
          flow.style.display = 'none';
        }
      });
    });
  });

  // 4. Modal Popups (Project Details & Contact Form)
  const modalOverlay = document.getElementById('modalOverlay');
  const modalBody = document.getElementById('modalBody');
  const modalTitle = document.getElementById('modalTitle');
  const modalClose = document.getElementById('modalClose');

  const projectDetails = {
    prodSystem: {
      title: "Production Planning System Architecture",
      content: `
        <div class="project-modal-details">
          <p class="section-subtitle" style="margin-bottom: 20px;">
            High-performance internal web application engineered for real-time scheduling and inventory dispatch management at TagID Solutions.
          </p>
          <h4 style="color: var(--primary); margin-bottom: 10px;">Key Technical Innovations</h4>
          <ul style="padding-left: 20px; line-height: 1.8; color: var(--text-secondary); margin-bottom: 20px;">
            <li>Designed high-throughput FastAPI REST APIs delivering sub-100ms request handling for dispatch validation.</li>
            <li>Engineered interactive React frontend components for real-time inventory adjustments and live scheduling matrix.</li>
            <li>Optimized complex PostgreSQL schema & indexes to streamline transactional reliability during peak operational surges.</li>
          </ul>
          <h4 style="color: var(--primary); margin-bottom: 10px;">Tech Stack</h4>
          <div class="tech-tags" style="margin-bottom: 24px;">
            <span class="tech-pill">FastAPI</span>
            <span class="tech-pill">Python</span>
            <span class="tech-pill">React</span>
            <span class="tech-pill">PostgreSQL</span>
            <span class="tech-pill">RESTful APIs</span>
            <span class="tech-pill">Git</span>
          </div>
        </div>
      `
    },
    migrationSystem: {
      title: "Portal Migration & Architecture Modernisation",
      content: `
        <div class="project-modal-details">
          <p class="section-subtitle" style="margin-bottom: 20px;">
            Migrated legacy PHP monolith to a decoupled microservices architecture (React, FastAPI, PostgreSQL) and developed interactive User/Admin portals for real-time order tracking and production analytics.
          </p>
          <h4 style="color: var(--primary); margin-bottom: 10px;">Key Accomplishments & Query Performance Gains</h4>
          <ul style="padding-left: 20px; line-height: 1.8; color: var(--text-secondary); margin-bottom: 20px;">
            <li><strong>Query Optimization & Acceleration</strong>: Optimized database query performance and asynchronous backend services, resulting in a dramatic performance improvement—accelerating Order Summary report generation from <strong>2 minutes to 30 seconds</strong>.</li>
            <li><strong>User Self-Service Portal</strong>: Engineered interactive order placement workflows for RFID tags, custom specs management, and end-to-end real-time order tracking.</li>
            <li><strong>Admin Control & Production Analytics Hub</strong>: Built centralized dashboards for tracking customer records, received orders, and live daily RFID tag production metrics (tags produced per day).</li>
            <li><strong>Decoupled Microservices Infrastructure</strong>: Modernized legacy monolithic PHP endpoints into async FastAPI web services backed by relational PostgreSQL data workflows.</li>
          </ul>
          <h4 style="color: var(--primary); margin-bottom: 10px;">Tech Stack & Core Technologies</h4>
          <div class="tech-tags" style="margin-bottom: 24px;">
            <span class="tech-pill">FastAPI</span>
            <span class="tech-pill">React</span>
            <span class="tech-pill">PostgreSQL</span>
            <span class="tech-pill">PHP Migration</span>
            <span class="tech-pill">Query Optimization (Order Report 2m → 30s)</span>
            <span class="tech-pill">User & Admin Portals</span>
          </div>
        </div>
      `
    },
    n8nSystem: {
      title: "Automated Email & Order Workflow System",
      content: `
        <div class="project-modal-details">
          <p class="section-subtitle" style="margin-bottom: 20px;">
            Automated event-driven orchestration system integrating n8n automation pipelines with database triggers.
          </p>
          <h4 style="color: var(--primary); margin-bottom: 10px;">Workflow Automation Engine</h4>
          <ul style="padding-left: 20px; line-height: 1.8; color: var(--text-secondary); margin-bottom: 20px;">
            <li>Configured n8n automation workflows monitoring email webhooks and status changes.</li>
            <li>Automated resolution pipeline for order entries flagged as <strong>"Artwork Rejected"</strong>, alerting stakeholders instantly.</li>
            <li>Eliminated manual tracking overhead and improved order delivery resolution times.</li>
          </ul>
          <h4 style="color: var(--primary); margin-bottom: 10px;">Tech Stack</h4>
          <div class="tech-tags" style="margin-bottom: 24px;">
            <span class="tech-pill">n8n Automation</span>
            <span class="tech-pill">Python</span>
            <span class="tech-pill">Webhooks</span>
            <span class="tech-pill">FastAPI</span>
            <span class="tech-pill">PostgreSQL</span>
          </div>
        </div>
      `
    },
    opsSystem: {
      title: "Operations & QC Order Tracking System",
      content: `
        <div class="project-modal-details">
          <p class="section-subtitle" style="margin-bottom: 20px;">
            Centralized operations monitoring system providing end-to-end real-time tracking for production and quality control.
          </p>
          <h4 style="color: var(--primary); margin-bottom: 10px;">Metrics & Analytics Tracking</h4>
          <ul style="padding-left: 20px; line-height: 1.8; color: var(--text-secondary); margin-bottom: 20px;">
            <li>Engineered specialized analytics modules tracking Live Production Volume, QC Approved Volume, and Dispatch Volume.</li>
            <li>Implemented real-time data visualizers and PostgreSQL aggregated queries for executive reporting.</li>
          </ul>
          <h4 style="color: var(--primary); margin-bottom: 10px;">Tech Stack</h4>
          <div class="tech-tags" style="margin-bottom: 24px;">
            <span class="tech-pill">FastAPI</span>
            <span class="tech-pill">React</span>
            <span class="tech-pill">PostgreSQL</span>
            <span class="tech-pill">Data Analytics</span>
          </div>
        </div>
      `
    }
  };

  window.openProjectModal = function (projectId) {
    const data = projectDetails[projectId];
    if (data && modalOverlay) {
      modalTitle.innerText = data.title;
      modalBody.innerHTML = data.content;
      modalOverlay.classList.add('active');
    }
  };

  // Configuration: Replace with your actual email address to receive contact messages
  const RECIPIENT_EMAIL = "0782309f43ba3325bf55574683e194de";

  window.openContactModal = function () {
    if (modalOverlay) {
      modalTitle.innerText = "Get in Touch with Swapnali";
      modalBody.innerHTML = `
        <form id="contactForm" onsubmit="handleFormSubmit(event)">
          <div class="form-group">
            <label class="form-label">Your Name</label>
            <input type="text" id="contactName" name="name" class="form-input" placeholder="e.g. Alex Johnson" required />
          </div>
          <div class="form-group">
            <label class="form-label">Email Address</label>
            <input type="email" id="contactEmail" name="email" class="form-input" placeholder="e.g. alex@example.com" required />
          </div>
          <div class="form-group">
            <label class="form-label">Subject / Purpose</label>
            <input type="text" id="contactSubject" name="_subject" class="form-input" placeholder="e.g. Tech Leadership Opportunity / Collaboration" required />
          </div>
          <div class="form-group">
            <label class="form-label">Message</label>
            <textarea id="contactMessage" name="message" class="form-textarea" rows="4" placeholder="Hello Swapnali, I would love to discuss..." required></textarea>
          </div>
          <button type="submit" id="submitBtn" class="btn btn-primary" style="width: 100%;">Send Message</button>
        </form>
      `;
      modalOverlay.classList.add('active');
    }
  };

  if (modalClose) {
    modalClose.addEventListener('click', () => {
      modalOverlay.classList.remove('active');
    });
  }

  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) {
        modalOverlay.classList.remove('active');
      }
    });
  }

  // 5. Contact Form Submission Handler via FormSubmit
  window.handleFormSubmit = function (e) {
    e.preventDefault();

    const submitBtn = document.getElementById('submitBtn');
    const name = document.getElementById('contactName')?.value;
    const email = document.getElementById('contactEmail')?.value;
    const subject = document.getElementById('contactSubject')?.value;
    const message = document.getElementById('contactMessage')?.value;

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = `<i class="fas fa-spinner fa-spin"></i> Sending...`;
    }

    fetch(`https://formsubmit.co/ajax/${RECIPIENT_EMAIL}`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        email: email,
        _subject: subject || "New Portfolio Contact Message",
        message: message
      })
    })
      .then(response => response.json())
      .then(data => {
        if (modalOverlay) {
          modalOverlay.classList.remove('active');
        }
        showToast("Message sent successfully! Swapnali will reply shortly.");
      })
      .catch(error => {
        console.error("Form submission error:", error);
        showToast("Failed to send message. Please try again.");
      })
      .finally(() => {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = `Send Message`;
        }
      });
  };

  // 6. Copy Email to Clipboard
  window.copyEmail = function (email) {
    navigator.clipboard.writeText(email).then(() => {
      showToast(`Copied ${email} to clipboard!`);
    }).catch(err => {
      showToast("Email address: " + email);
    });
  };

  // 7. Toast Tooltip Notification
  function showToast(message) {
    let toast = document.getElementById('toastTooltip');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'toastTooltip';
      toast.className = 'toast-tooltip';
      document.body.appendChild(toast);
    }
    toast.innerHTML = `<i class="fas fa-check-circle" style="color: #10b981;"></i> <span>${message}</span>`;
    toast.classList.add('show');

    setTimeout(() => {
      toast.classList.remove('show');
    }, 3500);
  }

});
