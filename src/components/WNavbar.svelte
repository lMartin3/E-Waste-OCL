<script lang="ts">
  import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
  } from 'sveltestrap';

import {link, Link} from 'svelte-routing';

  let isOpen = false;

  function handleUpdate(event) {
    isOpen = event.detail.isOpen;
  }
</script>
<div class="n">

<Navbar class="bd white" color="white-!invalid!" lighttt expand="md">
  <a href="/" use:link><NavbarBrand><img class="logo" src="/src/assets/ewastecmr.png"></NavbarBrand></a>
  <NavbarToggler class="navtoggler" on:click={() => (isOpen = !isOpen)}>Menu</NavbarToggler>
  <Collapse {isOpen} navbar expand="md" on:update={handleUpdate}>
    <Nav  navbar>

        <Dropdown nav inNavbar>
            <DropdownToggle nav caret>Información</DropdownToggle>
            <DropdownMenu end>
                <a href="/ewaste" use:link><DropdownItem>¿Qué es el E-Waste?</DropdownItem></a>
                <!--<DropdownItem divider />-->
                <a href="/impacto" use:link><DropdownItem>Impacto del E-Waste</DropdownItem></a>
                <a href="/obsolescencia" use:link><DropdownItem>Obsolescencia programada</DropdownItem></a>
            </DropdownMenu>
        </Dropdown>
        <NavItem class="da">
            <a href="/investigacion" use:link><NavLink href="">Trabajo de Campo</NavLink></a>
        </NavItem>

        <Dropdown nav inNavbar>
            <DropdownToggle nav caret>Recursos</DropdownToggle>
            <DropdownMenu end>
                <a class="link" href="/videos" use:link><DropdownItem>Videos</DropdownItem></a>
                <a class="link" href="/reciclaje" use:link><DropdownItem>Reciclaje en Rosario</DropdownItem></a>
                <a class="link" href="/fuentes" use:link><DropdownItem>Recursos consultados</DropdownItem></a>
            </DropdownMenu>
        </Dropdown>

        <NavItem class="da">
            <a href="/info" use:link><NavLink href="">Acerca de</NavLink></a>
        </NavItem>
      
    </Nav>
  </Collapse>
</Navbar>
</div>
<style>
    .n{
        position: fixed;
        width: 100%;
        z-index: 73;
        border-bottom: 2px solid rgba(0, 0, 0, 0.20);
    }
    a {
        text-decoration: none;
    }

    :global(Link, DropdownItem, NavLink) {
        text-decoration: none !important;
    }

    .link > :global(a) {
        text-decoration: none !important;
    }
    :global(.bd) {
        background-color: #49095f;
    }

    :global(.white *) {
        color: white !important;
    }

    :global(.dropdown-menu) {
        background-color: #49095f;
    }

    :global(.dropdown-item:hover) {
        background-color: #6d2087;
    }

    :global(.dropdown-item:active) {
        background-color: #8e39aa;
    }

    :global(.navtoggler) {
        height: 100%;
        border: 2px solid white;
    }

    .logo {
        max-height: 80px;
    }


</style>