# Movie-list API
## Deskripsi
API ini adalah back-end dari proyek front-end [wwwscarlet/TUBES-ARC](https://github.com/wwwscarlet/TUBES-ARC)\
API ini memiliki fitur:
  - Menambah user
  - Login user
  - Menambah watchlist
  - Menghapus watchlist
  - Melihat daftar watchlist

API ini dapat diakses di [sini](https://movielist-api-tubes-arc.herokuapp.com/)
## Cara penggunaan
#### Catatan
##### Menggunakan access token
Access token disematkan dalam header "x-access-token" pada tiap request manipulasi watchlist (fitur 3-5) sebagai bukti otentikasi user.
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
### Menambah watchlist
1. Buat request POST ke https://movielist-api-tubes-arc.herokuapp.com/api/list/add dengan header berisi token dan body berisi ID TMDB film
2. Response akan berisi entry watchlist jika berhasil
3. Response akan berisi error jika data yang dikirimkan salah atau entry sudah ada
### Menghapus watchlist
1. Buat request POST ke https://movielist-api-tubes-arc.herokuapp.com/api/list/delete dengan header berisi token dan body berisi ID TMDB film
2. Response akan berisi entry watchlist jika berhasil
3. Response akan berisi error jika data yang dikirimkan salah atau entry tidak ada
### Melihat daftar watchlist
1. Buat request GET ke https://movielist-api-tubes-arc.herokuapp.com/api/list dengan header berisi token
2. Response akan berisi semua entry watchlist user tersebut dalam format json
3. Response akan berisi error jika data yang dikirimkan salah atau entry tidak ada
## Our team
### Back-end
- Aufar Ramadhan (@AufarR)
- I Putu Bakta Hari Sudewa (@sozyGithub)
- Muhammad Abdul Aziz Ghazali (@semifinal-com)
### Front-end
- Ardhan Nur Urfan (@ardhanurfan)
- Imam Rusydi Ibrahim (@ibrahimmm999)
- Made Debby Almadea Putri (@wwwscarlet)
