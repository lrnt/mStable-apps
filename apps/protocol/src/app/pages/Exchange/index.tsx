import React, { FC } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import styled from 'styled-components'

import { useSelectedMassetState } from '@apps/base/context/data'
import { TabsV2 } from '@apps/components/core'
import { ReactComponent as MintIcon } from '@apps/components/icons/circle/mint.svg'
import { ReactComponent as RedeemIcon } from '@apps/components/icons/circle/redeem.svg'
import { ReactComponent as SwapIcon } from '@apps/components/icons/circle/swap.svg'

import { PageHeader } from '../PageHeader'
import { Mint as MintPage } from './Mint'
import { Redeem as RedeemPage } from './Redeem'
import { Swap as SwapPage } from './Swap'

const tabs = {
  swap: {
    title: 'Swap',
    subtitle: `Convert `,
    component: <SwapPage />,
    icon: <SwapIcon />,
  },
  mint: {
    title: 'Mint',
    subtitle: 'Mint',
    component: <MintPage />,
    icon: <MintIcon />,
  },
  redeem: {
    title: 'Redeem',
    subtitle: `Redeem to the underlying collateral`,
    component: <RedeemPage />,
    icon: <RedeemIcon />,
  },
}

const RecolOverlay = styled.div`
  position: absolute;
  opacity: 0.75;
  background: ${({ theme }) => theme.color.background[0]};
  z-index: 2;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;

  * {
    cursor: not-allowed;
    pointer-events: none;
  }
`

const RecolMessage = styled.p`
  position: absolute;
  z-index: 5;
  left: 0;
  right: 0;

  background: ${({ theme }) => theme.color.background[0]};
  text-align: center;
  padding: 1rem;
`

const Tabs = styled(TabsV2)`
  display: flex;
  flex-direction: column;
  align-items: center;

  > div:last-child {
    max-width: 34rem;
    width: 100%;
  }
`

const Container = styled.div`
  > div:last-child {
    position: relative;
  }
`

export const Exchange: FC = () => {
  const history = useHistory()
  const { action } = useParams<{ action: string }>()
  const activeTab = tabs[action]
  const { undergoingRecol } = useSelectedMassetState() ?? {}

  const handleTabClick = (path: string): void => {
    history.push(path)
  }

  return (
    <Container>
      <PageHeader title={activeTab.title} icon={activeTab.icon} subtitle={activeTab.subtitle} massetSwitcher />
      <div>
        {undergoingRecol && (
          <>
            <RecolOverlay />
            <RecolMessage>Currently undergoing recollateralisation</RecolMessage>
          </>
        )}
        <Tabs tabs={tabs} active={activeTab} onClick={handleTabClick} />
      </div>
    </Container>
  )
}