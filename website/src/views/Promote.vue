<template>
    <div>
        <section class="section">
            <div class="container">
                <div class="border-0 ">
                    <div class="p-4">
                        <div class="row align-items-center justify-content-center">
                            <div class="col-lg-6 promote">
                                <h3 class="big-title">{{ promote.title }}</h3>
                                <p class="mt-0 small-text">{{ promote.subtitle }}</p>
                                <primary-button :text="promote.download.title" :url="promote.download.url"></primary-button>
                            </div>


                            <div class="col-lg-4 text-center">
                                <img class="qr-code" src="img/qr-code-blue.png" />
                                <p>Scan to download</p>
                            </div>
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
