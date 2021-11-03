<script>
    import WNavbar from './components/WNavbar.svelte';
    import WBanner from './components/WBanner.svelte';
    import WImageShow from './components/WImageShow.svelte';
    import WKnowMore from './components/WKnowMore.svelte';
    import WCharts from './components/WCharts.svelte';
    import WFooter from './components/WFooter.svelte';

    import Home from './Home.svelte';
    import EWaste from './EWaste.svelte';
    import EWasteImpact from './EWasteImapct.svelte';
    import Research from './Research.svelte';
    import Videos from './Videos.svelte';
    import About from './About.svelte';
    import ReciclajeRosario from './ReciclajeRosario.svelte';
    import FuentesConsultadas from './FuentesConsultadas.svelte';

    import ObsolescenciaProgramada from './ObsolescenciaProgramada.svelte';

    import {Router, Link, Route} from "svelte-routing";
    //PALETA DE COLORES https://coolors.co/f3faf0-daf0d1-c1e6b2-91d175-6ac247-488a2e-305c1f-182e0f
export let url;
  let router;
</script>

<div class="main">
    <Router url="{url}" bind:this={router}>
        <WNavbar/>
        <WBanner/>
        <div class="content">
            <!-- Este es el routing clientside, cada ruta lleva a un componente diferente
            / -> Home
            /ewaste -> EWaste
            /obsolescencia -> Obsolescencia
            -->
            <Route path="ewaste"><EWaste/></Route>
            <Route path="obsolescencia"><ObsolescenciaProgramada/></Route>
            <Route path="videos"><Videos/></Route>
            <Route path="impacto"><EWasteImpact/></Route>
            <Route path="investigacion"><Research/></Route>
            <Route path="info"><About/></Route>
            <Route path="reciclaje"><ReciclajeRosario/></Route>
            <Route path="fuentes"><FuentesConsultadas/></Route>
            <Route path="/"><Home/></Route>
        </div>
        <WFooter/>
        <!-- Footer -->
    </Router>
    
</div>


<style>
    .main {
    }

    
    
</style>