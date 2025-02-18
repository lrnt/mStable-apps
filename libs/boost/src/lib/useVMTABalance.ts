import { useMemo } from 'react'

import { BigDecimal } from '@apps/bigdecimal'

import { useTokenSubscription } from '@apps/base/context/tokens'
import { EthereumMainnet, useNetworkAddresses } from '@apps/base/context/network'

export const useVMTABalance = (): BigDecimal => {
  const networkAddresses = useNetworkAddresses<EthereumMainnet>()
  const stkMTA = useTokenSubscription(networkAddresses.ERC20.stkMTA)
  const stkBPT = useTokenSubscription(networkAddresses.ERC20.stkBPT)

  const balance = useMemo<BigDecimal | undefined>(() => {
    return stkMTA?.balance?.add(stkBPT?.balance ?? BigDecimal.ZERO)
  }, [stkBPT?.balance, stkMTA?.balance])

  return balance ?? BigDecimal.ZERO
}
