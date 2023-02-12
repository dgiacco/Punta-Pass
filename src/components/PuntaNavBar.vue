<template> 
    <nav>
      <div class="logo">
        <img src="../../public/puntaicon.png" alt="Logo">
      </div>
        
    <div class="buttons">
      <a href="#">Sign In</a>
      <a href="#">Log In</a>
    </div>
  </nav>
  </template>

<script>
export default {};
</script>

  
  <style>
    nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
  }
  
  .logo {
    font-size: 1.5rem;
    font-weight: bold;
  }
  
  .buttons {
    display: flex;
  }
  
  a {
    padding: 0.5rem 1rem;
    background-color: #3498db;
    color: white;
    border-radius: 5px;
    text-decoration: none;
    margin-left: 1rem;
  }

  </style>  