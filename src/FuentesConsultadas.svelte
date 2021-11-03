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
    <div><span class="megatitle">FUENTES CONSULTADAS</span></div>
    <div class="text">
        <p>
          El presente trabajo fue realizado gracias a los trabajos presentados a continuación. Agradecemos toda la información brindada por estos informes.
        </p>
        <p>
         <li> <a href="https://pdfs.semanticscholar.org/0316/b2c1985fb04c47e8e9d0dcbd40198e547dd0.pdf"> E-waste: Environmental Problems and Current Management</a>
        </li>
        <li> <a href="https://www.itu.int/en/ITU-D/Environment/Documents/Toolbox/GEM_2020_EN_O21.pdf"> The Global E-waste Monitor 2020</a>
        </li>
        <li> <a href="https://www.nytimes.com/2019/12/08/world/asia/e-waste-thailand-southeast-asia.html"> The Price of Recycling Old Laptops: Toxic Fumes in Thailand’s Lungs</a>
        </li>
        <li><a href="https://www.unav.edu/documents/29062/6900948/34_Fuenllana_Obsolescencia+Programada.pdf"> Obsolescencia Programada</a>
        </li>
        <li> <a href="https://www.sciencedirect.com/science/article/abs/pii/S0304389410014482">Heavy metal contamination in soils and vegetables near an e-waste processing site, south China</a>
        </li>
        <li> <a href="https://www.epa.gov/international-cooperation/cleaning-electronic-waste-e-waste"> Cleaning Up Electronic Waste (E-Waste)</a>
        </li>
        <li><a href="http://dspace.uces.edu.ar:8180/xmlui/bitstream/handle/123456789/2867/Obsolescencia_Fernandez-Rey.pdf?sequence=1">La obsolescencia programada: sus consecuencias en el ambiente y la importancia del consumo responsable</a>
        </li>
        <li><a href="https://www.researchgate.net/publication/321623682_Giannini_L_2017_La_obsolescencia_programada_como_controversia_Analisis_del_debate_publico_en_torno_a_las_salidas_de_dispositivos_Apple_in_Alvarez-Peralta_M_Fernandez_G_Mazzoli_L_ed_La_mediacion_fragme"> La obsolescencia programada como tema controvertido. Un análisis del debate público online en torno a las salidas de los dispositivos Apple </a>
        </li>
        <li><a href="https://www.theguardian.com/technology/2017/dec/21/apple-admits-slowing-older-iphones-because-of-flagging-batteries">Apple admits slowing older iPhones because of ageing batteries</a>
        </li>
        <li><a href="https://www.thelancet.com/journals/langlo/article/PIIS2214-109X(13)70020-2/fulltext">Health effects of exposure to e-waste</a>
        </li>
        <li><a href="https://www.mdpi.com/2079-9276/6/2/15">The Link between e-Waste and GDP—New Insights from Data from the Pan-European Region </a>
        </li>
        <li><a href="https://www.researchgate.net/publication/327469562_La_responsabilidad_social_empresarial_y_la_obsolescencia_programada">La responsabilidad social empresarial y la obsolescencia programada</a>
        </li>
        <li><a href="http://www.esocialsciences.org/Download/repecDownload.aspx?fname=A201564113740_41.pdf&fcategory=Articles&AId=6904&fref=repec">E-Waste in India</a>
        </li>
        <li><a href="https://pubs.acs.org/doi/10.1021/es303166s">E-Waste Recycling: Where Does It Go from Here? </a>
        </li>
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