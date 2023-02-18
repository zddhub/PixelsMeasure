<template>
    <section class="section-hero section-shaped my-0">
        <div class="container shape-container d-flex align-items-center">
            <div class="col px-0">
                <div class="row justify-content-center align-items-center">
                    <div class="col-lg-10 text-center pt-lg">
                        <br />
                        <!-- <img src="img/brand/logo_128.png" style="width: 128px;" class=""> -->
                        <h1 class="big-title heading-padding">The fastest tool for measuring anything on your screen</h1>
                        <br />

                        <div class="btn-wrapper">
                            <primary-button></primary-button>
                            <div tag="a" @click="showVideo = !showVideo" class="btn btn-1 btn-outline-primary">
                                <i class="fa fa-play-circle-o mr-2"></i>
                                Watch this video
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
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/Y7_aRwq7gz4?rel=0&amp;modestbranding=1&amp;enablejsapi=1&amp;origin=https%3A%2F%2Fpixelsmeasure.com&amp;widgetid=1&amp;autoplay=1" title="PixelsMeasure for MacOS" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="1"></iframe>
            </div>
        </div>

        <div class="container">
            <div class="row justify-content-center margin-0">
                <div class="col-md-0">
                    <div class="card shadow border-0">
                        <img class="card-img" data-src="img/PixelsMeasure.gif" src="img/PixelsMeasure.gif" lazy="loaded"
            width="80%" />
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
