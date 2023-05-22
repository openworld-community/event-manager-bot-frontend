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
    submitForm,
    makeInputEventProxy,
    makeFormEventProxy
  } from './stores';
</script>

<main>
  <form class="form" on:submit={makeFormEventProxy(submitForm)}>
    <h1>Create new event</h1>

    <label>
      <span>Name:</span>
      <input type="text" on:input={makeInputEventProxy(changeName)} value={$nameStore}/>
    </label>

    <label>
      <span>Link:</span>
      <input type="text" on:input={makeInputEventProxy(changeLink)} value={$linkStore}/>
    </label>

    <label>
      <span>Start date:</span>
      <input type="date" on:input={makeInputEventProxy(changeStart)} value={$startStore}/>
    </label>

    <label>
      <span>Remind date:</span>
      <input type="date" on:input={makeInputEventProxy(changeRemind)} value={$remindStore}/>
    </label>

    <label>
      <span>Max adults amount:</span>
      <input type="number" on:input={makeInputEventProxy(changeMaxAdults)} value={$maxAdultsStore}/>
    </label>

    <label>
      <span>Max children amount:</span>
      <input type="number" on:input={makeInputEventProxy(changeMaxChildren)} value={$maxChildrenStore}/>
    </label>

    <label>
      <span>Max adults per reservation:</span>
      <input
        type="number"
        on:input={makeInputEventProxy(changeMaxAdultsPerReservation)}
        value={$maxAdultsPerReservationStore}
      />
    </label>

    <label>
      <span>Max children per reservation:</span>
      <input
        type="number"
        on:input={makeInputEventProxy(changeMaxChildrenPerReservation)}
        value={$maxChildrenPerReservationStore}
      />
    </label>

    <label>
      <span>Adult ticket price:</span>
      <input type="number" on:input={makeInputEventProxy(changeAdultTicketPrice)} value={$adultTicketPriceStore}/>
    </label>

    <label>
      <span>Children ticket price:</span>
      <input
        type="number"
        on:input={makeInputEventProxy(changeChildrenTicketPrice)}
        value={$childrenTicketPriceStore}
      />
    </label>

    <label>
      <span>Currency:</span>
      <input type="text" on:input={makeInputEventProxy(changeCurrency)} value={$currencyStore}/>
    </label>

    <button type="submit">Create event</button>
  </form>
</main>

<style>
  .form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
</style>
