import { defineConfig } from 'dumi'
import path from 'node:path'

const isProduction = /* process.env.NODE_ENV === 'production' */ true
const isWin = process.platform === 'win32'

export default defineConfig({
    outputPath: 'docs-dist',
    npmClient: 'pnpm',
    mfsu: isWin ? undefined : {},
    apiParser: isProduction ? {} : false,
    alias: {
        '@l/ui': path.join(__dirname, '../ui')
    },
    resolve: {
        // 配置入口文件路径，API 解析将从这里开始
        entryFile: path.join(__dirname, '../ui/index.ts')
    },
    // locales: [{ id: 'zh-CN', name: '中文' }], // 配置主题
    styles: [`/root.css`],
    themeConfig: {
        title: 'L-UI',
        favicon: '/l.svg',
        logo: '/logo.png',
        name: 'L-UI',
        footer: false,
        hideHomeNav: true,
        // prefersColor: {
        //     default: 'light',
        //     switch: true
        // },
        nav: [
            {
                title: '组件',
                link: '/components/icon'
            }
        ],
        socialLinks: {
            github: 'https://github.com/missxiaolin/react-ui'
        }
    }
})
