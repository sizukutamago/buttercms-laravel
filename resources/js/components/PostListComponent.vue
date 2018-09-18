<template>
    <div>
        <div class="card mb-4" v-for="post in posts">
            <img class="card-img-top" :src="post.featured_image ? post.featured_image : 'http://placehold.it/750x300'" alt="Card image cap">
            <div class="card-body">
                <h2 class="card-title">{{ post.title }}</h2>
                <p class="card-text" v-html="post.body.slice(0, 50)"></p>
                <router-link :to="{ name: 'post', params: {id: post.slug }}" class="btn btn-primary">Read More &rarr;</router-link>
            </div>
            <div class="card-footer text-muted">
                Posted on January 1, 2017 by
                <a href="#">Start Bootstrap</a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        mounted() {
            this.butter = window.butter;
            this.fetchAll();
        },
        props: ['apiKey'],
        data: function () {
            return {
                butter: {},
                posts: {}
            }
        },
        methods: {
            fetchAll: function () {
                let self = this;
                this.butter.post.list().then(function (response) {
                    self.posts = response.data.data;
                });
            }
        }
    }
</script>

<style>

</style>
