import React, { FC } from 'react'
import styled from 'styled-components'

import { ViewportWidth } from '@apps/theme'
import { useSelectedMassetConfig } from '@apps/masset-provider'
import { InfoBox, InfoButton, ThemedSkeleton } from '@apps/dumb-components'
import { useSelectedMassetState } from '@apps/masset-hooks'

import { RewardStreamsProvider } from '../../context/RewardStreamsProvider'
import { useSelectedSaveVersion } from '../../context/SelectedSaveVersionProvider'

import { ProtocolPageHeader as PageHeader } from '../ProtocolPageHeader'
import { Save as SaveV2 } from './v2'
import { SaveOverview } from './v2/SaveOverview'
import { ToggleSave } from './ToggleSave'
import { SaveMigration } from './v1/SaveMigration'
import { OnboardingProvider } from './hooks'

const ButtonPanel = styled.div`
  display: flex;
  border: 1px solid ${({ theme }) => theme.color.defaultBorder};
  align-items: flex-start;
  justify-content: center;
  border-radius: 1rem;
  padding: 1rem;
`

const Sidebar = styled.div`
  display: flex;
  flex-direction: column;

  align-items: flex-start;
  justify-content: flex-start;
  border-radius: 1rem;

  > * {
    width: 100%;
    margin-top: 1rem;
  }

  @media (min-width: ${ViewportWidth.l}) {
    > * {
      margin-bottom: 1rem;
      margin-top: 0;
      width: 100%;
    }
  }
`

const Content = styled.div`
  @media (min-width: ${ViewportWidth.l}) {
    > div:first-child {
      flex-basis: calc(65% - 0.5rem);
    }
    > div:last-child {
      flex-basis: calc(35% - 0.5rem);
    }
  }
`

const Container = styled.div`
  display: flex;
  flex-direction: column;

  > div:last-child {
    display: flex;
    flex-direction: column;

    @media (min-width: ${ViewportWidth.l}) {
      flex-direction: row;
      justify-content: space-between;
    }
  }
`

export const EthereumSave: FC = () => {
  const massetState = useSelectedMassetState()
  const massetConfig = useSelectedMassetConfig()
  const [selectedSaveVersion] = useSelectedSaveVersion()
  const vault = massetState?.savingsContracts.v2.boostedSavingsVault
  const showMigrationView = selectedSaveVersion === 1 && massetConfig.hasV1Save

  const handleGovernanceClick = (): void => {
    window.open('https://staking.mstable.app/', '_blank')
  }

  return (
    <RewardStreamsProvider vault={vault}>
      <OnboardingProvider>
        <PageHeader title="Save" massetSwitcher />
        {massetState ? (
          <Container>
            <SaveOverview />
            <Content>
              {showMigrationView ? <SaveMigration /> : <SaveV2 />}
              <Sidebar>
                {massetConfig.hasV1Save && (
                  <ButtonPanel>
                    <ToggleSave />
                  </ButtonPanel>
                )}
                <InfoButton
                  title="Stake MTA"
                  content="Lock up MTA to participate in Governance and boost your rewards on Vault deposits."
                  onClick={handleGovernanceClick}
                />
                <InfoBox highlight subtitle="Using mStable Save">
                  <p>
                    By depositing to {`i${massetConfig.formattedName}`} you will begin earning interest on your underlying{' '}
                    {massetConfig.formattedName}. {vault ? 'Deposits to the Vault earn interest in addition to MTA rewards.' : ''}
                  </p>
                  <p>
                    Deposits from assets other than {massetConfig.formattedName} will first mint {massetConfig.formattedName} before being
                    deposited.
                  </p>
                </InfoBox>
              </Sidebar>
            </Content>
          </Container>
        ) : (
          <ThemedSkeleton height={400} />
        )}
      </OnboardingProvider>
    </RewardStreamsProvider>
  )
}
