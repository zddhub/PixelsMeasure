<template>
    <section class="section-hero section-shaped my-0">
        <div class="container shape-container d-flex align-items-center">
            <div class="col px-0">
                <div class="row justify-content-center align-items-center">
                    <div class="col-lg-10 text-center pt-lg">
                        <br />
                        <!-- <img src="img/brand/logo_128.png" style="width: 128px;" class=""> -->
                        <h1 class="big-title heading-padding">{{ hero.slogan }}</h1>
                        <br />

                        <div class="btn-wrapper">
                            <primary-button :text="hero.download.title" :url="hero.download.url"></primary-button>
                            <div tag="a" @click="showVideo = !showVideo" class="btn btn-1 btn-outline-primary">
                                <i class="fa fa-play-circle-o mr-2"></i>
                                {{ hero.video.title }}
                            </div>
                        </div>
                        <br /><br /><br />
                    </div>
                </div>
            </div>
        </div>


        <div class="player-modal" v-if="showVideo">
            <div @click="showVideo = !showVideo" class="close">
                <icon name="fa fa-close" type="close" rounded></icon>
            </div>
            <div class="player-wrap" v-click-outside="closeVideo">
                <iframe width="100%" height="100%" :src="hero.video.url" title="PixelsMeasure" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="1"></iframe>
            </div>
        </div>

        <div class="container">
            <div class="row justify-content-center margin-0">
                <div class="col-md-0">
                    <div class="card shadow border-0 screenshot" @click="showVideo = !showVideo">
                        <img class="card-img" data-src="img/PixelsMeasure.gif" src="img/PixelsMeasure.gif" lazy="loaded"
            width="80%" />
                        <i class="fa fa-play-circle play-btn" rounded></i>
                    </div>
                </div>
            </div>
        </div>
        
    </section>
</template>
<script>
import PrimaryButton from "@/components/PrimaryButton";
export default {
    components: {
        PrimaryButton
    },
    props: {
        hero: Object
    },
    data() {
        return {
            showVideo: false
        }
    },
    methods: {
        closeVideo(element) {
            if (this.showVideo && element.target.className == 'player-modal') {
                this.showVideo = false;
            }
        }
    }
};
</script>
<style>

</style>
