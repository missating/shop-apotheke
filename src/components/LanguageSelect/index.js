import { Select } from 'antd';
import Proptypes from 'prop-types';

import './LanguageSelect.css';

const { Option } = Select;

const LanguageSelect = ({ handleChange }) => {
  return (
    <div className="language-box">
      <p>Filter By:</p>
      <Select defaultValue="" style={{ width: 120 }} onChange={handleChange}>
       <Option value="">Language</Option>
        <Option value="javascript">JavaScript</Option>
        <Option value="java">Java</Option>
        <Option value="python">Python</Option>
        <Option value="markdown">Markdown</Option>
      </Select>
    </div>
  );
};

LanguageSelect.propTypes = {
  handleChange: Proptypes.func.isRequired,
};

export default LanguageSelect;
