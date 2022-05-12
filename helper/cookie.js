import * as Cookie from 'cookie'

class CookieUniversal {
  constructor({ req, res, domain = '' }) {
    this.req = req
    this.res = res
    this.domain = domain
    this.isClient = typeof document === 'object' && typeof document.cookie === 'string'
    this.isServer = req && res
  }

  getCookies() {
    if (this.isClient) return document.cookie || ''
    return (this.req && this.req.headers.cookie) || ''
  }

  getResponseCookies() {
    let cookies = this.res.getHeader('Set-Cookie')
    cookies = typeof cookies === 'string' ? [cookies] : cookies
    return cookies || []
  }

  get(name, parser = null) {
    const cookies = Cookie.parse(this.getCookies())
    const value = cookies[name]
    if (parser) return parser(value)
    return value
  }

  set(name = '', value = '', options = { path: '/' }) {
    const parsedValue = typeof value === 'object' ? JSON.stringify(value) : value
    const cookie = Cookie.serialize(name, parsedValue, { domain: this.domain, ...options })
    if (this.isClient) {
      document.cookie = cookie
      return
    }

    const cookies = this.getResponseCookies()
    cookies.push(cookie)
    this.res.setHeader('Set-Cookie', cookies)
  }

  remove(name = '', options = { path: '/' }) {
    this.set(name, '', { ...options, maxAge: -1 })
  }
}

export default (context) => {
  const { req, res, env, store } = context
  const domain = ''
  const cookie = new CookieUniversal({ req, res, domain })

  return {
    get(name) {
      return cookie.get(name)
    },
    set(params) {
      const { name, value, path = '/', expiredInDays = 90 } = params
      const maxAge = 60 * 60 * 24 * expiredInDays
      cookie.set(name, value, { path, maxAge })
    },
    delete(name) {
      cookie.remove(name)
    },
  }
}
