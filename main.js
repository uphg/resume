let data = {
    /* 基本信息 */
    basic: {
        name: '吕恒', // 姓名
        sex: '男', // 性别
        age: 23, // 年龄
        status: '应届生',
        education: '大专', // 学历
        graduatedSchool: '石家庄工商职业学院', // 毕业院校
        graduateddate: '2019.07', // 毕业时间
        Introduction: '毕业于前端相关专业，自学前端开发，有一定工作经验' // 概述
    },
    /* 联系方式 */
    contact: {
        phone: 15511872256, // 电话
        QQ: '447740848', // QQ
        QQEmail: '447740848@qq.com', // QQ
        Gmail: 'lv1834805770@gmail.com', // 谷歌邮箱
        WeChat: 'qq447740848' // 微信
    },
    /* 关于我 */
    about: [
        '熟悉原生 JavaScript 常用语法，对ES6规范有一定了解，可以使用ES6常用语法。',
        '熟悉 jQuery 的常用 API ，可以使用 jQuery 搭建网站、轮播、Tab组件等。',
        '熟悉 Vue 的常用功能，如组件化、Vue Router、Vuex、双向绑定等。',
        '能够使用 HTML5 & CSS3 独立制作精美网页，掌握 CSS3 动画、过渡效果、响应式等常用技术。',
        '会使用REM、vw/vh、FastClick 等技术制作适配手机设备的页面。',
        '有移动端(H5)的开发经验，会使用响应式、REM、vw/vh等技术适配手机端页面',
        '熟悉前端常用开发工具，如 VSCode编辑器、Photoshop、Git、GitBash、Cmeder等开发工具',
    ],
    /* 技能描述 */
    skill: [
        {
            name: 'JavaScript',
            text: '熟悉原生 JavaScript 常用语法，对 ES6 规范有一定了解，可以使用 ES6 常用语法编程。'
        },
        {
            name: 'jQuery', // 技能名称
            text: '熟悉 jQuery 的常用 API ，可以使用 jQuery 搭建网站、轮播、Tab组件等。' // 描述内容
        },
        {
            name: 'Vue', // 技能名称
            text: '熟悉 Vue 的常用功能，如组件化、Vue Router、Vuex、双向绑定等。' // 描述内容
        },
        {
            name: 'HTML5 & CSS3',
            text: '能够独立制作精美网页，掌握 CSS3 动画、过渡效果、响应式等常用技术。'
        },
        {
            name: '移动端(H5)',
            text: '会使用REM、vw/vh、FastClick 等技术制作适配手机设备的页面。'
        }
    ],
    /* 工作经历 */
    jobs: [
        {
            name: '北京瑞祥佳艺建筑装饰工程有限公司', // 公司名称
            time: '2019年12月 - 2020年04月', // 工作时间
            position: '前端开发', // 职位
            content: '19年毕业后自学半年前端，19年年底12月份在北京瑞祥佳艺建筑装饰有限公司工作。主要负责公司的后台管理系统搭建及维护，工作至今年4月份，因个人原因辞职。' // 工作内容概述
        },
    ],
    /* 项目展示 */
    project: [
        {
            name: '简约画板', // 项目名称
            text: '使用纯原生 JS 开发，主要运用了 HTML 5 的特性和 Canvas API ，是我在学习原生 JS 及 Canvas 过程中开发的小工具。 可以提供在 PC 及手机端在线画画、橡皮擦、画笔调色、画作删除等功能，并且支持画作下载。', // 项目介绍
            skill: ['JavaScript', 'HTML5 & CSS3', 'Canvas API', 'SVG'], // 使用的技术
            Code: 'https://github.com/ChenNing02/git-canvas', // 项目源码
            link: 'https://chenning02.github.io/git-canvas/index.html', // 预览链接
            image: '' // 图片预览
        },
        {
            name: '小米音乐', // 项目名称
            text: '使用纯原生 JS 开发，主要运用了 HTML 5 + CSS 3 的移动端布局，样式中使用了 vh vw 单位，flex 布局以及计算属性 calc。使用了 parcel 打包工具。使用了 SCSS 来书写 CSS。JS 部分主要使用了 ES6 语法中的 class，fetch异步请求，filter筛选，forEach循环。', // 项目介绍
            skill: ['JavaScript', 'HTML5 & CSS3', 'ES6', 'SVG', 'SCSS'], // 使用的技术
            Code: 'https://github.com/ChenNing02/git-mi_music', // 项目源码
            link: 'https://chenning02.github.io/git-mi_music/dist/index.html', // 预览链接
            image: '' // 图片预览
        },
        {
            name: '多人博客项目', // 项目名称
            text: '使用纯原生 JS 开发，主要运用了 HTML 5 的特性和 Canvas API ，是我在学习原生 JS 及 Canvas 过程中开发的小工具。 可以提供在 PC 及手机端在线画画、橡皮擦、画笔调色、画作删除等功能，并且支持画作下载。', // 项目介绍
            skill: ['Vue CLI', 'Axios', 'Vue Router', 'Vuex', 'ES6', 'NPM', 'Grid', 'Less'], // 使用的技术
            Code: 'https://github.com/ChenNing02/git-hunger-vue_blog-client', // 项目源码
            link: 'https://chenning02.github.io/git-hunger-vue_blog-client/dist/#/', // 预览链接
            image: '' // 图片预览
        }
    ],
    /* 教育背景 */
    school: {
        types: '大专', // 类型
        name: '石家庄工商职业学院', // 毕业院校
        time: '2016年09月 - 2019年07月', // 时间
        profession: '软件技术(3G)' // 专业
    },
    /* 链接 */
    link: [
        {
            name: 'GitHub', // 名称
            url: 'https://github.com/ChenNing02' // 地址
        },
        {
            name: '博客',
            url: 'https://chenning02.github.io/'
        }
    ]
}

