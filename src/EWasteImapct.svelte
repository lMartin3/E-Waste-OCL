<script>
    import { onMount } from "svelte";
    onMount(() => {
        window.scrollTo(0, 0);
    });
</script>
<div class="contentcontainer">
    <div><span class="megatitle">IMPACTO DEL E-WASTE</span></div>
    <div class="text">
        <p>
            La mayoría de los residuos electrónicos son desechados en vertederos, y una gran cantidad de los mismos son enviados a países menos desarrollados. El desecho inadecuado del E-Waste pude producir altos niveles de contamianción ambiental.
        </p>
        <p>
            Con frecuencia suelen llevarse a cabo procesos de reciclaje inadecuados, los cuales liberan agentes contaminantes. La exposición a estos agentes puede ocurrir mediante la inhalación o ingestión de agua, aire o alimentos contaminados. Estos agentes ponen en riesgo a los trabajadores y a la población cercana.
        </p>
        <div class="imgwrap">
            <img src="https://www.atriainnovation.com/wp-content/uploads/2020/06/Reciclaje_electronico_tabla_periodica.jpg"/>
            <span class="imglore">Elementos químicos que componen un smartphone | Fuente: <a href="https://www.atriainnovation.com/reciclaje-industrial-de-desechos-electricos-y-electronicos-e-waste/">ATRIA Innovation</a></span>
        </div>
        <p>
            Dentro de los residuos electrónicos suelen encontrarse sustancias que pueden ser nocivas para los humanos y el medioambiente, pero, adicionalmente, los procesos de reciclaje inadecuados pueden liberar sustancias adicionales, las cuales son utilizadas para remover metales valiosos como el oro de los desechos, y a su vez,son tóxicas.
        </p>
        <p>Existen casos tales como los de Tailandia, en los que hay <a href="https://www.nytimes.com/2019/12/08/world/asia/e-waste-thailand-southeast-asia.html">plantas de reciclaje que queman residuos electrónicos, liberando humo tóxico</a>. Esto sucede debido a que el país no cuenta con la capacidad para rechazar las importaciones de desechos, principalmente debido a la corrupción.</p>
        <p>Esta clase de casos no se limita a África, si no que también occure en países como China, donde <a href="https://www.sciencedirect.com/science/article/abs/pii/S0304389410014482">se encontraron metales pesados presentes en el suelo y en cultivos</a>, en un sitio donde previamente se incineraba E-Waste.</p>

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