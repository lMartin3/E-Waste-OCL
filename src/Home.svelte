<script>
    import WNavbar from './components/WNavbar.svelte';
    import WBanner from './components/WBanner.svelte';
    import WImageShow from './components/WImageShow.svelte';
    import WKnowMore from './components/WKnowMore.svelte';
    import WCharts from './components/WCharts.svelte';

    import { onMount } from "svelte";
    onMount(() => {
        window.scrollTo(0, 0);
    });
</script>
<div class="contentcontainer">
    <div class="section alt0">
        <WImageShow items={['/src/assets/imgcat/ewaste01.jpeg', '/src/assets/imgcat/ewaste02.jpeg', '/src/assets/imgcat/ewaste03.jpeg']}/>
        <div class="text">
            <div class="title">¿QUÉ ES EL E-WASTE?</div>
            <div>
                El E-Waste o Residuos electrónicos son dispositivos que llegaron al fin de su vida útil, y deben ser reparados, reciclados o desechados. En la actualidad se producen millones de toneladas de residuos electrónicos al año, la mayoría son descartados y representan una grave amenaza para el ambiente y la salud de las personas.
            </div>
            <div class="buttonwrap"><WKnowMore url="/ewaste" text="Saber más" light={false}/></div>
        </div>
    </div>
    <div class="section alt1">
        <div class="text">
            <div class="title">IMPACTO DEL E-WASTE</div>
            <div>
                Los residuos electronicos están compuestos por una gran variedad de sustancias que pueden ser perjudiciales para los humanos y el ambiente. En muchas ocasiones se llevan a cabo procesos de reciclaje inadecuados que liberan componentes tóxicos que pueden ser nocivos para los trabajadores y la población del área.
            </div>
            <div class="buttonwrap"><WKnowMore url="/impacto" text="Saber más" light={true}/></div>
        </div>
        <WImageShow items={['/src/assets/imgcat/ewasteimpact01.png', '/src/assets/imgcat/ewasteimpact02.png', '/src/assets/imgcat/ewasteimpact03.png']}/>
    </div>
    <div class="section alt0">
        <WImageShow items={['/src/assets/imgcat/ctc01.png', '/src/assets/imgcat/ctc02.png', '/src/assets/imgcat/ctc03.png']}/>
        <div class="text">
            <div class="title">OBSOLESCENCIA PROGRAMADA</div>
            <div>
                Por Obsolescencia Programada se entiende a la elaboración de productos de consumo cuya vida útil es coaccionada por su propio fabricante en un corto plazo, tanto por su falla programada o una deficiencia especialmente incorporada con ese fin.
            </div>
            <div class="buttonwrap"><WKnowMore url="/obsolescencia" text="Saber más" light={false}/></div>
        </div>
    </div>
    <div class="section alt1">
        <div class="text">
            <div class="title">TRABAJO DE CAMPO</div>
            <div>
                El trabajo de campo cubre ampliamente el concepto el E-Waste, su origen,su destino, su impacto en el ambiente y salud, y su relación con la activiad económica. Además, se desarrollan los conceptos de obsolescencia programada y recibida. La investigación también cubre las encuestas realizadas.
            </div>
            <div class="buttonwrap"><WKnowMore url="/investigacion" text="Saber más" light={true}/></div>
        </div>
        <WImageShow items={['/src/assets/imgcat/inv01.png', '/src/assets/imgcat/inv02.png', '/src/assets/imgcat/inv03.png']}/>
    </div>
</div>

<style>
.title {
        font-size: 3rem;
        margin: 0 0 20px 0;
        padding: 0px;
        font-weight: 700;
        border-bottom: 10px solid #d69ce7;
        line-height: 1;
    }
    .contentcontainer {
        padding: 0px 0;
        display: block;
        text-align: center;
    }

    .section {
        padding: 50px 140px;
        display: flex;
    }

    .text {
        text-align: left;
        margin: 0 30px;
        font-size: 20px;
        line-height: 2;
        width: 80%;
    }

    .right {
        text-align: right;
    }

    .alt0 {
        background-color: #f8effb;
    }

    .alt1 {
        background-color: #c679df;
        color: white;
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
            margin: 30px 0;
            width: unset;
        }

        .title {
            text-align: center;
            font-size: 2rem;
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