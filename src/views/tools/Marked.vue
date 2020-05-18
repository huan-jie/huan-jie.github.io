<template>
    <div class="wrapper">
        <div class="title">Markdown 转换</div>
        <div class="convert-wrapper">
            <textarea class="md-input" v-model="markdownContent" placeholder="请输入 Markdown 内容"></textarea>
            <div class="actions-wrapper">
                <div class="action-item" @click="handleConvert">Markdown 转 RichText</div>
                <div class="action-item" @click="handleClear">清空</div>
            </div>
            <textarea class="md-result" v-model="markdownResult" placeholder="这里是转换结果"></textarea>
        </div>
    </div>
</template>

<script>
import marked from '@/libs/marked'

export default {
    data () {
        return {
            markdownContent: '',
            markdownResult: ''
        }
    },
    methods: {
        /**
         * 处理 markdown 转 richtext
         */
        handleConvert () {
            this.markdownResult = marked(this.markdownContent)
        },
        /**
         * 置空文本
         */
        handleClear () {
            this.markdownContent = ''
            this.markdownResult = ''
        }
    }
}
</script>

<style lang="less" scoped>
.wrapper {
    position: relative;
    width: 100%;
    min-width: 1200px;
    height: auto;
    .title {
        width: 60%;
        margin: 24px auto 0;
        font-size: 24px;
        font-weight: 700;
        color: rgba(0, 0, 0, 0.85);
    }
    .convert-wrapper {
        width: 60%;
        margin: 16px auto 0;
        padding: 12px;
        border: 1px solid rgba(0, 0, 0, 0.15);
        display: flex;
        flex-direction: column;
        .md-input, .md-result {
            width: ~"calc(100% - 12px)";
            height: 240px;
            font-size: 14px;
            color:rgba(0, 0, 0, 0.65);
            padding: 6px;
        }
        .actions-wrapper {
            width: 100%;
            margin: 8px 0;
            display: flex;
            .action-item {
                width: auto;
                height: auto;
                color: rgba(255, 255, 255, 0.85);
                margin-right: 12px;
                padding: 8px 16px;
                font-size: 16px;
                line-height: 100%;
                background-color: #722ed1;
                border-radius: 5px;
                cursor: pointer;
                &:hover {
                    background-color: #9254de;
                }
                &:nth-last-of-type(1) {
                    margin-right: 0;
                }
            }
        }
    }
}
</style>
