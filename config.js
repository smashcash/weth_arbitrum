require('dotenv').config()

module.exports = {
  deployments: {
    netId42161: {
      weth: {
        instanceAddress: {
          '0.1': '',
          '1': '',
          '10': ''
        },
        symbol: 'WETH',
        decimals: 18
      }
    },
    netId421611: {
      weth: {
        instanceAddress: {
          '0.1': '',
          '10': '',
          '100': '',
          '500': ''
        },
        symbol: 'WETH',
        decimals: 18
      }
    }
  }
}
