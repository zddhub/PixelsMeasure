<template>
    <div class="position-relative">
        <section class="section-shaped overflow-hidden margin-top-0">
            <div class="shape shape-style-1 shape-default">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>

            <div class="container pb-150 pt-150">
                <div class="row text-center justify-content-center">
                    <div class="col-lg-10">
                        <h3 class="display-3 text-white title">{{ platform.title }}</h3>
                        <p class="mt-0 text-white subtitle">{{ platform.subtitle }}</p>
                    </div>
                </div>
            </div>
        </section>

        <div class="container">
                <div class="border-0 ">
                    <div class="p-5">
                        <div class="row align-items-center justify-content-center">
                            <img width="120%" :src="platform.imageURL" />
                        </div>
                    </div>
                </div>
            </div>
</div>
</template>

<script>

export default {
    props: {
        platform: Object
    }
};
</script>
