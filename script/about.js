document.querySelectorAll("nav .smooth a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    const offset = 0;
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = target.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  });
});

const data = [
  {
    name: "Haimanti Sen",
    role : "Founder",
    content : [
      {
        text : "Haimanti Sen is the founder of Junoon Foundation."
      },
    ],
    image : "media/founder.jpg"
  },
  {
    name: "Minal Baghwe",
    role : "Teacher at Pai Nagar",
    content : [
      {
        text : "Hello, I am Minal Bagwe. I am a teacher in Junoon foundation. Working for an NGO is my 1st experience and I am really enjoying my interaction with kids. I found that kids are happily participate and always eager to learn new things whether its  related to education, art or cultural activities."
      },
      {
        text : "The entire Junoon team is always positive in their outlook and work towards betterment of these under privileged children, irrespective of various difficulties they face."
      },
      {
        text : "Interaction with these kids, helping me to look positively towards obstacles. Their interest in learning encourages me to impart as much as knowledge to them."
      },
      {
        text : "Looking forward great future and a successful life for these kids. Thank you."
      }
    ],
    image : "media/team1.png"
  },
  {
    name: "Anindita Pal",
    role : "Teacher at Magathane",
    content : [
      {
        text : "Junoon has become an integral part of my existence.The kids at Junoon fills my morning with bright sunshine.Junoon  for me is a fresh lease of air in this materialistic world.I find myself enough fortunate to be associated with Junoon in serving mankind.The selflessness and perseverance that Junoon has shown in its endeavours make it matchless.Looking forward to witness Junoon achieve the pinnacle and success..."
      }
    ],
    image : "media/team2.png"
  },
  {
    name: "Rupal Joshi",
    role : "Branch head at Pai Nagar",
    content : [
      {
        text : "My name is Rupal Joshi , and I am a teacher at Junoon. Working here has been an inspiring experience. What touches me most is how eager the children are to learn and grow, no matter their background. It’s not just about studies but also their overall development. Watching them participate in activities beyond studies, enjoying themselves, and building new skills is truly rewarding."
      },
      {
        text : "One of my favorite moments was seeing a child learn to read for the first time,it reminded me of the real impact we make. "
      },
      {
        text : "The children unite beautifully in everything they do, showing teamwork and care for each other despite the difficulties they face"
      },
      {
        text : "Being at Junoon feels like a family, with a supportive and passionate team working toward a shared goal. The values of equality and education for all resonate deeply with me, as they bring hope and dreams to these kids. "
      },
      {
        text : "Being part of Junoon has taught me patience, empathy, and leadership, and I’m really excited for its future as we reach more children and help them grow in every possible way."
      }
    ],
    image : "media/team3.png"
  },
  {
    name: "Shubham Ghosalkar",
    role : "Operations head ",
    content : [
      {
        text : "Being a part of Junoon  for a long time has been a truly enriching experience. I really love to teach and guide kids, helping them not just academically but also in discovering their passions and potential. Watching their faces light up as they learn, play, and have fun is a reward like no other. It’s amazing to see how even small efforts can make a big difference in shaping their futures."
      }
    ],
    image : "media/team4.png"
  },
  {
    name: "Nita Jariwala",
    role : "Branch head at Kandivali ",
    content : [
      {
        text : "Hello,I am Nita Jariwala a teacher in Junoon foundation from last 6 years.I have seen Junoon' s journey from todler to grown up kid & still growing . I have seen how kids are enjoying smallest things they learnt. The word Mujhe padhana aata hai makes my day .Junoon has become an integral part of my life and the kids are part of my family."
      }
    ],
    image : "media/team5.png"
  },
  {
    name: "Swapnil_Jadhav",
    role : "Marketing and Event Head ",
    content : [
      {
        text : "My journey with Junoon Foundation has been truly transformative. Starting as a volunteer, I had the opportunity to immerse myself in meaningful work, which helped me grow personally and professionally. Over time, my dedication and passion led me to become a part of the core team, an achievement I cherish deeply. For the past 2.5 years, I have proudly served as the Event Head, organizing impactful initiatives to bring positive change to underprivileged lives. This journey has been full of learning, growth, and fulfillment. Thank you, Junoon Foundation, for trusting me and allowing me to contribute to such a noble cause"
      }
    ],
    image : "media/team6.png"
  }
]

const container = document.getElementById("team-container");
const popup = document.getElementById("popup-body");
const popupImg = document.querySelector(".meet-the-team-popup-img-box img");
const popupName = document.querySelector(".meet-the-team-popup-name");
const popupRole = document.querySelector(".meet-the-team-popup-role");
const popupContentBox = document.querySelector(".meet-the-team-popup-content-box");
const closeBtn = document.querySelector(".meet-the-team-popup-content-close");

// FIRST: generate all cards
data.forEach((member, index) => {
  const memberHTML = `
    <div class="meet-the-team-content-img-body">
      <div class="meet-the-team-content-img-body-cover" data-index="${index}">
        <div class="meet-the-team-content-read-more">Read more</div>
      </div>
      <div class="meet-the-team-content-img-box">
        <img src="${member.image}" alt="${member.name}" />
      </div>
      <div class="meet-the-team-content-details">
        <div class="meet-the-team-name">${member.name}</div>
        <div class="meet-the-team-role">${member.role}</div>
      </div>
    </div>
  `;
  container.innerHTML += memberHTML;
});

// THEN: attach click handlers (AFTER DOM is ready)
document.querySelectorAll(".meet-the-team-content-img-body-cover").forEach((cover) => {
  cover.addEventListener("click", function () {
    const index = this.getAttribute("data-index");
    const member = data[index];

    // Update popup with correct data
    popupImg.src = member.image;
    popupImg.alt = member.name;
    popupName.textContent = member.name;
    popupRole.textContent = member.role;

    // Clear old content
    popupContentBox.innerHTML = "";

    // Add new paragraphs
    member.content.forEach((item) => {
      const p = document.createElement("p");
      p.className = "meet-the-team-popup-content";
      p.textContent = item.text;
      popupContentBox.appendChild(p);
    });

    // Show popup
    popup.classList.add("active");
    document.body.classList.add("no-scroll");
  });
});

// Close popup on cross click
function closePopup() {
  popup.classList.remove("active");
  document.body.classList.remove("no-scroll"); 
}
