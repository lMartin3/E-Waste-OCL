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
    <div><span class="megatitle">OBSOLESCENCIA PROGRAMADA</span></div>
    <div class="text">
        <p>
          Dado el avance tecnológico desde la Revolución Industrial, la generación de residuos ha incrementado notablemente, y particularmente de los residuos electrónicos, que se hallan en constante evolución, dejando obsoletos a aquellos que llevan ya un par de años. Sin embargo, ¿por qué sucede esto?
        </p>
        <p>
          Por <span class="highlight">Obsolescencia Programada</span> se entiende a aquella elaboración programada de productos de consumo cuya vida útil es coaccionada por su propio fabricante en un corto plazo, tanto por una falla programada o una deficiencia especialmente incorporada con este fin. El objetivo de esta es aumentar el consumo, instaurando cierta agotabilidad de los artefactos que obliga a los consumidores a cambiar los mismos tras un determinado plazo de tiempo, por fallos que lo vuelven inutilizables.
        </p>
        <br>
        <p>
          <span class="subtitle">Origen de la obsolescencia programada</span>
        </p>
        <p>
          <ul>
            <li>
              En el año 1881, cuando las primeras bombillas eléctricas salieron a la venta, estas tenían una duración de 2.500hs. No obstante, y dado a un estudio de mercado, se llegó a la resolución de que esto tenía un <span class="underline"> impacto negativo </span> en las industrias que las fabricaban, dado que, al tener una larga duración, quienes ya poseían una de estas bombillas iban a estar un largo período de tiempo haciendo uso de las mismas hasta que se agoten y se vean obligados a adquirir una nueva en reemplazo.
            </li>
            <li>
              En el año 1924, las grandes empresas del sector, incluídas <span class="italic"> Osram, Philips, Tungsram, Associated Electrical Industries, Compagnie des Lampes, International General Electric </span> y el <span class="italic"> GE Overseas Group </span> constituyeron lo que se conoció como el <span class="underline">cartel Phoebus</span>, una organización que se mantuvo activa hasta el año 1939 con el fin de limitar la vida útil de las lámparas incandescentes hasta las 1000 horas, imponiendo multas a las empresas que no cumpliesen
            </li>
          </ul>
          <br>
        <p>
          <span class="subtitle">Reparabilidad y obsolescencia percibida</span>
        </p>
          <p>
            En la actualidad, el concepto de “sustituir” ha reemplazado ampliamente al de “reparar”, principalmente en aquellos sectores con mayor poder adquisitivo, siendo prevalente en países más industrializados que en aquellos en vías de desarrollo. Muchos de los dispositivos eléctrico-electrónicos empleados a diario, al momento de percibir una falla, pueden ser reparables por completo a fin de prolongar su vida útil, sin embargo, el costo de reparación es tan elevado (incluso, en ocasiones, sin hacer justicia a la magnitud de la reparación, principalmente cuando el servicio es otorgado por la misma empresa) que conduce a su propietario a adquirir uno nuevo en buenas condiciones y desechar el producto “roto”.
          </p>
          <p>
            La <span class= "underline">obsolescencia percibida</span> se basa en los trabajos de marketing que conducen a que un producto que sigue siendo útil sea visto anticuado entre su propietario y la sociedad, quienes se ven en la necesidad  de adquirir una versión actualizada del mismo, tanto por pequeñas mejoras en la experiencia de usuario como por moda y prestigio. 
          </p>
          <br>
      <p>
          <span class="subtitle">El caso Apple</span>
        </p>
          <p>
            Una de las empresas que mayores polémicas elevó por acusaciones de obsolescencia programada fue <span class="underline">Apple Inc.</span>, particularmente en lo que respecta a sus dispositivos móviles (iPhones, iPads, iPods). Desde el lanzamiento de los primeros modelos de estos artefactos, entre sus consumidores ha surgido mucha curiosidad y disconformidad respecto a las fallas presentes en sus baterías, que al cabo de pocos meses se volvían inutilizables, así como por la ralentización de estos dispositivos al salir al mercado una versión más nueva del mismo o bien al actualizarse el sistema operativo.
          </p>
          <p>
            En efecto, uno de los mayores éxitos contra la obsolescencia programada fue el caso <span class="underline">Westley contra Apple</span>, en el año 2003, que tuvo como protagonista a Andrew Westley, un usuario estadounidense de Apple que había adquirido un reproductor de mp3 iPod por más de 400 dólares americanos y que antes de cumplir un año ya había resultado completamente inutilizable al estar su batería arruinada. Tras llamar a la empresa en búsqueda de un servicio técnico o repuestos, se le notificó al usuario que no se comercializaban las baterías para este tipo de dispositivos y que debía adquirir uno nuevo. Así, junto a la abogada de San Francisco, Elizabeth Pritzker, se acusó a Apple de no cumplir con la política medioambiental y por programar la vida útil de este producto. De esta forma, se analizó este producto con documentos técnicos de la batería del iPod y se demostró que la misma estaba programada desde un principio para tener una vida corta. Si bien nunca se llegó a juicio formal, ambas partes lograron un acuerdo que trajo como consecuencia a Apple la garantía aumentada a dos años y asegurar que la batería de todos los aparatos pudiese ser reemplazada, además de una “compensación económica” para Westley, de un 50% de descuento en la adquisición de un producto de esta marca nuevo, cuyo beneficio a fin de cuentas fue principalmente para la empresa. 
          </p>  
          <p>
            Pese a que se tuvo un gran avance en la lucha contra la obsolescencia programada a partir del caso de Westley, Apple siguió siendo foco de controversias. En el año 2017, la empresa se vio acusada de ralentizar intencionalmente a los modelos de teléfono celular iPhone más antiguos. La justificación otorgada por la empresa fue que estas fallas intencionales tenían el propósito de no agotar la batería y que no se trataba de un caso de obsolescencia programada. Sin embargo, y tras reiterados casos similares en los que Apple se vio como foco de ralentización intencional de sus dispositivos en el lanzamiento de nuevas actualizaciones del sistema operativo iOS, así como por no otorgar datos correctos referidos a la vida útil de sus baterías y su dificultad de reparación, acceso a repuestos y a servicio técnico, esta empresa fue denunciada múltiples veces y señalada como una de las peores en cuestión de reparabilidad.
          </p>
          <p>
            Dentro de la clasificación de obsolescencia percibida, los productos Apple también integran uno de los primeros puestos. El continuo lanzamiento de modelos nuevos con pequeñas mejoras de experiencia de usuario pero con un destacable equipo de marketing y un concepto social de calidad de sus productos, sumado a su relación con un estatus, hacen de sus dispositivos, principalmente los iPhones, uno de los más elegidos por los usuarios que pueden permitirse adquirirlos pese a ser de los más caros en la gama alta de teléfonos celulares. Este caso, que si bien tiene un foco importante en Apple también compromete a su competencia, lleva a un debate sobre la eticidad de reemplazar las fallas incorporadas por instaurar en las personas un concepto de que sus productos son anticuados al pasar no más de 2 años de vida útil.
          </p>
    </div>
</div>

<style>
     p, ul, .imgwrap {
        margin-bottom: 30px;
        //text-align: justify-content;
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
    .subtitle{
      font-size: 4vmin;
      text-decoration: underline;
      font-weight: bold;
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