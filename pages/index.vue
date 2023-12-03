<template>
  <div>
    <div class="home">
    </div>
    <div class="main-content">
      <section class="hero">
        <h1 class="title">MyAsset</h1>
        <p>MyAsset adalah situs untuk mendownload berbagai macam asset game</p>
      </section>

      <section class="features">
        <div class="feature">
          <h2 class="feature-title">Asset Lancar</h2>
          <p class="feature-description">
            Asset bisa langsung dipakai di berbagai engine game seperti unity dan unreal engine
          </p>
        </div>

        <div class="feature">
          <h2 class="feature-title">Asset HD</h2>
          <p class="feature-description">
            Asset dengan kualitas gambar, dan resolusi tinggi yang pasti indah dipandang
          </p>
        </div>

        <div class="feature">
          <h2 class="feature-title">Asset Murah</h2>
          <p class="feature-description">
            Murah tapi berkualitas, tentu saja asset tetap dibuat dan dikerjakan oleh profesional
          </p>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.home{
 
}
.main-content {
  background-color: rgb(250, 250, 250);
  max-width: 100%;
  margin: 0 auto;
  padding: 5% 10%;
  background-image: url(../public/images/icons/00-featured-gameart-assets.png);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
 height: 550px;/* Mengubah padding agar lebih responsif */
}

.hero {
  text-align: center;
  margin-bottom: 20px;
}

.title {
  font-size: 2rem;
  color: #333;
  margin-bottom: 10px;
}

.features {
  display: flex;
  flex-wrap: wrap;
  /* Menambahkan wrap agar item berada dalam baris baru pada layar kecil */
  justify-content: space-between;
}

.feature {
  flex: 1;
  text-align: center;
  padding: 10px;
  border: 2px solid rgb(7, 14, 94);
  border-radius: 8px;
  background-color: white;
  margin: 0 10px;
  margin-bottom: 20px;
  /* Memberikan ruang di antara fitur pada layar kecil */
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

<style>
/* Tambahkan gaya untuk layar kecil menggunakan media query */
@media (max-width: 600px) {
  .title {
    font-size: 1.5rem;
  }

  .feature {
    flex: 1 0 100%;
    /* Setiap fitur akan mengambil 100% lebar pada layar kecil */
    margin: 0;
  }
  .main-content {
  background-color: rgb(250, 250, 250);
  max-width: 100%;
  margin: 0 auto;
  padding: 5% 10%;
  background-image: url(../public/images/icons/00-featured-gameart-assets.png);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
 height: 700px;/* Mengubah padding agar lebih responsif */
}
}
</style>
