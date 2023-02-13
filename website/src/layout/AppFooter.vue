<template>
    <footer class="footer has-cards">
        <div class="container">
            <hr>
            <div class="row align-items-center justify-content-md-between">
                <div class="col-md-6">
                    <div class="copyright">
                        &copy; 2022-{{year}}
                        <a href="https://zddhub.com" target="_blank" rel="noopener">ZDDHUB</a> | All rights reserved
                    </div>
                </div>
                <div class="col-md-6">
                    <ul class="nav nav-footer justify-content-end">
                        <li class="nav-item">
                            <a href="https://github.com/zddhub/PixelsMeasure" class="nav-link" target="_blank" rel="noopener">Documents</a>
                        </li>
                        <li class="nav-item">
                            <a href="https://github.com/zddhub" class="nav-link" target="_blank" rel="noopener">Blog</a>
                        </li>
                        <li class="nav-item">
                            <a href="/#/privacy" class="nav-link" rel="noopener">Privacy</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
</template>
<script>
export default {
  name: 'app-footer',
  data() {
    return {
      year: new Date().getFullYear()
    }
  }
};
</script>
<style>
</style>
