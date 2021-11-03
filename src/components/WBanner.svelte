<div class="wrapper">
</div>

<style>
.wrapper {
    background: url('/src/assets/bannerlarge.jpg') fixed no-repeat center 0px;
    display: flex;
    height: 50vh;
    min-height: 500px;
}

@media(max-width: 1400px) {
    .wrapper {
        background: url('/src/assets/bannerlarge.jpg') fixed no-repeat;
        background-size: 100%;
        background-position: 50% 25%;
    }
}
@media(max-width: 1024px) {
    .wrapper {
        background: url('/src/assets/bannerlarge.jpg') fixed no-repeat;
        background-size: 100%;
        background-position: 50% 25%;
    }
}
@media(max-width: 769px) {
    .wrapper {
        background: url('/src/assets/bannermobile.jpg') fixed no-repeat;
        background-size: 100%;
        background-position: top;
        max-height: 50vh;
        min-height: 250px;
    }
}
</style>