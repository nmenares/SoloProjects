import React from 'react';
import ReactDom from 'react-dom';
import Clock from './clock';
import Tabs from './tabs';
import Weather from './weather';
import Autocomplete from './autocomplete';

const Root = () => {
  return (
    <div>
      <div>
        <span>Clock</span>
        <Clock/>
      </div>
      <div>
        <span>Weather</span>
        <Weather/>
      </div>
      <div className="tabs-auto">
        <div>
          <span>Tabs</span>
          <Tabs tabs={[ { title: 'one', content: 'I am the first' },
                        {  title: 'two', content: 'Second pane here' },
                        {  title: 'three', content: 'Third pane here' }]}/>
        </div>
        <div>
          <span>Autocomplete</span>
          <Autocomplete names={['alan', 'ana', 'anabelle', 'alfonso', 'alicia', 'brenda']}/>
        </div>
      </div>

    </div>
  );
}


document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  ReactDom.render(<Root/>, root);
});
