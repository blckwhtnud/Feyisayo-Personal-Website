---
layout: layout
---

<style>
  .timeline {
    position: relative;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1em;
  }
  .event {
    min-height: 10em;
    display: flex;
    flex-direction: column;
    text-align: right;
  }
  .event:nth-child(2n) {
    /* grid-column: 2/-1; */
    justify-content: flex-end;
    text-align: left;
  }
  .arrow {
    position: absolute;
    top: 0;
    left: 50%;
    bottom: 0;
    width: 4px;
    background-color: red;
  }
</style>
<div class="timeline">
  <div class="event">
    <h2>2021</h2>
    <p>Design complete, user testing of prototype</p>
  </div>
  <div class="event">
    <h2>2021</h2>
    <p>Design complete, user testing of prototype</p>
  </div>
  <div class="event">
    <h2>2021</h2>
    <p>Design complete, user testing of prototype</p>
  </div>
  <div class="event">
    <h2>2021</h2>
    <p>Design complete, user testing of prototype</p>
  </div>
  <div class="event">
    <h2>2021</h2>
    <p>Design complete, user testing of prototype</p>
  </div>

  <div class="arrow">&nbsp;</div>
</div>
<br /><br />
