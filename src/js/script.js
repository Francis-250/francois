import {
  projects,
  skills,
  experiences,
  testimonials,
  contactInfo,
} from "../assets/data/data.js";

document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("theme-toggle");
  const body = document.body;

  const savedTheme = localStorage.getItem("theme") || "dark";
  body.setAttribute("data-theme", savedTheme);

  if (themeToggle) {
    const icon = themeToggle.querySelector(".theme-icon");
    if (icon) {
      icon.className =
        savedTheme === "dark"
          ? "fa-solid fa-sun theme-icon"
          : "fa-solid fa-moon theme-icon";
    }

    themeToggle.addEventListener("click", () => {
      const currentTheme = body.getAttribute("data-theme");
      const newTheme = currentTheme === "light" ? "dark" : "light";
      body.setAttribute("data-theme", newTheme);
      localStorage.setItem("theme", newTheme);

      const icon = themeToggle.querySelector(".theme-icon");
      if (icon) {
        icon.className =
          newTheme === "dark"
            ? "fa-solid fa-sun theme-icon"
            : "fa-solid fa-moon theme-icon";
      }
    });
  }

  const renderSkillsSlider = () => {
    const skillsContainer = document.getElementById("skills-container");
    if (!skillsContainer) return;

    skillsContainer.innerHTML = "";

    const allSkills = Object.values(skills).flat();

    allSkills.forEach((skill) => {
      const slide = document.createElement("div");
      slide.className = "swiper-slide skill-slide";

      slide.innerHTML = `
        <div class="skill-card">
          <div class="skill-icon-wrapper">
            ${skill.icon ? `<img src="${skill.icon}" alt="${skill.name}" class="skill-icon-img" onerror="this.src='https://cdn.simpleicons.org/simpleicons/000000'">` : '<i class="fa-solid fa-code"></i>'}
          </div>
          <div class="skill-details">
            <h3 class="skill-name">${skill.name}</h3>
          </div>
        </div>
      `;

      skillsContainer.appendChild(slide);
    });

    if (typeof Swiper !== "undefined") {
      new Swiper(".skills-swiper", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        loop: true,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        },
        coverflowEffect: {
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
          slideShadows: false,
        },
        pagination: {
          el: ".skills-pagination",
          clickable: true,
          dynamicBullets: true,
        },
        navigation: {
          nextEl: ".skills-next",
          prevEl: ".skills-prev",
        },
        breakpoints: {
          320: {
            slidesPerView: 2,
          },
          640: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 5,
          },
          1440: {
            slidesPerView: 7,
          },
        },
      });
    }
  };

  renderSkillsSlider();

  const projectsContainer = document.getElementById("projects-container");
  const projectModal = document.getElementById("project-modal");
  const closeModal = document.querySelector(".close-modal");
  const modalBody = document.getElementById("modal-body");

  const showProjectDetails = (project) => {
    if (modalBody) {
      modalBody.innerHTML = `
                <img src="${project.image}" alt="${project.title}" style="width: 100%; border-radius: 10px; margin-bottom: 2rem;">
                <h2>${project.title}</h2>
                <p style="margin: 1rem 0; font-weight: 600; color: var(--accent);">${project.role} | ${project.year}</p>
                <p style="margin-bottom: 1.5rem; line-height: 1.6;">${project.longDescription}</p>
                <div class="project-tech" style="margin-bottom: 2rem;">
                    ${project.technologies.map((tech) => `<span class="tech-tag">${tech}</span>`).join("")}
                </div>
                <div class="hero-btns" style="justify-content: flex-start;">
                    <a href="${project.liveLink}" target="_blank" class="btn btn-primary">Live Demo</a>
                    <a href="${project.githubLink}" target="_blank" class="btn btn-outline">GitHub Repo</a>
                </div>
            `;
      if (projectModal) projectModal.style.display = "flex";
    }
  };

  const renderProjects = (filter = "All") => {
    if (projectsContainer) {
      projectsContainer.innerHTML = "";
      const filteredProjects =
        filter === "All"
          ? projects
          : projects.filter((p) => p.category === filter);

      filteredProjects.forEach((project) => {
        const projectCard = document.createElement("div");
        projectCard.className = "project-card";
        projectCard.innerHTML = `
                    <div class="project-img">
                        <img src="${project.image}" alt="${project.title}" loading="lazy">
                    </div>
                    <div class="project-info">
                        <div class="project-tech">
                            ${project.technologies
                              .slice(0, 3)
                              .map(
                                (tech) =>
                                  `<span class="tech-tag">${tech}</span>`,
                              )
                              .join("")}
                        </div>
                        <h3>${project.title}</h3>
                        <p>${project.description}</p>
                        <div class="project-links">
                            <button class="btn btn-primary view-details" data-id="${project.id}">Details</button>
                            <a href="${project.githubLink}" target="_blank" class="btn btn-outline">GitHub</a>
                        </div>
                    </div>
                `;
        projectsContainer.appendChild(projectCard);
      });

      document.querySelectorAll(".view-details").forEach((btn) => {
        btn.addEventListener("click", (e) => {
          const id = parseInt(e.target.dataset.id);
          const project = projects.find((p) => p.id === id);
          if (project) showProjectDetails(project);
        });
      });
    }
  };

  const setupFilters = () => {
    const filterBtns = document.querySelectorAll(".filter-btn");
    filterBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        filterBtns.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        renderProjects(btn.dataset.filter);
      });
    });
  };

  const experienceContainer = document.getElementById("experience-container");
  if (experienceContainer) {
    experiences.forEach((exp) => {
      const expItem = document.createElement("div");
      expItem.className = "timeline-item";
      expItem.innerHTML = `
                <div class="timeline-dot"></div>
                <div class="timeline-content">
                    <span class="timeline-date">${exp.duration}</span>
                    <h3>${exp.title}</h3>
                    <p style="font-weight: 600; font-size: 0.9rem; margin-bottom: 1rem;">${exp.organization} | ${exp.location}</p>
                    <ul>
                        ${exp.achievements.map((a) => `<li>${a}</li>`).join("")}
                    </ul>
                </div>
            `;
      experienceContainer.appendChild(expItem);
    });
  }

  const testimonialsContainer = document.getElementById(
    "testimonials-container",
  );
  if (testimonialsContainer) {
    testimonials.forEach((t) => {
      const tCard = document.createElement("div");
      tCard.className = "project-card";
      tCard.style.padding = "2rem";
      tCard.innerHTML = `
                <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1.5rem;">
                    <img src="${t.image}" alt="${t.name}" style="width: 60px; height: 60px; border-radius: 50%; object-fit: cover;">
                    <div>
                        <h4 style="margin: 0;">${t.name}</h4>
                        <p style="margin: 0; font-size: 0.8rem; color: var(--text-secondary);">${t.position} @ ${t.company}</p>
                    </div>
                </div>
                <p style="font-style: italic; color: var(--text-secondary); line-height: 1.6;">"${t.text}"</p>
                <div style="margin-top: 1rem; color: #f59e0b;">
                    ${'<i class="fa-solid fa-star"></i> '.repeat(t.rating)}
                </div>
            `;
      testimonialsContainer.appendChild(tCard);
    });
  }

  const setupContactInfo = () => {
    const contactEmail = document.getElementById("contact-email");
    const contactLocation = document.getElementById("contact-location");
    const contactGithub = document.getElementById("contact-github");
    const contactLinkedin = document.getElementById("contact-linkedin");

    if (contactEmail) contactEmail.textContent = contactInfo.email;
    if (contactLocation) contactLocation.textContent = contactInfo.location;
    if (contactGithub) contactGithub.href = contactInfo.github;
    if (contactLinkedin) contactLinkedin.href = contactInfo.linkedin;
  };

  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("name").value;
      alert(`Thank you ${name}! Your message has been sent. (Demo mode)`);
      contactForm.reset();
    });
  }

  if (closeModal) {
    closeModal.addEventListener("click", () => {
      if (projectModal) projectModal.style.display = "none";
    });
  }

  window.addEventListener("click", (e) => {
    if (e.target === projectModal && projectModal) {
      projectModal.style.display = "none";
    }
  });

  const setupAIRecommendation = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection && !document.getElementById("ai-container")) {
      const aiDiv = document.createElement("div");
      aiDiv.id = "ai-container";
      aiDiv.className = "container";
      aiDiv.style.marginTop = "4rem";
      aiDiv.innerHTML = `
                <div style="background-color: var(--card-bg); padding: 2rem; border-radius: 12px; border: 1px solid var(--border); text-align: center;">
                    <h3 style="margin-bottom: 1rem;"><i class="fa-solid fa-robot"></i> AI Project Guide</h3>
                    <p style="margin-bottom: 1.5rem; color: var(--text-secondary);">Tell me your interests, and I'll recommend the best project to explore first!</p>
                    <input type="text" id="ai-input" placeholder="e.g. I like backend development or e-commerce" style="width: 100%; max-width: 500px; padding: 0.8rem 1rem; border-radius: 8px; border: 1px solid var(--border); background: var(--bg-secondary); color: var(--text-primary); margin-bottom: 1rem;">
                    <br>
                    <button id="ai-btn" class="btn btn-primary">Get Recommendation</button>
                    <div id="ai-result" style="margin-top: 1.5rem; font-weight: 600; color: var(--accent);"></div>
                </div>
            `;
      projectsSection.appendChild(aiDiv);

      const aiBtn = document.getElementById("ai-btn");
      const aiInput = document.getElementById("ai-input");
      const aiResult = document.getElementById("ai-result");

      if (aiBtn) {
        aiBtn.addEventListener("click", () => {
          const input = aiInput.value.toLowerCase();
          if (
            input.includes("backend") ||
            input.includes("system") ||
            input.includes("stock") ||
            input.includes("inventory")
          ) {
            aiResult.textContent =
              '🎯 Based on your interest, check out the "Stock Management System" project!';
          } else if (
            input.includes("ecommerce") ||
            input.includes("store") ||
            input.includes("shop") ||
            input.includes("payment")
          ) {
            aiResult.textContent =
              '🛒 I recommend exploring the "E-Commerce Platform" project.';
          } else if (
            input.includes("frontend") ||
            input.includes("ui") ||
            input.includes("design")
          ) {
            aiResult.textContent =
              '🎨 Both projects have great frontend! Start with the "E-Commerce Platform" for UI practice.';
          } else {
            aiResult.textContent =
              '💡 Both projects show strong full-stack skills. Try the "E-Commerce Platform" first!';
          }
        });
      }
    }
  };

  const mobileToggle = document.querySelector(".mobile-nav-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      const icon = mobileToggle.querySelector("i");
      if (icon) {
        if (navLinks.classList.contains("active")) {
          icon.classList.remove("fa-bars");
          icon.classList.add("fa-times");
        } else {
          icon.classList.remove("fa-times");
          icon.classList.add("fa-bars");
        }
      }
    });
  }

  renderProjects();
  setupFilters();
  setupContactInfo();
  setupAIRecommendation();
});
