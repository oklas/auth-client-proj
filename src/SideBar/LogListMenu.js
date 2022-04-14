import React from 'react'
import throughArea from 'react-through/lib/throughArea'
import {compose} from 'recompose'
import classNames from 'classnames'
import {matchPath} from 'react-router'
import {withRouter} from 'react-router-dom'
import injectSheet from 'react-jss'
import moment from 'moment'
import {Query} from 'react-apollo'
import SvgIcon from '../SvgIcon'
import TopMenu from './TopMenu'
import MiddleMenu from './MiddleMenu'
import LabelCount from './LabelCount'
import ScrollBar from './ScrollBar'
import {dailyLogMenuDays} from '../consts'
import styles from './LogListMenu.styles'

const LogListMenu = ({
  classes,
  history,
  dailyCounts,
  project,
}) => {
  if(!project || !dailyCounts) return null

  const match = matchPath(history.location.pathname, {
    path: '/project/:project_id/daily/:date',
    exact: true,
    strict: false,
  })
  const dateMatch = match&&match.params&&match.params.date

  return (
    <TopMenu title='My days' icon='clipboard' fill='#fff' dots={true}>
      <Query
        query={dailyCounts.query}
        variables={dailyCounts.variables}
      >
        {({ loading, error, refetch, data }) => {
          if(error) console.warn(error.message)
          if(error || loading) return null
          const today = moment().format('YYYY-MM-DD')
          const dates = (new Array(dailyLogMenuDays)).join().split(',').map(
            (_,i) => [
              'date' + moment().add(-i,'d').format('YYYYMMDD'),
              moment().add(-i,'d').format('YYYY-MM-DD'),
            ]
          )
          const filter = ([key, date]) => date===today || data[key]
          return (
            <ScrollBar>
              {dates.filter(filter).map(([key, date]) => 
                <MiddleMenu
                  key={key}
                  to={project ? `/project/${project.name}/daily/${date}` : null}
                  title={
                    <React.Fragment>
                      <div className={classNames(
                        classes.iconMiddle,
                        date===dateMatch && classes.iconMiddleCurrent,
                      )}>
                        <SvgIcon name='clipboard' fill='#fff'/>
                      </div>
                      <span>
                        {moment(date).format('ddd, D MMM  YY')}
                      </span>
                      <LabelCount> {data[key]} </LabelCount>
                    </React.Fragment>
                  }
                />
              )}
            </ScrollBar>
          )
        }}
      </Query>
    </TopMenu>
  )
}

export default compose(
  injectSheet(styles),
  throughArea('Project'),
  withRouter,
)(LogListMenu)