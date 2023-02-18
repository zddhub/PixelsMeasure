<template>
    <div>
        <section class="section section-shaped overflow-hidden my-0 pl-0">
            <div class="shape shape-style-1 shape-default">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>

            <div class="container pt-lg pb-96">
                <div class="row text-center justify-content-center">
                    <div class="col-lg-10 pt-150">
                        <h2 class="display-3 text-white big-title">{{ features.title }}</h2>
                        <p class="lead text-white subtitle" v-html="features.subtitle"></p>
                    </div>
                </div>
            </div>
        </section>

        <div class="my-0">

            <section class="section">
                <div class="container">
                    <div class="row row-grid align-items-center">
                        <div class="col-md-6 order-md-2">
                            <img src="img/measure-distances.gif" class="img-fluid floating">
                        </div>
                        <div class="col-md-6 order-md-1">
                            <div class="pr-md-5">
                                <h3 class="title">{{ features.items[0].title }}</h3>
                                <p class="subtitle">{{ features.items[0].subtitle }}</p>
                                <ul class="list-unstyled mt-5">
                                    <li class="py-2">
                                        <div class="d-flex align-items-center">
                                            <badge type="success" circle class="mr-3" icon="fa fa-plus-square-o"></badge>
                                            <h6 class="mb-0">{{ features.items[0].outlines[0] }}</h6>
                                        </div>
                                    </li>
                                    <li class="py-2">
                                        <div class="d-flex align-items-center">
                                            <badge type="success" circle class="mr-3" icon="fa fa-clone"></badge>
                                            <h6 class="mb-0">{{ features.items[0].outlines[1] }}</h6>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="section">
                <div class="container">
                    <div class="row row-grid align-items-center">
                        <div class="col-md-6 order-md-1">
                            <img src="img/measure-objects.gif" class="img-fluid floating">
                        </div>
                        <div class="col-md-6 order-md-2">
                            <div class="pr-md-5">
                                <h3 class="title">{{ features.items[1].title }}</h3>
                                <p class="subtitle">{{ features.items[1].subtitle }}</p>
                                <ul class="list-unstyled mt-5">
                                    <li class="py-2">
                                        <div class="d-flex align-items-center">
                                            <badge type="success" circle class="mr-3" icon="fa fa-magnet"></badge>
                                            <h6 class="mb-0">{{ features.items[1].outlines[0] }}</h6>
                                        </div>
                                    </li>
                                    <li class="py-2">
                                        <div class="d-flex align-items-center">
                                            <badge type="success" circle class="mr-3" icon="fa fa-th"></badge>
                                            <h6 class="mb-0">{{ features.items[1].outlines[1] }}</h6>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="section">
                <div class="container">
                    <div class="row row-grid align-items-center">
                        <div class="col-md-6 order-md-2">
                            <img src="img/cross-mode.gif" class="img-fluid floating">
                        </div>
                        <div class="col-md-6 order-md-1">
                            <div class="pr-md-5">
                                <h3 class="title">{{ features.items[2].title }}</h3>
                                <p class="subtitle">{{ features.items[2].subtitle }}</p>
                                <ul class="list-unstyled mt-5">
                                    <li class="py-2">
                                        <div class="d-flex align-items-center">
                                            <badge type="success" circle class="mr-3" icon="fa fa-plus"></badge>
                                            <h6 class="mb-0">{{ features.items[2].outlines[0] }}</h6>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="section">
                <div class="container">
                    <div class="row row-grid align-items-center">
                        <div class="col-md-6 order-md-1">
                            <img src="img/undo-and-redo.gif" class="img-fluid floating">
                        </div>
                        <div class="col-md-6 order-md-2">
                            <div class="pr-md-5">
                                <h3 class="title">{{ features.items[3].title }}</h3>
                                <p class="subtitle">{{ features.items[3].subtitle }}</p>
                                <ul class="list-unstyled mt-5">
                                    <li class="py-2">
                                        <div class="d-flex align-items-center">
                                            <badge type="success" circle class="mr-3" icon="fa fa-undo"></badge>
                                            <h6 class="mb-0">{{ features.items[3].outlines[0] }}</h6>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="section">
                <div class="container">
                    <div class="row row-grid align-items-center">
                        <div class="col-md-6 order-md-2">
                            <img src="img/take-a-screenshot.gif" class="img-fluid floating">
                        </div>
                        <div class="col-md-6 order-md-1">
                            <div class="pr-md-5">
                                <h3 class="title">{{ features.items[3].title }}</h3>
                                <p class="subtitle">{{ features.items[3].subtitle }}</p>
                                <ul class="list-unstyled mt-5">
                                    <li class="py-2">
                                        <div class="d-flex align-items-center">
                                            <badge type="success" circle class="mr-3" icon="fa fa-camera"></badge>
                                            <h6 class="mb-0">{{ features.items[3].outlines[0] }}</h6>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        features: Object
    }
};
</script>