import { siteUrl } from '../config/client-config'
 
export const appName = 'Flote App'

export const appNamespace = 'Flote'

export const appDomain = 'flote.com'

export const projectRoute = 'project'

if(!siteUrl) throw new Error('there is no siteUrl configured in client-config')
export { siteUrl }

export const severityList = [
  { value: 'low', label: 'Low', color: '#27AE60' },
  { value: 'med', label: 'Med', color: '#016BFC' },
  { value: 'high', label: 'High', color: '#DF8243' },
  { value: 'crit', label: 'Crit', color: '#DF4C43' },
]

export const severityMap = (severityList
  .reduce( (acc, severity) => ({
    ...acc, [severity.value]: severity,
  }), {})
)

export const itemsPerPage = 20
export const itemsPerUnlimitedPage = 500
export const dailyLogMenuDays = 14

export const logoutRedirectUrl = '/login'

export const pollTrialsCount = 10

export { default as graphqlConfig } from '../config/graphql'

export { default as oktaConfig } from '../config/okta-client'
