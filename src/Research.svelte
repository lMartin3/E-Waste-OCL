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
    <div><span class="megatitle">TRABAJO DE CAMPO</span><br>
    <span class= "topic"> Problemática: <span class="highlight">Escasez de conocimiento en los jóvenes<br> sobre E-Waste y hábitos de consumo y desecho</span></div>
    <div class="text">
        <p>
            Hipotetizando que existe un gran desconocimiento y desinformación sobre los residuos eléctricos y electrónicos, principalmente en adolescentes y jóvenes de 13 a 25 años en la ciudad de Rosario y alrededores, se realizó una encuesta a integrantes de este rango etario en la región para analizar hábitos de consumo, reparación, desecho y reciclaje de artefactos eléctricos y electrónicos.
        </p>
        <p>
          En el relevamiento de terreno, tras encuestar a <span class="underline">114 personas</span>, se demostró que tan solo un 15% de las mismas cree tener un grado de conocimiento del impacto ambiental/sanitario del desecho inadecuado de los residuos eléctrico-electrónicos superior al 7 sobre 10. De esta forma, se evidencia que la gran mayoría de los jóvenes no considera estar muy informado del tema, siendo un 30% del total los que consideran tener un nivel de conocimiento que no supera un nivel 3 sobre 10.
        </p>
        <div class="imgwrap">
          <img src="/src/gráficos/grafico1.png">
          <img src="/src/gráficos/grafico2.png">
          <img src="/src/gráficos/grafico3.png">
        </div>
          <!--1984  <-- La profe de lengua aproves|  bue re hater           <img<span class="imglore">Detalles del gráfico acá</span>-->
        <p>
          Por su parte, también se le preguntó a los encuestados sobre sus hábitos de consumo en tres de los dispositivos electrónicos más empleados: celular, computadora y televisor.
        </p>
       
        <div class="imgwrap">
          <img class="b" src="/src/gráficos/grafico4.png">
          <img class="b" src="/src/gráficos/grafico5.png">
          <img class="b" src="/src/gráficos/grafico6.png">
        </div>
        <p>
          Dos resultados comunes en los tres casos y que tuvieron una amplia mayoría en porcentaje fueron cambiarlo al llegar al final de su vida útil o romperse, o bien cuando dejan de adaptarse a los requisitos mínimos e indispensables que se precisan.
        </p>
        <p>
          Además, se analizó el hábito de reciclaje, reparabilidad y desecho de los artefactos eléctricos electrónicos dañados, demostrando que aquellos que en aquellos reparables, el 79% opta por repararlo mientras que un 12% opta por comprar uno nuevo para reemplazarlo. Es también destacable que un 9% de los encuestados, en respuestas adicionales, hicieron un especial enfoque a que antes de ver si lo desechan o si lo continúan usando, buscan verificar los costos de reparación y de uno nuevo para decidir qué decisión tomar.
        </p>
          <div class="imgwrap">
            <img class="c" src="/src/gráficos/grafico7.png">
          </div>
        <p>
          En el caso de los objetos irreparables, más de la mitad de los encuestados (79%) afirmó que guarda los componentes por si los necesita en un futuro o se los vende/regala a un conocido que pueda hacer uso de los mismos. Por su parte, un 9% dijo que lo deja en los contenedores de la calle y un 10% que lo dejan en la esquina de la calle. Tan solo un 1% comentó que se lo entregaría a un reciclador especial y ninguno de los encuestados consideró la opción de llevarlo a un centro de reciclaje especializado.
        </p>
          <div class="imgwrap">
            <img class="b" src="/src/gráficos/grafico8.png">
          </div>
        <p>
          Sobre obsolescencia programada, se le preguntó a los encuestados sobre su opinión sobre si consideraban cierto que algunas empresas hacen uso de esta práctica y si creen que es un problema, en qué magnitud. Tan solo un 2% lo consideró falso, mientras que en su mayoría (45%) se afirmó que es cierto y que es un grave problema. Es también destacable que casi la cuarta parte de los encuestados (24%) considera que no se halla lo suficientemente informada como para comentar al respecto.
        </p>
          <div class="imgwrap">
            <img class="d" src="/src/gráficos/grafico9.png">
          </div>
        <p>
          También se le preguntó a los encuestados sobre su opinión respecto a que ciertas empresas cobren la reparación de sus artefactos en un sobreprecio para alentar el consumo de nuevos productos. Así, un 3% respondió que no es cierto en su totalidad y un 9% que no es cierto en parte (sí tienen costos altos pero no para alentar el consumo), mientras que más de la mitad (51%) lo considera verdadero y un grave problema. Nuevamente es preciso resaltar que casi la tercera parte del total (32%) no se considera informada al respecto.
        </p>
          <div class="imgwrap">
            <img class="e" src="/src/gráficos/grafico10.png">
          </div>
        <p>
      <br>
      <p>
        <span class="subtitle">Conclusiones</span>
      </p>
      <p>
        Habiendo analizado los resultados de la encuesta, se determinó que en su mayoría existe un notado interés por un tema del que un gran porcentaje comenta que no está informado en lo absoluto o bien sí pero de manera muy superficial. De esta forma, se puede concluir que es de especial importancia la difusión de información al respecto en el rango etario consultado en la ciudad de Rosario y alrededores, tanto sobre el impacto ambiental-sanitario como en materia económica, referida a la obsolescencia programada y los servicios técnicos ofrecidos por las empresas.
      </p>
      <p>
        Por parte de los hábitos de consumo, se evidenció que no es un problema mayor, dado que por lo general, en los encuestados son despreciables los casos extremos de consumo masivo, sin embargo, sí se puede establecer una notoria diferencia entre la cantidad de años que suelen mantener un celular es muy inferior a la de las computadoras y los televisores, siendo que la mayoría (93,75% tomando en consideración solo el plazo de años) los cambia en menos de 4 años.
      </p>
      <p>
        Respecto al desecho de productos electrónicos dañados de forma irreparable, resulta preciso destacar que es un número considerable el de las personas que considera dejar estos artefactos en la vía pública, en contenedores comunes (dado que en ningún punto de la ciudad ni alrededores existen contenedores específicos para residuos eléctrico-electrónicos en la calle) o bien en la misma esquina, los cuales si no son recolectados de manera inmediata pueden tener un alto impacto negativo en el ambiente. Asimismo, la nula cantidad de respuestas que indiquen que llevan estos residuos a centros especializados es un tema de preocupación y por lo que se debería hacer un mayor hincapié en la difusión de puntos de reciclaje.
      </p>
      <br>
      <a href="https://mega.nz/file/n25QlTjb#MXDENC8wn1cw0d4mPp8MzUoA_T_EIQJf8yIhG6Y03og"> Hacé click acá para acceder a todos los resultados de la encuesta. </a>
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

    .imgwrap {
        display: flexbox;
        justify-content: center;
        text-align: center;
        align-items: center;
    }
   
    img{
      height: 40vmin;
      object-fit: cover;
    }
    .b{
      height: 60vmin;
      object-fit: cover;
    }
    .c{
      height: 45vmin;
      width: 40vmin;
      object-fit: cover;
    }
    .d{
      height: 30vmin;
      object-fit: cover;
    }
    .e{
      height: 35vmin;
      object-fit: cover;
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
   .topic{
      font-size: 5vmin;
      margin: 4vmin 0;
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