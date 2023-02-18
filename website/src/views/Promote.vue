<template>
    <div>
        <section class="section">
            <div class="container">
                <div class="border-0 ">
                    <div class="p-5">
                        <div class="row align-items-center justify-content-center">
                            <div class="col-lg-10 text-center">
                                <h3 class="big-title">{{ promote.title }}</h3>
                                <p class="mt-0 small-text">{{ promote.subtitle }}</p>
                            </div>
                        </div>

                        <div class="row align-items-center justify-content-center">
                            <primary-button :text="promote.download.title" :url="promote.download.url"></primary-button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import PrimaryButton from "@/components/PrimaryButton";

export default {
    components: {
        PrimaryButton
    },
    props: {
        promote: Object
    }
};
</script>
