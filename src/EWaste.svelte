<script>
    import { onMount } from "svelte";
    onMount(() => {
        window.scrollTo(0, 0);
    });
</script>
<div class="contentcontainer">
    <div><span class="megatitle">¿QUÉ ES EL E-WASTE?</span></div>
    <div class="text">
        <p>
            El <span class="highlight">E-Waste</span> o <span class="highlight">Residuos Electrónicos</span> son dispositivos eléctricos o electrónicos que, por cualquier motivo, alcanzaron el fin de su vida útil, y por lo tanto deben ser reparados, reciclados o desechados.
        </p>
        <p>
        </p>
        Algunos ejemplos de residuos electrónicos son:
        <ul>
            <li>Computadoras</li>
            <li>Monitores</li>
            <li>Impresoras</li>
            <li>Teléfonos celulares</li>
            <li>Dispositivos periféricos (auriculares, teclados, ratones, etc)</li>
            <li>Baterías</li>
        </ul>
        <div class="imgwrap">
            <img class="artimg" src="https://www.afrik21.africa/wp-content/uploads/2020/07/shutterstock_1675847923-1-800x400.jpg"/>
            <span class="imglore">Los residuos electrónicos suelen terminar en vertederos</span>
        </div>
        <p>
            El E-Waste está compuesto por varios materiales, dentro de los cuales se encuentran metales, plásticos, virio, madera, placas de circuito, concetro, cerámica y caucho. También se pueden encontrar materiales como mercurio, arsénico, cadmio, cromo hexavalenta y sustancias ignífugas; los mismos convierten al E-Waste en un <span class="highlight">reisgo para la salud</span>.
        </p>
        <p>
            Frecuentemente, una gran cantidad de residuos electrónicos son enviados desde países desarrollados hacia países en desarrollo o subdesarrollados, los cuales no cuentan con las medidas para evitar esto.
        </p>
        <div class="imgwrap">
            <img src="https://www.researchgate.net/profile/Marko-Martinovic/publication/334646474/figure/fig1/AS:784118396751878@1563959802617/Export-routes-e-waste-The-graph-shows-the-amount-of-generated-electronic-waste-wastage.jpg"/>
            <span class="imglore">Flujo del E-Waste | <a href="https://www.researchgate.net/publication/334646474_Recycling_and_Disposal_of_electronic_Waste">Fuente: Research Gate</a></span>
        </div>
        <p>
            Actualmente, el rápido crecimiento de la tecnología, la mejoría e innovaciones tecnológicas y la velocidad con la que dispositivos antiguos se vuelven obsoletos llevaron a uno de los flujos de desperdicios más altos en el mundo. Administrar ese flujo adecuadamente representa un desafío para todos los países.
        </p>

    </div>
</div>

<style>
    p, ul, .imgwrap {
        margin-bottom: 30px;
    }
    
       
    .highlight {
        color: #ab59c6;
    }
    
    .underline{
        text-decoration: underline;
    }

    .italic{
      font-style: italic;
    }

    .imgwrap {
        display: flexbox;
        justify-content: center;
        text-align: center;
        align-items: center;

    }

    a {
        color: #c679df;
    }

    .imgwrap > .imglore {
        display: block;
        text-align: center;
        font-size: 15px;
        font-color: #CCC;
    }

    .imgwrap > img {
        max-width: 85vw;
    }

    .megatitle {
        display: inline-block;
        margin: 4vmin 0;
        font-size: 8vmin;
        padding: 0px;
        font-weight: 700;
        border-bottom: 10px solid #d69ce7;
        line-height: 1;
    }
    .contentcontainer {
        padding: 0px 0vw;
        display: block;
        text-align: center;
    }

    .section {
        padding: 30px 140px;
        display: flex;
    }

    .text {
        text-align: left;
        margin: 0 18vw;
        font-size: 20px;
        line-height: 2;
    }

    .right {
        text-align: right;
    }

    .alt0 {
        background-color: #F3FAF0;
    }

    .alt1 {
        background-color: #91D175;
        color: white;
    }

    .alt2 {
        background-color: #DAF0D1;
    }

    .buttonwrap {
        margin: 15px 0;
        width: 100%;
        text-align: left;
    }

    @media(max-width: 1024px) {
        .section {
            display: block;
            padding: 30px 50px;
        }
        .text {
            margin: 30px 4vw;
            word-wrap: break-word;
            width: unset;
        }

        .megatitle {
            text-align: center;
        }

        .buttonwrap {
            text-align: center;
        }
    }

    @media(max-width: 640px) {
        .section {
            padding: 30px 20px;
        }

        .text {
            font-size: 18px;
        }
    }
</style>