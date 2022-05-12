import cookieHelper from '~/helper/cookie'

export default (context, inject) => {
  const cookie = cookieHelper(context)
  inject('cookie', cookie)
}
