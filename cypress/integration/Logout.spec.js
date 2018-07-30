import '../../public/config'

describe('Logout', () => {
  beforeEach(() => {
    cy.server()

    cy.route({
      method: 'GET',
      url: `${window.appConfig.glpiApiLink}/getGlpiConfig`,
      response: {
        cfg_glpi: {
          password_min_length: 10,
          password_need_number: 1,
          password_need_letter: 1,
          password_need_caps: 1,
          password_need_symbol: 1,
          url_base: 'https://your-url.com/glpi',
        },
      },
    })


    localStorage.setItem('sessionToken', 'token1234')
    localStorage.setItem('showNotifications', 'true')
    localStorage.setItem('notificationType', 'Toast')

    localStorage.setItem('currentUser',
      JSON.stringify({
        id: 123,
        name: 'exampleName',
        email: 'example@teclib.com',
        picture: null,
      }))

    localStorage.setItem('display',
      JSON.stringify({
        applicationsUploaded: false,
        devicesByOperatingSystemVersion: false,
        devicesByUsers: false,
        devicesCurrentlyManaged: false,
        filesUploaded: false,
        fleetsCurrentlyManaged: false,
        invitationsSent: false,
        numberUsers: false,
        animations: false,
        pendingInvitations: false,
      }))
  })

  it('should logout without problems', () => {
    cy.visit('/app')
    cy.get('[role="link"] > a > span > .root-36').click()
    cy.get('main').screenshot('logout', {
      capture: 'viewport',
    })
  })
})
