// ===== RUN AFTER PAGE LOAD =====
document.addEventListener("DOMContentLoaded", () => {

  // ===== TYPING ANIMATION =====
  const roles = [
    ".Net Back-End Dev",
    "AI Automation Expert",
    "SQL Server Expert"
  ];

  let index = 0;
  const typing = document.getElementById("typing");

  function changeText() {
    if (!typing) return;

    typing.style.opacity = 0;

    setTimeout(() => {
      typing.textContent = roles[index];
      typing.style.opacity = 1;
      index = (index + 1) % roles.length;
    }, 300);
  }

  if (typing) {
    changeText();
    setInterval(changeText, 2000);
  }


  // ===== TABS SYSTEM =====
  const tabButtons = document.querySelectorAll(".tab-btn");
  const tabContents = document.querySelectorAll(".tab-content");

  tabButtons.forEach(btn => {
    btn.addEventListener("click", () => {

      tabButtons.forEach(b =>
        b.classList.remove("text-purple-400", "border-b-2", "border-purple-400")
      );

      tabContents.forEach(c => c.classList.add("hidden"));

      btn.classList.add("text-purple-400", "border-b-2", "border-purple-400");

      const target = document.getElementById(btn.dataset.tab);
      if (target) target.classList.remove("hidden");
    });
  });


  // ===== EMAILJS CONTACT FORM =====
 const form = document.getElementById("contactForm");
const loader = document.getElementById("loader");
const btnText = document.getElementById("btnText");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();

  // validation
  if (!name || !email || !message) {
    alert("⚠️ Please fill all fields!");
    return;
  }

  if (!email.includes("@")) {
    alert("⚠️ Enter valid email!");
    return;
  }

  // start loading
  loader.classList.remove("hidden");
  btnText.textContent = "Sending...";

  emailjs.sendForm(
    "service_7tyzgwt",
    "template_hgz39zp",
    this
  )

  .then(() => {
    loader.classList.add("hidden");
    btnText.textContent = "Send Message";

    // SUCCESS ALERT
    alert("✅ Message sent successfully!");

    // reset form AFTER alert OK
    form.reset();
  })

  .catch((error) => {
    loader.classList.add("hidden");
    btnText.textContent = "Send Message";

    alert("❌ Failed to send message!");
    console.error(error);
  });

});





  // ===== SCROLL TO TOP BUTTON =====
  const scrollBtn = document.getElementById("scrollTopBtn");

  if (scrollBtn) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        scrollBtn.classList.remove("hidden");
      } else {
        scrollBtn.classList.add("hidden");
      }
    });

    scrollBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }


  // ===== AUTO YEAR =====
  const year = document.getElementById("year");
  if (year) {
    year.textContent = new Date().getFullYear();
  }


  // ===== MOBILE MENU =====
  const menuBtn = document.getElementById("menuBtn");
  const mobileMenu = document.getElementById("mobileMenu");

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });

    // auto close when click link
    document.querySelectorAll("#mobileMenu a").forEach(link => {
      link.addEventListener("click", () => {
        mobileMenu.classList.add("hidden");
      });
    });
  }

});