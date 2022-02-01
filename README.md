# Movie-list API
## Deskripsi
API ini adalah back-end dari proyek front-end [wwwscarlet/movie-list](https://github.com/wwwscarlet/movie-list)
API ini memiliki fitur:
  - Menambah user
  - Login user
  - Menambah wishlist
  - Menghapus wishlist
  - Melihat daftar wishlist
API ini dapat diakses di [sini](https://movielist-api-tubes-arc.herokuapp.com/)
## Cara penggunaan
#### Catatan
##### Menggunakan access token
Access token disematkan dalam header "x-access-token" pada tiap request manipulasi wishlist (fitur 3-5) sebagai bukti otentikasi user.
##### Format body & content type
Format body berupa string json, namun content-type request adalah text/plain.
### Menambah user
1. Buat request POST ke https://movielist-api-tubes-arc.herokuapp.com/api/auth/register dengan body berisi username & password
2. Response akan berisi username & access token jika berhasil
3. Response akan berisi error jika user sudah ada
### Login
1. Buat request POST ke https://movielist-api-tubes-arc.herokuapp.com/api/auth/login dengan body berisi username & password
2. Response akan berisi username & access token jika berhasil
3. Response akan berisi error jika data yang dikirimkan salah
### Menambah wishlist
1. Buat request POST ke https://movielist-api-tubes-arc.herokuapp.com/api/list/add dengan header berisi token dan body berisi ID TMDB film
2. Response akan berisi entry wishlist jika berhasil
3. Response akan berisi error jika data yang dikirimkan salah atau entry sudah ada
### Menghapus wishlist
1. Buat request POST ke https://movielist-api-tubes-arc.herokuapp.com/api/list/delete dengan header berisi token dan body berisi ID TMDB film
2. Response akan berisi entry wishlist jika berhasil
3. Response akan berisi error jika data yang dikirimkan salah atau entry tidak ada
### Melihat daftar wishlist
1. Buat request GET ke https://movielist-api-tubes-arc.herokuapp.com/api/list dengan header berisi token
2. Response akan berisi semua entry wishlist user tersebut dalam format json
3. Response akan berisi error jika data yang dikirimkan salah atau entry tidak ada
## Special thanks
### Back-end
@semifinal-com @sozyGithub
### Front-end
@ardhanurfan @ibrahimmm999 @wwwscarlet
