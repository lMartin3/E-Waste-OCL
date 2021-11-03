<script>
    export let url;
    export let text;
    export let light = false;
    import {link, navigate} from 'svelte-routing';

    function go(){
        navigate(url);
    }
</script>

<button class="inside" class:light={light} on:click="{()=>go()}" use:link>{text}</button>

<style>
    .inside {
        font-size: 16px;
        padding: 6px 12px;
        border: 1px solid #333;
        border-radius: 5px;
        text-decoration: none;
        outline: none;
        background-color: inherit;
        color: #333;
        display: inline-block;
        transition: all 0.1s ease-in;
    }

    .light {
        color: white !important;
        border-color: white !important;
    }

    .light:hover {
        background-color: rgb(72 138 46) !important;
        border-color: rgb(72 138 46) !important;
    }

    .inside:hover {
        background-color: #C1E6B2;
        border-color: #C1E6B2;
    }

    .inside:active {
        box-shadow: 0 0 0 0.25rem rgb(72 138 46 / 50%);
    }

    .light {
        color: red;
    }
</style>