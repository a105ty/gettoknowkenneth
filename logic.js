document.getElementById("judul-website").innerText = judul_website;
const navLogo = document.getElementById("nav_logo")
const defaultSvg = `
    <svg width="26" height="26" viewBox="0 0 40 40" fill="none">
      <rect x="14" y="8" width="12" height="8" rx="2" stroke="#C8903C" stroke-width="1.5"/>
      <path d="M12 16 Q8 20 8 26 Q8 32 20 32 Q32 32 32 26 Q32 20 28 16" stroke="#C8903C" stroke-width="1.5" fill="none"/>
      <line x1="20" y1="8" x2="20" y2="4" stroke="#C8903C" stroke-width="1.5" stroke-linecap="round"/>
      <line x1="15" y1="32" x2="13" y2="37" stroke="#C8903C" stroke-width="1.5" stroke-linecap="round"/>
      <line x1="25" y1="32" x2="27" y2="37" stroke="#C8903C" stroke-width="1.5" stroke-linecap="round"/>
    </svg>`;

if (logoUrl && logoUrl !== "") {
  navLogo.innerHTML = `<img src="${navbarData.logoUrl}" alt="Logo" style="width:26px; height:26px; object-fit:contain;">`;
} else {
  navLogo.innerHTML = defaultSvg;
}
//navigasi
document.getElementById("nav_logo_text").innerText = nav_logo_text;
document.getElementById("nav_logo_sub").innerText = nav_logo_sub;

document.getElementById("nav_about").innerText = nav_about;
document.getElementById("nav_about2").innerText = nav_about2;

document.getElementById("nav_sertifikat").innerText = nav_sertifikat;
document.getElementById("nav_sertifikat2").innerText = nav_sertifikat2;



//----------------------------------
document.getElementById("main_judul").innerText = main_judul;
document.getElementById("main_deskripsi").innerText = main_deskripsi;

const igElement = document.getElementById("link_ig");
const igElement2= document.getElementById("foot_ig");
const tiktokElement = document.getElementById("link_tktk");
const tiktokElement2= document.getElementById("foot_tktk")
const linkedinElement = document.getElementById("link_linkedin");
const linkedinElement2= document.getElementById("foot_linkedin");

igElement.href = sosmed.instagram.url;
igElement2.href = sosmed.instagram.url;
document.getElementById("nama_ig").innerText = sosmed.instagram.nama_sosmed;

tiktokElement.href = sosmed.tiktok.url;
tiktokElement2.href = sosmed.tiktok.url;

document.getElementById("nama_tktk").innerText = sosmed.tiktok.nama_sosmed;

linkedinElement.href = sosmed.linkedin.url;
linkedinElement2.href = sosmed.linkedin.url;
document.getElementById("nama_linkedin").innerText = sosmed.linkedin.nama_sosmed;


// work experience
document.getElementById("judul_work_experience").innerText = judul_work_experience;
document.getElementById("judul_work_experience2").innerText = nav_logo_text;
const container = document.getElementById("experience-container");

pengalamanKerja.forEach((exp) => {
  const chipsHTML = exp.chips.map(chip => `<span class="exp-chip">${chip}</span>`).join("");
  
  const cardHTML = `
    <div class="exp-card">
      <div class="exp-stripe" style="background:${exp.warna};"></div>
      <div class="exp-body">
        <div class="exp-header">
          <div>
            <div class="exp-title-row">
              <span class="exp-cafe">${exp.cafe}</span>
              <span class="exp-badge" style="background:${exp.warna}26; border:1px solid ${exp.warna}73; color:${exp.warna};">
                ${exp.posisi}
              </span>
            </div>
            <div class="exp-location">📍 ${exp.lokasi}</div>
          </div>
          <div class="exp-period">${exp.periode}</div>
        </div>
        <p class="exp-desc">${exp.deskripsi}</p>
        <div class="exp-chips">
          ${chipsHTML}
        </div>
      </div>
    </div>
  `;
  
  // 3. Masukkan ke dalam container
  container.innerHTML += cardHTML;
});



// page 2 ---------------------
document.getElementById("hero_label").innerText = judul_2;

document.getElementById("judul_2").innerText = judul_2;

document.getElementById("sec_description").innerText = sec_description;

function renderCategories(dataArray, targetId) {
  const container = document.getElementById(targetId);
  let htmlContent = "";
  
  dataArray.forEach(cat => {
    const cardsHTML = cat.items.map(item => `
      <div class="cert-card" onclick="toggleCert(this)">
        <div class="cert-card-top" style="background:linear-gradient(135deg,${cat.themeColor}26,${cat.themeColor}0A); border-bottom:1px solid ${cat.themeColor}2E;">
          <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:8px;">
            <div class="cert-org" style="color:${cat.themeColor};">${item.org}</div>
            <span class="cert-year">${item.year}</span>
          </div>
          <div class="cert-name">${item.name}</div>
        </div>
        <div class="cert-card-body">
          <div class="cert-grade-badge" style="background:${cat.themeColor}1F; border:1px solid ${cat.themeColor}59;">
            <div class="cert-grade-dot" style="background:${cat.themeColor};"></div>
            <span class="cert-grade-text" style="color:${cat.themeColor};">${item.grade}</span>
          </div>
          
          <div class="cert-desc">${item.desc}</div>
          
          ${item.certImg ? `<img src="${item.certImg}" class="cert-img-preview" onclick="openImage(event, '${item.certImg}')">` : ''}
          
          <div class="cert-toggle" style="color:${cat.themeColor}; margin-top:10px;">
             <span class="toggle-text">▼ Lihat detail</span>
          </div>
        </div>
      </div>
    `).join("");
    
    htmlContent += `
      <div class="cert-category">
        <div class="cert-cat-header">
          <div class="cert-cat-icon" style="background:${cat.themeColor}26; border:1.5px solid ${cat.themeColor}66;">${cat.icon}</div>
          <div>
            <div class="cert-cat-name">${cat.categoryName}</div>
            <div class="cert-cat-line" style="background:${cat.themeColor};"></div>
          </div>
        </div>
        <div class="cert-grid">${cardsHTML}</div>
      </div>
    `;
  });
  
  container.innerHTML = htmlContent;
}

// 1. Fungsi Toggle Detail
function toggleCert(card) {
  // Tutup kartu lain yang sedang terbuka (Opsional)
  // document.querySelectorAll('.cert-card').forEach(c => { if(c !== card) c.classList.remove('active') });
  
  card.classList.toggle('active');
  const toggleText = card.querySelector('.toggle-text');
  
  if (card.classList.contains('active')) {
    toggleText.innerText = "▲ Tutup detail";
  } else {
    toggleText.innerText = "▼ Lihat detail";
  }
}

// 2. Fungsi Zoom Gambar
function openImage(event, src) {
  event.stopPropagation(); // Agar fungsi toggleCert tidak ikut jalan saat gambar diklik
  const modal = document.getElementById("certModal");
  const modalImg = document.getElementById("imgFull");
  modal.style.display = "flex";
  modalImg.src = src;
}

// 3. Fungsi Tutup Modal
function closeImage() {
  document.getElementById("certModal").style.display = "none";
}

// Jalankan Render
renderCategories(dataSertifikasi, "sertifikasi-container");
renderCategories(dataPelatihan, "pelatihan-container");



document.getElementById("footer_tagline").innerText = footer_tagline;
