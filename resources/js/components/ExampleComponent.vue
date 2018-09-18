<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card card-default" v-for="post in posts">
                    <div class="card-header" v-html="post.title"></div>

                    <div class="card-body" v-html="post.body">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Butter from 'buttercms';

    export default {
        mounted() {
            this.butter = Butter(this.apiKey);
            this.fetchAll();
        },
        props: ['apiKey'],
        data: function () {
            return {
                butter: Butter,
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
    img {
        width: 50%;
    }
</style>
