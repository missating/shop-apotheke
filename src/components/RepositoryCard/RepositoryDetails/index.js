import { Button, Divider } from 'antd';
import './RepositoryDetails.css';

const RepositoryDetails = ({ repository, handleStarredRepository, renderButtonText }) => {
  return (
    <>
      <div key={repository.id} className="repository-card">
        <div className="repository-details">
          <p className="repository-name">
            {repository.full_name}
          </p>
          <p className="repository-description">
            {repository.description}
          </p>
          <a href={repository.html_url} className="repository-link">
            Read More on Github
          </a>
        </div>
        <div className="repository-button">
          <Button
            type="ghost" 
            onClick={() => handleStarredRepository(repository)}>
              {renderButtonText(repository)}
          </Button>
          <p className="repository-star">
            {repository.stargazers_count}
            </p>
        </div>
      </div>
      <Divider />
    </>
  );
};

export default RepositoryDetails;