let domCode = `
    <header class="head flex">
        <div class="head-photo flex">
            <img src="./demo-img/Photo.jpg" alt="">
        </div>
        <div class="head-synopsis">
            <h2>${data.basic.name}</h2>
            <p class="brief-introduction">${data.basic.Introduction}</p>
            <p>${data.basic.age}岁 | ${data.basic.status} | ${data.contact.phone} | ${data.contact.QQ}</p>
        </div>
    </header>
    <main class="content">
        <section class="flex">
            <div class="content-left">
                <h2 class="flex">求职意向</h2>
            </div>
            <div class="content-right">
                <ul class="purpose flex"> ${getObjective(data.Objective)} </ul>
            </div>
        </section>
        <section class="flex">
            <div class="content-left">
                <h2>工作经历</h2>
            </div>
            <div class="content-right">${getWorkExperience(data.workExperience)}</div>
        </section>
        <section class="flex">
            <div class="content-left">
                <h2>技能特长</h2>
            </div>
            <div class="content-right">${getSkillDescription(data.skillDescription)}</div>
        </section>
        <section class="flex">
            <div class="content-left">
                <h2>教育背景</h2>
            </div>
            <div class="content-right">
                <h3 class="or-so flex"><span class="left">${data.Education.name}</span><span class="right">${data.Education.time}</span></h3>
                <p class="name">${data.Education.profession}</p>
                <p class="describe">${data.Education.types}</p>
            </div>
        </section>
    </main>
`
let resume = document.getElementById('resume')
resume.innerHTML = domCode

/* 获取求职意向 */
function getObjective(array) {
    let data = ``
    for(let i = 0; i < array.length; i++){
        const item = array[i]
        let html = `
        <li>
            <span class="purpose-icon">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#${item.icon}"></use>
                </svg>
            </span>
            <span class="purpose-txt">${item.text}</span>
        </li>
        `
        data = data + html
    }
    return data
}

/* 获取工作经历 */
function getWorkExperience(array) {
    let data = ``
    for(let i = 0; i < array.length; i++){
        const item = array[i]
        let html = `
        <h3 class="or-so flex"><span class="left">${item.name}</span><span class="right">${item.time}</span></h3>
        <p class="name">${item.position}</p>
        <p class="describe">${item.content}</p>
        `
        data = data + html
    }
    return data
}

/* 获取技能描述 */
function getSkillDescription(array) {
    let data = ``
    for(let i = 0; i < array.length; i++){
        const item = array[i]
        let html = `
        <section class="speciality">
            <h3 class="speciality-h3">${item.name}</h3>
            <p>${item.content}</p>
        </section>
        `
        data = data + html
    }
    return data
}
