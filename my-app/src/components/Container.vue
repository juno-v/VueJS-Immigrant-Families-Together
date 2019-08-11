<template>
    <div class="container-outer">
        <!-- 
        <div class="container-inner">
            <BlogPosts 
                v-for="(post, index) in posts" :key="post.title"
                :post="post"
                :index="index"
                @sendValue_CE="logValue"
            /> 
        </div>
        -->

        <div>
            <AdminLandingPage /> 
        </div>
    </div>
</template>

<script>
// import BlogPosts from "../components/BlogPosts.vue"; 
import AdminLandingPage from "../components/Admin/AdminLandingPage"; 

export default {
    components: {
        // BlogPosts, 
        AdminLandingPage,
    }, 
    data () {
        return {
            title: `Junos Blog!!!`,
            posts: [
                {
                title: `My first blog post`,
                content: `Vue is awesome!`
            },
                {
                title: `My second blog post`,
                content: `Gatsby is dope!`
            },
                {
                title: `My third blog post`,
                content: `React is whaaat!`
            },
                {
                title: `My fourth blog post`,
                content: `I went to a VueJs meetup!`
            },

            ]
        }
    },
    methods: {
            // logValue(value) {
            //     console.log(`Custom event heard!`,value);
            // }
        }
}

</script>

<style>
.container-inner {
    min-height: 60vh;
}
</style>
