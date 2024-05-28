const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: 'admin',
        mongodb_password: 'admin247',

      }
    }
  }

  return {
    env: {
      mongodb_username: 'admin',
      mongodb_password: 'admin247',

    }
  }
}