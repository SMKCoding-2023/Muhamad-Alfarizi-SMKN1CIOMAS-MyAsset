<!-- pages/index.vue -->
<template>
    <div>
      <div class="main-content">
        <section class="hero">
          <h1 class="title">WELCOME TO MY WEBSITE</h1>
        </section>
  
        <section class="features">
          <div class="feature">
            <h2 class="feature-title">Streaming Lancar</h2>
            <p class="feature-description">
              anti lag 
            </p>
          </div>
  
          <div class="feature">
            <h2 class="feature-title">Streaming Jernih</h2>
            <p class="feature-description">
              resolusi 4k 
            </p>
          </div>
  
          <div class="feature">
            <h2 class="feature-title">Streaming Murah</h2>
            <p class="feature-description">
              murah tapi berkualitas
            </p>
          </div>
        </section>
      </div>
    </div>
  </template>
  
  <style scoped>
  .main-content {
    background-color: rgb(250, 250, 250);
    max-width: 100%;
    margin: 0 auto;
    padding: 115px;
  }
  
  .hero {
    text-align: center;
    margin-bottom: 40px;
  }
  
  .title {
    font-size: 2.5rem;
    color: #333;
    margin-bottom: 10px;
  }
  
  .subtitle {
    font-size: 1.2rem;
    color: #666;
  }
  
  .features {
    display: flex;
    justify-content: space-between;
  }
  
  .feature {
    flex: 1;
    text-align: center;
    padding: 20px;
    border: 2px solid rgb(7, 14, 94);
    border-radius: 8px;
    margin: 0 10px;
  }
  
  .feature-title {
    font-size: 1.5rem;
    color: #333;
    margin-bottom: 10px;
  }
  
  .feature-description {
    font-size: 1rem;
    color: #666;
  }
  </style>
  