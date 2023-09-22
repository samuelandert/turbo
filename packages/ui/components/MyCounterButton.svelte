<script lang="ts">
  let count = 0;

  function handleClick() {
    count += 1;
  }
</script>

<style>
  button {
    padding: 10px 20px;
    background-color: #007BFF;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  button:hover {
    background-color: #0056b3;
  }

  .count {
    font-size: 24px;
    margin-top: 10px;
  }
</style>

<button on:click="{handleClick}">
  Click Me 
</button>
<span class="count">{count}</span>