let defalutCity = '上海'
try {
  if (localStorage.city) {
    defalutCity = localStorage.city
  }
} catch (e) {}

export default {
  city: defalutCity
}
