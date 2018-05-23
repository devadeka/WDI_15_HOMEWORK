export default function getStrenght(password) {
  const lowercase     = /[a-z]/g;
  const uppercase     = /[A-Z]/g;
  const digit         = /\d/g;
  const special_char  = /[^a-zA-Z\d\s:]/g;
  
  let strength = 0;

  strength += lowercase.test(password) ? 1 : 0
  strength += uppercase.test(password) ? 1 : 0
  strength += digit.test(password) ? 1 : 0
  strength += special_char.test(password) ? 1 : 0
  strength += (password.length>7) ? 1 : 0

  return strength;

}