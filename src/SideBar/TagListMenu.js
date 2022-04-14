import React from 'react'
import throughArea from 'react-through/lib/throughArea'
import {compose} from 'recompose'
import classNames from 'classnames'
import injectSheet from 'react-jss'
import {matchPath} from 'react-router'
import {withRouter} from 'react-router-dom'
import SvgIcon from '../SvgIcon'
import withProjectTags from '../Project/withProjectTags'
import TopMenu from './TopMenu'
import MiddleMenu from './MiddleMenu'
import ScrollBar from './ScrollBar'
import styles from './LogListMenu.styles'

const TagListMenu = ({
  classes,
  history,
  dailyCounts,
  project,
  projectTags,
}) => {
  const match = matchPath(history.location.pathname, {
    path: '/project/:project_id/tag/:tag',
    exact: true,
    strict: false,
  })
  const tagMatch = match&&match.params&&match.params.tag
  const tags = projectTags.slice()
  tags.sort()
  return (
    !project || !dailyCounts? null :
    <TopMenu title='Subjects' icon='subject' fill='#fff' dots={true}>
      <ScrollBar>
        {tags.sort().map((tag) => (
          <MiddleMenu
            key={tag}
            to={project ? `/project/${project.name}/tag/${tag}` : null}
            title={
              <React.Fragment>
                <div className={classNames(
                  classes.iconMiddle,
                  tag===tagMatch && classes.iconMiddleCurrent,
                )}>
                  <SvgIcon name='subject' fill='#fff'/>
                </div>
                <span>
                  {tag}
                </span>
                {/*<LabelCount> {data[key]} </LabelCount>*/}
              </React.Fragment>
            }
          />
        ))}
      </ScrollBar>
    </TopMenu>
  )
}

export default compose(
  injectSheet(styles),
  throughArea('Project'),
  withRouter,
  withProjectTags,
)(TagListMenu)