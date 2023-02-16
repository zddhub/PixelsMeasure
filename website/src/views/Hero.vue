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
                            <base-button tag="a" href="https://youtu.be/Y7_aRwq7gz4" class="btn btn-1 btn-outline-primary">
                                <i class="fa fa-play-circle-o mr-2"></i>
                                Watch this video
                            </base-button>
                        </div>
                        <br /><br /><br />
                    </div>
                </div>
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
    }
};
</script>
<style>

</style>
