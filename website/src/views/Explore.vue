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
                    <span></span>
                    <span></span>
                </div>

                <div class="container my-0">
                    <div class="row justify-content-center">
                        <div class="col-lg-12">
                            <div class="row row-grid">
                                <div class="col-lg-3" v-for="item in explore.items" :key="item.title">
                                    <div class="border-0 justify-content-center" shadow body-classes="py-5">
                                        <div class="row justify-content-center">
                                        <icon :name="item.icon" type="success" rounded class="mb-4">
                                        </icon>
   
                                        </div>
                                        <h6 class="text-white subtitle">{{ item.title }}</h6>
                                        <p class="description text-white mt-0">{{ item.subtitle }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div class="container pb-80">
                    <div class="row justify-content-center text-center">
                        <div class="col-lg-9">
                            <h2 class="display-3 text-white title">{{ explore.title }}</h2>
                            <p class="lead text-white subtitle">{{ explore.subtitle }}</p>
                        </div>
                    </div>
                </div>
            </section>
    </div>
</template>

<script>
export default {
    props: {
        explore: Object
    }
};
</script>