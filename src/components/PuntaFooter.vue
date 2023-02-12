<template>
    <footer>
      <div class="footer-container">
        <div class="footer-left">
          <p>Terms & Conditions</p>
        </div>
        <div class="footer-right">
          <a href="#">
            <i class="fab fa-facebook-square"></i>
          </a>
          <a href="#">
            <i class="fab fa-twitter-square"></i>
          </a>
          <a href="#">
            <i class="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  </template>
  
  <script>
  import { library } from '@fortawesome/fontawesome-svg-core'
  import { faFacebookSquare, faTwitterSquare, faInstagram } from '@fortawesome/free-brands-svg-icons'

  library.add(faFacebookSquare, faTwitterSquare, faInstagram)
  export default {
    name: "PuntaFooter"
  };
  </script>
  
  <style scoped>
  footer {
    background-color: #3f51b5;
    color: white;
    padding: 20px;
  }
  
  .footer-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .footer-left p {
    margin: 0;
  }
  
  .footer-right a {
    margin-right: 10px;
    color: white;
  }
  
  .footer-right a:hover {
    color: lightgray;
  }
  </style>
  