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
    <div><span class="megatitle">RECICLAJE EN ROSARIO</span></div>
    <div class="text">
        <p>
          En la siguiente lista, se podrá acceder a distintos centros de recolección de residuos eléctrico-electrónicos en la ciudad de Rosario, tanto municipales como particulares.
        </p>
        <br>
        <p>
          <span class="subtitle">Recepción de residuos especiales en Rosario</span>
        </p>
        <p>
          La colecta de residuos informáticos se realiza una vez por mes.
        </p>
        <p>
          Se reciben CPU, notebooks, teclados, monitores, mouses, parlantes, impresoras, cables, routers y artículos similares en desuso que se envían a disposición final y así aminorar su impacto ambiental. No se aceptan residuos corporativos.
        </p>
        <p>
          DEL 29 DE MARZO AL 28 DE DICIEMBRE
        </p>
        <p>
          <a href="https://www.rosario.gob.ar/web/agenda/recepcion-de-residuos-especiales-1">  Agenda rosario.gob.ar </a>
          </p>
        <p>
          <a href="https://nodocios.com.ar/reciclar-residuo-electronico-en-rosario-2021/">  Más información </a>
          </p>
        <br>
        <p>
          <span class="subtitle">RAEE-Nodo Tau</span>
        </p>
        <p>
          La Planta de Gestión de Residuos Informáticos promovida por Nodo Tau, es un emprendimiento social destinado a la gestión ambientalmente correcta de los Residuos Informáticos y a la creación de empleo juvenil.
        </p>
        <p>
          Colaboración con la Universidad Nacional de Rosario (UNR): <a href="https://unr.edu.ar/noticia/14511/gestion-de-residuos-electronicos"> <span class="italic"> Gestión de residuos electrónicos (11/06/2021)  </span></a>
        </p>
        <p>
          <span class="bold">Contacto</span>: <a href="https://tau.org.ar/proyectos/">  Sitio web </a> y <a href="https://www.facebook.com/raeenodotau/">
          Facebook </a>
        </p>
        <br>
      <p>
          <span class="subtitle">Prototipado con RAEE - Gobierno de Santa Fe</span>
        </p>
        <p>
          Junto a iniciativas ciudadanas, generamos prototipos robóticos de baja complejidad en base a residuos de aparatos eléctricos y electrónicos (RAEE). A partir de esos prototipos, se crearon kits para distribuir en instituciones educativas. La actividad comenzó a desarrollarse en agosto de 2017 en la ciudad de Rosario y reunió a ingenieros, técnicos, profesores, estudiantes y organizaciones de la sociedad civil.
        </p>
        <p>
          <a href="https://www.santafe.gob.ar/ms/gobiernoabierto/wp-content/uploads/sites/6/2017/08/Prototipado-con-RAEE.pdf">  Documento ampliatorio </a>
        </p>
        <p>
          Nota: <a href="https://www.santafe.gob.ar/ms/gobiernoabierto/2017/10/15/santalab-trabaja-para-la-reutilizacion-de-raee/"> <span class="italic"> SantaLab trabaja para la reutilización de RAEE (15/10/2017) </a>
          </p>
          <br>
          
      <p>
          <span class="subtitle">Organización Internacional del Trabajo</span>
        </p>
        <p>
          A partir de una jornada convocada por la Organización Internacional del Trabajo los distintos sectores de la provincia, incluido el gobierno, activarán la gestión de residuos de aparatos eléctrico y electrónicos como una fuente de empleo digno con perspectiva de cuidado ambiental
        </p>
        <p>
          Nota: <a href="https://www.enredando.org.ar/2021/07/01/con-impulso-de-la-oit-se-activa-le-gestion-de-residuos-electronicos-en-la-provincia/"> <span class="italic"> Se activa le gestión de residuos electrónicos en la provincia (01/07/2021) </a>
          </p>
          <br>
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