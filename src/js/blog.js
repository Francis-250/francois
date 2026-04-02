import { blogs, blogCategories } from "../assets/data/data.js";

document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("theme-toggle");
  const body = document.body;

  const savedTheme = localStorage.getItem("theme") || "light";
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

  const blogContainer = document.getElementById("blog-container");
  const blogFilters = document.getElementById("blog-filters");

  if (blogContainer && blogFilters) {
    const renderBlogs = (filter = "All") => {
      blogContainer.innerHTML = "";
      const filteredBlogs =
        filter === "All" ? blogs : blogs.filter((b) => b.category === filter);

      if (filteredBlogs.length === 0) {
        blogContainer.innerHTML =
          '<p style="text-align: center; grid-column: 1/-1;">No blog posts found in this category.</p>';
        return;
      }

      filteredBlogs.forEach((post) => {
        const blogCard = document.createElement("div");
        blogCard.className = "blog-card";
        blogCard.innerHTML = `
                    <div class="blog-img">
                        <img src="${post.image}" alt="${post.title}" loading="lazy">
                    </div>
                    <div class="blog-content">
                        <div class="blog-meta">
                            <span><i class="fa-regular fa-calendar"></i> ${post.date}</span>
                            <span><i class="fa-regular fa-clock"></i> ${post.readTime}</span>
                        </div>
                        <h3>${post.title}</h3>
                        <p>${post.description}</p>
                        <a href="blog-post.html?id=${post.id}" class="read-more">Read More <i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                `;
        blogContainer.appendChild(blogCard);
      });
    };

    const renderFilters = () => {
      blogFilters.innerHTML = "";
      blogCategories.forEach((cat) => {
        const btn = document.createElement("button");
        btn.className = `filter-btn ${cat === "All" ? "active" : ""}`;
        btn.dataset.filter = cat;
        btn.textContent = cat;
        btn.addEventListener("click", () => {
          document
            .querySelectorAll("#blog-filters .filter-btn")
            .forEach((b) => b.classList.remove("active"));
          btn.classList.add("active");
          renderBlogs(cat);
        });
        blogFilters.appendChild(btn);
      });
    };

    renderFilters();
    renderBlogs();
  }

  const postContent = document.getElementById("post-content");

  if (postContent) {
    const urlParams = new URLSearchParams(window.location.search);
    const id = parseInt(urlParams.get("id"));
    const post = blogs.find((b) => b.id === id) || blogs[0];

    if (post) {
      document.title = `${post.title} | Developer Blog`;

      postContent.innerHTML = `
                <div style="max-width: 800px; margin: 0 auto;">
                    <div style="margin-bottom: 2rem;">
                        <span style="color: var(--accent); font-weight: 600; text-transform: uppercase; font-size: 0.85rem; letter-spacing: 1px;">${post.category}</span>
                        <h1 style="font-size: 2.5rem; margin-top: 1rem; line-height: 1.3;">${post.title}</h1>
                        <div style="display: flex; gap: 2rem; margin-top: 1.5rem; color: var(--text-secondary); font-size: 0.9rem;">
                            <span><i class="fa-regular fa-user"></i> ${post.author}</span>
                            <span><i class="fa-regular fa-calendar"></i> ${post.date}</span>
                            <span><i class="fa-regular fa-clock"></i> ${post.readTime}</span>
                        </div>
                    </div>
                    <img src="${post.image}" alt="${post.title}" style="width: 100%; border-radius: 12px; margin-bottom: 2rem;">
                    <div style="font-size: 1.1rem; color: var(--text-secondary); line-height: 1.8;">
                        <p style="margin-bottom: 1.5rem; font-size: 1.2rem; font-weight: 500; color: var(--text-primary);">${post.description}</p>
                        <p style="margin-bottom: 2rem;">${post.content}</p>
                        <p style="margin-bottom: 2rem;">Modern web development is about continuous learning and mastering tools that make products faster and more user-centric. In this post, I've shared practical insights that you can apply to your own projects.</p>
                        <div style="background-color: var(--bg-secondary); padding: 1.5rem; border-radius: 8px; border-left: 4px solid var(--accent); font-family: monospace; overflow-x: auto; margin: 2rem 0;">
                            <code style="color: var(--text-primary);">
// Example code snippet<br>
function example() {<br>
&nbsp;&nbsp;console.log("Learning from this blog!");<br>
&nbsp;&nbsp;return "Keep coding!";<br>
}
                            </code>
                        </div>
                        <p>Thank you for reading! Stay tuned for more articles on web development, best practices, and modern frameworks.</p>
                    </div>
                </div>
            `;
    }
  }

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
});
