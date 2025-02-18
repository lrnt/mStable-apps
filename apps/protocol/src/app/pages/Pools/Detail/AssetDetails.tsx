import React from 'react'
import type { FC } from 'react'
import styled from 'styled-components'

import { ViewportWidth } from '@apps/theme'
import { ExplorerLink } from '@apps/base/components/core'
import { ThemedSkeleton } from '@apps/dumb-components'

import { useSelectedFeederPoolState } from '../FeederPoolProvider'

const Container = styled.div`
  padding: 1rem;
  border: 1px solid ${({ theme }) => theme.color.defaultBorder};
  border-radius: 1rem;

  > h3 {
    font-weight: 500;
    font-size: 1rem;
    margin-bottom: 1rem;
  }

  > div {
    display: flex;
    flex-wrap: wrap;
  }

  > div a {
    display: flex;
    align-items: center;
    font-weight: 500;
    font-size: 1rem;
  }

  > div a:not(:last-child) {
    margin-right: 1rem;
  }

  @media (min-width: ${ViewportWidth.m}) {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;

    > h3 {
      font-size: 1.125rem;
      margin: 0;
    }

    > div a {
      font-size: 1.125rem;
    }

    > div a:not(:last-child) {
      margin-right: 2rem;
    }
  }
`

export const AssetDetails: FC = () => {
  const { address, title, masset, fasset } = useSelectedFeederPoolState()
  return (
    <Container>
      <h3>Asset Details</h3>
      <div>
        <ExplorerLink data={address} type="address">
          <h3>{title}</h3>
        </ExplorerLink>
        {[masset.token, fasset.token].map(token =>
          token.address ? (
            <ExplorerLink data={token.address} type="address" key={token.address}>
              <p>{token.symbol}</p>
            </ExplorerLink>
          ) : (
            <ThemedSkeleton width={48} height={32} key={token.address} />
          ),
        )}
      </div>
    </Container>
  )
}
