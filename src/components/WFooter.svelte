<script>
import {link} from "svelte-routing"
    </script>
<div class="footer">
    <div style="font-size: 26px">Conocé tu E-Waste</div>
    <div style="font-size:14px"><a href="">Política de Privacidad</a> | <a href="/info" use:link>Contacto</a></div>
    <div class="copy">&copy; Luciana de Abaroa y Martín Luraschi</div> <!-- Copyright 😎 -->
</div>
<style>
    .footer{
        padding: 30px;
        background-color: #49095f;
        color: #dfdfdf;
        display: block;
        text-align: center;
        justify-content: center;
        align-items: center;
        vertical-align: middle;

    }
    .footer > div {
        display: block;
        vertical-align: middle;
    }

    a {
        color: #dfdfdf;
    }

    .copy {
        font-size: 12px;
        color: 404040;
    }
</style>