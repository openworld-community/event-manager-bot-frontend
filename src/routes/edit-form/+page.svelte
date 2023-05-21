<script>
  import {
    changeName,
    changeLink,
    changeStart,
    changeRemind,
    changeMaxAdults,
    changeMaxChildren,
    changeMaxAdultsPerReservation,
    changeMaxChildrenPerReservation,
    changeAdultTicketPrice,
    changeChildrenTicketPrice,
    changeCurrency,
    nameStore,
    linkStore,
    startStore,
    remindStore,
    maxAdultsStore,
    maxChildrenStore,
    maxAdultsPerReservationStore,
    maxChildrenPerReservationStore,
    adultTicketPriceStore,
    childrenTicketPriceStore,
    currencyStore,
    submitForm
  } from "./stores";
</script>

<main>
  <form on:submit={submitForm}>
    <h1>Create new event</h1>

    <label class="input_block">
      <span>Name:</span>
      <input type="text" on:input={changeName} value="{$nameStore}">
    </label>

    <label class="input_block">
      <span>Link:</span>
      <input type="text" on:input={changeLink} value="{$linkStore}">
    </label>

    <label class="input_block">
      <span>Start date:</span>
      <input type="date" on:input={changeStart} value="{$startStore}">
    </label>

    <label class="input_block">
      <span>Remind date:</span>
      <input type="date" on:input={changeRemind} value="{$remindStore}">
    </label>

    <label class="input_block">
      <span>Max adults amount:</span>
      <input type="number" on:input={changeMaxAdults} value="{$maxAdultsStore}">
    </label>

    <label class="input_block">
      <span>Max children amount:</span>
      <input type="number" on:input={changeMaxChildren} value="{$maxChildrenStore}">
    </label>

    <label class="input_block">
      <span>Max adults per reservation:</span>
      <input type="number" on:input={changeMaxAdultsPerReservation} value="{$maxAdultsPerReservationStore}">
    </label>

    <label class="input_block">
      <span>Max children per reservation:</span>
      <input type="number" on:input={changeMaxChildrenPerReservation} value="{$maxChildrenPerReservationStore}">
    </label>

    <label class="input_block">
      <span>Adult ticket price:</span>
      <input type="number" on:input={changeAdultTicketPrice} value="{$adultTicketPriceStore}">
    </label>

    <label class="input_block">
      <span>Children ticket price:</span>
      <input type="number" on:input={changeChildrenTicketPrice} value="{$childrenTicketPriceStore}">
    </label>

    <label class="input_block">
      <span>Currency:</span>
      <input type="text" on:input={changeCurrency} value="{$currencyStore}">
    </label>

    <button type="submit">Create event</button>
  </form>
</main>

<style>
  .input_block {
    display: block;
  }
</style>
