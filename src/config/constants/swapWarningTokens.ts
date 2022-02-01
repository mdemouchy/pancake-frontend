import { Token } from '@mdemouchy/sdk'
import tokens from 'config/constants/tokens'

const { bondly, safemoon, itam, ccar } = tokens

interface WarningTokenList {
  [key: string]: Token
}

const SwapWarningTokens = <WarningTokenList>{
  safemoon,
  bondly,
  itam,
  ccar,
}

export default SwapWarningTokens
