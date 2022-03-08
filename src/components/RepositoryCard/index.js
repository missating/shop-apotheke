import { Tabs } from 'antd';
import Proptypes from 'prop-types';

import LanguageSelect from 'components/LanguageSelect';
import RepositoryDetails from 'components/RepositoryCard/RepositoryDetails'

const { TabPane } = Tabs;

const RepositoryCard = ({ 
  repositories, 
  starredRepositories, 
  handleStarredRepository, 
  renderButtonText, 
  handleChange 
}) => {
  return (
    <Tabs defaultActiveKey="1" onChange={() => {}}>
      <TabPane tab="All Repositories" key="1">
        <LanguageSelect handleChange={handleChange} />
        {repositories && repositories.map((repository,index) => (
          <RepositoryDetails
            key={`${repository.id}${index}`}
            repository={repository} 
            handleStarredRepository={handleStarredRepository} 
            renderButtonText={renderButtonText}
          />
        ))}
      </TabPane>
      <TabPane tab="Starred Repositories" key="2">
        {starredRepositories.map((repository, index) => (
          <RepositoryDetails
            key={`${index}-${repository.id}`}
            repository={repository} 
            handleStarredRepository={handleStarredRepository} 
            renderButtonText={renderButtonText}
          />
        ))}
      </TabPane>
    </Tabs>
  );
};

RepositoryCard.propTypes = {
  repositories: Proptypes.array.isRequired,
  starredRepositories: Proptypes.array.isRequired,
  handleStarredRepository: Proptypes.func.isRequired,
  renderButtonText:  Proptypes.func.isRequired,
  handleChange:  Proptypes.func.isRequired,
};

export default RepositoryCard;
