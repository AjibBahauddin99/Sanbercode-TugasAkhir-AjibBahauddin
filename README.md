# 📘 OrangeHRM Automation Testing with Cypress
## 📝 Final Project Quality Assurance Engineer Sanbercode
# 📌 Deskripsi

Proyek ini merupakan implementasi Automation Testing pada website demo OrangeHRM menggunakan Cypress.
Pendekatan yang digunakan:

### 🗂️ Page Object Model (POM) → memisahkan locator & aksi ke dalam class file sehingga lebih terstruktur dan mudah dirawat.

### 📡 Intercept Networking → memvalidasi request/response API ketika fitur dijalankan.

Pengujian dilakukan pada 3 fitur utama: Login, Forgot Password, dan Directory Menu.

# ⚙️ Teknologi yang Digunakan

- `Node.js`

- `Cypress`

- `JavaScript (ES6)`

- `Page Object Model (POM)`

## 📂 Struktur Folder
```sh
cypress/
 ┣ e2e/
 ┃ ┣ TugasAkhir-Sanbercode/
 ┃ ┃ ┣ Login.cy.js
 ┃ ┃ ┣ ForgotPassword.cy.js
 ┃ ┃ ┗ Directory.cy.js
 ┃
 ┣ support/
 ┃ ┗ POM-TugasAkhir-Sanbercode/
 ┃    ┣ TA-POM-Login.js
 ┃    ┣ TA-POM-ForgotPass.js
 ┃    ┗ TA-POM-Directory.js
```

# 🔑 Fitur yang Diuji
### 🔹 Login

- ✅ Login berhasil dengan kredensial valid

- ❌ Login gagal jika username/password kosong atau salah

- 📡 Intercept → validasi request login

### 🔹 Forgot Password

- ✅ Request reset password berhasil dengan username valid

- ❌ Gagal jika field username kosong

- 📡 Intercept → validasi request POST /auth/requestPasswordResetCode

### 🔹 Directory Menu

- ✅ Cari karyawan berdasarkan Nama

- ✅ Cari karyawan berdasarkan Job Title

- ✅ Cari karyawan berdasarkan Location

- 📡 Intercept → validasi request dashboard/index & dashboard/employees/locations

# 🚀 Cara Menjalankan

1. Clone repository
```sh
git clone <repository-url>
cd <project-folder>
```


2. Install dependencies
```sh
npm install
```

3. Jalankan Cypress
```sh
npx cypress open
```

Pilih test pada folder `e2e/TugasAkhir-Sanbercode/`

# 📊 Kesimpulan

Semua fitur (Login, Forgot Password, dan Directory Menu) pada web demo OrangeHRM berhasil diuji dengan Cypress.

Penerapan Page Object Model (POM) membuat kode lebih terstruktur, reusable, dan mudah dipelihara.

Penggunaan Intercept membantu memastikan API yang dipanggil sesuai dengan ekspektasi dan respons yang diterima benar.

# 👤 Author

**Ajib Bahauddin**

# 📅 Sanbercode Bootcamp – Tugas Akhir

#QualityAssurance #BootcampDigitalSkill #Sanbercode
