let data = {
    /* 基本信息 */
    basic: {
        name: '吕恒', // 姓名
        sex: '男', // 性别
        age: 23, // 年龄
    },
    /* 毕业院校 */
    school: {
        type: '大专', // 学历
        name: '石家庄工商职业学院', // 毕业院校
        time: '2016.09 - 2019.07', // 毕业时间
        tag: '软件技术' // 概述
    },
    /* 联系方式 */
    contact: {
        phone: 15631107371, // 电话
        Gmail: '447740848@qq.com', // 谷歌邮箱
        WeChat: 'bravchen', // 微信
        GitHub: 'github.com/ChenNing02'
    },
    /* 技能 */
    skill: [
        {
            name: 'HTML5 & CSS3',
            text: '能够独立制作精美网页，掌握 CSS3 动画、过渡效果、响应式等常用技术。'
        },
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
            text: '19年年底12月份在北京瑞祥佳艺建筑装饰有限公司工作，任职前端开发。主要负责公司的后台管理系统搭建及维护，工作至今年4月底，因个人原因辞职。', // 工作内容概述
            project: '后台管理项目主要由Vue框架实现，包括了登录注册，根据职位判断权限，数据展示，数据管理，以及数据分析。使用了 webpack 打包工具，还使用 Element UI 作为部分UI交互，使用 layer 做部分弹出层，及 Bable 来保证浏览器兼容性。使用了 ECharts 插件来插入图标用于展示数据，使用了 Quilljs 插件用于增删改查富文本内容。',
            link: 'https://lib.rxjy.com/element-rx/dist/index.html#/ElementRx/Index'
        }
    ],
    /* 项目展示 */
    project: [
        {
            name: 'Vue多人博客项目', // 项目名称
            text: '使用纯原生 JS 开发，主要运用了 HTML 5 的特性和 Canvas API ，是我在学习原生 JS 及 Canvas 过程中开发的小工具。 可以提供在 PC 及手机端在线画画、橡皮擦、画笔调色、画作删除等功能，并且支持画作下载。', // 项目介绍
            Code: 'https://github.com/ChenNing02/git-canvas', // 项目源码
            link: 'https://chenning02.github.io/git-canvas/index.html', // 预览链接
        }
    ],
    /* 链接 */
    link: [
        {
            name: 'GitHub', // 名称
            url: 'https://github.com/ChenNing02' // 地址
        },
        {
            name: '码云',
            url: 'https://gitee.com/chenning02'
        },
        {
            name: '博客',
            url: 'https://chenning02.github.io/'
        }
    ]
}

// const array = JSON.parse(page1)
// const result = array.map(item => `<li>${item.text}</li>`).join('')
// string = string.replace('{{page1}}', `<ul id="xxx">${result}</ul>`)


// array.forEach(item => {
//     const li = document.createElement("li");
//     li.textContent = item.text;
//     xxx.appendChild(li);
// });