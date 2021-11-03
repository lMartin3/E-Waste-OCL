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
    <div><span class="megatitle">ACERCA DE</span></div>
    <div class="text">
        <div><span class="subtitle2">OBJETIVO</span></div>
        <p>
            Este sitio web fue creado como parte del Trabajo de Campo para la asignatura Orientación en Contextos Laborales.
        </p>
        <p>
          <span class="highlight">Conocé tu E-Waste </span> busca divulgar información acerca de los residuos electrónicos, su impacto en el ambiente y en la salud, la obsolescencia programada y percibida, a partir de los resultados obtenidos en la encuesta del trabajo de campo. Adicionalmente, se busca proveer recursos adicionales para informar como tratar con los residuos electrónicos, orientado por el momento a la ciudad de Rosario.
        </p>
        <div><span class="subtitle2">AUTORES</span></div>
        <p>
            Este trabajo fue realizado por:
            <li> <span class="name">Luciana de Abaroa</span> (lu.abaroa2@gmail.com) </li>
            <li> <span class="name"> Martín Luraschi </span> (martinlufr@gmail.com) </li>
            Ambos estudiantes de 5to año Cs. Naturales del Colegio Nuestra Señora de la Misericordia E.E.S.O.P.I. Nº8010 de la ciudad de Rosario, a cargo de la docente de Orientación en Contextos Laborales, Paula Carazay.
        </p>
        <div><span class="subtitle2">TRABAJO COMPLETO</span></div>
        <p>
            Si desea acceder al trabajo completo, remítase <a href="https://docs.google.com/document/d/1thelui7SdZj-k8HTEgylvr9yA8Gev5OiCOYIgG67Kw4/edit?usp=sharing"> acá </a>
        </p>
        <div><span class="subtitle2">CONTACTO</span></div>
        <p>
            Para consultas, sugerencias o comentarios sobre el trabajo, evianos un email a <span class="highlight"> conocetuewaste@gmail.com </span>
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
    .name{
      font-weight: bold;
    }
    .imgwrap {
        display: flexbox;
        justify-content: center;
        text-align: center;
        align-items: center;

    }
    .subtitle{
      font-size: 4vmin;
      text-decoration: underline;
      font-weight: bold;
    }

    .subtitle2 {
        display: block;
        font-size: 4vmin;
        font-weight: 700;
        text-align: center;
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