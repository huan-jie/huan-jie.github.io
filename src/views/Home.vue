<template>
    <div class="home">
        <div class="tools-wrapper">
            <div
                class="tool"
                v-for="tool in toolsList"
                :key="tool.id"
                :data-path-name="tool.pathName"
                @click="handleClickTool">
                {{ tool.title }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Home',
    data () {
        return {
            toolsList: [
                { id: 1, pathName: 'marked', title: 'md 转换', icon: '' }
            ]
        }
    },
    methods: {
        /**
         * 点击工具 item 时
         */
        handleClickTool (e) {
            const { pathName } = e.currentTarget.dataset

            this.$router.push({ name: pathName })
        }
    }
}
</script>

<style lang="less" scoped>
.home {
    width: 100%;
    height: auto;
    .tools-wrapper {
        width: 65%;
        margin: 24px auto 0;
        display: flex;
        .tool {
            margin-right: 12px;
            font-size: 16px;
            color: greenyellow;
            cursor: pointer;
            &:nth-last-of-type(1) {
                margin-right: 0;
            }
        }
    }
}
</style>
