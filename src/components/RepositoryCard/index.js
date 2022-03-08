import { Tabs } from 'antd';

import RepositoryDetails from 'components/RepositoryCard/RepositoryDetails'

const { TabPane } = Tabs;

const RepositoryCard = ({ repositories, starredRepositories, handleStarredRepository, renderButtonText }) => {
  return (
    <Tabs defaultActiveKey="1" onChange={() => {}}>
      <TabPane tab="All Repositories" key="1">
        {repositories && repositories.map((repository) => (
          <RepositoryDetails 
            repository={repository} 
            handleStarredRepository={handleStarredRepository} 
            renderButtonText={renderButtonText}
          />
        ))}
      </TabPane>
      <TabPane tab="Starred Repositories" key="2">
        {starredRepositories.map((repository) => (
          <RepositoryDetails 
            repository={repository} 
            handleStarredRepository={handleStarredRepository} 
            renderButtonText={renderButtonText}
          />
        ))}
      </TabPane>
    </Tabs>
  );
};

export default RepositoryCard;
