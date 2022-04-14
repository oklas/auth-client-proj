import React from 'react'
import injectSheet from 'react-jss'
import throughDirect from 'react-through/lib/throughDirect'
import classNames from 'classnames'
import { compose } from 'recompose'

const styles = {
  infoBox: {
    display: 'block',
    minHeight: '90px',
    background: '#fff',
    width: '100%',
    boxShadow: '0 1px 1px rgba(0, 0, 0, 0.1)',
    borderRadius: '2px',
    marginBottom: '15px',
  },
  infoBoxIcon: {
    borderTopLeftRadius: '2px',
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: '2px',
    display: 'block',
    float: 'left',
    height: '90px',
    width: '90px',
    textAlign: 'center',
    fontSize: '45px',
    lineHeight: '90px',
    background: 'rgba(0, 0, 0, 0.2)',
  },
  infoBoxContent: {
    padding: '5px 10px',
    marginLeft: '90px',
  },
  infoBoxText: {
    display: 'block',
    fontSize: '14px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    textTransform: 'uppercase',
  },
  infoBoxNumber: {
    display: 'block',
    fontWeight: 'bold',
    fontSize: '18px',
  },
  bgAqua: {
    color: '#fff',
    backgroundColor: '#00c0ef',
  },
  bgYellow: {
    color: '#fff',
    backgroundColor: '#f39c12',
  },
  fa: {
    display: 'inline-block',
    font: 'normal normal normal 14px/1 FontAwesome',
    fontSize: 'inherit',
    textRendering: 'auto',
    '-webkit-font-smoothing': 'antialiased',
  },
  faCalendar: {
    '&:before': {
      content: "'\\f133'",
    }
  },
  faCalendarPlus: {
    '&:before': {
      content: "'\\f271'",
    }
  },
  progress: {
    boxShadow: 'none',
    borderRadius: '1px',
    background: 'rgba(0, 0, 0, 0.2)',
    margin: '5px -10px 5px -10px',
    height: '2px',
  },
  progressBar: {
    boxShadow: 'none',
    borderRadius: 0,
    background: '#fff',
  },
  progressDescription: {
    display: 'block',
    margin: 0,
    fontSize: '14px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  }
}

const InfoBox = ({
  theme='aqua',
  icon='calendar',
  title='header',
  name='name',
  progress=0,
  description='description',
  classes,
  ...rest
}) => (
  <div className={classNames(classes.infoBox, theme == 'aqua' ? classes.bgAqua : classes.bgYellow)} {...rest}>
    <span className={classes.infoBoxIcon}>
      <i className={classNames(classes.fa, icon == 'calendar' ? classes.faCalendar : classes.faCalendarPlus)}>
      </i>
    </span>

    <div className={classes.infoBoxContent}>
      <span className={classes.infoBoxText}>{title}</span>
      <span className={classes.infoBoxNumber}>{name}</span>

      <div className={classes.progress}>
        <div className={classes.progressBar} style={{width: `${progress}%`}}></div>
      </div>
      <span className={classes.progressDescription}>
        {description}
      </span>
    </div>
  </div>
)

const enhance = compose(
  throughDirect('SideBar'),
  injectSheet(styles),
)

export default enhance(InfoBox)