// 密码验证
const SECRET_PASSCODE = 'ljc727706'; // 修改此处密码

function checkPasscode() {
    const input = document.getElementById('passcode').value.toLowerCase();
    if (input === SECRET_PASSCODE) {
        document.getElementById('gatekeeper').style.display = 'none';
        document.getElementById('content').style.display = 'block';
        initializeMemories();
        startCloudAnimation();
    } else {
        alert('密码错误，请再试一次~');
    }
}

// 记忆卡片加载
function initializeMemories() {
    const memories = [
        { date: '2023-3-1', text: '第一次闪击马山', img: '' },
        { date: '2023-4-3', text: '昆明七彩世界游记', img: '' },
        { date: '2024-5-19', text: '闪击马山&拯救小鸟记', img: '' },
        { date: '2024-6-21', text: '最后一次看学校', img: '' },
        { date: '2024-7-1', text: '马山打猎记', img: '' },
        { date: '2024-8-9', text: '驾校飙车绕山记', img: '' },
        { date: '2025-1-16', text: '马山直通西南林大记(双烟sbabymoking)', img: '' },
        { date: '2025-2-5', text: '垃圾佬装机记(小马拉大车)', img: '' },
        
        // 在此添加更多记忆...
    ];

    const container = document.getElementById('memoryContainer');
    memories.forEach((memory, index) => {
        const card = document.createElement('div');
        card.className = 'memory-card';
        card.innerHTML = `
            <div class="date">${memory.date}</div>
            <div class="text">${memory.text}</div>
            ${memory.img ? `<img src="${memory.img}">` : ''}
        `;
        // 随机延迟加载
        setTimeout(() => card.style.opacity = 1, Math.random() * 1000);
        container.appendChild(card);
    });
}

// 安全模式（紧急退出）
function activateSafeMode() {
    window.location.href = 'https://baike.baidu.com/item/%E6%9C%88%E7%90%83/22605'; // 跳转至中性页面
}

// 云朵动画
function startCloudAnimation() {
    const canvas = document.getElementById('cloudCanvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    class Cloud {
        constructor() {
            this.reset();
        this.size = Math.random() * 50 + 30;
        this.speed = Math.random() * 0.5 + 0.2;
        this.y = Math.random() * canvas.height;
        this.x = -100;
        this.opacity = Math.random() * 0.5 + 0.3;
    }
        reset() {
            this.x = -100;
            this.y = Math.random() * canvas.height;
            this.speed = Math.random() * 0.5 + 0.2;
            this.size = Math.random() * 50 + 30;
        }
        update() {
            this.x += this.speed;
            if (this.x > canvas.width + 100) this.reset();
        }
        draw() {
            ctx.fillStyle = `rgba(255,255,255,${this.opacity})`;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    const clouds = Array.from({ length: 5 }, () => new Cloud());
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        clouds.forEach(cloud => {
            cloud.update();
            cloud.draw();
        });
        requestAnimationFrame(animate);
    }
    animate();
}

// 白噪音控制
let isSoundPlaying = false;
const audio = new Audio('https://assets.mixkit.co/active_storage/sfx/3009/3009-preview.mp3'); // 雨声白噪音
audio.loop = true;

function toggleSound() {
    if (isSoundPlaying) {
        audio.pause();
        isSoundPlaying = false;
        document.querySelector('.sound-control').textContent = '🌧️ 开启雨声';
    } else {
        audio.play();
        isSoundPlaying = true;
        document.querySelector('.sound-control').textContent = '🌧️ 关闭雨声';
    }
}

// 窗口大小调整时重置画布
window.addEventListener('resize', () => {
    const canvas = document.getElementById('cloudCanvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});