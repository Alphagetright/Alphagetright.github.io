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
                <video controls>
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
            神秘小转盘，谁转谁知道
            
            <div class="video-container">
                <video controls>
                    <source src="assets/videos/seven color world.mp4" type="video/mp4">
                </video>
                <img src="assets/images/seven color world2.jpg" alt="">
            </div>
    
            <div class="video-container">    
                <video controls>
                    <source src="assets/videos/seven color world2.mp4" type="video/mp4">
                </video>
                <img src="assets/images/seven color world2.jpg" alt="">
            </div>
            
            我真的晕了都
            <p>就得这么玩</p>
        `,
        cover: "assets/images/seven color world3.jpg",
        tags: ["游玩", "爽玩"]
    },
   {
    date: "2024-5-19",
    title: "马山闪击&拯救小鸟の传奇故事",
    content: `
        <p>马山，启动！</p>
        野生鸟巢和野生小鸟吗？有点意思
        <div class="video-container">
            <video controls style="height: 400px; object-fit: cover;">
                <source src="assets/videos/bird.mp4" type="video/mp4">
            </video>
        </div>

        <div class="video-container">
            <video controls style="height: 400px; object-fit: cover;">
                <source src="assets/videos/bird2.mp4" type="video/mp4">
            </video>
        </div>

        <div class="video-container">    
            让我数一下,1,2,3···一窝小鸟······
            <video controls style="height: 400px; object-fit: cover;">
                <source src="assets/videos/bird3.mp4" type="video/mp4">
            </video>
        </div>
        那就让它们吃好喝好，睡个好觉吧，拜拜小鸟
        <p>END</p>
    `,
    cover: "assets/images/bird.jpg",
    tags: ["小鸟奇遇", "拯救小鸟"]
},
    {
        date: "2024-6-21",
        title: "最后一次看学校",
        content: `
            <p>高考结束，高中时代的最后一次二号位</p>
            <img src="assets/images/last.jpg" alt="我看看怎么个事">
            
           <img src="assets/images/last2.jpg" alt="看看风景">
    看看风景
           <img src="assets/images/last3.jpg" alt="最后一次二号位">
收下吧,我二号位的最后波纹！
           <img src="assets/images/last4.jpg" alt="最后一次看紫荆紫兰位···">
最后一次看紫荆紫兰位···
           <img src="assets/images/last5.jpg" alt="最后一次看梧桐树···">
最后一次看梧桐树···
            
            <p>拜拜</p>
        `,
        cover: "assets/images/last.jpg",
        tags: ["校园记忆", "last see"]
    },

    {
        date: "2024-7-1",
        title: "马山打猎记",
        content: `
            <p>高考结束，拿下复合弓，进军打猎！</p>
            <img src="assets/images/hunter 7-1.jpg" alt="进山了">
            进山了
           <img src="assets/images/hunter 7-1-2.jpg" alt="快到了">
         快到了
           <img src="assets/images/hunter 7-1-3.jpg" alt="箭到弦上不得不发">
箭到弦上不得不发
           <img src="assets/images/hunter 7-1-4.jpg" alt="吃我一发天塑庭光">
吃我一发天塑庭光！

            <p>没打到臭狗熊是我最大的遗憾···</p>
        `,
        cover: "assets/images/hunter 7-1.jpg",
        tags: ["hunting", "loser hunter"]
    },
    {
        date: "2024-8-9",
        title: "驾校飙车绕山记",
        content: `
            <p>驾校,我TM来了!</p>
            <img src="assets/images/drive speed 8-9.jpg" alt="进山咯">
            弯道快才是真的快！
            <div class="video-container">
                <video controls>
                    <source src="assets/videos/drive.mp4" type="video/mp4">
                </video>
                <img src="assets/images/drive.jpg" alt="drive">
            </div>
不是，谁家好人看玉米就拿还丢给教练啊？
            <div class="video-container">
                <video controls>
                    <source src="assets/videos/drive2.mp4" type="video/mp4">
                </video>
                <img src="assets/images/drive2.jpg" alt="drive">
            </div>

            <p>有玉米我就拿，有车我就飙！...</p>
        `,
        cover: "assets/images/drive speed 8-9.jpg",
        tags: ["飙车", "偷玉米给教练"]
    },
    {
        date: "2024-8-29",
        title: "代学生瞎闯大观园",
        content: `
            <p>聚一聚</p>
            <img src="assets/images/daguanyuanyouji1.jpg" alt="daguanyuanyouji1">
           天气不错
           <img src="assets/images/daguanyuanyouji2.jpg" alt="daguanyuanyouji2">
         风景也好
           <img src="assets/images/daguanyuanyouji3.jpg" alt="daguanyuanyouji3">
        
           <img src="assets/images/daguanyuanyouji4.jpg" alt="daguanyuanyouji4">

           <img src="assets/images/daguanyuanyouji5.jpg" alt="daguanyuanyouji5">

           <img src="assets/images/daguanyuanyouji7.jpg" alt="daguanyuanyouji7">

           <img src="assets/images/daguanyuanyouji6.jpg" alt="daguanyuanyouji6">
            <p>“什么时候才能知道身边的人的珍贵呢”</p>
        `,
        cover: "assets/images/daguanyuanyouji1.jpg",
        tags: ["你想要的一切，其实早已在你身边"]
    },
    {
        date: "2025-1-16",
        title: "马山直通西南林大学一轮游",
        content: `
            <p>一次平平无奇的？马山？</p>
            <img src="assets/images/yongchuangdaxue3.jpg" alt="进山咯">
            一切良好好吧
            <img src="assets/images/yongchuangdaxue2.jpg" alt="进山咯">
            寻找白蚁宠物的少年
            <img src="assets/images/yongchuangdaxue.jpg" alt="进山咯">
            烟娃登场!双烟sbabymoking!
            <div class="video-container">
                <video controls>
                    <source src="assets/videos/yongchuangdaxue.mp4" type="video/mp4">
                </video>
                <img src="assets/images/yongchuangdaxue.jpg" alt="drive">
            </div>

            <p>无敌了，从山里进到大学里面又从大学里面出来</p>
        `,
        cover: "assets/images/yongchuangdaxue.jpg",
        tags: ["上山", "误入大学歧途"]
    },
    {
        date: "2025-2-25",
        title: "垃圾佬装机记-小马拉大车",
        content: `
            <p>兴起来到电脑城捡垃圾</p>
            <img src="assets/images/lajilao.jpg" alt="1080猛禽">
            成色不错
            <img src="assets/images/lajilao2.jpg" alt="i3-4170">
            i3-4170+4G大内存带1080猛禽,点亮了!
            <div class="video-container">
                <video controls>
                    <source src="assets/videos/lajilao.mp4" type="video/mp4">
                </video>
                <img src="assets/images/lajilao.jpg" alt="drive">
            </div>

            <p>欲买桂花同载酒，终不似，少年游···</p>
        `,
        cover: "assets/images/lajilao.jpg",
        tags: ["捡垃圾装机成功"]
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