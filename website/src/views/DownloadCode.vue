<template>
    <div>
        <section class="download-code">
                <div class="border-2">
                    <div class="p-4">
                        <div class="row align-items-center justify-content-center">
                            <div class="text-center">
                                <img class="qr-code" :src="downloadCode.url" />
                                <p class="m-0">{{ downloadCode.title }}</p>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
    </div>
</template>

<script>
export default {
    props: {
        downloadCode: Object
    }
};
</script>
