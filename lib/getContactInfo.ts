export const getContactInfo = () => {
  return JSON.parse(decodeURIComponent(process.env.CONTACT || ''))
}
