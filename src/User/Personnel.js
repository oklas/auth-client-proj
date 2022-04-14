function moid(id) {
  return (id instanceof Object) ? id.toString() : id
}
  
class Personnel {
  constructor({
    users,
    invites,
    inviteCreate,
  }) {
    this.inviteCreate = inviteCreate

    this.invitesByName = {}
    this.invites = (invites || []).filter( invite => {
      if(this.invitesByName[invite.name]) return false
      this.invitesByName[invite.name] = invite
      return true
    })

    this.users = (users || []).filter( user => {
      return !this.invitesByName[user.name]
    })
    this.usersById = this.users
      .reduce((a,u) => (a[u._id]=u) && a, {})
    this.usersByName = this.users
      .reduce((a,u) => (a[u.name]=u) && a, {})

    this.asOptions = [
      ...this.users.map( user => ({
        value: `${user._id}-nn`,
        label: user.name
      })),
      ...this.users.map( user => ({
        value: `${user._id}-fl`,
        label: `${user.firstName||'?'} ${user.lastName||'?'}`
      })),
      ...this.invites.map( invite => ({
        value: invite.name + '-in',
        label: invite.name,
      })),
    ]

    this.asOptionsByName = [
      ...this.users.map( user => ({
        value: user.name,
        label: `(${user.name}) ${user.firstName||'?'} ${user.lastName||'?'}`
      })),
      ...this.invites.map( invite => ({
        value: invite.name,
        label: invite.name,
      })),
    ]
  }

  userById(id) {
    return this.usersById[moid(id)]
  }

  userByName(name) {
    return this.usersByName[name]
  }

  makeNameCorrect(name) {
    return name.replace(/[^\w\n]/,'_')
  }

  makeNameOrEmailCorrect(name) {
    return name.match(/@/) ?
      name.replace(/[^@\.\w\n]/,'_') :
      name.replace(/[^\w\n]/,'_')
  }

  isUserNameEnsureInvite(name) {
    if(this.invitesByName[name]) return false
    if(this.userByName(name)) return true
    this.inviteCreate({variables: {record: {name}}}) 
    return false
  }

  buildValue(userIdList, inviteNameList, emailsList) {
    return [
      ...userIdList.map(userId => ({
        value: `${userId}-nn`,
        label: this.usersById[userId].name
      })),
      ...inviteNameList.map(inviteName => ({
        value: `${inviteName}-in`,
        label: inviteName,
      })),
      ...(emailsList||[]).map(email => ({
        value: `${email}-em`,
        label: email,
      })),
    ]
  }

  decomposeValue(value, update) {
    const {users, invites, emails} = value.reduce( (acc, item) => {
      const itemValue = item.value
      const [, value, suffix] = itemValue.match(/^(.*)-(..)$/) || [null, itemValue]
      switch(suffix) {
        case 'nn':
        case 'fl':
          acc.users.push(this.usersById[value])
          return acc
        case 'in':
          acc.invites.push(value)
          if(!this.invitesByName[value])
            this.inviteCreate({variables: {record: {name: value}}})
          return acc
        case 'em':
          acc.emails.push(value)
          return acc
        default:
          if( value.match(/@/) ) {
            acc.emails.push(value)
          } else {
            acc.invites.push(value)
            if(!this.invitesByName[value])
              this.inviteCreate({variables: {record: {name: value}}})
          }
          return acc
      }
    }, {users:[], invites: [], emails: []})
    return {users, invites, emails}
  }

  decomposeNames(names, update) {
    const {users, invites} = names.reduce( (acc, name) => {
      this.isUserNameEnsureInvite(name) ?
        acc.users.push(name) : acc.invites.push(name)
      return acc
    }, {users:[], invites: []})
    return {users, invites}
  }
}

export default Personnel