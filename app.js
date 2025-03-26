// app.js
const SECRET_PASSCODE = "ljc727706"; // 修改密码

const memories = [
    {
        date: "2023-3-1",
        title: "第一次闪击马山",
        content: `
            <p>那个阳光明媚的下午，我们带着探险装备首次踏入马山...</p>
            <img src="assets/images/mashan2.jpg" alt="进山咯">
            <div class="video-container">
                <video controls poster="assets/images/video-thumb/mashan1.jpg">
                    <source src="assets/videos/mashan1.mp4" type="video/mp4">
                </video>
                <img src="assets/images/mashan1.jpg" alt="比头都大的紫荆泽兰">
            </div>
            <p>在山顶发现的秘密基地成为我们后来的聚集地...</p>
        `,
        cover: "assets/images/video-thumb/mashan1.jpg",
        tags: ["探险", "友情"]
    },
    {
        date: "2023-4-3",
        title: "七彩世界游记",
        content: `
            <p>高中组织春游，游到了七彩世界，爽了</p>
            <img src="assets/images/seven color world1.jpg" alt="我看看怎么个事">
            <div class="video-container">
                <video controls poster="assets/images/video-thumb.jpg">
                    <source src="assets/videos/mashan1.mp4" type="video/mp4">
                </video>
                <img src="assets/images/seven color world2.jpg" alt="">
            </div>
            <p>就得这么玩</p>
        `,
        cover: "assets/images/mashan-thumb.jpg",
        tags: ["游玩", "爽玩"]
    },
    
    // 添加更多记忆...
];

function checkPasscode() {
    const input = document.getElementById("passcode").value.toLowerCase();
    if (input === SECRET_PASSCODE) {
        document.getElementById("gatekeeper").style.display = "none";
        document.getElementById("content").style.display = "block";
        renderMemories();
    } else {
        alert("密码错误，请再试一次~");
    }
}

function renderMemories() {
    const container = document.getElementById("memoryContainer");
    
    memories.forEach((memory, index) => {
        const card = document.createElement("div");
        card.className = "memory-card";
        card.innerHTML = `
            <div class="card-media">
                <img src="${memory.cover}" alt="${memory.title}">
                ${memory.content.includes("<video") ? `<div class="play-icon">▶</div>` : ""}
            </div>
            <div class="card-body">
                <div class="card-date">${memory.date}</div>
                <h3 class="card-title">${memory.title}</h3>
            </div>
        `;

        card.addEventListener("click", () => showArticle(memory));
        container.appendChild(card);

        // 卡片入场动画
        setTimeout(() => card.classList.add("visible"), index * 150);
    });
}

function showArticle(memory) {
    const modalContent = document.querySelector(".modal-content");
    modalContent.innerHTML = `
        <div class="article-header">
            <div class="article-media" style="background-image: url('${memory.cover}')"></div>
        </div>
        <div class="article-body">
            <h2>${memory.title}</h2>
            <div class="article-meta">
                <span class="date">${memory.date}</span>
                <div class="tags">${memory.tags.map(t => `#${t}`).join(" ")}</div>
            </div>
            ${memory.content}
        </div>
        <button class="close-btn" onclick="closeModal()">×</button>
    `;
    document.getElementById("articleModal").style.display = "block";
}

function closeModal() {
    document.getElementById("articleModal").style.display = "none";
}

// 初始化
document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("auth") === "true") {
        document.getElementById("gatekeeper").style.display = "none";
        document.getElementById("content").style.display = "block";
        renderMemories();
    }
});