import * as ReactDOM from 'react-dom'

import { composedComponent } from '@apps/react-utils'
import { BaseLayout, BaseProviders } from '@apps/base'

import { GovernanceApp } from './app'
import { QuestManagerProvider } from './app/context/QuestManagerProvider'
import { StakedTokenProvider } from './app/context/StakedTokenProvider'
import { StakingProvider } from './app/context/StakingProvider'
import { DelegateeListsProvider } from './app/context/DelegateeListsProvider'
import { GovernanceV1Provider } from './app/context/GovernanceV1Provider'

const Providers = composedComponent(
  BaseProviders,
  QuestManagerProvider,
  StakingProvider,
  StakedTokenProvider,
  GovernanceV1Provider,
  DelegateeListsProvider,
)

ReactDOM.render(
  <Providers>
    <BaseLayout>
      <GovernanceApp />
    </BaseLayout>
  </Providers>,
  document.getElementById('root'),
)
