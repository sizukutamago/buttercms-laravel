<template>
    <div class="card mb-4">
        <img class="card-img-top" :src="post.featured_image ? post.featured_image : 'http://placehold.it/750x300'"
             alt="Card image cap">
        <div class="card-body">
            <h2 class="card-title">{{ post.title }}</h2>
            <p class="card-text" v-html="post.body"></p>
        </div>
        <div class="card-footer text-muted">
            Posted on January 1, 2017 by
            <a href="#">Start Bootstrap</a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "PostComponent",
        props: ['apiKey'],
        mounted() {
            this.butter = window.butter;
            this.fetch();
        },
        data: function () {
            return {
                butter: {},
                post: {}
            }
        },
        methods: {
            fetch: function () {
                this.butter.post.retrieve(this.$route.params.id).then((res) => {
                    this.post = res.data.data;
                    console.log(this.post);
                })
            }
        }
    }
</script>

<style scoped>

</style>
