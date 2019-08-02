<template>
    <div v-if="isCool" 
    v-on:click="sendValue"
    class="blog-post--outer">
        <div class="title">
            {{post.title}}
        </div>
        <div 
        class="content">
            {{post.content}}
        </div>
    </div>
    <div v-else class="another">
        Another Component
    </div>
</template>

<script>
export default {
    props: [`post`, `index`],
    computed: {
        indexPlusOne() {
            return this.index + 1;
        }
    }, 
    methods: {
        sendValue() {
            // console.log(`click!`);
            this.$emit(`sendValue_CE`, this.indexPlusOne)
        }
    }, 
    mounted() {
        console.log(`this is the thing i'm looking for. ${this.index}`);
    },
    data () {
        return {
            isCool: true,
        }
    }
}
</script>

<style>
.blog-post--outer {
    height: 100%;
    display: flex; 
    justify-content: center; 
    align-items: center; 
    min-height: 40vh; 
    border: 2px solid #000; 
}
</style>
