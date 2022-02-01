# Movie-list API
## Deskripsi
API ini adalah back-end dari projek front-end wwwscarlet/movie-list
API ini memiliki fitur:
  - Menambah user
  - Login user
  - Menambah wishlist
  - Menghapus wishlist
  - Melihat daftar wishlist
API ini dapat diakses di https://movielist-api-tubes-arc.herokuapp.com/
## Cara penggunaan
### Menambah user
1. Buat request POST ke https://movielist-api-tubes-arc.herokuapp.com/api/auth/register dengan body json berisi username & password
2. Response akan berisi username & access token jika berhasil
3. Response akan berisi error jika user sudah ada
### Login
1. Buat request POST ke https://movielist-api-tubes-arc.herokuapp.com/api/auth/login dengan body json berisi username & password
2. Response akan berisi username & access token jika berhasil
3. Response akan berisi error jika data yang dikirimkan salah
### Menggunakan access token
Access token disematkan dalam header "x-access-token" pada tiap request manipulasi wishlist (fitur 3-5) sebagai bukti otentikasi user.
### Menambah wishlist
1. Buat request POST ke https://movielist-api-tubes-arc.herokuapp.com/api/list/add dengan header berisi token dan body berisi ID TMDB film
2. Response akan berisi entry wishlist jika berhasil
3. Response akan berisi error jika data yang dikirimkan salah atau entry sudah ada
### Menghapus wishlist
1. Buat request DELETE ke https://movielist-api-tubes-arc.herokuapp.com/api/list/delete dengan header berisi token dan body berisi ID TMDB film
2. Response akan berisi entry wishlist jika berhasil
3. Response akan berisi error jika data yang dikirimkan salah atau entry tidak ada
### Melihat daftar wishlist
1. Buat request GET ke https://movielist-api-tubes-arc.herokuapp.com/api/list dengan header berisi token
2. Response akan berisi semua entry wishlist user tersebut dalam format json
3. Response akan berisi error jika data yang dikirimkan salah atau entry tidak ada
## Credits
