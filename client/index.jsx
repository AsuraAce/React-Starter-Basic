import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router';
import { AppContainer as HotReloader } from 'react-hot-loader';

import './index.css';

import App from './views/App/App';
import Home from './views/App/views/Home/Home';
import Page1 from './views/App/views/Page1/Page1';
import Page2 from './views/App/views/Page2/Page2';
import Page3 from './views/App/views/Page3/Page3';

import MatchWithTransition from './views/App/shared/MatchWithTransition/MatchWithTransition';

const render = () => {
  ReactDOM.render(
    <HotReloader>
      <BrowserRouter>
        <App>
          <MatchWithTransition exactly pattern="/" component={Home} />
          <MatchWithTransition exactly pattern="/page1" component={Page1} />
          <MatchWithTransition exactly pattern="/page2" component={Page2} />
          <MatchWithTransition exactly pattern="/page3" component={Page3} />
        </App>
      </BrowserRouter>
    </HotReloader>,
    document.querySelector('.root'),
  );
};

render();

if (module.hot) module.hot.accept();
