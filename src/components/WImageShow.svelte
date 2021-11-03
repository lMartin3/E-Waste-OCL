<script lang="ts">
  import {
    Carousel,
    CarouselControl,
    CarouselIndicators,
    CarouselItem
  } from 'sveltestrap';
  export let items = [
    'https://images.unsplash.com/photo-1590219590780-f8cfab573cc1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500',
    'https://images.unsplash.com/photo-1621759325757-ba786969087d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500',
    'https://images.unsplash.com/photo-1612965110667-4175024b0dcc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500'
  ];
  let activeIndex = 0;
</script>

<Carousel {items} bind:activeIndex>
  <CarouselIndicators bind:activeIndex {items} />

  <div class="carousel-inner">
    {#each items as item, index}
      <CarouselItem bind:activeIndex itemIndex={index}>
        <img src={item} class="d-block w-100" alt={`${item} ${index + 1}`} />
      </CarouselItem>
    {/each}
  </div>

  <CarouselControl direction="prev" bind:activeIndex {items} />
  <CarouselControl direction="next" bind:activeIndex {items} />
</Carousel>